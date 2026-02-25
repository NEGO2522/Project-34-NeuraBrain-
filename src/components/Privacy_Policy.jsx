import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const protocols = [
    { code: "P-01", title: "Neural Encryption", detail: "All memory maps are hashed using AES-256 at the edge. We cannot view your visual recall nodes." },
    { code: "P-02", title: "Drift Anonymization", detail: "Predictive AI analysis on your forgetting curve is performed on local vectors. No raw biometric data is uploaded." },
    { code: "P-03", title: "Sub-Zero Storage", detail: "Inactive nodes are archived in offline cold-storage after 365 days of user inactivity." }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex overflow-hidden">
      
      {/* BACKGROUND TEXTURE */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1200" 
          className="w-full h-full object-cover grayscale brightness-[0.1] contrast-150 opacity-10"
          alt="Neural Background"
        />
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
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-bold">Legal</p>
            <ul className="flex flex-col gap-4 text-[11px] font-bold uppercase tracking-widest">
              <li className="text-orange-500 italic underline underline-offset-4">Privacy Protocol</li>
              <li className="text-white/50 hover:text-white transition-colors">Terms of Sync</li>
              <li className="text-white/50 hover:text-white transition-colors" onClick={() => navigate('/connect')}>Support</li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="relative z-10 flex-grow p-12 overflow-y-auto">
        
        <header className="max-w-4xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-orange-500" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-orange-500 font-black">Secure Document // Ver. 4.0.2</span>
          </div>
          <h1 className="text-7xl font-bold tracking-tighter uppercase mb-6 leading-none">
            Privacy <br /> <span className="text-white/20">Protocols</span>
          </h1>
          <p className="text-white/40 text-sm leading-relaxed max-w-xl italic">
            Your consciousness is your own. NeuraBrain is designed to augment recall, not harvest identity. This protocol outlines how we shield your neural architecture.
          </p>
        </header>

        <div className="max-w-5xl grid grid-cols-12 gap-12">
          
          {/* PROTOCOL LIST */}
          <div className="col-span-12 lg:col-span-8 space-y-12">
            {protocols.map((p, idx) => (
              <div key={idx} className="group border-l border-white/10 pl-8 hover:border-orange-500 transition-colors duration-500">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[10px] font-mono text-orange-500/50">{p.code}</span>
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-orange-500 transition-colors">{p.title}</h3>
                </div>
                <p className="text-sm text-white/40 leading-relaxed font-medium">
                  {p.detail}
                </p>
              </div>
            ))}
          </div>

          {/* DATA SOVEREIGNTY BOX */}
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-12 bg-white/[0.03] border border-orange-500/20 p-8 rounded-sm overflow-hidden group">
              {/* Decorative Pulse */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-3xl -mr-16 -mt-16 animate-pulse" />
              
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-white">Your Sovereignty</h4>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-white/40">Data Ownership</span>
                  <span className="text-orange-500 uppercase tracking-tighter italic">User Defined</span>
                </div>
                <div className="w-full h-[2px] bg-white/5">
                  <div className="w-full h-full bg-orange-500" />
                </div>
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-white/40">External Sharing</span>
                  <span className="text-red-500 uppercase tracking-tighter italic">Disabled</span>
                </div>
                <div className="w-full h-[2px] bg-white/5">
                  <div className="w-0 h-full bg-red-500" />
                </div>
              </div>

              <button className="w-full bg-white text-black py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-500 transition-all">
                Download Audit Log
              </button>
            </div>
          </div>

        </div>

        {/* FOOTER STAMP */}
        <footer className="mt-32 pt-12 border-t border-white/5 flex justify-between items-center opacity-30">
          <p className="text-[9px] font-mono uppercase tracking-widest">NeuraBrain Neural Privacy Compliance 2026</p>
          <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        </footer>

      </main>
    </div>
  );
};

export default PrivacyPolicy;