import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectsList = [
  {
    title: "ACE (Active Community Events): AI-Enabled Campus Platform",
    description: "An AI-powered mobile and web platform for college communication, club management, and event bookings. Features automatic department grouping, slot reservation, QR-based entry verification, and AI-driven smart summarization.",
    tags: ["React Native", "Node.js", "Express", "MongoDB", "Firebase", "AI Integration"],
    github: "https://github.com/SriVarshitha7720/ACE",
    demo: null
  },
  {
    title: "AI-Powered Climate Policy Debate Simulator",
    description: "An intelligent simulation platform built with FastAPI and Ollama local LLMs to model multi-agent climate policy debates, evaluate policy proposals, and calculate economic impact metrics.",
    tags: ["Python", "FastAPI", "Ollama LLM", "AI Simulation", "REST APIs"],
    github: "https://github.com/SriVarshitha7720/Build-an-AI-Powered-Climate-Policy-Debate-Simulator-with-FastAPI-and-Ollama",
    demo: null
  },
  {
    title: "Collaborative Task Management API (WebSockets & RBAC)",
    description: "A real-time collaborative workspace API featuring WebSockets event streaming, JWT authentication, and fine-grained Role-Based Access Control (RBAC) for team task execution.",
    tags: ["TypeScript", "Node.js", "WebSockets", "Express", "JWT", "RBAC"],
    github: "https://github.com/SriVarshitha7720/Build-a-Collaborative-Task-Management-API-with-WebSockets-and-Role-Based-Access-Control",
    demo: null
  },
  {
    title: "Async User Profile Service (Node.js & RabbitMQ)",
    description: "A scalable backend microservice implementing asynchronous message queuing with RabbitMQ, Node.js, and MongoDB to process background user profile updates and heavy workloads reliably.",
    tags: ["Node.js", "RabbitMQ", "MongoDB", "Express", "Microservices"],
    github: "https://github.com/SriVarshitha7720/Build-User-Profile-Service-with-Asynchronous-Processing-using-Node.js-and-RabbitMQ",
    demo: null
  },
  {
    title: "Schedule, Track and Pay with EASE",
    description: "Designed and developed a clean and modern website to streamline the student fee process. Reduced average waiting time through real-time queue tracking and waiting time estimation.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "GitHub Actions"],
    github: "https://github.com/SriVarshitha7720/ScheduleTrack-and-Pay-with-EASE",
    demo: "https://srivarshitha7720.github.io/Schedule-Track-and-Pay-with-EASE"
  },
  {
    title: "Abstracting Cloud Services for Hospital Website",
    description: "A confidential patient data management system using AWS cloud services. Configured IAM policies and private VPC setups for secure patient data access and storage in RDS & S3.",
    tags: ["AWS", "RDS", "S3", "IAM", "VPC", "Secure Data"],
    github: "https://github.com/SriVarshitha7720/Abstracting-Cloud-Services-for-Hospital-Website",
    demo: null
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden bg-slate-50/20">
      {/* Background orbs */}
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-indigo-100/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-slate-950 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-900 dark:text-slate-200 max-w-lg font-light text-sm sm:text-base">
            A selection of web systems and mobile applications I've built, showcasing clean code structure and cloud configurations.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#264933] to-[#f0a202] rounded-full mt-4"></div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}
