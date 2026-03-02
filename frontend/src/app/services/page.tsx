"use client";

import parse from 'html-react-parser';
import { BlogChrome } from '@/components/BlogChrome';

export default function Services() {
  const htmlContent = `
    <!-- Main Content -->
    <main class="flex-grow">
        <!-- Hero Section -->
        <section class="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <!-- Background Glow -->
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div class="max-w-4xl mx-auto text-center space-y-6">
                <h2 class="text-5xl md:text-7xl font-black tracking-tight leading-tight text-foreground">
                    Engineering Solutions <br class="hidden sm:block"/>
                    <span class="text-gradient-primary">Tailored to You</span>
                </h2>
                <p class="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto font-light">
                    From high-performance WordPress systems to production-ready SaaS platforms and premium UI design.
                </p>
            </div>
        </section>

        <!-- Services Cards Section -->
        <section class="pb-24 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    <!-- Card 1: WordPress Development -->
                    <div class="group relative flex flex-col p-10 rounded-[2.5rem] border border-border bg-surface shadow-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                        <div class="mb-8">
                            <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <span class="material-symbols-outlined text-3xl">terminal</span>
                            </div>
                            <h3 class="text-2xl font-bold text-foreground mb-3">WordPress Development</h3>
                            <p class="text-foreground/60 text-sm leading-relaxed mb-8 h-12">Professional theme & plugin architecture, OJS integrations, and SEO-optimized news platforms.</p>
                        </div>
                        <a href="/contact" class="w-full py-4 px-6 mb-10 bg-surface-brighter hover:bg-surface/50 text-foreground font-bold rounded-2xl transition-all flex items-center justify-center gap-3 border border-border">
                            GET STARTED
                            <span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </a>
                        <div class="space-y-4">
                            <div class="flex items-center gap-3 text-sm text-foreground/70">
                                 <span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                                 <span>Custom Plugin Architecture</span>
                            </div>
                            <div class="flex items-center gap-3 text-sm text-foreground/70">
                                 <span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                                 <span>Journal System (OJS) Scaling</span>
                            </div>
                            <div class="flex items-center gap-3 text-sm text-foreground/70">
                                 <span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                                 <span>Core Web Vitals Optimization</span>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2: Full-Stack Engineering (Highlighted) -->
                    <div class="relative flex flex-col p-10 rounded-[2.5rem] border border-primary/50 bg-gradient-to-b from-primary/10 to-transparent backdrop-blur-2xl shadow-xl lg:-translate-y-6 z-10 transition-transform duration-500 hover:scale-[1.02]">
                        <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] py-1.5 px-6 rounded-full shadow-xl">
                            CORE EXPERTISE
                        </div>
                        <div class="mb-8">
                            <div class="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20">
                                <span class="material-symbols-outlined text-3xl">bolt</span>
                            </div>
                            <h3 class="text-2xl font-bold text-foreground mb-3">Full-Stack Engineering</h3>
                            <p class="text-foreground/80 text-sm leading-relaxed mb-8 h-12">Production-ready SaaS platforms, custom dashboards, and highly scalable backend APIs.</p>
                        </div>
                        <a href="/contact" class="w-full py-4 px-6 mb-10 bg-primary hover:bg-violet-600 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20">
                            BUILD MY PROJECT
                            <span class="material-symbols-outlined text-sm">rocket_launch</span>
                        </a>
                        <div class="space-y-4">
                            <div class="flex items-center gap-3 text-sm text-foreground font-medium">
                                 <span class="material-symbols-outlined text-primary text-xl">stars</span>
                                 <span>Next.js & Node.js Architecture</span>
                            </div>
                            <div class="flex items-center gap-3 text-sm text-foreground font-medium">
                                 <span class="material-symbols-outlined text-primary text-xl">stars</span>
                                 <span>Supabase & PostgreSQL Scaling</span>
                            </div>
                            <div class="flex items-center gap-3 text-sm text-foreground font-medium">
                                 <span class="material-symbols-outlined text-primary text-xl">stars</span>
                                 <span>Enterprise-Grade Security</span>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Website & UI Design -->
                    <div class="group relative flex flex-col p-10 rounded-[2.5rem] border border-border bg-surface shadow-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                        <div class="mb-8">
                            <div class="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                                <span class="material-symbols-outlined text-3xl">palette</span>
                            </div>
                            <h3 class="text-2xl font-bold text-foreground mb-3">Website & UI Design</h3>
                            <p class="text-foreground/60 text-sm leading-relaxed mb-8 h-12">Premium, animated interfaces designed for conversion and state-of-the-art aesthetics.</p>
                        </div>
                        <a href="/contact" class="w-full py-4 px-6 mb-10 bg-surface-brighter hover:bg-surface/50 text-foreground font-bold rounded-2xl transition-all flex items-center justify-center gap-3 border border-border">
                            START DESIGNING
                            <span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">design_services</span>
                        </a>
                        <div class="space-y-4">
                            <div class="flex items-center gap-3 text-sm text-foreground/70">
                                 <span class="material-symbols-outlined text-accent text-xl">check_circle</span>
                                 <span>Framer Motion Animations</span>
                            </div>
                            <div class="flex items-center gap-3 text-sm text-foreground/70">
                                 <span class="material-symbols-outlined text-accent text-xl">check_circle</span>
                                 <span>Conversion-Driven UX</span>
                            </div>
                            <div class="flex items-center gap-3 text-sm text-foreground/70">
                                 <span class="material-symbols-outlined text-accent text-xl">check_circle</span>
                                 <span>Mobile-First Responsiveness</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="py-24 px-4 sm:px-6 lg:px-8 border-t border-border bg-foreground/5">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-3xl font-black mb-12 text-center text-foreground italic">Technical FAQ</h2>
                <div class="space-y-4 text-left">
                    <details class="group bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-300">
                        <summary class="flex cursor-pointer items-center justify-between p-6 list-none hover:bg-foreground/5 transition-colors">
                            <span class="text-foreground font-bold">What is your typical turnaround time?</span>
                            <span class="transition group-open:rotate-180">
                                <span class="material-symbols-outlined text-foreground/40">expand_more</span>
                            </span>
                        </summary>
                        <div class="px-6 pb-6 text-sm text-foreground/60 leading-relaxed font-light">
                            For standard engineering projects, timelines usually range from 4-8 weeks depending on complexity. UI Design projects often move faster, typically 2-3 weeks.
                        </div>
                    </details>
                    <details class="group bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-300">
                        <summary class="flex cursor-pointer items-center justify-between p-6 list-none hover:bg-foreground/5 transition-colors">
                            <span class="text-foreground font-bold">Do you offer post-launch maintenance?</span>
                            <span class="transition group-open:rotate-180">
                                <span class="material-symbols-outlined text-foreground/40">expand_more</span>
                            </span>
                        </summary>
                        <div class="px-6 pb-6 text-sm text-foreground/60 leading-relaxed font-light">
                            Absolutely. Every project includes a 30-day monitoring period. Long-term maintenance retainers are available for mission-critical systems.
                        </div>
                    </details>
                </div>
            </div>
        </section>
    </main>
  `;

  return (
    <BlogChrome>
      <div className="relative animate-fade-in">
        {parse(htmlContent)}
      </div>
    </BlogChrome>
  );
}
