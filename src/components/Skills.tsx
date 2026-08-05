import { ShieldCheck, Target, Laptop, Settings, BookOpen, Layers } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";

export default function Skills() {
  const { skills } = portfolioData;

  const iconMapping: { [key: string]: any } = {
    Manajemen: Target,
    Bisnis: ShieldCheck,
    Teknologi: Laptop,
    "Artificial Intelligence": Settings,
    Penelitian: BookOpen,
  };

  return (
    <section id="skills" className="relative py-24 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider text-indigo-800 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200 shadow-sm">
            STRUKTUR KOMPETENSI
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kombinasi Keahlian & Spesialisasi Kerja
          </h2>
          <p className="mt-4 text-base text-slate-700 font-normal">
            Tanpa persentase penguasaan semu. Matriks kompetensi berikut dirinci berdasarkan kepasihan operasional lapangan dan pembuktian karya nyata.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skill Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, index) => {
            const IconComponent = iconMapping[group.category] || Layers;
            
            const isWide = index === 3 || index === 4;
            const spanClass = isWide 
              ? "lg:col-span-2 md:col-span-2" 
              : "lg:col-span-1 md:col-span-1";

            return (
              <motion.div
                key={group.category}
                id={`skill-card-${group.category.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group p-8 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col justify-between ${spanClass} hover:border-indigo-300 transition-all duration-200 shadow-sm text-left`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono font-bold text-indigo-800 uppercase tracking-wider">KATEGORI PILAR</span>
                      <h3 className="text-slate-900 text-lg font-extrabold tracking-wide mt-0.5">
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 mt-4 leading-relaxed border-l-2 border-indigo-300 pl-3 font-medium">
                    {group.description}
                  </p>
                </div>

                {/* Sub-Badges Matrix */}
                <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase border border-slate-300 bg-white text-slate-800 shadow-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
