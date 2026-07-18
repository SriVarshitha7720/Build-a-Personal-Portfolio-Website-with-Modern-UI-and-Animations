import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Award, Briefcase } from 'lucide-react';
import avatarImg from '../assets/avatar.webp';

export default function About() {
  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: -40 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1, ease: 'easeOut' }
    })
  };

  const highlights = [
    {
      icon: <Briefcase className="w-5 h-5 text-purple-500" />,
      title: "Internships",
      desc: "React Native Intern at Technical Hub & AWS Intern at APSSDC"
    },
    {
      icon: <BookOpen className="w-5 h-5 text-indigo-500" />,
      title: "Education",
      desc: "B.Sc Computer Science (94%) & Diploma in Networking (9.0 CGPA)"
    },
    {
      icon: <Award className="w-5 h-5 text-pink-500" />,
      title: "Certifications",
      desc: "MongoDB Certified, GitHub Foundations, Cisco IT, Certiport FrontEnd"
    }
  ];

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden bg-slate-50/30">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-slate-950 mb-4">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
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
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-300 via-pink-300 to-indigo-300 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Soft border outline */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-purple-200 via-pink-200 to-indigo-200 opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image Frame */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 flex items-center justify-center shadow-lg">
                <img 
                  src={avatarImg} 
                  alt="Narla Sri Varshitha" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-purple-50/5 group-hover:bg-transparent transition-all duration-300"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Details */}
          <motion.div 
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <User className="w-6 h-6 text-purple-500" />
              My Story
            </h3>
            
            <div className="space-y-6 text-slate-600 dark:text-slate-400 font-sans font-light leading-relaxed text-base sm:text-lg">
              <p>
                I am a frontend-focused <strong className="text-slate-800 dark:text-slate-200 font-medium">Full Stack Developer</strong> based in Vendra, Andhra Pradesh, India. I am passionate about hands-on technology work in React Native, React, JavaScript, and modern web architectures to deliver user-centric experiences.
              </p>
              <p>
                Currently, I am working as a <strong className="text-slate-800 dark:text-slate-200 font-medium">React Native Developer Intern</strong> at <strong className="text-slate-800 dark:text-slate-200 font-medium">Technical Hub Pvt Ltd</strong>, where I design dynamic websites and develop mobile applications. In addition, I spent time gaining fundamental skills in DevOps, CI/CD, and AWS infrastructure as an <strong className="text-slate-800 dark:text-slate-200 font-medium">AWS Cloud Computing Intern</strong> with APSSDC.
              </p>
              <p>
                Academically, I am pursuing my <strong className="text-slate-800 dark:text-slate-200 font-medium">Bachelor of Science in Computer Science</strong> (Lateral Entry after Diploma) at Aditya College of Engineering and Technology with a score of 94%, following a Diploma in Computer Networking where I secured a CGPA of 9.0.
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
                  className="p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-900/30 hover:border-purple-200 dark:hover:border-purple-500/30 hover:bg-white/60 dark:hover:bg-slate-900/50 transition-colors shadow-sm cursor-default"
                >
                  <div className="mb-2 p-1.5 w-fit rounded-lg bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-[11px] text-slate-505 dark:text-slate-400 leading-normal">{item.desc}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
