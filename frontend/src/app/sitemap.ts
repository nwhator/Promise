import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blogApi";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    // We can add other routes manually here or dynamically loop if we kept the array, but we'll add the main ones
    ...[
      "about",
      "projects",
      "project-detail",
      "services",
      "technologies",
      "resume",
      "contact",
      "secure-client-login",
      "client-dashboard",
      "admin-dashboard",
      "admin-generate-project-invoice",
      "invoicing-payment-history",
      "messages-collaboration-hub",
      "onboarding-success",
      "welcome-kit-preview",
      "api-documentation",
      "article-scalable-api-guide",
      "case-study-architectural-deep-dive",
      "blog-engineering-insights-list-1",
      "blog-engineering-insights-list-2",
      "fastapi-cheat-sheet"
    ].map((slug) => ({
      url: `${baseUrl}/${slug}`,
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