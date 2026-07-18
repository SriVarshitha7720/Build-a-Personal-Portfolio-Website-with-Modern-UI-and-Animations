import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Terminal, Shield, Award, Briefcase } from 'lucide-react';
import avatarImg from '../assets/avatar.webp';

export default function About() {
  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1, ease: 'easeOut' }
    })
  };

  const highlights = [
    {
      icon: <Briefcase className="w-5 h-5 text-purple-400" />,
      title: "Internships",
      desc: "React Native Intern at Technical Hub & AWS Intern at APSSDC"
    },
    {
      icon: <BookOpen className="w-5 h-5 text-indigo-400" />,
      title: "Education",
      desc: "B.Sc Computer Science (94%) & Diploma in Networking (9.0 CGPA)"
    },
    {
      icon: <Award className="w-5 h-5 text-pink-400" />,
      title: "Certifications",
      desc: "MongoDB Certified, GitHub Foundations, Cisco IT, Certiport FrontEnd"
    }
  ];

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-white mb-4">
            About Me
          </h2>
          <div className="w-12 h-1 bg-purple-500 rounded-full"></div>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Profile Picture */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 lg:w-full lg:h-auto lg:aspect-square max-w-sm">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 opacity-20 blur-md group-hover:opacity-45 transition-opacity duration-500"></div>
              
              {/* Spinning/rotating border outline */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 opacity-30 group-hover:opacity-100 group-hover:rotate-1 duration-500 transition-all"></div>
              
              {/* Image Frame */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center">
                <img 
                  src={avatarImg} 
                  alt="Narla Sri Varshitha" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay visual mask */}
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-all duration-300"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Career Details */}
          <motion.div 
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <h3 className="text-2xl font-bold font-display text-white mb-6 flex items-center gap-2">
              <User className="w-6 h-6 text-purple-400" />
              My Story
            </h3>
            
            <div className="space-y-6 text-slate-300 font-sans font-light leading-relaxed text-base sm:text-lg">
              <p>
                I am a frontend-focused **Full Stack Developer** based in Vendra, Andhra Pradesh, India. I am passionate about hands-on technology work in React Native, React, JavaScript, and modern web architectures to deliver user-centric experiences.
              </p>
              <p>
                Currently, I am working as a **React Native Developer Intern** at **Technical Hub Pvt Ltd**, where I design dynamic websites and develop mobile applications. In addition, I spent time gaining fundamental skills in DevOps, CI/CD, and AWS infrastructure as an **AWS Cloud Computing Intern** with APSSDC.
              </p>
              <p>
                Academically, I am pursuing my **Bachelor of Science in Computer Science** (Lateral Entry after Diploma) at Aditya College of Engineering and Technology with a score of 94%, following a Diploma in Computer Networking where I secured a CGPA of 9.0.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-4 rounded-xl border border-slate-900 bg-slate-950/40 hover:border-slate-800 transition-colors"
                >
                  <div className="mb-2 p-1.5 w-fit rounded-lg bg-slate-900/60 border border-slate-800">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-sm text-white mb-1">{item.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-normal">{item.desc}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
