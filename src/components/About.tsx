import { 
  BookOpen, 
  Layers, 
  Code2, 
  Briefcase, 
  CheckCircle, 
  Sparkles, 
  GraduationCap,
  ShieldCheck,
  FileCheck2,
  Users
} from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function About() {
  const { bio, education } = portfolioData;

  return (
    <section 
      id="about" 
      className="py-16 sm:py-24 border-t border-stone-200/90 max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="space-y-10 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/80 text-stone-700 text-xs font-mono font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-stone-500" />
              <span>TENTANG SAYA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
              Profil, Latar Belakang &amp; Nilai Kerja.
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
              Kombinasi antara pemahaman tata kelola pendidikan Islam dan kemampuan praktis membangun alat bantu digital.
            </p>
          </div>

          <div className="hidden sm:block text-right font-mono text-xs text-stone-400">
            [ S1 MPI • IAIN PAREPARE ]
          </div>
        </div>

        {/* Bento Grid: Visual Story Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Bento Card 1: Narrative & Core Philosophy (7 Cols) */}
          <div className="md:col-span-7 p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200/70">
                  Latar Belakang Akademik
                </span>
                <span className="text-xs font-mono text-stone-400">2022 — 2026</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                Fokus pada Administrasi yang Tertib dan Sistem Informasi yang Mudah Digunakan.
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed font-normal">
                {bio.aboutBrief}
              </p>

              <p className="text-sm text-stone-600 leading-relaxed font-normal">
                Bagi saya, kerapian administrasi adalah pondasi keberhasilan organisasi—baik di lingkungan madrasah, lembaga pendidikan, maupun unit usaha. Ketika data tertata dan alur kerja jelas, pelayanan dan pengambilan keputusan menjadi jauh lebih cepat.
              </p>
            </div>

            {/* Micro Badges inside Card */}
            <div className="pt-4 border-t border-stone-100 grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-100 space-y-0.5">
                <span className="font-mono text-[10px] text-stone-400 uppercase">Institusi</span>
                <p className="font-semibold text-stone-800">IAIN Parepare</p>
              </div>
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-100 space-y-0.5">
                <span className="font-mono text-[10px] text-stone-400 uppercase">Status</span>
                <p className="font-semibold text-stone-800">Fresh Graduate</p>
              </div>
            </div>
          </div>

          {/* Bento Card 2: 3 Pillars Summary (5 Cols) */}
          <div className="md:col-span-5 p-6 sm:p-7 rounded-3xl bg-stone-900 text-stone-100 shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  Karakter &amp; Keunggulan
                </span>
                <Sparkles className="w-4 h-4 text-emerald-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Tiga Pilar Pendekatan Kerja
              </h3>

              <div className="space-y-3 pt-1">
                {bio.aboutPillars.map((pillar) => (
                  <div 
                    key={pillar.id}
                    className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/80 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-200">
                        {pillar.title}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/50">
                        {pillar.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 text-[11px] font-mono text-stone-400">
              *Teknologi sebagai alat percepatan, bukan sekadar teori.
            </div>
          </div>

          {/* Bento Card 3: Educational Context & Understanding (6 Cols) */}
          <div className="md:col-span-6 p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="text-base font-bold text-stone-900">
                  Pemahaman Konteks Madrasah &amp; Sekolah
                </h4>
                <p className="text-xs text-stone-500 font-mono">
                  Kurikulum • Tata Kelola • Kelembagaan Islam
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Melalui perkuliahan Manajemen Pendidikan Islam di IAIN Parepare, saya mempelajari struktur kepemimpinan madrasah, administrasi kurikulum, tata kelola sarana prasarana, serta manajemen pendidik dan tenaga kependidikan.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {["SIM-Pendidikan", "Tata Kelola Madrasah", "Arsip OJS", "Korespondensi"].map((tag) => (
                <span 
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 text-xs font-mono font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Card 4: Practical Real-World Problem Solving (6 Cols) */}
          <div className="md:col-span-6 p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <Code2 className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <h4 className="text-base font-bold text-stone-900">
                  Kekuatan Digital yang Mandiri
                </h4>
                <p className="text-xs text-stone-500 font-mono">
                  Prototyping • Otomasi Kasir • Al-Qur'an Web
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Saya tidak hanya merancang konsep di atas kertas, tetapi juga mampu membuat prototipe aplikasi web mandiri untuk menyelesaikan masalah nyata (seperti kasir toko sembako dan aplikasi baca Al-Qur'an ramah ponsel).
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {["React + Vite", "Tailwind CSS", "Firebase POS", "Capacitor Mobile"].map((tag) => (
                <span 
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 text-xs font-mono font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
