import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  
  // Hook scroll progress for parallax background elements
  const { scrollY } = useScroll();
  
  // Map scroll distance to transform coordinates for elements
  const orbY1 = useTransform(scrollY, [0, 1000], [0, -180]);
  const orbY2 = useTransform(scrollY, [0, 1000], [0, 180]);
  const bgGridY = useTransform(scrollY, [0, 1000], [0, 60]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-6 bg-gradient-to-tr from-rose-50/70 via-slate-50 to-blue-50/70"
    >
      {/* Parallax background grid */}
      <motion.div 
        style={{ y: bgGridY }}
        className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 z-0"
      />

      {/* Parallax floating pastel shapes */}
      {/* 1. Pastel Pink Blur */}
      <motion.div
        style={{ y: orbY1 }}
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-[8%] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-rose-200/40 rounded-full blur-[80px] pointer-events-none z-0"
      />

      {/* 2. Pastel Blue Blur */}
      <motion.div
        style={{ y: orbY2 }}
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-[3%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-blue-200/40 rounded-full blur-[90px] pointer-events-none z-0"
      />

      {/* 3. Pastel Lavender Blur */}
      <motion.div
        animate={{ 
          y: [0, 40, 0],
          x: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/3 w-[200px] h-[200px] bg-purple-200/35 rounded-full blur-[70px] pointer-events-none z-0"
      />

      {/* Hero content container */}
      <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center justify-center">
        
        {/* Intro Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 dark:border-purple-900/60 bg-white/70 dark:bg-slate-900/40 text-purple-600 dark:text-purple-400 text-xs font-mono mb-8 backdrop-blur-md shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Full Stack Developer Intern</span>
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 font-display text-slate-900 dark:text-white"
        >
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Narla Sri Varshitha
          </span>
        </motion.h1>

        {/* Short Subtext / One-Line Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1], delay: 0.35 }}
          className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-10 font-sans font-light"
        >
          A <strong className="text-slate-800 dark:text-slate-200 font-semibold">Full Stack Developer</strong> with hands-on experience in React Native, React, JavaScript, PHP, and modern web technologies. I specialize in building highly responsive frontends and secure API integrations.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1], delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <motion.a
            href="#projects"
            onClick={handleScrollToProjects}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 text-white font-semibold rounded-full shadow-md shadow-purple-100 dark:shadow-purple-900/10 hover:shadow-purple-200/50 dark:hover:shadow-purple-500/10 transition-all cursor-pointer"
            id="hero-primary-cta"
          >
            View My Projects
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          
          <motion.a
            href="#contact"
            onClick={handleScrollToContact}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white/70 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold rounded-full transition-all backdrop-blur-sm cursor-pointer shadow-sm"
            id="hero-secondary-cta"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Floating scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-400 text-xs font-mono pointer-events-none"
        >
          <span className="w-5 h-8 border border-slate-300 rounded-full flex justify-center p-1">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></span>
          </span>
          Scroll Down
        </motion.div>

      </div>
    </section>
  );
}
