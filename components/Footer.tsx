
import React from 'react';
import { Github, Twitter, Linkedin, ArrowUp, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0F0F0F] border-t border-white/5 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <span className="text-3xl font-black gradient-text">SAGAR</span>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">Crafting digital excellence since 2017</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="p-3 glass rounded-full hover:text-[#FF3D00] transition-colors"><Twitter size={20} /></a>
            <a href="#" className="p-3 glass rounded-full hover:text-[#FF3D00] transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="p-3 glass rounded-full hover:text-[#FF3D00] transition-colors"><Github size={20} /></a>
            <a href="#" className="p-3 glass rounded-full hover:text-[#FF3D00] transition-colors"><Instagram size={20} /></a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} SAGAR STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-gray-600 hover:text-white uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-[10px] text-gray-600 hover:text-white uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
