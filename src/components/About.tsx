import { GraduationCap, BookOpen, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import almetImage from "../assets/images/almet_mahasiswa_1781399345497.jpg";
import jasImage from "../assets/images/jas_formal_1781399324196.jpg";

export default function About() {
  const poacSteps = [
    { 
      step: "01", 
      phase: "PLANNING", 
      title: "Identifikasi & Alur", 
      detail: "Membedah inefisiensi manual, merumuskan alur kerja, & menetapkan target luaran terukur." 
    },
    { 
      step: "02", 
      phase: "ORGANIZING", 
      title: "Struktur & Klasifikasi", 
      detail: "Menata sistem pencatatan, standarisasi data, & pembagian tugas secara sistematis." 
    },
    { 
      step: "03", 
      phase: "ACTUATING", 
      title: "Eksekusi Solusi Web", 
      detail: "Mengembangkan aplikasi web fungsional untuk mengotomasi operasional rutin harian." 
    },
    { 
      step: "04", 
      phase: "CONTROLLING", 
      title: "Audit & Validasi", 
      detail: "Verifikasi akurasi data, peninjauan berkas, & penyempurnaan sistem berkelanjutan." 
    }
  ];

  const academicRecords = [
    {
      code: "DEG-01",
      institution: "IAIN Parepare",
      title: "S1 Manajemen Pendidikan Islam (MPI)",
      meta: "Lulusan 2026 • Tata Kelola & Administrasi Lembaga"
    },
    {
      code: "PUB-02",
      institution: "Jurnal EDIUM",
      title: "Sekretariat & Tata Kelola Naskah Ilmiah",
      meta: "Periode 2024 • Manajemen OJS & Berkas Riset"
    },
    {
      code: "CNF-03",
      institution: "ACIEM 2026",
      title: "Presenter Konferensi Ilmiah Nasional",
      meta: "Annual Conference on Islamic Education Management"
    }
  ];

  return (
    <section 
      id="about" 
      className="relative py-20 sm:py-28 md:py-32 border-t border-[#342a22] bg-[#12100e] text-[#f4efe6] overflow-hidden"
    >
      {/* Visual Signature: Academic Ruled Line & Ledger Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to bottom, #d4a373 1px, transparent 1px)`,
          backgroundSize: '100% 32px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Chapter 02 Marker: Academic Editorial Header */}
        <div className="flex items-center justify-between border-b border-[#342a22] pb-3 sm:pb-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#d4a373] font-bold bg-[#241e18] border border-[#4a392c] px-2 py-0.5 rounded">
              CHAPTER 02
            </span>
            <span className="text-[#5c493a] font-mono">/</span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#ded7cb] font-semibold">
              MANAJEMEN & PENDIDIKAN
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-[#a89e90] uppercase tracking-wider">
            <span className="hidden sm:inline">DOC ID:</span>
            <span className="text-[#d4a373]">REF-2026-MPI</span>
          </div>
        </div>

        {/* Section Headline & Core Compressed Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16 text-left items-start">
          <div className="lg:col-span-8">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#fdfaf5] tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Tata Kelola Administrasi & Eksekusi Terstruktur.
            </h2>
          </div>
          <div className="lg:col-span-4 border-l border-[#342a22] pl-4 sm:pl-6 text-[#c7beaf] text-xs sm:text-sm leading-relaxed font-normal">
            Latar belakang S1 MPI membentuk disiplin kerja: membedah masalah administrasi, menyusun alur data rapi, dan membangun sistem digital yang mudah dioperasikan.
          </div>
        </div>

        {/* Visual Signature 1: POAC Framework Process Strip (Not Bulky Cards) */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center justify-between border-b border-[#342a22] pb-2.5 mb-6">
            <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#d4a373] flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              KERANGKA KERJA OPERASIONAL (POAC)
            </span>
            <span className="font-mono text-[10px] text-[#8e8476] uppercase tracking-wider hidden sm:inline">
              Teori Manajemen → Implementasi Nyata
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            {poacSteps.map((p, idx) => (
              <div 
                key={p.step}
                className="border-t border-[#342a22] pt-4 sm:pt-5 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm font-bold text-[#d4a373]">
                      {p.step}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-[#a89e90] tracking-widest">
                      {p.phase}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#fdfaf5] tracking-tight mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#b8ada0] leading-relaxed font-normal">
                    {p.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Signature 2: Academic Archive & Dual Photo Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 text-left items-start pt-6 border-t border-[#342a22]">
          
          {/* Left Column: Official Academic Document Log */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-[#d4a373]" />
              <span className="font-mono text-xs uppercase font-bold tracking-wider text-[#ded7cb]">
                REKAM AKADEMIS & DOKUMENTASI ILMIAH
              </span>
            </div>

            <div className="divide-y divide-[#2b221a] border-y border-[#342a22]">
              {academicRecords.map((item) => (
                <div key={item.code} className="py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[10px] text-[#d4a373] bg-[#221b15] border border-[#3e3024] px-1.5 py-0.5 rounded shrink-0">
                      {item.code}
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#fdfaf5] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#a89e90] mt-0.5 font-mono">
                        {item.meta}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#d4a373] shrink-0 sm:text-right">
                    {item.institution}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dual Perspective Academic/Professional Portraits */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            
            {/* Academic Photo */}
            <div className="border border-[#342a22] bg-[#1a1613] rounded-xl p-2.5 shadow-md">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[#0d0b09] mb-2">
                <img
                  src={almetImage}
                  alt="Tasbih - S1 MPI IAIN Parepare"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#d4a373] font-bold block">
                AKADEMIK
              </span>
              <p className="text-xs font-bold text-white leading-tight mt-0.5">
                S1 MPI IAIN
              </p>
            </div>

            {/* Professional Photo */}
            <div className="border border-[#342a22] bg-[#1a1613] rounded-xl p-2.5 shadow-md">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[#0d0b09] mb-2">
                <img
                  src={jasImage}
                  alt="Tasbih - Praktisi Operasional"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#d4a373] font-bold block">
                PRAKTISI
              </span>
              <p className="text-xs font-bold text-white leading-tight mt-0.5">
                Operasional & Digital
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
