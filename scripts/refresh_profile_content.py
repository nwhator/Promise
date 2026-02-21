from pathlib import Path
import re

root = Path("c:/Users/nwhat/Promise/stitch_promise_portfolio")

files = sorted(root.glob("*/code.html"))

GLOBAL_REPLACEMENTS = [
    ("Nwhator Promise", "Promise Ayobami Nwhator"),
    ("hello@nwhator.dev", "nwhator@gmail.com"),
    ("Osun, Nigeria", "Nigeria"),
]

for file_path in files:
    text = file_path.read_text(encoding="utf-8")
    for old, new in GLOBAL_REPLACEMENTS:
        text = text.replace(old, new)
    file_path.write_text(text, encoding="utf-8")

# Home page targeted refresh
home_file = root / "home_-_nwhator_promise_portfolio" / "code.html"
home_html = home_file.read_text(encoding="utf-8")
home_html = home_html.replace(
    "<title>Promise Ayobami Nwhator - Full-Stack Software Engineer</title>",
    "<title>Promise Ayobami Nwhator - Backend Engineer | WordPress Systems Architect</title>",
)
home_html = home_html.replace(
    "Hi, I'm <span class=\"text-white font-semibold\">Promise Ayobami Nwhator</span>. A Full-Stack Software Engineer and Systems Architect obsessed with high-performance backends, clean architecture, and delivering robust solutions.",
    "Hi, I’m <span class=\"text-white font-semibold\">Promise Ayobami Nwhator</span> — Backend Engineer, WordPress Systems Architect, and scalable platform builder. I build secure, revenue-driven digital platforms from backend APIs to journal and e-commerce systems.",
)
home_html = home_html.replace(
    "I leverage modern frameworks and robust databases to build systems that are secure, fast, and scalable.",
    "I specialize in secure backend systems, WordPress architecture, and performance-focused stacks that scale without breaking.",
)
home_file.write_text(home_html, encoding="utf-8")

# About page targeted refresh
about_file = root / "about_-_engineering_philosophy" / "code.html"
about_html = about_file.read_text(encoding="utf-8")
about_html = about_html.replace(
    "<title>About - Promise Ayobami Nwhator</title>",
    "<title>About - Promise Ayobami Nwhator | Backend Engineer</title>",
)
about_html = about_html.replace(
    "<p class=\"mt-1 text-sm font-medium text-primary\">Systems Architect</p>",
    "<p class=\"mt-1 text-sm font-medium text-primary\">Backend Engineer • WordPress Systems Architect</p>",
)
about_html = about_html.replace(
    "Building scalable systems with precision. Obsessed with clean architecture and performance.",
    "I build secure, scalable, and revenue-driven digital platforms with strong focus on performance, SEO, and long-term maintainability.",
)
about_html = about_html.replace(
    "Code is a liability.<br/>\n<span class=\"text-slate-400 dark:text-slate-600\">Functionality is an asset.</span>",
    "Structure drives growth.<br/>\n<span class=\"text-slate-400 dark:text-slate-600\">Performance keeps it sustainable.</span>",
)
about_file.write_text(about_html, encoding="utf-8")

# Resume page main content rewrite
resume_file = root / "resume_-_experience_&_skills" / "code.html"
resume_html = resume_file.read_text(encoding="utf-8")

