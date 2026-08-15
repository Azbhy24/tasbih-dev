import { Sparkles, BookOpen, Briefcase, GraduationCap, Code2 } from "lucide-react";

export default function Currently() {
  const currentActivities = [
    {
      label: "EDUCATION",
      icon: GraduationCap,
      status: "Fresh Graduate S1 MPI IAIN Parepare",
      desc: "Menyelesaikan masa perkuliahan dan berfokus pada transisi ke dunia profesional.",
      color: "text-blue-600",
      dot: "bg-blue-600"
    },
    {
      label: "WORK",
      icon: Briefcase,
      status: "Siap Berkontribusi di Bidang Administrasi / Madrasah",
      desc: "Terbuka untuk posisi staf administrasi, operator madrasah, dan tata kelola pendidikan.",
      color: "text-emerald-600",
      dot: "bg-emerald-600"
    },
    {
      label: "LEARNING",
      icon: BookOpen,
      status: "Manajemen Tata Kelola & Sistem Informasi Sekolah",
      desc: "Memperdalam standarisasi administrasi madrasah digital dan efisiensi birokrasi.",
      color: "text-purple-600",
      dot: "bg-purple-600"
    },
    {
      label: "BUILDING",
      icon: Code2,
      status: "NgajiKu v2 & Otomasi Administrasi",
      desc: "Mengembangkan fitur pencatatan hafalan santri dan sistem rekapitulasi data ringan.",
      color: "text-amber-600",
      dot: "bg-amber-600"
    }
  ];

  return (
    <section 
      id="currently" 
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-stone-200/80"
    >
      {/* Editorial Banner */}
      <div className="bg-stone-100/90 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-stone-300/80 text-left space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              <span className="text-xs font-mono font-bold tracking-widest text-stone-900 uppercase">
                CURRENT STATUS · 2026
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-stone-900">
              “Saya baru menyelesaikan S1 Manajemen Pendidikan Islam dan sedang memulai perjalanan profesional.”
            </h3>
          </div>

          <div className="px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-xs font-mono text-stone-600 shrink-0 self-start sm:self-auto">
            Status: <span className="text-emerald-700 font-bold">Aktif & Siap Kerja</span>
          </div>
        </div>

        {/* 4 Status Streams (Editorial Row, Not Repetitive Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentActivities.map((act) => {
            const Icon = act.icon;
            return (
              <div key={act.label} className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${act.dot}`} />
                  <span className="text-xs font-mono font-bold tracking-wider text-stone-900">
                    {act.label}
                  </span>
                </div>
                <p className="text-xs font-bold text-stone-800 leading-snug">
                  {act.status}
                </p>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {act.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
