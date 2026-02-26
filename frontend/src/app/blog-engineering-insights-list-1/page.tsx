
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Insights - Promise Ayobami Promise Ayobami Promise Ayobami Nwhator',
  description: 'Blog Engineering Insights List1 page for PROMISE NWHATOR.',
  alternates: {
    canonical: '/blog-engineering-insights-list-1',
  },
};

export default function BlogEngineeringInsightsList1() {
  const htmlContent = `
    



<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#1e60f1",
                        "background-light": "#f5f6f8",
                        "background-dark": "#101622",
                        "card-dark": "#1b212d",
                        "border-dark": "#282d39",
                    },
                    fontFamily: {
                        "display": ["Space Grotesk", "sans-serif"],
                        "mono": ["JetBrains Mono", "monospace"],
                    },
                    borderRadius: { "DEFAULT": "0.5rem", "lg": "0.75rem", "xl": "1rem", "full": "9999px" },
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



<!-- Navigation -->

<main class="flex-grow w-full max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-12">
<!-- Hero Section -->
<section class="flex flex-col gap-4 mb-12">
<div class="relative">
<!-- Decorative background accent -->
<div class="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<h1 class="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white mb-3">
                    Engineering Insights &amp; <span class="text-primary">System Design</span>
</h1>
<p class="text-slate-500 dark:text-slate-400 text-lg max-w-2xl font-normal leading-relaxed">
                    Deep dives into backend architecture, system scaling, and modern web development. Exploring the intersection of code, complexity, and performance.
                </p>
</div>
</section>
<!-- Search & Filter Bar -->
<section class="mb-12 sticky top-[70px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm py-2 -mx-2 px-2 md:mx-0 md:px-0 transition-all">
<div class="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
<!-- Search -->
<div class="relative w-full md:w-96 group">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500 group-focus-within:text-primary transition-colors">
<span class="material-symbols-outlined">search</span>
</div>
<input class="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg leading-5 bg-white dark:bg-card-dark text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 sm:text-sm shadow-sm" placeholder="Search articles by topic or keyword..." type="text"/>
</div>
<!-- Filters -->
<div class="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar items-center">
<button class="whitespace-nowrap px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium shadow-lg shadow-primary/25 transition-transform active:scale-95">
                        All Posts
                    </button>
<button class="whitespace-nowrap px-4 py-2 rounded-lg bg-white dark:bg-card-dark hover:bg-slate-100 dark:hover:bg-border-dark text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-border-dark transition-colors">
                        Backend
                    </button>
<button class="whitespace-nowrap px-4 py-2 rounded-lg bg-white dark:bg-card-dark hover:bg-slate-100 dark:hover:bg-border-dark text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-border-dark transition-colors">
                        FastAPI
                    </button>
<button class="whitespace-nowrap px-4 py-2 rounded-lg bg-white dark:bg-card-dark hover:bg-slate-100 dark:hover:bg-border-dark text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-border-dark transition-colors">
                        Django
                    </button>
<button class="whitespace-nowrap px-4 py-2 rounded-lg bg-white dark:bg-card-dark hover:bg-slate-100 dark:hover:bg-border-dark text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-border-dark transition-colors">
                        System Design
                    </button>
<button class="whitespace-nowrap px-4 py-2 rounded-lg bg-white dark:bg-card-dark hover:bg-slate-100 dark:hover:bg-border-dark text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-border-dark transition-colors">
                        Performance
                    </button>
</div>
</div>
</section>
<!-- Featured Post -->
<section class="mb-12 group">
<div class="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-border-dark overflow-hidden flex flex-col lg:flex-row transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30">
<div class="w-full lg:w-3/5 relative h-64 lg:h-auto overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden z-10"></div>
<div class="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Abstract visualization of digital data streams and high concurrency networks" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAipbhK-rPKee1WLxXs5U7EX2bRmKKbk_Ky0NRPrj194WO5goRXdkV4x8b3QEA3L281sotoIHNrRoa3KiRNhbUQ7RR86VB9PUPJUiq4Oqx79hVixBX917_RcNgfApDqgnezWoQjWfF2tF3FWlprz3TorQ72OqubRVKHgLOkoW6q_iUd_nEPgQcXcUFjKRvzuq_KLBWy-fJK_CpXMuQkALFZ7Nuc0MmsjyAq67bHmGgUb8wlM1LROEfStoG_LDOdhfkz3qwtgS-wonQ');"></div>
<div class="absolute top-4 left-4 z-20">
<span class="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono font-bold bg-primary text-white shadow-lg">
                            FEATURED
                        </span>
</div>
</div>
<div class="flex flex-col justify-center p-6 lg:p-10 w-full lg:w-2/5 relative">
<div class="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
<span class="flex items-center gap-1"><span class="material-symbols-outlined !text-[14px]">calendar_today</span> Sep 28, 2023</span>
<span>•</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined !text-[14px]">schedule</span> 8 min read</span>
</div>
<a class="group-hover:text-primary transition-colors" href="#">
<h2 class="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                            Scaling FastAPI for High Concurrency
                        </h2>
</a>
<p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3">
                        A comprehensive guide to managing async workers, optimizing database connection pooling, and handling traffic spikes effectively in production environments.
                    </p>
<div class="flex flex-wrap gap-2 mb-8">
<span class="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">#Backend</span>
<span class="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">#Python</span>
<span class="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">#Architecture</span>
</div>
<div class="mt-auto">
<a class="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors" href="#">
                            Read Article 
                            <span class="material-symbols-outlined !text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
<!-- Article List Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
<!-- Article Card 1 -->
<article class="flex flex-col h-full bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1">
<div class="h-48 overflow-hidden relative">
<div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Abstract blue database server rack visualization" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0vmR1qBRcWdKxLvaUMRmULQ2XmPmcX3QZxWBCNOPxlUWfN4p1D34M5uCbQGmXdlU_pFWSiQuGkANm0g0Lq0ZWOJlsSk0-tTUjlAmuGas-Zhgosu2cTOrMo9VZUcFqpGYjvsDvO7vffYZOfN9kdHOFMuj7UJ4-CMGspXGrqDaO-JD7DpV5ncv-QG2y5q0O73NN4x9izwKkRVEePG6y5rkCfLtW_SNcg1wU8jsigIEa0xyrIAiKOOnUUgwNfpEW9xlNYVgKkbGZURU');"></div>
<div class="absolute bottom-3 left-3 flex gap-2">
<span class="text-[10px] font-mono font-bold bg-background-dark/80 text-white backdrop-blur-sm px-2 py-1 rounded border border-white/10">#Database</span>
</div>
</div>
<div class="flex flex-col flex-1 p-5">
<div class="flex justify-between items-center mb-3">
<span class="text-xs font-mono text-slate-500 dark:text-slate-400">Sep 12, 2023</span>
<span class="text-xs font-mono text-slate-500 dark:text-slate-400">5 min read</span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        Optimizing SQL Queries in Django ORM
                    </h3>
<p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 flex-1">
                        Learn how to identify N+1 problems, use select_related and prefetch_related efficiently, and write raw SQL when the ORM isn't enough.
                    </p>
<a class="inline-flex items-center text-sm font-medium text-primary mt-auto" href="#">
                        Read more <span class="material-symbols-outlined !text-base ml-1 transition-transform group-hover:translate-x-1">arrow_right_alt</span>
</a>
</div>
</article>
<!-- Article Card 2 -->
<article class="flex flex-col h-full bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1">
<div class="h-48 overflow-hidden relative">
<div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Futuristic network nodes connected on a dark blue background" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCJlAKd1w7WUlJTNQlbClV4ZtscuUtd-a16U9lqEdEknXqnywndfaLPdg7mAugxXYIpVlBCLrIk29fYQttsWvu_-YtNTN_TP8VQ72I0kKBDX33M3RyBa427ST7OMw2LxobpheCGMl6fHTdUHNWWwkxGkhGgxwOvE4378Nu9sGy-Wgjgdq8yRdJxXTcp60Fx6JBvGqifbmrj0MGTk7NDzhKkgj67q1ysdVOeRHkHROopfLwjKF-sBah3IL0BcoyG5Yp4OXFhcUMuqo');"></div>
<div class="absolute bottom-3 left-3 flex gap-2">
<span class="text-[10px] font-mono font-bold bg-background-dark/80 text-white backdrop-blur-sm px-2 py-1 rounded border border-white/10">#SystemDesign</span>
</div>
</div>
<div class="flex flex-col flex-1 p-5">
<div class="flex justify-between items-center mb-3">
<span class="text-xs font-mono text-slate-500 dark:text-slate-400">Aug 28, 2023</span>
<span class="text-xs font-mono text-slate-500 dark:text-slate-400">12 min read</span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        The Architecture of Microservices
                    </h3>
<p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 flex-1">
                        Breaking down the monolith isn't always the answer. We explore when to switch to microservices and how to design fault-tolerant distributed systems.
                    </p>
<a class="inline-flex items-center text-sm font-medium text-primary mt-auto" href="#">
                        Read more <span class="material-symbols-outlined !text-base ml-1 transition-transform group-hover:translate-x-1">arrow_right_alt</span>
</a>
</div>
</article>
<!-- Article Card 3 -->
<article class="flex flex-col h-full bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1">
<div class="h-48 overflow-hidden relative">
<div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="React logo abstract representation with code symbols" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsZ8XWKE_AW4AbM3417hAjinK4P_km0gaoJAaB3T-ooMFPO2x6TuEot7faRr11ALuS8SuycInJABysGE4sSFHvXnmYAjInCRaO-xRttrNpbphsUB6XQgE8T39rbkBbb_A-aJzUEX6XPABpjTXi6AT_q6TY81UScQnO6EjSIBuQrO11hhs6NGQrxCwxExznWp81Aqfbe_GOHL3KoJ0-FsKHQJV3G5fZ05FGfGrF5kO7o7ap1eyXC9KUDK5H2BzNuLXm-adrtgBSagw');"></div>
<div class="absolute bottom-3 left-3 flex gap-2">
<span class="text-[10px] font-mono font-bold bg-background-dark/80 text-white backdrop-blur-sm px-2 py-1 rounded border border-white/10">#Frontend</span>
<span class="text-[10px] font-mono font-bold bg-background-dark/80 text-white backdrop-blur-sm px-2 py-1 rounded border border-white/10">#React</span>
</div>
</div>
<div class="flex flex-col flex-1 p-5">
<div class="flex justify-between items-center mb-3">
<span class="text-xs font-mono text-slate-500 dark:text-slate-400">Aug 10, 2023</span>
<span class="text-xs font-mono text-slate-500 dark:text-slate-400">8 min read</span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        React Server Components Explained
                    </h3>
<p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 flex-1">
                        Understanding the mental model shift of RSCs, how they differ from SSR, and practical examples of fetching data directly in your components.
                    </p>
<a class="inline-flex items-center text-sm font-medium text-primary mt-auto" href="#">
                        Read more <span class="material-symbols-outlined !text-base ml-1 transition-transform group-hover:translate-x-1">arrow_right_alt</span>
</a>
</div>
</article>
<!-- Article Card 4 -->
<article class="flex flex-col h-full bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1">
<div class="h-48 overflow-hidden relative">
<div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Close up of computer code on a dark monitor screen" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuARLoZhORDujarrGN7bULtQMDmrD6s6YQa6748-gFr2tKO62rgWRZCxjztszehWY2gR9RCDGEvwvLBiVFxgNUtqiZw5y5O54pdHaQTc6B_ZgjshAabucFkdGiueS1Cjg9CgOaRUBxqjYFWGQovgbyj9juXfkvaJGDXPR5_uH9qlsGsLgv0lcSfjNmGpNAjiGjx4MMiOJTGSj80phRJTsnU2znBIG_TfcrU_czki0C4iFYnEEnvBMmJoWXWdwB4uWUi6h-gIeonrgME');"></div>
<div class="absolute bottom-3 left-3 flex gap-2">
<span class="text-[10px] font-mono font-bold bg-background-dark/80 text-white backdrop-blur-sm px-2 py-1 rounded border border-white/10">#DevOps</span>
</div>
</div>
<div class="flex flex-col flex-1 p-5">
<div class="flex justify-between items-center mb-3">
<span class="text-xs font-mono text-slate-500 dark:text-slate-400">Jul 22, 2023</span>
<span class="text-xs font-mono text-slate-500 dark:text-slate-400">6 min read</span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        CI/CD Pipelines for Monorepos
                    </h3>
<p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 flex-1">
                        Best practices for setting up efficient build pipelines using GitHub Actions and Turborepo to save time and compute resources.
                    </p>
<a class="inline-flex items-center text-sm font-medium text-primary mt-auto" href="#">
                        Read more <span class="material-symbols-outlined !text-base ml-1 transition-transform group-hover:translate-x-1">arrow_right_alt</span>
</a>
</div>
</article>
<!-- Article Card 5 -->
<article class="flex flex-col h-full bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1">
<div class="h-48 overflow-hidden relative">
<div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Data analytics dashboard charts glowing blue" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVLcxqf2Byw64BFd0idqs-yLVe4s_E2OGq_x1aUqY-do54flD5oWk-TPZtxXRCupqwKNe713xjRE0VrxFlIFZeomlEBrbmPZ6KYW-BAh5pZ1oTEL1dIcO1rUfot32DyadISeXZ6imxFStjWU0yB714bqEBKoP69ZW7HLQDNH-evrSSnHqszc0llsUWtCAFkOeS5uqaK74FXenVpEKSILmz30_u4a9PDhBYLM-HxUCv_raWCLNpiyJ7NzLUfW94xg36JJbBj_TD5ds');"></div>
<div class="absolute bottom-3 left-3 flex gap-2">
<span class="text-[10px] font-mono font-bold bg-background-dark/80 text-white backdrop-blur-sm px-2 py-1 rounded border border-white/10">#Performance</span>
</div>
</div>
<div class="flex flex-col flex-1 p-5">
<div class="flex justify-between items-center mb-3">
<span class="text-xs font-mono text-slate-500 dark:text-slate-400">Jul 05, 2023</span>
<span class="text-xs font-mono text-slate-500 dark:text-slate-400">10 min read</span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        Web Performance Metrics That Matter
                    </h3>
<p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 flex-1">
                        Moving beyond basic load times. A deep dive into Core Web Vitals, LCP, CLS, and how to optimize your React application for speed.
                    </p>
<a class="inline-flex items-center text-sm font-medium text-primary mt-auto" href="#">
                        Read more <span class="material-symbols-outlined !text-base ml-1 transition-transform group-hover:translate-x-1">arrow_right_alt</span>
</a>
</div>
</article>
<!-- Article Card 6 -->
<article class="flex flex-col h-full bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1">
<div class="h-48 overflow-hidden relative">
<div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Digital lock icon representing cybersecurity concepts" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC22JEn4Zl1SaQI8cUSx5dGf7zlprc5-7UlhvdOedxyYWzb7HipgX0LzvtukXW-_T2f7_G8HOw0uiLhpIZBahPnNraYfxoLPK0U_2zXU27UgFL6qqKXrGROtEzJ6ohLmEvgl0n02qhmK5Sk7UuGgKM_qB4zTsggjWab7l9RnYd9aSMT7Uoz3QM0xY3IsnqLCluKVhT1RK52td5tGLC7lauMab9PCx20PAcb7aRDBom5Bn3l3MkCO0cCOwHMtUcP_tFcMcftEQcMOYc');"></div>
<div class="absolute bottom-3 left-3 flex gap-2">
<span class="text-[10px] font-mono font-bold bg-background-dark/80 text-white backdrop-blur-sm px-2 py-1 rounded border border-white/10">#Security</span>
</div>
</div>
<div class="flex flex-col flex-1 p-5">
<div class="flex justify-between items-center mb-3">
<span class="text-xs font-mono text-slate-500 dark:text-slate-400">Jun 18, 2023</span>
<span class="text-xs font-mono text-slate-500 dark:text-slate-400">7 min read</span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        Securing JWT Authentication
                    </h3>
<p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 flex-1">
                        JSON Web Tokens are convenient but risky if mishandled. Learn about refresh tokens, storage strategies, and common vulnerabilities.
                    </p>
<a class="inline-flex items-center text-sm font-medium text-primary mt-auto" href="#">
                        Read more <span class="material-symbols-outlined !text-base ml-1 transition-transform group-hover:translate-x-1">arrow_right_alt</span>
</a>
</div>
</article>
</div>
<!-- Pagination -->
<div class="flex justify-center pb-10">
<button class="flex items-center gap-2 px-6 py-3 bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark rounded-full text-sm font-bold text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all shadow-sm">
<span class="material-symbols-outlined !text-lg">refresh</span>
                Load More Articles
            </button>
</div>
</main>
<!-- Simple Footer -->





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