new_main = '''<main class="layout-container flex flex-col items-center py-10 px-4 md:px-10">
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

<section>
<h2 class="text-2xl font-bold mb-4">What I Do</h2>
<div class="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<ul class="space-y-3 text-slate-600 dark:text-slate-300 list-disc pl-5 marker:text-primary">
<li>Build backend systems and APIs that scale without breaking.</li>
<li>Optimize performance, SEO, and structure for long-term growth.</li>
<li>Design conversion-focused e-commerce and digital publishing platforms.</li>
<li>Automate workflows to reduce manual operations and increase delivery speed.</li>
</ul>
</div>
</section>

<section>
<h2 class="text-2xl font-bold mb-4">Core Expertise</h2>
<div class="grid md:grid-cols-2 gap-4">
<div class="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="font-bold text-lg mb-3">Backend Engineering</h3>
<p class="text-slate-600 dark:text-slate-300">C, Astro, Python & Django, Next.js, Node.js, Laravel PHP, RESTful API design, MySQL architecture, Docker and server management.</p>
</div>
<div class="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="font-bold text-lg mb-3">WordPress Systems Development</h3>
<p class="text-slate-600 dark:text-slate-300">Custom WordPress builds, WooCommerce integration, plugin customization, migration, security hardening, and performance optimization.</p>
</div>
<div class="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="font-bold text-lg mb-3">Full Digital Stack</h3>
<p class="text-slate-600 dark:text-slate-300">Flutter + Firebase mobile apps, SEO and technical optimization, deployment workflows with Git and Linux.</p>
</div>
<div class="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="font-bold text-lg mb-3">Business Impact</h3>
<p class="text-slate-600 dark:text-slate-300">Analytics tracking, conversion optimization, brand support, and technical decisions aligned with business outcomes.</p>
</div>
</div>
</section>

<section>
<h2 class="text-2xl font-bold mb-6">Featured Experience</h2>
<div class="space-y-6">
<div class="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="text-xl font-bold">Lead Web Developer</h3>
<p class="text-primary font-medium">Nigerian Dental Journal — Nigerian Dental Association</p>
<ul class="mt-3 space-y-2 text-slate-600 dark:text-slate-300 list-disc pl-5 marker:text-primary">
<li>Built and maintain the official journal platform.</li>
<li>Designed article submission, reviewer, and editorial workflow systems.</li>
<li>Optimized publishing operations and platform reliability.</li>
<li>Implemented security and backup-focused operations.</li>
</ul>
</div>
<div class="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="text-xl font-bold">WordPress Systems Developer</h3>
<p class="text-primary font-medium">Étrange Media Services (2023–2025)</p>
<ul class="mt-3 space-y-2 text-slate-600 dark:text-slate-300 list-disc pl-5 marker:text-primary">
<li>Delivered corporate, portfolio, and e-commerce websites.</li>
<li>Handled SEO/performance optimization and hosting migrations.</li>
<li>Built stable infrastructure for long-term maintainability.</li>
</ul>
</div>
<div class="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="text-xl font-bold">Backend & Web Developer</h3>
<p class="text-primary font-medium">Forth Creativity (2020–2023)</p>
<ul class="mt-3 space-y-2 text-slate-600 dark:text-slate-300 list-disc pl-5 marker:text-primary">
<li>Developed React + Node.js products and backend services.</li>
<li>Improved user engagement by 30%.</li>
<li>Reduced database retrieval time by 25%.</li>
</ul>
</div>
<div class="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="text-xl font-bold">WordPress & E-commerce Developer (Volunteer)</h3>
<p class="text-primary font-medium">Refillistic AB</p>
<ul class="mt-3 space-y-2 text-slate-600 dark:text-slate-300 list-disc pl-5 marker:text-primary">
<li>Built WooCommerce store with payment and shipping integrations.</li>
<li>Optimized for conversion and performance with marketing alignment.</li>
</ul>
</div>
</div>
</section>

<section class="grid md:grid-cols-2 gap-6">
<div class="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="text-xl font-bold mb-3">Education & Certification</h3>
<p class="text-slate-600 dark:text-slate-300 mb-2"><strong>BSc. Computer Science & Engineering</strong> — Obafemi Awolowo University</p>
<p class="text-slate-600 dark:text-slate-300"><strong>Certified Software Engineer</strong> — ALX (Backend Engineering, C, Python, Node.js, API architecture, Docker, Agile workflows)</p>
</div>
<div class="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 class="text-xl font-bold mb-3">Mobile Development</h3>
<p class="text-slate-600 dark:text-slate-300">Built cross-platform mobile products with Flutter + Firebase, including an academic tutoring application for Human Anatomy in Pidgin English.</p>
<h3 class="text-xl font-bold mt-5 mb-3">Languages</h3>
<p class="text-slate-600 dark:text-slate-300">English (Fluent), German (A2), Yoruba (Conversational)</p>
</div>
</section>
</div>
</main>'''

resume_html = re.sub(r"<main class=\"layout-container[\s\S]*?</main>", new_main, resume_html, count=1)
resume_file.write_text(resume_html, encoding="utf-8")

print(f"Updated global profile content in {len(files)} stitched files and rewrote resume page.")
