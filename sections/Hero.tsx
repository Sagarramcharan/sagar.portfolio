
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight, Binary } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Dynamic Futuristic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505]" />
        
        {/* Animated HUD Elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] border border-orange-500/10 rounded-full flex items-center justify-center opacity-30 md:opacity-100"
        >
          <div className="w-[600px] h-[600px] border border-orange-500/5 rounded-full" />
        </motion.div>

        {/* Ambient Glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#FF3D00]/5 rounded-full blur-[200px]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-6 md:mb-10">
            <div className="h-px w-8 md:w-12 bg-orange-500/30" />
            <span className="flex items-center gap-2 text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] text-orange-400">
              <Binary size={14} className="animate-pulse" />
              Creative Technologist
            </span>
            <div className="h-px w-8 md:w-12 bg-orange-500/30" />
          </div>

          <h1 className="text-4xl md:text-8xl lg:text-[9.5rem] font-bold mb-8 md:mb-10 leading-[1] md:leading-[0.9] tracking-tighter">
            CRAFTING <br />
            THE <span className="gradient-text">FUTURE</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-lg text-gray-400 mb-10 md:mb-14 font-grotesk tracking-wide leading-relaxed opacity-80 px-4 md:px-0">
            Building high-performance digital architectures where 
            <span className="text-white font-medium"> AI intelligence </span> 
            meets <span className="text-white font-medium"> avant-garde design</span>. 
            Exploring the limits of full-stack excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 px-4">
            <motion.a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto group relative overflow-hidden orange-gradient px-8 md:px-12 py-4 md:py-5 rounded-full text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center justify-center gap-3 shadow-[0_0_50px_rgba(255,61,0,0.3)] transition-all"
            >
              <span className="relative z-10">Explore Projects</span>
              <ChevronRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" size={18} />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.6)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 rounded-full border border-white/10 text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs backdrop-blur-sm transition-all"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:gap-4 opacity-40"
      >
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.6em] vertical-rl rotate-180">Scroll</span>
        <div className="w-px h-8 md:h-12 bg-gradient-to-b from-orange-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
