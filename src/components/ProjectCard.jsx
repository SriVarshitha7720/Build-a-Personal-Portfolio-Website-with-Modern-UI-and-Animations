import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Github = ({ className = "w-5 h-5" }) => (
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

export default function ProjectCard({ project, index }) {
  const { title, description, tags, github, demo } = project;

  // 3D Tilt Hook variables
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const xVal = (e.clientX - rect.left) / width - 0.5;
    const yVal = (e.clientY - rect.top) / height - 0.5;
    
    mouseX.set(xVal);
    mouseY.set(yVal);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1],
        delay: index * 0.15 
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="perspective-1000 animate-card"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group hover:border-[#f0a202]/30 hover:shadow-xl hover:shadow-emerald-100/10 dark:hover:shadow-[#0c1610]/30 transition-all duration-300"
      >
        {/* Mock Graphic Area */}
        <div className="relative h-48 bg-gradient-to-br from-emerald-50 via-slate-50 to-amber-50 dark:from-[#122619] dark:via-[#0c1610] dark:to-amber-950/10 border-b border-[#264933]/10 dark:border-white/5 flex items-center justify-center overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:1.25rem_1.25rem] opacity-50"></div>
          
          {/* Soft background glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#f0a202]/10 rounded-full blur-2xl group-hover:bg-[#f0a202]/20 transition-all duration-500"></div>
          <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-emerald-100/30 dark:bg-emerald-950/30 rounded-full blur-xl group-hover:bg-emerald-100/50 dark:group-hover:bg-emerald-950/50 transition-all duration-500"></div>

          {/* Interactive mock code block */}
          <div className="relative bg-white/80 dark:bg-[#0c1610]/75 backdrop-blur-md p-4 rounded-xl w-[85%] h-[75%] border border-white/50 dark:border-white/5 flex flex-col justify-between shadow-md transform group-hover:scale-[1.03] group-hover:-translate-y-1 transition-all duration-500">
            <div className="flex items-center gap-1.5 border-b border-slate-100 dark:border-white/5 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f0a202]/70"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#264933]/70"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="text-[10px] text-slate-400 font-mono ml-2">source.js</span>
            </div>
            <div className="flex-1 flex flex-col justify-center font-mono text-[10px] space-y-1 text-slate-600 dark:text-slate-400 select-none">
              <p className="text-emerald-600 dark:text-emerald-400"><span className="text-[#264933] dark:text-[#f0a202]">const</span> project = () =&gt; &#123;</p>
              <p className="pl-3 text-slate-700 dark:text-slate-200 font-medium">title: <span className="text-[#f0a202]">"{title.split(':')[0]}"</span>,</p>
              <p className="pl-3 text-slate-400">// {tags.slice(0, 3).join(' / ')}</p>
              <p className="text-emerald-600 dark:text-emerald-400">&#125;</p>
            </div>
          </div>

          {/* Hover overlay link panel */}
          <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 inset-0 bg-[#264933]/20 dark:bg-slate-950/40 backdrop-blur-[2px] flex items-center justify-center gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white hover:bg-slate-50 border border-slate-100 rounded-full text-[#264933] hover:text-[#f0a202] transition-all shadow-md hover:scale-115"
              title="View Source Code"
              aria-label={`View GitHub repository for ${title}`}
            >
              <Github className="w-5 h-5" />
            </a>
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-slate-50 border border-slate-100 rounded-full text-[#264933] hover:text-[#f0a202] transition-all shadow-md hover:scale-115"
                title="View Live Demo"
                aria-label={`View live demo for ${title}`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Card Content Details */}
        <div className="p-6 flex-1 flex flex-col justify-between text-left">
          <div>
            <h3 className="text-xl font-bold font-display text-slate-800 dark:text-white mb-2 group-hover:text-[#f0a202] transition-colors">
              {title}
            </h3>
            <p className="text-slate-900 dark:text-slate-200 text-sm leading-relaxed mb-6 font-sans font-light">
              {description}
            </p>
          </div>

          <div>
            {/* Soft Green/Gold Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md border border-emerald-100/50 dark:border-[#223d2b] bg-emerald-50/40 dark:bg-[#122619] text-[#264933] dark:text-[#f0a202]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links for accessibility/touch devices */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-900 text-xs font-mono">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-500 dark:text-slate-300 hover:text-[#f0a202] transition-colors"
              >
                <Github className="w-4 h-4" /> Code
              </a>
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-500 dark:text-slate-300 hover:text-[#f0a202] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
