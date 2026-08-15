import { Quote } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Vision() {
  const { vision } = portfolioData;

  return (
    <section 
      id="vision" 
      className="relative py-24 sm:py-32 md:py-40 border-t border-neutral-800/80 bg-[#050507] text-neutral-200"
    >
      {/* Chapter 05 Quiet Editorial Atmosphere */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Chapter 05 Marker */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3 sm:pb-4 mb-10 sm:mb-16">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-emerald-400 font-bold bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
              CHAPTER 05
            </span>
            <span className="text-neutral-700 font-mono">/</span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-300 font-semibold">
              VISION & MANIFESTO
            </span>
          </div>
          <span className="font-mono text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-wider hidden sm:inline">
            MANIFESTO PERSONAL & ROADMAP
          </span>
        </div>

        {/* 1. Large Editorial Manifesto Quote */}
        <div className="my-8 sm:my-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-neutral-900/80 border border-neutral-800 text-emerald-400 mb-6">
            <Quote className="w-5 h-5" />
          </div>

          <blockquote 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-relaxed italic"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            "{vision.quote}"
          </blockquote>

          <div className="mt-6 flex flex-col items-center">
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400">
              {vision.quoteAuthor}
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-widest mt-0.5">
              S1 Manajemen Pendidikan Islam • Digital Builder
            </span>
          </div>
        </div>

        {/* 2. Core Vision Statement & 3-Step Strategic Roadmap */}
        <div className="mt-16 sm:mt-24 pt-10 sm:pt-16 border-t border-neutral-800/80 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start mb-12">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-2">
                ARAH STRATEGIS
              </span>
              <h3 
                className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Peta Jalan & Rencana Pengembangan
              </h3>
              <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
                {vision.statement}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {vision.milestones.map((m, idx) => (
                <div 
                  key={idx}
                  id={`milestone-${idx}`}
                  className="border border-neutral-800/80 bg-neutral-900/30 rounded-xl p-4 sm:p-6 hover:border-neutral-700 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs font-bold text-emerald-400 bg-neutral-950 border border-neutral-800 px-2 py-0.5 rounded">
                      {m.year}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {m.target}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 pl-0 sm:pl-1 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
