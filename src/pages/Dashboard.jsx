import React from 'react';
import { 
  LayoutGrid, FileText, PieChart, Settings, 
  Plus, Search, Bell, ChevronRight, MessageSquare 
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#004D57] text-white font-sans p-6">
      {/* 1. Top Navigation Bar */}
      <nav className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-[#004D57] rounded-sm rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-tight">R</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-white/60">
            <button className="px-4 py-1.5 bg-white/20 text-white rounded-full">Overview</button>
            <button className="hover:text-white transition-colors">Budget</button>
            <button className="hover:text-white transition-colors">Documents</button>
            <button className="hover:text-white transition-colors">Agreements</button>
            <button className="hover:text-white transition-colors">Projections</button>
            <button className="hover:text-white transition-colors">Project settings</button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Search size={18} className="text-white/60" />
          <div className="relative">
            <Bell size={18} className="text-white/60" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 text-[#004D57] text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100" 
            alt="User" 
            className="w-8 h-8 rounded-full border border-white/20"
          />
        </div>
      </nav>

      {/* 2. Project Sub-Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
          <span className="bg-[#B4F481] text-black px-2 py-1 rounded">End 25 March 2024</span>
          <span className="text-white/40 flex items-center gap-1">
            <LayoutGrid size={12} /> Fort Lauderdale, FL
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-white/40 text-xs">$12,465,240.52</span>
          <button className="bg-white text-[#004D57] px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-bold shadow-lg">
            <Settings size={14} className="rotate-45" /> Open Pre-development
          </button>
          <button className="bg-[#FFD66B] text-[#004D57] px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-bold shadow-lg">
            <Plus size={14} /> New Draw
          </button>
        </div>
      </div>

      {/* 3. Main Grid Content */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Left Card: Project Title */}
        <div className="col-span-12 lg:col-span-4 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-[32px] p-8 border border-white/5 flex flex-col justify-between min-h-[300px]">
          <div>
            <h1 className="text-5xl font-medium leading-tight mb-2">Fort <br /> Lauderdale <br /> Flats</h1>
            <p className="text-white/40 text-sm">General construction</p>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-white/60 underline decoration-white/20 underline-offset-4">Miller Construction Company</span>
            <div className="flex items-center gap-1 text-white/40 italic">
              All stakeholders <ChevronRight size={14} className="border border-white/20 rounded-full" />
            </div>
          </div>
        </div>

        {/* Center Card: Progress Circular Chart */}
        <div className="col-span-12 lg:col-span-4 bg-transparent flex flex-col items-center justify-center relative">
          <div className="relative w-64 h-64">
            {/* SVG Circle for Progress */}
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle className="text-white/10" strokeWidth="8" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
              <circle className="text-[#B4F481]" strokeWidth="8" strokeDasharray="180 251" strokeLinecap="round" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[10px] uppercase opacity-40 font-bold mb-1">Requested</span>
              <span className="text-6xl font-medium">64%</span>
              <span className="text-[10px] font-bold mt-2">$8.3M <span className="opacity-40">/ $12.5M</span></span>
            </div>
          </div>
        </div>

        {/* Right Card: Architectural Image */}
        <div className="col-span-12 lg:col-span-4 rounded-[32px] overflow-hidden shadow-2xl h-[300px]">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200" 
            className="w-full h-full object-cover" 
            alt="Skyscrapers" 
          />
        </div>

        {/* 4. Bottom Row: Draws List */}
        <div className="col-span-12">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-4xl font-medium">Draws</h2>
            <button className="mt-2 text-[#B4F481]"><Plus size={20} /></button>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {[6, 5, 4, 3, 2].map((num) => (
              <div key={num} className={`${num === 6 ? 'bg-white text-black' : 'bg-white/5 border border-white/10'} rounded-3xl p-5 flex flex-col justify-between h-32`}>
                <div className="flex justify-between items-start">
                  <span className="font-bold text-sm">Draw {num}</span>
                  {num === 6 && <div className="w-2 h-2 bg-red-400 rounded-full" />}
                </div>
                <div>
                  <p className={`text-[10px] font-bold ${num === 6 ? 'text-black/40' : 'text-white/40'}`}>25 Feb 2023</p>
                  <div className="flex justify-between items-end mt-1">
                    <span className={`text-[10px] uppercase font-black ${num === 6 ? 'text-black/60' : 'text-[#B4F481]'}`}>Funded</span>
                    <span className="text-xs font-bold">$499,976.55</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Final Row: Detailed Tables */}
        <div className="col-span-4 bg-[#B4F481] text-[#004D57] rounded-[32px] p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold">Budget Overview</h3>
            <div className="w-6 h-6 border border-[#004D57]/20 rounded-full flex items-center justify-center">
               <ChevronRight size={14} />
            </div>
          </div>
          <div className="space-y-4 text-[11px]">
            <div className="flex justify-between opacity-60 font-black uppercase tracking-widest border-b border-[#004D57]/10 pb-2">
              <span>Name</span>
              <div className="flex gap-12"><span>Used</span><span>Budget</span></div>
            </div>
            {[
              { name: 'Land', used: '$1,306,257', budget: '$1,306,257', color: 'bg-white/50' },
              { name: 'Soft costs', used: '$1,531,536', budget: '$2,073,855', color: 'bg-[#004D57]/40' },
              { name: 'Hard costs', used: '$2,665,247', budget: '$9,085,127', color: 'bg-[#FFD66B]' },
            ].map((row, i) => (
              <div key={i} className="flex justify-between font-bold">
                <span className="w-20">{row.name}</span>
                <div className="flex gap-4 items-center">
                  <span>{row.used}</span>
                  <div className="w-12 h-1 bg-[#004D57]/10 rounded-full overflow-hidden">
                    <div className={`h-full ${row.color}`} style={{ width: '60%' }} />
                  </div>
                  <span>{row.budget}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-4 bg-white/5 border border-white/10 rounded-[32px] p-8">
            <div className="flex items-center gap-6 mb-6 opacity-60 text-[10px] uppercase font-black tracking-widest">
              <span className="flex items-center gap-2"><FileText size={14}/> Setup</span>
              <span className="flex items-center gap-2"><MessageSquare size={14}/> Chat <span className="bg-yellow-400 text-black px-1 rounded">3</span></span>
              <span className="ml-auto">2 of 5</span>
            </div>
            <div className="space-y-3">
               <div className="p-4 bg-white/5 rounded-2xl flex items-center gap-3 border border-white/5">
                  <div className="w-4 h-4 border border-white/40 rounded-full" />
                  <span className="text-sm">Review user access</span>
               </div>
               <div className="p-4 bg-white rounded-2xl flex items-center gap-3 text-black font-bold">
                  <div className="w-4 h-4 border-2 border-red-400 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                  </div>
                  <span className="text-sm">Review rules</span>
               </div>
               <div className="p-4 bg-[#B4F481]/20 rounded-2xl flex items-center gap-3 border border-[#B4F481]/30">
                  <div className="w-4 h-4 bg-[#B4F481] rounded-full flex items-center justify-center text-black">
                    <ChevronRight size={10} strokeWidth={4} />
                  </div>
                  <span className="text-sm text-[#B4F481]">Create project</span>
               </div>
            </div>
        </div>

        <div className="col-span-4 bg-[#005B66] rounded-[32px] p-8 border border-white/5">
           <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold">Funding Sources Overview</h3>
              <div className="text-[10px] opacity-40 font-bold uppercase flex items-center gap-1">Details <ChevronRight size={12}/></div>
           </div>
           <div className="space-y-6">
              <div>
                <div className="flex justify-between text-[11px] font-bold mb-2">
                  <span>Equity <span className="opacity-40 font-normal ml-2">$3,265,240.52</span></span>
                  <span className="opacity-40">Contributed</span>
                </div>
                <div className="flex justify-between text-xs font-black">
                   <span>$3,265,240.52</span>
                   <div className="w-32 h-1.5 bg-white/10 rounded-full self-center">
                      <div className="w-full h-full bg-orange-400" />
                   </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] font-bold mb-2">
                  <span>Debt <span className="opacity-40 font-normal ml-2">$2,237,800.90</span></span>
                  <span className="opacity-40">Disbursed</span>
                </div>
                <div className="flex justify-between text-xs font-black">
                   <span>$9,200,000.00</span>
                   <div className="w-32 h-1.5 bg-white/10 rounded-full self-center">
                      <div className="w-6/12 h-full bg-[#B4F481]" />
                   </div>
                </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;