import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2, ArrowRight, Brain, Trophy } from 'lucide-react';

const Github = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('error');
      return;
    }
    
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden bg-slate-50/50 dark:bg-[#0c1610]/20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-emerald-100/10 dark:bg-emerald-950/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto font-sans">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[#f0a202] font-mono text-xs uppercase tracking-widest font-semibold mb-2 block">
            — Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-slate-950 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-900 dark:text-slate-200 max-w-lg font-light text-sm sm:text-base">
            Have a question, project proposal, or just want to say hi? Drop me a line and I'll get back to you soon.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#264933] to-[#f0a202] rounded-full mt-4"></div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Links & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between text-left font-sans"
          >
            <div className="space-y-8 font-sans">
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                Let's chat.
              </h3>
              <p className="text-slate-900 dark:text-slate-200 font-sans font-light leading-relaxed text-sm sm:text-base">
                Whether you're looking to hire a developer, build a custom application, or discuss mobile app ideas, my inbox is always open.
              </p>

              {/* Direct Mail Card */}
              <a 
                href="mailto:narlasrivarshitha@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/60 dark:border-[#223d2b] bg-white/40 dark:bg-[#122619]/25 hover:border-purple-200 dark:hover:border-[#2d5337] hover:bg-white/70 dark:hover:bg-[#122619]/55 transition-all group cursor-pointer shadow-sm"
                id="contact-email-link"
              >
                <div className="p-3 rounded-lg bg-[#264933]/5 dark:bg-[#264933]/15 border border-[#264933]/10 group-hover:bg-[#264933]/10 dark:group-hover:bg-[#264933]/25 transition-colors">
                  <Mail className="w-6 h-6 text-[#264933] dark:text-[#f0a202]" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-slate-400 font-sans">Direct Email</h4>
                  <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-mono group-hover:text-[#f0a202] transition-colors">
                    narlasrivarshitha@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* Social profiles list */}
            <div className="mt-12 lg:mt-0 font-sans">
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 font-semibold">
                Find Me On
              </h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/SriVarshitha7720"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-white dark:bg-[#122619] border border-slate-200 dark:border-[#223d2b] text-slate-600 dark:text-slate-400 hover:border-[#f0a202]/30 dark:hover:border-[#f0a202]/30 hover:text-[#f0a202] dark:hover:text-[#f0a202] rounded-xl hover:-translate-y-1 transition-all text-xs font-mono shadow-sm"
                  aria-label="GitHub Profile"
                  id="contact-social-github"
                >
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/srivarshithanarla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-white dark:bg-[#122619] border border-slate-200 dark:border-[#223d2b] text-slate-600 dark:text-slate-400 hover:border-[#f0a202]/30 dark:hover:border-[#f0a202]/30 hover:text-[#f0a202] dark:hover:text-[#f0a202] rounded-xl hover:-translate-y-1 transition-all text-xs font-mono shadow-sm"
                  aria-label="LinkedIn Profile"
                  id="contact-social-linkedin"
                >
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a
                  href="https://leetcode.com/u/SriVarshitha2005/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-white dark:bg-[#122619] border border-slate-200 dark:border-[#223d2b] text-slate-600 dark:text-slate-400 hover:border-[#f0a202]/30 dark:hover:border-[#f0a202]/30 hover:text-[#f0a202] dark:hover:text-[#f0a202] rounded-xl hover:-translate-y-1 transition-all text-xs font-mono shadow-sm"
                  aria-label="LeetCode Profile"
                  id="contact-social-leetcode"
                >
                  <Brain className="w-5 h-5 text-amber-500" /> LeetCode
                </a>
                <a
                  href="https://www.codechef.com/users/nsrivarshitha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-white dark:bg-[#122619] border border-slate-200 dark:border-[#223d2b] text-slate-600 dark:text-slate-400 hover:border-[#f0a202]/30 dark:hover:border-[#f0a202]/30 hover:text-[#f0a202] dark:hover:text-[#f0a202] rounded-xl hover:-translate-y-1 transition-all text-xs font-mono shadow-sm"
                  aria-label="CodeChef Profile"
                  id="contact-social-codechef"
                >
                  <Trophy className="w-5 h-5 text-yellow-600" /> CodeChef
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-8 h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12 flex flex-col items-center justify-center font-sans"
                    key="success"
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-6 animate-pulse" />
                    <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm font-light font-sans">
                      Thank you for reaching out. I've received your message and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#264933] dark:text-[#f0a202] hover:opacity-80 transition-colors cursor-pointer"
                    >
                      Send Another Message
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left font-sans"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key="form"
                    noValidate
                    id="contact-form"
                  >
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-sans">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="form-name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-[#122619]/20 border border-slate-200 dark:border-[#223d2b] text-slate-800 dark:text-white focus:border-[#264933] focus:ring-1 focus:ring-[#264933]/30 text-sm outline-none transition-all font-sans"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-email" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-sans">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="form-email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-[#122619]/20 border border-slate-200 dark:border-[#223d2b] text-slate-800 dark:text-white focus:border-[#264933] focus:ring-1 focus:ring-[#264933]/30 text-sm outline-none transition-all font-sans"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-message" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-sans">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        id="form-message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-[#122619]/20 border border-slate-200 dark:border-[#223d2b] text-slate-800 dark:text-white focus:border-[#264933] focus:ring-1 focus:ring-[#264933]/30 text-sm outline-none transition-all resize-none font-sans"
                        placeholder="How can I help you?"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-rose-500 text-xs font-mono">
                        * Please fill in all the fields before submitting.
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === 'submitting'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#264933] to-[#f0a202] disabled:opacity-80 text-white font-semibold rounded-xl shadow-md shadow-emerald-950/15 hover:opacity-95 active:scale-99 transition-all cursor-pointer text-sm"
                      id="contact-form-submit"
                    >
                      {status === 'submitting' ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
