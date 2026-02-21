-- ============================================================
-- PROMISE NWHATOR — Supabase SQL Schema
-- Run this in the Supabase SQL Editor.
-- ============================================================

-- Extensions
create extension if not exists "pgcrypto";

-- ──────────────────────────────────────────────────────────────
-- BLOG POSTS
-- ──────────────────────────────────────────────────────────────
create table if not exists public.blog_posts (
  id              uuid        primary key default gen_random_uuid(),
  title           text        not null,
  slug            text        not null unique,
  excerpt         text,
  content         text        not null,
  cover_image_path text,
  is_published    boolean     not null default true,
  published_at    timestamptz,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- Auto-update the updated_at column
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

-- RLS: enable
alter table public.blog_posts enable row level security;

-- Policy: anyone can read published posts
drop policy if exists "public can read published blog posts" on public.blog_posts;
create policy "public can read published blog posts"
on public.blog_posts
for select
to anon, authenticated
using (
  is_published = true
  and (published_at is null or published_at <= now())
);

-- Policy: authenticated admin users can manage all posts
drop policy if exists "authenticated users can manage blog posts" on public.blog_posts;
create policy "authenticated users can manage blog posts"
on public.blog_posts
for all
to authenticated
using (true)
with check (true);

-- Policy: service role can do anything
drop policy if exists "service role can manage blog posts" on public.blog_posts;
create policy "service role can manage blog posts"
on public.blog_posts
for all
to service_role
using (true)
with check (true);


-- ──────────────────────────────────────────────────────────────
-- CONTACT MESSAGES
-- ──────────────────────────────────────────────────────────────
create table if not exists public.contact_messages (
  id         uuid        primary key default gen_random_uuid(),
  name       text        not null,
  email      text        not null,
  subject    text        not null,
  message    text        not null,
  is_read    boolean     not null default false,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

-- Policy: anon users can INSERT (contact form submissions)
drop policy if exists "anon can submit contact messages" on public.contact_messages;
create policy "anon can submit contact messages"
on public.contact_messages
for insert
to anon, authenticated
with check (true);

-- Policy: authenticated admin users can read and manage messages
drop policy if exists "authenticated users can manage contact messages" on public.contact_messages;
create policy "authenticated users can manage contact messages"
on public.contact_messages
for all
to authenticated
using (true)
with check (true);

-- Policy: service role full access
drop policy if exists "service role can manage contact messages" on public.contact_messages;
create policy "service role can manage contact messages"
on public.contact_messages
for all
to service_role
using (true)
with check (true);


-- ──────────────────────────────────────────────────────────────
-- STORAGE — Blog Cover Images
-- ──────────────────────────────────────────────────────────────
insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;

-- Anyone can read published blog images
drop policy if exists "public can read blog images" on storage.objects;
create policy "public can read blog images"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'blog-images');

-- Authenticated admins can upload blog images
drop policy if exists "authenticated users can upload blog images" on storage.objects;
create policy "authenticated users can upload blog images"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'blog-images');

-- Service role full access to storage
drop policy if exists "service role can manage blog images" on storage.objects;
create policy "service role can manage blog images"
on storage.objects
for all
to service_role
using (bucket_id = 'blog-images')
with check (bucket_id = 'blog-images');


-- ──────────────────────────────────────────────────────────────
-- NOTES
-- ──────────────────────────────────────────────────────────────
-- 1. Create an admin user in Supabase Auth → Authentication → Users.
--    Use the same email/password you'll enter on /admin-dashboard.
--
-- 2. To allow the contact form API route to bypass RLS,
--    set SUPABASE_SERVICE_ROLE_KEY in frontend/.env.local
--    (Supabase Dashboard → Settings → API → service_role key).
--
-- 3. For production, update NEXT_PUBLIC_SITE_URL in frontend/.env.local
--    to your deployed domain.
-- ──────────────────────────────────────────────────────────────
