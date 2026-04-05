import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { motion, useScroll, useSpring } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll polyfill or handling
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" relative bg-dark min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200">
      <Toaster position="bottom-right" />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 gradient-bg z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Languages />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
