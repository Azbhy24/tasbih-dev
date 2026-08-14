import { useState } from "react";
import { GraduationCap, Briefcase, FileCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import almetImage from "../assets/images/almet_mahasiswa_1781399345497.jpg";
import jasImage from "../assets/images/jas_formal_1781399324196.jpg";

export default function About() {
  const { education } = portfolioData;

  const poacModel = [
    { num: "01", phase: "Planning", title: "Perencanaan & Analisis", desc: "Membedah akar permasalahan operasional, menyusun alur kerja, dan menetapkan target luaran terukur." },
    { num: "02", phase: "Organizing", title: "Struktur & Data Terpadu", desc: "Menata sistem pencatatan, klasifikasi data, dan distribusi peran agar alur kerja terstruktur rapi." },
    { num: "03", phase: "Actuating", title: "Eksekusi & Solusi Digital", desc: "Mengembangkan aplikasi web dan alur kerja terotomatisasi untuk mempercepat tugas rutin harian." },
    { num: "04", phase: "Controlling", title: "Evaluasi & Akurasi Sistem", desc: "Melakukan verifikasi data, peninjauan hasil pembukuan, dan penyempurnaan fitur secara berkelanjutan." }
  ];

  return (
    <section id="about" className="relative py-28 sm:py-36 border-t border-neutral-800/80 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
            01 / PROFIL & PENDEKATAN KERJA
          </span>
          <span className="h-px w-12 bg-neutral-800" />
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-8">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Manajemen Pendidikan, Administrasi Terstruktur, & Rekayasa Solusi Digital.
            </h2>
          </div>
          <div className="lg:col-span-4 text-neutral-400 text-sm sm:text-base leading-relaxed font-normal">
            Latar belakang S1 Manajemen Pendidikan Islam (IAIN Parepare) membentuk cara berpikir analitis: merancang alur kerja yang rapi, transparan, dan berdaya guna bagi pengguna nyata.
          </div>
        </div>

        {/* Asymmetric 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & Dual Photos */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* Lead Narrative */}
            <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Saya memandang teknologi bukan sebagai tren sesaat, melainkan sebagai instrumen untuk menyelesaikan masalah administrasi dan operasional nyata. Keahlian saya berakar pada integrasi antara disiplin manajemen organisasi dan keterampilan teknis rekayasa web.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base">
                Dari memimpin organisasi alumni hingga mengelola pembukuan ritel harian, melakukan validasi kuesioner survei sosial-ekonomi di lapangan, hingga merancang aplikasi kasir dan Al-Qur'an digital (NgajiKu) — setiap proyek dibangun dengan fokus pada kejelasan data dan efisiensi pengguna.
              </p>
            </div>

            {/* Dual Portrait Gallery: Academic & Professional */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              {/* Photo 1: Academic & Management */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 group">
                <div className="aspect-[4/5] rounded overflow-hidden bg-neutral-950 mb-3">
                  <img
                    src={almetImage}
                    alt="Tasbih - S1 Manajemen Pendidikan Islam"
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-1">
                  <span className="font-mono text-[10px] uppercase text-emerald-400 font-bold block">
                    AKADEMIK & TATA KELOLA
                  </span>
                  <p className="text-xs font-semibold text-white mt-0.5">
                    S1 Manajemen Pendidikan Islam
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                    IAIN Parepare (2022–2026) • Presenter Konferensi Internasional ACIEM 2026.
                  </p>
                </div>
              </div>

              {/* Photo 2: Operational & Digital */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 group">
                <div className="aspect-[4/5] rounded overflow-hidden bg-neutral-950 mb-3">
                  <img
                    src={jasImage}
                    alt="Tasbih - Praktisi Operasional & Digital"
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-1">
                  <span className="font-mono text-[10px] uppercase text-neutral-400 font-bold block">
                    PRAKTISI LAPANGAN & DIGITAL
                  </span>
                  <p className="text-xs font-semibold text-white mt-0.5">
                    Operasional & Web Solutions
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                    Pencatatan ritel, survei lapangan PT ESC, dan web builder (React & TypeScript).
                  </p>
                </div>
              </div>

            </div>

            {/* Academic Credentials List */}
            <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-300 font-bold">
                  REKAM JEJAK AKADEMIS & INSTITUSI
                </h3>
              </div>
              <ul className="space-y-3 font-mono text-xs text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold mt-0.5">—</span>
                  <span><strong>S1 Manajemen Pendidikan Islam:</strong> IAIN Parepare (Lulusan 2026).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold mt-0.5">—</span>
                  <span><strong>Sekretariat Jurnal EDIUM:</strong> Pengelolaan naskah dan administrasi jurnal ilmiah prodi MPI (2024).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold mt-0.5">—</span>
                  <span><strong>Presenter Konferensi ACIEM:</strong> Annual Conference on Islamic Education Management (2026).</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: POAC Management Matrix */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="border border-neutral-800 bg-neutral-900/40 rounded-xl p-6 sm:p-8">
              
              <div className="border-b border-neutral-800 pb-4 mb-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">
                  FRAMEWORK MANAJEMEN
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Prinsip POAC dalam Eksekusi
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Bagaimana saya menerapkan teori manajemen ke dalam solusi nyata:
                </p>
              </div>

              {/* Numbered POAC Matrix */}
              <div className="space-y-6">
                {poacModel.map((item) => (
                  <div key={item.num} className="flex gap-4 items-start group">
                    <span className="font-mono text-xs font-bold text-emerald-400/80 bg-neutral-950 border border-neutral-800 px-2 py-1 rounded shrink-0">
                      {item.num}
                    </span>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                          {item.phase}
                        </span>
                        <span className="text-neutral-700">•</span>
                        <h4 className="text-sm font-semibold text-neutral-200">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Statement */}
              <div className="mt-8 pt-6 border-t border-neutral-800 text-xs font-mono text-neutral-400 leading-relaxed">
                "Tata kelola yang baik meminimalkan kesalahan manual; sistem digital yang tepat menjadikannya bekerja secara otomatis."
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
