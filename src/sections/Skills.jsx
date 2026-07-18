import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench, ShieldCheck } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages & Libraries",
    icon: <Code2 className="w-5 h-5 text-[#264933] dark:text-[#f0a202]" />,
    iconBg: "bg-emerald-50 dark:bg-[#122619] border-emerald-100 dark:border-[#223d2b]",
    skills: [
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "PHP", level: 85 },
      { name: "Java", level: 80 },
      { name: "Python", level: 75 },
      { name: "Redux & Material UI", level: 85 }
    ]
  },
  {
    title: "Frameworks & Databases",
    icon: <Server className="w-5 h-5 text-[#264933] dark:text-[#f0a202]" />,
    iconBg: "bg-emerald-50 dark:bg-[#122619] border-emerald-100 dark:border-[#223d2b]",
    skills: [
      { name: "React.js", level: 90 },
      { name: "React Native", level: 85 },
      { name: "Node.js & Express", level: 80 },
      { name: "Angular", level: 75 },
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 82 }
    ]
  },
  {
    title: "Developer Tools & Cloud",
    icon: <Wrench className="w-5 h-5 text-[#264933] dark:text-[#f0a202]" />,
    iconBg: "bg-emerald-50 dark:bg-[#122619] border-emerald-100 dark:border-[#223d2b]",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Visual Studio Code", level: 95 },
      { name: "AWS Cloud (S3, RDS)", level: 80 },
      { name: "IAM & VPC Configuration", level: 75 },
      { name: "CI/CD & GitHub Actions", level: 75 },
      { name: "REST APIs", level: 88 }
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.15 }
    })
  };

  return (
    <section id="skills" className="relative py-24 px-6 bg-slate-50/10">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-emerald-50/10 dark:bg-[#122619]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[#f0a202] font-mono text-xs uppercase tracking-widest font-semibold mb-2 block">
            — Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-slate-950 dark:text-white mb-4">
            Technical Stack
          </h2>
          <p className="text-slate-900 dark:text-slate-200 max-w-lg font-light text-sm sm:text-base">
            An overview of the programming languages, frameworks, databases, and DevOps tools in my stack.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#264933] to-[#f0a202] rounded-full mt-4"></div>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="glass-card rounded-2xl p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                <div className={`p-2.5 rounded-xl border ${category.iconBg}`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg font-display text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5 flex-1">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2 text-left">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="font-mono text-xs text-[#f0a202] font-semibold">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div className="h-2 w-full rounded-full bg-slate-200/50 dark:bg-slate-800/40 overflow-hidden border border-slate-200/40 dark:border-slate-800/40">
                      {/* Animated inner bar */}
                      <motion.div
                        custom={skill.level}
                        variants={barVariants}
                        className="h-full rounded-full bg-gradient-to-r from-[#264933] via-emerald-600 to-[#f0a202]"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Footer info badge */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 text-slate-500 dark:text-slate-400 text-xs font-mono shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Adhering to Semantic & Accessible Web Standards</span>
          </div>
        </div>

      </div>
    </section>
  );
}
