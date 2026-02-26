
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - PROMISE NWHATOR',
  description: 'Projects page for PROMISE NWHATOR.',
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
                        "primary": "#2463eb",
                        "primary-dark": "#1d4ed8",
                        "background-light": "#f6f6f8",
                        "background-dark": "#111621",
                        "card-dark": "#1a202c",
                        "border-dark": "#2d3748",
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
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<!-- Hero Section -->
<div class="mb-12 max-w-3xl">
<h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
                    Architecting Scalable Solutions
                </h1>
<p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    A curated selection of my work across full-stack engineering and system architecture. From high-traffic government portals to complex backend microservices.
                </p>
</div>
<!-- Filters -->
<div class="mb-10 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
<div class="flex items-center gap-3 min-w-max">
<button class="group flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-md shadow-primary/20 transition-all hover:bg-primary-dark">
<span>All Projects</span>
<span class="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs">12</span>
</button>
<button class="group flex items-center gap-2 rounded-full border border-slate-200 dark:border-gray-700 bg-white dark:bg-[#1a202c] px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-all hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-gray-800">
<span>Web Apps</span>
</button>
<button class="group flex items-center gap-2 rounded-full border border-slate-200 dark:border-gray-700 bg-white dark:bg-[#1a202c] px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-all hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-gray-800">
<span>Backend Systems</span>
</button>
<button class="group flex items-center gap-2 rounded-full border border-slate-200 dark:border-gray-700 bg-white dark:bg-[#1a202c] px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-all hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-gray-800">
<span>WordPress</span>
</button>
<button class="group flex items-center gap-2 rounded-full border border-slate-200 dark:border-gray-700 bg-white dark:bg-[#1a202c] px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-all hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-gray-800">
<span>Government Projects</span>
</button>
<button class="group flex items-center gap-2 rounded-full border border-slate-200 dark:border-gray-700 bg-white dark:bg-[#1a202c] px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-all hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-gray-800">
<span>API Systems</span>
</button>
</div>
</div>
<!-- Project Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
<!-- Card 1 -->
<article class="group relative flex flex-col rounded-xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#1a202c] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50">
<div class="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-gray-800 relative">
<!-- Image Overlay Gradient -->
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-10 transition-opacity group-hover:opacity-40"></div>
<img alt="Data dashboard interface with charts" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Abstract data visualization dashboard screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnLd_HZ-ns03c94iM5cDvkggBbXD-jhPVl9s3Kl8xQHv3fGl0xIkqctkurRNnn2gYfUgj0TLF8n5WF9dRD0wZoAV89S_C19UICWZkVMMdZXgt-m5piOTgXCcQC8GBF9rAE_I4mdf54G8FDNSVR6u_Rkh8iAxz04Z7GiQE_TsD3oQU9jsg_vD9RMN8h7ABQSP77RPNaW_bQGiLYin23fzCT06VS4f9KgHaYC45DRMMeFyVolAKC-S5KRXmXE1iqw2i5Aah3yvifMNg"/>
<div class="absolute top-4 right-4 z-20">
<span class="inline-flex items-center rounded-full bg-black/50 backdrop-blur-md px-2.5 py-0.5 text-xs font-medium text-white ring-1 ring-inset ring-white/20">
                                Government Project
                            </span>
</div>
</div>
<div class="flex flex-1 flex-col p-6">
<div class="flex items-start justify-between">
<h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">National Data Portal</h3>
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_outward</span>
</div>
<p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            Secure government data distribution handling 1M+ requests daily. Implemented strict role-based access control and audit logging.
                        </p>
