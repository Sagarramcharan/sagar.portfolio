
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'AI based health and fitness coach',
    description: 'Developed a system using Python and ML algorithms for personalized health recommendations and exercise plans.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000',
    tags: ['Python', 'ML Algorithms', 'Web Interface'],
    category: 'ai'
  },
  {
    id: '2',
    title: 'Store Mate',
    description: 'Created a system to manage and track product stock and expiry dates with real-time frontend updates.',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1000',
    tags: ['Frontend', 'Backend', 'Real-time Data'],
    category: 'web'
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'ai' | 'design'>('all');

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">SELECTED <span className="gradient-text">PROJECTS</span></h2>
            <p className="text-gray-500 max-w-xl uppercase tracking-widest text-sm">Turning theoretical AI into practical applications.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {['all', 'web', 'ai'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === f ? 'orange-gradient text-white shadow-lg' : 'glass text-gray-400 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-3xl glass border border-white/5 hover:border-orange-500/30 transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-6 left-6 px-4 py-1 glass rounded-full text-[10px] font-black uppercase tracking-widest text-orange-500 border border-orange-500/20">
                    {project.category}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-[#FF3D00] transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">{project.description}</p>
                  
                  <div className="flex items-center gap-6">
                    <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[#FF3D00] transition-colors">
                      View Demo <ExternalLink size={14} />
                    </a>
                    <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[#FF3D00] transition-colors">
                      GitHub <Github size={14} />
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
