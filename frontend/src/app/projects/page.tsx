
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Portfolio | Promise Ayobami Nwhator',
  description: 'Explore my diverse portfolio of production-ready digital solutions, including SaaS platforms, e-commerce systems, and scalable academic publishing infrastructure.',
  alternates: {
    canonical: '/projects',
  },
};

export default function Projects() {
  const htmlContent = `
    



<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "var(--primary)",
                        "primary-dark": "var(--primary)",
                        "background-light": "#f6f6f8",
                        "background-dark": "var(--background)",
                        "card-dark": "var(--surface)",
                        "border-dark": "var(--border)",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "body": ["Inter", "sans-serif"],
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Inter', sans-serif;
        }
        /* Custom scrollbar for a cleaner look */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #111621;
        }
        ::-webkit-scrollbar-thumb {
            background: #2d3748;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #4a5568;
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



<!-- Top Navigation -->

<!-- Main Content -->
<main class="flex-grow">
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<!-- Hero Section -->
<div class="mb-12 max-w-3xl">
<h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground dark:text-white mb-4">
                    Architecting Scalable Solutions
                </h1>
<p class="text-lg text-slate-400 dark:text-slate-400 leading-relaxed">
                    A curated selection of my work across full-stack engineering and system architecture. From high-traffic government portals to complex backend microservices.
                </p>
</div>
<!-- Filters -->
<div class="mb-10 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
<div class="flex items-center gap-3 min-w-max">
<button class="group flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-md shadow-primary/20 transition-all hover:bg-primary-dark">
<span>All Solutions</span>
<span class="flex h-5 w-5 items-center justify-center rounded-full bg-surface/20 text-xs">12</span>
</button>
<button class="group flex items-center gap-2 rounded-full border border-border-dark bg-surface/50 px-4 py-2 text-sm font-medium text-slate-400 transition-all hover:border-primary hover:text-primary">
<span>SaaS & Web Apps</span>
</button>
<button class="group flex items-center gap-2 rounded-full border border-border-dark bg-surface/50 px-4 py-2 text-sm font-medium text-slate-400 transition-all hover:border-accent hover:text-accent">
<span>E-commerce</span>
</button>
<button class="group flex items-center gap-2 rounded-full border border-border-dark bg-surface/50 px-4 py-2 text-sm font-medium text-slate-400 transition-all hover:border-emerald-500 hover:text-emerald-500">
<span>Infrastructure</span>
</button>
</div>
</div>
<!-- Project Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
<!-- 1. The Lum Studios -->
<article class="group relative flex flex-col rounded-xl border border-border-dark bg-surface/30 overflow-hidden transition-all duration-300 hover:border-primary/50">
<div class="aspect-video w-full overflow-hidden bg-slate-900 relative">
<img alt="The Lum Studios" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="/lum_studios.png"/>
<div class="absolute top-4 left-4 z-20">
<span class="px-2 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded border border-primary/30 uppercase tracking-tighter">SaaS & Booking</span>
</div>
</div>
<div class="flex flex-1 flex-col p-6">
<h3 class="text-xl font-bold text-white group-hover:text-primary transition-colors">The Lum Studios</h3>
<p class="mt-3 flex-1 text-sm leading-relaxed text-slate-400">Advanced photography booking engine with automated SMTP notifications and real-time scheduling management.</p>
<div class="mt-6 flex items-center justify-between">
<div class="flex gap-2">
<span class="px-2 py-1 text-[10px] font-mono text-primary bg-primary/10 rounded">Next.js</span>
<span class="px-2 py-1 text-[10px] font-mono text-primary bg-primary/10 rounded">Node.js</span>
</div>
<a href="/case-study-lum-studios" class="text-xs font-bold text-white hover:text-primary flex items-center gap-1 transition-colors relative z-40">
Case Study <span class="material-symbols-outlined text-xs">arrow_outward</span>
</a>
</div>
</div>
<a class="absolute inset-0 z-30" href="https://thelumstudios.com/" target="_blank"></a>
</article>

<!-- 2. Agricyclers UK -->
<article class="group relative flex flex-col rounded-xl border border-border-dark bg-surface/30 overflow-hidden transition-all duration-300 hover:border-accent/50">
<div class="aspect-video w-full overflow-hidden bg-slate-900 relative">
<img alt="Agricyclers UK" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="/agricyclers.png"/>
<div class="absolute top-4 left-4 z-20">
<span class="px-2 py-1 bg-accent/20 text-accent text-[10px] font-bold rounded border border-accent/30 uppercase tracking-tighter">E-commerce</span>
</div>
</div>
<div class="flex flex-1 flex-col p-6">
<h3 class="text-xl font-bold text-white group-hover:text-accent transition-colors">Agricyclers UK</h3>
<p class="mt-3 flex-1 text-sm leading-relaxed text-slate-400">High-conversion e-commerce storefront for agricultural supplies with complex variation logic and custom checkout flows.</p>
<div class="mt-6 flex items-center justify-between">
<div class="flex gap-2">
<span class="px-2 py-1 text-[10px] font-mono text-accent bg-accent/10 rounded">PHP</span>
<span class="px-2 py-1 text-[10px] font-mono text-accent bg-accent/10 rounded">Tailwind</span>
</div>
<a href="/case-study-agricyclers" class="text-xs font-bold text-white hover:text-accent flex items-center gap-1 transition-colors relative z-40">
Case Study <span class="material-symbols-outlined text-xs">arrow_outward</span>
</a>
</div>
</div>
<a class="absolute inset-0 z-30" href="https://agricyclers.co.uk/" target="_blank"></a>
</article>

<!-- 3. Medical Journal OJS -->
<article class="group relative flex flex-col rounded-xl border border-border-dark bg-surface/30 overflow-hidden transition-all duration-300 hover:border-emerald-500/50">
<div class="aspect-video w-full overflow-hidden bg-slate-900 relative">
<img alt="OJS Journals" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="/ojs_journals.png"/>
<div class="absolute top-4 left-4 z-20">
<span class="px-2 py-1 bg-emerald-500/20 text-emerald-500 text-[10px] font-bold rounded border border-emerald-500/30 uppercase tracking-tighter">Infrastructure</span>
</div>
</div>
<div class="flex flex-1 flex-col p-6">
<h3 class="text-xl font-bold text-white group-hover:text-emerald-500 transition-colors">Journal Network OJS</h3>
<p class="mt-3 flex-1 text-sm leading-relaxed text-slate-400">Scalable academic infrastructure for journals like NDJ, NHSJ, and NJBCS. Hardened security and SMTP integration.</p>
<div class="mt-6 flex items-center justify-between">
<div class="flex gap-2">
<span class="px-2 py-1 text-[10px] font-mono text-emerald-500 bg-emerald-500/10 rounded">OJS</span>
<span class="px-2 py-1 text-[10px] font-mono text-emerald-500 bg-emerald-500/10 rounded">Linux</span>
</div>
<a href="/case-study-ojs-infrastructure" class="text-xs font-bold text-white hover:text-emerald-500 flex items-center gap-1 transition-colors relative z-40">
Case Study <span class="material-symbols-outlined text-xs">arrow_outward</span>
</a>
</div>
</div>
<a class="absolute inset-0 z-30" href="/case-study-ojs-infrastructure"></a>
</article>

<!-- 4. Health World -->
<article class="group relative flex flex-col rounded-xl border border-border-dark bg-surface/30 overflow-hidden transition-all duration-300 hover:border-primary/50">
<div class="aspect-video w-full overflow-hidden bg-slate-900 relative">
<img alt="Health World hospitals app" class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM9rwfnKvT5WC88CDomyYnnmsFlsTm9gUEnbH5sQo4OIFt1-K3hOrAPrRz0KiHj1r7LDj6o63GYub3jFfTR0BLk9sJWOz_9j907ZBJfSlq7NIPtgogHNQnZ48bYGWcvGm28IIy8VkEhun3JCNNZ48ivWK7QxESInlPoLPMJb8gtDSW19_grTpJigIJiZNWm1BcwQryuSBqrxu7kfSDzsw3VJlwHskUykDUdUiAm9Q1cHeUYlsY9ATQndgkIOpVSNMea4QwT5Z-o50"/>
<div class="absolute top-4 left-4 z-20">
<span class="px-2 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded border border-primary/30 uppercase tracking-tighter">HealthTech</span>
</div>
</div>
<div class="p-6 flex flex-col flex-1">
<h3 class="text-xl font-bold text-white group-hover:text-primary">Health World Platform</h3>
<p class="text-sm text-slate-400 mt-3 leading-relaxed">A comprehensive hospital management and patient engagement platform with real-time data tracking.</p>
<div class="mt-6 flex flex-wrap gap-2">
<span class="px-2 py-1 text-[10px] font-mono text-primary bg-primary/10 rounded">Next.js</span>
<span class="px-2 py-1 text-[10px] font-mono text-primary bg-primary/10 rounded">Node.js</span>
</div>
</div>
<a class="absolute inset-0 z-30" href="https://health-world-psi.vercel.app/hospitals" target="_blank"></a>
</article>

<!-- 5. EventPal -->
<article class="group relative flex flex-col rounded-xl border border-border-dark bg-surface/30 overflow-hidden transition-all duration-300 hover:border-primary/50">
<div class="aspect-video w-full overflow-hidden bg-slate-900 relative">
<img alt="EventPal" class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP2k1Tx38Mh1xnOx8eADfMRyEkRkepTX8HziwptHQ6ipbzpmhqKEgN-5-vQpveFrrximKpoChR3m-yJs5JNDn-wwShzXrvte5vfpheCm5pwbOdrs5momKolhrYNCpmFmn3YuAIRj9eJNVuqTgWuCX8B7Kss6xJH4ZhVZPneVVdx6eSpYfczUin0uHtPi_69QtluP_v6qwZ78pd3dIUlluadTTbdZpvJfeO8ENMhR_B8BEY5qwU778JEgrumRkizenwIB0UriTxkno"/>
<div class="absolute top-4 left-4 z-20">
<span class="px-2 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded border border-primary/30 uppercase tracking-tighter">Event SaaS</span>
</div>
</div>
<div class="p-6 flex flex-col flex-1">
<h3 class="text-xl font-bold text-white group-hover:text-primary">EventPal</h3>
<p class="text-sm text-slate-400 mt-3 leading-relaxed">Dynamic event ticketing and management system with secure payment processing and seat reservation.</p>
<div class="mt-6 flex flex-wrap gap-2">
<span class="px-2 py-1 text-[10px] font-mono text-primary bg-primary/10 rounded">Next.js</span>
<span class="px-2 py-1 text-[10px] font-mono text-primary bg-primary/10 rounded">Node.js</span>
</div>
</div>
<a class="absolute inset-0 z-30" href="https://eventpal-indol.vercel.app/" target="_blank"></a>
</article>

<!-- 6. PulseSafe -->
<article class="group relative flex flex-col rounded-xl border border-border-dark bg-surface/30 overflow-hidden transition-all duration-300 hover:border-primary/50">
<div class="aspect-video w-full overflow-hidden bg-slate-900 relative">
<img alt="PulseSafe" class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOO0N_xwC8WlXBPpqE41RVTM3pmaU5-9gUdRqmDOWjAgwdnvuUGEjkwqfSdglzebcq6Vml5aEM3v14zvjGJ5TcfzE1j1rcu5JvPWLE54c0cgHrSD2DzMji5Te0ZDyTkwoxQuOM0aytdjfqKgytqwT4dh-gr8MmPeSMJPygIhQ4oWmhgglka9pz0JvqzA5hlTMmlWKArscRH2Mpp8nSutdAcHk-BP3t3UbWydroaZ010dl2Q3KgaQ9IJNGLOh_aTwcQSAwhuQ8GDKA"/>
<div class="absolute top-4 left-4 z-20">
<span class="px-2 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded border border-primary/30 uppercase tracking-tighter">Personal Venture</span>
</div>
</div>
<div class="p-6 flex flex-col flex-1">
<h3 class="text-xl font-bold text-white group-hover:text-primary">PulseSafe</h3>
<p class="text-sm text-slate-400 mt-3 leading-relaxed">A startup initiative focused on digital safety and verification systems. Currently in continuous production phase.</p>
<div class="mt-6 flex flex-wrap gap-2">
<span class="px-2 py-1 text-[10px] font-mono text-primary bg-primary/10 rounded">Next.js</span>
<span class="px-2 py-1 text-[10px] font-mono text-primary bg-primary/10 rounded">Node.js</span>
</div>
</div>
<a class="absolute inset-0 z-30" href="https://pulsesafe.vercel.app/" target="_blank"></a>
</article>

<!-- 7. StrataCore -->
<article class="group relative flex flex-col rounded-xl border border-border-dark bg-surface/30 overflow-hidden transition-all duration-300 hover:border-accent/50">
<div class="aspect-video w-full overflow-hidden bg-slate-900 relative">
<img alt="StrataCore Engineering" class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNLaNSzTFWBBccKThNMOHcmcA1OcI9fej_ED6Cb5T3Bv7MEQu5GfKGAOuGQojM431N_IIhkbZ2EWlTeWSdnGcJikoaRTQNYR2L0UUSeig7jvEv5lscVz1I21FKypaBSbVZWo_leuBL0V6D9BfBHfulg9g7qSmlju6KuFRCW11fyacALVO1voYq38fuNN-9Om7ZNk5EyJJHc-h2BMXa7rImMgKsxZFkJa59o7DDDUSnnGKOn7apKtecSk2PQFtSAqB89MnFNvdkCAY"/>
<div class="absolute top-4 left-4 z-20">
<span class="px-2 py-1 bg-accent/20 text-accent text-[10px] font-bold rounded border border-accent/30 uppercase tracking-tighter">Engineering</span>
</div>
</div>
<div class="p-6 flex flex-col flex-1">
<h3 class="text-xl font-bold text-white group-hover:text-accent transition-colors">StrataCore Engineering</h3>
<p class="text-sm text-slate-400 mt-3 leading-relaxed">Professional engineering solutions portal with robust project display and client interaction modules.</p>
<div class="mt-6 flex flex-wrap gap-2">
<span class="px-2 py-1 text-[10px] font-mono text-accent bg-accent/10 rounded">PHP</span>
<span class="px-2 py-1 text-[10px] font-mono text-accent bg-accent/10 rounded">Tailwind</span>
</div>
</div>
<a class="absolute inset-0 z-30" href="https://stratacore.gobrand.now/" target="_blank"></a>
</article>

<!-- 8. Biskas Kitchen -->
<article class="group relative flex flex-col rounded-xl border border-border-dark bg-surface/30 overflow-hidden transition-all duration-300 hover:border-accent/50">
<div class="aspect-video w-full overflow-hidden bg-slate-900 relative">
<img alt="Biskas Kitchen" class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG0kTtYcXivr36BrHbOqPWJKy-Zgz9ThHUgVuFGlcHJjJ-V8PzBf1xHMNE_T8IGumYVg6GClYuMN5HnJynw39JVqpQFzaJEtVe0NYC12RxWCOqG1cyBJlOIaGVfcNI7PaHCgd3cIQXml-gcjpNhJlBTjRX6YNMZZadQgHpzpJ0ryDEazz0yj7Bd5Dfol5hR4Y3k0JzX-3h6x_sOBpfdmJ-1CLRDELL54E_EYAjP1mVz92qIK2EUwk3_AnWYuBfSSIfpJ9ScOdJGMs"/>
<div class="absolute top-4 left-4 z-20">
<span class="px-2 py-1 bg-accent/20 text-accent text-[10px] font-bold rounded border border-accent/30 uppercase tracking-tighter">Gastronomy</span>
</div>
</div>
<div class="p-6 flex flex-col flex-1">
<h3 class="text-xl font-bold text-white group-hover:text-accent transition-colors">Biskas Kitchen</h3>
<p class="text-sm text-slate-400 mt-3 leading-relaxed">Food service platform featuring dynamic menus and internal order tracking systems.</p>
<div class="mt-6 flex flex-wrap gap-2">
<span class="px-2 py-1 text-[10px] font-mono text-accent bg-accent/10 rounded">PHP</span>
<span class="px-2 py-1 text-[10px] font-mono text-accent bg-accent/10 rounded">Tailwind</span>
</div>
</div>
<a class="absolute inset-0 z-30" href="http://www.biskaskitchen.com" target="_blank"></a>
</article>

<!-- 9. Music By Code -->
<article class="group relative flex flex-col rounded-xl border border-border-dark bg-surface/30 overflow-hidden transition-all duration-300 hover:border-emerald-500/50">
<div class="aspect-video w-full overflow-hidden bg-slate-900 relative">
<img alt="Music By Code" class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-b365-Knl6lGIeux_DeldnnHL9wywNeuuDJU_AozWjoqJz9OqweTE6D_vvjnMmooFVtTFDo8mQ47y-oO_QIfDCQfrAWVOVWr7V3QFQZB6I1VHy1m7xMMPx8M5HFeET485qMacR7MRlsAXlDMsgbZfMBttshGrAyE3Vuz7_CVnebITzKyRqlv_iPMntHdwxSNYV7nMDW3nFcEkNVIMEv-tDjbdVTAafbNGyhcKwTx0XaFHUXtK3PZViMXI43KT_9UuDuDGqNUE5NM"/>
<div class="absolute top-4 left-4 z-20">
<span class="px-2 py-1 bg-emerald-500/20 text-emerald-500 text-[10px] font-bold rounded border border-emerald-500/30 uppercase tracking-tighter">Hobby Project</span>
</div>
</div>
<div class="p-6 flex flex-col flex-1">
<h3 class="text-xl font-bold text-white group-hover:text-emerald-500 transition-colors">Music By Code</h3>
<p class="text-sm text-slate-400 mt-3 leading-relaxed">Experimental audio-visual project built with Astro and Tone.js for generative music sequences.</p>
<div class="mt-6 flex flex-wrap gap-2">
<span class="px-2 py-1 text-[10px] font-mono text-emerald-500 bg-emerald-500/10 rounded">Astro</span>
<span class="px-2 py-1 text-[10px] font-mono text-emerald-500 bg-emerald-500/10 rounded">Tone.js</span>
</div>
</div>
<a class="absolute inset-0 z-30" href="https://music-by-code.vercel.app/" target="_blank"></a>
</article>
</div>
<!-- Empty State (Hidden by default, structure provided for robustness) -->
<div class="hidden flex-col items-center justify-center py-24 text-center">
<div class="rounded-full bg-surface-brighter dark:bg-slate-800 p-4">
<span class="material-symbols-outlined text-4xl text-slate-400">search_off</span>
</div>
<h3 class="mt-4 text-lg font-medium text-foreground dark:text-white">No projects found</h3>
<p class="mt-2 text-slate-500 dark:text-slate-400">Try adjusting your search or filter to find what you're looking for.</p>
</div>
<!-- Load More (Optional) -->
<div class="mt-16 flex justify-center">
<button class="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-gray-700 bg-surface dark:bg-[#1a202c] px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm hover:bg-surface dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark transition-all">
<span>Load More Projects</span>
<span class="material-symbols-outlined text-base">expand_more</span>
</button>
</div>
</div>
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
