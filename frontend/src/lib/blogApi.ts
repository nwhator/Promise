export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || "http://127.0.0.1:8000";

export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch(`${API_BASE_URL}/api/blog/`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to load blog posts");
  }

  const payload = (await response.json()) as { results: BlogPost[] };
  return payload.results;
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const response = await fetch(`${API_BASE_URL}/api/blog/${slug}/`, {
    next: { revalidate: 60 },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to load blog post");
  }

  return (await response.json()) as BlogPost;
}