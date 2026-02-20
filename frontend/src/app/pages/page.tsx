import Image from "next/image";
import Link from "next/link";
import { PAGE_ENTRIES } from "@/lib/pages";

export default function PagesDirectory() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white px-4 py-8">
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
            Open home page
          </Link>
        </header>

        <h1 className="text-2xl font-bold mb-2">All stitched pages</h1>
        <p className="text-white/70 mb-6 text-sm">
          Every page below is sourced from the HTML source folder and rendered in Next.js.
        </p>

        <ul className="grid gap-3 sm:grid-cols-2">
          <li>
            <Link
              href="/blog"
              className="block rounded border border-white/10 bg-white/5 hover:bg-white/10 transition-colors px-4 py-3"
            >
              <span className="block text-sm font-semibold">Blog (API)</span>
              <span className="block text-xs text-white/60 mt-1">/blog</span>
            </Link>
          </li>
          {PAGE_ENTRIES.map((page) => (
            <li key={page.slug}>
              {page.slug === "blog-engineering-insights-list-1" ||
              page.slug === "blog-engineering-insights-list-2" ? (
                <Link
                  href="/blog"
                  className="block rounded border border-white/10 bg-white/5 hover:bg-white/10 transition-colors px-4 py-3"
                >
                  <span className="block text-sm font-semibold">{page.title} → Blog (API)</span>
                  <span className="block text-xs text-white/60 mt-1">/blog</span>
                </Link>
              ) : (
              <Link
                href={page.slug === "home" ? "/" : `/${page.slug}`}
                className="block rounded border border-white/10 bg-white/5 hover:bg-white/10 transition-colors px-4 py-3"
              >
                <span className="block text-sm font-semibold">{page.title}</span>
                <span className="block text-xs text-white/60 mt-1">
                  {page.slug === "home" ? "/" : `/${page.slug}`}
                </span>
              </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}