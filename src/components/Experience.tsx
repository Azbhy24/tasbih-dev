import { Calendar, Briefcase, Users, Building, FileText } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  const roleIcons: { [key: string]: any } = {
    "exp-1": Briefcase,
    "exp-2": Users,
    "exp-3": Building,
    "exp-4": FileText,
  };

  return (
    <section 
      id="experience" 
      className="py-16 sm:py-24 border-t border-slate-200/80 max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="space-y-10 text-left">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Experience &amp; Activities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Rekam jejak praktis dalam administrasi, operasional ritel, kepemimpinan alumni, dan riset lapangan.
          </p>
        </div>

        {/* Timeline Grid / Stack */}
        <div className="space-y-4">
          {experience.map((item) => {
            const Icon = roleIcons[item.id] || Briefcase;
            return (
              <div
                key={item.id}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col sm:flex-row sm:items-start justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-slate-700" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 tracking-tight">
                      {item.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-500">
                      {item.organization}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 pt-1.5 leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{item.period}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
