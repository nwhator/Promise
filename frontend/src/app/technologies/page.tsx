"use client";

import React from 'react';
import type { Metadata } from 'next';
import { BlogChrome } from '@/components/BlogChrome';
import { motion } from 'framer-motion';

export default function Technologies() {
  return (
    <BlogChrome>
      <div className="relative overflow-x-hidden min-h-screen">
        {/* Dynamic Background Glow */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.1)_0%,transparent_50%)] pointer-events-none" />
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />

        <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-10 py-16 relative z-10">
          {/* Hero Section */}
          <section className="mb-20 mt-8 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border w-fit shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-mono font-bold text-foreground/70">System Status: Optimized</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight font-display text-foreground">
                <span className="text-primary">&gt;</span> getStack()
              </h1>
              <p className="text-foreground/60 text-xl md:text-2xl max-w-3xl font-light leading-relaxed">
                Specializing in high-performance digital architectures that scale. From Next.js SaaS products to hardened OJS journal infrastructure.
              </p>
            </motion.div>
          </section>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* SaaS & Fullstack Cluster */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative bg-surface border border-border rounded-3xl p-8 md:p-10 hover:border-primary/50 transition-all duration-500 shadow-xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-9xl text-primary">dynamic_form</span>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-primary">deployed_code</span>
                </div>
                <h2 className="text-3xl font-black text-foreground">SaaS & Modern Web</h2>
              </div>
              <p className="text-foreground/60 mb-10 text-lg font-light leading-relaxed">Building scalable, performant SaaS products and booking engines using modern React ecosystems.</p>
              
              <div className="space-y-6">
                <div className="bg-surface-brighter/50 rounded-2xl p-6 border border-border hover:border-primary/30 transition-all">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-foreground text-lg">Next.js & React</span>
                    <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">Master</span>
                  </div>
                  <div className="w-full bg-foreground/5 rounded-full h-1.5 mb-3">
                    <div className="bg-primary h-1.5 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" style={{ width: '98%' }}></div>
                  </div>
                  <p className="text-xs text-foreground/40 font-mono tracking-tight">App Router • SSR • Server Actions • Performance Optimization</p>
                </div>

                <div className="bg-surface-brighter/50 rounded-2xl p-6 border border-border hover:border-primary/30 transition-all">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-foreground text-lg">Node.js Ecosystem</span>
                    <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">Core</span>
                  </div>
                  <div className="w-full bg-foreground/5 rounded-full h-1.5 mb-3">
                    <div className="bg-primary h-1.5 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" style={{ width: '95%' }}></div>
                  </div>
                  <p className="text-xs text-foreground/40 font-mono tracking-tight">Express • REST APIs • JWT Auth • SMTP Systems</p>
                </div>
              </div>
            </motion.div>

            {/* PHP & E-commerce Cluster */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-surface border border-border rounded-3xl p-8 md:p-10 hover:border-accent/50 transition-all duration-500 shadow-xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-9xl text-accent">shopping_bag</span>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-accent">database</span>
                </div>
                <h2 className="text-3xl font-black text-foreground">High-Performance PHP</h2>
              </div>
              <p className="text-foreground/60 mb-10 text-lg font-light leading-relaxed">Custom e-commerce engines and business logic processors built on stable PHP/MySQL foundations.</p>
              
              <div className="space-y-6">
                <div className="bg-surface-brighter/50 rounded-2xl p-6 border border-border hover:border-accent/30 transition-all">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-foreground text-lg">Native PHP & Tailwind</span>
                    <span className="text-[10px] font-mono font-bold text-accent bg-accent/10 px-3 py-1 rounded-full uppercase tracking-wider">Expert</span>
                  </div>
                  <div className="w-full bg-foreground/5 rounded-full h-1.5 mb-3">
                    <div className="bg-accent h-1.5 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" style={{ width: '95%' }}></div>
                  </div>
                  <p className="text-xs text-foreground/40 font-mono tracking-tight">Custom CMS • Variation Logic • Stripe/PayPal • Extreme Speed</p>
                </div>

                <div className="bg-surface-brighter/50 rounded-2xl p-6 border border-border hover:border-accent/30 transition-all">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-foreground text-lg">MySQL Architecture</span>
                    <span className="text-[10px] font-mono font-bold text-accent bg-accent/10 px-3 py-1 rounded-full uppercase tracking-wider">Schema</span>
                  </div>
                  <div className="w-full bg-foreground/5 rounded-full h-1.5 mb-3">
                    <div className="bg-accent h-1.5 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" style={{ width: '90%' }}></div>
                  </div>
                  <p className="text-xs text-foreground/40 font-mono tracking-tight">Relational Design • Data Integrity • Query Optimization</p>
                </div>
              </div>
            </motion.div>

            {/* Infrastructure Cluster */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative bg-surface border border-border rounded-3xl p-8 md:p-10 hover:border-emerald-500/50 transition-all duration-500 shadow-xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-9xl text-emerald-500">terminal</span>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-emerald-500">lan</span>
                </div>
                <h2 className="text-3xl font-black text-foreground">Infrastructure</h2>
              </div>
              <p className="text-foreground/60 mb-10 text-lg font-light leading-relaxed">Managing complex digital ecosystems including Academic Journals (OJS) and server operations.</p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "OJS", sub: "Academic Systems" },
                  { name: "WordPress", sub: "Advanced Core" },
                  { name: "Linux/SSH", sub: "Server Ops" },
                  { name: "DevOps", sub: "Vercel & CI/CD" }
                ].map((item, i) => (
                  <div key={i} className="bg-surface-brighter/50 p-6 rounded-2xl border border-border text-center hover:bg-emerald-500/5 transition-all">
                    <span className="font-bold text-foreground block mb-1 text-lg">{item.name}</span>
                    <span className="text-[10px] text-emerald-500 font-mono font-bold uppercase tracking-wider">{item.sub}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Project Insights Cluster */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-surface border border-border rounded-3xl p-8 md:p-10 hover:border-foreground/30 transition-all duration-500 shadow-xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-9xl text-foreground">insights</span>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-foreground">auto_awesome</span>
                </div>
                <h2 className="text-3xl font-black text-foreground">Continuous Growth</h2>
              </div>
              <p className="text-foreground/60 mb-10 text-lg font-light leading-relaxed">Always expanding horizons into newer frameworks and creative coding explorations.</p>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-3 text-foreground/70">
                  <span className="text-emerald-500">$</span>
                  <span>exp --stack astro-tonejs</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <span className="text-emerald-500">$</span>
                  <span>echo "Exploring Edge Runtime"</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <span className="text-emerald-500">$</span>
                  <span>optimize --all --seo --ux</span>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Astro", "TensorFlow.js", "Web Audio API", "Edge Functions"].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 bg-foreground/5 text-foreground/50 border border-border rounded-lg text-[10px] font-mono font-bold uppercase tracking-widest">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Terminal Section */}
          <section className="border-t border-border pt-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface rounded-3xl border border-border overflow-hidden max-w-4xl mx-auto shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              {/* Terminal Header */}
              <div className="bg-surface-brighter px-6 py-4 flex items-center gap-3 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
                </div>
                <span className="ml-4 text-xs text-foreground/30 font-mono font-bold uppercase tracking-widest">system_terminal</span>
              </div>
              {/* Terminal Body */}
              <div className="p-8 md:p-12 font-mono text-base md:text-lg leading-relaxed">
                <div className="mb-6 flex gap-4">
                  <span className="text-primary font-black">➜</span>
                  <span className="text-foreground">checking_availability...</span>
                </div>
                <div className="mb-8 text-foreground/40 space-y-2">
                  <div className="flex gap-3">
                    <span className="text-primary/50">&gt;</span>
                    <span>Platform architecture ready.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary/50">&gt;</span>
                    <span>Backend + WordPress + mobile stack aligned.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary/50">&gt;</span>
                    <span>Loading contact_module...</span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-12 bg-surface-brighter p-8 rounded-2xl border border-border">
                  <span className="text-foreground font-black text-xl">Ready to build? <span className="animate-pulse text-primary inline-block w-4 h-[2px] bg-primary mb-1"></span></span>
                  <div className="flex flex-wrap gap-4">
                    <a href="/contact" className="bg-primary hover:bg-violet-600 text-white px-8 py-3 rounded-xl font-black text-sm transition-all hover:-translate-y-1 shadow-lg shadow-primary/20">
                      [Y]ES, CONTACT ME
                    </a>
                    <a href="/projects" className="bg-transparent border border-border text-foreground/50 hover:text-foreground hover:border-foreground px-8 py-3 rounded-xl font-bold text-sm transition-all hover:-translate-y-1">
                      [N]O, VIEW PROJECTS
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
    </BlogChrome>
  );
}
