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
    <section id="contact" className="relative py-24 px-6 overflow-hidden bg-slate-50/50 dark:bg-slate-950/20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-pink-100/30 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-slate-955 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg font-light text-sm sm:text-base">
            Have a question, project proposal, or just want to say hi? Drop me a line and I'll get back to you soon.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-4"></div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Links & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between text-left"
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                Let's chat.
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-sans font-light leading-relaxed">
                Whether you're looking to hire a developer, build a custom application, or discuss mobile app ideas, my inbox is always open.
              </p>

              {/* Direct Mail Card */}
              <a 
                href="mailto:narlasrivarshitha@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 hover:border-purple-200 dark:hover:border-purple-500/30 hover:bg-white/70 dark:hover:bg-slate-900/50 transition-all group cursor-pointer shadow-sm"
                id="contact-email-link"
              >
                <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40 group-hover:bg-purple-100/60 dark:group-hover:bg-purple-950/40 transition-colors">
                  <Mail className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-405 dark:text-slate-500">Direct Email</h4>
                  <p className="text-base text-slate-800 dark:text-slate-200 font-mono group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    narlasrivarshitha@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* Social profiles list */}
            <div className="mt-12 lg:mt-0">
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 font-semibold">
                Find Me On
              </h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/Srivarshitha-Narla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-purple-200 dark:hover:border-purple-900/60 hover:text-purple-600 dark:hover:text-purple-400 rounded-xl hover:-translate-y-1 transition-all text-xs font-mono shadow-sm"
                  aria-label="GitHub Profile"
                  id="contact-social-github"
                >
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/srivarshitha-narla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-purple-200 dark:hover:border-purple-900/60 hover:text-purple-600 dark:hover:text-purple-400 rounded-xl hover:-translate-y-1 transition-all text-xs font-mono shadow-sm"
                  aria-label="LinkedIn Profile"
                  id="contact-social-linkedin"
                >
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a
                  href="https://leetcode.com/u/Srivarshitha-Narla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-purple-200 dark:hover:border-purple-900/60 hover:text-purple-600 dark:hover:text-purple-400 rounded-xl hover:-translate-y-1 transition-all text-xs font-mono shadow-sm"
                  aria-label="LeetCode Profile"
                  id="contact-social-leetcode"
                >
                  <Brain className="w-5 h-5 text-amber-500" /> LeetCode
                </a>
                <a
                  href="https://www.codechef.com/users/srivarshitha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-purple-200 dark:hover:border-purple-900/60 hover:text-purple-600 dark:hover:text-purple-400 rounded-xl hover:-translate-y-1 transition-all text-xs font-mono shadow-sm"
                  aria-label="CodeChef Profile"
                  id="contact-social-codechef"
                >
                  <Trophy className="w-5 h-5 text-yellow-650" /> CodeChef
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
                    className="text-center py-12 flex flex-col items-center justify-center"
                    key="success"
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-6 animate-pulse" />
                    <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm font-light">
                      Thank you for reaching out. I've received your message and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-500 hover:text-purple-650 transition-colors cursor-pointer"
                    >
                      Send Another Message
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key="form"
                    noValidate
                    id="contact-form"
                  >
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="form-name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white focus:border-purple-400 focus:ring-1 focus:ring-purple-200 text-sm outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-email" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="form-email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white focus:border-purple-400 focus:ring-1 focus:ring-purple-200 text-sm outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-message" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        id="form-message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white focus:border-purple-400 focus:ring-1 focus:ring-purple-200 text-sm outline-none transition-all resize-none"
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
                      className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 disabled:opacity-80 text-white font-semibold rounded-xl shadow-md shadow-purple-100 hover:opacity-95 active:scale-99 transition-all cursor-pointer"
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
