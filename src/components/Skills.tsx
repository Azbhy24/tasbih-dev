import { 
  FileSpreadsheet, 
  Layers, 
  Terminal, 
  Wrench, 
  Cpu, 
  CheckCircle,
  Database,
  Globe,
  Sparkles,
  FileCheck
} from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons: { [key: string]: any } = {
    "Administrasi & Tata Kelola": FileCheck,
    "Produktivitas & Office Suite": FileSpreadsheet,
    "Web & Digital Tools": Terminal,
    "AI-Assisted Workflow": Cpu,
  };

  return (
    <section 
      id="skills" 
      className="py-16 sm:py-24 border-t border-stone-200/90 max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="space-y-10 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/80 text-stone-700 text-xs font-mono font-semibold">
              <Wrench className="w-3.5 h-3.5 text-stone-500" />
              <span>TOOLKIT &amp; KEMAMPUAN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
              Perangkat &amp; Kemampuan Kerja.
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
              Daftar perangkat lunak, sistem administrasi, dan teknologi praktis yang saya gunakan dalam operasional sehari-hari dan penyusunan karya.
            </p>
          </div>

          <div className="text-xs font-mono text-stone-400">
            [ PRACTICAL TOOLSET ]
          </div>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((group) => {
            const Icon = categoryIcons[group.category] || Layers;

            return (
              <div
                key={group.category}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-stone-800" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 text-base tracking-tight">
                        {group.category}
                      </h3>
                      <p className="text-xs text-stone-500">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-2xl bg-stone-50/80 border border-stone-100 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                          <span className="font-semibold text-stone-900">
                            {skill.name}
                          </span>
                        </div>
                        {skill.note && (
                          <span className="text-[11px] font-mono text-stone-500 bg-white px-2 py-0.5 rounded border border-stone-200 shrink-0">
                            {skill.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
