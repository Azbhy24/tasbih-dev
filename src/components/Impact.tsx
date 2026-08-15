import { portfolioData } from "../data/portfolio";
import { TrendingUp, Users, Code, Globe2 } from "lucide-react";

export default function Impact() {
  const { stats } = portfolioData;

  const iconMap: { [key: string]: any } = {
    Package: TrendingUp,
    Users: Users,
    Code: Code,
    Award: Globe2,
  };

  return (
    <section 
      id="impact" 
      className="relative py-16 sm:py-24 md:py-28 border-t border-[#1a283e] bg-[#050a12] text-[#e2e8f0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-[#1a283e] pb-6 sm:pb-8 mb-10 sm:mb-14 text-left">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-sky-400 font-bold bg-[#0c182a] border border-sky-500/30 px-2 py-0.5 rounded">
                CH 04 / DATA & CAPAIAN
              </span>
              <span className="h-px w-6 sm:w-8 bg-[#1a283e]" />
            </div>
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-snug"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Statistik Kinerja & Verifikasi Angka
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md font-normal">
            Metrik riil yang merefleksikan skala operasional ritel, kepemimpinan organisasi, dan sistem perangkat lunak yang telah aktif.
          </p>
        </div>

        {/* 4-Grid Big Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item) => {
            const Icon = iconMap[item.icon] || TrendingUp;
            return (
              <div
                key={item.id}
                id={`stat-card-${item.id}`}
                className="border border-[#1a283e] bg-[#0c182a]/50 rounded-xl p-5 sm:p-7 flex flex-col justify-between text-left hover:border-sky-500/50 transition-colors shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#1a283e] pb-3 mb-4">
                    <span className="font-mono text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                      {item.label}
                    </span>
                    <Icon className="w-4 h-4 text-sky-400" />
                  </div>

                  <div 
                    className="text-4xl sm:text-5xl font-black text-white tracking-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.prefix}{item.value}{item.suffix}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1a283e]">
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
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
