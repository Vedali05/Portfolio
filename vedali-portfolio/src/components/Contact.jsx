import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-lavender-50 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-slate-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-lavender-300 mx-auto"></div>
          <p className="mt-6 text-slate-600">Have a question or want to work together? Feel free to reach out!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-lavender-400 shadow-sm flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Email</h3>
                <p className="text-slate-600">vedali.rane@email.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-lavender-400 shadow-sm flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Phone</h3>
                <p className="text-slate-600">+91 12345 67890</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-lavender-400 shadow-sm flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Location</h3>
                <p className="text-slate-600">Jalgaon, Maharashtra, India</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 bg-beige-50 border border-transparent rounded-lg focus:border-lavender-300 focus:bg-white outline-none transition-all"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 bg-beige-50 border border-transparent rounded-lg focus:border-lavender-300 focus:bg-white outline-none transition-all"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea 
                rows="4"
                className="w-full px-4 py-3 bg-beige-50 border border-transparent rounded-lg focus:border-lavender-300 focus:bg-white outline-none transition-all"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-lavender-300 text-white rounded-lg font-medium hover:bg-lavender-400 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-lavender-100"
            >
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
