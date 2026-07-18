import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, Briefcase, BookOpen } from 'lucide-react';
import avatarImg from '../assets/avatar.webp';

export default function About() {
  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <section 
      id="about" 
      className="relative py-24 px-6 bg-[#264933] dark:bg-[#122619] text-white transition-colors duration-300 overflow-hidden"
    >
      {/* Background graphic mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Avatar inside Gold Spotlight */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[#f0a202] border-4 border-white/20 shadow-2xl flex items-end justify-center overflow-visible">
              <img 
                src={avatarImg} 
                alt="Narla Sri Varshitha" 
                className="w-[85%] h-[112%] object-contain origin-bottom select-none pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Right Column: Bio details */}
          <motion.div 
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Tagline */}
            <span className="text-[#f0a202] font-mono text-xs uppercase tracking-widest font-semibold mb-2 block">
              — About Me
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white mb-6">
              Who is <span className="text-[#f0a202]">Narla Sri Varshitha?</span>
            </h2>
            
            {/* Story text */}
            <div className="space-y-6 text-slate-205 font-sans font-light leading-relaxed text-sm sm:text-base opacity-90">
              <p>
                I am a frontend-focused <strong className="text-white font-medium">Full Stack Developer</strong> based in India. I am passionate about hands-on technology work in React Native, React, JavaScript, and modern web architectures to deliver user-centric experiences.
              </p>
              <p>
                Currently, I am working as a <strong className="text-white font-medium">React Native Developer Intern</strong> at <strong className="text-white font-medium">Technical Hub Pvt Ltd</strong>, where I design dynamic websites and develop mobile applications. In addition, I spent time gaining fundamental skills in DevOps, CI/CD, and AWS infrastructure as an <strong className="text-white font-medium">AWS Cloud Computing Intern</strong> with APSSDC.
              </p>
              <p>
                Academically, I am pursuing my <strong className="text-white font-medium">Bachelor of Science in Computer Science</strong> (Lateral Entry after Diploma) at Aditya College of Engineering and Technology with a score of 94%, following a Diploma in Computer Networking where I secured a CGPA of 9.0.
              </p>
            </div>

            {/* Statistics Row matching the mockup layout */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mt-8">
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-[#f0a202]">94%</h4>
                <p className="text-[10px] sm:text-xs text-slate-300 font-mono uppercase tracking-wider mt-1">ACET Score</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-[#f0a202]">9.0</h4>
                <p className="text-[10px] sm:text-xs text-slate-300 font-mono uppercase tracking-wider mt-1">Diploma CGPA</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-[#f0a202]">2+</h4>
                <p className="text-[10px] sm:text-xs text-slate-300 font-mono uppercase tracking-wider mt-1">Internships</p>
              </div>
            </div>

            {/* Download CV Action Button */}
            <div className="mt-8">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-3 pl-6 pr-2 py-2 bg-[#f0a202] hover:opacity-95 text-slate-950 font-bold rounded-full transition-all cursor-pointer group"
                id="about-cv-download"
              >
                <span className="text-xs uppercase tracking-wider font-semibold">Download CV</span>
                <span className="p-2.5 bg-white rounded-full text-slate-950 group-hover:scale-105 transition-transform flex items-center justify-center">
                  <Download className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
