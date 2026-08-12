import { useState, useEffect } from "react";
import { Users, ShoppingBag, Terminal, Calendar, MapPin, CheckCircle, ChevronRight, Award, X, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;
  const [selectedType, setSelectedType] = useState<"all" | "organization" | "business" | "technology">("all");
  const [activeExpModal, setActiveExpModal] = useState<typeof experience[0] | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveExpModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const types = [
    { id: "all", label: "Semua Track", icon: Award },
    { id: "organization", label: "Kepemimpinan", icon: Users },
    { id: "business", label: "Bisnis & Ritel", icon: ShoppingBag },
    { id: "technology", label: "Teknologi", icon: Terminal },
  ];

  const filteredExperience = selectedType === "all" 
    ? experience 
    : experience.filter(item => item.type === selectedType);

  const getIcon = (type: string) => {
    switch (type) {
      case "organization": return <Users className="w-4 h-4" />;
      case "business": return <ShoppingBag className="w-4 h-4" />;
      case "technology": return <Terminal className="w-4 h-4" />;
      default: return <Award className="w-4 h-4" />;
    }
  };

  const getLabel = (type: string) => {
    switch (type) {
      case "organization": return "Kepemimpinan";
      case "business": return "Bisnis & Ritel";
      case "technology": return "Teknologi";
      default: return type;
    }
  };

  return (
    <section id="experience" className="relative py-24 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-wider text-indigo-800 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200 shadow-xs">
            RIWAYAT KARIR & PENGALAMAN
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Timeline Pengalaman & Kepemimpinan
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-700 font-normal">
            Ringkasan rekam jejak dalam memanajeri organisasi, mengasistensi operasional ritel, serta membangun solusi digital.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-12 sm:mb-16">
          {types.map((type) => {
            const Icon = type.icon;
            const isSelected = selectedType === type.id;
            return (
              <button
                key={type.id}
                id={`exp-tab-${type.id}`}
                onClick={() => setSelectedType(type.id as any)}
                className={`flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-200 border cursor-pointer active:scale-95 ${
                  isSelected 
                    ? "bg-indigo-600 text-white border-transparent shadow-xs" 
                    : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{type.label}</span>
              </button>
            );
          })}
        </div>

        {/* Timeline Summary Items */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-slate-200 pl-6 sm:pl-8 space-y-8 py-2">
            <AnimatePresence mode="popLayout">
              {filteredExperience.map((exp) => {
                return (
                  <motion.div
                    key={exp.id}
                    id={`experience-item-${exp.id}`}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.25 }}
                    className="relative group text-left"
                  >
                    {/* Timeline Dot Indicator */}
                    <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-7 h-7 rounded-full border-2 border-slate-200 bg-indigo-50 flex items-center justify-center text-indigo-600 z-20 shadow-xs">
                      {getIcon(exp.type)}
                    </div>

                    <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-slate-50 relative shadow-2xs hover:border-indigo-300 transition-all flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase font-bold tracking-wider bg-indigo-100 text-indigo-800 border border-indigo-200">
                            {getLabel(exp.type)}
                          </span>

                          <span className="flex items-center gap-1 text-xs text-slate-600 font-mono font-semibold">
                            <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                            <span>{exp.period}</span>
                          </span>
                        </div>

                        <h3 className="mt-2.5 text-slate-900 text-lg sm:text-xl font-extrabold tracking-tight">
                          {exp.role}
                        </h3>

                        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-700 font-medium">
                          <span className="font-bold text-slate-900">{exp.organization}</span>
                          {exp.location && (
                            <span className="flex items-center gap-1 text-slate-500">
                              <MapPin className="w-3 h-3" />
                              <span>{exp.location}</span>
                            </span>
                          )}
                        </div>

                        {/* 1-sentence ringkasan pendek */}
                        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-2">
                          {exp.responsibilities[0]}
                        </p>
                      </div>

                      {/* Detail CTA Button */}
                      <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-500 font-medium">
                          {exp.responsibilities.length} Poin Kontribusi & Metric
                        </span>

                        <button
                          id={`btn-detail-exp-${exp.id}`}
                          onClick={() => setActiveExpModal(exp)}
                          className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 hover:border-indigo-500 hover:bg-indigo-50 text-indigo-800 font-extrabold text-xs tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                        >
                          <Eye className="w-3.5 h-3.5 text-indigo-600" />
                          <span>Lihat Detail</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Experience Detail Modal */}
      <AnimatePresence>
        {activeExpModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveExpModal(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 text-left z-10 my-auto max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase font-bold tracking-wider bg-indigo-100 text-indigo-800 border border-indigo-200 mb-2">
                    {getLabel(activeExpModal.type)}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {activeExpModal.role}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-700 font-medium">
                    <span className="font-bold text-slate-900">{activeExpModal.organization}</span>
                    {activeExpModal.location && (
                      <span className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{activeExpModal.location}</span>
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-indigo-700 font-mono font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{activeExpModal.period}</span>
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveExpModal(null)}
                  className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Metrics (if available) */}
              {activeExpModal.metrics && activeExpModal.metrics.length > 0 && (
                <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {activeExpModal.metrics.map((metric) => (
                    <div key={metric.label} className="text-left">
                      <span className="block font-mono text-lg font-black text-indigo-700 leading-tight">
                        {metric.value}
                      </span>
                      <span className="text-[10px] uppercase font-mono text-slate-500 font-bold block mt-0.5">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Full Responsibilities */}
              <div className="mt-6">
                <h4 className="text-slate-900 text-xs font-mono font-bold tracking-wider uppercase mb-3 flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-indigo-600" />
                  <span>Tanggung Jawab & Kontribusi Lengkap</span>
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {activeExpModal.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50/70 border border-slate-100">
                      <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Close Button */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setActiveExpModal(null)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Tutup Detail
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
