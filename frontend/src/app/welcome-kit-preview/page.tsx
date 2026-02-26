
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome Kit Preview - Client Success',
  description: 'Welcome Kit Preview page for PROMISE NWHATOR.',
  alternates: {
    canonical: '/welcome-kit-preview',
  },
};

export default function WelcomeKitPreview() {
  const htmlContent = `
    



<!-- Google Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Config -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "var(--primary)",
                        "background-light": "#f5f7f8",
                        "background-dark": "var(--background)", /* Adjusted to a deeper navy/slate */
                        "surface-dark": "#1e293b", /* Slightly lighter than background for cards */
                        "surface-highlight": "#334155", /* Borders/highlights */
                    },
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.375rem", 
                        "lg": "0.5rem", 
                        "xl": "0.75rem", 
                        "2xl": "1rem",
                        "full": "9999px"
                    },
                    boxShadow: {
                        'glow': '0 0 20px -5px rgba(13, 150, 242, 0.3)',
                    }
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Manrope', sans-serif;
        }
        .perspective-container {
            perspective: 1000px;
        }
        .document-card {
            transform: rotateY(-5deg) rotateX(5deg);
            transition: transform 0.5s ease;
        }
        .document-card:hover {
            transform: rotateY(0deg) rotateX(0deg) scale(1.02);
        }
    </style>


<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<!-- Header -->
<header class="sticky top-0 z-50 flex items-center justify-between border-b border-surface-highlight/30 bg-background-dark/80 backdrop-blur-md px-6 py-4 lg:px-10">
<div class="flex items-center gap-4 text-white">
<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
<span class="material-symbols-outlined text-2xl">diamond</span>
</div>
<h2 class="text-xl font-bold leading-tight tracking-tight text-white">Promise Ayobami Nwhator</h2>
</div>
<div class="hidden md:flex flex-1 justify-end gap-8 items-center">
<nav class="flex gap-6">
<a class="text-slate-400 hover:text-white text-sm font-medium transition-colors" href="#">Portfolio</a>
<a class="text-slate-400 hover:text-white text-sm font-medium transition-colors" href="#">Services</a>
<a class="text-slate-400 hover:text-white text-sm font-medium transition-colors" href="#">About</a>
</nav>
<div class="h-6 w-px bg-surface-highlight"></div>
<div class="flex items-center gap-3">
<div class="flex flex-col items-end">
<span class="text-xs font-medium text-slate-400">Logged in as</span>
<span class="text-sm font-bold text-white">Client Name</span>
</div>
<div class="h-10 w-10 overflow-hidden rounded-full border border-surface-highlight bg-surface-dark">
<img alt="Client Profile Avatar" class="h-full w-full object-cover" data-alt="Close up of a smiling man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6KBJWQvpaDk4WradpSPInIAXnDgGvNjqxF6gF9y6oMYVt4xjkTcCsQSbUypdhh_iSeSk1JXJHf7zkAN-_NDly4a557JXMbZdzSRa_UoFBGL7eKhO-Jx8vqyKh_gPEeuKiA1r6nHOaAneAyrCVJynvKInjK3ALkLzyYD2FETzjB3TFfaxinnsu5-1ZqJQiULYBVV6HNGATre2wb0XO7uImvIc4VI7wy4-OgeQIzJh9SNmxznwEF_Py1pPNVr77XhrEGTqwdGqfPrY"/>
</div>
</div>
</div>
<!-- Mobile Menu Toggle -->
<button class="md:hidden text-white">
<span class="material-symbols-outlined">menu</span>
</button>
</header>
<main class="flex-grow flex flex-col justify-center">
<div class="container mx-auto px-4 py-10 lg:px-8 max-w-7xl">
<!-- Intro Text -->
<div class="mb-12 text-center">
<div class="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                        Project Kickoff Phase
                    </div>
<h1 class="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl mb-4">
                        Welcome Aboard, <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Client Name</span>
</h1>
<p class="mx-auto max-w-2xl text-lg text-slate-400">
                        We are excited to start this journey with you. Below is your personalized Welcome Kit detailing our roadmap, communication channels, and next steps.
                    </p>
</div>
<!-- Main Content Grid -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
<!-- Left Column: Feature Highlights -->
<div class="lg:col-span-5 flex flex-col gap-4 order-2 lg:order-1">
<h3 class="text-xl font-bold text-white mb-2">What's Inside Your Welcome Kit</h3>
<!-- Feature Item 1 -->
<div class="group flex items-start gap-4 rounded-xl border border-surface-highlight/40 bg-surface-dark/50 p-4 transition-all hover:bg-surface-dark hover:border-primary/50 hover:shadow-glow cursor-default">
<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-highlight group-hover:bg-primary text-white transition-colors">
<span class="material-symbols-outlined">chat</span>
</div>
<div>
<h4 class="text-base font-bold text-white">Communication Guidelines</h4>
<p class="mt-1 text-sm text-slate-400 group-hover:text-slate-300">Detailed protocols on how and when we connect to keep you updated on progress.</p>
</div>
</div>
<!-- Feature Item 2 -->
<div class="group flex items-start gap-4 rounded-xl border border-surface-highlight/40 bg-surface-dark/50 p-4 transition-all hover:bg-surface-dark hover:border-primary/50 hover:shadow-glow cursor-default">
<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-highlight group-hover:bg-primary text-white transition-colors">
<span class="material-symbols-outlined">layers</span>
</div>
<div>
<h4 class="text-base font-bold text-white">Tech Stack Overview</h4>
<p class="mt-1 text-sm text-slate-400 group-hover:text-slate-300">A comprehensive breakdown of the technologies powering your robust product.</p>
</div>
</div>
<!-- Feature Item 3 -->
<div class="group flex items-start gap-4 rounded-xl border border-surface-highlight/40 bg-surface-dark/50 p-4 transition-all hover:bg-surface-dark hover:border-primary/50 hover:shadow-glow cursor-default">
<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-highlight group-hover:bg-primary text-white transition-colors">
<span class="material-symbols-outlined">calendar_month</span>
</div>
<div>
<h4 class="text-base font-bold text-white">Timeline &amp; Milestones</h4>
<p class="mt-1 text-sm text-slate-400 group-hover:text-slate-300">Key delivery dates, phase breakdowns, and critical approval checkpoints.</p>
</div>
</div>
<!-- Feature Item 4 -->
<div class="group flex items-start gap-4 rounded-xl border border-surface-highlight/40 bg-surface-dark/50 p-4 transition-all hover:bg-surface-dark hover:border-primary/50 hover:shadow-glow cursor-default">
<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-highlight group-hover:bg-primary text-white transition-colors">
<span class="material-symbols-outlined">dashboard</span>
</div>
<div>
<h4 class="text-base font-bold text-white">Accessing Your Dashboard</h4>
<p class="mt-1 text-sm text-slate-400 group-hover:text-slate-300">Login credentials and a quick-start guide to your client portal.</p>
</div>
</div>
</div>
<!-- Right Column: Document Preview (Hero) -->
<div class="lg:col-span-7 flex justify-center perspective-container order-1 lg:order-2 py-8 lg:py-0">
<div class="document-card relative w-full max-w-[500px] aspect-[4/5] rounded-2xl bg-surface shadow-2xl overflow-hidden border-8 border-surface-dark">
<!-- PDF Document Visualization -->
<div class="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-200 p-8 flex flex-col justify-between">
<!-- Document Header -->
<div class="flex justify-between items-start">
<div class="flex items-center gap-2 text-foreground">
<span class="material-symbols-outlined text-primary text-3xl">diamond</span>
<span class="font-bold tracking-tight">Promise Ayobami Nwhator</span>
</div>
<div class="text-xs font-mono text-slate-400">DOC-2023-KB</div>
</div>
<!-- Document Title -->
<div class="space-y-4">
<div class="w-16 h-1 bg-primary rounded-full"></div>
<h1 class="text-4xl font-extrabold text-foreground leading-tight">
                                        Client Onboarding <br/>
<span class="text-primary">&amp;</span> Project Roadmap
                                    </h1>
<p class="text-slate-500 font-medium">Prepared for Client Name</p>
</div>
<!-- Abstract Visual in Document -->
<div class="relative h-40 w-full rounded-xl overflow-hidden bg-slate-900">
<div class="absolute inset-0 bg-gradient-to-tr from-primary/80 to-purple-600/50 mix-blend-overlay"></div>
<img alt="Abstract technology pattern" class="w-full h-full object-cover opacity-60" data-alt="Abstract blue technology lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8amS9UtC_ktNWRpkQrCAGofX78kHl5hlxQcww82QcAlZaDb5HaYI05TDHlUlG8yGG_OJRhpCzm0kfRNIJkIP-nRNEANPvqDNlnUjdmo0MzAYwC8b8wvNYYSyDWT__12r95-GPPa0iomEIJ3snRwD_hgoqrXVup-dwhhy5ABF9VocjL18dyFNMd0RdfIpAeLSVDryXHaU7qUU9nIsrDXghjr486FIUmAVcNu4400066kAdtZawG2nAOXKI-fxIZ2-EaLvesza7k80"/>
</div>
<!-- Document Footer -->
<div class="flex items-center justify-between border-t border-slate-200 pt-6">
<div class="flex flex-col gap-1">
<span class="text-xs font-bold text-foreground uppercase tracking-wider">Confidential</span>
<span class="text-[10px] text-slate-400">For internal use only</span>
</div>
<div class="h-10 w-10 bg-surface-brighter rounded-full flex items-center justify-center text-slate-400">
<span class="material-symbols-outlined text-sm">qr_code_2</span>
</div>
</div>
</div>
<!-- Gloss/Sheen Overlay -->
<div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none"></div>
</div>
<!-- Back Glow Behind Card -->
<div class="absolute inset-0 -z-10 bg-primary/20 blur-3xl transform scale-90 translate-y-10 rounded-full"></div>
</div>
</div>
<!-- Bottom CTA Area -->
<div class="mt-20 flex flex-col items-center justify-center gap-6 border-t border-surface-highlight/30 pt-10">
<h3 class="text-2xl font-bold text-white text-center">Ready to get started?</h3>
<div class="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
<button class="flex h-14 w-full sm:w-auto min-w-[280px] items-center justify-center gap-3 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark">
<span class="material-symbols-outlined">download</span>
                            Download Welcome Kit (PDF)
                        </button>
<button class="flex h-14 w-full sm:w-auto min-w-[240px] items-center justify-center gap-3 rounded-xl border border-surface-highlight bg-transparent px-8 text-base font-bold text-white transition-all hover:bg-surface-highlight/20 focus:outline-none focus:ring-2 focus:ring-surface-highlight focus:ring-offset-2 focus:ring-offset-background-dark">
<span class="material-symbols-outlined">grid_view</span>
                            Go to Dashboard
                        </button>
</div>
<div class="flex items-center gap-4 text-xs font-medium text-slate-500">
<span class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                            PDF • 2.4 MB
                        </span>
<span>•</span>
<span class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">verified_user</span>
                            Secure Download
                        </span>
</div>
</div>
</div>
</main>
<!-- Footer -->

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
