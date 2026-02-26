
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technologies - PROMISE NWHATOR',
  description: 'Technologies page for PROMISE NWHATOR.',
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
                        primary: "#2463eb",
                        "background-light": "#f6f6f8",
                        "background-dark": "#111621",
                        "surface-dark": "#1c212c",
                        "surface-highlight": "#282d39",
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
<header class="sticky top-0 z-50 border-b border-border-dark bg-background-dark/90 backdrop-blur-md">
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



<!-- Top Navigation -->

<main class="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-10 py-8">
<!-- Hero Section -->
<section class="mb-16 mt-8 relative">
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
<!-- Backend Cluster -->
<div class="group relative bg-surface-dark border border-slate-800 rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
<div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-8xl text-primary">dns</span>
</div>
<div class="flex items-center gap-3 mb-6">
<span class="material-symbols-outlined text-3xl text-primary">storage</span>
<h2 class="text-2xl font-bold text-white">Backend Engineering</h2>
</div>
<p class="text-slate-400 mb-8 h-12">Production backend systems designed for speed, reliability, and long-term maintainability.</p>
<div class="space-y-6">
<!-- Tech Item -->
<div class="bg-surface-highlight/50 rounded-lg p-4 border border-slate-700/50 hover:border-primary/30 transition-colors">
<div class="flex justify-between items-center mb-2">
<span class="font-bold text-white flex items-center gap-2">
<span class="material-symbols-outlined text-yellow-500 text-sm">code</span> Python &amp; Django
                            </span>
<span class="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">CORE</span>
</div>
<div class="w-full bg-slate-700 rounded-full h-1.5 mb-2">
<div class="bg-primary h-1.5 rounded-full" style="width: 95%"></div>
</div>
<p class="text-xs text-slate-500 font-mono">Django • DRF • Architecture Patterns</p>
</div>
<!-- Tech Item -->
<div class="bg-surface-highlight/50 rounded-lg p-4 border border-slate-700/50 hover:border-primary/30 transition-colors">
<div class="flex justify-between items-center mb-2">
<span class="font-bold text-white flex items-center gap-2">
<span class="material-symbols-outlined text-green-500 text-sm">bolt</span> Node.js APIs
                            </span>
<span class="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">API</span>
</div>
<div class="w-full bg-slate-700 rounded-full h-1.5 mb-2">
<div class="bg-primary h-1.5 rounded-full" style="width: 90%"></div>
</div>
<p class="text-xs text-slate-500 font-mono">RESTful Services • Auth • Integrations</p>
</div>
<!-- Tech Item -->
<div class="bg-surface-highlight/50 rounded-lg p-4 border border-slate-700/50 hover:border-primary/30 transition-colors">
<div class="flex justify-between items-center mb-2">
<span class="font-bold text-white flex items-center gap-2">
<span class="material-symbols-outlined text-teal-500 text-sm">layers</span> Laravel PHP + MySQL
                            </span>
<span class="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">FRAMEWORK</span>
</div>
<div class="w-full bg-slate-700 rounded-full h-1.5 mb-2">
<div class="bg-primary h-1.5 rounded-full" style="width: 85%"></div>
</div>
<p class="text-xs text-slate-500 font-mono">Laravel • Data Performance • Data Design</p>
</div>
</div>
</div>
<!-- Frontend Cluster -->
<div class="group relative bg-surface-dark border border-slate-800 rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
<div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-8xl text-pink-500">web</span>
</div>
<div class="flex items-center gap-3 mb-6">
<span class="material-symbols-outlined text-3xl text-pink-500">devices</span>
<h2 class="text-2xl font-bold text-white">Platform Interfaces</h2>
</div>
<p class="text-slate-400 mb-8 h-12">Performance-focused interfaces for product dashboards, journal systems, and user-facing web experiences.</p>
<div class="space-y-6">
<!-- Tech Item -->
<div class="bg-surface-highlight/50 rounded-lg p-4 border border-slate-700/50 hover:border-pink-500/30 transition-colors">
<div class="flex justify-between items-center mb-2">
<span class="font-bold text-white flex items-center gap-2">
<span class="material-symbols-outlined text-orange-500 text-sm">html</span> Next.js
                            </span>
<span class="text-xs font-mono text-pink-500 bg-pink-500/10 px-2 py-1 rounded">BASE</span>
</div>
<div class="w-full bg-slate-700 rounded-full h-1.5 mb-2">
<div class="bg-pink-500 h-1.5 rounded-full" style="width: 98%"></div>
</div>
<p class="text-xs text-slate-500 font-mono">App Router • SEO • Production Build</p>
</div>
<!-- Tech Item -->
<div class="bg-surface-highlight/50 rounded-lg p-4 border border-slate-700/50 hover:border-pink-500/30 transition-colors">
<div class="flex justify-between items-center mb-2">
<span class="font-bold text-white flex items-center gap-2">
<span class="material-symbols-outlined text-yellow-300 text-sm">javascript</span> React + JavaScript
                            </span>
