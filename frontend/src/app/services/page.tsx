
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services &amp; Packages - Promise Ayobami Promise Ayobami Promise Ayobami Nwhator',
  description: 'Services page for PROMISE NWHATOR.',
  alternates: {
    canonical: '/services',
  },
};

export default function Services() {
  const htmlContent = `
    



<!-- Google Fonts: Space Grotesk -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Theme Configuration -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#259df4",
                        "background-light": "#f5f7f8",
                        "background-dark": "#101a22",
                        "surface-dark": "#18242e",
                    },
                    fontFamily: {
                        "display": ["Space Grotesk", "sans-serif"],
                        "sans": ["Space Grotesk", "sans-serif"] 
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        /* Custom scrollbar for webkit */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #101a22; 
        }
        ::-webkit-scrollbar-thumb {
            background: #283239; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #3b4a54; 
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

<!-- Main Content -->
<main class="flex-grow">
<!-- Hero Section -->
<section class="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
<!-- Background Glow -->
<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div class="max-w-4xl mx-auto text-center space-y-6">
<h2 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                    Engineering Solutions <br class="hidden sm:block"/>
<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Tailored to You</span>
</h2>
<p class="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-light">
                    From backend APIs to full WordPress journal systems and e-commerce platforms, I help organizations turn ideas into stable, production-ready solutions.
                </p>
</div>
</section>
<!-- Pricing Cards Section -->
<section class="pb-24 px-4 sm:px-6 lg:px-8">
<div class="max-w-7xl mx-auto">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
<!-- Card 1: MVP Development -->
<div class="group relative flex flex-col p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
<div class="mb-6">
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">MVP Development</h3>
<p class="text-sm text-slate-500 dark:text-slate-400 mb-6 h-10">Perfect for startups looking to validate ideas quickly with robust code.</p>
<div class="flex items-baseline gap-1">
<span class="text-4xl font-black tracking-tight text-slate-900 dark:text-white">\$5,000+</span>
<span class="text-sm font-medium text-slate-500 dark:text-slate-400">/ project</span>
</div>
</div>
<button class="w-full py-3 px-4 mb-8 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 group-hover:bg-slate-800 dark:group-hover:bg-slate-700">
                            Get Started
                            <span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
</button>
<div class="space-y-4 flex-1">
<div class="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
<span>React/Next.js Setup</span>
</div>
<div class="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
<span>Database Integration</span>
</div>
<div class="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
<span>Deployment Pipeline</span>
</div>
<div class="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
<span>Basic SEO Optimization</span>
</div>
<div class="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
<span>2 Weeks Post-Launch Support</span>
</div>
</div>
</div>
<!-- Card 2: API Audit (Highlighted) -->
<div class="relative flex flex-col p-8 rounded-2xl border-2 border-primary bg-white dark:bg-surface-dark shadow-2xl shadow-primary/20 transform lg:-translate-y-4 z-10">
<div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                            Most Popular
                        </div>
<div class="mb-6">
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">API Architecture Audit</h3>
<p class="text-sm text-slate-500 dark:text-slate-400 mb-6 h-10">Deep dive analysis to improve performance, security, and scalability.</p>
<div class="flex items-baseline gap-1">
<span class="text-4xl font-black tracking-tight text-slate-900 dark:text-white">\$2,500+</span>
<span class="text-sm font-medium text-slate-500 dark:text-slate-400">/ audit</span>
</div>
</div>
<button class="w-full py-3 px-4 mb-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 transform hover:scale-[1.02]">
                            Audit My API
                            <span class="material-symbols-outlined text-sm">bolt</span>
</button>
<div class="space-y-4 flex-1">
<div class="flex gap-3 text-sm text-slate-600 dark:text-slate-300 font-medium">
<span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
<span>Performance Analysis</span>
</div>
<div class="flex gap-3 text-sm text-slate-600 dark:text-slate-300 font-medium">
<span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
<span>Security Vulnerability Review</span>
</div>
<div class="flex gap-3 text-sm text-slate-600 dark:text-slate-300 font-medium">
<span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
<span>Refactoring Roadmap</span>
</div>
<div class="flex gap-3 text-sm text-slate-600 dark:text-slate-300 font-medium">
<span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
<span>Documentation Update</span>
</div>
<div class="flex gap-3 text-sm text-slate-600 dark:text-slate-300 font-medium">
<span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
<span>Best Practices Report</span>
</div>
</div>
</div>
<!-- Card 3: Enterprise Systems -->
<div class="group relative flex flex-col p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
<div class="mb-6">
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Enterprise Systems</h3>
<p class="text-sm text-slate-500 dark:text-slate-400 mb-6 h-10">Complex large-scale solutions tailored to organizational needs.</p>
<div class="flex items-baseline gap-1">
<span class="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Custom</span>
<span class="text-sm font-medium text-slate-500 dark:text-slate-400">pricing</span>
</div>
</div>
<button class="w-full py-3 px-4 mb-8 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 group-hover:bg-slate-800 dark:group-hover:bg-slate-700">
                            Contact Sales
                            <span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">mail</span>
</button>
<div class="space-y-4 flex-1">
<div class="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
<span>Microservices Architecture</span>
</div>
<div class="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
<span>Legacy System Migration</span>
</div>
<div class="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
<span>SLA &amp; Dedicated Support</span>
</div>
<div class="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
<span>Dedicated Development Team</span>
</div>
<div class="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
<span>24/7 Monitoring &amp; Alerts</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- FAQ Section -->
<section class="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark">
<div class="max-w-3xl mx-auto">
<h2 class="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">Frequently Asked Questions</h2>
<div class="flex flex-col gap-4">
<!-- FAQ Item 1 -->
<details class="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark overflow-hidden transition-all duration-300">
<summary class="flex cursor-pointer items-center justify-between p-6 list-none">
<span class="text-base font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors">What is your typical turnaround time?</span>
<span class="transition group-open:rotate-180">
<span class="material-symbols-outlined text-slate-500">expand_more</span>
</span>
</summary>
<div class="px-6 pb-6 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            For standard MVP projects, the timeline is usually 4-6 weeks depending on complexity. API Audits take about 1 week. Enterprise solutions vary significantly and are estimated after initial discovery.
                        </div>
</details>
<!-- FAQ Item 2 -->
<details class="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark overflow-hidden transition-all duration-300">
<summary class="flex cursor-pointer items-center justify-between p-6 list-none">
<span class="text-base font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors">Do you offer post-launch support?</span>
<span class="transition group-open:rotate-180">
<span class="material-symbols-outlined text-slate-500">expand_more</span>
</span>
</summary>
<div class="px-6 pb-6 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            Yes! Every MVP package comes with 2 weeks of bug-fix support. We also offer ongoing maintenance retainers for long-term health and feature additions.
                        </div>
</details>
<!-- FAQ Item 3 -->
<details class="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark overflow-hidden transition-all duration-300">
<summary class="flex cursor-pointer items-center justify-between p-6 list-none">
<span class="text-base font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors">How do payments work?</span>
<span class="transition group-open:rotate-180">
<span class="material-symbols-outlined text-slate-500">expand_more</span>
</span>
</summary>
<div class="px-6 pb-6 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            We typically work with a 50% deposit to start, with the remaining 50% due upon project completion and deployment. For larger enterprise contracts, milestone-based payments are available.
                        </div>
</details>
<!-- FAQ Item 4 -->
<details class="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark overflow-hidden transition-all duration-300">
<summary class="flex cursor-pointer items-center justify-between p-6 list-none">
<span class="text-base font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors">Do you work with existing teams?</span>
<span class="transition group-open:rotate-180">
<span class="material-symbols-outlined text-slate-500">expand_more</span>
</span>
</summary>
<div class="px-6 pb-6 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            Absolutely. I have extensive experience integrating into existing agile workflows, conducting code reviews, and helping upskill junior developers on your team.
                        </div>
</details>
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
