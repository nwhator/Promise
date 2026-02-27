import { getBlogPosts } from "@/lib/blogApi";
import Link from "next/link";
import { BlogChrome } from "@/components/BlogChrome";
import parse from 'html-react-parser';

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog",
  description:
    "Engineering insights, backend architecture notes, and technical write-ups by Nwhator Promise.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | PROMISE NWHATOR",
    description:
      "Engineering insights, backend architecture notes, and technical write-ups.",
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
    description:
      "Engineering insights, backend architecture notes, and technical write-ups.",
    images: ["/promise-nwhator-logo.svg"],
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <BlogChrome>
      <section className="px-4 py-8 max-w-4xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-2 text-white">
          Engineering Blog
        </h1>
        <p className="text-white/70 mb-8 text-sm">
          Insights, architecture notes, and technical write-ups by Promise
          Nwhator.
        </p>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-white/50 text-lg mb-2">No posts yet.</p>
            <p className="text-white/30 text-sm">
              Check back soon for engineering insights and updates.
            </p>
          </div>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <li
                key={post.id}
                className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-200 overflow-hidden group"
              >
                <Link href={`/blog/${post.slug}`} className="block p-6">
                  <h2 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-white/60 text-sm line-clamp-3 mb-4">
                      {typeof post.excerpt === 'string'
                        ? parse(post.excerpt.replace(/<[^>]+>/g, '').slice(0, 200))
                        : post.excerpt}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <span>
                      {post.published_at
                        ? new Date(post.published_at).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )
                        : "Draft"}
                    </span>
                    <span>·</span>
                    <span className="text-blue-400/70">Read →</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </BlogChrome>
  );
}