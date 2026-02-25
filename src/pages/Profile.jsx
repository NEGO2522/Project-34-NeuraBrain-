import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const userStats = [
    { label: "Total Retention", value: "84%", trend: "+2.4%" },
    { label: "Neural Nodes", value: "1,402", trend: "+12" },
    { label: "Sync Streak", value: "14 Days", trend: "Stable" },
    { label: "Recall Speed", value: "1.2s", trend: "-0.2s" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex overflow-hidden">
      
      {/* BACKGROUND TEXTURE */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1200" 
          className="w-full h-full object-cover grayscale brightness-[0.15] contrast-150 opacity-20"
          alt="Neural Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
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
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-bold">Systems</p>
            <ul className="flex flex-col gap-4 text-[11px] font-bold uppercase tracking-widest">
              <li className="text-white/50 hover:text-white transition-colors" onClick={() => navigate('/dashboard')}>Dashboard</li>
              <li className="text-white/50 hover:text-white transition-colors" onClick={() => navigate('/memory-maps')}>Memory Maps</li>
              <li className="text-orange-500">Neural Profile</li>
            </ul>
          </div>
          
          <div className="mt-auto">
             <button className="w-full border border-red-900/30 py-3 text-[9px] uppercase tracking-widest font-black text-red-500 hover:bg-red-500 hover:text-black transition-all">
                Disconnect
             </button>
          </div>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="relative z-10 flex-grow p-12 overflow-y-auto">
        
        {/* PROFILE HEADER */}
        <div className="grid grid-cols-12 gap-12 mb-16 items-center">
          <div className="col-span-12 md:col-span-4 flex justify-center">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-orange-600/20 blur-[40px] rounded-full group-hover:bg-orange-600/40 transition-all duration-700" />
              {/* Profile Image Frame */}
              <div className="relative w-48 h-48 rounded-full border border-white/10 p-2 bg-[#050505]">
                <div className="w-full h-full rounded-full overflow-hidden border border-orange-500/50 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Floating ID Tag */}
              <div className="absolute -bottom-2 right-0 bg-orange-500 text-black px-3 py-1 text-[10px] font-black uppercase tracking-tighter italic">
                Active_User_01
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-orange-500 font-bold">Neural Identity</span>
              <div className="h-[1px] w-20 bg-orange-500/30" />
            </div>
            <h1 className="text-7xl font-bold tracking-tighter uppercase mb-2">Alex <span className="text-white/10 italic">Chen</span></h1>
            <p className="text-white/40 text-sm max-w-md border-l-2 border-orange-600 pl-4">
              Integrated since Feb 2026. Focus areas: Neural Plasticity, Quantum Mechanics, and Biological Systems. 
            </p>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {userStats.map((stat, idx) => (
            <div key={idx} className="bg-white/[0.02] border border-white/5 p-6 backdrop-blur-sm group hover:border-orange-500/30 transition-colors">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4 font-bold">{stat.label}</p>
              <div className="flex items-baseline justify-between">
                <p className="text-4xl font-black tracking-tighter group-hover:text-orange-500 transition-colors">{stat.value}</p>
                <span className={`text-[9px] font-bold ${stat.trend.includes('+') ? 'text-green-500' : stat.trend.includes('-') ? 'text-red-500' : 'text-white/20'}`}>
                  {stat.trend}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* RECENT ACTIVITY / BRAIN DRIFT MAP */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 bg-white/[0.02] border border-white/5 p-8 relative overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xs uppercase tracking-[0.3em] font-black">Retention Drift (7 Days)</h3>
              <span className="text-[10px] text-white/20 uppercase font-bold">Auto-Sync Enabled</span>
            </div>
            {/* Visual placeholder for a chart */}
            <div className="h-48 flex items-end gap-2 px-2">
              {[60, 80, 45, 90, 70, 85, 95].map((height, i) => (
                <div key={i} className="flex-grow bg-white/5 relative group cursor-pointer">
                  <div 
                    className="absolute bottom-0 w-full bg-orange-500/20 group-hover:bg-orange-500/60 transition-all duration-500" 
                    style={{ height: `${height}%` }}
                  />
                  {i === 6 && <div className="absolute top-0 w-full h-1 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)]" />}
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
             <div className="bg-orange-600 p-8 text-black">
                <h3 className="text-[11px] font-black uppercase tracking-widest mb-4">Critical Action</h3>
                <p className="text-2xl font-black tracking-tighter leading-none mb-6">"Neurobiology" Map is decaying rapidly.</p>
                <button className="w-full bg-black text-white py-3 text-[10px] font-black uppercase tracking-widest hover:invert transition-all">
                  Start Recall Session
                </button>
             </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Profile;