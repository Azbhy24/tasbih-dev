import { Briefcase, Code2, GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function About() {
  const { bio } = portfolioData;

  const pillarIcons = [
    <Briefcase className="w-5 h-5 text-blue-600" />,
    <Code2 className="w-5 h-5 text-indigo-600" />,
    <GraduationCap className="w-5 h-5 text-emerald-600" />,
  ];

  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 border-t border-slate-200/80 max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="space-y-8 text-left">
        
        {/* Section Header & Narrative */}
        <div className="max-w-2xl space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            A little about me.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {bio.aboutBrief}
          </p>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {bio.aboutPillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {pillarIcons[idx]}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
