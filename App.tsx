
import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Hero from './sections/Hero.tsx';
import About from './sections/About.tsx';
import Skills from './sections/Skills.tsx';
import Projects from './sections/Projects.tsx';
import Experience from './sections/Experience.tsx';
import Contact from './sections/Contact.tsx';
import Footer from './components/Footer.tsx';
import AIChat from './components/AIChat.tsx';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#050505] flex items-center justify-center z-[9999]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="text-4xl font-bold gradient-text tracking-tighter"
        >
          SAGAR
        </motion.div>
      </div>
    );
  }

  return (
    <Router>
      <div className="relative min-h-screen w-full overflow-x-hidden flex flex-col">
        <Navbar />
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <AIChat />
      </div>
    </Router>
  );
};

export default App;
