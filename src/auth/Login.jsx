import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isSyncing, setIsSyncing] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSyncing(true);
    // Simulate neural sync delay
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex items-center justify-center overflow-hidden relative">
      
      {/* BACKGROUND TEXTURE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1200" 
          className="w-full h-full object-cover grayscale brightness-[0.2] contrast-150 opacity-40"
          alt="Neural Background"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* AMBIENT GLOWS */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full animate-pulse [animation-delay:1s]" />

      {/* LOGIN CARD */}
      <div className="relative z-10 w-full max-w-md p-1 px-1">
        <div className="bg-black/40 backdrop-blur-3xl border border-white/10 p-10 rounded-sm relative overflow-hidden">
          
          {/* TOP DECORATIVE SCANNER */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-[pan_3s_linear_infinite]" />

          {/* LOGO SECTION */}
          <div className="flex flex-col items-center mb-12">
            <div className="grid grid-cols-2 gap-1.5 w-8 h-8 mb-6 group cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-white/10 rounded-full" />
              <div className="w-3 h-3 bg-white/10 rounded-full" />
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse [animation-delay:0.2s]" />
            </div>
            <h2 className="text-sm font-black tracking-[0.5em] uppercase italic text-white/90">NeuraBrain</h2>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mt-2 font-bold">Portal Access Required</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            {/* EMAIL INPUT */}
            <div className="relative group">
              <label className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold mb-2 block group-focus-within:text-orange-500 transition-colors">
                Subject ID
              </label>
              <input 
                required
                type="email" 
                placeholder="USER@NEURAL_LINK.IO"
                className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/5 font-bold tracking-widest uppercase"
              />
            </div>

            {/* PASSWORD INPUT */}
            <div className="relative group">
              <label className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold mb-2 block group-focus-within:text-orange-500 transition-colors">
                Access Phrase
              </label>
              <input 
                required
                type="password" 
                placeholder="••••••••••••"
                className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/5 font-bold tracking-widest"
              />
            </div>

            {/* LOGIN BUTTON - MATCHING LANDING STYLE */}
            <button 
              disabled={isSyncing}
              className="group relative w-full overflow-hidden bg-white/[0.03] border border-orange-500/30 px-10 py-5 transition-all duration-500 hover:border-orange-500 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className={`absolute inset-0 bg-orange-500 transition-all duration-500 ease-out ${isSyncing ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              <span className={`relative z-10 flex items-center justify-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] transition-colors duration-500 ${isSyncing || 'group-hover:text-black'} text-white`}>
                {isSyncing ? 'Syncing Neural Link...' : 'Initiate Uplink'}
                {!isSyncing && (
                  <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </span>
            </button>
          </form>

          {/* FOOTER LINKS */}
          <div className="mt-12 flex justify-between items-center text-[9px] font-bold uppercase tracking-widest">
            <button className="text-white/20 hover:text-white transition-colors">Request ID Recovery</button>
            <button className="text-orange-500 hover:underline underline-offset-4">New Subject Registration</button>
          </div>
        </div>

        {/* BRUTALIST DECORATION */}
        <div className="mt-6 flex justify-between opacity-20">
            <span className="text-[8px] font-mono uppercase tracking-[0.5em]">Auth_Core_v.9</span>
            <span className="text-[8px] font-mono uppercase tracking-[0.5em]">Terminal_01</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes pan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Login;