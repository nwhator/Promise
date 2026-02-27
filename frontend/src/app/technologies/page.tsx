
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Arsenal | Promise Ayobami Nwhator',
  description: 'Deep dive into my technical stack: specializing in Next.js/Node.js SaaS architecture, custom PHP e-commerce systems, and mission-critical OJS journal infrastructure.',
  alternates: {
    canonical: '/technologies',
  },
};

export default function Technologies() {
  const htmlContent = `
    



<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&amp;family=JetBrains+Mono:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "var(--primary)",
                        accent: "var(--accent)",
                        "background-dark": "var(--background)",
                        "surface-dark": "var(--surface)",
                        "surface-highlight": "var(--surface-brighter)",
                    },
                    fontFamily: {
                        display: ["Inter", "sans-serif"],
                        mono: ["JetBrains Mono", "monospace"],
                    },
                    borderRadius: {
                        DEFAULT: "0.25rem",
                        lg: "0.5rem",
                        xl: "0.75rem",
                        full: "9999px"
                    },
                },
            },
        }
    </script>
<style>
        /* Custom scrollbar for terminal look */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #111621; 
        }
        ::-webkit-scrollbar-thumb {
            background: #282d39; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #2463eb; 
        }
    </style>


<!-- PROMISE_SHARED_HEADER_START -->
<header class="sticky top-0 z-50 border-b border-border-dark glass-nav sticky top-0 z-50 backdrop-blur-md">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="/" target="_top" class="flex items-center gap-3 text-white">
        <img src="/promise-nwhator-logo.svg" alt="PROMISE NWHATOR logo" style="height:28px;width:auto;"/>
      </a>
      <nav class="hidden md:flex items-center gap-6 text-sm">
        <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="/" target="_top">Home</a>
        <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="/about" target="_top">About</a>
        <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="/projects" target="_top">Projects</a>
        <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="/services" target="_top">Services</a>
        <a class="text-white font-bold text-sm" href="/technologies" target="_top">Technologies</a>
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
      <a class="text-slate-400" href="/services" target="_top">Services</a>
      <a class="text-white" href="/technologies" target="_top">Technologies</a>
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



<!-- Top Navigation -->

<main class="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-10 py-8">
<!-- Hero Section -->
<section className="animate-fade-in" class="mb-16 mt-8 relative">
<div class="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
<div class="flex flex-col gap-4 relative z-10">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-highlight border border-slate-700 w-fit">
<span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span class="text-xs font-mono text-slate-300">System Status: Online</span>
</div>
<h1 class="text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] font-mono">
<span class="text-primary">&gt;</span> Promise_Ayobami_Nwhator.getStack()
                </h1>
<p class="text-slate-400 text-lg md:text-xl max-w-2xl font-light">
          I specialize in building and optimizing digital platforms that scale without breaking, load fast and rank well, convert users into customers, and automate workflows.
                </p>
</div>
</section>
<!-- Tech Stack Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
<!-- SaaS & Fullstack Cluster -->
<div class="group relative bg-surface-dark border border-border-dark rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
<div class="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<span class="material-symbols-outlined text-8xl text-primary">dynamic_form</span>
</div>
<div class="flex items-center gap-3 mb-6">
<span class="material-symbols-outlined text-3xl text-primary">deployed_code</span>
<h2 class="text-2xl font-bold text-white">SaaS & Modern Web</h2>
</div>
<p class="text-slate-400 mb-8 h-12">Building scalable, performant SaaS products and booking engines using modern React ecosystems.</p>
<div class="space-y-6">
<!-- Next.js -->
<div class="bg-surface-highlight/30 rounded-lg p-4 border border-border-dark hover:border-primary/30 transition-colors">
<div class="flex justify-between items-center mb-2">
<span class="font-bold text-white flex items-center gap-2">Next.js & React</span>
<span class="text-[10px] font-mono text-primary bg-primary/10 px-2 py-1 rounded">MASTER</span>
</div>
<div class="w-full bg-slate-800 rounded-full h-1 mb-2">
<div class="bg-primary h-1 rounded-full" style="width: 98%"></div>
</div>
<p class="text-[10px] text-slate-500 font-mono">App Router • SSR • Server Actions • Performance Opt</p>
</div>
<!-- Node.js -->
<div class="bg-surface-highlight/30 rounded-lg p-4 border border-border-dark hover:border-primary/30 transition-colors">
<div class="flex justify-between items-center mb-2">
<span class="font-bold text-white flex items-center gap-2">Node.js Ecosystem</span>
<span class="text-[10px] font-mono text-primary bg-primary/10 px-2 py-1 rounded">CORE</span>
</div>
<div class="w-full bg-slate-800 rounded-full h-1 mb-2">
<div class="bg-primary h-1 rounded-full" style="width: 95%"></div>
</div>
<p class="text-[10px] text-slate-500 font-mono">Express • REST APIs • JWT Auth • SMTP Systems</p>
</div>
</div>
</div>

<!-- PHP & E-commerce Cluster -->
<div class="group relative bg-surface-dark border border-border-dark rounded-xl p-6 md:p-8 hover:border-accent/50 transition-all duration-300">
<div class="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<span class="material-symbols-outlined text-8xl text-accent">shopping_bag</span>
</div>
<div class="flex items-center gap-3 mb-6">
<span class="material-symbols-outlined text-3xl text-accent">database</span>
<h2 class="text-2xl font-bold text-white">High-Performance PHP</h2>
</div>
<p class="text-slate-400 mb-8 h-12">Custom e-commerce engines and business logic processors built on stable PHP/MySQL foundations.</p>
<div class="space-y-6">
<!-- PHP -->
<div class="bg-surface-highlight/30 rounded-lg p-4 border border-border-dark hover:border-accent/30 transition-colors">
<div class="flex justify-between items-center mb-2">
<span class="font-bold text-white flex items-center gap-2">Native PHP & Tailwind</span>
<span class="text-[10px] font-mono text-accent bg-accent/10 px-2 py-1 rounded">EXPERT</span>
</div>
<div class="w-full bg-slate-800 rounded-full h-1 mb-2">
<div class="bg-accent h-1 rounded-full" style="width: 95%"></div>
</div>
<p class="text-[10px] text-slate-500 font-mono">Custom CMS • Variation Logic • Stripe/PayPal • Speed</p>
</div>
<!-- MySQL -->
<div class="bg-surface-highlight/30 rounded-lg p-4 border border-border-dark hover:border-accent/30 transition-colors">
<div class="flex justify-between items-center mb-2">
<span class="font-bold text-white flex items-center gap-2">MySQL Architecture</span>
<span class="text-[10px] font-mono text-accent bg-accent/10 px-2 py-1 rounded">SCHEMA</span>
</div>
<div class="w-full bg-slate-800 rounded-full h-1 mb-2">
<div class="bg-accent h-1 rounded-full" style="width: 90%"></div>
</div>
<p class="text-[10px] text-slate-500 font-mono">Optimization • Relational Design • Data Integrity</p>
</div>
</div>
</div>

<!-- Infrastructure Cluster -->
<div class="group relative bg-surface-dark border border-border-dark rounded-xl p-6 md:p-8 hover:border-emerald-500/50 transition-all duration-300">
<div class="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<span class="material-symbols-outlined text-8xl text-emerald-500">terminal</span>
</div>
<div class="flex items-center gap-3 mb-6">
<span class="material-symbols-outlined text-3xl text-emerald-500">lan</span>
<h2 class="text-2xl font-bold text-white">Publishing & Infrastructure</h2>
</div>
<p class="text-slate-400 mb-8 h-12">Managing complex digital ecosystems including Academic Journals (OJS) and deep WordPress integrations.</p>
<div class="grid grid-cols-2 gap-4">
<div class="bg-surface-highlight/20 p-4 rounded-lg border border-border-dark text-center hover:bg-emerald-500/5 transition-colors">
<span class="font-bold text-white block mb-1">OJS</span>
<span class="text-[10px] text-emerald-500 font-mono">Academic Systems</span>
</div>
<div class="bg-surface-highlight/20 p-4 rounded-lg border border-border-dark text-center hover:bg-emerald-500/5 transition-colors">
<span class="font-bold text-white block mb-1">WordPress</span>
<span class="text-[10px] text-emerald-500 font-mono">Advanced Core</span>
</div>
<div class="bg-surface-highlight/20 p-4 rounded-lg border border-border-dark text-center hover:bg-emerald-500/5 transition-colors">
<span class="font-bold text-white block mb-1">Linux/SSH</span>
<span class="text-[10px] text-emerald-500 font-mono">Server Ops</span>
</div>
<div class="bg-surface-highlight/20 p-4 rounded-lg border border-border-dark text-center hover:bg-emerald-500/5 transition-colors">
<span class="font-bold text-white block mb-1">DevOps</span>
<span class="text-[10px] text-emerald-500 font-mono">Vercel & CI/CD</span>
</div>
</div>
</div>

<!-- Project Insights Cluster -->
<div class="group relative bg-surface-dark border border-border-dark rounded-xl p-6 md:p-8 hover:border-white/50 transition-all duration-300">
<div class="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<span class="material-symbols-outlined text-8xl text-white">insights</span>
</div>
<div class="flex items-center gap-3 mb-6">
<span class="material-symbols-outlined text-3xl text-white">auto_awesome</span>
<h2 class="text-2xl font-bold text-white">Continuous Growth</h2>
</div>
<p class="text-slate-400 mb-8 h-12">Always expanding horizons into newer frameworks and creative coding explorations.</p>
<div class="space-y-3 font-mono text-xs">
<div class="flex items-center gap-3 text-slate-300">
<span class="text-emerald-500">$</span>
<span>exp --stack astro-tonejs</span>
</div>
<div class="flex items-center gap-3 text-slate-300">
<span class="text-emerald-500">$</span>
<span>echo "Exploring Edge Runtime"</span>
</div>
<div class="flex items-center gap-3 text-slate-300">
<span class="text-emerald-500">$</span>
<span>optimize --all --seo --ux</span>
</div>
</div>
<div class="mt-6 flex flex-wrap gap-2">
<span class="px-2 py-1 bg-white/5 text-white/50 border border-white/10 rounded text-[10px] font-mono">Astro</span>
<span class="px-2 py-1 bg-white/5 text-white/50 border border-white/10 rounded text-[10px] font-mono">TensorFlow.js (Exp)</span>
<span class="px-2 py-1 bg-white/5 text-white/50 border border-white/10 rounded text-[10px] font-mono">Web Audio API</span>
</div>
</div>
</div>
<!-- Terminal Output / CTA Section -->
<section className="animate-fade-in" class="border-t border-slate-800 pt-10 mt-10">
<div class="bg-[#0f1115] rounded-lg border border-slate-800 overflow-hidden max-w-3xl mx-auto shadow-2xl">
<!-- Terminal Header -->
<div class="bg-[#1e222a] px-4 py-2 flex items-center gap-2 border-b border-slate-700">
<div class="w-3 h-3 rounded-full bg-red-500"></div>
<div class="w-3 h-3 rounded-full bg-yellow-500"></div>
<div class="w-3 h-3 rounded-full bg-green-500"></div>
<span class="ml-2 text-xs text-slate-400 font-mono">bash — 80x24</span>
</div>
<!-- Terminal Body -->
<div class="p-6 font-mono text-sm md:text-base">
<div class="mb-4">
<span class="text-green-500">➜</span>
<span class="text-blue-400">~</span>
<span class="text-slate-300"> checking_availability...</span>
</div>
<div class="mb-4 text-slate-400">
                        &gt; Platform architecture ready.<br/>
                        &gt; Backend + WordPress + mobile stack aligned.<br/>
                        &gt; Loading contact_module...
                    </div>
<div class="flex flex-col md:flex-row md:items-center gap-4 mt-8">
<span class="text-white text-lg">Are you ready to build? <span class="animate-pulse">_</span></span>
<div class="flex gap-4">
<button class="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-md font-bold transition-colors">
                                [Y]es, Contact Me
                            </button>
<button class="bg-transparent border border-slate-600 text-slate-400 hover:text-white hover:border-white px-6 py-2 rounded-md transition-colors">
                                [N]o, View Projects
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->





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
<script>
(function () {
  const yearNode = document.getElementById('copyright-year');
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  const routeMap = {
    home: '/',
    about: '/about',
    work: '/projects',
    project: '/projects',
    projects: '/projects',
    services: '/services',
    technologies: '/technologies',
    resume: '/resume',
    contact: '/contact',
    blog: '/blog'
  };

  document.querySelectorAll('a').forEach(function (anchor) {
    const rawHref = (anchor.getAttribute('href') || '').trim();
    const label = (anchor.textContent || '').trim().toLowerCase();

    if (rawHref === 'https://github.com' || rawHref === 'https://github.com/') {
      anchor.setAttribute('href', 'https://github.com/nwhator');
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noreferrer');
      return;
    }

    if (rawHref === 'https://linkedin.com' || rawHref === 'https://linkedin.com/') {
      anchor.setAttribute('href', 'https://linkedin.com/in/nwhator');
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noreferrer');
      return;
    }

    if (rawHref !== '#') return;

    for (const key in routeMap) {
      if (label.includes(key)) {
        anchor.setAttribute('href', routeMap[key]);
        anchor.setAttribute('target', '_top');
        break;
      }
    }
  });
})();
</script>
<!-- PROMISE_SHARED_FOOTER_END -->

  `;
  return (
    <div className="stitch-page-root overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />

      <div className="relative animate-fade-in">
        {parse(htmlContent)}
      </div>
    </div>
  );
}