<div class="mt-6 flex flex-wrap gap-2">
<span class="inline-flex items-center rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">FastAPI</span>
<span class="inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10">PostgreSQL</span>
<span class="inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10">Docker</span>
</div>
</div>
<a class="absolute inset-0 z-30" href="#"><span class="sr-only">View Details</span></a>
</article>
<!-- Card 2 -->
<article class="group relative flex flex-col rounded-xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#1a202c] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50">
<div class="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-gray-800 relative">
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-10 transition-opacity group-hover:opacity-40"></div>
<img alt="E-commerce mobile app interface" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Digital shopping cart on mobile screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg1HlgFKCfNH8bCZEzfl2zdon3eV2RF4zvUcYHXritiA_JoJmLkgpD06j-DR4hhbCgQ99xPubFDx98DIqUBvbh4oS-DYTRJkR0jIUZYmZSjRZOMqvwzYibEzWCdbP4LYPILQQsiXfwh1i8Q43ENYiceSlsdXLZ2eDV9mnJUjEQAKIwWtTE5h4KGrshLm5ED3g30hdP3XyyXO9kNKn9VMdC76zP1Pgm0R_dflB-74SZIkeE0ECEjFCu8gAoY9USAf2Raz0PpK-FsTo"/>
</div>
<div class="flex flex-1 flex-col p-6">
<div class="flex items-start justify-between">
<h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">E-Commerce Microservices</h3>
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_outward</span>
</div>
<p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            Scalable microservices architecture for high-volume retail. Optimized for peak traffic loads during sales events.
                        </p>
<div class="mt-6 flex flex-wrap gap-2">
<span class="inline-flex items-center rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">Node.js</span>
<span class="inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10">React</span>
<span class="inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10">AWS Lambda</span>
</div>
</div>
<a class="absolute inset-0 z-30" href="#"><span class="sr-only">View Details</span></a>
</article>
<!-- Card 3 -->
<article class="group relative flex flex-col rounded-xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#1a202c] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50">
<div class="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-gray-800 relative">
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-10 transition-opacity group-hover:opacity-40"></div>
<img alt="Code editor showing backend logic" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Complex code structure on monitor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNLaNSzTFWBBccKThNMOHcmcA1OcI9fej_ED6Cb5T3Bv7MEQu5GfKGAOuGQojM431N_IIhkbZ2EWlTeWSdnGcJikoaRTQNYR2L0UUSeig7jvEv5lscVz1I21FKypaBSbVZWo_leuBL0V6D9BfBHfulg9g7qSmlju6KuFRCW11fyacALVO1voYq38fuNN-9Om7ZNk5EyJJHc-h2BMXa7rImMgKsxZFkJa59o7DDDUSnnGKOn7apKtecSk2PQFtSAqB89MnFNvdkCAY"/>
<div class="absolute top-4 right-4 z-20">
<span class="inline-flex items-center rounded-full bg-black/50 backdrop-blur-md px-2.5 py-0.5 text-xs font-medium text-white ring-1 ring-inset ring-white/20">
                                Migration
                            </span>
</div>
</div>
<div class="flex flex-1 flex-col p-6">
<div class="flex items-start justify-between">
<h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Legacy System Migration</h3>
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_outward</span>
</div>
<p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            Modernizing enterprise mainframes to cloud-native solutions. Reduced operational costs by 40% while improving uptime.
                        </p>
<div class="mt-6 flex flex-wrap gap-2">
<span class="inline-flex items-center rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">Java</span>
<span class="inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10">Spring Boot</span>
<span class="inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10">Kubernetes</span>
</div>
</div>
<a class="absolute inset-0 z-30" href="#"><span class="sr-only">View Details</span></a>
</article>
<!-- Card 4 -->
<article class="group relative flex flex-col rounded-xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#1a202c] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50">
<div class="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-gray-800 relative">
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-10 transition-opacity group-hover:opacity-40"></div>
<img alt="Data analytics dashboard graphs" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Abstract graphs and charts ui" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG0kTtYcXivr36BrHbOqPWJKy-Zgz9ThHUgVuFGlcHJjJ-V8PzBf1xHMNE_T8IGumYVg6GClYuMN5HnJynw39JVqpQFzaJEtVe0NYC12RxWCOqG1cyBJlOIaGVfcNI7PaHCgd3cIQXml-gcjpNhJlBTjRX6YNMZZadQgHpzpJ0ryDEazz0yj7Bd5Dfol5hR4Y3k0JzX-3h6x_sOBpfdmJ-1CLRDELL54E_EYAjP1mVz92qIK2EUwk3_AnWYuBfSSIfpJ9ScOdJGMs"/>
</div>
<div class="flex flex-1 flex-col p-6">
<div class="flex items-start justify-between">
<h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Real-time Analytics API</h3>
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_outward</span>
</div>
<p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            Low-latency data processing pipeline for financial markets. Delivering sub-millisecond response times.
                        </p>
