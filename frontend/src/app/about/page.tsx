"use client";

import { motion } from 'framer-motion';
import { BlogChrome } from '@/components/BlogChrome';

export default function About() {
  return (
    <BlogChrome>
      <div className="relative overflow-x-hidden">
        {/* Background Elements */}
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] pointer-events-none" />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4"
            >
              <div className="sticky top-24 space-y-8">
                <div className="bg-surface rounded-3xl p-8 border border-border text-center shadow-xl">
                  <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 rounded-full ring-4 ring-primary/20 overflow-hidden bg-surface-brighter">
                      <img src="/me.jpeg" alt="Promise Nwhator" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-surface" />
                  </div>
                  <h1 className="text-2xl font-black mb-2 text-foreground">Promise Nwhator</h1>
                  <p className="text-primary font-mono text-sm tracking-tighter mb-4 uppercase">Systems Architect & Backend Lead</p>
                  <p className="text-foreground/60 text-sm font-light leading-relaxed mb-8">
                    Engineering secure, scalable, and high-performance digital infrastructure for the modern web.
                  </p>
                  <div className="flex justify-center gap-4">
                    <a href="https://github.com/nwhator" target="_blank" rel="noreferrer" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-foreground/60 hover:text-primary transition-all">
                      <span className="material-symbols-outlined">code</span>
                    </a>
                    <a href="https://linkedin.com/in/nwhator" target="_blank" rel="noreferrer" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-foreground/60 hover:text-primary transition-all">
                      <span className="material-symbols-outlined">work</span>
                    </a>
                  </div>
                </div>

                <div className="bg-surface rounded-3xl p-8 border border-border">
                  <h3 className="text-xs font-black uppercase tracking-widest text-foreground/40 mb-6 font-mono">Core Arsenal</h3>
                  <div className="flex flex-wrap gap-2">
                    {["System Architecture", "Next.js", "Node.js", "PHP", "AWS", "Supabase", "OJS", "PostgreSQL", "Tailwind"].map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-surface-brighter border border-border rounded-lg text-xs font-medium text-foreground/70">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8 space-y-16"
            >
              {/* Bio Section */}
              <section className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground"><span className="text-gradient-primary">Architecting</span> the future of digital systems.</h2>
                <div className="text-lg space-y-4">
                  <p className="text-foreground/70 font-light leading-relaxed">
                    I specialize in turning complex business requirements into elegant, high-performance technical architectures. With deep expertise in backend systems, I've architected everything from high-conversion e-commerce engines to national academic journal infrastructures.
                  </p>
                  <p className="text-foreground/70 font-light leading-relaxed">
                    My approach focuses on three pillars: <strong className="text-foreground font-bold">Security</strong>, <strong className="text-foreground font-bold">Scalability</strong>, and <strong className="text-foreground font-bold">Speed</strong>. I believe that a system shouldn't just work; it should be ready to scale 10x without flinching.
                  </p>
                </div>
              </section>

              {/* Career Timeline */}
              <section className="space-y-10">
                <h3 className="text-2xl font-bold flex items-center gap-4 text-foreground">
                  <span className="w-8 h-[1px] bg-primary" /> Career Trajectory
                </h3>
                <div className="space-y-8">
                  {[
                    {
                      title: "Senior Backend Architect",
                      company: "Consulting & SaaS Projects",
                      period: "2024 — PRESENT",
                      desc: "Lead architect for The Lum Studios booking engine and Agricyclers UK e-commerce platform. Developed custom OJS integration plugins and secure hosting architectures."
                    },
                    {
                      title: "System Infrastructure Engineer",
                      company: "Academic Journal Networks",
                      period: "2023 — PRESENT",
                      desc: "Designed and deployed OJS infrastructures for national journals including NDJ and NHSJ. Integrated automated SMTP flows and security hardening protocols."
                    },
                    {
                      title: "WordPress Developer",
                      company: "Technical Content & SEO",
                      period: "2021 — PRESENT",
                      desc: "Developing and optimizing high-performance WordPress themes and plugins for professional blogs including Userank and Webfixvilla. Focused on Core Web Vitals and advanced SEO."
                    },
                    {
                      title: "B.Sc Computer Science and Engineering",
                      company: "Obafemi Awolowo University",
                      period: "Graduate",
                      desc: "Focused on computer science fundamentals, system design, and database management."
                    }
                  ].map((job, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 10 }}
                      className="group flex gap-6 relative"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full border-2 border-primary bg-background z-10" />
                        <div className="w-[2px] h-full bg-border" />
                      </div>
                      <div className="pb-8">
                        <p className="text-xs font-bold text-primary mb-1">{job.period}</p>
                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{job.title}</h4>
                        <p className="text-sm text-foreground/50 mb-3">{job.company}</p>
                        <p className="text-foreground/60 font-light leading-relaxed text-sm">{job.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Certifications & Strengths */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-surface rounded-3xl p-8 border border-border space-y-6">
                  <h4 className="text-lg font-bold flex items-center gap-3 text-foreground">
                    <span className="material-symbols-outlined text-primary">verified</span> Certifications
                  </h4>
                  <ul className="space-y-4 text-sm text-foreground/60 font-light">
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      Software Engineering, ALX
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      Google SEO Fundamentals
                    </li>
                  </ul>
                </div>
                <div className="bg-surface rounded-3xl p-8 border border-border space-y-6">
                  <h4 className="text-lg font-bold flex items-center gap-3 text-foreground">
                    <span className="material-symbols-outlined text-primary">bolt</span> Philosophy
                  </h4>
                  <p className="text-sm text-foreground/60 font-light leading-relaxed">
                    "Build for the future, but deliver for today. Every line of code should be an investment in the system's long-term stability and success."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </BlogChrome>
  );
}
