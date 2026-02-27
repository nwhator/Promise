"use client";

import { motion } from 'framer-motion';
import parse from 'html-react-parser';

export default function OJSInfrastructureCaseStudy() {
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

  const journalSites = [
    { name: "Nigerian Dental Journal", url: "https://nigeriandentaljournal.ng/", initials: "NDJ" },
    { name: "Nigerian Health Sciences Journal", url: "https://nigerianhsjournal.ng/", initials: "NHSJ" },
    { name: "Nigerian Jounral of Basic Clinical Sciences", url: "https://njbcs.ng/", initials: "NJBCS" },
    { name: "Bayero Journal of Dentistry", url: "https://bjd.ng/", initials: "BJD" }
  ];

  return (
    <div className="stitch-page-root bg-background-dark min-h-screen text-white overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08)_0%,transparent_50%)] pointer-events-none" />

      {parse(htmlHeader)}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-12 lg:grid-cols-2 items-center mb-32"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-mono text-emerald-500 font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Mission Critical Infrastructure
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9]">
              Medical Journal <br />
              <span className="text-emerald-500">OJS Network</span>
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed max-w-xl">
              Architecting a secure, scalable multi-journal ecosystem for national academic publishing centers with zero downtime and hardened infrastructure.
            </p>
          </div>
          <div className="relative aspect-video rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
            <img src="/ojs_journals.png" className="w-full h-full object-cover" alt="OJS Journals Interface" />
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
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 font-mono">System Specs</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Core Engine</span>
                    <span className="text-white font-medium">OJS v3.x</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Environment</span>
                    <span className="text-white font-medium">Hardened Linux</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Database</span>
                    <span className="text-white font-medium">MySQL Optimized</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Security</span>
                    <span className="text-white font-medium">SSL + Firewall</span>
                  </div>
                </div>
                <div className="h-px bg-white/5" />
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-emerald-500">SMTP Relay</span>
                  <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-emerald-500">PHP-FPM Pools</span>
                  <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-emerald-500">S3 Backups</span>
                </div>
              </div>

              {/* Live Links Section */}
              <div className="glass rounded-3xl p-8 border border-emerald-500/20 bg-emerald-500/5">
                <h3 className="text-xs font-black uppercase tracking-widest text-emerald-500 font-mono mb-6">Live Network</h3>
                <div className="space-y-4">
                  {journalSites.map((site, i) => (
                    <a
                      key={i}
                      href={site.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/50 transition-all font-medium text-sm text-slate-300 hover:text-white"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-[10px] font-black text-emerald-500">
                          {site.initials}
                        </div>
                        {site.name}
                      </div>
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                    </a>
                  ))}
                </div>
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
              <h2 className="text-3xl font-bold">The Challenge</h2>
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                Academic journals like the <span className="text-white font-medium">Nigerian Dental Journal</span> and <span className="text-white font-medium">Nigerian Health Systems Journal</span> required a unified, robust platform to manage complex peer-review workflows, article submissions, and permanent digital archiving.
              </p>
              <div className="p-8 glass rounded-3xl border-l-4 border-emerald-500">
                <p className="text-slate-300 italic font-light leading-relaxed">
                  "Availability and data integrity are non-negotiable for academic publishing. Every article must be securely indexed and permanently accessible to a global audience."
                </p>
              </div>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-bold">The Strategy</h2>
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                I architected a multi-tenant OJS deployment with isolated PHP-FPM pools for each journal instance to prevent cross-contamination and ensure resource allocation. The infrastructure involves:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <h4 className="text-white font-bold mb-2">Hardened Security</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">Zero breaches since implementation through strict firewall rules and SSL/TLS optimization.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <h4 className="text-white font-bold mb-2">SMTP Isolation</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">Custom mail delivery pipelines optimized for 100% deliverability of time-sensitive peer review invites.</p>
                </div>
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2 pt-10 border-t border-white/10">
              <div className="rounded-3xl bg-surface p-8 border border-white/5">
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-mono font-black">Uptime Reliability</p>
                <p className="text-5xl font-black text-emerald-500 tracking-tighter">99.99%</p>
                <p className="text-sm text-slate-400 mt-4 font-light">Continuous global access for research citation.</p>
              </div>
              <div className="rounded-3xl bg-surface p-8 border border-white/5">
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-mono font-black">Deliverability Rate</p>
                <p className="text-5xl font-black text-emerald-500 tracking-tighter">100%</p>
                <p className="text-sm text-slate-400 mt-4 font-light">Zero missed peer-review notifications.</p>
              </div>
            </section>
          </motion.div>
        </div>
      </main>

      {parse(htmlFooter)}
    </div>
  );
}
