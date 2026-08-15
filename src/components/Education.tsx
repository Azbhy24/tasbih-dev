import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  FileText, 
  Library, 
  CheckCircle2, 
  Building2, 
  Calendar,
  Sparkles
} from "lucide-react";
import { motion } from "motion/react";

export default function Education() {
  const academicHighlights = [
    {
      title: "Tata Kelola & Administrasi Madrasah",
      desc: "Manajemen kelembagaan, pembagian struktur tata usaha, standarisasi dokumen operasional sekolah/madrasah."
    },
    {
      title: "Sistem Informasi Manajemen Pendidikan (SIMP)",
      desc: "Pengelolaan basis data santri/siswa, pelaporan EMIS/Dapodik, dan integrasi teknologi dalam birokrasi pendidikan."
    },
    {
      title: "Manajemen Kurikulum & Supervisi Pendidikan",
      desc: "Perencanaan agenda akademik, monitoring pelaksanaan kurikulum, dan evaluasi berkala mutu proses pembelajaran."
    },
    {
      title: "Kepemimpinan & Komunikasi Organisasi",
      desc: "Keterampilan koordinasi tim, surat-menyurat resmi, notulensi rapat, dan hubungan masyarakat kelembagaan."
    }
  ];

  return (
    <section 
      id="education" 
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-stone-200/80"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-200/80 pb-4 mb-12 text-left">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-1">
            <span className="text-blue-600 font-bold">04 /</span>
            <span className="text-stone-900 font-semibold tracking-wider uppercase">LATAR BELAKANG PENDIDIKAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 tracking-tight">
            Academic Foundation.
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-500 font-mono mt-2 sm:mt-0 max-w-xs text-left sm:text-right">
          Fondasi keilmuan formal dalam bidang manajemen dan administrasi institusi pendidikan Islam.
        </p>
      </div>

      {/* Main Educational Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
        
        {/* Left: Monumental Degree Block (6 cols) */}
        <div className="lg:col-span-6 bg-stone-900 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
          
          {/* Subtle background ambient graphic */}
          <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded bg-blue-500/20 text-blue-300 text-xs font-mono font-bold uppercase border border-blue-400/30">
                Strata Satu (S1) Resmi
              </span>
              <span className="text-xs font-mono text-stone-400">2022 — 2026</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                S1 Manajemen Pendidikan Islam
              </h3>
              <p className="text-base text-blue-300 font-medium">
                Fakultas Tarbiyah · IAIN Parepare
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
              Mempelajari prinsip manajemen strategis madrasah, kepemimpinan pendidikan Islam, pengarsipan tata usaha, perencanaan anggaran sekolah, serta pengawasan mutu pendidikan berkelanjutan.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono relative z-10">
            <div className="flex items-center gap-2 text-stone-300">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>Institut Agama Islam Negeri Parepare</span>
            </div>
            <span className="text-emerald-400 font-semibold bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800/80">
              Fresh Graduate · 2026
            </span>
          </div>

        </div>

        {/* Right: Academic Focus / Coursework Areas (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-3">
          <div className="space-y-1">
            <h4 className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider">
              Bidang Kompetensi & Studi Utama:
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 h-full">
            {academicHighlights.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/90 shadow-2xs hover:border-stone-300 transition-colors flex flex-col justify-between space-y-2"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-600">0{idx + 1}.</span>
                    <h5 className="text-xs sm:text-sm font-bold text-stone-900 leading-tight">
                      {item.title}
                    </h5>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                <div className="flex items-center gap-1 text-[11px] font-mono text-stone-400 pt-1">
                  <CheckCircle2 className="w-3 h-3 text-blue-500" />
                  <span>Kompetensi Terapan</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
