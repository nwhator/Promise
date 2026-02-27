
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Packages - Promise Ayobami Nwhator',
  description: 'Services page for PROMISE NWHATOR.',
  alternates: {
    canonical: '/services',
  },
};

export default function Services() {
  const htmlContent = `
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>

<!-- PROMISE_SHARED_HEADER_START -->
<header class="sticky top-0 z-50 border-b border-white/5 glass-nav backdrop-blur-md">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="/" target="_top" class="flex items-center gap-3 text-white">
        <img src="/promise-nwhator-logo.svg" alt="PROMISE NWHATOR logo" style="height:28px;width:auto;"/>
      </a>
      
      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-6 text-sm">
        <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="/" target="_top">Home</a>
        <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="/about" target="_top">About</a>
        <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="/projects" target="_top">Projects</a>
        <a class="text-white font-bold text-sm" href="/services" target="_top">Services</a>
        <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="/technologies" target="_top">Technologies</a>
        <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="/resume" target="_top">Resume</a>
        <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="/contact" target="_top">Contact</a>
        <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="/blog" target="_top">Blog</a>
      </nav>

      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" class="md:hidden text-white p-2">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>
  </div>

  <!-- Mobile Nav Dropdown -->
  <div id="mobile-menu" class="hidden md:hidden bg-background-dark border-b border-white/10 absolute w-full left-0 top-16 z-50">
    <nav class="flex flex-col p-6 gap-6 text-[16px] font-bold">
      <a class="text-slate-400" href="/" target="_top">Home</a>
      <a class="text-slate-400" href="/about" target="_top">About</a>
      <a class="text-slate-400" href="/projects" target="_top">Projects</a>
      <a class="text-white" href="/services" target="_top">Services</a>
      <a class="text-slate-400" href="/technologies" target="_top">Technologies</a>
      <a class="text-slate-400" href="/resume" target="_top">Resume</a>
      <a class="text-slate-400" href="/contact" target="_top">Contact</a>
      <a class="text-slate-400" href="/blog" target="_top">Blog</a>
    </nav>
  </div>
</header>
<script>
  (function() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }
  })();
</script>
<!-- PROMISE_SHARED_HEADER_END -->

<!-- Main Content -->
<main class="flex-grow">
    <!-- Hero Section -->
    <section class="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <!-- Background Glow -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div class="max-w-4xl mx-auto text-center space-y-6">
            <h2 class="text-5xl md:text-7xl font-black tracking-tight leading-tight text-white">
                Engineering Solutions <br class="hidden sm:block"/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Tailored to You</span>
            </h2>
            <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light">
                From high-performance WordPress systems to production-ready SaaS platforms and premium UI design.
            </p>
        </div>
    </section>

    <!-- Services Cards Section -->
    <section class="pb-24 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                <!-- Card 1: WordPress Development -->
                <div class="group relative flex flex-col p-10 rounded-[2.5rem] border border-white/5 bg-slate-900/50 backdrop-blur-xl shadow-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                    <div class="mb-8">
                        <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                            <span class="material-symbols-outlined text-3xl">terminal</span>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-3">WordPress Development</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-8 h-12">Professional theme & plugin architecture, OJS integrations, and SEO-optimized news platforms.</p>
                    </div>
                    <a href="/contact" target="_top" class="w-full py-4 px-6 mb-10 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 border border-white/10">
                        GET STARTED
                        <span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </a>
                    <div class="space-y-4">
                        <div class="flex items-center gap-3 text-sm text-slate-300">
                             <span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                             <span>Custom Plugin Architecture</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-slate-300">
                             <span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                             <span>Journal System (OJS) Scaling</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-slate-300">
                             <span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                             <span>Core Web Vitals Optimization</span>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Full-Stack Engineering (Highlighted) -->
                <div class="relative flex flex-col p-10 rounded-[2.5rem] border border-primary/50 bg-gradient-to-b from-primary/10 to-transparent backdrop-blur-2xl shadow-[0_0_50px_-12px_rgba(139,92,246,0.3)] lg:-translate-y-6 z-10 transition-transform duration-500 hover:scale-[1.02]">
                    <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] py-1.5 px-6 rounded-full shadow-xl">
                        CORE EXPERTISE
                    </div>
                    <div class="mb-8">
                        <div class="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20">
                            <span class="material-symbols-outlined text-3xl">bolt</span>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-3">Full-Stack Engineering</h3>
                        <p class="text-slate-300 text-sm leading-relaxed mb-8 h-12">Production-ready SaaS platforms, custom dashboards, and highly scalable backend APIs.</p>
                    </div>
                    <a href="/contact" target="_top" class="w-full py-4 px-6 mb-10 bg-primary hover:bg-violet-600 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20">
                        BUILD MY PROJECT
                        <span class="material-symbols-outlined text-sm">rocket_launch</span>
                    </a>
                    <div class="space-y-4">
                        <div class="flex items-center gap-3 text-sm text-white font-medium">
                             <span class="material-symbols-outlined text-primary text-xl">stars</span>
                             <span>Next.js & Node.js Architecture</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-white font-medium">
                             <span class="material-symbols-outlined text-primary text-xl">stars</span>
                             <span>Supabase & PostgreSQL Scaling</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-white font-medium">
                             <span class="material-symbols-outlined text-primary text-xl">stars</span>
                             <span>Enterprise-Grade Security</span>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Website & UI Design -->
                <div class="group relative flex flex-col p-10 rounded-[2.5rem] border border-white/5 bg-slate-900/50 backdrop-blur-xl shadow-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                    <div class="mb-8">
                        <div class="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                            <span class="material-symbols-outlined text-3xl">palette</span>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-3">Website & UI Design</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-8 h-12">Premium, animated interfaces designed for conversion and state-of-the-art aesthetics.</p>
                    </div>
                    <a href="/contact" target="_top" class="w-full py-4 px-6 mb-10 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 border border-white/10">
                        START DESIGNING
                        <span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">design_services</span>
                    </a>
                    <div class="space-y-4">
                        <div class="flex items-center gap-3 text-sm text-slate-300">
                             <span class="material-symbols-outlined text-blue-400 text-xl">check_circle</span>
                             <span>Framer Motion Animations</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-slate-300">
                             <span class="material-symbols-outlined text-blue-400 text-xl">check_circle</span>
                             <span>Conversion-Driven UX</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-slate-300">
                             <span class="material-symbols-outlined text-blue-400 text-xl">check_circle</span>
                             <span>Mobile-First Responsiveness</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-950/50">
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-black mb-12 text-center text-white italic">Technical FAQ</h2>
            <div class="space-y-4 text-left">
                <details class="group bg-white/5 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
                    <summary class="flex cursor-pointer items-center justify-between p-6 list-none hover:bg-white/10 transition-colors">
                        <span class="text-white font-bold">What is your typical turnaround time?</span>
                        <span class="transition group-open:rotate-180">
                            <span class="material-symbols-outlined text-slate-500">expand_more</span>
                        </span>
                    </summary>
                    <div class="px-6 pb-6 text-sm text-slate-400 leading-relaxed font-light">
                        For standard engineering projects, timelines usually range from 4-8 weeks depending on complexity. UI Design projects often move faster, typically 2-3 weeks.
                    </div>
                </details>
                <details class="group bg-white/5 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
                    <summary class="flex cursor-pointer items-center justify-between p-6 list-none hover:bg-white/10 transition-colors">
                        <span class="text-white font-bold">Do you offer post-launch maintenance?</span>
                        <span class="transition group-open:rotate-180">
                            <span class="material-symbols-outlined text-slate-500">expand_more</span>
                        </span>
                    </summary>
                    <div class="px-6 pb-6 text-sm text-slate-400 leading-relaxed font-light">
                        Absolutely. Every project includes a 30-day monitoring period. Long-term maintenance retainers are available for mission-critical systems.
                    </div>
                </details>
            </div>
        </div>
    </section>
</main>

<!-- PROMISE_SHARED_FOOTER_START -->
<footer class="border-t border-white/5 bg-black py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
    <div class="flex flex-col items-center md:items-start gap-4">
        <img src="/promise-nwhator-logo.svg" alt="Logo" class="h-6 w-auto opacity-50 grayscale hover:grayscale-0 transition-all"/>
        <p class="text-xs text-slate-500 font-mono italic">© ${new Date().getFullYear()} PROMISE NWHATOR. ALL RIGHTS RESERVED.</p>
    </div>
    <div class="flex items-center gap-8 text-xs font-black tracking-widest uppercase">
      <a href="https://github.com/nwhator" target="_blank" rel="noreferrer" class="text-slate-400 hover:text-primary transition-colors">GITHUB</a>
      <a href="https://linkedin.com/in/nwhator" target="_blank" rel="noreferrer" class="text-slate-400 hover:text-primary transition-colors">LINKEDIN</a>
      <a href="/contact" class="text-slate-400 hover:text-primary transition-colors">HIRE ME</a>
    </div>
  </div>
</footer>
<!-- PROMISE_SHARED_FOOTER_END -->
  `;

  return (
    <div className="stitch-page-root bg-[#050505] min-h-screen text-white overflow-x-hidden font-sans">
      {/* Cinematic Backgrounds */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none brightness-50" />

      <div className="relative z-10 animate-fade-in">
        <style dangerouslySetInnerHTML={{
          __html: `
            .material-symbols-outlined {
                font-family: 'Material Symbols Outlined' !important;
                display: inline-block !important;
            }
            .text-gradient-primary {
                background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            .glass-nav {
                background: rgba(5, 5, 5, 0.8);
                backdrop-filter: blur(12px);
            }
        `}} />
        {parse(htmlContent)}
      </div>
    </div>
  );
}
