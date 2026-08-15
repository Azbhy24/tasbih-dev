import { GraduationCap, BookOpen, Layers } from "lucide-react";
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
    <section 
      id="about" 
      className="relative py-20 sm:py-28 md:py-36 border-t border-[#2d241c] bg-[#141210] text-[#f4efe6]"
    >
      {/* Chapter 02 Transition Glow & Warm Academic Grid */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(212, 163, 115, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 163, 115, 0.05) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Chapter 02 Marker: Warm Academic Editorial */}
        <div className="flex items-center justify-between border-b border-[#2d241c] pb-3 sm:pb-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#d4a373] font-bold bg-[#261f18] border border-[#4a3a2d] px-2 py-0.5 rounded">
              CHAPTER 02
            </span>
            <span className="text-[#5a483a] font-mono">/</span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#d5cebf] font-semibold">
              MANAJEMEN & PENDIDIKAN
            </span>
          </div>
          <span className="font-mono text-[10px] sm:text-[11px] text-[#a89f91] uppercase tracking-wider hidden sm:inline">
            LANDASAN STRUKTURAL
          </span>
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 mb-10 sm:mb-16 items-start text-left">
          <div className="lg:col-span-8">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#fdfaf5] tracking-tight leading-snug"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Manajemen Pendidikan, Administrasi Terstruktur, & Solusi Digital.
            </h2>
          </div>
          <div className="lg:col-span-4 text-[#c7beaf] text-xs sm:text-sm md:text-base leading-relaxed font-normal">
            Latar belakang S1 Manajemen Pendidikan Islam (IAIN Parepare) membentuk cara berpikir analitis: merancang alur kerja yang rapi, transparan, dan berdaya guna bagi pengguna nyata.
          </div>
        </div>

        {/* Asymmetric 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & Dual Photos */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 text-left">
            
            {/* Scannable Narrative */}
            <div className="space-y-3 text-[#e4ddd0] text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              <p>
                Saya memandang teknologi bukan sebagai tren sesaat, melainkan sebagai instrumen untuk menyelesaikan masalah administrasi dan operasional nyata. Keahlian saya berakar pada integrasi antara disiplin tata kelola organisasi dan rekayasa web.
              </p>
              <p className="text-[#b5ab9a] text-xs sm:text-sm md:text-base">
                Dari memimpin organisasi alumni, mengelola pembukuan ritel harian, survei sosial-ekonomi lapangan (PT ESC), hingga merancang aplikasi kasir dan Al-Qur'an digital (NgajiKu) — seluruhnya fokus pada kejelasan data dan efisiensi pengguna.
              </p>
            </div>

            {/* Dual Portrait Gallery in Crisp Natural Color */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
              
              {/* Photo 1: Academic */}
              <div className="bg-[#1b1814] border border-[#2d241c] rounded-xl p-2.5 sm:p-3 shadow-md">
                <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[#0e0c0a] mb-2 sm:mb-3">
                  <img
                    src={almetImage}
                    alt="Tasbih - S1 Manajemen Pendidikan Islam"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="px-0.5">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase text-[#d4a373] font-bold block">
                    AKADEMIK & TATA KELOLA
                  </span>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#fdfaf5] mt-0.5 leading-snug">
                    S1 MPI IAIN Parepare
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#a89f91] mt-0.5 leading-snug hidden sm:block">
                    Presenter Konferensi ACIEM 2026.
                  </p>
                </div>
              </div>

              {/* Photo 2: Professional */}
              <div className="bg-[#1b1814] border border-[#2d241c] rounded-xl p-2.5 sm:p-3 shadow-md">
                <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[#0e0c0a] mb-2 sm:mb-3">
                  <img
                    src={jasImage}
                    alt="Tasbih - Praktisi Operasional & Digital"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="px-0.5">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase text-[#d4a373] font-bold block">
                    PRAKTISI & DIGITAL
                  </span>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#fdfaf5] mt-0.5 leading-snug">
                    Operasional & Web Solutions
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#a89f91] mt-0.5 leading-snug hidden sm:block">
                    Pencatatan ritel & web builder.
                  </p>
                </div>
              </div>

            </div>

            {/* Academic Credentials Box */}
            <div className="p-4 sm:p-6 bg-[#1b1814] border border-[#2d241c] rounded-xl shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-[#d4a373] shrink-0" />
                <h3 className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#e8dfcf] font-bold">
                  REKAM JEJAK AKADEMIS & INSTITUSI
                </h3>
              </div>
              <ul className="space-y-2.5 font-mono text-xs text-[#d5cebf]">
                <li className="flex items-start gap-2">
                  <span className="text-[#d4a373] font-bold shrink-0">—</span>
                  <span><strong>S1 MPI IAIN Parepare:</strong> Lulusan 2026 bidang tata kelola pendidikan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4a373] font-bold shrink-0">—</span>
                  <span><strong>Sekretariat Jurnal EDIUM:</strong> Tata kelola naskah ilmiah MPI (2024).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4a373] font-bold shrink-0">—</span>
                  <span><strong>Presenter ACIEM 2026:</strong> Annual Conference on Islamic Education Management.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: POAC Management Matrix in Warm Editorial Layout */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="border border-[#2d241c] bg-[#1a1714] rounded-2xl p-5 sm:p-7 shadow-xl">
              
              <div className="border-b border-[#2d241c] pb-3 sm:pb-4 mb-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#a89f91] block mb-1">
                  FRAMEWORK OPERASIONAL
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#fdfaf5] tracking-tight">
                  Prinsip POAC dalam Eksekusi
                </h3>
                <p className="text-xs text-[#b5ab9a] mt-0.5">
                  Penerapan teori manajemen ke dalam solusi digital nyata:
                </p>
              </div>

              {/* Numbered POAC Matrix */}
              <div className="space-y-4 sm:space-y-5">
                {poacModel.map((item) => (
                  <div key={item.num} className="flex gap-3 sm:gap-4 items-start">
                    <span className="font-mono text-xs font-bold text-[#d4a373] bg-[#0e0c0a] border border-[#2d241c] px-2 py-1 rounded shrink-0">
                      {item.num}
                    </span>
                    <div className="text-left">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-mono text-[11px] text-[#a89f91] uppercase tracking-wider">
                          {item.phase}
                        </span>
                        <span className="text-[#5a483a] hidden sm:inline">•</span>
                        <h4 className="text-xs sm:text-sm font-semibold text-[#fdfaf5]">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#b5ab9a] mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quote */}
              <div className="mt-6 pt-4 border-t border-[#2d241c] text-[11px] font-mono text-[#a89f91] leading-relaxed italic">
                "Tata kelola yang baik meminimalkan kesalahan; sistem digital yang tepat menjadikannya bekerja secara otomatis."
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
