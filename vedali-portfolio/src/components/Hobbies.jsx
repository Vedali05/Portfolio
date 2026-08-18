import React from 'react';
import { motion } from 'framer-motion';
import { Book, Code, Palette, Pencil, Mic } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      name: "Coding",
      icon: <Code />,
      description: "Building websites and learning new technologies."
    },
    {
      name: "Reading",
      icon: <Book />,
      description: "Exploring books, technology, and self-improvement."
    },
    {
      name: "Crafting",
      icon: <Palette />,
      description: "Creating handmade art, jewelry, and DIY projects."
    },
    {
      name: "Drawing",
      icon: <Pencil />,
      description: "Expressing creativity through sketches and illustrations."
    },
    {
      name: "Singing",
      icon: <Mic />,
      description: "Enjoying music and expressing emotions through singing."
    }
  ];

  return (
    <section id="hobbies" className="bg-white section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-slate-900 mb-4">
            Interests & Hobbies
          </h2>
          <div className="w-20 h-1 bg-lavender-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {hobbies.map((hobby, idx) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-beige-50 rounded-2xl text-center hover:bg-lavender-50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-lavender-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {hobby.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">
                {hobby.name}
              </h3>
              <p className="text-xs text-slate-500">
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;