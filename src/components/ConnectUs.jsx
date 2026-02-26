import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Connect = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('connect'); // 'connect' or 'docs'

  return (
    <div className="h-screen w-full bg-[#050505] text-white font-sans flex overflow-hidden">
      
      {/* BACKGROUND TEXTURE */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1200" 
          className="w-full h-full object-cover grayscale brightness-[0.15] contrast-150 opacity-20"
          alt="Neural Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* SIDEBAR */}
      <aside className="relative z-20 w-64 border-r border-white/5 bg-black/40 backdrop-blur-xl flex flex-col p-8">
        <div className="flex items-center gap-3 mb-12 cursor-pointer group" onClick={() => navigate('/')}>
          <div className="grid grid-cols-2 gap-1 w-4 h-4">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:animate-pulse" />
            <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
            <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:animate-pulse" />
          </div>
          <span className="text-sm font-black tracking-tighter uppercase italic">NeuraBrain</span>
        </div>

        <nav className="flex flex-col gap-8">
          <ul className="flex flex-col gap-4 text-[11px] font-bold uppercase tracking-widest">
            <li 
              className="text-white/50 hover:text-white cursor-pointer transition-colors" 
              onClick={() => navigate('/dashboard')}
            >
              Main Hub
            </li>
            <li 
              className={`cursor-pointer transition-all ${activeView === 'connect' ? 'text-orange-500 italic underline underline-offset-4' : 'text-white/50 hover:text-white'}`}
              onClick={() => setActiveView('connect')}
            >
              Connect Us
            </li>
            <li 
              className={`cursor-pointer transition-all ${activeView === 'docs' ? 'text-orange-500 italic underline underline-offset-4' : 'text-white/50 hover:text-white'}`}
              onClick={() => setActiveView('docs')}
            >
              Support Docs
            </li>
          </ul>
        </nav>

        <div className="mt-auto opacity-20">
            <p className="text-[8px] font-mono uppercase tracking-widest">System_v.9.0</p>
            <div className="w-full h-[1px] bg-white/20 mt-2" />
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="relative z-10 flex-grow p-12 overflow-y-auto flex flex-col custom-scrollbar">
        
        {activeView === 'connect' ? (
          /* CONNECT VIEW */
          <div className="max-w-4xl w-full mx-auto grid grid-cols-12 gap-16 my-auto">
            <div className="col-span-12 lg:col-span-5">
              <h1 className="text-7xl font-bold tracking-tighter uppercase mb-8 leading-[0.85]">
                Get <br /> <span className="text-white/20">In</span> Touch
              </h1>
              <p className="text-white/40 text-sm leading-relaxed mb-12 border-l-2 border-orange-600 pl-6 italic">
                Experience a lag? Need to expand your node capacity? Our engineers are synced 24/7.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold mb-1">Location</p>
                  <p className="text-xs font-bold tracking-widest">Jaipur, Rajasthan, 302006</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold mb-1">Email Us</p>
                  <p className="text-xs font-bold tracking-widest text-orange-500">nextgenova@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 bg-white/[0.02] border border-white/5 p-10 backdrop-blur-md">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <label className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold mb-2 block group-focus-within:text-orange-500">Subject Identity</label>
                  <input type="text" placeholder="ENTER NAME" className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/10 font-bold tracking-widest" />
                </div>
                <div className="relative group">
                  <label className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold mb-2 block group-focus-within:text-orange-500">Return Address</label>
                  <input type="email" placeholder="SYNC@NETWORK.COM" className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/10 font-bold tracking-widest" />
                </div>
                <div className="relative group">
                  <label className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold mb-2 block group-focus-within:text-orange-500">Transmission Content</label>
                  <textarea rows="3" placeholder="DESCRIBE THE NEURAL ANOMALY..." className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/10 font-bold tracking-widest resize-none" />
                </div>
                <button className="group relative w-full overflow-hidden bg-white/[0.03] border border-orange-500/30 px-10 py-5 transition-all duration-500 hover:border-orange-500 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)]">
                  <div className="absolute inset-0 w-0 bg-orange-500 transition-all duration-500 ease-out group-hover:w-full" />
                  <span className="relative z-10 flex items-center justify-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-white group-hover:text-black">
                    Initiate Uplink
                  </span>
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* DOCS VIEW */
          <div className="max-w-4xl mx-auto w-full py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="inline-block px-3 py-1 border border-orange-500/30 text-orange-500 text-[9px] font-black uppercase tracking-widest mb-8">
                System Documentation
              </div>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-12">Protocol <span className="text-orange-500 italic">Interface</span></h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 border border-white/5 bg-white/[0.02] hover:border-orange-500/30 transition-all">
                    <span className="text-orange-500 font-mono text-[10px] block mb-4">01 / INITIALIZATION</span>
                    <h3 className="text-sm font-black uppercase tracking-widest mb-4">Uplink Procedure</h3>
                    <p className="text-white/40 text-xs leading-relaxed">Login using your Google or GitHub credentials to generate a secure neural handshake token valid for 24 hours.</p>
                </div>
                <div className="p-8 border border-white/5 bg-white/[0.02] hover:border-orange-500/30 transition-all">
                    <span className="text-orange-500 font-mono text-[10px] block mb-4">02 / MAPPING</span>
                    <h3 className="text-sm font-black uppercase tracking-widest mb-4">Memory Structures</h3>
                    <p className="text-white/40 text-xs leading-relaxed">Navigate to the Memory Maps tab to visualize collective data clusters and synaptic connections.</p>
                </div>
                <div className="p-8 border border-white/5 bg-white/[0.02] hover:border-orange-500/30 transition-all">
                    <span className="text-orange-500 font-mono text-[10px] block mb-4">03 / SECURITY</span>
                    <h3 className="text-sm font-black uppercase tracking-widest mb-4">Encryption Layer</h3>
                    <p className="text-white/40 text-xs leading-relaxed">All transmissions are protected via AES-256 neural-grade encryption protocols by default.</p>
                </div>
                <div className="p-8 border border-white/5 bg-white/[0.02] hover:border-orange-500/30 transition-all">
                    <span className="text-orange-500 font-mono text-[10px] block mb-4">04 / SUPPORT</span>
                    <h3 className="text-sm font-black uppercase tracking-widest mb-4">Direct Contact</h3>
                    <p className="text-white/40 text-xs leading-relaxed">If synchronization fails, use the "Connect Us" form to reach the Core Engineering team.</p>
                </div>
              </div>
          </div>
        )}
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(249, 115, 22, 0.3); }
      `}</style>
    </div>
  );
};

export default Connect;