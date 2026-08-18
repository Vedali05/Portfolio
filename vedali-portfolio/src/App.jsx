import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-beige-50 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Hobbies />
        <Contact />
      </main>
      <footer className="py-8 text-center text-slate-400 text-sm border-t border-lavender-100 bg-white">
        <p>© {new Date().getFullYear()} Vedali Rane. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
