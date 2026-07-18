import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  
  // Hook scroll progress for parallax background elements
  const { scrollY } = useScroll();
  
  // Map scroll distance to transform coordinates for elements
  const orbY1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const orbY2 = useTransform(scrollY, [0, 1000], [0, 150]);
  const bgGridY = useTransform(scrollY, [0, 1000], [0, 80]);

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
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-6"
    >
      {/* Parallax background elements */}
      <motion.div 
        style={{ y: bgGridY }}
        className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 z-0"
      />

      {/* Floating purple glowing orb */}
      <motion.div
        style={{ y: orbY1 }}
        className="absolute top-1/4 right-[10%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none z-0"
      />

      {/* Floating indigo glowing orb */}
      <motion.div
        style={{ y: orbY2 }}
        className="absolute bottom-1/4 left-[5%] w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none z-0"
      />

      {/* Hero content container */}
      <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center justify-center">
        
        {/* Intro Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300 text-xs font-mono mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Full Stack Developer Intern</span>
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 font-display"
        >
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Narla Sri Varshitha
          </span>
        </motion.h1>

        {/* Short Subtext / One-Line Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1], delay: 0.35 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10 font-sans font-light"
        >
          A <strong className="text-white font-medium">Full Stack Developer</strong> with hands-on experience in React Native, React, JavaScript, PHP, and modern web technologies. I specialize in building highly responsive frontends and secure API integrations.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1], delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-full shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 hover:scale-102 active:scale-98 transition-all cursor-pointer"
            id="hero-primary-cta"
          >
            View My Projects
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-semibold rounded-full hover:scale-102 active:scale-98 transition-all backdrop-blur-sm cursor-pointer"
            id="hero-secondary-cta"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Floating scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500 text-xs font-mono pointer-events-none"
        >
          <span className="w-5 h-8 border border-slate-700 rounded-full flex justify-center p-1">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></span>
          </span>
          Scroll Down
        </motion.div>

      </div>
    </section>
  );
}
