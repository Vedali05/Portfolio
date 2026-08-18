import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Diploma in Computer Engineering",
      institution: "KCE College of Engineering and Management, Jalgaon",
      duration: "2023 - Present",
      description: "Focused on core computer science principles, software development, and modern engineering practices."
    },
    {
      degree: "Progressive English Medium School, Jalgaon",
      institution: "State Board, Maharashtra",
      duration: "Completed 2023",
      description: "Completed general secondary education with a strong focus on mathematics and science."
    }
  ];

  return (
    <section id="education" className="bg-beige-50 section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-slate-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-lavender-300 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-lavender-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 text-lavender-100">
                <GraduationCap size={64} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center text-lavender-400 mb-2 font-medium">
                  <Calendar size={16} className="mr-2" />
                  <span>{edu.duration}</span>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-2">{edu.degree}</h3>
                <h4 className="text-lg text-lavender-400 mb-4">{edu.institution}</h4>
                <p className="text-slate-600 leading-relaxed max-w-2xl">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
