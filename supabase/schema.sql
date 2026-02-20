-- PROMISE NWHATOR Supabase SQL setup
-- Run this in Supabase SQL Editor.

create extension if not exists "pgcrypto";

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text not null,
  cover_image_path text,
  is_published boolean not null default true,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_blog_posts_updated_at on public.blog_posts;
create trigger trg_blog_posts_updated_at
before update on public.blog_posts
for each row
execute function public.set_updated_at();

alter table public.blog_posts enable row level security;

drop policy if exists "public can read published blog posts" on public.blog_posts;
create policy "public can read published blog posts"
on public.blog_posts
for select
to anon, authenticated
using (
  is_published = true and (published_at is null or published_at <= now())
);

drop policy if exists "service role can manage blog posts" on public.blog_posts;
create policy "service role can manage blog posts"
on public.blog_posts
for all
to service_role
using (true)
with check (true);

insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;

drop policy if exists "public can read blog images" on storage.objects;
create policy "public can read blog images"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'blog-images');

drop policy if exists "service role can upload blog images" on storage.objects;
create policy "service role can upload blog images"
on storage.objects
for insert
to service_role
with check (bucket_id = 'blog-images');
