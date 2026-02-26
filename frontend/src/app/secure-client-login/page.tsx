
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Secure Client Login - Promise Ayobami Promise Ayobami Promise Ayobami Nwhator',
  description: 'Secure Client Login page for PROMISE NWHATOR.',
  alternates: {
    canonical: '/secure-client-login',
  },
};

export default function SecureClientLogin() {
  const htmlContent = `
    



<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<!-- Icons -->
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
                        "primary": "#0d59f2",
                        "background-light": "#f5f6f8",
                        "background-dark": "#101622",
                    },
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                    backgroundImage: {
                        'circuit-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230d59f2' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    }
                },
            },
        }
    </script>
<style>
        /* Custom scrollbar to match the dark theme */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #101622; 
        }
        ::-webkit-scrollbar-thumb {
            background: #2d3748; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #4a5568; 
        }
    </style>


<!-- Geometric Circuit Background Overlay -->
<div class="absolute inset-0 z-0 pointer-events-none bg-circuit-pattern"></div>
<!-- Radial Gradient for depth -->
<div class="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50"></div>
<!-- Main Container -->
<div class="relative z-10 w-full max-w-md p-4 animate-fade-in-up">
<!-- Logo Area -->
<div class="flex justify-center mb-8">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
<span class="material-symbols-outlined text-white text-[24px]">verified_user</span>
</div>
<h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Promise Ayobami Nwhator</h1>
</div>
</div>
<!-- Login Card -->
<div class="bg-white dark:bg-[#1A202C]/90 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-xl shadow-2xl overflow-hidden">
<!-- Card Header -->
<div class="px-8 pt-8 pb-4">
<h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">Client Portal Access</h2>
<p class="text-slate-500 dark:text-slate-400 text-sm">Secure login for Promise Ayobami Nwhator clients</p>
</div>
<!-- Card Body -->
<div class="px-8 pb-8 pt-2 flex flex-col gap-5">
<!-- Input: Client ID / Email -->
<div class="flex flex-col gap-2">
<label class="text-sm font-semibold text-slate-700 dark:text-slate-300" for="client-id">
                        Client ID / Email
                    </label>
<div class="relative group">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
<span class="material-symbols-outlined text-[20px]">person</span>
</div>
<input class="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-[#282e39] border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all shadow-sm" id="client-id" placeholder="Enter your Client ID or Email" type="text"/>
</div>
</div>
<!-- Input: Password -->
<div class="flex flex-col gap-2">
<div class="flex justify-between items-center">
<label class="text-sm font-semibold text-slate-700 dark:text-slate-300" for="password">
                            Password
                        </label>
<a class="text-xs font-semibold text-primary hover:text-primary/80 transition-colors" href="#">
                            Forgot Password?
                        </a>
</div>
<div class="relative group">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
<span class="material-symbols-outlined text-[20px]">lock</span>
</div>
<input class="w-full pl-10 pr-10 py-3 bg-slate-50 dark:bg-[#282e39] border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all shadow-sm" id="password" placeholder="Enter your password" type="password"/>
<button class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer transition-colors focus:outline-none">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</div>
<!-- Submit Button -->
<button class="group w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 mt-2 active:transform active:scale-[0.98]">
<span class="material-symbols-outlined text-[20px]">lock_open</span>
<span>Secure Login</span>
<span class="material-symbols-outlined text-[18px] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">arrow_forward</span>
</button>
</div>
<!-- Card Footer / Additional Link -->
<div class="px-8 py-4 bg-slate-50 dark:bg-[#161b25] border-t border-slate-200 dark:border-slate-700/50 flex justify-center">
<p class="text-sm text-slate-500 dark:text-slate-400">
                    New client? <a class="text-primary font-semibold hover:underline" href="#">Activate account</a>
</p>
</div>
</div>
<!-- Security Badge -->
<div class="mt-8 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
<div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300/50 dark:border-slate-700/50 backdrop-blur-sm">
<span class="material-symbols-outlined text-primary text-[16px]">shield_lock</span>
<span class="text-xs font-medium text-slate-600 dark:text-slate-400 tracking-wide uppercase">Protected by Promise Ayobami Nwhator Systems</span>
</div>
<p class="text-[10px] text-slate-400 dark:text-slate-600">v2.4.0 • 256-bit Encryption</p>
</div>
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
