
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Agricyclers E-commerce Case Study | Promise Ayobami Nwhator',
    description: 'Technical deep dive into Agricyclers UK: a high-conversion e-commerce storefront optimized for performance and complex product logic.',
    alternates: {
        canonical: '/case-study-agricyclers',
    },
};

export default function AgricyclersCaseStudy() {
    const htmlContent = `
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "var(--primary)",
                        "background-light": "#f5f6f8",
                        "background-dark": "var(--background)", 
                        "surface-dark": "#111318",
                        "surface-border": "#282e39"
                    },
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"],
                        "mono": ["Fira Code", "monospace"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #111318;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #282e39;
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #3b4354;
        }
        .prose h2, .prose h3 { color: white; }
        .prose p { color: #94a3b8; }
    </style>

<!-- PROMISE_SHARED_HEADER_START -->
<header class="sticky top-0 z-50 border-b border-border-dark glass-nav backdrop-blur-md">
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
      </nav>
    </div>
  </div>
</header>
<!-- PROMISE_SHARED_HEADER_END -->

<main class="flex-grow">
<section class="relative border-b border-surface-border bg-surface-dark py-16 lg:py-24">
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid gap-12 lg:grid-cols-2 items-center">
<div class="flex flex-col gap-6">
<div class="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-border/30 px-3 py-1 text-xs font-mono text-primary">
<span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span></span>
E-commerce Deep Dive
</div>
<h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Agricyclers UK</h1>
<p class="text-lg text-slate-400 leading-relaxed max-w-xl">Building a high-performance storefront for agricultural supplies with complex data attributes and high-conversion checkout logic.</p>
</div>
<div class="relative aspect-video rounded-xl border border-surface-border bg-surface-dark shadow-2xl overflow-hidden">
<img src="/agricyclers.png" class="w-full h-full object-cover" alt="Agricyclers Interface"/>
</div>
</div>
</div>
</section>

<div class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
<div class="grid gap-12 lg:grid-cols-12">
<aside class="lg:col-span-4 xl:col-span-3">
<div class="sticky top-24 space-y-8 rounded-xl border border-surface-border bg-surface-dark p-6 shadow-sm">
<div class="space-y-4">
<h3 class="text-xs font-mono uppercase tracking-wider text-slate-500">Project Specs</h3>
<div><p class="text-xs text-slate-400">Stack</p><p class="font-medium text-white">PHP, MySQL, Tailwind</p></div>
<div><p class="text-xs text-slate-400">Conversion Focus</p><p class="font-medium text-white">UX/UI Optimization</p></div>
</div>
<div class="h-px bg-surface-border"></div>
<div>
<h3 class="text-sm font-mono uppercase tracking-wider text-slate-500 mb-4">Core Tech</h3>
<div class="flex flex-wrap gap-2">
<span class="bg-surface-border px-2 py-1 text-[10px] text-slate-300 rounded font-mono">Custom CMS</span>
<span class="bg-surface-border px-2 py-1 text-[10px] text-slate-300 rounded font-mono">Mobile First</span>
<span class="bg-surface-border px-2 py-1 text-[10px] text-slate-300 rounded font-mono">SEO Audit</span>
</div>
</div>
</div>
</aside>

<div class="lg:col-span-8 xl:col-span-9 space-y-16">
<section class="prose prose-invert max-w-none">
<h2 class="text-3xl font-bold mb-6">The Challenge</h2>
<p>Agricyclers needed to transition from a generic store to a custom-tailored experience for industrial and agricultural buyers. The challenge was handling massive product variation data without sacrificing load speed or search ranking.</p>
<div class="my-8 rounded-lg border-l-4 border-primary bg-surface-border/20 p-6">
<p class="text-sm text-slate-300 italic">"The site needed to be lightning-fast on mobile, as many customers order directly from the field."</p>
</div>
<h2 class="text-3xl font-bold mt-12 mb-6">The Technical Solution</h2>
<p>I utilized a clean PHP/MySQL architecture with a highly optimized database schema for product attributes. By leveraging Tailwind CSS and vanilla JavaScript for interactivity, I ensured a minimal bundle size and exceptional Core Web Vitals scores.</p>
<h3 class="text-xl font-bold mt-8 mb-4">SEO & Metadata Architecture</h3>
<p>Implemented a dynamic metadata generation system that ensures every product and category page is perfectly indexed for relevant Google searches. This resulted in a significant uptick in organic traffic within months of launch.</p>
</section>

<section>
<h2 class="text-3xl font-bold text-white mb-8">Results</h2>
<div class="grid gap-6 md:grid-cols-2">
<div class="rounded-xl bg-surface-dark p-8 border border-surface-border">
<p class="text-xs uppercase tracking-widest text-slate-500 mb-2">Performance Score</p>
<p class="text-4xl font-black text-white">95+</p>
<p class="text-sm text-slate-400 mt-2">Lighthouse performance metrics on production.</p>
</div>
<div class="rounded-xl bg-surface-dark p-8 border border-surface-border">
<p class="text-xs uppercase tracking-widest text-slate-500 mb-2">Checkout Logic</p>
<p class="text-4xl font-black text-white">Streamlined</p>
<p class="text-sm text-slate-400 mt-2">Reduced cart abandonment by 25%.</p>
</div>
</div>
</section>
</div>
</div>
</div>
</main>

<footer class="border-t border-border-dark glass-nav mt-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
    <p class="text-sm text-text-muted">© <span id="copyright-year"></span> Promise Ayobami Nwhator. All rights reserved.</p>
  </div>
</footer>
<script>
  (function() {
    const yearNode = document.getElementById('copyright-year');
    if (yearNode) yearNode.textContent = String(new Date().getFullYear());
  })();
</script>
<!-- PROMISE_SHARED_FOOTER_END -->
  `;
    return (
        <div className="stitch-page-root overflow-hidden bg-background-dark min-h-screen text-slate-300">
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] pointer-events-none" />
            <div className="relative animate-fade-in">
                {parse(htmlContent)}
            </div>
        </div>
    );
}
