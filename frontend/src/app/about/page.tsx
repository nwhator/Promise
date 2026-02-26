
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Promise Ayobami Promise Ayobami Promise Ayobami Nwhator | Backend Engineer',
  description: 'About page for PROMISE NWHATOR.',
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  const htmlContent = `
    



<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "var(--primary)",
                        "background-light": "#f6f6f8",
                        "background-dark": "var(--background)", // Matching the provided component bg
                        "card-dark": "var(--surface)", // Slightly lighter for cards
                        "border-dark": "var(--border)", // Border color from component
                        "text-main": "#f8fafc",
                        "text-muted": "#9da6b9",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "sans": ["Inter", "sans-serif"],
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Inter', sans-serif;
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



<div class="min-h-screen flex flex-col">
<!-- Navbar -->

<!-- Main Layout -->
<main class="flex-grow">
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
<!-- Sidebar (Sticky) -->
<aside class="lg:col-span-4 xl:col-span-3">
<div class="sticky top-24 space-y-6">
<!-- Profile Card -->
<div class="rounded-xl border border-slate-200 dark:border-border-dark bg-surface dark:card-premium p-6 shadow-sm">
<div class="flex flex-col items-center text-center">
<div class="relative mb-4 h-32 w-32 overflow-hidden rounded-full ring-4 ring-slate-100 dark:ring-border-dark">
<img alt="Portrait of Promise Ayobami Nwhator" class="h-full w-full object-cover" data-alt="Professional headshot of a software engineer" src="/me.jpeg"/>
<div class="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 ring-2 ring-white dark:ring-card-dark"></div>
</div>
<h1 class="text-xl font-bold text-foreground dark:text-white">Promise Ayobami Nwhator</h1>
<p class="mt-1 text-sm font-medium text-primary">Backend Engineer • WordPress Systems Architect</p>
<p class="mt-4 text-sm text-slate-400 dark:text-text-muted leading-relaxed">
                                        I build secure, scalable, and revenue-driven digital platforms. From backend APIs to full WordPress journal systems and e-commerce platforms, I help organizations turn ideas into stable, production-ready solutions.
                                    </p>
<div class="mt-6 flex gap-3">
<a class="group flex h-10 w-10 items-center justify-center rounded-full bg-surface-brighter dark:bg-border-dark text-slate-400 dark:text-text-muted transition-all hover:bg-primary hover:text-white" href="https://github.com/nwhator" target="_blank" rel="noreferrer">
<span class="material-symbols-outlined text-[20px]">code</span> <!-- Github metaphor -->
</a>
<a class="group flex h-10 w-10 items-center justify-center rounded-full bg-surface-brighter dark:bg-border-dark text-slate-400 dark:text-text-muted transition-all hover:bg-primary hover:text-white" href="https://linkedin.com/in/nwhator" target="_blank" rel="noreferrer">
<span class="material-symbols-outlined text-[20px]">work</span> <!-- LinkedIn metaphor -->
</a>
<a class="group flex h-10 w-10 items-center justify-center rounded-full bg-surface-brighter dark:bg-border-dark text-slate-400 dark:text-text-muted transition-all hover:bg-primary hover:text-white" href="mailto:nwhator@gmail.com">
<span class="material-symbols-outlined text-[20px]">alternate_email</span> <!-- Twitter metaphor -->
</a>
</div>
<div class="mt-6 w-full pt-6 border-t border-slate-200 dark:border-border-dark">
<div class="flex items-center gap-3 text-sm text-slate-400 dark:text-text-muted mb-2">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span>Nigeria</span>
</div>
<div class="flex items-center gap-3 text-sm text-slate-400 dark:text-text-muted">
<span class="material-symbols-outlined text-[18px]">mail</span>
<span>nwhator@gmail.com</span>
</div>
</div>
</div>
</div>
<!-- Quick Stats (Optional for sidebar) -->
<div class="grid grid-cols-2 gap-3">
<div class="rounded-xl bg-primary/10 p-4 text-center border border-primary/20">
<span class="block text-2xl font-black text-primary">3+</span>
<span class="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-text-muted">Years Exp.</span>
</div>
<div class="rounded-xl bg-surface-brighter dark:card-premium border border-slate-200 dark:border-border-dark p-4 text-center">
<span class="block text-2xl font-black text-foreground dark:text-white">20+</span>
<span class="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-text-muted">Projects</span>
</div>
</div>
</div>
</aside>
<!-- Main Content Area -->
<div class="lg:col-span-8 xl:col-span-9 space-y-16">
<!-- Introduction / Philosophy Header -->
<section className="animate-fade-in">
<div class="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
<span class="mr-1 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                                Engineering Philosophy
                            </div>
<h2 class="text-4xl font-black tracking-tight text-foreground dark:text-white sm:text-5xl mb-6">
                                Structure drives growth.<br/>
<span class="text-slate-400 dark:text-slate-400">Performance keeps it sustainable.</span>
</h2>
<div class="prose prose-lg dark:prose-invert max-w-none text-slate-400 dark:text-text-muted">
<p>
                                    Whether it’s a backend system, a journal platform, or an e-commerce website — I focus on performance, structure, and long-term sustainability.
                                </p>
</div>
</section>
<!-- Methodology Grid -->
<section className="animate-fade-in">
<h3 class="text-2xl font-bold text-foreground dark:text-white mb-8 flex items-center gap-3">
<span class="material-symbols-outlined text-primary">architecture</span>
                                The Methodology
                            </h3>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Card 1 -->
<div class="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-border-dark bg-surface dark:card-premium p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
<div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-surface-brighter dark:bg-background-dark text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span class="material-symbols-outlined">code</span>
</div>
<h4 class="mb-2 text-lg font-bold text-foreground dark:text-white">Clean Code</h4>
<p class="text-sm leading-relaxed text-slate-400 dark:text-text-muted">
                                        Writing self-documenting code with clear separation of concerns using Domain-Driven Design principles.
                                    </p>
</div>
<!-- Card 2 -->
<div class="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-border-dark bg-surface dark:card-premium p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
<div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-surface-brighter dark:bg-background-dark text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span class="material-symbols-outlined">bolt</span>
</div>
<h4 class="mb-2 text-lg font-bold text-foreground dark:text-white">Performance First</h4>
<p class="text-sm leading-relaxed text-slate-400 dark:text-text-muted">
                                        Optimizing for low latency and high throughput from the start. Database indexing and caching strategies are not afterthoughts.
                                    </p>
</div>
<!-- Card 3 -->
<div class="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-border-dark bg-surface dark:card-premium p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
<div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-surface-brighter dark:bg-background-dark text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span class="material-symbols-outlined">layers</span>
</div>
<h4 class="mb-2 text-lg font-bold text-foreground dark:text-white">Scalable Systems</h4>
<p class="text-sm leading-relaxed text-slate-400 dark:text-text-muted">
                                        Designing distributed systems that handle growth gracefully. WordPress Systems when needed, Monoliths when practical.
                                    </p>
</div>
</div>
</section>
<!-- Core Strengths -->
<section className="animate-fade-in">
<h3 class="text-2xl font-bold text-foreground dark:text-white mb-8 flex items-center gap-3">
<span class="material-symbols-outlined text-primary">psychology</span>
                                Core Strengths
                            </h3>
<div class="rounded-2xl border border-slate-200 dark:border-border-dark bg-surface dark:bg-background-dark/50 p-6 md:p-8">
<div class="space-y-8">
<div>
<h4 class="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">Languages</h4>
<div class="flex flex-wrap gap-3">
<span class="px-4 py-2 rounded-md bg-surface dark:card-premium border border-slate-200 dark:border-border-dark text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm">C</span>
<span class="px-4 py-2 rounded-md bg-surface dark:card-premium border border-slate-200 dark:border-border-dark text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm">Astro</span>
<span class="px-4 py-2 rounded-md bg-surface dark:card-premium border border-slate-200 dark:border-border-dark text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm">Python</span>
<span class="px-4 py-2 rounded-md bg-surface dark:card-premium border border-slate-200 dark:border-border-dark text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm">Laravel PHP</span>
<span class="px-4 py-2 rounded-md bg-surface dark:card-premium border border-slate-200 dark:border-border-dark text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm">RESTful API Design</span>
</div>
</div>
<div>
<h4 class="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">Infrastructure &amp; Tools</h4>
<div class="flex flex-wrap gap-3">
<span class="px-4 py-2 rounded-md bg-surface dark:card-premium border border-slate-200 dark:border-border-dark text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm">MyRESTful API Design</span>
<span class="px-4 py-2 rounded-md bg-surface dark:card-premium border border-slate-200 dark:border-border-dark text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm">Docker</span>
<span class="px-4 py-2 rounded-md bg-surface dark:card-premium border border-slate-200 dark:border-border-dark text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm">Flutter</span>
<span class="px-4 py-2 rounded-md bg-surface dark:card-premium border border-slate-200 dark:border-border-dark text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm">Firebase</span>
<span class="px-4 py-2 rounded-md bg-surface dark:card-premium border border-slate-200 dark:border-border-dark text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm">SEO Optimization</span>
<span class="px-4 py-2 rounded-md bg-surface dark:card-premium border border-slate-200 dark:border-border-dark text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm">Linux + Git Workflows</span>
</div>
</div>
<div>
<h4 class="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">Architecture Patterns</h4>
<div class="flex flex-wrap gap-3">
<span class="px-4 py-2 rounded-md bg-surface dark:card-premium border border-slate-200 dark:border-border-dark text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm">WordPress Systems</span>
<span class="px-4 py-2 rounded-md bg-surface dark:card-premium border border-slate-200 dark:border-border-dark text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm">WooCommerce</span>
<span class="px-4 py-2 rounded-md bg-surface dark:card-premium border border-slate-200 dark:border-border-dark text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm">Hosting + Migration</span>
<span class="px-4 py-2 rounded-md bg-surface dark:card-premium border border-slate-200 dark:border-border-dark text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm">Security Hardening</span>
</div>
</div>
</div>
</div>
</section>
<!-- Education Timeline -->
<section className="animate-fade-in">
<h3 class="text-2xl font-bold text-foreground dark:text-white mb-8 flex items-center gap-3">
<span class="material-symbols-outlined text-primary">school</span>
                                Education &amp; Certifications
                            </h3>
<div class="relative border-l border-slate-200 dark:border-border-dark ml-3 space-y-10 pb-4">
<!-- Timeline Item 1 -->
<div class="relative pl-8">
<span class="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-white dark:ring-background-dark"></span>
<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
<h4 class="text-lg font-bold text-foreground dark:text-white">BSc. Computer Science & Engineering</h4>
<span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">Completed</span>
</div>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Obafemi Awolowo University</p>
<p class="text-sm text-slate-400 dark:text-text-muted">
                                        Focused on Distributed Systems and Machine Learning algorithms. Thesis on "Optimizing Load Balancing in WordPress Systems Architectures."
                                    </p>
</div>
<!-- Timeline Item 2 -->
<div class="relative pl-8">
<span class="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-white dark:ring-background-dark"></span>
<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
<h4 class="text-lg font-bold text-foreground dark:text-white">Certified Software Engineer - ALX</h4>
<span class="text-xs font-bold text-slate-500 bg-surface-brighter dark:bg-border-dark px-2 py-1 rounded">Backend Engineering Program</span>
</div>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">ALX</p>
<p class="text-sm text-slate-400 dark:text-text-muted">
                                        Intensive training in C programming, Python backend development, Node.js systems, API architecture, Docker containerization, and agile collaboration.
                                    </p>
</div>
<!-- Timeline Item 3 -->
<div class="relative pl-8">
<span class="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-white dark:ring-background-dark"></span>
<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
<h4 class="text-lg font-bold text-foreground dark:text-white">MyRESTful API Design Certified Solutions Architect</h4>
<span class="text-xs font-bold text-slate-500 bg-surface-brighter dark:bg-border-dark px-2 py-1 rounded">2021</span>
</div>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Amazon Web Services</p>
<p class="text-sm text-slate-400 dark:text-text-muted">
                                        Professional certification validation expertise in designing distributed systems on MyRESTful API Design.
                                    </p>
</div>
</div>
</section>
<!-- CTA Footer inside main content -->
<div class="rounded-2xl bg-gradient-to-r from-primary/20 to-transparent p-1">
<div class="rounded-xl bg-surface dark:card-premium p-8 md:p-12 text-center">
<h3 class="text-2xl font-bold text-foreground dark:text-white mb-4">Ready to build something robust?</h3>
<p class="text-slate-400 dark:text-text-muted mb-8 max-w-xl mx-auto">
                                    I'm currently available for consulting and architectural reviews. Let's discuss how we can scale your infrastructure.
                                </p>
<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
<button class="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition-colors shadow-lg shadow-primary/25">
                                        Get in Touch
                                    </button>
<button class="w-full sm:w-auto px-8 py-3 bg-transparent border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white font-bold rounded-lg hover:bg-surface-brighter dark:hover:bg-border-dark transition-colors">
                                        View Portfolio
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>




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
      
      <div className="relative animate-fade-in">
        {parse(htmlContent)}
      </div>
    </div>
  );
}
