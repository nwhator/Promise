"use client";

import { motion } from 'framer-motion';
import parse from 'html-react-parser';
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState("All Solutions");

  const htmlHeader = `
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
        <a class="text-white font-bold" href="/projects" target="_top">Projects</a>
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
  `;

  const htmlFooter = `
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
<!-- PROMISE_SHARED_FOOTER_END -->
  `;

  const projects = [
    {
      title: "The Lum Studios",
      category: "SaaS & Booking",
      desc: "Advanced photography booking engine with automated SMTP notifications and real-time scheduling management.",
      img: "/lum_studios.png",
      tags: ["Next.js", "Node.js", "Supabase"],
      link: "https://thelumstudios.com/",
      caseStudy: "/case-study-lum-studios",
      theme: "primary"
    },
    {
      title: "Agricyclers UK",
      category: "E-commerce",
      desc: "High-conversion e-commerce storefront for agricultural supplies with complex variation logic and custom checkout flows.",
      img: "/agricyclers.png",
      tags: ["PHP", "Tailwind", "MySQL"],
      link: "https://agricyclers.co.uk/",
      caseStudy: "/case-study-agricyclers",
      theme: "accent"
    },
    {
      title: "Journal Network OJS",
      category: "Infrastructure",
      desc: "Scalable academic infrastructure for journals like NDJ, NHSJ, and NJBCS. Hardened security and SMTP integration.",
      img: "/ojs_journals.png",
      tags: ["OJS", "Linux", "Apache"],
      link: "/case-study-ojs-infrastructure",
      caseStudy: "/case-study-ojs-infrastructure",
      theme: "emerald-500"
    },
    {
      title: "Nigerian Dental Journal",
      category: "Academic",
      desc: "Digital publishing platform for the Nigerian Dental Journal using hardened OJS infrastructure.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9_r7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X",
      tags: ["OJS", "PHP", "Academic"],
      link: "https://nigeriandentaljournal.ng/",
      caseStudy: "/case-study-ojs-infrastructure",
      theme: "emerald-500"
    },
    {
      title: "NHS Journal",
      category: "Academic",
      desc: "Medical journal infrastructure for the Nigerian Health Systems Journal.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9_r7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X",
      tags: ["OJS", "Security", "SMTP"],
      link: "https://nigerianhsjournal.ng/",
      caseStudy: "/case-study-ojs-infrastructure",
      theme: "emerald-500"
    },
    {
      title: "NJBCS Journal",
      category: "Academic",
      desc: "Academic publishing system for the NJBCS medical sciences network.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9_r7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X",
      tags: ["OJS", "Linux", "Database"],
      link: "https://njbcs.ng/",
      caseStudy: "/case-study-ojs-infrastructure",
      theme: "emerald-500"
    },
    {
      title: "Userank Blog",
      category: "Blogging",
      desc: "High-performance WordPress blog optimization for professional SEO and technical content publishing.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9_r7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X",
      tags: ["WordPress", "SEO", "Optimization"],
      link: "https://blog.userank.com/",
      caseStudy: "#",
      theme: "primary"
    },
    {
      title: "Webfixvilla",
      category: "Blogging",
      desc: "Content publishing platform and technical blog optimized for speed and engagement.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9_r7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X",
      tags: ["WordPress", "UI/UX", "Performance"],
      link: "https://webfixvilla.com/",
      caseStudy: "#",
      theme: "primary"
    },
    {
      title: "Corporate Olympics",
      category: "Enterprise",
      desc: "Enterprise-grade event portal built with PHP and Tailwind for large scale corporate engagement.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9_r7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X7_X",
      tags: ["PHP", "Tailwind", "MySQL"],
      link: "https://corporateolympics.org/",
      caseStudy: "#",
      theme: "accent"
    },
    {
      title: "Health World",
      category: "HealthTech",
      desc: "A comprehensive hospital management and patient engagement platform with real-time data tracking.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM9rwfnKvT5WC88CDomyYnnmsFlsTm9gUEnbH5sQo4OIFt1-K3hOrAPrRz0KiHj1r7LDj6o63GYub3jFfTR0BLk9sJWOz_9j907ZBJfSlq7NIPtgogHNQnZ48bYGWcvGm28IIy8VkEhun3JCNNZ48ivWK7QxESInlPoLPMJb8gtDSW19_grTpJigIJiZNWm1BcwQryuSBqrxu7kfSDzsw3VJlwHskUykDUdUiAm9Q1cHeUYlsY9ATQndgkIOpVSNMea4QwT5Z-o50",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      link: "https://health-world-psi.vercel.app/hospitals",
      caseStudy: "#",
      theme: "primary"
    },
    {
      title: "EventPal",
      category: "Event SaaS",
      desc: "Dynamic event ticketing and management system with secure payment processing and seat reservation.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP2k1Tx38Mh1xnOx8eADfMRyEkRkepTX8HziwptHQ6ipbzpmhqKEgN-5-vQpveFrrximKpoChR3m-yJs5JNDn-wwShzXrvte5vfpheCm5pwbOdrs5momKolhrYNCpmFmn3YuAIRj9eJNVuqTgWuCX8B7Kss6xJH4ZhVZPneVVdx6eSpYfczUin0uHtPi_69QtluP_v6qwZ78pd3dIUlluadTTbdZpvJfeO8ENMhR_B8BEY5qwU778JEgrumRkizenwIB0UriTxkno",
      tags: ["Next.js", "Tailwind", "Stripe"],
      link: "https://eventpal-indol.vercel.app/",
      caseStudy: "#",
      theme: "primary"
    },
    {
      title: "StrataCore",
      category: "Engineering",
      desc: "Professional engineering solutions portal with robust project display and client interaction modules.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNLaNSzTFWBBccKThNMOHcmcA1OcI9fej_ED6Cb5T3Bv7MEQu5GfKGAOuGQojM431N_IIhkbZ2EWlTeWSdnGcJikoaRTQNYR2L0UUSeig7jvEv5lscVz1I21FKypaBSbVZWo_leuBL0V6D9BfBHfulg9g7qSmlju6KuFRCW11fyacALVO1voYq38fuNN-9Om7ZNk5EyJJHc-h2BMXa7rImMgKsxZFkJa59o7DDDUSnnGKOn7apKtecSk2PQFtSAqB89MnFNvdkCAY",
      tags: ["PHP", "Tailwind", "Ajax"],
      link: "https://stratacore.gobrand.now/",
      caseStudy: "#",
      theme: "accent"
    },
    {
      title: "Biskas Kitchen",
      category: "Gastronomy",
      desc: "Food service platform featuring dynamic menus and internal order tracking systems.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG0kTtYcXivr36BrHbOqPWJKy-Zgz9ThHUgVuFGlcHJjJ-V8PzBf1xHMNE_T8IGumYVg6GClYuMN5HnJynw39JVqpQFzaJEtVe0NYC12RxWCOqG1cyBJlOIaGVfcNI7PaHCgd3cIQXml-gcjpNhJlBTjRX6YNMZZadQgHpzpJ0ryDEazz0yj7Bd5Dfol5hR4Y3k0JzX-3h6x_sOBpfdmJ-1CLRDELL54E_EYAjP1mVz92qIK2EUwk3_AnWYuBfSSIfpJ9ScOdJGMs",
      tags: ["PHP", "MySQL", "Tailwind"],
      link: "http://www.biskaskitchen.com",
      caseStudy: "#",
      theme: "accent"
    },
    {
      title: "PulseSafe",
      category: "Personal venture",
      desc: "A startup initiative focused on digital safety and verification systems. Currently in continuous production phase.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOO0N_xwC8WlXBPpqE41RVTM3pmaU5-9gUdRqmDOWjAgwdnvuUGEjkwqfSdglzebcq6Vml5aEM3v14zvjGJ5TcfzE1j1rcu5JvPWLE54c0cgHrSD2DzMji5Te0ZDyTkwoxQuOM0aytdjfqKgytqwT4dh-gr8MmPeSMJPygIhQ4oWmhgglka9pz0JvqzA5hlTMmlWKArscRH2Mpp8nSutdAcHk-BP3t3UbWydroaZ010dl2Q3KgaQ9IJNGLOh_aTwcQSAwhuQ8GDKA",
      tags: ["Next.js", "Node.js", "Personal"],
      link: "https://pulsesafe.vercel.app/",
      caseStudy: "#",
      theme: "primary"
    },
    {
      title: "Music By Code",
      category: "Hobby project",
      desc: "Experimental audio-visual project built with Astro and Tone.js for generative music sequences.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-b365-Knl6lGIeux_DeldnnHL9wywNeuuDJU_AozWjoqJz9OqweTE6D_vvjnMmooFVtTFDo8mQ47y-oO_QIfDCQfrAWVOVWr7V3QFQZB6I1VHy1m7xMMPx8M5HFeET485qMacR7MRlsAXlDMsgbZfMBttshGrAyE3Vuz7_CVnebITzKyRqlv_iPMntHdwxSNYV7nMDW3nFcEkNVIMEv-tDjbdVTAafbNGyhcKwTx0XaFHUXtK3PZViMXI43KT_9UuDuDGqNUE5NM",
      tags: ["Astro", "Tone.js", "Vite"],
      link: "https://music-by-code.vercel.app/",
      caseStudy: "#",
      theme: "emerald-500"
    }
  ];

  const filteredProjects = filter === "All Solutions"
    ? projects
    : projects.filter(p => p.category.includes(filter) || filter.includes(p.category));

  return (
    <div className="stitch-page-root bg-background-dark min-h-screen text-white overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] pointer-events-none" />

      {parse(htmlHeader)}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Project <span className="text-gradient-primary">Portfolio</span></h1>
          <p className="text-slate-400 max-w-2xl text-xl font-light leading-relaxed">
            Architecting production-ready solutions across web engineering, infrastructure, and scalable system design.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-16">
          {["All Solutions", "SaaS", "E-commerce", "Infrastructure", "Academic", "Blogging"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === f ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'bg-white/5 text-slate-400 border border-white/10 hover:border-primary/50 hover:text-white'}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProjects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="group relative flex flex-col bg-surface border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden bg-slate-900">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-[10px] font-bold rounded-lg border border-white/10 uppercase tracking-widest text-slate-300">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light flex-1">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-slate-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">{tag}</span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                  <a href={project.caseStudy} className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors">
                    CASE STUDY <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold text-white hover:text-primary transition-colors">
                    LIVE PREVIEW <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 glass rounded-[3rem] border border-white/5 text-center relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-black mb-8 relative z-10">Have a project in mind?</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto relative z-10 text-lg font-light leading-relaxed">
            I'm currently open to new collaborations and system architecture consultations.
          </p>
          <a href="/contact" className="relative z-10 inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-black rounded-2xl hover:bg-violet-600 transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95">
            LET'S TALK <span className="material-symbols-outlined">chat</span>
          </a>
        </motion.div>
      </main>

      {parse(htmlFooter)}
    </div>
  );
}
