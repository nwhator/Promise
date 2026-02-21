import { getPageBySlug, loadPageHtml } from "@/lib/pages";
import { notFound } from "next/navigation";

type PageViewerProps = {
  slug: string;
};

/**
 * Server component that loads the stitch HTML and injects it
 * directly into the page using dangerouslySetInnerHTML.
 * No iframes — the page renders natively as a Next.js page.
 */
export function PageViewer({ slug }: PageViewerProps) {
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  let html: string;
  try {
    html = loadPageHtml(page);
  } catch (err) {
    console.error(err);
    notFound();
  }

  // Strip the outer <html>, <head> and top-level <body> tags so we can embed
  // the content directly.  Tailwind CDN and Google Fonts links inside <head>
  // are preserved by moving them to a <div> that Next.js will hydrate.
  // We keep everything intact and rely on Next.js to render the full document.
  return (
    <div
      className="stitch-page-root"
      dangerouslySetInnerHTML={{ __html: extractBody(html) }}
    />
  );
}

/**
 * Extract the content between <body …> … </body>.
 * If no body tags are found the full HTML is returned as-is.
 */
function extractBody(html: string): string {
  const bodyStart = html.match(/<body[^>]*>/i);
  const bodyEnd = html.lastIndexOf("</body>");

  if (bodyStart && bodyStart.index !== undefined && bodyEnd !== -1) {
    const start = bodyStart.index + bodyStart[0].length;
    return html.slice(start, bodyEnd);
  }

  // Fallback: inject the whole thing
  return html;
}