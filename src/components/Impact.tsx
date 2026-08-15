import { portfolioData } from "../data/portfolio";
import { TrendingUp, Users, Code, Award, BarChart3 } from "lucide-react";

export default function Impact() {
  const { stats } = portfolioData;

  const iconMap: { [key: string]: any } = {
    Package: TrendingUp,
    Users: Users,
    Code: Code,
    Award: Award,
  };

  return (
    <section 
      id="impact" 
      className="relative py-20 sm:py-28 md:py-36 border-t border-[#1a283e] bg-[#050a12] text-[#e2e8f0] overflow-hidden"
    >
      {/* Visual Signature: Clean High-Precision Technical Coordinates */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Chapter 05 Marker */}
        <div className="flex items-center justify-between border-b border-[#1a283e] pb-3 sm:pb-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-sky-400 font-bold bg-[#0c182a] border border-sky-500/30 px-2 py-0.5 rounded">
              CHAPTER 05
            </span>
            <span className="text-[#1a283e] font-mono">/</span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-300 font-semibold">
              PERFORMANCE & EVIDENCE
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-sky-400/80 uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5 text-sky-400" />
            <span>VERIFIKASI DATA NYATA</span>
          </div>
        </div>

        {/* Section Headline & Compressed 1-liner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16 text-left items-start">
          <div className="lg:col-span-8">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Statistik Kinerja & Verifikasi Angka.
            </h2>
          </div>
          <div className="lg:col-span-4 border-l border-[#1a283e] pl-4 sm:pl-6 text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
            Metrik operasional riil dari pengelolaan barang ritel harian, keanggotaan alumni, serta deployment aplikasi web aktif.
          </div>
        </div>

        {/* Visual Signature: 4-Column Typographic Data Blocks (Huge Numbers, High Contrast) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-left">
          {stats.map((item, idx) => {
            const Icon = iconMap[item.icon] || TrendingUp;
            return (
              <div
                key={item.id}
                id={`stat-block-${item.id}`}
                className="border-t border-[#1a283e] pt-6 flex flex-col justify-between"
              >
                <div>
                  {/* Top Index & Icon */}
                  <div className="flex items-center justify-between mb-3 font-mono text-xs">
                    <span className="text-sky-400 font-bold">
                      DATA // 0{idx + 1}
                    </span>
                    <Icon className="w-4 h-4 text-sky-400" />
                  </div>

                  {/* Massive Typographic Metric */}
                  <div 
                    className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none my-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.prefix}{item.value}{item.suffix}
                  </div>

                  {/* Label */}
                  <span className="font-mono text-xs uppercase tracking-wider text-sky-400 font-bold block mt-3">
                    {item.label}
                  </span>
                </div>

                {/* Compressed Description (1 sentence) */}
                <div className="mt-4 pt-3 border-t border-[#1a283e]/80">
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
