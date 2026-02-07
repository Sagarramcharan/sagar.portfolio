
import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: '1',
    company: 'SINX IT solutions',
    role: 'AI/ML Intern',
    duration: 'May - July 2025',
    description: [
      'Learned basics of machine learning and data preprocessing.',
      'Executed small ML models using Python and Scikit-learn.'
    ]
  },
  {
    id: '2',
    company: 'Embrizon Technologies',
    role: 'Python Intern',
    duration: 'May - June 2024',
    description: [
      'Developed Python scripts for data automation and analysis.',
      'Built simple ML models using Pandas and Scikit-learn.',
      'Collaborated on GitHub and documented work with Jupyter Notebooks.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#111111]">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase text-center md:text-left">PROFESSIONAL <span className="gradient-text">JOURNEY</span></h2>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12 border-l-2 border-orange-500/20 py-4 group"
            >
              <div className="absolute -left-[9px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#111111] border-2 border-orange-500 group-hover:scale-125 transition-transform" />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-12">
                <div className="col-span-1">
                  <span className="text-orange-500 font-bold text-sm tracking-widest block mb-1">{exp.duration}</span>
                  <h3 className="text-xl font-black uppercase">{exp.company}</h3>
                </div>
                <div className="col-span-1 md:col-span-3">
                  <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-tight">{exp.role}</h4>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500/40 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
