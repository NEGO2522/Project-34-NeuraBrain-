import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: "01",
      title: "Synchronization Eligibility",
      content: "By initiating a neural uplink, you certify that you are at least 13 cycles of age. NeuraBrain is a cognitive augmentation tool and does not replace medical-grade memory restoration services."
    },
    {
      id: "02",
      title: "Node Ownership & Conduct",
      content: "All data nodes created within your Memory Maps remain your intellectual property. However, the use of NeuraBrain for the storage of malicious code, illicit data clusters, or encrypted neural-viruses is strictly prohibited."
    },
    {
      id: "03",
      title: "Service Latency & Drift",
      content: "While our AI predictive models aim for 99.9% retention accuracy, 'Neural Drift' is a natural biological occurrence. NeuraBrain is not liable for data loss resulting from biological decay or failure to sync within recommended 48-hour windows."
    },
    {
      id: "04",
      title: "Account Termination",
      content: "The Core reserves the right to sever the uplink for any account found in violation of the protocol. Severed accounts will have their data purged after a 30-day cooling period."
    }
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
        <div className="absolute inset-y-0 right-0 w-1/3 bg-orange-600/5 blur-[120px] rounded-full translate-x-1/2" />
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
              <li className="text-white/50 hover:text-white transition-colors" onClick={() => navigate('/privacy')}>Privacy Protocol</li>
              <li className="text-orange-500 italic underline underline-offset-4">Terms of Sync</li>
              <li className="text-white/50 hover:text-white transition-colors" onClick={() => navigate('/connect')}>Support</li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="relative z-10 flex-grow p-12 overflow-y-auto">
        
        <header className="max-w-4xl mb-24">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] uppercase tracking-[0.6em] text-orange-500 font-black">Sync-Agreement // Alpha-7</span>
            <div className="flex-grow h-[1px] bg-white/10" />
          </div>
          <h1 className="text-8xl font-extrabold tracking-tighter uppercase mb-8">
            Terms <br /> <span className="text-white/10">Of</span> Service
          </h1>
          <p className="text-white/50 text-xs tracking-widest uppercase font-bold border-l-2 border-orange-600 pl-6">
            Last Calibration: February 2026
          </p>
        </header>

        <div className="max-w-6xl grid grid-cols-12 gap-16">
          
          {/* TERMS SECTIONS */}
          <div className="col-span-12 lg:col-span-7 space-y-20">
            {sections.map((section) => (
              <div key={section.id} className="relative group">
                <span className="absolute -left-12 top-0 text-3xl font-black text-white/5 group-hover:text-orange-500/20 transition-colors">
                  {section.id}
                </span>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform">
                  {section.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed font-medium">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* RISK ASSESSMENT SIDEBAR */}
          <div className="col-span-12 lg:col-span-5">
            <div className="sticky top-12 bg-white/[0.02] border border-white/10 p-10 backdrop-blur-sm">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-orange-500">Subject Compliance</h4>
              
              <div className="space-y-10">
                <div className="relative">
                  <div className="flex justify-between items-end mb-2">
                    <p className="text-[11px] font-bold uppercase tracking-widest">Neural Integrity</p>
                    <p className="text-[10px] font-mono text-white/30">Verified</p>
                  </div>
                  <div className="h-1 w-full bg-white/5 overflow-hidden">
                    <div className="h-full bg-white w-[90%]" />
                  </div>
                </div>

                <div className="relative">
                  <div className="flex justify-between items-end mb-2">
                    <p className="text-[11px] font-bold uppercase tracking-widest">Protocol Adherence</p>
                    <p className="text-[10px] font-mono text-white/30">100%</p>
                  </div>
                  <div className="h-1 w-full bg-white/5 overflow-hidden">
                    <div className="h-full bg-orange-500 w-full" />
                  </div>
                </div>
              </div>

              <div className="mt-16 p-6 border border-orange-500/20 bg-orange-500/5">
                <p className="text-[10px] font-bold leading-relaxed text-orange-200/60 uppercase tracking-tight">
                  "By continuing to use NeuraBrain, you acknowledge the risk of total data permanence."
                </p>
              </div>

              <button className="group relative w-full mt-10 overflow-hidden bg-white px-10 py-4 transition-all duration-500 hover:bg-orange-500">
                <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-black">
                  I Accept Protocols
                </span>
              </button>
            </div>
          </div>

        </div>

        {/* BRUTALIST FOOTER */}
        <div className="mt-40 grid grid-cols-12 gap-8 py-10 border-t border-white/5">
            <div className="col-span-6">
                <p className="text-[9px] font-mono text-white/20 uppercase tracking-[0.5em]">NeuraBrain // Core-Agreement-Signed</p>
            </div>
            <div className="col-span-6 text-right">
                <p className="text-[9px] font-mono text-white/20 uppercase tracking-[0.5em]">Secure-Channel-01</p>
            </div>
        </div>

      </main>
    </div>
  );
};

export default TermsOfService;