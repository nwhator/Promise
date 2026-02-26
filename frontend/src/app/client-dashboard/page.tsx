
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Dashboard - PROMISE NWHATOR',
  description: 'Client Dashboard page for PROMISE NWHATOR.',
  alternates: {
    canonical: '/client-dashboard',
  },
};

export default function ClientDashboard() {
  const htmlContent = `
    



<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet"/>
<!-- Icons -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#0d7ff2",
                        "primary-hover": "#0b6bcb",
                        "background-light": "#f5f7f8",
                        "background-dark": "#101922",
                        "card-dark": "#1a2430",
                        "border-dark": "#2a3645",
                    },
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px"},
                },
            },
        }
    </script>


<div class="flex h-screen w-full overflow-hidden">
<!-- Sidebar -->
<aside class="flex w-72 flex-col border-r border-border-dark bg-background-dark transition-all duration-300 ease-in-out">
<div class="flex h-full flex-col justify-between p-4">
<div class="flex flex-col gap-6">
<!-- Profile/Brand -->
<div class="flex items-center gap-3 px-2">
<div class="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
<span class="material-symbols-outlined text-[24px]">code</span>
</div>
<div class="flex flex-col">
<h1 class="text-white text-base font-bold leading-tight">Promise Ayobami Nwhator</h1>
<p class="text-slate-400 text-xs font-medium">Dev Portfolio</p>
</div>
</div>
<!-- Navigation -->
<nav class="flex flex-col gap-1">
<a class="group flex items-center gap-3 rounded-lg bg-primary px-3 py-2.5 transition-colors" href="#">
<span class="material-symbols-outlined text-white">dashboard</span>
<span class="text-sm font-medium text-white">Overview</span>
</a>
<a class="group flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/5 transition-colors" href="#">
<span class="material-symbols-outlined text-slate-400 group-hover:text-white">flag</span>
<span class="text-sm font-medium text-slate-400 group-hover:text-white">Milestones</span>
</a>
<a class="group flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/5 transition-colors" href="#">
<span class="material-symbols-outlined text-slate-400 group-hover:text-white">api</span>
<span class="text-sm font-medium text-slate-400 group-hover:text-white">API Docs</span>
</a>
<a class="group flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/5 transition-colors" href="#">
<span class="material-symbols-outlined text-slate-400 group-hover:text-white">folder_open</span>
<span class="text-sm font-medium text-slate-400 group-hover:text-white">Files</span>
</a>
<a class="group flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/5 transition-colors" href="#">
<span class="material-symbols-outlined text-slate-400 group-hover:text-white">receipt_long</span>
<span class="text-sm font-medium text-slate-400 group-hover:text-white">Billing</span>
</a>
</nav>
</div>
<!-- Bottom User Profile -->
<div class="mt-auto border-t border-border-dark pt-4">
<button class="flex w-full items-center gap-3 rounded-lg p-2 hover:bg-white/5 transition-colors text-left">
<div class="h-10 w-10 rounded-full bg-cover bg-center" data-alt="Portrait of a male client" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBY0aXSCjPyQZV5C0tT_bxaGfjAMy0j-RCMHlrsKUZLgM8OAMEfxzjbWCsWddwyHM1syZTnozZBtWx947OxzMdVFyGrUmNnRAdgnSx-BcqbKO6PQ05mYzZF1VfY83ys4lhYWIXA0-VJ1X31w9QTpo2_ERPZZSg2btcwcSSsvsXNEqOST0P_Ej0d1L7abe0mgeR2urMY7aEO5PmTRKHSj9QOfQptGnh77A2_WbRyerTiDqgEhNd2aUr2pYsRH5VDxRvPfE1bcdR2jA0');"></div>
<div class="flex flex-col overflow-hidden">
<span class="truncate text-sm font-medium text-white">Client Dashboard</span>
<span class="truncate text-xs text-slate-400">log out</span>
</div>
<span class="material-symbols-outlined ml-auto text-slate-500">logout</span>
</button>
</div>
</div>
</aside>
<!-- Main Content -->
<main class="flex-1 overflow-y-auto bg-background-dark">
<div class="mx-auto max-w-5xl px-6 py-8 md:px-10 lg:py-12">
<!-- Header -->
<header class="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
<div>
<div class="flex items-center gap-2 text-sm font-medium text-slate-400 mb-1">
<span>Project Tracker</span>
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
<span class="text-primary">Alpha Build</span>
</div>
<h2 class="text-3xl font-bold text-white tracking-tight">FinTech Mobile App</h2>
<p class="mt-1 text-slate-400">Current Phase: <span class="text-primary font-medium">Backend Architecture</span></p>
</div>
<div class="flex gap-3">
<button class="flex items-center gap-2 rounded-lg border border-border-dark bg-card-dark px-4 py-2 text-sm font-medium text-white hover:bg-border-dark transition-colors">
<span class="material-symbols-outlined text-[20px]">description</span>
                            View Docs
                        </button>
<button class="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
<span class="material-symbols-outlined text-[20px]">calendar_today</span>
                            Schedule Call
                        </button>
</div>
</header>
<!-- Grid Layout -->
<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
<!-- Left Column (2/3 width) -->
<div class="flex flex-col gap-6 lg:col-span-2">
<!-- Main Status Card -->
<div class="relative overflow-hidden rounded-xl border border-border-dark bg-card-dark p-6 shadow-sm">
<div class="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-primary/10 blur-3xl"></div>
<div class="mb-6 flex items-end justify-between">
<div>
<h3 class="text-lg font-semibold text-white">Overall Progress</h3>
<p class="text-sm text-slate-400">Estimated delivery: <span class="text-slate-200 font-medium">Nov 15, 2024</span></p>
</div>
<span class="text-4xl font-bold text-white tracking-tight">65%</span>
</div>
<div class="relative h-3 w-full rounded-full bg-slate-700/50">
<div class="absolute left-0 top-0 h-full rounded-full bg-primary shadow-[0_0_10px_rgba(13,127,242,0.5)]" style="width: 65%;"></div>
</div>
<div class="mt-6 grid grid-cols-3 divide-x divide-border-dark border-t border-border-dark pt-6">
<div class="px-4 first:pl-0">
<p class="text-xs text-slate-400 uppercase tracking-wider">Days Left</p>
<p class="mt-1 text-xl font-bold text-white">14</p>
</div>
<div class="px-4">
<p class="text-xs text-slate-400 uppercase tracking-wider">Budget Used</p>
<p class="mt-1 text-xl font-bold text-white">45%</p>
</div>
<div class="px-4">
<p class="text-xs text-slate-400 uppercase tracking-wider">Sprint</p>
<p class="mt-1 text-xl font-bold text-white">4/6</p>
</div>
</div>
</div>
<!-- Milestones Timeline -->
<div class="rounded-xl border border-border-dark bg-card-dark p-6">
<div class="mb-6 flex items-center justify-between">
<h3 class="text-lg font-semibold text-white">Milestones</h3>
<button class="text-xs font-medium text-primary hover:text-primary-hover">View Full Roadmap</button>
</div>
<div class="space-y-6">
<!-- Completed Item -->
<div class="flex gap-4 opacity-60">
<div class="flex flex-col items-center">
<div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
<span class="material-symbols-outlined text-[16px]">check</span>
</div>
<div class="h-full w-px bg-border-dark my-1"></div>
</div>
<div class="pb-2">
<h4 class="text-sm font-medium text-slate-200 line-through">System Design &amp; Wireframes</h4>
<p class="text-xs text-slate-500">Completed on Sep 20</p>
</div>
</div>
<!-- Completed Item -->
<div class="flex gap-4 opacity-60">
<div class="flex flex-col items-center">
<div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
<span class="material-symbols-outlined text-[16px]">check</span>
</div>
<div class="h-full w-px bg-border-dark my-1"></div>
</div>
<div class="pb-2">
<h4 class="text-sm font-medium text-slate-200 line-through">Database Schema Setup</h4>
<p class="text-xs text-slate-500">Completed on Oct 05</p>
</div>
</div>
<!-- Active Item -->
<div class="flex gap-4">
<div class="flex flex-col items-center">
<div class="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
<div class="absolute -inset-1 animate-pulse rounded-full bg-primary/30"></div>
<span class="material-symbols-outlined text-[14px]">sync</span>
</div>
<div class="h-full w-px bg-border-dark my-1"></div>
</div>
<div class="pb-2">
<h4 class="text-base font-semibold text-white">API Integration</h4>
<p class="text-sm text-slate-400 mb-2">Connecting frontend components with backend services.</p>
<div class="inline-flex items-center gap-2 rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                                            Due Oct 24
                                        </div>
</div>
</div>
<!-- Future Item -->
<div class="flex gap-4">
<div class="flex flex-col items-center">
<div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-600 bg-transparent text-slate-600">
<div class="h-2 w-2 rounded-full bg-slate-600"></div>
</div>
</div>
<div>
<h4 class="text-sm font-medium text-slate-400">User Testing &amp; QA</h4>
<p class="text-xs text-slate-600">Scheduled for Nov 01</p>
</div>
</div>
</div>
</div>
</div>
<!-- Right Column (1/3 width) -->
<div class="flex flex-col gap-6 lg:col-span-1">
<!-- Recent Activity Feed -->
<div class="flex flex-col rounded-xl border border-border-dark bg-card-dark">
<div class="border-b border-border-dark p-4">
<h3 class="font-semibold text-white">Recent Activity</h3>
</div>
<div class="flex flex-col p-2">
<div class="group flex gap-3 rounded-lg p-3 hover:bg-white/5 transition-colors">
<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
<span class="material-symbols-outlined text-[18px]">webhook</span>
</div>
<div>
<p class="text-sm text-slate-200">API Endpoint updated</p>
<p class="text-xs text-slate-500">2 hours ago</p>
</div>
</div>
<div class="group flex gap-3 rounded-lg p-3 hover:bg-white/5 transition-colors">
<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
<span class="material-symbols-outlined text-[18px]">rocket_launch</span>
</div>
<div>
<p class="text-sm text-slate-200">Sprint 1 Completed</p>
<p class="text-xs text-slate-500">Yesterday, 4:30 PM</p>
</div>
</div>
<div class="group flex gap-3 rounded-lg p-3 hover:bg-white/5 transition-colors">
<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
<span class="material-symbols-outlined text-[18px]">attach_file</span>
</div>
<div>
<p class="text-sm text-slate-200">New asset uploaded</p>
<p class="text-xs text-slate-500">Oct 14, 10:00 AM</p>
<div class="mt-2 flex items-center gap-2 rounded border border-border-dark bg-background-dark px-2 py-1">
<span class="material-symbols-outlined text-xs text-slate-500">picture_as_pdf</span>
<span class="text-xs text-slate-400">wireframes_v2.pdf</span>
</div>
</div>
</div>
<div class="group flex gap-3 rounded-lg p-3 hover:bg-white/5 transition-colors">
<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
<span class="material-symbols-outlined text-[18px]">payments</span>
</div>
<div>
<p class="text-sm text-slate-200">Invoice #1024 Paid</p>
<p class="text-xs text-slate-500">Oct 12</p>
</div>
</div>
</div>
</div>
<!-- Quick Links / Resources -->
<div class="rounded-xl border border-border-dark bg-card-dark p-5">
<h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Resources</h3>
<ul class="space-y-3">
<li>
<a class="flex items-center justify-between group" href="#">
<div class="flex items-center gap-3">
<div class="flex h-8 w-8 items-center justify-center rounded bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-white transition-colors">
<span class="material-symbols-outlined text-[18px]">menu_book</span>
</div>
<span class="text-sm text-slate-300 group-hover:text-white transition-colors">Documentation</span>
</div>
<span class="material-symbols-outlined text-[16px] text-slate-600 group-hover:text-primary transition-colors">open_in_new</span>
</a>
</li>
<li>
<a class="flex items-center justify-between group" href="#">
<div class="flex items-center gap-3">
<div class="flex h-8 w-8 items-center justify-center rounded bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-white transition-colors">
<span class="material-symbols-outlined text-[18px]">flutter</span>
</div>
<span class="text-sm text-slate-300 group-hover:text-white transition-colors">Figma Prototype</span>
</div>
<span class="material-symbols-outlined text-[16px] text-slate-600 group-hover:text-primary transition-colors">open_in_new</span>
</a>
</li>
<li>
<a class="flex items-center justify-between group" href="#">
<div class="flex items-center gap-3">
<div class="flex h-8 w-8 items-center justify-center rounded bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-white transition-colors">
<span class="material-symbols-outlined text-[18px]">folder_zip</span>
</div>
<span class="text-sm text-slate-300 group-hover:text-white transition-colors">Brand Assets</span>
</div>
<span class="material-symbols-outlined text-[16px] text-slate-600 group-hover:text-primary transition-colors">download</span>
</a>
</li>
</ul>
</div>
<!-- Help Card -->
<div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-blue-600 p-6 text-white shadow-lg">
<div class="absolute -right-4 -top-4 text-white/10">
<span class="material-symbols-outlined text-[120px]">support_agent</span>
</div>
<h3 class="relative z-10 text-lg font-bold">Need Help?</h3>
<p class="relative z-10 mt-1 mb-4 text-sm text-blue-100">Have questions about the current phase?</p>
<button class="relative z-10 w-full rounded-lg bg-white py-2 text-sm font-bold text-primary hover:bg-blue-50 transition-colors">
                                Contact Support
                            </button>
</div>
</div>
</div>
</div>
</main>
</div>




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
