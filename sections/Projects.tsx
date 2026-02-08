
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'AI Based Health and Fitness Coach',
    description: 'Developed a system using Python and ML algorithms for personalized health recommendations. Designed an intuitive web interface for users to access tailored diet and exercise plans.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000',
    tags: ['Python', 'ML Algorithms', 'Health-Tech'],
    category: 'ai'
  },
  {
    id: '2',
    title: 'Store Mate',
    description: 'Engineered a comprehensive system to manage and track product stock and expiry dates. Integrated backend data with the frontend for seamless real-time inventory updates.',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1000',
    tags: ['Backend', 'Real-time', 'Inventory'],
    category: 'web'
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'ai' | 'design'>('all');

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div>
            <div className="text-orange-500 text-[10px] font-black tracking-[0.4em] mb-4">PORTFOLIO</div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-none">
              SELECTED <br /><span className="gradient-text">SYSTEMS</span>
            </h2>
            <p className="text-gray-400 max-w-xl font-grotesk tracking-wide text-sm leading-relaxed">
              Transforming academic excellence at GIET University into practical, scalable AI solutions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 glass p-2 rounded-full">
            {['all', 'web', 'ai'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                  filter === f ? 'orange-gradient text-white shadow-lg' : 'text-gray-500 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="relative aspect-[16/11] overflow-hidden rounded-3xl mb-8 border border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#050505]/40 group-hover:bg-transparent transition-colors duration-500" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#FF3D00]/10 backdrop-blur-[2px]">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-black shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight size={32} />
                    </div>
                  </div>

                  <div className="absolute top-8 left-8 px-6 py-2 glass rounded-full text-[9px] font-black uppercase tracking-widest text-white border border-white/20">
                    {project.category}
                  </div>
                </div>

                <div className="px-4">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-orange-500/60 uppercase tracking-widest border border-orange-500/20 px-3 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold mb-5 group-hover:text-orange-500 transition-colors tracking-tight uppercase leading-tight">{project.title}</h3>
                  <p className="text-gray-400 font-grotesk text-base leading-relaxed mb-10 opacity-70 group-hover:opacity-100 transition-opacity">{project.description}</p>
                  
                  <div className="flex items-center gap-10">
                    <a href="#" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] hover:text-orange-500 transition-colors group/link">
                      Access Console <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <a href="#" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] hover:text-orange-500 transition-colors group/link">
                      Repository <Github size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
