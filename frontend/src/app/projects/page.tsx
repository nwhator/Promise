"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { BlogChrome } from '@/components/BlogChrome';

export default function Projects() {
  const [filter, setFilter] = useState("All Solutions");

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
      img: "/ojs_journals.png",
      tags: ["OJS", "PHP", "Academic"],
      link: "https://nigeriandentaljournal.ng/",
      caseStudy: "/case-study-ojs-infrastructure",
      theme: "emerald-500"
    },
    {
      title: "NHS Journal",
      category: "Academic",
      desc: "Medical journal infrastructure for the Nigerian Health Systems Journal.",
      img: "/ojs_journals.png",
      tags: ["OJS", "Security", "SMTP"],
      link: "https://nigerianhsjournal.ng/",
      caseStudy: "/case-study-ojs-infrastructure",
      theme: "emerald-500"
    },
    {
      title: "NJBCS Journal",
      category: "Academic",
      desc: "Academic publishing system for the NJBCS medical sciences network.",
      img: "/ojs_journals.png",
      tags: ["OJS", "Linux", "Database"],
      link: "https://njbcs.ng/",
      caseStudy: "/case-study-ojs-infrastructure",
      theme: "emerald-500"
    },
    {
      title: "Userank Blog",
      category: "Blogging",
      desc: "High-performance WordPress blog optimization for professional SEO and technical content publishing.",
      img: "/ojs_journals.png",
      tags: ["WordPress", "SEO", "Optimization"],
      link: "https://blog.userank.com/",
      caseStudy: "#",
      theme: "primary"
    },
    {
      title: "Webfixvilla",
      category: "Blogging",
      desc: "Content publishing platform and technical blog optimized for speed and engagement.",
      img: "/ojs_journals.png",
      tags: ["WordPress", "UI/UX", "Performance"],
      link: "https://webfixvilla.com/",
      caseStudy: "#",
      theme: "primary"
    },
    {
      title: "Corporate Olympics",
      category: "Enterprise",
      desc: "Enterprise-grade event portal built with PHP and Tailwind for large scale corporate engagement.",
      img: "/agricyclers.png",
      tags: ["PHP", "Tailwind", "MySQL"],
      link: "https://corporateolympics.org/",
      caseStudy: "#",
      theme: "accent"
    },
    {
      title: "Health World",
      category: "HealthTech",
      desc: "A comprehensive hospital management and patient engagement platform with real-time data tracking.",
      img: "/lum_studios.png",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      link: "https://health-world-psi.vercel.app/hospitals",
      caseStudy: "#",
      theme: "primary"
    },
    {
      title: "EventPal",
      category: "Event SaaS",
      desc: "Dynamic event ticketing and management system with secure payment processing and seat reservation.",
      img: "/lum_studios.png",
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
      img: "/ojs_journals.png",
      tags: ["Next.js", "Node.js", "Personal"],
      link: "https://pulsesafe.vercel.app/",
      caseStudy: "#",
      theme: "primary"
    },
    {
      title: "Music By Code",
      category: "Hobby project",
      desc: "Experimental audio-visual project built with Astro and Tone.js for generative music sequences.",
      img: "/ojs_journals.png",
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
    <BlogChrome>
      <div className="relative overflow-x-hidden min-h-screen">
        {/* Background Elements */}
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] pointer-events-none" />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-foreground">Project <span className="text-gradient-primary">Portfolio</span></h1>
            <p className="text-foreground/60 max-w-2xl text-xl font-light leading-relaxed">
              Architecting production-ready solutions across web engineering, infrastructure, and scalable system design.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-16">
            {["All Solutions", "SaaS", "E-commerce", "Infrastructure", "Academic", "Blogging"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px - 6 py - 2 rounded - xl text - sm font - bold transition - all ${ filter === f ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'bg-surface text-foreground/50 border border-border hover:border-primary/50 hover:text-foreground' } `}
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
                className="group relative flex flex-col bg-surface border border-border rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-lg"
              >
                <div className="aspect-video relative overflow-hidden bg-surface-brighter">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/40 backdrop-blur-md text-[10px] font-bold rounded-lg border border-border uppercase tracking-widest text-foreground/70">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-8 font-light flex-1">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-foreground/40 bg-surface-brighter px-2 py-0.5 rounded border border-border">{tag}</span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-border">
                    <a href={project.caseStudy} className="flex items-center gap-2 text-xs font-bold text-foreground/50 hover:text-foreground transition-colors">
                      CASE STUDY <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </a>
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold text-foreground hover:text-primary transition-colors">
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
            className="mt-32 p-12 bg-surface rounded-[3rem] border border-border text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-black mb-8 relative z-10 text-foreground underline decoration-primary decoration-4 underline-offset-8">Have a project in mind?</h2>
            <p className="text-foreground/60 mb-10 max-w-xl mx-auto relative z-10 text-lg font-light leading-relaxed">
              I'm currently open to new collaborations and system architecture consultations.
            </p>
            <div className="flex justify-center gap-4 relative z-10">
              <a href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-black rounded-2xl hover:bg-violet-600 transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95">
                LET'S TALK <span className="material-symbols-outlined">chat</span>
              </a>
            </div>
          </motion.div>
        </main>
      </div>
    </BlogChrome>
  );
}
