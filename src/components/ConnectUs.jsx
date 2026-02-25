import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Connect = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex overflow-hidden">
      
      {/* BACKGROUND TEXTURE */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1200" 
          className="w-full h-full object-cover grayscale brightness-[0.15] contrast-150 opacity-20"
          alt="Neural Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* SIDEBAR */}
      <aside className="relative z-20 w-64 border-r border-white/5 bg-black/40 backdrop-blur-xl flex flex-col p-8">
        <div className="flex items-center gap-3 mb-12 cursor-pointer" onClick={() => navigate('/')}>
          <div className="grid grid-cols-2 gap-1 w-4 h-4">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
            <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
          </div>
          <span className="text-sm font-black tracking-tighter uppercase italic">NeuraBrain</span>
        </div>

        <nav className="flex flex-col gap-8">
          <div className="group cursor-pointer">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-bold">Channels</p>
            <ul className="flex flex-col gap-4 text-[11px] font-bold uppercase tracking-widest">
              <li className="text-white/50 hover:text-white transition-colors" onClick={() => navigate('/dashboard')}>Main Hub</li>
              <li className="text-orange-500 italic underline underline-offset-4">Connect Us</li>
              <li className="text-white/50 hover:text-white transition-colors">Support Docs</li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="relative z-10 flex-grow p-12 overflow-y-auto flex flex-col justify-center">
        
        <div className="max-w-4xl w-full mx-auto grid grid-cols-12 gap-16">
          
          {/* LEFT COL: INFO */}
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-orange-500 font-bold">Neural Uplink</span>
            </div>
            <h1 className="text-7xl font-bold tracking-tighter uppercase mb-8 leading-[0.85]">
              Get <br /> <span className="text-white/20">In</span> Touch
            </h1>
            <p className="text-white/40 text-sm leading-relaxed mb-12 border-l-2 border-orange-600 pl-6 italic">
              Experience a lag? Need to expand your node capacity? Our engineers are synced 24/7 to maintain the integrity of your memory maps.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold mb-1">Satellite HQ</p>
                <p className="text-xs font-bold tracking-widest">Silicon Valley, CA // Sector 7</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold mb-1">Direct Comms</p>
                <p className="text-xs font-bold tracking-widest text-orange-500">uplink@neurabrain.ai</p>
              </div>
            </div>
          </div>

          {/* RIGHT COL: FORM */}
          <div className="col-span-12 lg:col-span-7 bg-white/[0.02] border border-white/5 p-10 backdrop-blur-md">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <label className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold mb-2 block transition-colors group-focus-within:text-orange-500">Subject Identity</label>
                <input 
                  type="text" 
                  placeholder="ENTER NAME"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/10 font-bold tracking-widest"
                />
              </div>

              <div className="relative group">
                <label className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold mb-2 block transition-colors group-focus-within:text-orange-500">Return Address (Email)</label>
                <input 
                  type="email" 
                  placeholder="SYNC@NETWORK.COM"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/10 font-bold tracking-widest"
                />
              </div>

              <div className="relative group">
                <label className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold mb-2 block transition-colors group-focus-within:text-orange-500">Transmission Content</label>
                <textarea 
                  rows="4"
                  placeholder="DESCRIBE THE NEURAL ANOMALY..."
                  className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/10 font-bold tracking-widest resize-none"
                />
              </div>

              {/* RE-DESIGNED BUTTON MATCHING LANDING */}
              <button className="group relative w-full overflow-hidden bg-white/[0.03] border border-orange-500/30 px-10 py-5 transition-all duration-500 hover:border-orange-500 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)]">
                <div className="absolute inset-0 w-0 bg-orange-500 transition-all duration-500 ease-out group-hover:w-full" />
                <span className="relative z-10 flex items-center justify-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-white group-hover:text-black">
                  Initiate Uplink
                  <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </form>
          </div>

        </div>

      </main>
    </div>
  );
};

export default Connect;