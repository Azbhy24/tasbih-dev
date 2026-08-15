import { useState } from "react";
import { 
  Calendar, 
  Briefcase, 
  Users, 
  Building, 
  FileText, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  FileCheck2,
  Layers
} from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { ExperienceData } from "../types";

export default function Experience() {
  const { experience } = portfolioData;
  const [selectedYear, setSelectedYear] = useState<string>("ALL");
  const [activeExpId, setActiveExpId] = useState<string>(experience[0].id);

  const years = ["ALL", "2026", "2025", "2024"];

  const filteredExperience = selectedYear === "ALL" 
    ? experience 
    : experience.filter((exp) => exp.year === selectedYear);

  const roleIcons: { [key: string]: any } = {
    "exp-1": Briefcase,
    "exp-2": Users,
    "exp-3": Building,
    "exp-4": FileText,
  };

  const activeExp = experience.find((e) => e.id === activeExpId) || experience[0];

  return (
    <section 
      id="experience" 
      className="py-16 sm:py-24 border-t border-stone-200/90 max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="space-y-10 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/80 text-stone-700 text-xs font-mono font-semibold">
              <Briefcase className="w-3.5 h-3.5 text-stone-500" />
              <span>REKAM JEJAK &amp; PENGALAMAN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
              Perjalanan Nyata &amp; Aktivitas.
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
              Pengalaman nyata dalam pengelolaan administrasi naskah jurnal OJS, pembukuan ritel keluarga, kepemimpinan alumni madrasah, dan survei lapangan.
            </p>
          </div>

          {/* Interactive Year Selector Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-2xl border border-stone-200 shadow-2xs">
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  selectedYear === yr
                    ? "bg-stone-900 text-white shadow-2xs"
                    : "text-stone-500 hover:text-stone-900 hover:bg-stone-100"
                }`}
              >
                {yr === "ALL" ? "Semua Tahun" : yr}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Experience Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Timeline Cards List (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {filteredExperience.map((item) => {
              const Icon = roleIcons[item.id] || Briefcase;
              const isSelected = activeExpId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveExpId(item.id)}
                  className={`p-5 sm:p-6 rounded-3xl border transition-all cursor-pointer text-left relative overflow-hidden ${
                    isSelected
                      ? "bg-white border-stone-900 shadow-md ring-1 ring-stone-900/10"
                      : "bg-white/80 border-stone-200 hover:border-stone-300 hover:bg-white shadow-2xs"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border ${
                        isSelected 
                          ? "bg-stone-900 text-white border-stone-900" 
                          : "bg-stone-100 text-stone-700 border-stone-200"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-700 uppercase">
                            {item.year}
                          </span>
                          <span className="text-xs text-stone-400 font-mono">
                            {item.type}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-stone-900 tracking-tight">
                          {item.role}
                        </h3>

                        <p className="text-xs font-semibold text-emerald-800">
                          {item.organization}
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono text-stone-500 whitespace-nowrap bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200/60 hidden sm:inline-block">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 pt-3 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 text-[10px] font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {isSelected && (
                    <div className="absolute top-0 right-0 w-2 h-full bg-emerald-600" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Dive Journey Spotlight Box (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 p-6 rounded-3xl bg-stone-900 text-stone-100 shadow-lg space-y-5 border border-stone-800">
              
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  DETAIL CAPAIAN
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-stone-800 text-stone-300">
                  {activeExp.year}
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-bold text-white tracking-tight leading-snug">
                  {activeExp.role}
                </h4>
                <p className="text-xs text-stone-400 font-mono">
                  {activeExp.organization} • {activeExp.location}
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <span className="text-[11px] font-mono uppercase text-stone-400 font-bold block">
                  Tanggung Jawab &amp; Hasil Nyata:
                </span>
                <ul className="space-y-2 text-xs text-stone-300">
                  {activeExp.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-stone-800/90 border border-stone-700/80 space-y-1 text-xs">
                <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider block font-bold">
                  Relevansi dengan Dunia Kerja:
                </span>
                <p className="text-[11px] text-stone-300 leading-relaxed font-normal">
                  Membuktikan kesiapan dalam mengelola alur kerja administratif, validitas data, dan koordinasi tim secara bertanggung jawab.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
