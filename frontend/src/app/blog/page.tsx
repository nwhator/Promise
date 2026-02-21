import { getBlogPosts } from "@/lib/blogApi";
import Link from "next/link";
import { BlogChrome } from "@/components/BlogChrome";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog",
  description: "Engineering insights, backend architecture notes, and technical write-ups by Nwhator Promise.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | PROMISE NWHATOR",
    description: "Engineering insights, backend architecture notes, and technical write-ups.",
    url: "/blog",
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
    title: "Blog | PROMISE NWHATOR",
    description: "Engineering insights, backend architecture notes, and technical write-ups.",
    images: ["/promise-nwhator-logo.svg"],
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <BlogChrome>
      <section className="px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">Blog</h1>
        <p className="text-white/70 mb-6 text-sm">
          Posts created from Django admin and served by the backend API.
        </p>

        {posts.length === 0 ? (
          <p className="text-white/70">No posts yet. Add one in Django admin.</p>
        ) : (
          <ul className="grid gap-4">
            {posts.map((post) => (
              <li key={post.id} className="rounded border border-white/10 bg-white/5 p-4">
                <Link href={`/blog/${post.slug}`} className="text-lg font-semibold hover:text-blue-300">
                  {post.title}
                </Link>
                {post.excerpt ? <p className="text-white/70 mt-2">{post.excerpt}</p> : null}
              </li>
            ))}
          </ul>
        )}
      </section>
    </BlogChrome>
  );
}