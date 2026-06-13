import { Sparkles, Calendar, CheckSquare, Target } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";

export default function Vision() {
  const { vision } = portfolioData;

  return (
    <section id="vision" className="relative py-24 border-t border-zinc-950 bg-[#09090B] overflow-hidden">
      {/* Background glow vectors */}
      <div className="absolute top-[10%] left-0 w-[500px] h-[500px] bg-zinc-800/[0.01] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-0 w-[500px] h-[500px] bg-zinc-850/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-widest text-zinc-450 uppercase bg-zinc-900 px-3.5 py-1.5 rounded border border-zinc-805">
            VISI & MISI JANGKA PANJANG
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Menatap Masa Depan Transformasi Digital
          </h2>
          <div className="w-12 h-[1px] bg-zinc-800 mx-auto mt-6" />
        </div>

        {/* Elegant layout dividing Vision statement & Milestones roadmap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Massive Statement & Quote */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/10 text-left h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Target className="w-5 h-5 text-zinc-400" />
                  <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-550 uppercase">THE MISSION STATEMENT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight">
                  {vision.statement}
                </h3>
              </div>
              
              <div className="h-[1px] bg-zinc-800 w-full my-8" />
              
              {/* Quote Container */}
              <div className="text-left mt-auto">
                <span className="text-[40px] font-serif text-zinc-700/50 leading-none select-none block">“</span>
                <p className="text-sm font-sans text-zinc-400 leading-relaxed italic pl-3 border-l border-zinc-800">
                  {vision.quote}
                </p>
                <cite className="block text-xs font-mono text-zinc-450 font-bold uppercase tracking-widest mt-4 pl-3">
                  — {vision.quoteAuthor}
                </cite>
              </div>
            </div>
          </div>

          {/* Right Column: Milestones Roadmap representing 2026, 2027, 2028 */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <Sparkles className="w-4 h-4 text-zinc-400" />
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#9CA3AF] uppercase">ROADMAP MILESTONES (2026 - 2028)</span>
                </div>

                <div className="relative border-l border-zinc-850 pl-4 sm:pl-6 space-y-8 py-2">
                  {vision.milestones.map((milestone) => (
                    <div key={milestone.year} className="relative group">
                      {/* Milestone Pointer dot */}
                      <div className="absolute -left-[25px] sm:-left-[31px] top-1.5 w-4 h-4 rounded bg-[#09090B] border-2 border-zinc-750 flex items-center justify-center z-20 group-hover:scale-110 transition-transform" />

                      <div className="flex flex-col sm:flex-row sm:items-start gap-3 pl-3">
                        {/* Year Badge */}
                        <span className="px-2.5 py-1 bg-zinc-900 text-zinc-300 border border-zinc-800 rounded text-xs font-mono font-bold shrink-0 self-start">
                          {milestone.year}
                        </span>

                        <div className="text-left">
                          <h4 className="text-white font-bold text-base leading-snug">
                            {milestone.target}
                          </h4>
                          <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed font-sans">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
