import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageViewer } from "@/components/PageViewer";
import { getPageBySlug, PAGE_ENTRIES } from "@/lib/pages";

type Props = {
  params: Promise<{ slug: string }>;
};

// These slugs have dedicated Next.js routes — exclude from dynamic catch-all
const DEDICATED_ROUTES = new Set([
  "blog",
  "admin-dashboard",
]);

export function generateStaticParams() {
  return PAGE_ENTRIES.filter(
    (page) => page.slug !== "home" && !DEDICATED_ROUTES.has(page.slug)
  ).map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    return {
      title: "Page not found",
      description: "The requested page could not be found.",
    };
  }

  const canonicalPath = slug === "home" ? "/" : `/${slug}`;
  const description = `${page.title} — PROMISE NWHATOR portfolio.`;

  return {
    title: page.title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: page.title,
      description,
      url: canonicalPath,
      type: "website",
      images: [
        {
          url: "/promise-nwhator-logo.svg",
          width: 1200,
          height: 630,
          alt: "PROMISE NWHATOR",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description,
      images: ["/promise-nwhator-logo.svg"],
    },
  };
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;

  // Guard dedicated routes
  if (DEDICATED_ROUTES.has(slug)) {
    notFound();
  }

  const page = getPageBySlug(slug);

  if (!page || page.slug === "home") {
    notFound();
  }

  return <PageViewer slug={slug} />;
}