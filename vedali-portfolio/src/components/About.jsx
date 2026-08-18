import React from 'react';
import { motion } from 'framer-motion';
import vedaliPhoto from '../assets/vedali.jpeg';

const About = () => {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
             <img
             src={vedaliPhoto}
             alt="Vedali Rane"
             className="w-full h-full object-cover"
            />
             </div>


            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-beige-100 rounded-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-slate-900 mb-6">About Me</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Hello! I'm Vedali Rane, a dedicated student currently pursuing my Diploma in Computer Engineering 
                at KCE College of Engineering and Management, Jalgaon.
              </p>
              <p>
                My journey in technology started with a curiosity about how websites work, which quickly 
                grew into a passion for software engineering and web development. I love the process 
                of turning complex problems into simple, elegant digital solutions.
              </p>
              <p>
                I am constantly learning new technologies and improving my skills to stay updated with 
                the latest trends in the industry. My goal is to build impactful applications that 
                provide great user experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
