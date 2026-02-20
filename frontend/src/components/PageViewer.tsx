import Link from "next/link";
import { getPageBySlug, loadPageHtml } from "@/lib/pages";

type PageViewerProps = {
  slug: string;
};

export function PageViewer({ slug }: PageViewerProps) {
  const page = getPageBySlug(slug);

  if (!page) {
    return (
      <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Page not found</h1>
          <Link className="text-blue-400 underline" href="/pages">
            View all pages
          </Link>
        </div>
      </main>
    );
  }

  const html = loadPageHtml(page);

  return (
    <main className="min-h-screen bg-neutral-950">
      <iframe title={page.title} srcDoc={html} className="block h-screen w-full border-0 bg-white" />
    </main>
  );
}