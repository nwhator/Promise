import Image from "next/image";
import Link from "next/link";

type BlogChromeProps = {
  children: React.ReactNode;
};

export function BlogChrome({ children }: BlogChromeProps) {
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
            <Link href="/blog" className="hover:text-blue-300 transition-colors">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} PROMISE NWHATOR
      </footer>
    </main>
  );
}