import { getBlogPosts } from "@/lib/blogApi";
import Link from "next/link";
import Image from "next/image";
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
        <h1 className="text-4xl md:text-5xl font-black mb-3 text-foreground tracking-tight">
          Insights & <span className="text-primary">Publications</span>
        </h1>
        <p className="text-foreground/60 mb-10 text-base md:text-lg max-w-2xl font-light leading-relaxed">
          Deep dives into backend architecture, system design patterns, and engineering excellence by Promise Nwhator.
        </p>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-foreground/50 text-lg mb-2">No posts yet.</p>
            <p className="text-foreground/30 text-sm">
              Check back soon for engineering insights and updates.
            </p>
          </div>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <li
                key={post.id}
                className="rounded-xl border border-border bg-surface hover:bg-surface-brighter hover:border-primary/30 transition-all duration-200 overflow-hidden group flex flex-col"
              >
                <Link href={`/blog/${post.slug}`} className="block flex-1">
                  {post.cover_image_path && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={post.cover_image_path}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-foreground/60 text-sm line-clamp-3 mb-4">
                        {typeof post.excerpt === 'string'
                          ? parse(post.excerpt.replace(/<[^>]+>/g, '').slice(0, 200))
                          : post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-xs text-foreground/40">
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
                      <span className="text-primary group-hover:underline">Read →</span>
                    </div>
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