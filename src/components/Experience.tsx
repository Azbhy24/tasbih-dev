import { useState } from "react";
import { Users, ShoppingBag, Terminal, Calendar, MapPin, CheckCircle, ChevronRight, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;
  const [selectedType, setSelectedType] = useState<"all" | "organization" | "business" | "technology">("all");

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

  const getBadgeColor = (type: string) => {
    return "bg-indigo-950/20 text-indigo-300 border-indigo-500/15";
  };

  return (
    <section id="experience" className="relative py-24 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider text-indigo-800 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200 shadow-sm">
            RIWAYAT KARIR & PENGALAMAN
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Timeline Pengalaman & Kepemimpinan
          </h2>
          <p className="mt-4 text-base text-slate-700 font-normal">
            Jejak keteladanan dalam memanajeri alumni regional, mengasistensi operasional ritel, serta membangun solusi mandiri berbasis web.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {types.map((type) => {
            const Icon = type.icon;
            const isSelected = selectedType === type.id;
            return (
              <button
                key={type.id}
                id={`exp-tab-${type.id}`}
                onClick={() => setSelectedType(type.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 border cursor-pointer active:scale-95 ${
                  isSelected 
                    ? "bg-indigo-600 text-white border-transparent shadow-sm" 
                    : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{type.label}</span>
              </button>
            );
          })}
        </div>

        {/* Timeline Content items */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-slate-200 pl-6 sm:pl-8 space-y-10 py-2">
            <AnimatePresence mode="popLayout">
              {filteredExperience.map((exp, idx) => {
                return (
                  <motion.div
                    key={exp.id}
                    id={`experience-item-${exp.id}`}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.3 }}
                    className="relative group text-left"
                  >
                    {/* Timeline Dot Indicator */}
                    <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-7 h-7 rounded-full border-2 border-slate-200 bg-indigo-50 flex items-center justify-center text-indigo-600 z-20 shadow-sm">
                      {getIcon(exp.type)}
                    </div>

                    <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 relative shadow-sm hover:border-indigo-300 transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 relative z-10">
                        <div>
                          {/* Track Badge */}
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono border uppercase font-bold tracking-wider bg-indigo-100 text-indigo-800 border-indigo-200">
                            {exp.type}
                          </span>

                          <h3 className="mt-3 text-slate-900 text-xl font-extrabold tracking-tight">
                            {exp.role}
                          </h3>

                          {/* Organization and specifics */}
                          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-700 font-sans font-medium">
                            <span className="font-bold text-slate-900">
                              {exp.organization}
                            </span>
                            {exp.location && (
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                                <span>{exp.location}</span>
                              </span>
                            )}
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-slate-500" />
                              <span>{exp.period}</span>
                            </span>
                          </div>
                        </div>

                        {/* Performance metrics inside card */}
                        {exp.metrics && exp.metrics.length > 0 && (
                          <div className="flex flex-row sm:flex-col gap-2 shrink-0 border-t sm:border-t-0 sm:border-l border-slate-200 pt-4 sm:pt-0 sm:pl-4">
                            {exp.metrics.map((metric) => (
                              <div key={metric.label} className="text-left">
                                <span className="block font-mono text-base font-extrabold leading-none text-indigo-700">
                                  {metric.value}
                                </span>
                                <span className="text-[10px] uppercase font-mono text-slate-500 mt-1 block font-semibold">
                                  {metric.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Responsibilities bullet statements */}
                      <div className="mt-6 border-t border-slate-200 pt-5 relative z-10">
                        <h4 className="text-slate-900 text-xs font-mono font-bold tracking-wider uppercase mb-3 flex items-center gap-1">
                          <ChevronRight className="w-3.5 h-3.5 text-indigo-600" />
                          Tanggung Jawab & Kontribusi
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-sans leading-relaxed font-normal">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2.5">
                              <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
