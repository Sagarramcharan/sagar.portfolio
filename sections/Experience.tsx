
import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: '1',
    company: 'SINX IT solutions',
    role: 'AI/ML Intern',
    duration: 'May - Jul. 2025',
    description: [
      'Learned basics of machine learning and data preprocessing.',
      'Executed small ML models using Python and Scikit-learn.'
    ]
  },
  {
    id: '2',
    company: 'Embrizon Technologies',
    role: 'Python Intern',
    duration: 'May - June. 2024',
    description: [
      'Developed Python scripts for data automation and analysis.',
      'Built simple ML models using Pandas and Scikit-learn.',
      'Collaborated on GitHub and documented work with Jupyter Notebooks.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-[#111111]">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-black mb-20 uppercase text-center md:text-left">
          PROFESSIONAL <span className="gradient-text">JOURNEY</span>
        </h2>
        
        <div className="max-w-5xl space-y-20">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-10 md:pl-16 border-l border-orange-500/30 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-0 w-[10px] h-[10px] rounded-full bg-orange-500 shadow-[0_0_15px_rgba(255,61,0,0.8)] group-hover:scale-150 transition-transform duration-500" />
              
              <div className="flex flex-col gap-10">
                {/* Header Information - Stacked to prevent overlap */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                      {exp.role}
                    </h3>
                    <div className="flex-shrink-0">
                      <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-black text-gray-400 uppercase tracking-widest bg-white/5">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                  <div className="text-orange-500 font-bold text-sm md:text-lg tracking-[0.25em] uppercase">
                    {exp.company}
                  </div>
                </div>

                {/* Description */}
                <div className="max-w-3xl">
                  <ul className="space-y-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm md:text-base leading-relaxed flex items-start gap-5">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-orange-500/60 flex-shrink-0" />
                        <span className="opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                          {item}
                        </span>
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
