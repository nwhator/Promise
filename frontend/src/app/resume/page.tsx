"use client";

import parse from 'html-react-parser';
import { BlogChrome } from '@/components/BlogChrome';

export default function Resume() {
  const htmlContent = `
    <main class="layout-container flex flex-col items-center py-10 px-4 md:px-10">
      <div class="w-full max-w-5xl space-y-12">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border pb-8">
          <div class="flex flex-col gap-2">
            <span class="text-primary font-bold tracking-wider uppercase text-sm">Resume</span>
            <h1 class="text-4xl md:text-5xl font-black tracking-tight leading-tight text-foreground">Promise Ayobami Nwhator</h1>
            <p class="text-foreground/60 text-lg max-w-3xl mt-2 leading-relaxed">Backend Engineer • WordPress Systems Architect • Scalable Platform Builder</p>
            <p class="text-foreground/60">I build secure, scalable, and revenue-driven digital platforms.</p>
          </div>
          <div class="text-sm text-foreground/50 space-y-1">
            <p>📍 Nigeria</p>
            <p>📧 nwhator@gmail.com</p>
            <p>
              <a class="text-primary hover:underline" href="https://github.com/nwhator" target="_blank" rel="noreferrer">GitHub</a> • 
              <a class="text-primary hover:underline" href="https://linkedin.com/in/nwhator" target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>

        <section class="animate-fade-in">
          <h2 class="text-2xl font-bold mb-4 text-foreground">What I Do</h2>
          <div class="bg-surface rounded-xl p-6 border border-border transition-colors">
            <ul class="space-y-3 text-foreground/70 list-disc pl-5 marker:text-primary">
              <li>Build backend systems and APIs that scale without breaking.</li>
              <li>Optimize performance, SEO, and structure for long-term growth.</li>
              <li>Design conversion-focused e-commerce and digital publishing platforms.</li>
              <li>Automate workflows to reduce manual operations and increase delivery speed.</li>
            </ul>
          </div>
        </section>

        <section class="animate-fade-in">
          <h2 class="text-2xl font-bold mb-4 text-foreground">Core Expertise</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-surface rounded-xl p-6 border border-border transition-colors">
              <h3 class="font-bold text-lg mb-3 text-foreground">Backend Engineering</h3>
              <p class="text-foreground/60">C, Astro, Python & Django, Next.js, Node.js, Laravel PHP, RESTful API design, MySQL architecture, Docker and server management.</p>
            </div>
            <div class="bg-surface rounded-xl p-6 border border-border transition-colors">
              <h3 class="font-bold text-lg mb-3 text-foreground">WordPress Systems Development</h3>
              <p class="text-foreground/60">Custom WordPress builds, WooCommerce integration, plugin customization, migration, security hardening, and performance optimization.</p>
            </div>
            <div class="bg-surface rounded-xl p-6 border border-border transition-colors">
              <h3 class="font-bold text-lg mb-3 text-foreground">Full Digital Stack</h3>
              <p class="text-foreground/60">Flutter + Firebase mobile apps, SEO and technical optimization, deployment workflows with Git and Linux.</p>
            </div>
            <div class="bg-surface rounded-xl p-6 border border-border transition-colors">
              <h3 class="font-bold text-lg mb-3 text-foreground">Business Impact</h3>
              <p class="text-foreground/60">Analytics tracking, conversion optimization, brand support, and technical decisions aligned with business outcomes.</p>
            </div>
          </div>
        </section>

        <section class="animate-fade-in">
          <h2 class="text-2xl font-bold mb-6 text-foreground">Featured Experience</h2>
          <div class="space-y-6">
            <div class="bg-surface rounded-xl p-6 border border-border transition-colors">
              <h3 class="text-xl font-bold text-foreground">Lead Web Developer</h3>
              <p class="text-primary font-medium">Nigerian Dental Journal — Nigerian Dental Association</p>
              <ul class="mt-3 space-y-2 text-foreground/60 list-disc pl-5 marker:text-primary">
                <li>Built and now maintain the official journal platform.</li>
                <li>Designed article submission, reviewer, and editorial workflow systems.</li>
                <li>Optimized publishing operations and platform reliability.</li>
                <li>Implemented security and backup-focused operations.</li>
              </ul>
            </div>
            <div class="bg-surface rounded-xl p-6 border border-border transition-colors">
              <h3 class="text-xl font-bold text-foreground">WordPress Systems Developer</h3>
              <p class="text-primary font-medium">Étrange Media Services (2023–2025)</p>
              <ul class="mt-3 space-y-2 text-foreground/60 list-disc pl-5 marker:text-primary">
                <li>Delivered corporate, portfolio, and e-commerce websites.</li>
                <li>Handled SEO/performance optimization and hosting migrations.</li>
                <li>Built stable infrastructure for long-term maintainability.</li>
              </ul>
            </div>
            <div class="bg-surface rounded-xl p-6 border border-border transition-colors">
              <h3 class="text-xl font-bold text-foreground">Backend & Web Developer</h3>
              <p class="text-primary font-medium">Forth Creativity (2020–2023)</p>
              <ul class="mt-3 space-y-2 text-foreground/60 list-disc pl-5 marker:text-primary">
                <li>Developed React + Node.js products and backend services.</li>
                <li>Improved user engagement by 30%.</li>
                <li>Reduced database retrieval time by 25%.</li>
              </ul>
            </div>
            <div class="bg-surface rounded-xl p-6 border border-border transition-colors">
              <h3 class="text-xl font-bold text-foreground">WordPress & E-commerce Developer (Volunteer)</h3>
              <p class="text-primary font-medium">Refillistic AB</p>
              <ul class="mt-3 space-y-2 text-foreground/60 list-disc pl-5 marker:text-primary">
                <li>Built WooCommerce store with payment and shipping integrations.</li>
                <li>Optimized for conversion and performance with marketing alignment.</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="grid md:grid-cols-2 gap-6 animate-fade-in">
          <div class="bg-surface rounded-xl p-6 border border-border transition-colors md:col-span-2">
            <h3 class="text-xl font-bold mb-3 text-foreground">Beyond Code</h3>
            <p class="text-foreground/60">SEO implementation, analytics tracking, brand visual support (Canva), and IT networking/troubleshooting. I don't just build — I optimize for growth and efficiency.</p>
          </div>
          <div class="bg-surface rounded-xl p-6 border border-border transition-colors">
            <h3 class="text-xl font-bold mb-3 text-foreground">Education & Certification</h3>
            <p class="text-foreground/70 mb-2"><strong>BSc. Computer Science & Engineering</strong> — Obafemi Awolowo University</p>
            <p class="text-foreground/70"><strong>Certified Software Engineer</strong> — ALX (Backend Engineering, C, Python, Node.js, API architecture, Docker, Agile workflows)</p>
          </div>
          <div class="bg-surface rounded-xl p-6 border border-border transition-colors">
            <h3 class="text-xl font-bold mb-3 text-foreground">Mobile Development</h3>
            <p class="text-foreground/60">Built cross-platform mobile products with Flutter + Firebase, including an academic tutoring application for Human Anatomy in Pidgin English.</p>
            <h3 class="text-xl font-bold mt-5 mb-3 text-foreground">Languages</h3>
            <p class="text-foreground/60">English – Fluent, German – A2, Yoruba – Conversational</p>
          </div>
        </section>
      </div>
    </main>
  `;

  return (
    <BlogChrome>
      <div className="relative animate-fade-in">
        {parse(htmlContent)}
      </div>
    </BlogChrome>
  );
}
