
import React from 'react';
import { motion } from 'framer-motion';
import { Download, GraduationCap, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const handleDownload = () => {
    // Opens the exact resume filename referenced in the logic
    const pdfUrl = 'Sagar_Resume.pdf';
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="about" className="py-24 bg-[#111111]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] group border border-white/5">
              <img
                src="https://image2url.com/r2/default/images/1770457853826-2c606a04-a61f-4d23-aa15-8dc693776812.jpeg"
                alt="Sagar Portrait"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-80" />
            </div>
            {/* Academic Stat Overlay */}
            <div className="absolute -bottom-6 -right-6 glass p-8 rounded-3xl border border-orange-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="text-5xl font-black gradient-text">2026</div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mt-2">GRADUATION</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-orange-500" size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-400">Education Focused</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-10 leading-tight">
              THE <span className="gradient-text">CORE</span> <br /> IDENTITY
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I am Sagar Satapathy, a B.Tech student at <span className="text-white font-bold underline decoration-orange-500/40">GIET UNIVERSITY, GUNUPUR</span> specializing in CSE (AIML). My engineering philosophy is built on the pillars of data-driven intelligence and performance-first architecture.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              With hands-on experience in predictive modeling at SINX IT solutions and data automation at Embrizon Technologies, I bridge the gap between complex backend logic and user-centric systems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-14">
              <div className="space-y-4">
                <h4 className="text-[#FF3D00] font-black uppercase text-[11px] tracking-[0.4em] mb-4">Milestones</h4>
                <div className="flex items-start gap-4">
                  <div className="w-px h-12 bg-orange-500/30 mt-2" />
                  <div className="text-sm text-gray-400 space-y-1">
                    <div className="text-white font-bold">GIET University</div>
                    <div>2022 - 2026 | AIML</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-px h-12 bg-orange-500/30 mt-2" />
                  <div className="text-sm text-gray-400 space-y-1">
                    <div className="text-white font-bold">St. Mary's College</div>
                    <div>Secondary / 70.0%</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-[#FF3D00] font-black uppercase text-[11px] tracking-[0.4em] mb-4">Certifications</h4>
                <ul className="text-sm text-gray-400 space-y-3 font-grotesk italic">
                  <li>"Python Programming Fundamentals"</li>
                  <li>"Machine Learning Basics"</li>
                  <li>"YUVA SANGHAM Certificate"</li>
                </ul>
              </div>
            </div>

            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 61, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 orange-gradient px-12 py-5 rounded-full font-black uppercase tracking-[0.3em] text-xs text-white shadow-xl group transition-all"
            >
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              Open Professional CV
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
