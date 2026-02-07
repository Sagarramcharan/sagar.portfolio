
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Monitor, Users } from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'Python', icon: 'Code', level: 90, category: 'Frontend' }, // Using categories for grouping
  { name: 'AI-ML', icon: 'Code', level: 85, category: 'Frontend' },
  { name: 'MySQL', icon: 'Server', level: 80, category: 'Backend' },
  { name: 'Firebase', icon: 'Server', level: 75, category: 'Backend' },
  { name: 'Windows', icon: 'Settings', level: 95, category: 'Tools' },
  { name: 'Product Management', icon: 'Settings', level: 80, category: 'Design' },
  { name: 'Communication Skills', icon: 'Settings', level: 90, category: 'Design' },
  { name: 'Consulting', icon: 'Settings', level: 70, category: 'Design' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4">CORE <span className="gradient-text">COMPETENCIES</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto uppercase tracking-widest text-sm">Specialized in AI/ML and Data Architectures.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { cat: 'Programming', icon: <Code className="text-[#FF3D00]" size={24} />, key: 'Frontend' },
            { cat: 'Databases', icon: <Database className="text-[#FF3D00]" size={24} />, key: 'Backend' },
            { cat: 'Systems', icon: <Monitor className="text-[#FF3D00]" size={24} />, key: 'Tools' },
            { cat: 'Non-Technical', icon: <Users className="text-[#FF3D00]" size={24} />, key: 'Design' }
          ].map((group, idx) => (
            <motion.div
              key={group.cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border border-white/5"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-orange-500/10 rounded-xl">
                   {group.icon}
                </div>
                <h3 className="font-bold text-lg tracking-tight">{group.cat}</h3>
              </div>
              
              <div className="space-y-6">
                {skills.filter(s => s.category === group.key).map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs uppercase tracking-widest mb-2 font-bold text-gray-400">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full orange-gradient"
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
