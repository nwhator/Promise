
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Internal System Error - PROMISE NWHATOR',
  description: 'Internal System Error page for PROMISE NWHATOR.',
  alternates: {
    canonical: '/internal-system-error',
  },
};

export default function InternalSystemError() {
  const htmlContent = `
    



<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&amp;family=Noto+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Theme Configuration -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#0d59f2",
                        "background-light": "#f5f6f8",
                        "background-dark": "#101622",
                    },
                    fontFamily: {
                        "display": ["Manrope", "Noto Sans", "sans-serif"],
                        "mono": ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>


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




<!-- Header / TopNavBar -->
<div class="w-full border-b border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark">
<div class="max-w-[1280px] mx-auto px-4 md:px-10 h-16 flex items-center justify-between">
<!-- Brand -->
<div class="flex items-center gap-3 text-slate-900 dark:text-white">
<div class="size-6 text-primary">
<svg class="w-full h-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
</svg>
</div>
<h2 class="text-lg font-bold tracking-tight">Promise Ayobami Nwhator</h2>
</div>
<!-- Navigation -->
<nav class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">System Status</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Support</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
</nav>
<!-- Action -->
<button class="hidden md:flex items-center justify-center rounded-lg h-9 px-4 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-sm font-bold transition-colors">
                Login
            </button>
<!-- Mobile Menu Icon -->
<button class="md:hidden p-2">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</div>
<!-- Main Content -->
<main class="flex-grow flex flex-col items-center justify-center p-4 py-12 md:py-20 relative">
<!-- Abstract Background Pattern -->
<div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
<div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
<div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
</div>
<div class="relative z-10 w-full max-w-4xl flex flex-col items-center text-center gap-8">
<!-- Error Header -->
<div class="space-y-4">
<div class="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wider mb-4">
<span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    System Critical
                </div>
<h1 class="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white">
                    500
                </h1>
<h2 class="text-xl md:text-2xl font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                    Internal_Server_Error
                </h2>
<p class="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
                    Our systems architect has been notified. We are resolving this immediately.
                </p>
</div>
<!-- Log Trace Console -->
<div class="w-full max-w-2xl mt-8 mx-auto perspective-1000">
<div class="relative overflow-hidden rounded-xl bg-[#0a0e17] border border-slate-800 shadow-2xl">
<!-- Terminal Header -->
<div class="flex items-center justify-between px-4 py-3 bg-[#111622] border-b border-slate-800">
<div class="flex gap-2">
<div class="w-3 h-3 rounded-full bg-red-500/50"></div>
<div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div class="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div class="text-[10px] font-mono text-slate-500 uppercase tracking-widest">System Log Trace</div>
</div>
<!-- Terminal Body -->
<div class="p-6 font-mono text-xs md:text-sm text-left leading-loose relative h-48 md:h-56">
<!-- Code content -->
<div class="text-slate-400 space-y-1">
<div class="flex gap-3">
<span class="text-slate-600 select-none">[10:42:01]</span>
<span class="text-red-400">CRITICAL:</span>
<span>Connection timeout at module_auth...</span>
</div>
<div class="flex gap-3 opacity-90">
<span class="text-slate-600 select-none">[10:42:02]</span>
<span class="text-yellow-400">RETRY:</span>
<span>Attempting handshake with primary_node_04...</span>
</div>
<div class="flex gap-3 opacity-80">
<span class="text-slate-600 select-none">[10:42:02]</span>
<span class="text-red-400">ERROR:</span>
<span>Stack trace overflow in process_daemon.js:204</span>
</div>
<div class="flex gap-3 opacity-70 blur-[1px]">
<span class="text-slate-600 select-none">[10:42:03]</span>
<span class="text-blue-400">INFO:</span>
<span>Dumping core memory to secure_logs...</span>
</div>
<div class="flex gap-3 opacity-50 blur-[2px]">
<span class="text-slate-600 select-none">[10:42:03]</span>
<span>Initiating failover protocol seq_99...</span>
</div>
<div class="flex gap-3 opacity-30 blur-[3px]">
<span class="text-slate-600 select-none">[10:42:04]</span>
<span>System_halt exception caught...</span>
</div>
</div>
<!-- Gradient overlay for "fade out" effect -->
<div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0a0e17] to-transparent z-10"></div>
<!-- Blinking Cursor at bottom -->
<div class="absolute bottom-6 left-6 flex items-center gap-2 z-20">
<span class="text-primary font-bold">&gt;</span>
<span class="w-2 h-4 bg-primary animate-pulse"></span>
</div>
</div>
</div>
</div>
<!-- Actions -->
<div class="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full justify-center">
<button class="flex items-center justify-center gap-2 h-12 px-8 w-full sm:w-auto min-w-[180px] rounded-lg bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95">
<span class="material-symbols-outlined text-[20px]">refresh</span>
<span>Refresh System</span>
</button>
<button class="flex items-center justify-center gap-2 h-12 px-8 w-full sm:w-auto min-w-[180px] rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold transition-all active:scale-95">
<span class="material-symbols-outlined text-[20px]">report_problem</span>
<span>Report Issue</span>
</button>
</div>
<!-- Additional Help -->
<div class="mt-8 text-sm text-slate-500">
                Need immediate assistance? <a class="text-primary hover:underline hover:text-primary/80 transition-colors" href="#">Contact Support directly</a>
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
