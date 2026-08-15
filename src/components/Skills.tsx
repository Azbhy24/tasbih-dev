import { Layers, Terminal, Wrench, Cpu } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons: { [key: string]: any } = {
    Management: Layers,
    Development: Terminal,
    Productivity: Wrench,
    AI: Cpu,
  };

  return (
    <section 
      id="skills" 
      className="py-16 sm:py-20 border-t border-slate-200/80 max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="space-y-10 text-left">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What I Work With
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Perangkat lunak, bahasa pemrograman, dan alat kerja yang saya gunakan untuk mengelola operasional serta membangun project digital.
          </p>
        </div>

        {/* 4 Skills Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group) => {
            const Icon = categoryIcons[group.category] || Layers;
            return (
              <div
                key={group.category}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-slate-700" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm tracking-tight">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-xs text-slate-600 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
