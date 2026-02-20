import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/blogApi";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

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
      images: post?.cover_image
        ? [{ url: post.cover_image, width: 1200, height: 630, alt: post.title }]
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
      images: post?.cover_image ? [post.cover_image] : ["/promise-nwhator-logo.svg"],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link href="/blog" className="text-blue-300 hover:text-blue-200 text-sm">
            ← Back to blog
          </Link>
          <Link href="/pages" className="text-blue-300 hover:text-blue-200 text-sm">
            All pages
          </Link>
        </div>

        <article className="rounded border border-white/10 bg-white/5 p-6">
          <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
          {post.cover_image ? (
            <div className="relative w-full h-64 mb-6 overflow-hidden rounded border border-white/10">
              <Image src={post.cover_image} alt={post.title} fill className="object-cover" unoptimized />
            </div>
          ) : null}
          {post.excerpt ? <p className="text-white/80 mb-6">{post.excerpt}</p> : null}
          <div className="prose prose-invert max-w-none whitespace-pre-wrap">{post.content}</div>
        </article>
      </div>
    </main>
  );
}