<span class="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">LOGIC</span>
</div>
<div class="w-full bg-slate-700 rounded-full h-1.5 mb-2">
<div class="bg-pink-500 h-1.5 rounded-full" style="width: 90%"></div>
</div>
<p class="text-xs text-slate-500 font-mono">Components • State Flow • Fetch APIs</p>
</div>
<!-- Tech Item -->
<div class="bg-surface-highlight/50 rounded-lg p-4 border border-slate-700/50 hover:border-pink-500/30 transition-colors">
<div class="flex justify-between items-center mb-2">
<span class="font-bold text-white flex items-center gap-2">
<span class="material-symbols-outlined text-cyan-400 text-sm">code_blocks</span> Astro + NextJS
                            </span>
<span class="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">STACK</span>
</div>
<div class="w-full bg-slate-700 rounded-full h-1.5 mb-2">
<div class="bg-pink-500 h-1.5 rounded-full" style="width: 85%"></div>
</div>
<p class="text-xs text-slate-500 font-mono">Frontend Architecture • SEO • Speed</p>
</div>
</div>
</div>
<!-- CMS & Content -->
<div class="group relative bg-surface-dark border border-slate-800 rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
<div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-8xl text-indigo-500">article</span>
</div>
<div class="flex items-center gap-3 mb-6">
<span class="material-symbols-outlined text-3xl text-indigo-500">publish</span>
<h2 class="text-2xl font-bold text-white">WordPress &amp; E-Commerce Systems</h2>
</div>
<p class="text-slate-400 mb-8 h-12">Custom WordPress platforms and WooCommerce systems optimized for conversion, performance, and reliability.</p>
<div class="grid grid-cols-2 gap-4">
<div class="bg-surface-highlight/50 p-4 rounded-lg border border-slate-700/50 flex flex-col items-center justify-center text-center hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined text-3xl text-white mb-2">php</span>
<span class="font-bold text-white mb-1">WordPress</span>
<span class="text-xs text-slate-500 font-mono">Custom Builds</span>
</div>
<div class="bg-surface-highlight/50 p-4 rounded-lg border border-slate-700/50 flex flex-col items-center justify-center text-center hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined text-3xl text-white mb-2">shopping_cart</span>
<span class="font-bold text-white mb-1">WooCommerce</span>
<span class="text-xs text-slate-500 font-mono">Checkout + Payments</span>
</div>
<div class="bg-surface-highlight/50 p-4 rounded-lg border border-slate-700/50 flex flex-col items-center justify-center text-center hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined text-3xl text-white mb-2">php</span>
<span class="font-bold text-white mb-1">PHP</span>
<span class="text-xs text-slate-500 font-mono">Custom Functionality</span>
</div>
<div class="bg-surface-highlight/50 p-4 rounded-lg border border-slate-700/50 flex flex-col items-center justify-center text-center hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined text-3xl text-white mb-2">database</span>
<span class="font-bold text-white mb-1">MySQL</span>
<span class="text-xs text-slate-500 font-mono">Data Performance</span>
</div>
</div>
</div>
<!-- DevOps & Tools -->
<div class="group relative bg-surface-dark border border-slate-800 rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
<div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-8xl text-emerald-500">terminal</span>
</div>
<div class="flex items-center gap-3 mb-6">
<span class="material-symbols-outlined text-3xl text-emerald-500">settings_system_daydream</span>
<h2 class="text-2xl font-bold text-white">DevOps, Mobile &amp; Delivery</h2>
</div>
<p class="text-slate-400 mb-8 h-12">Delivery workflows across Linux servers, containers, Git pipelines, and mobile app integrations.</p>
<div class="space-y-3 font-mono text-sm">
<div class="flex items-center gap-3 text-slate-300">
<span class="text-emerald-500">root@server:~#</span>
<span>git commit -m "Version Control"</span>
</div>
<div class="flex items-center gap-3 text-slate-300">
<span class="text-emerald-500">root@server:~#</span>
<span>docker compose up -d</span>
</div>
<div class="flex items-center gap-3 text-slate-300">
<span class="text-emerald-500">root@server:~#</span>
<span>systemctl status nginx</span>
</div>
<div class="flex items-center gap-3 text-slate-300">
<span class="text-emerald-500">root@server:~#</span>
<span>flutter build && firebase deploy</span>
</div>
</div>
<div class="mt-6 flex flex-wrap gap-2">
<span class="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-mono">Linux</span>
<span class="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-mono">Git/GitHub</span>
<span class="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-mono">Nginx</span>
<span class="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-mono">CI/CD</span>
<span class="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-mono">Docker</span>
<span class="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-mono">Flutter</span>
<span class="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-mono">Firebase</span>
</div>
</div>
</div>
<!-- Terminal Output / CTA Section -->
<section class="border-t border-slate-800 pt-10 mt-10">
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
<footer class="border-t border-border-dark bg-background-dark/95 mt-8">
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
    <div className="stitch-page-root">
      {parse(htmlContent)}
    </div>
  );
}
