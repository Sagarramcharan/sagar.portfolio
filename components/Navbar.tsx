
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Index', href: '#hero' },
  { name: 'Core', href: '#about' },
  { name: 'Tech', href: '#skills' },
  { name: 'Works', href: '#projects' },
  { name: 'Log', href: '#experience' },
  { name: 'Link', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      setIsMobileMenuOpen(false);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleHireMe = () => {
    // This will open your resume PDF in a new tab
    const pdfUrl = 'Sagar_Resume.pdf';
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-10'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-2xl font-bold tracking-tighter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="text-white">SAGAR</span>
          <span className="text-orange-500">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-orange-500 transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          <button 
            onClick={handleHireMe}
            className="px-6 py-2 border border-orange-500/30 rounded-full text-[9px] font-black uppercase tracking-[0.3em] hover:bg-orange-500 transition-all duration-500 cursor-pointer text-white"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 bg-[#050505] z-[60] flex flex-col items-center justify-center md:hidden"
          >
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
            
            <div className="flex flex-col items-center space-y-10 relative z-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-4xl font-bold tracking-tighter hover:text-orange-500 transition-colors"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={handleHireMe}
                className="mt-6 px-12 py-4 border border-orange-500 rounded-full text-lg font-bold uppercase tracking-widest text-white hover:bg-orange-500 transition-all"
              >
                Hire Me
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-10 right-8 p-4 bg-white/5 rounded-full"
            >
              <X size={32} className="text-orange-500" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
