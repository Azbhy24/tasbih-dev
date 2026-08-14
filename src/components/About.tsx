import { GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import almetImage from "../assets/images/almet_mahasiswa_1781399345497.jpg";
import jasImage from "../assets/images/jas_formal_1781399324196.jpg";

export default function About() {
  const poacModel = [
    { num: "01", phase: "Planning", title: "Perencanaan & Analisis", desc: "Membedah akar permasalahan operasional, menyusun alur kerja, dan menetapkan target luaran terukur." },
    { num: "02", phase: "Organizing", title: "Struktur & Data Terpadu", desc: "Menata sistem pencatatan, klasifikasi data, dan distribusi peran agar alur kerja terstruktur rapi." },
    { num: "03", phase: "Actuating", title: "Eksekusi & Solusi Digital", desc: "Mengembangkan aplikasi web dan alur kerja terotomatisasi untuk mempercepat tugas rutin harian." },
    { num: "04", phase: "Controlling", title: "Evaluasi & Akurasi Sistem", desc: "Melakukan verifikasi data, peninjauan hasil pembukuan, dan penyempurnaan fitur secara berkelanjutan." }
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 border-t border-neutral-800/80 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-emerald-400 font-bold">
            01 / PROFIL & PENDEKATAN
          </span>
          <span className="h-px w-8 sm:w-12 bg-neutral-800" />
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 mb-10 sm:mb-16 items-start">
          <div className="lg:col-span-8">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-snug"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Manajemen Pendidikan, Administrasi Terstruktur, & Solusi Digital.
            </h2>
          </div>
          <div className="lg:col-span-4 text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
            Latar belakang S1 Manajemen Pendidikan Islam (IAIN Parepare) membentuk cara berpikir analitis: merancang alur kerja yang rapi, transparan, dan berdaya guna bagi pengguna nyata.
          </div>
        </div>

        {/* Asymmetric 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & Dual Photos */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            
            {/* Scannable Narrative */}
            <div className="space-y-3 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              <p>
                Saya memandang teknologi bukan sebagai tren sesaat, melainkan sebagai instrumen untuk menyelesaikan masalah administrasi dan operasional nyata. Keahlian saya berakar pada integrasi antara disiplin tata kelola organisasi dan rekayasa web.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base">
                Dari memimpin organisasi alumni, mengelola pembukuan ritel harian, survei sosial-ekonomi lapangan (PT ESC), hingga merancang aplikasi kasir dan Al-Qur'an digital (NgajiKu) — seluruhnya fokus pada kejelasan data dan efisiensi pengguna.
              </p>
            </div>

            {/* Dual Portrait Gallery in Crisp Natural Color */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
              
              {/* Photo 1: Academic */}
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-2.5 sm:p-3">
                <div className="aspect-[4/5] rounded overflow-hidden bg-neutral-950 mb-2 sm:mb-3">
                  <img
                    src={almetImage}
                    alt="Tasbih - S1 Manajemen Pendidikan Islam"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="px-0.5">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase text-emerald-400 font-bold block">
                    AKADEMIK & TATA KELOLA
                  </span>
                  <p className="text-[11px] sm:text-xs font-semibold text-white mt-0.5 leading-snug">
                    S1 MPI IAIN Parepare
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-neutral-400 mt-0.5 leading-snug hidden sm:block">
                    Presenter Konferensi ACIEM 2026.
                  </p>
                </div>
              </div>

              {/* Photo 2: Professional */}
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-2.5 sm:p-3">
                <div className="aspect-[4/5] rounded overflow-hidden bg-neutral-950 mb-2 sm:mb-3">
                  <img
                    src={jasImage}
                    alt="Tasbih - Praktisi Operasional & Digital"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="px-0.5">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase text-neutral-400 font-bold block">
                    PRAKTISI & DIGITAL
                  </span>
                  <p className="text-[11px] sm:text-xs font-semibold text-white mt-0.5 leading-snug">
                    Operasional & Web Solutions
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-neutral-400 mt-0.5 leading-snug hidden sm:block">
                    Pencatatan ritel & web builder.
                  </p>
                </div>
              </div>

            </div>

            {/* Academic Credentials List */}
            <div className="p-4 sm:p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />
                <h3 className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-neutral-300 font-bold">
                  REKAM JEJAK AKADEMIS & INSTITUSI
                </h3>
              </div>
              <ul className="space-y-2.5 font-mono text-xs text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">—</span>
                  <span><strong>S1 MPI IAIN Parepare:</strong> Lulusan 2026 bidang tata kelola pendidikan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">—</span>
                  <span><strong>Sekretariat Jurnal EDIUM:</strong> Tata kelola naskah ilmiah MPI (2024).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">—</span>
                  <span><strong>Presenter ACIEM 2026:</strong> Annual Conference on Islamic Education Management.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: POAC Management Matrix */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="border border-neutral-800 bg-neutral-900/40 rounded-xl p-5 sm:p-7">
              
              <div className="border-b border-neutral-800 pb-3 sm:pb-4 mb-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">
                  FRAMEWORK OPERASIONAL
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Prinsip POAC dalam Eksekusi
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Penerapan teori manajemen ke dalam solusi digital nyata:
                </p>
              </div>

              {/* Numbered POAC Matrix */}
              <div className="space-y-4 sm:space-y-5">
                {poacModel.map((item) => (
                  <div key={item.num} className="flex gap-3 sm:gap-4 items-start">
                    <span className="font-mono text-xs font-bold text-emerald-400 bg-neutral-950 border border-neutral-800 px-2 py-1 rounded shrink-0">
                      {item.num}
                    </span>
                    <div className="text-left">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
                          {item.phase}
                        </span>
                        <span className="text-neutral-700 hidden sm:inline">•</span>
                        <h4 className="text-xs sm:text-sm font-semibold text-neutral-200">
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

              {/* Bottom Quote */}
              <div className="mt-6 pt-4 border-t border-neutral-800 text-[11px] font-mono text-neutral-400 leading-relaxed">
                "Tata kelola yang baik meminimalkan kesalahan; sistem digital yang tepat menjadikannya bekerja secara otomatis."
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
