"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="stitch-page-root overflow-hidden min-h-screen relative bg-background-dark">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 glass-nav backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-3 text-white">
              <img src="/promise-nwhator-logo.svg" alt="PROMISE NWHATOR logo" style={{ height: '28px', width: 'auto' }} />
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a className="text-slate-400 hover:text-primary transition-colors" href="/">Home</a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="/about">About</a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="/projects">Projects</a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="/services">Services</a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="/technologies">Technologies</a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="/resume">Resume</a>
              <a className="text-white font-bold" href="/contact">Contact</a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="/blog">Blog</a>
            </nav>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-nav-dropdown md:hidden w-full">
            <nav className="flex flex-col p-6 gap-6 text-base font-bold">
              <a className="text-slate-400" href="/">Home</a>
              <a className="text-slate-400" href="/about">About</a>
              <a className="text-slate-400" href="/projects">Projects</a>
              <a className="text-slate-400" href="/services">Services</a>
              <a className="text-slate-400" href="/technologies">Technologies</a>
              <a className="text-slate-400" href="/resume">Resume</a>
              <a className="text-white" href="/contact">Contact</a>
              <a className="text-slate-400" href="/blog">Blog</a>
            </nav>
          </div>
        )}
      </header>

      <main className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                  Let's Build <br /> <span className="text-gradient-primary">Together.</span>
                </h1>
                <p className="text-slate-400 text-lg leading-relaxed font-light">
                  Whether you're scaling a startup or architecting a mission-critical platform, I'm here to ensure your backend infrastructure is rock-solid.
                </p>
              </div>

              <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-500/5 border border-green-500/20 rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-500 text-xs font-mono uppercase tracking-widest">System Status: Accepting Projects</span>
              </div>

              <div className="space-y-6">
                <a href="mailto:nwhator@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Email me at</p>
                    <p className="text-white group-hover:text-primary transition-colors">nwhator@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/2347048812719" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-slate-400 group-hover:text-[#25D366] group-hover:border-[#25D366]/30 transition-all duration-300">
                    <span className="material-symbols-outlined">chat</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Chat on WhatsApp</p>
                    <p className="text-white group-hover:text-[#25D366] transition-colors">+234 704 881 2719</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-3"
            >
              <div className="glass rounded-3xl p-8 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -z-10" />

                <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400" htmlFor="name">Name</label>
                      <input
                        required
                        className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400" htmlFor="email">Email</label>
                      <input
                        required
                        type="email"
                        className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                        id="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400" htmlFor="subject">Subject</label>
                    <input
                      required
                      className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                      id="subject"
                      placeholder="How can I help you?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400" htmlFor="message">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-all resize-none"
                      id="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    disabled={status === 'loading'}
                    className={`w-full py-4 rounded-xl font-black text-white transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 ${status === 'loading' ? 'bg-slate-700' : 'bg-primary hover:bg-violet-600 shadow-xl shadow-primary/20 hover:shadow-primary/40'
                      }`}
                  >
                    {status === 'loading' ? 'SOLVING ARCHITECTURE...' : 'INITIATE CONTACT'}
                    <span className="material-symbols-outlined">send</span>
                  </button>

                  {status === 'success' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-center font-bold">
                      Message received! I'll be in touch shortly.
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-center font-bold">
                      {errorMsg}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <footer className="py-10 text-center text-slate-600 text-sm border-t border-white/5 mt-20">
        © {new Date().getFullYear()} Promise Ayobami Nwhator. Systems Architect.
      </footer>
    </div>
  );
}
