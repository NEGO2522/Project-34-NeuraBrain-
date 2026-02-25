import React, { useState, useEffect } from 'react';

const Landing = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = `${time.getHours()}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')} GMT+1`;

  return (
    <div className="bg-[#0a0a0a] text-white font-sans selection:bg-white/20">
      
      {/* SECTION 1: NEURAL RETENTION HERO */}
      <section className="min-h-screen bg-[#8b3a1a] text-white font-sans selection:bg-white/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_transparent_0%,_rgba(0,0,0,0.4)_100%)] z-0" />
        
        {/* NAVBAR */}
        <nav className="relative z-50 flex items-center justify-between px-12 py-10">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-6 h-6 flex flex-wrap gap-1 justify-center items-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-orange-400 transition-colors"></div>
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-orange-400 transition-colors delay-75"></div>
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">NeuraBrain</span>
          </div>
          
          {/* UPDATED NAV LINKS */}
          <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-bold">
            <a href="/dashboard" className="text-white transition-colors flex items-center gap-2 group">
              <span className="w-1 h-1 bg-white rounded-full transition-all shadow-[0_0_8px_white]"></span> 
              Dashboard
            </a>
            <a href="/memory-maps" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group">
              <span className="w-1 h-1 bg-white/40 group-hover:bg-white rounded-full transition-all"></span> 
              Memory Maps
            </a>
            <a href="/decay-tracking" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group">
              <span className="w-1 h-1 bg-white/40 group-hover:bg-white rounded-full transition-all"></span> 
              Decay Tracking
            </a>
            <a href="/revision-ai" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group">
              <span className="w-1 h-1 bg-white/40 group-hover:bg-white rounded-full transition-all"></span> 
              Revision AI
            </a>
          </div>

          <button className="border border-white/30 px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#8b3a1a] transition-all font-bold">
            Access Portal
          </button>
        </nav>

        <main className="relative z-10 px-12 grid grid-cols-12 min-h-[75vh]">
          <div className="col-span-12 md:col-span-4 flex flex-col justify-between py-10">
            <p className="text-white/70 text-sm leading-relaxed max-w-[280px]">
              Effort isn't the problem. Retention is. Most students complete chapters only to lose 70% of the data within 48 hours. We fix the leak.
            </p>
            <h1 className="text-7xl md:text-[95px] font-medium leading-[0.85] tracking-tighter">
              Active <br /> 
              <span className="text-white/30">Recall</span> for <br /> 
              a <span className="italic font-serif">Perfect</span> <br /> 
              Score
            </h1>
          </div>

          {/* NEURAL CORE ICON */}
          <div className="col-span-12 md:col-span-4 flex items-center justify-center relative">
            <div className="absolute w-72 h-72 bg-white/10 blur-[120px] rounded-full animate-pulse" />
            <div className="relative flex items-center justify-center">
                <div className="absolute w-64 h-64 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="relative w-40 h-40 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-2xl rounded-3xl border border-white/20 rotate-45 flex items-center justify-center overflow-hidden shadow-2xl">
                    <div className="w-full h-full absolute inset-0 bg-[grid-white/5] [mask-image:linear-gradient(white,transparent)]" />
                    <div className="w-12 h-12 bg-white rounded-full shadow-[0_0_50px_rgba(255,255,255,0.4)] animate-pulse" />
                </div>
                <div className="absolute -top-10 -right-4 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_#f97316]" />
                <div className="absolute bottom-10 -left-8 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 flex flex-col items-end justify-between py-10">
            <p className="text-white/60 text-sm text-right max-w-[240px] leading-relaxed">
              Analyze your Ebbinghaus Forgetting Curve in real-time with our neural mapping specialists.
            </p>
            <div className="w-full max-w-[280px] group cursor-pointer">
              <div className="flex justify-between items-center mb-2 px-1 text-white/40 text-[10px] uppercase tracking-widest">
                <span>View Memory Map</span>
                <span>→</span>
              </div>
              <div className="relative aspect-[3/4] overflow-hidden bg-black/20 backdrop-blur-md border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800" 
                  alt="Neural Network Nodes" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </main>

        <footer className="absolute bottom-0 w-full px-12 py-8 flex justify-between items-end border-t border-white/5 text-[9px] text-white/30 tracking-[0.3em] uppercase font-bold z-50">
          <div><p className="text-white/50 mb-1">Retention Analysis</p><p>2026 Edition</p></div>
          <div className="text-center"><p className="text-white/50 mb-1">Cognitive Node</p><p>{formattedTime}</p></div>
          <div className="text-right"><p className="text-white/50 mb-1">Predictive Revision</p><p>Framework v4.2</p></div>
        </footer>
      </section>

      {/* SECTION 2: UPDATED METRICS WITH BACKGROUND IMAGE */}
      <section className="min-h-screen bg-[#F2F2F2] text-black px-10 py-12 relative flex flex-col overflow-hidden">
        
        {/* BACKGROUND IMAGE (BOOK/STUDY) */}
        <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2000" 
              className="w-full h-full object-cover opacity-[0.07] grayscale"
              alt="Background study"
            />
        </div>

        {/* LARGE BACKGROUND TEXT "14 HRS" OVER THE IMAGE */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-1">
            <span className="text-[40vw] font-black text-black/[0.05] leading-none tracking-tighter uppercase whitespace-nowrap">
                14 HRS
            </span>
        </div>

        <div className="relative z-10 flex justify-between items-center mb-12 border-b border-black/10 pb-4">
          <div className="flex items-center gap-2">
             <div className="w-4 h-4 bg-black flex flex-wrap gap-0.5 items-center justify-center rounded-sm">
                <div className="w-1 h-1 bg-white"></div>
                <div className="w-1 h-1 bg-white/40"></div>
                <div className="w-1 h-1 bg-white/40"></div>
                <div className="w-1 h-1 bg-white"></div>
             </div>
             <span className="text-[10px] font-black uppercase tracking-[0.3em]">Retention Metrics</span>
          </div>
          <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
        </div>

        <div className="relative z-10 flex-grow flex flex-col justify-center">
          <div className="grid grid-cols-12 gap-0 items-baseline">
            <div className="col-span-1">
              <span className="text-[8px] uppercase tracking-widest font-black opacity-30 vertical-text">Retention %</span>
            </div>
            
            <div className="col-span-11 flex items-baseline relative">
              <h2 className="text-[24vw] font-black leading-[0.8] tracking-[-0.05em] flex items-baseline">
                84
                <span className="text-[15vw] opacity-10 mx-[-0.05em]">/</span>
                100
              </h2>
              
              <div className="flex flex-col ml-8 max-w-[150px]">
                <span className="text-[10px] font-bold uppercase tracking-widest leading-tight border-l-2 border-black pl-3 py-1">
                    Neural Retention <br/> Score (Average)
                </span>
                <span className="text-[8px] mt-2 opacity-40 uppercase tracking-tighter">
                    Calculated via AI Memory Drift
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-12 mt-12 bg-white/50 border border-black/5 overflow-hidden backdrop-blur-sm">
          <div className="col-span-8 relative h-64 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200" 
              className="w-full h-full object-cover grayscale brightness-50"
              alt="Studying focus"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-4xl font-black leading-none tracking-tighter uppercase">Predictive Analysis:<br/>Critical Score Threshold</p>
            </div>
          </div>
          
          <div className="col-span-4 p-8 flex flex-col justify-between items-end text-right">
             <span className="text-[10px] font-black opacity-20 uppercase tracking-widest">Next Critical Revision</span>
             <p className="text-3xl font-black tracking-tighter">In 14 Hours</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Landing;