"use client";

import { motion } from 'framer-motion';
import parse from 'html-react-parser';

export default function LumStudiosCaseStudy() {
  const htmlHeader = `
<!-- PROMISE_SHARED_HEADER_START -->
<header class="sticky top-0 z-50 border-b border-border-dark glass-nav sticky top-0 z-50 backdrop-blur-md">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="/" target="_top" class="flex items-center gap-3 text-white">
        <img src="/promise-nwhator-logo.svg" alt="PROMISE NWHATOR logo" style="height:28px;width:auto;"/>
      </a>
      <nav class="hidden md:flex items-center gap-6 text-sm">
        <a class="text-text-muted hover:text-primary transition-colors" href="/" target="_top">Home</a>
        <a class="text-text-muted hover:text-primary transition-colors" href="/about" target="_top">About</a>
        <a class="text-text-muted hover:text-primary transition-colors" href="/projects" target="_top">Projects</a>
        <a class="text-text-muted hover:text-primary transition-colors" href="/services" target="_top">Services</a>
        <a class="text-text-muted hover:text-primary transition-colors" href="/technologies" target="_top">Technologies</a>
        <a class="text-text-muted hover:text-primary transition-colors" href="/resume" target="_top">Resume</a>
        <a class="text-text-muted hover:text-primary transition-colors" href="/contact" target="_top">Contact</a>
        <a class="text-text-muted hover:text-primary transition-colors" href="/blog" target="_top">Blog</a>
      </nav>
    </div>
  </div>
</header>
<!-- PROMISE_SHARED_HEADER_END -->
    `;

  const htmlFooter = `
<!-- PROMISE_SHARED_FOOTER_START -->
<footer class="border-t border-border-dark glass-nav sticky top-0 z-50 mt-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
    <p class="text-sm text-text-muted">© <span id="copyright-year"></span> Promise Ayobami Nwhator. All rights reserved.</p>
    <div class="flex items-center gap-4 text-sm">
      <a href="https://github.com/nwhator" target="_blank" rel="noreferrer" class="text-text-muted hover:text-primary transition-colors">GitHub</a>
      <a href="https://linkedin.com/in/nwhator" target="_blank" rel="noreferrer" class="text-text-muted hover:text-primary transition-colors">LinkedIn</a>
    </div>
  </div>
</footer>
<!-- PROMISE_SHARED_FOOTER_END -->
    `;

  return (
    <div className="stitch-page-root bg-background-dark min-h-screen text-white overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.08)_0%,transparent_50%)] pointer-events-none" />

      {parse(htmlHeader)}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-12 lg:grid-cols-2 items-center mb-32"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-mono text-primary font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              SaaS Production Case Study
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9]">
              The Lum <br />
              <span className="text-primary">Studios SaaS</span>
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed max-w-xl">
              Architecting a unified booking platform for high-end photography services with automated scheduling and deep SMTP integration.
            </p>
          </div>
          <div className="relative aspect-video rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
            <img src="/lum_studios.png" className="w-full h-full object-cover" alt="Lum Studios Interface" />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />
          </div>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-12">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="sticky top-24 space-y-8">
              <div className="glass rounded-3xl p-8 border border-white/5 space-y-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 font-mono">Project Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Tech Stack</span>
                    <span className="text-white font-medium text-right">Next.js, Node, Supabase</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Industry</span>
                    <span className="text-white font-medium">Creative / Photography</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Core Engine</span>
                    <span className="text-white font-medium">Custom Scheduling</span>
                  </div>
                </div>
                <div className="h-px bg-white/5" />
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-primary">PostgreSQL</span>
                  <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-primary">Stripe API</span>
                  <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-primary">Tailwind CSS</span>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20">
                <h3 className="text-xs font-black uppercase tracking-widest text-primary font-mono mb-4">Live Project</h3>
                <a href="https://thelumstudios.com/" target="_blank" rel="noreferrer" className="flex items-center justify-between group text-white font-bold">
                  thelumstudios.com
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-20"
          >
            <section className="space-y-8">
              <h2 className="text-3xl font-bold font-display">The Challenge</h2>
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                The Lum Studios required a system that could handle complex booking logic—balancing photographer availability, studio room scheduling, and client preferences—all while providing a premium user experience.
              </p>
              <div className="p-8 glass rounded-3xl border-l-4 border-primary">
                <p className="text-slate-300 italic font-light leading-relaxed">
                  "The primary goal was to eliminate manual booking confirmation and provide a seamless, 24/7 self-service portal for clients."
                </p>
              </div>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-bold font-display">The Solution</h2>
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                I built a custom state machine to handle the booking lifecycle, from initial draft through payment verification and final confirmation. The backend ensures that no double-bookings can occur at the database level using atomic transactions.
              </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2 pt-10 border-t border-white/10">
              <div className="rounded-3xl bg-surface p-8 border border-white/5">
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-mono font-black">Admin Savings</p>
                <p className="text-5xl font-black text-primary tracking-tighter">80%</p>
                <p className="text-sm text-slate-400 mt-4 font-light">Reduction in manual coordination time.</p>
              </div>
              <div className="rounded-3xl bg-surface p-8 border border-white/5">
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-mono font-black">User Experience</p>
                <p className="text-5xl font-black text-primary tracking-tighter">5-Star</p>
                <p className="text-sm text-slate-400 mt-4 font-light">Rated high for ease of use by clients.</p>
              </div>
            </section>
          </motion.div>
        </div>
      </main>

      {parse(htmlFooter)}
    </div>
  );
}
