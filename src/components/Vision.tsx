import { useState } from "react";
import { Sparkles, Target, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolio";

export default function Vision() {
  const { vision } = portfolioData;
  const [expandedMilestones, setExpandedMilestones] = useState<{ [key: string]: boolean }>({});

  const toggleMilestone = (year: string) => {
    setExpandedMilestones((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
  };

  return (
    <section id="vision" className="relative py-28 sm:py-32 border-t border-slate-800/60 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold tracking-wider text-indigo-300 uppercase bg-indigo-950/80 px-3.5 py-1.5 rounded-full border border-indigo-500/30">
            VISI & MISI JANGKA PANJANG
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
            Menatap Masa Depan Transformasi Digital
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Vision statement & Milestones roadmap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Statement & Quote */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="p-7 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-indigo-500/40 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)] transition-all duration-300 text-left h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Target className="w-5 h-5 text-indigo-400" />
                  <span className="text-[10px] font-mono font-bold tracking-wider text-indigo-300 uppercase">THE MISSION STATEMENT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight">
                  {vision.statement}
                </h3>
              </div>
              
              <div className="h-px bg-slate-800 w-full my-8" />
              
              {/* Quote Container */}
              <div className="text-left mt-auto">
                <span className="text-4xl font-serif text-indigo-400/40 leading-none select-none block">“</span>
                <p className="text-sm font-sans text-slate-200 leading-relaxed italic pl-3 border-l-2 border-indigo-500 font-medium">
                  {vision.quote}
                </p>
                <cite className="block text-xs font-mono text-indigo-300 font-bold uppercase tracking-wider mt-4 pl-3">
                  — {vision.quoteAuthor}
                </cite>
              </div>
            </div>
          </div>

          {/* Right Column: Milestones Roadmap */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl shadow-xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">ROADMAP MILESTONES (2026 - 2028)</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-indigo-300 bg-indigo-950/80 px-2.5 py-0.5 rounded border border-indigo-500/30">
                    Klik untuk Detail
                  </span>
                </div>

                <div className="relative border-l-2 border-slate-800 pl-4 sm:pl-6 space-y-4 py-2">
                  {vision.milestones.map((milestone) => {
                    const isExpanded = !!expandedMilestones[milestone.year];

                    return (
                      <div key={milestone.year} className="relative group">
                        {/* Milestone Pointer dot */}
                        <div className={`absolute -left-[25px] sm:-left-[31px] top-3.5 w-4 h-4 rounded-full border-2 transition-colors z-20 shadow-xs ${
                          isExpanded ? "bg-indigo-500 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)]" : "bg-slate-900 border-indigo-500"
                        }`} />

                        <div className={`p-4 rounded-xl border transition-all duration-300 ${
                          isExpanded
                            ? "border-indigo-500/60 bg-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.15)]"
                            : "border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-950"
                        }`}>
                          <button
                            onClick={() => toggleMilestone(milestone.year)}
                            className="w-full text-left cursor-pointer flex items-center justify-between gap-3 group/m"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
                              {/* Year Badge */}
                              <span className="px-3 py-1 bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 rounded-lg text-xs font-mono font-bold shrink-0 self-start sm:self-auto">
                                {milestone.year}
                              </span>

                              <h4 className="text-white font-bold text-base leading-snug group-hover/m:text-indigo-300 transition-colors">
                                {milestone.target}
                              </h4>
                            </div>

                            <div className={`p-1.5 rounded-lg border text-xs font-mono font-bold transition-colors shrink-0 ${
                              isExpanded ? "bg-indigo-600 text-white border-indigo-500" : "bg-slate-800 text-slate-400 border-slate-700 group-hover/m:border-indigo-500/50 group-hover/m:bg-indigo-950 group-hover/m:text-indigo-300"
                            }`}>
                              <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                                isExpanded ? "rotate-90" : ""
                              }`} />
                            </div>
                          </button>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="overflow-hidden border-t border-slate-800 mt-3 pt-3"
                              >
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-medium">
                                  {milestone.description}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
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
