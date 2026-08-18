import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import portfolio1 from '../assets/portofolio1.jpg';
import elearning from '../assets/e learning.jpg';
import taskmanagement from '../assets/task management.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      image: portfolio1,
      link: "#",
      github: "#"
    },
    {
      title: "E-Learning Platform",
      description: "A web application for online courses and student management.",
      tags: ["JavaScript", "HTML/CSS", "Bootstrap"],
      image: elearning,
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity tool to help students manage their projects and deadlines.",
      tags: ["React", "Firebase", "CSS Modules"],
      image: taskmanagement,
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="bg-white section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-lavender-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-beige-50 rounded-2xl overflow-hidden border border-lavender-100 hover:border-lavender-300 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-lavender-400 bg-white px-2 py-1 rounded-md border border-lavender-100">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href={project.github} className="text-slate-400 hover:text-lavender-400 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.link} className="text-slate-400 hover:text-lavender-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
