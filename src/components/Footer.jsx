import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Memory Maps', path: '/memory-maps' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12 px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand Side */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-2">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_5px_rgba(249,115,22,0.8)]" />
              <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
              <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_5px_rgba(249,115,22,0.8)]" />
            </div>
            <span className="text-lg font-black uppercase italic tracking-tighter">NeuraBrain</span>
          </div>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">
            Master your mind. © {currentYear}
          </p>
        </div>

        {/* Links Side */}
        <div className="flex flex-wrap justify-center gap-8">
          {footerLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => navigate(link.path)}
              className="text-[11px] uppercase tracking-widest text-white/50 hover:text-orange-500 transition-colors font-bold"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Connect Button */}
        <button 
          onClick={() => navigate('/connect')}
          className="px-6 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all"
        >
          Stay Connected
        </button>
      </div>
    </footer>
  );
};

export default Footer;