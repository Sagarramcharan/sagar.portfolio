
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Monitor, Users } from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'Python', icon: 'Code', level: 95, category: 'Frontend' }, // Using existing category mapping
  { name: 'AI-ML', icon: 'Code', level: 90, category: 'Frontend' },
  { name: 'MySQL', icon: 'Server', level: 85, category: 'Backend' },
  { name: 'Firebase', icon: 'Server', level: 80, category: 'Backend' },
  { name: 'Windows', icon: 'Settings', level: 95, category: 'Tools' },
  { name: 'Product Management', icon: 'Settings', level: 85, category: 'Design' },
  { name: 'Communication Skills', icon: 'Settings', level: 90, category: 'Design' },
  { name: 'Consulting', icon: 'Settings', level: 80, category: 'Design' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4">CORE <span className="gradient-text">SKILLS</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto uppercase tracking-widest text-[10px] font-bold">Synchronized with professional resume documentation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { cat: 'Programming', icon: <Code className="text-orange-500" size={24} />, key: 'Frontend' },
            { cat: 'Databases', icon: <Database className="text-orange-500" size={24} />, key: 'Backend' },
            { cat: 'Operating Systems', icon: <Monitor className="text-orange-500" size={24} />, key: 'Tools' },
            { cat: 'Non-Technical', icon: <Users className="text-orange-500" size={24} />, key: 'Design' }
          ].map((group, idx) => (
            <motion.div
              key={group.cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border border-white/5 group hover:border-orange-500/20 transition-colors"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-orange-500/10 rounded-xl group-hover:bg-orange-500/20 transition-colors">
                   {group.icon}
                </div>
                <h3 className="font-bold text-sm tracking-[0.2em] uppercase leading-tight">{group.cat}</h3>
              </div>
              
              <div className="space-y-6">
                {skills.filter(s => s.category === group.key).map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-[9px] uppercase tracking-widest mb-3 font-black text-gray-500">
                      <span>{skill.name}</span>
                      <span className="text-orange-500/50">{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full orange-gradient shadow-[0_0_10px_rgba(255,61,0,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
