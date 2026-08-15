import { Sparkles, ArrowRight, Compass, GraduationCap, Briefcase, Code, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Currently() {
  const { currently } = portfolioData;

  const statusItems = [
    {
      icon: GraduationCap,
      label: "STATUS AKADEMIK",
      value: currently.status,
      color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    },
    {
      icon: Briefcase,
      label: "ARAH KARIR",
      value: currently.careerFocus,
      color: "text-blue-700 bg-blue-50 border-blue-200",
    },
    {
      icon: Code,
      label: "EKSPLORASI DIGITAL",
      value: currently.activeBuilding,
      color: "text-amber-700 bg-amber-50 border-amber-200",
    },
    {
      icon: MapPin,
      label: "DOMISILI & KESIAPAN",
      value: currently.location,
      color: "text-stone-700 bg-stone-100 border-stone-200",
    },
  ];

  return (
    <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 text-stone-100 shadow-xl space-y-6 text-left border border-stone-800">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                STATUS TERKINI
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Currently / Yang Sedang Dijalani
              </h3>
            </div>
          </div>

          <span className="text-xs font-mono text-stone-400">
            [ UPDATE: FRESH GRADUATE 2026 ]
          </span>
        </div>

        {/* 4 Status Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {statusItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-2 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-stone-400 uppercase">
                    {item.label}
                  </span>
                  <div className={`p-1.5 rounded-lg border ${item.color}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-medium">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-stone-400 font-mono">
          <p>
            *Selalu terbuka untuk berdiskusi seputar pengelolaan administrasi sekolah atau peluang kerja sama.
          </p>
          <a
            href="https://github.com/azbhy24"
            target="_blank"
            rel="noreferrer"
            className="self-start sm:self-auto shrink-0 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-semibold inline-flex items-center gap-2 transition-colors border border-stone-700"
          >
            <span>Kunjungi GitHub (@azbhy24)</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
