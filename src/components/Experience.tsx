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
    <section id="experience" className="relative py-24 border-t border-indigo-950/40 bg-[#030306]">
      {/* Background decorations */}
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-indigo-500/[0.015] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[400px] h-[400px] bg-indigo-500/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-widest text-indigo-300 uppercase bg-zinc-950 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
            RIWAYAT KARIR
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Timeline Pengalaman & Kepemimpinan
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Jejak keteladanan dalam memanajeri alumni regional, mengasistensi operasional ritel, serta membangun solusi mandiri berbasis web.
          </p>
          <div className="w-12 h-[1px] bg-indigo-500/20 mx-auto mt-6" />
        </div>

        {/* Tab Controls - with crisp rounded-full pill buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {types.map((type) => {
            const Icon = type.icon;
            const isSelected = selectedType === type.id;
            return (
              <button
                key={type.id}
                id={`exp-tab-${type.id}`}
                onClick={() => setSelectedType(type.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 border cursor-pointer active:scale-95 ${
                  isSelected 
                    ? "bg-indigo-600 text-white border-transparent font-bold shadow-lg shadow-indigo-600/15" 
                    : "bg-zinc-950/40 text-zinc-550 border-indigo-500/10 hover:text-white hover:border-indigo-500/25"
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
          <div className="relative border-l border-zinc-855 pl-6 sm:pl-8 space-y-12 py-2">
            <AnimatePresence mode="popLayout">
              {filteredExperience.map((exp, idx) => {
                const colors = {
                  organization: { border: "border-indigo-500/10 hover:border-indigo-500/35", glow: "from-indigo-500/5 to-transparent", bullet: "text-indigo-400 border-indigo-500/20 bg-indigo-950/10", metricValue: "text-indigo-400" },
                  business: { border: "border-indigo-500/10 hover:border-indigo-500/35", glow: "from-indigo-500/5 to-transparent", bullet: "text-indigo-400 border-indigo-500/20 bg-indigo-950/10", metricValue: "text-indigo-400" },
                  technology: { border: "border-indigo-500/10 hover:border-indigo-500/35", glow: "from-indigo-500/5 to-transparent", bullet: "text-indigo-400 border-indigo-500/20 bg-indigo-950/10", metricValue: "text-indigo-400" },
                };
                const spec = colors[exp.type as keyof typeof colors] || { border: "border-indigo-500/10 hover:border-indigo-500/35", glow: "from-indigo-500/5 to-transparent", bullet: "text-indigo-400 border-indigo-500/20 bg-indigo-950/10", metricValue: "text-indigo-400" };

                return (
                  <motion.div
                    key={exp.id}
                    id={`experience-item-${exp.id}`}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.4 }}
                    className="relative group text-left"
                  >
                    {/* Timeline Dot Indicator */}
                    <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${spec.bullet} z-20 shadow-md`}>
                      {getIcon(exp.type)}
                    </div>

                    <div className={`p-8 rounded-xl border ${spec.border} bg-zinc-950/40 transition-all duration-300 relative overflow-hidden shadow-2xl`}>
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${spec.glow} blur-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 relative z-10">
                        <div>
                          {/* Track Badge Indicator */}
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[9px] font-mono border uppercase font-bold tracking-widest ${getBadgeColor(exp.type)}`}>
                            {exp.type} Tracker
                          </span>

                          <h3 className="mt-3 text-white text-xl font-bold tracking-tight">
                            {exp.role}
                          </h3>

                          {/* Organization and specifics */}
                          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-zinc-400 font-sans">
                            <span className="font-semibold text-zinc-350">
                              {exp.organization}
                            </span>
                            {exp.location && (
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                                <span>{exp.location}</span>
                              </span>
                            )}
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                              <span>{exp.period}</span>
                            </span>
                          </div>
                        </div>

                        {/* Performance metrics inside card */}
                        {exp.metrics && exp.metrics.length > 0 && (
                          <div className="flex flex-row sm:flex-col gap-2 shrink-0 border-t sm:border-t-0 sm:border-l border-zinc-900 pt-4 sm:pt-0 sm:pl-4">
                            {exp.metrics.map((metric) => (
                              <div key={metric.label} className="text-left">
                                <span className={`block font-mono text-base font-extrabold leading-none ${spec.metricValue}`}>
                                  {metric.value}
                                </span>
                                <span className="text-[9px] uppercase font-mono text-zinc-500 mt-1 block tracking-wider">
                                  {metric.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Resposibilities bullet statements */}
                      <div className="mt-6 border-t border-indigo-950/40 pt-6 relative z-10">
                        <h4 className="text-white text-xs font-mono font-bold tracking-widest uppercase mb-3 flex items-center gap-1">
                          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                          Tanggung Jawab & Kontribusi
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-450 font-sans leading-relaxed">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2.5">
                              <CheckCircle className="w-4 h-4 text-zinc-550 shrink-0 mt-0.5" />
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
