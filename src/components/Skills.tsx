import { useState } from "react";
import { Laptop, Server, FileText, Sparkles, ChevronDown, ChevronUp, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolio";

export default function Skills() {
  const { skills } = portfolioData;

  // Track expanded categories. Default: all collapsed for clean scan view.
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const iconMapping: { [key: string]: any } = {
    "Frontend & Web Engineering": Laptop,
    "Backend, Cloud & Mobile Packaging": Server,
    "Digital Administrasi & Productivity": FileText,
    "AI & Modern Development": Sparkles,
  };

  return (
    <section id="skills" className="relative py-24 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-wider text-indigo-800 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200 shadow-xs">
            STRUKTUR KOMPETENSI
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Kombinasi Keahlian & Spesialisasi Kerja
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-700 font-normal">
            Pilih pilar kategori di bawah ini untuk melihat rincian keahlian dan kepasihan operasional.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Compact Grid Accordion Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {skills.map((group, index) => {
            const IconComponent = iconMapping[group.category] || Layers;
            const isExpanded = !!expandedCategories[group.category];

            return (
              <motion.div
                key={group.category}
                id={`skill-card-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isExpanded
                    ? "border-indigo-300 bg-slate-50 shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {/* Header Button */}
                <button
                  id={`skill-category-toggle-${index}`}
                  onClick={() => toggleCategory(group.category)}
                  className="w-full p-5 flex items-center justify-between text-left cursor-pointer gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isExpanded
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "bg-indigo-50 text-indigo-700 border border-indigo-200"
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono font-bold text-indigo-800 uppercase tracking-wider">
                        {group.skills.length} MATERI SKILL
                      </span>
                      <h3 className="text-slate-900 text-base font-extrabold tracking-tight mt-0.5 group-hover:text-indigo-600 transition-colors">
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                    isExpanded ? "bg-indigo-100 text-indigo-800" : "bg-slate-100 text-slate-500"
                  }`}>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expandable Skills Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-slate-200/80 bg-white/80"
                    >
                      <div className="p-5 text-left">
                        <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4 border-l-2 border-indigo-400 pl-3">
                          {group.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {group.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase border border-slate-200 bg-slate-50 text-slate-800 shadow-2xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
