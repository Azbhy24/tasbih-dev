import { useState, useEffect } from "react";
import { Users, ShoppingBag, Terminal, Calendar, MapPin, CheckCircle, ChevronRight, Award, X, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;
  const [selectedType, setSelectedType] = useState<"all" | "organization" | "business" | "technology">("all");
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
    <section id="experience" className="relative py-24 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-wider text-indigo-300 uppercase bg-indigo-950/80 px-3.5 py-1.5 rounded-full border border-indigo-500/30 shadow-[0_0_12px_rgba(99,102,241,0.2)]">
            RIWAYAT KARIR & PENGALAMAN
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
            Timeline Pengalaman & Kepemimpinan
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-normal">
            Klik entri di bawah ini untuk melihat detail lengkap tugas dan kontribusi.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
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
                    ? "bg-indigo-600 text-white border-indigo-400/50 shadow-[0_0_15px_rgba(99,102,241,0.4)]" 
                    : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white hover:border-slate-700"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{type.label}</span>
              </button>
            );
          })}
        </div>

        {/* Timeline Summary Items with Accordion Expansion */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-slate-800 pl-6 sm:pl-8 space-y-6 py-2">
            <AnimatePresence mode="popLayout">
              {filteredExperience.map((exp) => {
                const isExpanded = !!expandedItems[exp.id];

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
                    <div className={`absolute -left-[33px] sm:-left-[41px] top-4 w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center z-20 shadow-md ${
                      isExpanded
                        ? "bg-indigo-600 text-white border-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                        : "bg-slate-900 text-indigo-400 border-slate-700"
                    }`}>
                      {getIcon(exp.type)}
                    </div>

                    <div className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                      isExpanded
                        ? "border-indigo-500/60 bg-slate-900/90 shadow-[0_0_25px_rgba(99,102,241,0.2)]"
                        : "border-slate-800 bg-slate-900/80 hover:border-indigo-500/40 hover:-translate-y-1 hover:shadow-xl"
                    }`}>
                      {/* Accordion Header (Always Visible) */}
                      <button
                        onClick={() => toggleItem(exp.id)}
                        className="w-full text-left cursor-pointer group/hdr"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase font-bold tracking-wider bg-indigo-950/80 text-indigo-300 border border-indigo-500/30">
                            {getLabel(exp.type)}
                          </span>

                          <span className="flex items-center gap-1 text-xs text-slate-400 font-mono font-semibold">
                            <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                            <span>{exp.period}</span>
                          </span>
                        </div>

                        <div className="mt-2 flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-white text-base sm:text-lg font-extrabold tracking-tight group-hover/hdr:text-indigo-300 transition-colors">
                              {exp.role}
                            </h3>

                            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 font-medium">
                              <span className="font-bold text-slate-200">{exp.organization}</span>
                              {exp.location && (
                                <span className="flex items-center gap-1 text-slate-400">
                                  <MapPin className="w-3 h-3 text-indigo-400" />
                                  <span>{exp.location}</span>
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Toggle Icon Indicator */}
                          <div className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shrink-0 ${
                            isExpanded
                              ? "bg-indigo-600 text-white border-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.4)]"
                              : "bg-slate-950 text-slate-300 border-slate-800 group-hover/hdr:border-indigo-500/50 group-hover/hdr:text-white"
                          }`}>
                            <span>{isExpanded ? "Tutup" : "Lihat Detail"}</span>
                            <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isExpanded ? "rotate-90" : ""
                            }`} />
                          </div>
                        </div>
                      </button>

                      {/* Expandable Accordion Body */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden border-t border-slate-800 mt-4 pt-4"
                          >
                            {/* Metrics (if available) */}
                            {exp.metrics && exp.metrics.length > 0 && (
                              <div className="mb-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {exp.metrics.map((metric) => (
                                  <div key={metric.label} className="text-left">
                                    <span className="block font-mono text-base font-black text-indigo-400 leading-tight">
                                      {metric.value}
                                    </span>
                                    <span className="text-[10px] uppercase font-mono text-slate-400 font-bold block mt-0.5">
                                      {metric.label}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Full Responsibilities */}
                            <div>
                              <h4 className="text-indigo-300 text-[11px] font-mono font-bold tracking-wider uppercase mb-2.5 flex items-center gap-1.5">
                                <ChevronRight className="w-3.5 h-3.5 text-indigo-400" />
                                <span>Tanggung Jawab & Kontribusi Lengkap</span>
                              </h4>
                              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                                {exp.responsibilities.map((resp, rIdx) => (
                                  <li key={rIdx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950 border border-slate-800/80">
                                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
