import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutGrid, FileText, PieChart, Settings, 
  Plus, Search, Bell, ChevronRight, MessageSquare,
  Brain, Zap, Clock, BarChart3, Home
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans p-6 selection:bg-orange-500/30">
      
      {/* 1. Top Navigation Bar - NeuraBrain Style */}
      <nav className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="relative w-6 h-6 flex flex-wrap gap-1 justify-center items-center">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">NeuraBrain</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">
            <button className="px-4 py-1.5 bg-white text-black rounded-sm">Overview</button>
            <button className="hover:text-white transition-colors">Memory Maps</button>
            <button className="hover:text-white transition-colors">Decay Tracking</button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100" 
            alt="User" 
            className="w-9 h-9 rounded-full border-2 border-orange-500/20 p-0.5"
          />
        </div>
      </nav>

      {/* 2. Cognitive Sub-Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
          <span className="bg-orange-600 text-white px-3 py-1.5 rounded-sm flex items-center gap-2">
            <Zap size={12} fill="white" /> 14H UNTIL CRITICAL DECAY
          </span>
          <span className="text-white/40 flex items-center gap-2">
            <Clock size={12} /> Last Scanned: 2.5 Hours Ago
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-white/20 text-[10px] font-bold tracking-widest uppercase italic">Neural Sync Active</span>
          <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-4 py-2 rounded-sm flex items-center gap-2 text-[10px] uppercase tracking-tighter font-bold transition-all">
            <BarChart3 size={14} /> Analytics Portal
          </button>
          <button className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2 rounded-sm flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(234,88,12,0.3)] transition-all">
            <Plus size={14} /> New Study Node
          </button>
        </div>
      </div>

      {/* 3. Main Grid Content */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Left Card: Brain Profile */}
        <div className="col-span-12 lg:col-span-4 bg-[#8b3a1a] rounded-3xl p-8 flex flex-col justify-between min-h-[350px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700" />
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/60 mb-4 block">Current Profile</span>
            <h1 className="text-6xl font-medium leading-tight mb-4 tracking-tighter italic font-serif">Neuro <br /> Plasticity <br /> Alpha</h1>
            <p className="text-white/60 text-sm max-w-[200px]">Optimal learning window detected between 08:00 - 11:00 GMT+1.</p>
          </div>
          <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold relative z-10 pt-6 border-t border-white/10">
            <span className="text-white">Synaptic Connectivity: High</span>
            <div className="flex items-center gap-1 text-white/60">
              Details <ChevronRight size={14} className="border border-white/20 rounded-full" />
            </div>
          </div>
        </div>

        {/* Center Card: Retention Score Circular Chart */}
        <div className="col-span-12 lg:col-span-4 bg-white/5 border border-white/5 rounded-3xl flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 bg-[grid-white/5] [mask-image:radial-gradient(white,transparent)]" />
          <div className="relative w-72 h-72">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle className="text-white/5" strokeWidth="6" stroke="currentColor" fill="transparent" r="42" cx="50" cy="50" />
              <circle className="text-orange-600" strokeWidth="6" strokeDasharray="221 264" strokeLinecap="round" stroke="currentColor" fill="transparent" r="42" cx="50" cy="50" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[10px] uppercase opacity-40 font-black tracking-widest mb-1">Average Retention</span>
              <span className="text-7xl font-black tracking-tighter">84<span className="text-2xl opacity-20">%</span></span>
              <span className="text-[9px] font-bold mt-2 text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded-full">+4.2% THIS WEEK</span>
            </div>
          </div>
        </div>

        {/* Right Card: Memory Visualization */}
        <div className="col-span-12 lg:col-span-4 rounded-3xl overflow-hidden shadow-2xl h-[350px] relative">
          <img 
            src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1200" 
            className="w-full h-full object-cover grayscale brightness-50 contrast-125" 
            alt="Neural Visualization" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
             <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.4em]">Memory Node 04</span>
             <h3 className="text-2xl font-bold tracking-tighter">Advanced Quantum <br /> Mechanics</h3>
          </div>
        </div>

        {/* 4. Bottom Row: Active Subject Nodes */}
        <div className="col-span-12 mt-4">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter italic">Nodes</h2>
            <div className="h-[2px] flex-grow bg-white/5"></div>
            <button className="text-white/40 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { name: 'Organic Chem', score: '92%', status: 'Stable', color: 'text-green-400' },
              { name: 'Macro-Econ', score: '74%', status: 'Decaying', color: 'text-orange-500' },
              { name: 'Linear Algebra', score: '88%', status: 'Stable', color: 'text-green-400' },
              { name: 'Neuroscience', score: '61%', status: 'Critical', color: 'text-red-500' },
              { name: 'Roman History', score: '95%', status: 'Perfect', color: 'text-white' },
            ].map((node, i) => (
              <div key={i} className="bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-6 flex flex-col justify-between h-40 transition-all cursor-pointer group">
                <div className="flex justify-between items-start">
                  <span className="font-black text-[11px] uppercase tracking-widest opacity-60 group-hover:opacity-100">{node.name}</span>
                  <div className={`w-1.5 h-1.5 rounded-full ${node.status === 'Critical' ? 'bg-red-500 animate-pulse' : 'bg-white/20'}`} />
                </div>
                <div>
                  <p className="text-3xl font-black tracking-tighter mb-1">{node.score}</p>
                  <div className="flex justify-between items-end">
                    <span className={`text-[9px] uppercase font-black tracking-tighter ${node.color}`}>{node.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Final Row: Revision & Sync Detailed Tables */}
        <div className="col-span-12 lg:col-span-4 bg-white text-black rounded-3xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-black uppercase text-sm tracking-widest">Mastery Overview</h3>
            <div className="w-6 h-6 border border-black/20 rounded-full flex items-center justify-center">
               <ChevronRight size={14} />
            </div>
          </div>
          <div className="space-y-6">
            {[
              { name: 'Concept Linking', val: 75, color: 'bg-black' },
              { name: 'Fact Retrieval', val: 90, color: 'bg-orange-600' },
              { name: 'Problem Solving', val: 64, color: 'bg-black/30' },
            ].map((row, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span>{row.name}</span>
                  <span className="opacity-40">{row.val}%</span>
                </div>
                <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                    <div className={`h-full ${row.color}`} style={{ width: `${row.val}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Revision Queue */}
        <div className="col-span-12 lg:col-span-4 bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-6 mb-8 opacity-60 text-[10px] uppercase font-black tracking-widest">
              <span className="flex items-center gap-2"><Brain size={14}/> AI Queue</span>
              <span className="flex items-center gap-2"><MessageSquare size={14}/> Insights <span className="bg-orange-600 text-white px-1.5 rounded-sm">4</span></span>
              <span className="ml-auto">Pending: 03</span>
            </div>
            <div className="space-y-3">
               <div className="p-4 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-tighter">Active Recall: Quantum</span>
                  </div>
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
               </div>
               <div className="p-4 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 border border-white/40 rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-tighter">Gap-Fill: Organic Mech</span>
                  </div>
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
               </div>
               <div className="p-4 bg-orange-600/10 border border-orange-600/20 rounded-xl flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Zap size={14} className="text-orange-500" />
                    <span className="text-xs font-bold uppercase tracking-tighter text-orange-500">Urgent: Neural Mapping</span>
                  </div>
                  <span className="text-[9px] font-black bg-orange-600 text-white px-2 py-1 rounded-sm">START</span>
               </div>
            </div>
        </div>

        {/* Sync Status */}
        <div className="col-span-12 lg:col-span-4 bg-[#1a1a1a] rounded-3xl p-8 border border-white/5 flex flex-col justify-between">
           <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black uppercase text-sm tracking-widest">Device Sync</h3>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed uppercase tracking-widest mb-6">Mobile, Desktop, and Neural-Link v4 are currently synchronized.</p>
           </div>
           <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
              <div className="flex justify-between items-end">
                <span className="text-[9px] font-black uppercase tracking-widest opacity-40">Uptime</span>
                <span className="text-xl font-bold italic tracking-tighter">99.98%</span>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;