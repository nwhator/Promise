
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Article Scalable Api Guide - PROMISE NWHATOR',
  description: 'Article Scalable Api Guide page for PROMISE NWHATOR.',
  alternates: {
    canonical: '/article-scalable-api-guide',
  },
};

export default function ArticleScalableApiGuide() {
  const htmlContent = `
    



<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Config -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#2463eb",
                        "background-light": "#f6f6f8",
                        "background-dark": "#111621",
                        "surface-dark": "#1a202c",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "mono": ["Fira Code", "monospace"],
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&amp;family=Fira+Code:wght@400;500&amp;display=swap" rel="stylesheet"/>
<!-- Material Icons -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        body {
            font-family: 'Inter', sans-serif;
        }
        pre {
            font-family: 'Fira Code', monospace;
        }
        /* Custom scrollbar for code blocks */
        .custom-scrollbar::-webkit-scrollbar {
            height: 8px;
            width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #1e293b;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #475569;
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #64748b;
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



<!-- Header -->

<!-- Main Article Layout -->
<main class="flex-grow">
<!-- Hero Section -->
<div class="relative w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#161b26]">
<!-- Decorative gradient -->
<div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
<div class="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
<div class="mx-auto max-w-4xl">
<!-- Breadcrumbs -->
<nav class="mb-8 flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
<a class="hover:text-primary transition-colors" href="#">Home</a>
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
<a class="hover:text-primary transition-colors" href="#">Blog</a>
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
<span class="text-slate-900 dark:text-white font-medium">API Guide</span>
</nav>
<!-- Title -->
<h1 class="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl mb-6 leading-[1.15]">
                        How to Build Scalable APIs with FastAPI
                    </h1>
<!-- Description -->
<p class="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
                        A comprehensive guide to building high-performance, asynchronous APIs using Python's modern web framework and best practices for production deployment.
                    </p>
<!-- Meta Data Row -->
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-slate-200 dark:border-slate-700 pt-8">
<!-- Author -->
<div class="flex items-center gap-4">
<div class="h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary/20 dark:ring-primary/40 bg-slate-800" data-alt="Promise Ayobami Nwhator Portrait" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOSHuz7ZV7lzLuEtE8kuTYI78EC3_3-uiYVsNBidOQzoV1839yu_oZFUd6j6F9YrXvRtOYsAVrjSK-gb5Bipg8HdFOZ_FqcsqlzOIQZr8mDASTQcB_t531fh06nJ_X4tdNWgNbuls26GojXkIr09NFBM9k50gT62Jeec8Lm6qV8lSq--kZvNVj_MkvYXJPu6klu6l7KJv9c2XZSO2Cb4Q0JCrASH9Q2P5Rv5ydP-uWIVS738MGlKoEJNBSnf_pbuXaAJ0VlKIFb9I"); background-size: cover; background-position: center;'></div>
<div>
<div class="font-bold text-slate-900 dark:text-white text-base">Promise Ayobami Nwhator</div>
<div class="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
<span>Oct 24, 2023</span>
<span class="h-1 w-1 rounded-full bg-slate-400"></span>
<span>8 min read</span>
</div>
</div>
</div>
<!-- Social Share -->
<div class="flex items-center gap-3">
<span class="text-sm font-medium text-slate-500 dark:text-slate-400 hidden sm:block">Share:</span>
<button aria-label="Share on Twitter" class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-[#1DA1F2] transition-colors">
<span class="material-symbols-outlined text-xl">ios_share</span>
</button>
<button aria-label="Share on LinkedIn" class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-[#0A66C2] transition-colors">
<span class="material-symbols-outlined text-xl">link</span>
</button>
<button aria-label="Save to favorites" class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-red-500 transition-colors">
<span class="material-symbols-outlined text-xl">favorite</span>
</button>
</div>
</div>
</div>
</div>
</div>
<!-- Content Area -->
<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div class="lg:grid lg:grid-cols-12 lg:gap-12">
<!-- Main Content Column -->
<article class="lg:col-span-8 prose prose-slate dark:prose-invert prose-lg max-w-none">
<div class="mb-10 flex flex-wrap gap-2">
<span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">#Python</span>
<span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">#API</span>
<span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">#FastAPI</span>
</div>
<p class="lead text-xl text-slate-600 dark:text-slate-300">
                        When building modern web applications, the choice of backend framework can significantly impact your development velocity and application performance. FastAPI has emerged as a top contender for Python developers.
                    </p>
<h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6 scroll-mt-24" id="why-fastapi">Why FastAPI?</h2>
<p class="text-slate-600 dark:text-slate-300 mb-6">
                        FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints. The key features include:
                    </p>
<ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-8 marker:text-primary">
<li><strong>Fast</strong>: Very high performance, on par with NodeJS and Go (thanks to Starlette and Pydantic).</li>
<li><strong>Fast to code</strong>: Increase the speed to develop features by about 200% to 300%.</li>
<li><strong>Fewer bugs</strong>: Reduce about 40% of human (developer) induced errors.</li>
<li><strong>Intuitive</strong>: Great editor support. Completion everywhere. Less time debugging.</li>
</ul>
<h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6 scroll-mt-24" id="project-setup">Project Setup &amp; Structure</h2>
<p class="text-slate-600 dark:text-slate-300 mb-6">
                        Let's start by setting up a robust project structure. Separation of concerns is crucial for scalability.
                    </p>
<!-- Code Block Component -->
<div class="my-8 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-[#0d1117] shadow-xl">
<div class="flex items-center justify-between border-b border-slate-800 bg-[#161b22] px-4 py-2 text-xs text-slate-400">
<span class="font-mono">main.py</span>
<div class="flex gap-2">
<span class="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50"></span>
<span class="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></span>
<span class="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50"></span>
</div>
</div>
<div class="relative group">
<button class="absolute right-4 top-4 hidden items-center rounded bg-white/10 px-2 py-1 text-xs font-medium text-white backdrop-blur group-hover:flex hover:bg-white/20">
<span class="material-symbols-outlined text-[14px] mr-1">content_copy</span> Copy
                            </button>
<pre class="custom-scrollbar overflow-x-auto p-4 text-sm leading-relaxed text-slate-300"><code class="language-python"><span class="text-purple-400">from</span> fastapi <span class="text-purple-400">import</span> FastAPI, Depends, HTTPException
<span class="text-purple-400">from</span> sqlalchemy.orm <span class="text-purple-400">import</span> Session
<span class="text-purple-400">from</span> . <span class="text-purple-400">import</span> models, schemas, crud
<span class="text-purple-400">from</span> .database <span class="text-purple-400">import</span> SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title=<span class="text-green-400">"Scalable App"</span>)

<span class="text-slate-500"># Dependency</span>
<span class="text-blue-400">def</span> <span class="text-yellow-300">get_db</span>():
    db = SessionLocal()
    <span class="text-purple-400">try</span>:
        <span class="text-purple-400">yield</span> db
    <span class="text-purple-400">finally</span>:
        db.close()

<span class="text-blue-400">@app.post</span>(<span class="text-green-400">"/users/"</span>, response_model=schemas.User)
<span class="text-blue-400">def</span> <span class="text-yellow-300">create_user</span>(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    <span class="text-purple-400">if</span> db_user:
        <span class="text-purple-400">raise</span> HTTPException(status_code=400, detail=<span class="text-green-400">"Email already registered"</span>)
    <span class="text-purple-400">return</span> crud.create_user(db=db, user=user)</code></pre>
</div>
</div>
<h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6 scroll-mt-24" id="async-db">Async Database Operations</h2>
<p class="text-slate-600 dark:text-slate-300 mb-6">
                        One of the main advantages of FastAPI is its native support for asynchronous programming. When dealing with I/O bound operations like database queries, using <code>async</code> and <code>await</code> can dramatically improve throughput.
                    </p>
<!-- Callout Component -->
<div class="my-8 rounded-lg border-l-4 border-primary bg-primary/5 p-6 dark:bg-primary/10">
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-2xl">info</span>
<div>
<h4 class="text-base font-bold text-slate-900 dark:text-white">Performance Tip</h4>
<p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Always ensure your database driver supports asyncio. For PostgreSQL, <code class="bg-slate-200 dark:bg-slate-700 rounded px-1 text-primary">asyncpg</code> is highly recommended over standard psycopg2 for async workloads.</p>
</div>
</div>
</div>
<p class="text-slate-600 dark:text-slate-300 mb-6">
                        By integrating <code class="text-sm font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-pink-500">SQLAlchemy 1.4+</code> or <code class="text-sm font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-pink-500">Tortoise ORM</code>, you can maintain clean code while leveraging non-blocking database calls.
                    </p>
<h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6 scroll-mt-24" id="deployment">Deployment Strategies</h2>
<p class="text-slate-600 dark:text-slate-300 mb-6">
                       For production, you should use Gunicorn with Uvicorn workers. This provides the process management of Gunicorn with the speed of Uvicorn.
                    </p>
<!-- Subscribe Card Inline -->
<div class="my-12 rounded-2xl bg-slate-900 dark:bg-slate-800 p-8 text-center sm:p-12 relative overflow-hidden">
<div class="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl"></div>
<div class="absolute bottom-0 left-0 -mb-10 -ml-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl"></div>
<div class="relative z-10">
<h3 class="text-2xl font-bold text-white mb-3">Enjoying the article?</h3>
<p class="text-slate-300 mb-8 max-w-lg mx-auto">Get notified about new articles on System Design, Python, and scalable architecture directly in your inbox.</p>
<form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input class="flex-1 rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder-slate-400 ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" placeholder="Enter your email" type="email"/>
<button class="rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-800" type="submit">Subscribe</button>
</form>
<p class="mt-4 text-xs text-slate-500">No spam, unsubscribe anytime.</p>
</div>
</div>
</article>
<!-- Sidebar Column -->
<aside class="hidden lg:col-span-4 lg:block">
<div class="sticky top-24 space-y-8">
<!-- Table of Contents -->
<div>
<h3 class="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Table of Contents</h3>
<nav class="border-l border-slate-200 dark:border-slate-800">
<ul class="space-y-1">
<li>
<a class="block border-l-2 border-primary bg-primary/5 py-2 pl-4 text-sm font-medium text-primary -ml-[2px]" href="#why-fastapi">Why FastAPI?</a>
</li>
<li>
<a class="block border-l-2 border-transparent py-2 pl-4 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-300 -ml-[2px] transition-all" href="#project-setup">Project Setup</a>
</li>
<li>
<a class="block border-l-2 border-transparent py-2 pl-4 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-300 -ml-[2px] transition-all" href="#async-db">Async Database Operations</a>
</li>
<li>
<a class="block border-l-2 border-transparent py-2 pl-4 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-300 -ml-[2px] transition-all" href="#deployment">Deployment Strategies</a>
</li>
</ul>
</nav>
</div>
<!-- Related Articles -->
<div>
<h3 class="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Related Articles</h3>
<div class="flex flex-col gap-4">
<a class="group flex gap-3 items-start" href="#">
<div class="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-800" data-alt="Abstract blue container pattern" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCk4CM4pyuGBbPDsu4DoLflDTry75gGzisVSnO_tuce6qnEAHyxbxnXPklXzG_wJlRS97NLPZyxngSU3EmzZK1YdHb6RjNlJ0CdxyAYuntIAvXhUqoDvHiz7T22leCrKb1Z3IO8rsuQAUzG3OnZn6Ls_0Y6ttI_uZqlyYvxu1Dac9zmUxu6Ue2k6I9Vm4nSb-Ujsu55gzEFfwvlTlPg2RcerKk1Az92AzwwxikPIZ01s9xejuka2LKjQm1L4gMZPsAQ3W24AHToc4I"); background-size: cover;'></div>
<div>
<h4 class="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">Containerizing Python Apps with Docker</h4>
<p class="text-xs text-slate-500 mt-1">Sep 12 • 6 min read</p>
</div>
</a>
<a class="group flex gap-3 items-start" href="#">
<div class="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-800" data-alt="Abstract grid lines" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMRqTj-LKGl0d_bXT977w-npFtDf6Q9EmKAvPk7fvEwVvzMu8R-8Wq_3qtD_9CsdxuJyvwYaF-oPj9HSiIABuSQDlCm6P1_bbcVUQQpg4U2G2NAst3qBPaXa5K9Vdy3gLlprWIeX_Ffdj05RfmwK7I_p3hJiWkKB7y-gKemhg108BuzMBIxisQeEd6OhLfmjuB6LPIFthXNikZxAMMr19LWGN5ZFM195-y3RIkymRl5o4GWcKGMC5kNsFNBS2pQ9bmR9zcQOXekZo"); background-size: cover;'></div>
<div>
<h4 class="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">System Design Interview Guide: Load Balancers</h4>
<p class="text-xs text-slate-500 mt-1">Aug 05 • 12 min read</p>
</div>
</a>
<a class="group flex gap-3 items-start" href="#">
<div class="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-800" data-alt="Code snippets on screen" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRgFDE32qcZLfSC0SOYHB2UeYyIHB_iW8ntszAjLPy47QujnmdeRy9doMmQm5pVjGWq0VyUgOMcdA5TeilVFF7MZ6d1x_U5F7_fFQWu5nJXnpa1p1AJ3dDCIqLlb2Nxy8hco-DIFyABSvac3tGHEIUwPz2K8z9nZRBfseL3CIoLQZNtNOcyq1UFmC8pJcXh_wNLzjb_phTSuimN52mTLyF6hMJO-v1B0shDFGMJa-vuXSbL1oUgGAyrjS0PtpWdJ7X8MshJ2Ibi-s"); background-size: cover;'></div>
<div>
<h4 class="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">Effective Unit Testing in Python</h4>
<p class="text-xs text-slate-500 mt-1">Jul 22 • 5 min read</p>
</div>
</a>
</div>
</div>
</div>
</aside>
</div>
</div>
<!-- Read Next Section (Mobile/Bottom) -->
<div class="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#161b26] py-16">
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div class="flex items-center justify-between mb-8">
<h2 class="text-2xl font-bold text-slate-900 dark:text-white">Read Next</h2>
<a class="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1" href="#">View all posts <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
</div>
<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
<!-- Card 1 -->
<article class="flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111621] transition-all hover:shadow-lg hover:-translate-y-1">
<div class="h-48 w-full bg-slate-800" data-alt="Abstract server rack illustration" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEc9BudCbf9-LCm_bp0H4m8OOSB-ZHXzQqoCgpYlOnKDvpoyFxmm193VZQgmJ0ywG7w1mEVYZ94kf6n9N192eY3FyzeeDcN3ke5l51m3cUrMudxL8OH0l9eAwelARGRNlJpKFSXPPNi96Kx6ekXLwPLQKkwuTBfxzu8215poOwV2gIddnpvMBPB9XgQLINKjo5nxnLxneg_yKA39t0v_tPAKVbaWC-VlOp-HFNgDGCm9Vv62dhrcCKvDnkP0EK2yp07_mRhBNJCVU"); background-size: cover; background-position: center;'></div>
<div class="flex flex-1 flex-col p-6">
<div class="flex gap-2 mb-3">
<span class="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Architecture</span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Microservices vs Monoliths</h3>
<p class="mb-4 flex-1 text-sm text-slate-600 dark:text-slate-400 line-clamp-3">Understanding the trade-offs when choosing an architecture for your next big project.</p>
<div class="flex items-center gap-2 text-xs text-slate-500">
<span class="font-medium text-slate-900 dark:text-white">Promise Ayobami Nwhator</span>
<span>•</span>
<span>Nov 02, 2023</span>
</div>
</div>
</article>
<!-- Card 2 -->
<article class="flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111621] transition-all hover:shadow-lg hover:-translate-y-1">
<div class="h-48 w-full bg-slate-800" data-alt="Abstract gradient waves" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVGWvAF5q9UdYAjdMF6mLdB--CG1M-6bRyZKx6zCsDkrYn51gZVhmjJDJuHETozy-9EQxNQuHE-QswnZAhrcKTKzmGciLYm-_5iSIiNKpDuAub5gDoGqEmN4yKUnDyyVAX4vWNKV5-aiRo9B8xm4tTR1Lm4E385vPl2JpPJhZmxoGnkyBRDA7wYfGglQRQDCb4c3cGrW02ADVJtcmHryojO54VMDqhtDFywFTa_TM9KgWlwh26T0hHqaCODQyVhxFSJDxckStAmvg"); background-size: cover; background-position: center;'></div>
<div class="flex flex-1 flex-col p-6">
<div class="flex gap-2 mb-3">
<span class="rounded bg-purple-500/10 px-2 py-0.5 text-xs font-medium text-purple-500">API</span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">GraphQL vs REST: Which to choose?</h3>
<p class="mb-4 flex-1 text-sm text-slate-600 dark:text-slate-400 line-clamp-3">A deep dive into the pros and cons of GraphQL and REST APIs for frontend consumption.</p>
<div class="flex items-center gap-2 text-xs text-slate-500">
<span class="font-medium text-slate-900 dark:text-white">Promise Ayobami Nwhator</span>
<span>•</span>
<span>Oct 15, 2023</span>
</div>
</div>
</article>
<!-- Card 3 -->
<article class="flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111621] transition-all hover:shadow-lg hover:-translate-y-1 sm:hidden lg:flex">
<div class="h-48 w-full bg-slate-800" data-alt="Keyboard and coffee setup" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHzbUd_RWy63k3BoQCXVTCMsndkPYtp4-oC7UU3RXJrkT5C9TOpHd13qJk-HUEPXqU9pikPYO-IQZYRw3tNXLXffMSpxcOybUwjCAPpv9cXNAV5eWg3S3mRQUr_5o5IaY2xb4ZdPVQsRokYH6cb8Fd4TXeTIMb54na3JRotynvXaZInjZh7S9vt9hikWY-RFK3PGUk-sOJk13OZwdOFMIC6YCBEtcPEXKjXMEZP7TsTmq1F0BRNTusKnFgUpz49Lz1DhRdVI9dJzo"); background-size: cover; background-position: center;'></div>
<div class="flex flex-1 flex-col p-6">
<div class="flex gap-2 mb-3">
<span class="rounded bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-500">Career</span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">My Developer Productivity Stack</h3>
<p class="mb-4 flex-1 text-sm text-slate-600 dark:text-slate-400 line-clamp-3">Tools, plugins, and habits that help me stay focused and code faster.</p>
<div class="flex items-center gap-2 text-xs text-slate-500">
<span class="font-medium text-slate-900 dark:text-white">Promise Ayobami Nwhator</span>
<span>•</span>
<span>Sep 28, 2023</span>
</div>
</div>
</article>
</div>
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
