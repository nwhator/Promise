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
  try {
    const response = await fetch(`${API_BASE_URL}/api/blog/`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return [];
    }

    const payload = (await response.json()) as { results?: BlogPost[] } | BlogPost[];

    if (Array.isArray(payload)) {
      return payload;
    }

    if (Array.isArray(payload.results)) {
      return payload.results;
    }

    return [];
  } catch {
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blog/${slug}/`, {
      next: { revalidate: 60 },
    });

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as BlogPost;
  } catch {
    return null;
  }
}