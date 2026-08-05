import { Sparkles, Calendar, CheckSquare, Target } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";

export default function Vision() {
  const { vision } = portfolioData;

  return (
    <section id="vision" className="relative py-24 border-t border-slate-200 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider text-indigo-800 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200 shadow-sm">
            VISI & MISI JANGKA PANJANG
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Menatap Masa Depan Transformasi Digital
          </h2>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Vision statement & Milestones roadmap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Statement & Quote */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm text-left h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Target className="w-5 h-5 text-indigo-600" />
                  <span className="text-[10px] font-mono font-bold tracking-wider text-indigo-800 uppercase">THE MISSION STATEMENT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight">
                  {vision.statement}
                </h3>
              </div>
              
              <div className="h-px bg-slate-200 w-full my-8" />
              
              {/* Quote Container */}
              <div className="text-left mt-auto">
                <span className="text-4xl font-serif text-indigo-300 leading-none select-none block">“</span>
                <p className="text-sm font-sans text-slate-800 leading-relaxed italic pl-3 border-l-2 border-indigo-400 font-medium">
                  {vision.quote}
                </p>
                <cite className="block text-xs font-mono text-indigo-800 font-bold uppercase tracking-wider mt-4 pl-3">
                  — {vision.quoteAuthor}
                </cite>
              </div>
            </div>
          </div>

          {/* Right Column: Milestones Roadmap */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span className="text-[10px] font-mono font-bold tracking-wider text-slate-600 uppercase">ROADMAP MILESTONES (2026 - 2028)</span>
                </div>

                <div className="relative border-l-2 border-slate-200 pl-4 sm:pl-6 space-y-8 py-2">
                  {vision.milestones.map((milestone) => {
                    return (
                      <div key={milestone.year} className="relative group">
                        {/* Milestone Pointer dot */}
                        <div className="absolute -left-[25px] sm:-left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center z-20 shadow-sm" />

                        <div className="flex flex-col sm:flex-row sm:items-start gap-3 pl-3">
                          {/* Year Badge */}
                          <span className="px-3 py-1 bg-indigo-50 border border-indigo-200 text-indigo-800 rounded-lg text-xs font-mono font-bold shrink-0 self-start shadow-xs">
                            {milestone.year}
                          </span>

                          <div className="text-left">
                            <h4 className="text-slate-900 font-bold text-base leading-snug">
                              {milestone.target}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed font-sans font-medium">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
