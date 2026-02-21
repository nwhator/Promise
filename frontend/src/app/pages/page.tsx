import Image from "next/image";
import Link from "next/link";
import { PAGE_ENTRIES } from "@/lib/pages";

export const metadata = {
  title: "All Pages - PROMISE NWHATOR",
  description: "Complete directory of all portfolio pages.",
};

export default function PagesDirectory() {
  return (
    <main className="min-h-screen bg-[#111621] text-white px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <Image
            src="/promise-nwhator-logo.svg"
            alt="PROMISE NWHATOR logo"
            width={220}
            height={36}
            priority
          />
          <Link href="/" className="text-blue-300 hover:text-blue-200 text-sm">
            ← Home page
          </Link>
        </header>

        <h1 className="text-2xl font-bold mb-2">All Pages</h1>
        <p className="text-white/70 mb-8 text-sm">
          Every page in the PROMISE NWHATOR portfolio.
        </p>

        <ul className="grid gap-3 sm:grid-cols-2">
          {/* Blog — dedicated Next.js route */}
          <li>
            <Link
              href="/blog"
              className="block rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all px-4 py-3"
            >
              <span className="block text-sm font-semibold">Blog</span>
              <span className="block text-xs text-white/50 mt-1">/blog</span>
            </Link>
          </li>

          {/* Admin Dashboard — dedicated Next.js route */}
          <li>
            <Link
              href="/admin-dashboard"
              className="block rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all px-4 py-3"
            >
              <span className="block text-sm font-semibold">Admin Dashboard</span>
              <span className="block text-xs text-white/50 mt-1">
                /admin-dashboard
              </span>
            </Link>
          </li>

          {/* All stitch portfolio pages */}
          {PAGE_ENTRIES.filter(
            (p) =>
              p.slug !== "blog-engineering-insights-list-1" &&
              p.slug !== "blog-engineering-insights-list-2" &&
              p.slug !== "admin-dashboard"
          ).map((page) => (
            <li key={page.slug}>
              <Link
                href={page.slug === "home" ? "/" : `/${page.slug}`}
                className="block rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all px-4 py-3"
              >
                <span className="block text-sm font-semibold">{page.title}</span>
                <span className="block text-xs text-white/50 mt-1">
                  {page.slug === "home" ? "/" : `/${page.slug}`}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}