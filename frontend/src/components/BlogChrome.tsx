"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type BlogChromeProps = {
  children: React.ReactNode;
};

export function BlogChrome({ children }: BlogChromeProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col">
      {/* Dynamic Background Glow (Matching Homepage) */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.1)_0%,transparent_50%)] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 glass-nav backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/promise-nwhator-logo.svg"
                alt="PROMISE NWHATOR logo"
                width={180}
                height={28}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/" className="text-slate-400 hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-slate-400 hover:text-primary transition-colors">About</Link>
              <Link href="/projects" className="text-slate-400 hover:text-primary transition-colors">Projects</Link>
              <Link href="/services" className="text-slate-400 hover:text-primary transition-colors">Services</Link>
              <Link href="/technologies" className="text-slate-400 hover:text-primary transition-colors">Technologies</Link>
              <Link href="/resume" className="text-slate-400 hover:text-primary transition-colors">Resume</Link>
              <Link href="/contact" className="text-slate-400 hover:text-primary transition-colors">Contact</Link>
              <Link href="/blog" className="text-white font-bold">Blog</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-nav-dropdown md:hidden w-full">
            <nav className="flex flex-col p-6 gap-6 text-[16px] font-bold">
              <Link href="/" className="text-slate-400">Home</Link>
              <Link href="/about" className="text-slate-400">About</Link>
              <Link href="/projects" className="text-slate-400">Projects</Link>
              <Link href="/services" className="text-slate-400">Services</Link>
              <Link href="/technologies" className="text-slate-400">Technologies</Link>
              <Link href="/resume" className="text-slate-400">Resume</Link>
              <Link href="/contact" className="text-slate-400">Contact</Link>
              <Link href="/blog" className="text-white">Blog</Link>
            </nav>
          </div>
        )}
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