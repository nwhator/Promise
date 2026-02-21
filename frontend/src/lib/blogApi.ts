import { supabase } from "@/lib/supabase";

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image_path: string | null;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("is_published", true)
      .order("published_at", { ascending: false });

    if (error) {
      console.error("[blogApi] getBlogPosts error:", error.message);
      return [];
    }

    return (data as BlogPost[]) ?? [];
  } catch {
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .single();

    if (error) {
      return null;
    }

    return data as BlogPost;
  } catch {
    return null;
  }
}

// Admin: get all posts regardless of published state
export async function getAllBlogPostsAdmin(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return [];
    }

    return (data as BlogPost[]) ?? [];
  } catch {
    return [];
  }
}

// Admin: upsert a blog post
export async function upsertBlogPost(
  post: Partial<BlogPost> & { title: string; content: string; slug: string }
): Promise<{ data: BlogPost | null; error: string | null }> {
  const { data, error } = await supabase
    .from("blog_posts")
    .upsert(
      {
        ...post,
        updated_at: new Date().toISOString(),
        published_at: post.is_published
          ? post.published_at ?? new Date().toISOString()
          : null,
      },
      { onConflict: "slug" }
    )
    .select()
    .single();

  if (error) {
    return { data: null, error: error.message };
  }

  return { data: data as BlogPost, error: null };
}

// Admin: delete a blog post by id
export async function deleteBlogPost(
  id: string
): Promise<{ error: string | null }> {
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  return { error: error ? error.message : null };
}