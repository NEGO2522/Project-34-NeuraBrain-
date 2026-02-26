import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const [isAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Reusable NeuraBrain Grid Icon Component for Cards
  const CardIcon = () => (
    <div className="relative w-6 h-6 flex items-center justify-center opacity-80">
      <div className="absolute inset-0 border border-orange-500/30 rounded-full animate-[spin_15s_linear_infinite]" />
      <div className="grid grid-cols-2 gap-0.5 z-10">
        <div className="w-1 h-1 bg-orange-500 rounded-full shadow-[0_0_5px_rgba(249,115,22,0.8)]" />
        <div className="w-1 h-1 bg-white/40 rounded-full" />
        <div className="w-1 h-1 bg-white/40 rounded-full" />
        <div className="w-1 h-1 bg-orange-500 rounded-full shadow-[0_0_5px_rgba(249,115,22,0.8)]" />
      </div>
    </div>
  );

  return (
    <div className="bg-[#050505] text-white font-sans selection:bg-orange-500/30 h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <style>{`
        @keyframes cardLoop {
          0%, 100% { 
            opacity: 0; 
            transform: translateY(80px) translateZ(-200px); 
          }
          5%, 30% { 
            opacity: 1; 
            transform: translateY(0) translateZ(var(--tz)); 
          }
          35%, 95% { 
            opacity: 0; 
            transform: translateY(-80px) translateZ(200px); 
          }
        }
        .animate-card-loop {
          animation: cardLoop 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          opacity: 0;
        }
        @keyframes pathDraw {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }
        .animate-path {
          stroke-dasharray: 200;
          animation: pathDraw 3s ease-in-out infinite;
        }
      `}</style>

      {/* FIXED NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-12 py-10">
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => navigate('/')}>
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-dashed border-orange-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute w-6 h-6 border border-white/10 rounded-full bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors" />
            <div className="relative grid grid-cols-2 gap-1 z-10">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.8)] animate-pulse" />
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full group-hover:bg-white transition-colors" />
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full group-hover:bg-white transition-colors" />
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.8)] animate-pulse [animation-delay:0.3s]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter uppercase italic leading-none">NeuraBrain</span>
            <span className="text-[8px] tracking-[0.4em] uppercase text-orange-500/60 font-bold">Neural Interface</span>
          </div>
        </div>

        <div className="hidden md:flex items-center p-1 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-md">
          <button onClick={() => navigate('/dashboard')} className="px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">Dashboard</button>
          <button onClick={() => navigate('/memory-maps')} className="px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">Memory Maps</button>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/connect')} className="border border-orange-500/30 px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-orange-500 hover:text-black transition-all font-bold backdrop-blur-sm rounded-full">Connect</button>
          <button onClick={() => navigate(isAuthenticated ? '/dashboard' : '/login')} className="border border-white/10 px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all font-bold backdrop-blur-sm rounded-full">
            {isAuthenticated ? 'Access Portal' : 'Login'}
          </button>
        </div>
      </nav>

      {/* SECTION 1 */}
      <section className="relative h-screen w-full flex flex-col bg-[#050505] snap-start">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1200" className="w-full h-full object-cover grayscale brightness-50 contrast-125 opacity-40" alt="Neural Background" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]" />
        </div>

        <main className="relative z-10 px-12 grid grid-cols-12 h-full items-center">
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 w-fit mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-orange-200/70 font-bold">Let's crack it</span>
            </div>
            
            <h1 className="text-7xl md:text-[100px] font-bold leading-[0.85] tracking-tighter mb-8 text-white">
              Active <br /> <span className="text-white/20">Recall</span> for <br /> a <span className="italic font-serif font-light text-orange-500">Perfect</span> Score
            </h1>

            <button className="group relative w-fit overflow-hidden bg-white/[0.03] border border-orange-500/30 px-10 py-5 transition-all duration-500 hover:border-orange-500 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)] rounded-sm">
              <div className="absolute inset-0 w-0 bg-orange-500 transition-all duration-500 ease-out group-hover:w-full" />
              <span className="relative z-10 flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-white group-hover:text-black transition-colors duration-500">
                Test Ur Memory
                <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* ISOMETRIC CARD ANIMATION */}
          <div className="col-span-12 md:col-span-6 flex items-center justify-center relative perspective-[2000px]">
            <div className="relative w-72 h-96 transition-transform duration-1000 transform-gpu rotate-x-[55deg] rotate-z-[35deg]">
              <div 
                style={{ '--tz': '0px', animationDelay: '0s' }} 
                className="animate-card-loop absolute inset-0 bg-gradient-to-br from-white/15 to-transparent border border-white/20 rounded-2xl backdrop-blur-2xl p-6 shadow-2xl flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.5)]">
                    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <CardIcon />
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-2 border-orange-500 pl-4 py-1">
                    <h2 className="text-2xl font-black uppercase tracking-tighter leading-none mb-2">
                      Measure What You <span className="text-orange-500">Actually</span> Remember.
                    </h2>
                    <div className="space-y-1 mt-2 font-mono text-xs">
                      <div className="flex justify-between"><span>Memory Strength:</span> <span className="text-orange-500">72%</span></div>
                      <div className="flex justify-between"><span>Weak Concepts:</span> <span className="text-orange-500 text-right">4</span></div>
                      <div className="flex justify-between"><span>Exam Score:</span> <span className="text-orange-500 text-right">83%</span></div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10 flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-tighter text-white/60 font-bold">Retention Curve:</span>
                    <span className="text-xs">Analytics Online</span>
                  </div>
                </div>
              </div>

              {/* Card 2 - Animated Graph */}
              <div 
                style={{ '--tz': '-150px', animationDelay: '4s' }} 
                className="animate-card-loop absolute inset-0 bg-white/[0.05] border border-white/10 rounded-2xl backdrop-blur-xl flex flex-col p-6 shadow-2xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-white/40">Real-time Analytics</div>
                  <CardIcon />
                </div>
                
                <div className="relative flex-1 bg-black/20 rounded-xl border border-white/5 p-4 flex flex-col">
                  <div className="flex-1 relative">
                    <svg viewBox="0 0 100 60" className="w-full h-full overflow-visible">
                      <line x1="0" y1="60" x2="100" y2="60" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
                      <line x1="0" y1="0" x2="0" y2="60" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
                      <path d="M 0 10 Q 30 50 60 58" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 2" />
                      <path 
                        d="M 0 10 Q 30 55 50 58 L 50 20 Q 75 10 100 5" 
                        fill="none" 
                        stroke="#f97316" 
                        strokeWidth="2" 
                        className="animate-path"
                      />
                    </svg>
                    <div className="absolute top-0 right-0 text-[8px] text-orange-500 font-bold animate-pulse">REVISION BOOST</div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Data Nodes */}
              <div 
                style={{ '--tz': '-300px', animationDelay: '8s' }} 
                className="animate-card-loop absolute inset-0 bg-orange-500/5 border border-orange-500/20 rounded-2xl backdrop-blur-lg flex flex-col p-6 shadow-2xl"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                     <div className="w-4 h-4 bg-orange-500/40 rounded-full animate-pulse" />
                  </div>
                  <CardIcon />
                </div>
                <div className="flex flex-col justify-end h-full">
                  <h2 className="text-3xl font-black uppercase tracking-tighter leading-none text-white/80">
                    Measure <br /> 
                    What You <br /> 
                    <span className="text-orange-500/50 italic">Actually</span> <br /> 
                    Remember.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="absolute bottom-10 right-12 z-20 flex gap-6">
          <button onClick={() => navigate('/privacy')} className="text-[9px] uppercase tracking-[0.3em] text-white/30 hover:text-orange-500 transition-colors font-bold">Privacy Policy</button>
          <button onClick={() => navigate('/terms')} className="text-[9px] uppercase tracking-[0.3em] text-white/30 hover:text-orange-500 transition-colors font-bold">Terms of Service</button>
        </div>
      </section>

      {/* SECTION 2 - REIMAGINED PROFESSIONAL LOOK */}
      <section className="relative h-screen w-full bg-[#050505] snap-start overflow-hidden border-t border-white/5">
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1770738994878-9b4572981b65?q=80&w=1470&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-30 grayscale contrast-150 transition-all duration-1000"
            alt="Deep Neural Interface"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
        </div>

        <div className="relative z-10 flex flex-col justify-center h-full px-12 md:px-24">
          <div className="grid grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Statement */}
            <div className="col-span-12 lg:col-span-5 mb-16 lg:mb-0">
              <h2 className="text-5xl md:text-7xl font-bold leading-none tracking-tighter text-white mb-8">
                The <span className="text-orange-500">Retention</span> <br />Gap.
              </h2>
              <p className="text-xl text-white/40 font-light max-w-md leading-relaxed">
                Traditional studying is a linear process applied to a non-linear mind. We solve the structural failure of modern learning.
              </p>
            </div>

            {/* Right Side: Professional Data Grid */}
            <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
              
              {/* Box 1 */}
              <div className="bg-[#080808] p-10 group hover:bg-orange-500 transition-all duration-500">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-orange-500 group-hover:text-black">01 //</span>
                  <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-black/40" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-widest text-white group-hover:text-black mb-4">Memory Decay</h3>
                <p className="text-sm text-white/40 group-hover:text-black/70 leading-relaxed font-medium">
                  Information without strategic reinforcement reaches 80% decay within 72 hours of acquisition.
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-[#080808] p-10 group hover:bg-orange-500 transition-all duration-500">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-orange-500 group-hover:text-black">02 //</span>
                  <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-black/40" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-widest text-white group-hover:text-black mb-4">Neural Scatter</h3>
                <p className="text-sm text-white/40 group-hover:text-black/70 leading-relaxed font-medium">
                  Context-switching without a neural map creates fragmented knowledge bases that fail under exam pressure.
                </p>
              </div>

              {/* Box 3 */}
              <div className="bg-[#080808] p-10 group hover:bg-orange-500 transition-all duration-500">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-orange-500 group-hover:text-black">03 //</span>
                  <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-black/40" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-widest text-white group-hover:text-black mb-4">Blind Preparation</h3>
                <p className="text-sm text-white/40 group-hover:text-black/70 leading-relaxed font-medium">
                  Inefficient focus on established concepts while critical knowledge gaps remain undetected until failure.
                </p>
              </div>

              {/* Box 4 */}
              <div className="bg-[#080808] p-10 group hover:bg-orange-500 transition-all duration-500">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-orange-500 group-hover:text-black">04 //</span>
                  <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-black/40" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-widest text-white group-hover:text-black mb-4">Zero Verification</h3>
                <p className="text-sm text-white/40 group-hover:text-black/70 leading-relaxed font-medium">
                  The absence of quantifiable retention metrics results in a false sense of security and unpredictable outcomes.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;