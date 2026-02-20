import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blogApi";
import { PAGE_ENTRIES } from "@/lib/pages";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/pages`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...PAGE_ENTRIES.filter((page) => page.slug !== "home").map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  try {
    const posts = await getBlogPosts();
    const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updated_at,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

    return [...staticEntries, ...blogEntries];
  } catch {
    return staticEntries;
  }
}