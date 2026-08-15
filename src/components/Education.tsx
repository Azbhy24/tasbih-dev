import { GraduationCap, Award, BookOpen, CheckCircle, Sparkles, Building2, ScrollText } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section 
      id="education" 
      className="py-16 sm:py-24 border-t border-stone-200/90 max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="space-y-10 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/80 text-stone-700 text-xs font-mono font-semibold">
              <GraduationCap className="w-3.5 h-3.5 text-stone-500" />
              <span>PENDIDIKAN TINGGI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
              Fondasi Akademik &amp; Keilmuan.
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
              Menempuh studi S1 Manajemen Pendidikan Islam untuk mendalami tata kelola institusi pendidikan, kepemimpinan madrasah, dan administrasi kelembagaan.
            </p>
          </div>

          <div className="text-xs font-mono text-stone-400">
            [ S1 MPI • 2022 — 2026 ]
          </div>
        </div>

        {/* Education Main Bento Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Institution Card (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 leading-tight">
                      {education.institution}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 font-medium mt-0.5">
                      {education.degree} • {education.faculty}
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-mono font-bold">
                  {education.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                Program Studi Manajemen Pendidikan Islam membekali saya dengan pemahaman mendalam tentang tata kelola institusi pendidikan Islam, administrasi madrasah, pengarsipan dokumen resmi, serta integrasi teknologi dalam manajemen mutu sekolah.
              </p>

              {/* Key Courses Covered */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-bold block">
                  Kajian Keilmuan Utama:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {education.keyCourses.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 rounded-xl bg-stone-50 border border-stone-200/80 text-stone-700 text-xs font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-mono">
              <span>📍 {education.location}</span>
              <span className="text-emerald-700 font-semibold">Status: Lulusan 2026</span>
            </div>
          </div>

          {/* Academic Highlights & Conferences (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-600" />
                <h4 className="text-sm font-bold text-stone-900 font-mono uppercase tracking-wider">
                  Capaian &amp; Pengalaman Ilmiah
                </h4>
              </div>

              <div className="space-y-3 pt-1">
                {education.highlights.map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-stone-900 text-xs sm:text-sm">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-stone-600 border border-stone-200">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Note on Career Readiness in Education */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-emerald-900 text-xs space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>Kesiapan Kerja di Lingkungan Pendidikan</span>
              </p>
              <p className="text-[11px] text-emerald-800 leading-relaxed">
                Siap berkontribusi langsung pada posisi tata usaha madrasah/sekolah, pengelolaan naskah jurnal ilmiah, atau administrasi kantor kelembagaan.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
