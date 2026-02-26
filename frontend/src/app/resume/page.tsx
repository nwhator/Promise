
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Promise Ayobami Nwhator - Resume',
  description: 'Resume page for PROMISE NWHATOR.',
  alternates: {
    canonical: '/resume',
  },
};

export default function Resume() {
  const htmlContent = `
    



<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Configuration -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "var(--primary)",
                        "background-light": "#f6f6f8",
                        "background-dark": "var(--background)",
                        "surface-dark": "#1c2333", // Slightly lighter than bg-dark for cards
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
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



<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<!-- Navbar -->

<main class="layout-container flex flex-col items-center py-10 px-4 md:px-10">
<div class="w-full max-w-5xl space-y-12">
<div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
<div class="flex flex-col gap-2">
<span class="text-primary font-bold tracking-wider uppercase text-sm">Resume</span>
<h1 class="text-4xl md:text-5xl font-black tracking-tight leading-tight">Promise Ayobami Nwhator</h1>
<p class="text-slate-500 dark:text-slate-400 text-lg max-w-3xl mt-2 leading-relaxed">Backend Engineer • WordPress Systems Architect • Scalable Platform Builder</p>
<p class="text-slate-500 dark:text-slate-400">I build secure, scalable, and revenue-driven digital platforms.</p>
</div>
<div class="text-sm text-slate-500 dark:text-slate-400 space-y-1">
<p>📍 Nigeria</p>
<p>📧 nwhator@gmail.com</p>
<p><a class="text-primary" href="https://github.com/nwhator" target="_blank" rel="noreferrer">GitHub</a> • <a class="text-primary" href="https://linkedin.com/in/nwhator" target="_blank" rel="noreferrer">LinkedIn</a></p>
</div>
</div>

<section className="animate-fade-in">
<h2 class="text-2xl font-bold mb-4">What I Do</h2>
<div class="bg-surface dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<ul class="space-y-3 text-slate-400 dark:text-slate-300 list-disc pl-5 marker:text-primary">
<li>Build backend systems and APIs that scale without breaking.</li>
<li>Optimize performance, SEO, and structure for long-term growth.</li>
<li>Design conversion-focused e-commerce and digital publishing platforms.</li>
<li>Automate workflows to reduce manual operations and increase delivery speed.</li>
</ul>
</div>
</section>

<section className="animate-fade-in">
<h2 class="text-2xl font-bold mb-4">Core Expertise</h2>
<div class="grid md:grid-cols-2 gap-4">
<div class="bg-surface dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="font-bold text-lg mb-3">Backend Engineering</h3>
<p class="text-slate-400 dark:text-slate-300">C, Astro, Python & Django, Next.js, Node.js, Laravel PHP, RESTful API design, MySQL architecture, Docker and server management.</p>
</div>
<div class="bg-surface dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="font-bold text-lg mb-3">WordPress Systems Development</h3>
<p class="text-slate-400 dark:text-slate-300">Custom WordPress builds, WooCommerce integration, plugin customization, migration, security hardening, and performance optimization.</p>
</div>
<div class="bg-surface dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="font-bold text-lg mb-3">Full Digital Stack</h3>
<p class="text-slate-400 dark:text-slate-300">Flutter + Firebase mobile apps, SEO and technical optimization, deployment workflows with Git and Linux.</p>
</div>
<div class="bg-surface dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="font-bold text-lg mb-3">Business Impact</h3>
<p class="text-slate-400 dark:text-slate-300">Analytics tracking, conversion optimization, brand support, and technical decisions aligned with business outcomes.</p>
</div>
</div>
</section>

<section className="animate-fade-in">
<h2 class="text-2xl font-bold mb-6">Featured Experience</h2>
<div class="space-y-6">
<div class="bg-surface dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="text-xl font-bold">Lead Web Developer</h3>
<p class="text-primary font-medium">Nigerian Dental Journal — Nigerian Dental Association</p>
<ul class="mt-3 space-y-2 text-slate-400 dark:text-slate-300 list-disc pl-5 marker:text-primary">
<li>Built and now maintain the official journal platform.</li>
<li>Designed article submission, reviewer, and editorial workflow systems.</li>
<li>Optimized publishing operations and platform reliability.</li>
<li>Implemented security and backup-focused operations.</li>
</ul>
</div>
<div class="bg-surface dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="text-xl font-bold">WordPress Systems Developer</h3>
<p class="text-primary font-medium">Étrange Media Services (2023–2025)</p>
<ul class="mt-3 space-y-2 text-slate-400 dark:text-slate-300 list-disc pl-5 marker:text-primary">
<li>Delivered corporate, portfolio, and e-commerce websites.</li>
<li>Handled SEO/performance optimization and hosting migrations.</li>
<li>Built stable infrastructure for long-term maintainability.</li>
</ul>
</div>
<div class="bg-surface dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="text-xl font-bold">Backend & Web Developer</h3>
<p class="text-primary font-medium">Forth Creativity (2020–2023)</p>
<ul class="mt-3 space-y-2 text-slate-400 dark:text-slate-300 list-disc pl-5 marker:text-primary">
<li>Developed React + Node.js products and backend services.</li>
<li>Improved user engagement by 30%.</li>
<li>Reduced database retrieval time by 25%.</li>
</ul>
</div>
<div class="bg-surface dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="text-xl font-bold">WordPress & E-commerce Developer (Volunteer)</h3>
<p class="text-primary font-medium">Refillistic AB</p>
<ul class="mt-3 space-y-2 text-slate-400 dark:text-slate-300 list-disc pl-5 marker:text-primary">
<li>Built WooCommerce store with payment and shipping integrations.</li>
<li>Optimized for conversion and performance with marketing alignment.</li>
</ul>
</div>
</div>
</section>

<section className="animate-fade-in" class="grid md:grid-cols-2 gap-6">
<div class="bg-surface dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800 md:col-span-2">
<h3 class="text-xl font-bold mb-3">Beyond Code</h3>
<p class="text-slate-400 dark:text-slate-300">SEO implementation, analytics tracking, brand visual support (Canva), and IT networking/troubleshooting. I don’t just build — I optimize for growth and efficiency.</p>
</div>
<div class="bg-surface dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="text-xl font-bold mb-3">Education & Certification</h3>
<p class="text-slate-400 dark:text-slate-300 mb-2"><strong>BSc. Computer Science & Engineering</strong> — Obafemi Awolowo University</p>
<p class="text-slate-400 dark:text-slate-300"><strong>Certified Software Engineer</strong> — ALX (Backend Engineering, C, Python, Node.js, API architecture, Docker, Agile workflows)</p>
</div>
<div class="bg-surface dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="text-xl font-bold mb-3">Mobile Development</h3>
<p class="text-slate-400 dark:text-slate-300">Built cross-platform mobile products with Flutter + Firebase, including an academic tutoring application for Human Anatomy in Pidgin English.</p>
<h3 class="text-xl font-bold mt-5 mb-3">Languages</h3>
<p class="text-slate-400 dark:text-slate-300">English – Fluent, German – A2, Yoruba – Conversational</p>
</div>
</section>
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
