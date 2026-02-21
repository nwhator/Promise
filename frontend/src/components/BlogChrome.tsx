import Image from "next/image";
import Link from "next/link";

type BlogChromeProps = {
  children: React.ReactNode;
};

export function BlogChrome({ children }: BlogChromeProps) {
  return (
    <main className="min-h-screen bg-[#111621] text-white flex flex-col">
      {/* Header */}
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
            <Link
              href="/"
              className="text-white/60 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-blue-300 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-white/60 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1">{children}</div>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Promise Ayobami Nwhator. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nwhator"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nwhator"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}