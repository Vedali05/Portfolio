import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "Responsive Design"]
    },
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "Python"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git & GitHub", "VS Code", "Figma", "Web Performance"]
    }
  ];

  return (
    <section id="skills" className="bg-beige-50 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-slate-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-lavender-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-playfair font-bold text-lavender-400 mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-slate-600">
                    <span className="w-2 h-2 bg-lavender-200 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
