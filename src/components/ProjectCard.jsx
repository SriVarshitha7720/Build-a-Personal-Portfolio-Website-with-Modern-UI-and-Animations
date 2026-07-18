import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

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

  // Stagger variants for the project card contents
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.215, 0.61, 0.355, 1], // Custom easeOutCubic
        delay: index * 0.15 
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group"
    >
      {/* Decorative Mock Graphic Area */}
      <div className="relative h-48 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800/50 flex items-center justify-center overflow-hidden">
        {/* Abstract background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        
        {/* Glowing aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500"></div>

        {/* Mock code block graphic */}
        <div className="relative glass p-4 rounded-xl w-[85%] h-[75%] border border-slate-800 flex flex-col justify-between shadow-2xl transform group-hover:scale-[1.03] group-hover:-translate-y-1 transition-all duration-500">
          <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
            <span className="text-[10px] text-slate-500 font-mono ml-2">app.js</span>
          </div>
          <div className="flex-1 flex flex-col justify-center font-mono text-[10px] space-y-1.5 text-slate-400 select-none">
            <p className="text-purple-400"><span className="text-indigo-400">const</span> initProject = () =&gt; &#123;</p>
            <p className="pl-3">console.log(<span className="text-emerald-400">"{title}"</span>);</p>
            <p className="pl-3 text-slate-500">// {tags.slice(0, 3).join(' | ')}</p>
            <p className="text-purple-400">&#125;</p>
          </div>
        </div>

        {/* Central hovering icon */}
        <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 inset-0 bg-slate-950/40 backdrop-blur-[2px] flex items-center justify-center gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-900 border border-slate-700 hover:border-purple-500 rounded-full text-white hover:text-purple-400 transition-all shadow-lg hover:scale-115"
            title="View Code on GitHub"
            aria-label={`View GitHub repository for ${title}`}
          >
            <Github className="w-5 h-5" />
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-900 border border-slate-700 hover:border-purple-500 rounded-full text-white hover:text-purple-400 transition-all shadow-lg hover:scale-115"
              title="View Live Demo"
              aria-label={`View live demo for ${title}`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Info Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {description}
          </p>
        </div>

        <div>
          {/* Tech Stack list */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md border border-slate-800/80 bg-slate-900/40 text-slate-400 group-hover:border-slate-700/60 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links for mobile/accessibility when hover is not available */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-900 text-xs font-mono">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" /> Code
            </a>
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
