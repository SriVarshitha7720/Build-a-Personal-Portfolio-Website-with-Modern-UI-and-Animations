import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench, ShieldCheck } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages & Libraries",
    icon: <Code2 className="w-5 h-5 text-purple-400" />,
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
    icon: <Server className="w-5 h-5 text-indigo-400" />,
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
    icon: <Wrench className="w-5 h-5 text-pink-400" />,
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
    <section id="skills" className="relative py-24 px-6">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-400 max-w-lg font-light text-sm sm:text-base">
            An overview of the programming languages, frameworks, databases, and DevOps tools in my stack.
          </p>
          <div className="w-12 h-1 bg-purple-500 rounded-full mt-4"></div>
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
              className="glass-card rounded-2xl p-6 flex flex-col h-full"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-900">
                <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg font-display text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5 flex-1">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-300">{skill.name}</span>
                      <span className="font-mono text-xs text-purple-400">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div className="h-2 w-full rounded-full bg-slate-900 overflow-hidden border border-slate-850">
                      {/* Animated inner bar */}
                      <motion.div
                        custom={skill.level}
                        variants={barVariants}
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
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
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-950/40 text-slate-400 text-xs font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Adhering to Semantic & Accessible Web Standards</span>
          </div>
        </div>

      </div>
    </section>
  );
}
