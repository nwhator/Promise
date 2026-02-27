
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Promise Ayobami Nwhator | Senior Backend Engineer & Systems Architect',
  description: 'Specializing in building scalable Node.js/Next.js SaaS, complex PHP/MySQL architectures, and OJS journal infrastructure. Expert in production-ready digital systems.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const htmlContent = `
    



<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Theme Configuration -->
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
                        "text-main": "#f8fafc",
                        "text-muted": "#94a3b8",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "mono": ["JetBrains Mono", "monospace"],
                    },
                    backgroundImage: {
                        'grid-pattern': "linear-gradient(to right, #282d39 1px, transparent 1px), linear-gradient(to bottom, #282d39 1px, transparent 1px)",
                    }
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .code-bg {
            background-image: radial-gradient(circle at 1px 1px, #282d39 1px, transparent 0);
            background-size: 40px 40px;
        }
        .glass-nav {
            background: rgba(17, 22, 33, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
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



<div class="relative min-h-screen flex flex-col w-full overflow-x-hidden">
<!-- Navigation -->

<!-- Main Content -->
<main class="flex-grow pt-16">
<!-- Hero Section -->
<section className="animate-fade-in" class="relative min-h-[700px] flex items-center justify-center py-24 px-4 overflow-hidden bg-background-dark">
<!-- Floating Ambient Light -->
<div class="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-float"></div>
<div class="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] pointer-events-none animate-float" style="animation-delay: -2s"></div>

<!-- Abstract Code Snippet (Visual Decoration) -->
<div class="absolute right-[-5%] top-1/4 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.05] rotate-12 pointer-events-none hidden lg:block text-primary font-mono text-sm leading-relaxed whitespace-pre select-none animate-float">
class SystemArchitect(Engineer):
    def __init__(self):
        self.stack = ['Node.js', 'Next.js', 'PostgreSQL', 'PHP']
        self.focus = 'Infrastructure & Scalability'
    
    def build_solution(self, problem):
        # Engineering for 10x growth
        analysis = self.analyze(problem)
        architecture = self.design(analysis)
        return self.deploy(architecture)
        
    async def optimize(self, system):
        # Continuous performance tuning
        while system.has_bottlenecks():
            await system.improve_throughput()
            await system.harden_security()
</div>

<div class="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-10">
<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-brighter border border-border-dark text-slate-300 text-xs font-mono font-medium shadow-2xl">
<span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
Platform Systems Online // Available for Consultations
</div>
<h1 class="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-white leading-[0.9] lg:leading-[0.85]">
    Architecting <br class="hidden md:block"/>
    <span class="text-gradient-primary">Infrastructure</span> <br/>
    for High-Impact SaaS.
</h1>
<p class="max-w-2xl text-xl text-slate-400 leading-relaxed font-light">
    Hi, I’m <span class="text-white font-medium">Promise Ayobami Nwhator</span> — I build secure, scalable backend architectures, e-commerce systems, and academic journal infrastructure designed for production at scale.
</p>
<div class="flex flex-col sm:flex-row justify-center gap-5 mt-4">
<a href="/contact" class="flex items-center justify-center gap-2 px-10 py-4 bg-primary hover:bg-violet-600 text-white font-black rounded-xl transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1">
    BUILD YOUR SOLUTION <span class="material-symbols-outlined text-lg">bolt</span>
</a>
<a href="/projects" class="flex items-center justify-center gap-2 px-10 py-4 glass text-white font-bold rounded-xl transition-all hover:bg-white/10 hover:-translate-y-1">
    VIEW PORTFOLIO <span class="material-symbols-outlined text-lg">grid_view</span>
</a>
</div>
</div>
</section>
<!-- Tech Stack Section -->
<section className="animate-fade-in" class="py-12 border-y border-border-dark bg-[#0b0f16]" id="stack">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex flex-col md:flex-row items-center gap-8 md:gap-16">
<div class="md:w-1/3">
<h2 class="text-2xl font-bold text-white mb-2">Technical Arsenal</h2>
<p class="text-text-muted text-sm leading-relaxed">
                                From backend APIs to full WordPress journal systems and e-commerce platforms, I help organizations turn ideas into stable, production-ready solutions.
                            </p>
</div>
<div class="md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
<!-- Python -->
<div class="group flex flex-col items-center justify-center p-4 rounded-xl card-premium border border-border-dark hover:border-primary/50 hover:card-premium/80 transition-all duration-300 cursor-default">
<div class="w-12 h-12 flex items-center justify-center text-text-muted group-hover:text-[#3776AB] transition-colors mb-3">
<!-- Simple SVG for Python -->
<svg class="w-full h-full" fill="currentColor" role="img" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-8.3H6.18l-.01-1.42.04-.38.08-.4.12-.38.18-.36.22-.32.27-.28.31-.22.36-.18.4-.12.44-.08.48-.03h6.14l.69.02M6.1 1.87c-.33.02-.64.12-.9.28a1.87 1.87 0 0 0-.87 1.15c-.06.27-.04.56.08.82.11.26.3.49.53.64.24.16.51.24.79.23.28-.02.54-.12.77-.28.22-.16.39-.39.48-.65.09-.26.07-.54-.05-.8-.13-.25-.33-.46-.58-.58-.26-.13-.54-.18-.81-.13m9.13 14.8c.28-.02.54.08.77.24.23.16.4.38.5.64.09.26.07.54-.04.8-.12.26-.32.47-.57.59-.26.13-.54.18-.82.13-.32-.03-.63-.14-.88-.3-.26-.16-.44-.4-.53-.67-.08-.26-.06-.54.06-.79.12-.26.32-.47.57-.6.25-.13.53-.19.8-.14M22.8 8.65l.02.13.01.24-.03.27-.06.32-.1.36-.15.37-.2.36-.26.35-.32.32-.41.27-.51.22-.58.14-.69.05h-4.75l.21.65.17.67.12.69.05.72v4.87l-.02.13-.04.26-.1.3-.16.33-.25.34-.34.34-.45.32-.59.3-.73.26-.9.2h-6.14l-.48-.03-.44-.08-.4-.12-.36-.18-.31-.22-.27-.28-.22-.32-.18-.36-.12-.38-.08-.4-.04-.38.01-1.42h9.49v-8.3h-8.17l-.06.01h-.16l-.24-.01-.32-.05-.36-.1-.4-.16-.42-.24-.42-.33-.4-.44-.36-.57-.32-.71-.24-.87-.16-1.04-.05-1.23.14-1.05.21-.88.28-.73.32-.59.35-.46.36-.36.35-.18.32-.12.28-.07.21-.03h8.33l.02.21.04.27.07.32.1.35.15.37.2.36.27.35.33.32.41.27.5.22.59.14.69.05h4.75l.21-.02.26-.04.3-.07.33-.1.35-.14.35-.19.33-.25.3-.31.26-.38.21-.46.13-.55.05-.63V8.5l.01-.13"></path></svg>
</div>
<span class="text-sm font-bold text-white">Python</span>
</div>
<!-- FastAPI -->
<div class="group flex flex-col items-center justify-center p-4 rounded-xl card-premium border border-border-dark hover:border-primary/50 hover:card-premium/80 transition-all duration-300 cursor-default">
<div class="w-12 h-12 flex items-center justify-center text-text-muted group-hover:text-[#009688] transition-colors mb-3">
<svg class="w-full h-full" fill="currentColor" role="img" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.375 0 0 5.375 0 12c0 6.625 5.375 12 12 12 6.625 0 12-5.375 12-12C24 5.375 18.625 0 12 0zm0 2.188c5.426 0 9.812 4.386 9.812 9.812 0 5.426-4.386 9.812-9.812 9.812-5.426 0-9.812-4.386-9.812-9.812 0-5.426 4.386-9.812 9.812-9.812zm-3.844 4.594c-.219 0-.438.094-.625.25-.375.312-.406.844-.094 1.219l2.25 2.688c-.688.563-1.469.875-2.25 1.094-.469.125-.75.625-.625 1.094.125.469.625.75 1.094.625 1.031-.281 2.063-.719 2.938-1.5l1.656 2.031c.313.375.875.438 1.25.125.375-.313.438-.875.125-1.25l-2.281-2.75c.781-.594 1.625-.938 2.5-1.156.469-.125.75-.625.625-1.094-.125-.469-.625-.75-1.094-.625-1.125.281-2.25.781-3.188 1.625l-1.625-1.938c-.219-.281-.5-.438-.813-.438z"></path></svg>
</div>
<span class="text-sm font-bold text-white">FastAPI</span>
</div>
<!-- Django -->
<div class="group flex flex-col items-center justify-center p-4 rounded-xl card-premium border border-border-dark hover:border-primary/50 hover:card-premium/80 transition-all duration-300 cursor-default">
<div class="w-12 h-12 flex items-center justify-center text-text-muted group-hover:text-[#092E20] group-hover:bg-surface/90 group-hover:rounded-full group-hover:p-1 transition-all mb-3">
<svg class="w-full h-full" fill="currentColor" role="img" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.143 0c-3.774 0-6.19 1.83-6.19 4.363 0 1.94 1.764 3.036 3.69 3.32v.065c-2.038.307-4.254 1.643-4.254 4.54 0 3.354 3.003 6.066 8.09 6.066 2.016 0 3.602-.285 4.982-.68V4.867C17.46 2.072 14.54 0 11.142 0zm6.32 17.67c-1.38.395-2.966.68-4.982.68-3.07 0-4.85-1.36-4.85-3.09 0-1.84 1.754-2.85 4.337-3.048v5.592c0 .022.022-.044.022-.132h5.473v.11c0 3.266 2.543 6.094 5.955 6.22h.9v-2.895h-.35c-1.776 0-2.434-1.25-2.434-2.894V5.723H24V3.07h-2.52v-.022c0-1.184-.964-1.95-2.477-1.95-1.95 0-3.157 1.25-3.157 3.31v13.264zM11.69 3.047c2.237 0 3.99.965 3.99 2.565v3.42c-2.016.154-3.536-.767-3.536-2.61 0-1.84 1.556-3.375-3.047-3.375h2.59z"></path></svg>
</div>
<span class="text-sm font-bold text-white">Django</span>
</div>
<!-- MySQL -->
<div class="group flex flex-col items-center justify-center p-4 rounded-xl card-premium border border-border-dark hover:border-primary/50 hover:card-premium/80 transition-all duration-300 cursor-default">
<div class="w-12 h-12 flex items-center justify-center text-text-muted group-hover:text-[#4479A1] transition-colors mb-3">
<svg class="w-full h-full" fill="currentColor" role="img" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.322 3.193c-.902 1.487-1.391 3.25-1.391 5.127 0 5.487 4.148 9.92 9.248 9.92 1.348 0 2.625-.308 3.79-.854-3.355.672-6.61-.43-8.87-3.235-1.748-2.172-2.39-4.92-1.96-7.514-.294-1.157-.525-2.34-.817-3.444zM24 12.396c0-1.428-.42-2.756-1.15-3.896-.532 2.593-1.94 4.907-3.92 6.55-1.892 1.57-4.225 2.458-6.67 2.56-4.664.205-8.84-2.656-10.46-6.673-.62-1.536-.888-3.13-.82-4.686-.188 1.18-.088 2.257-.024 3.324.475 7.915 7.152 14.184 15.185 13.626 6.89-.478 12.336-6.19 12.57-13.064-.997 2.15-2.67 3.93-4.71 5.143zM15.093 0C9.648.33 5.48 4.75 5.257 10.198c-.12 2.946.903 5.714 2.72 7.82 2.128 2.464 5.31 3.86 8.56 3.52 4.496-.467 8.04-4.22 8.214-8.73.106-2.733-.943-5.263-2.757-7.147-2.073-2.152-5.045-3.39-8.156-3.167.315 2.593.96 5.342 1.706 7.514.805 2.34 1.84 4.07 2.66 4.79.16.14.332.25.514.333.02.01.04-.002.05-.015.01-.013.013-.03.007-.043-.32-.693-.566-2.008-.344-3.792.202-1.615.8-3.417 1.558-5.322 1.054-2.65 2.132-5.36 2.05-7.46-.07-1.838-1.04-3.666-3.1-4.706C17.653.486 16.388.16 15.093 0zM8.38 7.32c-.01.006-.01.018-.004.025.29.35.597.77.87 1.25.234.407.414.832.553 1.264.444 1.385.495 2.87.15 4.195-.143.548-.37 1.053-.667 1.488-.02.03.012.067.043.05 1.503-.84 2.228-2.502 1.957-4.398-.21-1.462-1.12-2.906-2.903-3.873z"></path></svg>
</div>
<span class="text-sm font-bold text-white">MySQL</span>
</div>
</div>
</div>
</div>
</section>
<!-- Flagship Projects Section -->
<section className="animate-fade-in" class="py-24 bg-background dark:bg-background-dark relative" id="projects">
<div class="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div class="mb-16">
<h2 class="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">Engineering Masterpieces</h2>
<p class="text-slate-400 max-w-2xl text-lg">Production environments where performance, security, and business logic converge.</p>
</div>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<!-- Project 1: Lum Studios -->
<div class="group relative flex flex-col bg-[#0a0a0c] border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
<div class="aspect-video relative overflow-hidden">
<img src="/lum_studios.png" alt="Lum Studios" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
<div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent"></div>
</div>
<div class="p-8 flex flex-col flex-1">
<div class="flex items-center gap-2 mb-4">
<span class="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded border border-primary/20 uppercase">SaaS & Booking</span>
</div>
<h3 class="text-2xl font-bold text-white mb-3">The Lum Studios</h3>
<p class="text-slate-400 text-sm leading-relaxed mb-6">Advanced booking engine for photography with automated SMTP notifications and real-time scheduling.</p>
<div class="mt-auto flex items-center justify-between">
<div class="flex gap-2">
<span class="text-[10px] font-mono text-slate-500">Next.js</span>
<span class="text-[10px] font-mono text-slate-500">Node</span>
</div>
<a href="/case-study-lum-studios" class="text-white text-sm font-bold flex items-center gap-1 hover:text-primary transition-colors">
Explore Case <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>

<!-- Project 2: Agricyclers -->
<div class="group relative flex flex-col bg-[#0a0a0c] border border-white/5 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
<div class="aspect-video relative overflow-hidden">
<img src="/agricyclers.png" alt="Agricyclers" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
<div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent"></div>
</div>
<div class="p-8 flex flex-col flex-1">
<div class="flex items-center gap-2 mb-4">
<span class="px-2 py-1 bg-accent/10 text-accent text-[10px] font-bold rounded border border-accent/20 uppercase">E-commerce</span>
</div>
<h3 class="text-2xl font-bold text-white mb-3">Agricyclers UK</h3>
<p class="text-slate-400 text-sm leading-relaxed mb-6">High-conversion storefront for agricultural supplies with complex variation logic and custom checkout flows.</p>
<div class="mt-auto flex items-center justify-between">
<div class="flex gap-2">
<span class="text-[10px] font-mono text-slate-500">PHP</span>
<span class="text-[10px] font-mono text-slate-500">Tailwind</span>
</div>
<a href="/case-study-agricyclers" class="text-white text-sm font-bold flex items-center gap-1 hover:text-accent transition-colors">
Explore Case <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>

<!-- Project 3: OJS -->
<div class="group relative flex flex-col bg-[#0a0a0c] border border-white/5 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10">
<div class="aspect-video relative overflow-hidden">
<img src="/ojs_journals.png" alt="Journals" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
<div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent"></div>
</div>
<div class="p-8 flex flex-col flex-1">
<div class="flex items-center gap-2 mb-4">
<span class="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded border border-emerald-500/20 uppercase">Infrastructure</span>
</div>
<h3 class="text-2xl font-bold text-white mb-3">Medical Journal Network</h3>
<p class="text-slate-400 text-sm leading-relaxed mb-6">Scalable academic infrastructure for journals like NDJ, NHSJ, and NJBCS. Hardened security and SMTP integration.</p>
<div class="mt-auto flex items-center justify-between">
<div class="flex gap-2">
<span class="text-[10px] font-mono text-slate-500">OJS</span>
<span class="text-[10px] font-mono text-slate-500">Linux</span>
</div>
<a href="/case-study-ojs-infrastructure" class="text-white text-sm font-bold flex items-center gap-1 hover:text-emerald-500 transition-colors">
Explore Case <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>

<div class="mt-16 text-center">
<a href="/projects" class="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all">
View Full Portfolio <span class="material-symbols-outlined">grid_view</span>
</a>
</div>
</div>
</section>
<!-- CTA Section -->
<section className="animate-fade-in" class="py-32 relative overflow-hidden">
<div class="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

<div class="max-w-4xl mx-auto px-4 text-center relative z-10">
<h2 class="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Ready to build something <span class="text-gradient-primary">legendary</span>?</h2>
<p class="text-slate-400 mb-12 text-xl font-light leading-relaxed">
    I am currently accepting select project consultations. Whether you need a scalable backend, a high-conversion storefront, or mission-critical infrastructure, I'm ready to architect it.
</p>
<div class="flex flex-col sm:flex-row justify-center gap-6">
<a href="https://wa.me/2347048812719?text=Hello%20Promise%2C%20I%20visited%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20potential%20project." target="_blank" rel="noreferrer" class="flex items-center justify-center gap-2 px-10 py-5 bg-[#25D366] hover:bg-[#1ebd5e] text-black font-black text-lg rounded-2xl transition-all shadow-2xl shadow-[#25D366]/20 hover:-translate-y-1">
    START A CONVERSATION <span class="material-symbols-outlined font-black">chat</span>
</a>
<a href="/resume" class="flex items-center justify-center gap-2 px-10 py-5 glass text-white font-bold text-lg rounded-2xl transition-all hover:bg-white/10 hover:-translate-y-1">
    GO TO RESUME <span class="material-symbols-outlined text-lg">description</span>
</a>
</div>
</div>
</section>
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
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />

      <div className="relative animate-fade-in">
        {parse(htmlContent)}
      </div>
    </div>
  );
}
