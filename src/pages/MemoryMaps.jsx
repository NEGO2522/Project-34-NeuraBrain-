import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MemoryMaps = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  // Mock data for your memory maps
  const maps = [
    { id: 1, title: "Quantum Physics: Wave Theory", cards: 124, strength: 85, lastSync: "2h ago", img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800" },
    { id: 2, title: "Neurobiology: Synaptic Plasticity", cards: 89, strength: 42, lastSync: "1d ago", img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800" },
    { id: 3, title: "Modern Architecture History", cards: 210, strength: 91, lastSync: "Just now", img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800" },
    { id: 4, title: "Advanced React Patterns", cards: 56, strength: 67, lastSync: "5h ago", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex overflow-hidden">
      
      {/* BACKGROUND TEXTURE */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1200" 
          className="w-full h-full object-cover grayscale brightness-[0.2] contrast-125 opacity-30"
          alt="Neural Background"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-[#050505]/50" />
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
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 group-hover:text-orange-500 transition-colors">Navigation</p>
            <ul className="flex flex-col gap-4 text-[11px] font-bold uppercase tracking-widest">
              <li className="text-white/50 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-white/40 hover:border-white/60 bg-white/5" onClick={() => navigate('/dashboard')}>Dashboard</li>
              <li className="text-orange-500 px-3 py-1.5 rounded-full border border-orange-500/50 bg-orange-500/10">Memory Maps</li>
              <li className="text-white/50 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-white/40 hover:border-white/60 bg-white/5">Decay Tracking</li>
            </ul>
          </div>

          <div className="mt-auto">
             <button className="w-full border border-white/10 py-3 text-[9px] uppercase tracking-widest font-black hover:bg-white hover:text-black transition-all">
                + Create New Map
             </button>
          </div>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="relative z-10 flex-grow p-12 overflow-y-auto">
        
        {/* HEADER */}
        <header className="flex justify-between items-end mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-orange-500 animate-pulse rounded-full" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-orange-500/80 font-bold">Neural Archive</span>
            </div>
            <h1 className="text-6xl font-bold tracking-tighter uppercase">Memory Maps</h1>
          </div>
          
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest text-white/30">Total Retention</p>
            <p className="text-4xl font-black italic tracking-tighter text-orange-500">74.2%</p>
          </div>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {maps.map((map) => (
            <div 
              key={map.id}
              className="group relative h-[400px] bg-white/[0.03] border border-white/5 rounded-sm overflow-hidden transition-all duration-500 hover:border-orange-500/50"
              onMouseEnter={() => setHoveredId(map.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Image Background */}
              <img 
                src={map.img} 
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
                  ${hoveredId === map.id ? 'scale-110 opacity-40 grayscale-0' : 'scale-100 opacity-20 grayscale'}
                `}
                alt={map.title}
              />
              
              {/* Progress Bar (Top) */}
              <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                <div 
                  className="h-full bg-orange-500 transition-all duration-1000" 
                  style={{ width: `${map.strength}%` }}
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-black tracking-widest uppercase py-1 px-2 bg-orange-500 text-black">
                    {map.strength}% Strength
                  </span>
                  <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">
                    {map.cards} Nodes
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-orange-500 transition-colors uppercase leading-none">
                    {map.title}
                  </h3>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Sync: {map.lastSync}</span>
                    <button className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 text-orange-500 underline underline-offset-4">
                      Enter Map
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative scanline effect on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
            </div>
          ))}

          {/* ADD NEW PLACEHOLDER */}
          <div className="border border-white/5 border-dashed rounded-sm h-[400px] flex items-center justify-center group cursor-pointer hover:bg-white/[0.02] transition-colors">
            <div className="text-center transition-transform duration-500 group-hover:scale-110">
              <div className="text-4xl font-light text-white/10 mb-2 group-hover:text-orange-500">+</div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 group-hover:text-white transition-colors font-bold">Initialize Node</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default MemoryMaps;