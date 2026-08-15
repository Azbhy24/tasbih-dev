import { Quote, Compass } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Vision() {
  const { vision } = portfolioData;

  return (
    <section 
      id="vision" 
      className="relative py-24 sm:py-36 md:py-44 border-t border-neutral-800/80 bg-[#060608] text-neutral-200 overflow-hidden"
    >
      {/* Visual Signature: Quiet Atmospheric Negative Space with Delicate Border Rules */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Chapter 06 Marker */}
        <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 sm:pb-4 mb-12 sm:mb-20">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-emerald-400 font-bold bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
              CHAPTER 06
            </span>
            <span className="text-neutral-700 font-mono">/</span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-300 font-semibold">
              VISION & MANIFESTO
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>ARAH JANGKA PANJANG</span>
          </div>
        </div>

        {/* 1. Massive Reflective Serif Manifesto Quote */}
        <div className="my-10 sm:my-20 text-center max-w-3xl mx-auto">
          <Quote className="w-8 h-8 text-emerald-400/60 mx-auto mb-6" />

          <blockquote 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight italic tracking-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            "{vision.quote}"
          </blockquote>

          <div className="mt-8 flex flex-col items-center">
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-400">
              {vision.quoteAuthor}
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-widest mt-1">
              S1 Manajemen Pendidikan Islam • Digital Builder
            </span>
          </div>
        </div>

        {/* 2. Linear Strategic Roadmap (2026 - 2028) */}
        <div className="mt-16 sm:mt-24 pt-10 sm:pt-14 border-t border-neutral-800/80 text-left">
          
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-neutral-800 pb-4 mb-8">
            <h3 
              className="text-xl sm:text-2xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Peta Jalan Strategis (2026–2028)
            </h3>
            <p className="text-xs text-neutral-400 font-mono">
              {vision.statement}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {vision.milestones.map((m, idx) => (
              <div 
                key={idx}
                id={`milestone-${idx}`}
                className="border-t border-neutral-800 pt-4 text-left flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-emerald-400 block mb-1">
                    // TAHUN {m.year}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                    {m.target}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