<div class="mt-6 flex flex-wrap gap-2">
<span class="inline-flex items-center rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">Go</span>
<span class="inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10">Kafka</span>
<span class="inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10">Redis</span>
</div>
</div>
<a class="absolute inset-0 z-30" href="#"><span class="sr-only">View Details</span></a>
</article>
<!-- Card 5 -->
<article class="group relative flex flex-col rounded-xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#1a202c] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50">
<div class="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-gray-800 relative">
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-10 transition-opacity group-hover:opacity-40"></div>
<img alt="Wordpress admin dashboard concept" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Wordpress cms interface abstract" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBazO9u_VCVnXQlqt25qGyjjWXbWMQeWGzw285Uy7QiJHaMYXzvUhwftR7OApcuum4ud4Fm5391aXBPklHyvWcgWsK0SzNzLmyD3wiysEcrpAhF8V2londut2bfAlzudelYieBlk_PLDmeKWG2EZDT-ajUpINymANSLYNK4aACGrTzl1BMfbH-lc-XRusNq-GjbWBAyaFZyl3lisRKj1IQuM-TPXsbOX_p4tyujPs4GWEsFwcP3F9JxlTgf0psOTqHdcTGFxRggKbg"/>
</div>
<div class="flex flex-1 flex-col p-6">
<div class="flex items-start justify-between">
<h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">WordPress Plugin Suite</h3>
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_outward</span>
</div>
<p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            Custom payment gateways and database optimization tools. Used by over 500+ active installations.
                        </p>
<div class="mt-6 flex flex-wrap gap-2">
<span class="inline-flex items-center rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">PHP</span>
<span class="inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10">MySQL</span>
<span class="inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10">React</span>
</div>
</div>
<a class="absolute inset-0 z-30" href="#"><span class="sr-only">View Details</span></a>
</article>
<!-- Card 6 -->
<article class="group relative flex flex-col rounded-xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#1a202c] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50">
<div class="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-gray-800 relative">
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-10 transition-opacity group-hover:opacity-40"></div>
<img alt="Smart city dashboard with map" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Map based interface with data points" data-location="Smart City Interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-b365-Knl6lGIeux_DeldnnHL9wywNeuuDJU_AozWjoqJz9OqweTE6D_vvjnMmooFVtTFDo8mQ47y-oO_QIfDCQfrAWVOVWr7V3QFQZB6I1VHy1m7xMMPx8M5HFeET485qMacR7MRlsAXlDMsgbZfMBttshGrAyE3Vuz7_CVnebITzKyRqlv_iPMntHdwxSNYV7nMDW3nFcEkNVIMEv-tDjbdVTAafbNGyhcKwTx0XaFHUXtK3PZViMXI43KT_9UuDuDGqNUE5NM"/>
<div class="absolute top-4 right-4 z-20">
<span class="inline-flex items-center rounded-full bg-black/50 backdrop-blur-md px-2.5 py-0.5 text-xs font-medium text-white ring-1 ring-inset ring-white/20">
                                IoT
                            </span>
</div>
</div>
<div class="flex flex-1 flex-col p-6">
<div class="flex items-start justify-between">
<h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">City Infrastructure Dashboard</h3>
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_outward</span>
</div>
<p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            IoT integration for smart city management. Visualizing sensor data for traffic, weather, and energy usage.
                        </p>
<div class="mt-6 flex flex-wrap gap-2">
<span class="inline-flex items-center rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">Python</span>
<span class="inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10">Django</span>
<span class="inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10">Vue.js</span>
</div>
</div>
<a class="absolute inset-0 z-30" href="#"><span class="sr-only">View Details</span></a>
</article>
</div>
<!-- Empty State (Hidden by default, structure provided for robustness) -->
<div class="hidden flex-col items-center justify-center py-24 text-center">
<div class="rounded-full bg-slate-100 dark:bg-slate-800 p-4">
<span class="material-symbols-outlined text-4xl text-slate-400">search_off</span>
</div>
<h3 class="mt-4 text-lg font-medium text-slate-900 dark:text-white">No projects found</h3>
<p class="mt-2 text-slate-500 dark:text-slate-400">Try adjusting your search or filter to find what you're looking for.</p>
</div>
<!-- Load More (Optional) -->
<div class="mt-16 flex justify-center">
<button class="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-gray-700 bg-white dark:bg-[#1a202c] px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark transition-all">
<span>Load More Projects</span>
<span class="material-symbols-outlined text-base">expand_more</span>
</button>
</div>
</div>
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
