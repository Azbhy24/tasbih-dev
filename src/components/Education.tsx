import { GraduationCap, Award, BookOpen } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section 
      id="education" 
      className="py-16 sm:py-20 border-t border-slate-200/80 max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="space-y-8 text-left">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Education
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Fondasi akademik dan pengalaman kepengurusan naskah ilmiah.
          </p>
        </div>

        {/* Education Main Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {education.institution}
                </h3>
                <p className="text-sm text-slate-600 font-medium">
                  {education.degree}
                </p>
              </div>
            </div>
            <span className="inline-flex self-start sm:self-auto px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
              {education.period}
            </span>
          </div>

          {/* Academic Highlights */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Pencapaian Akademik &amp; Pengalaman Terkait
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {education.highlights.map((item) => (
                <div 
                  key={item.title}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-blue-600 shrink-0" />
                      {item.title}
                    </span>
                    <span className="text-xs font-medium text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
