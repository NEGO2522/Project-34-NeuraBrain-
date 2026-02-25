import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const [time, setTime] = useState(new Date());
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Image carousel effect - changes image every 3 seconds
  useEffect(() => {
    const imageTimer = setTimeout(() => {
      const imageInterval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
      }, 3000);
      return () => clearInterval(imageInterval);
    }, 3000); // Start after 3 seconds
    return () => clearTimeout(imageTimer);
  }, []);

  const memoryMapImages = [
    "https://img.freepik.com/free-photo/top-view-memory-concept-with-post-its-magnifying-glass_23-2149320984.jpg?semt=ais_hybrid&w=740&q=80",
    "https://www.geckoboard.com/uploads/customer-service-dashboard-example-geckoboard.png",
    "https://img.freepik.com/free-photo/shipping-logistic-delivery-freight-cargo-concept_53876-124951.jpg?semt=ais_user_personalization&w=740&q=80"
  ];

  return (
    <div className="bg-[#050505] text-white font-sans selection:bg-orange-500/30">
      
      {/* SECTION 1: NEURAL RETENTION HERO */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#050505]">
        
        {/* NEW BACKGROUND IMAGE LAYER */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1200" 
            className="w-full h-full object-cover grayscale brightness-50 contrast-125 opacity-40"
            alt="Neural Background"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]" />
        </div>

        {/* Ambient Background Glows (Reduced opacity to work with new BG) */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

        {/* NAVBAR */}
        <nav className="relative z-50 flex items-center justify-between px-12 py-10">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="grid grid-cols-2 gap-1 w-5 h-5">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-white/20 rounded-full" />
              <div className="w-2 h-2 bg-white/20 rounded-full" />
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse [animation-delay:0.2s]" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase italic">NeuraBrain</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-white/50">
            <a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a>
            <a href="/memory-maps" className="hover:text-white transition-colors">Memory Maps</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/connect')}
              className="border border-orange-500/30 px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-orange-500 hover:text-black transition-all font-bold backdrop-blur-sm rounded-sm"
            >
              Connect
            </button>
            {isAuthenticated ? (
              <button 
                onClick={() => navigate('/dashboard')}
                className="border border-white/10 px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all font-bold backdrop-blur-sm rounded-sm"
              >
                Access Portal
              </button>
            ) : (
              <button 
                onClick={() => setIsAuthenticated(true)}
                className="border border-white/10 px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all font-bold backdrop-blur-sm rounded-sm"
              >
                Login
              </button>
            )}
          </div>
        </nav>

        <main className="relative z-10 px-12 grid grid-cols-12 min-h-[70vh] items-center">
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center py-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 w-fit mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-orange-200/70 font-bold">Test Ur Memory</span>
            </div>

            <h1 className="text-7xl md:text-[100px] font-bold leading-[0.85] tracking-tighter mb-8 text-white drop-shadow-2xl">
              Active <br /> 
              <span className="text-white/20">Recall</span> for <br /> 
              a <span className="italic font-serif font-light text-orange-500">Perfect</span> Score
            </h1>

            <p className="text-white/60 text-sm leading-relaxed max-w-[380px] border-l-2 border-orange-600 pl-6 mb-10 backdrop-blur-sm">
              Effort isn't the problem. Retention is. Most students lose 70% of data within 48 hours. We fix the leak using predictive AI drift analysis.
            </p>
            
            {/* REDESIGNED BUTTON */}
            <button className="group relative w-fit overflow-hidden bg-white/[0.03] border border-orange-500/30 px-10 py-5 transition-all duration-500 hover:border-orange-500 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)]">
              <div className="absolute inset-0 w-0 bg-orange-500 transition-all duration-500 ease-out group-hover:w-full" />
              <span className="relative z-10 flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-white group-hover:text-black">
                Test Ur Memory
                <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* NEURAL CORE ICON / VISUAL */}
          <div className="col-span-12 md:col-span-6 flex items-center justify-center relative min-h-[500px]">
            <div className="absolute w-[30rem] h-[30rem] bg-orange-600/10 blur-[120px] rounded-full animate-pulse" />
            
            <div className="relative flex items-center justify-center w-full h-full">
                <div className="absolute w-[28rem] h-[28rem] border border-white/5 rounded-full" />
                
                <div className="absolute w-[32rem] h-[32rem] animate-[spin_40s_linear_infinite]">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5"
                      style={{
                        transform: `rotate(${i * 60}deg) translateY(-16rem)`,
                      }}
                    >
                      <div className="w-full h-full rounded-full border border-white/20 bg-black/50 overflow-hidden shadow-lg group flex items-center justify-center">
                        <svg className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2c0 2.66 5.34 4 8 4s8-1.34 8-4v-2c0-2.66-5.34-4-8-4z"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute w-[22rem] h-[22rem] border border-white/10 border-dashed rounded-full animate-[spin_20s_linear_infinite_reverse]" />
                
                <div className="relative z-10 w-80 h-96 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl rounded-[2.5rem] border border-white/10 rotate-3 flex items-center justify-center overflow-hidden shadow-2xl group hover:rotate-0 transition-transform duration-700">
                    {memoryMapImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt="Preview"
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                          index === currentImageIndex 
                            ? 'opacity-30 grayscale scale-100' 
                            : 'opacity-0 grayscale scale-95 pointer-events-none'
                        } ${
                          index === currentImageIndex ? 'group-hover:grayscale-0 group-hover:opacity-50' : ''
                        }`}
                      />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                    <div className="z-10 text-center">
                        <p className="text-[10px] uppercase tracking-[0.4em] font-bold">
                          {currentImageIndex === 0 ? "Memory Maps" : currentImageIndex === 1 ? "Dashboard" : "Decay Tracking"}
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Landing;