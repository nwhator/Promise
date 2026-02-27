"use client";

import { motion } from 'framer-motion';
import parse from 'html-react-parser';

export default function Home() {
  const htmlHeader = `
<!-- PROMISE_SHARED_HEADER_START -->
<header class="sticky top-0 z-50 border-b border-border-dark glass-nav sticky top-0 z-50 backdrop-blur-md">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="/" target="_top" class="flex items-center gap-3 text-white">
        <img src="/promise-nwhator-logo.svg" alt="PROMISE NWHATOR logo" style="height:28px;width:auto;"/>
      </a>
      <nav class="hidden md:flex items-center gap-6 text-sm">
        <a class="text-white font-bold" href="/" target="_top">Home</a>
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

  return (
    <div className="stitch-page-root bg-background-dark min-h-screen text-white overflow-x-hidden">
      {/* Background Grid & Glow */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] pointer-events-none" />

      {parse(htmlHeader)}

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center py-24 px-4 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-brighter border border-border-dark text-slate-300 text-xs font-mono font-medium shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Platform Systems Online // Available for Consultations
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tight leading-[0.85] lg:leading-[0.8]">
              Architecting <br className="hidden md:block" />
              <span className="text-gradient-primary">Infrastructure</span> <br />
              for Scale.
            </h1>

            <p className="max-w-2xl text-xl text-slate-400 leading-relaxed font-light">
              Hi, I’m <span className="text-white font-medium">Promise Ayobami Nwhator</span> — I build secure, scalable backend architectures and mission-critical digital platforms designed for production at scale.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5 mt-4">
              <a href="/contact" className="flex items-center justify-center gap-2 px-10 py-4 bg-primary hover:bg-violet-600 text-white font-black rounded-xl transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1">
                BUILD YOUR SOLUTION <span className="material-symbols-outlined text-lg">bolt</span>
              </a>
              <a href="/projects" className="flex items-center justify-center gap-2 px-10 py-4 glass text-white font-bold rounded-xl transition-all hover:bg-white/10 hover:-translate-y-1">
                VIEW PORTFOLIO <span className="material-symbols-outlined text-lg">grid_view</span>
              </a>
            </div>
          </motion.div>

          {/* Decorative Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 0.05, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute right-[-5%] top-1/4 -translate-y-1/2 w-[700px] h-[700px] rotate-12 pointer-events-none hidden lg:block text-primary font-mono text-sm leading-relaxed whitespace-pre select-none"
          >
            {`class SystemArchitect(Engineer):
    def __init__(self):
        self.stack = ['Node.js', 'Next.js', 'PostgreSQL', 'PHP']
        self.focus = 'Infrastructure & Scalability'
    
    def build_solution(self, problem):
        # Engineering for 10x growth
        analysis = self.analyze(problem)
        architecture = self.design(analysis)
        return self.deploy(architecture)`}
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="py-32 px-4 relative" id="projects">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Engineering Masterpieces</h2>
              <p className="text-slate-400 max-w-2xl text-xl font-light">Production environments where performance, security, and business logic converge.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "The Lum Studios",
                  category: "SaaS & Booking",
                  desc: "Advanced booking engine for photography with automated SMTP notifications and real-time scheduling.",
                  img: "/lum_studios.png",
                  tags: ["Next.js", "Node"],
                  link: "/case-study-lum-studios",
                  color: "primary"
                },
                {
                  title: "Agricyclers UK",
                  category: "E-commerce",
                  desc: "High-conversion storefront for agricultural supplies with complex variation logic and custom checkout flows.",
                  img: "/agricyclers.png",
                  tags: ["PHP", "Tailwind"],
                  link: "/case-study-agricyclers",
                  color: "accent"
                },
                {
                  title: "Medical Journal Network",
                  category: "Infrastructure",
                  desc: "Scalable academic infrastructure for journals like NDJ, NHSJ, and NJBCS. Hardened security and SMTP integration.",
                  img: "/ojs_journals.png",
                  tags: ["OJS", "Linux"],
                  link: "/case-study-ojs-infrastructure",
                  color: "emerald-500"
                }
              ].map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group relative flex flex-col bg-surface border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <span className="inline-block px-3 py-1 bg-white/5 text-[10px] font-bold rounded-lg border border-white/10 uppercase tracking-widest text-slate-400 mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">{project.desc}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex gap-3">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-mono text-slate-500">{tag}</span>
                        ))}
                      </div>
                      <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
                        CASE STUDY <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 relative overflow-hidden bg-surface/30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tight leading-[1.1]">Ready to build something <span className="text-gradient-primary">legendary</span>?</h2>
              <p className="text-slate-400 mb-14 text-2xl font-light leading-relaxed">
                I am currently accepting select project consultations. Let's architect your success.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="https://wa.me/2347048812719?text=Hello%20Promise%2C%20I%20visited%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20potential%20project." target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-12 py-6 bg-[#25D366] hover:bg-[#1ebd5e] text-black font-black text-xl rounded-2xl transition-all shadow-2xl shadow-[#25D366]/20 hover:-translate-y-1">
                  START A CONVERSATION <span className="material-symbols-outlined font-black">chat</span>
                </a>
                <a href="/resume" className="flex items-center justify-center gap-3 px-12 py-6 glass text-white font-bold text-xl rounded-2xl transition-all hover:bg-white/10 hover:-translate-y-1">
                  GO TO RESUME <span className="material-symbols-outlined text-lg">description</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {parse(htmlFooter)}
    </div>
  );
}
