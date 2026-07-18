import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import avatarImg from '../assets/avatar.webp';

export default function Hero() {
  const containerRef = useRef(null);

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

  // Marquee list items to slide infinitely
  const marqueeItems = [
    "App Design", "✦", "Website Design", "✦", "React Native", "✦", 
    "DevOps", "✦", "Cloud Computing", "✦", "REST APIs", "✦"
  ];

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-gradient-to-tr from-rose-50/20 via-slate-50 to-blue-50/20 dark:from-slate-950 dark:via-[#0c1610] dark:to-slate-950">
      
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-purple-100/20 dark:bg-purple-950/10 rounded-full blur-[90px] pointer-events-none z-0"></div>

      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center pt-32 pb-12 px-6">
        
        {/* Core responsive grid layout */}
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 text-left">
          
          {/* Left Column: Heading and info */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Dotted Hello Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 border border-dashed border-[#264933] dark:border-white/30 text-slate-800 dark:text-white font-mono text-xs font-semibold rounded-lg mb-6 bg-white/40 dark:bg-slate-900/40"
            >
              <span>Hello There!</span>
            </motion.div>

            {/* Title / Name Statement */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-display text-slate-950 dark:text-white leading-[1.1]"
            >
              I'm <span className="text-[#f0a202] dark:text-[#f0a202] relative inline-block">Narla Sri Varshitha,</span> <br />
              Full Stack Developer <br />
              Based in India.
            </motion.h1>

            {/* Bio paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans font-light leading-relaxed max-w-xl mb-10"
            >
              Full Stack Developer with hands-on experience in React Native, React, JavaScript, and modern web technologies. Skilled in building responsive applications, API integrations, and delivering scalable cloud solutions.
            </motion.p>

            {/* Custom styled action buttons matching design reference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              {/* Play-button styled Primary Action */}
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="flex items-center gap-3 pl-6 pr-2 py-2 bg-[#264933] hover:opacity-95 text-white font-semibold rounded-full shadow-md shadow-emerald-950/10 transition-all cursor-pointer group w-full sm:w-auto justify-between"
                id="hero-primary-cta"
              >
                <span className="text-sm">View My Portfolio</span>
                <span className="p-3 bg-[#f0a202] rounded-full text-slate-950 group-hover:scale-105 transition-transform flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>

              {/* Secondary button */}
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="flex items-center justify-center px-8 py-3.5 border border-slate-350 dark:border-slate-800 bg-white/40 hover:bg-white text-slate-700 dark:text-slate-300 dark:bg-slate-900/20 dark:hover:bg-slate-900 font-semibold rounded-full transition-all cursor-pointer shadow-sm text-sm"
                id="hero-secondary-cta"
              >
                Hire Me
              </a>
            </motion.div>

          </div>

          {/* Right Column: Avatar spotlight layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* The Gold Spotlight Backdrop Circle */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 aspect-square max-w-sm rounded-full bg-[#f0a202]/95 border-4 border-white shadow-2xl flex items-end justify-center overflow-visible">
              
              {/* Profile Image overlapping */}
              <img 
                src={avatarImg} 
                alt="Narla Sri Varshitha" 
                className="w-[90%] h-[115%] object-contain origin-bottom select-none transform hover:scale-102 transition-transform duration-300 pointer-events-none"
              />

              {/* Overlay Badge 1: React Native Intern */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -right-6 px-4 py-1.5 bg-[#f0a202] text-slate-950 font-bold font-mono text-[10px] uppercase tracking-wider rounded-lg shadow-md border border-white"
              >
                React Native Intern
              </motion.div>

              {/* Overlay Badge 2: Full Stack Developer */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 -left-6 px-4 py-1.5 bg-[#264933] text-white font-bold font-mono text-[10px] uppercase tracking-wider rounded-lg shadow-md border border-[#2d5337]"
              >
                Full Stack Developer
              </motion.div>

              {/* Decorative spinning dotted circle */}
              <motion.svg 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full -m-4 pointer-events-none hidden sm:block" 
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3 3" />
              </motion.svg>
            </div>
          </motion.div>

        </div>
      </section>

      {/* The Scrolling Marquee Banner Ticker */}
      <div className="relative w-full overflow-hidden bg-[#f0a202] py-4 border-y border-slate-950/10 flex items-center select-none">
        <motion.div 
          animate={{ x: [0, "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20 
          }}
          className="flex whitespace-nowrap gap-12 text-slate-950 font-display font-extrabold uppercase text-lg sm:text-xl tracking-wider pr-12"
        >
          {/* Double list items to facilitate smooth loop */}
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className={item === "✦" ? "text-slate-900" : ""}>
              {item}
            </span>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
