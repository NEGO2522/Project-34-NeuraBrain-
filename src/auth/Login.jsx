import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isSyncing, setIsSyncing] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSyncing(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="h-screen w-full bg-[#050505] text-white font-sans flex overflow-hidden">
      
      {/* LEFT SIDE: VISUAL PANEL */}
      <div className="hidden lg:block lg:w-[60%] h-full relative overflow-hidden border-r border-white/5">
        <img 
          src="https://plus.unsplash.com/premium_photo-1691962725086-d1590e379139?w=1200&auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-transform duration-[10s] hover:scale-110"
          alt="Students Collaborating"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050505]" />
        
        <div className="absolute bottom-16 left-16 max-w-md z-10">
          <div className="w-12 h-[1px] bg-orange-500 mb-6" />
          <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-4">
            Connect your <br /> <span className="text-orange-500 italic font-serif">Collective</span> Mind.
          </h2>
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Neural Network Revision Phase 01</p>
        </div>
      </div>

      {/* RIGHT SIDE: AUTH PANEL */}
      <div className="w-full lg:w-[40%] h-full flex flex-col justify-center px-12 md:px-20 relative bg-[#050505] overflow-hidden">
        
        <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-orange-500 via-transparent to-transparent animate-[pan_3s_linear_infinite]" />

        {/* LOGO SECTION */}
        <div className="mb-12 flex flex-col items-start">
          <div className="grid grid-cols-2 gap-1.5 w-8 h-8 mb-6 group cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-white/10 rounded-full" />
            <div className="w-3 h-3 bg-white/10 rounded-full" />
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse [animation-delay:0.2s]" />
          </div>
          <h2 className="text-lg font-black tracking-[0.4em] uppercase italic text-white/90 leading-none">NeuraBrain</h2>
          <p className="text-[9px] uppercase tracking-[0.2em] text-orange-500/60 mt-3 font-bold">Portal Access Required</p>
        </div>

        <div className="space-y-8 w-full">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative group">
              <label className="text-[9px] tracking-[0.4em] text-white/30 font-bold mb-2 block group-focus-within:text-orange-500 transition-colors"> 
                Email Address
              </label>
              <input 
                required
                type="email" 
                placeholder="user@gmail.com"
                className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/5 font-bold tracking-widest uppercase"
              />
            </div>

            <button 
              disabled={isSyncing}
              className="group relative w-full overflow-hidden bg-white/[0.03] border border-orange-500/30 px-10 py-4 transition-all duration-500 hover:border-orange-500 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)] disabled:opacity-50"
            >
              <div className={`absolute inset-0 bg-orange-500 transition-all duration-500 ease-out ${isSyncing ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              <span className={`relative z-10 flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-500 ${isSyncing ? 'text-black' : 'group-hover:text-black'} text-white`}>
                {isSyncing ? 'Generating Link...' : 'Send Magic Link'}
              </span>
            </button>
          </form>

          {/* DIVIDER */}
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-white/5"></div>
            <span className="flex-shrink mx-4 text-[8px] font-bold text-white/10 uppercase tracking-[0.3em]">OR</span>
            <div className="flex-grow border-t border-white/5"></div>
          </div>

          {/* SOCIAL BUTTONS CONTAINER */}
          <div className="flex gap-3">
            {/* GOOGLE CONTINUE */}
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-4 bg-white text-black text-[9px] font-black uppercase tracking-[0.2em] hover:bg-orange-500 transition-colors rounded-sm group">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.27.81-.57z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>

            {/* GITHUB CONTINUE */}
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-4 bg-white/5 border border-white/10 text-white text-[9px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all rounded-sm group">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </button>
          </div>
        </div>

        {/* BRUTALIST FOOTER */}
        <div className="absolute bottom-10 left-12 right-12 flex justify-between opacity-20 pointer-events-none">
          <span className="text-[8px] font-mono uppercase tracking-[0.5em]">Auth_Core_v.9</span>
          <span className="text-[8px] font-mono uppercase tracking-[0.5em]">Terminal_01</span>
        </div>
      </div>

      <style>{`
        @keyframes pan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Login;