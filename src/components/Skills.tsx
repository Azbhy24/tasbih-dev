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

  const badgeColorMapping: { [key: string]: string } = {
    Manajemen: "bg-zinc-900 text-[#F3F4F6] border-zinc-800",
    Bisnis: "bg-zinc-900 text-[#F3F4F6] border-zinc-800",
    Teknologi: "bg-zinc-900 text-[#F3F4F6] border-zinc-800",
    "Artificial Intelligence": "bg-zinc-900 text-[#F3F4F6] border-zinc-800",
    Penelitian: "bg-zinc-900 text-[#F3F4F6] border-zinc-800",
  };

  return (
    <section id="skills" className="relative py-24 border-t border-zinc-950 bg-[#09090B]">
      {/* Background visual shapes */}
      <div className="absolute top-[45%] right-0 w-[450px] h-[450px] bg-zinc-800/[0.01] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[25%] left-0 w-[450px] h-[450px] bg-zinc-850/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-widest text-zinc-450 uppercase bg-zinc-900 px-3.5 py-1.5 rounded border border-zinc-805">
            STRUKTUR KOMPETENSI
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kombinasi Keahlian & Spesialisasi Kerja
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Tanpa persentase penguasaan semu. Matriks kompetensi berikut dirinci berdasarkan kepasihan operasional lapangan dan pembuktian karya nyata.
          </p>
          <div className="w-12 h-[1px] bg-zinc-800 mx-auto mt-6" />
        </div>

        {/* Bento Skill Cards Layout with custom border-glow indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, index) => {
            const IconComponent = iconMapping[group.category] || Layers;
            const badgeColor = badgeColorMapping[group.category] || "bg-zinc-900 text-zinc-400 border-zinc-800";
            
            // Adjust card sizing for visual rhythm (make some cards span 2 columns on larger views)
            const isWide = index === 3 || index === 4; // AI and Penelitian are very comprehensive
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
                className={`group p-8 rounded-xl border border-zinc-800 bg-[#0F0F12]/60 hover:bg-zinc-900/20 flex flex-col justify-between ${spanClass} transition-all duration-300`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    {/* Unique Category Icon block */}
                    <div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-all">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase leading-none tracking-wider">PILLAR CATEGORY</span>
                      <h3 className="text-white text-base font-bold font-sans tracking-wide mt-1.5 group-hover:text-white transition-colors">
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 mt-4 leading-relaxed text-left border-l border-zinc-800 pl-3">
                    {group.description}
                  </p>
                </div>

                {/* Sub-Badges Matrix */}
                <div className="mt-8 pt-6 border-t border-zinc-850 flex flex-wrap gap-2 text-left">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded text-[10px] font-mono font-bold tracking-widest uppercase border transition-all ${badgeColor} hover:brightness-110`}
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
