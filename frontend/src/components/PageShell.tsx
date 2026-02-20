import Image from "next/image";
import Link from "next/link";

type PageShellProps = {
  title: string;
  html: string;
};

export function PageShell({ title, html }: PageShellProps) {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur px-4 py-3">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/promise-nwhator-logo.svg"
              alt="PROMISE NWHATOR logo"
              width={180}
              height={28}
              priority
            />
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/" className="hover:text-blue-300 transition-colors">
              Home
            </Link>
            <Link href="/pages" className="hover:text-blue-300 transition-colors">
              All Pages
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl p-4">
        <div className="mb-3 flex items-center justify-between gap-4">
          <h1 className="text-sm md:text-base text-white/90 font-semibold">{title}</h1>
          <Link className="text-sm text-blue-300 hover:text-blue-200" href="/pages">
            Switch page
          </Link>
        </div>

        <iframe
          title={title}
          srcDoc={html}
          className="h-[calc(100vh-170px)] w-full rounded-lg border border-white/10 bg-white"
        />
      </section>
    </main>
  );
}