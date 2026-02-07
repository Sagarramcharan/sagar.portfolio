
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  const handleDownload = () => {
    // Creating a text-based version of the resume as a fallback since we don't have the physical PDF binary
    const resumeContent = `
SAGAR SATAPATHY
B.Tech. CSE (AIML) Engineering
GIET UNIVERSITY, GUNUPUR

EXPERIENCE:
- Embrizon Technologies (Python Intern, May-June 2024)
- SINX IT solutions (AI/ML Intern, May-July 2025)

PROJECTS:
- AI based health and fitness coach
- Store Mate

SKILLS:
- Programming: Python, AI-ML
- Databases: MySql, Firebase
- Operating Systems: Windows
- Non Technical: Product Management, Communication, Consulting
    `;
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Sagar_Satapathy_Resume.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-24 bg-[#111111]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl group">
              <img
                src="https://image2url.com/r2/default/images/1770457853826-2c606a04-a61f-4d23-aa15-8dc693776812.jpeg"
                alt="Sagar Portrait"
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-60" />
            </div>
            {/* Floating Stats - Updated for Student status */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl border border-orange-500/30">
              <div className="text-4xl font-black gradient-text">2025</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-400">Graduating</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              ABOUT <span className="gradient-text">ME</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Hi, I’m Sagar — a curious learner and aspiring AI professional who loves turning ideas into meaningful digital experiences. With a background in Computer Science and specialization in AI & ML, I enjoy exploring how technology can solve real problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              From building projects to learning new tools, I focus on growing every day. My journey is driven by creativity, discipline, and a strong desire to build products that make a difference.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-[#FF3D00] font-bold uppercase tracking-tighter mb-2">My Values</h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Intentional Design</li>
                  <li>• Technical Integrity</li>
                  <li>• Constant Evolution</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#FF3D00] font-bold uppercase tracking-tighter mb-2">My Focus</h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• AI & Machine Learning</li>
                  <li>• Data Automation</li>
                  <li>• Product Management</li>
                </ul>
              </div>
            </div>

            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 glass px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all"
            >
              <Download size={18} />
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
