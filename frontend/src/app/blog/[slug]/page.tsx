import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/blogApi";
import { BlogChrome } from "@/components/BlogChrome";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  const description = post?.excerpt || "Engineering article by Nwhator Promise.";
  const canonicalPath = `/blog/${slug}`;

  return {
    title: post?.title ?? "Blog Post",
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: post?.title ?? "Blog Post",
      description,
      url: canonicalPath,
      type: "article",
      images: post?.cover_image_path
        ? [{ url: post.cover_image_path, width: 1200, height: 630, alt: post.title }]
        : [
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
      title: post?.title ?? "Blog Post",
      description,
      images: post?.cover_image_path
        ? [post.cover_image_path]
        : ["/promise-nwhator-logo.svg"],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const publishedDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    : null;

  return (
    <BlogChrome>
      <section className="px-4 py-8 max-w-3xl mx-auto w-full">
        <div className="mb-6">
          <Link
            href="/blog"
            className="text-blue-300 hover:text-blue-200 text-sm inline-flex items-center gap-1"
          >
            ← Back to blog
          </Link>
        </div>

        <article className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
          {post.cover_image_path ? (
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={post.cover_image_path}
                alt={post.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ) : null}

          <div className="p-6 sm:p-8">
            <header className="mb-6">
              <h1 className="text-3xl font-bold text-white mb-3">
                {post.title}
              </h1>
              {publishedDate && (
                <time className="text-white/40 text-sm">{publishedDate}</time>
              )}
              {post.excerpt && (
                <p className="text-white/70 text-base mt-4 leading-relaxed border-l-2 border-blue-500/50 pl-4">
                  {post.excerpt}
                </p>
              )}
            </header>

            <div className="prose prose-invert max-w-none whitespace-pre-wrap text-white/80 leading-relaxed">
              {post.content}
            </div>
          </div>
        </article>
      </section>
    </BlogChrome>
  );
}