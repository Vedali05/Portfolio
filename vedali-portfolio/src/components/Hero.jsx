import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-beige-50 section-padding pt-32">
      <div className="max-w-4xl text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lavender-400 font-medium tracking-widest uppercase mb-4"
        >
          Welcome to my portfolio
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-playfair font-bold text-slate-900 mb-6"
        >
          Hi, I'm <span className="text-lavender-400">Vedali Rane</span>
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 mb-8 font-light"
        >
          Software Engineering Student & Web Developer
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I am a Diploma Computer Engineering student at KCE College of Engineering and Management, Jalgaon. 
          I am passionate about technology, web development, and creating digital solutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link 
            to="projects" 
            smooth={true} 
            className="px-8 py-4 bg-lavender-300 text-white rounded-full font-medium hover:bg-lavender-400 transition-all duration-300 shadow-lg shadow-lavender-200 cursor-pointer"
          >
            View Projects
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            className="px-8 py-4 border-2 border-lavender-200 text-lavender-400 rounded-full font-medium hover:bg-lavender-50 transition-all duration-300 cursor-pointer"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
