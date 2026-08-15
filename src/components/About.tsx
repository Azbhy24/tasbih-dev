import React, { useState } from "react";
import { 
  GraduationCap, 
  Layers, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  FileCheck,
  Award
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import almetImage from "../assets/images/almet_mahasiswa_1781399345497.jpg";
import jasImage from "../assets/images/jas_formal_1781399324196.jpg";

export default function About() {
  const [activeTab, setActiveTab] = useState<"poac" | "academic" | "skills">("poac");
  const [activePoacStep, setActivePoacStep] = useState(0);

  const tabs = [
    { id: "poac", num: "01", label: "Kerangka POAC" },
    { id: "academic", num: "02", label: "Rekam Akademik" },
    { id: "skills", num: "03", label: "Matriks Keahlian" },
  ];

  const poacSteps = [
    { 
      step: "01", 
      phase: "PLANNING", 
      title: "Identifikasi & Perumusan Alur", 
      detail: "Membedah inefisiensi administrasi manual, merumuskan alur data, dan menetapkan target luaran sistem yang terukur.",
      output: "Blueprint alur kerja & standardisasi dokumen"
    },
    { 
      step: "02", 
      phase: "ORGANIZING", 
      title: "Struktur & Klasifikasi Data", 
      detail: "Menata sistem kearsipan, merapikan struktur basis data, serta menetapkan pembagian tanggung jawab yang jelas.",
      output: "Struktur database & pembagian wewenang"
    },
    { 
      step: "03", 
      phase: "ACTUATING", 
      title: "Eksekusi Sistem & Aplikasi Web", 
      detail: "Mengimplementasikan solusi digital berbasis web untuk mengotomasi pencatatan rutin operasional harian.",
      output: "Aplikasi web fungsional & siap pakai"
    },
    { 
      step: "04", 
      phase: "CONTROLLING", 
      title: "Audit, Rekapitulasi, & Validasi", 
      detail: "Melakukan verifikasi akurasi data berkala, peninjauan berkas, serta perbaikan sistem berkelanjutan.",
      output: "Laporan evaluasi & validasi integritas data"
    }
  ];

  const academicRecords = [
    {
      code: "DEG-01",
      institution: "IAIN Parepare",
      title: "S1 Manajemen Pendidikan Islam (MPI)",
      period: "2022 – 2026",
      meta: "Lulusan S1 dengan fokus tata kelola administrasi organisasi, sistem manajemen, dan pelaporan terstruktur."
    },
    {
      code: "PUB-02",
      institution: "Jurnal EDIUM",
      title: "Sekretariat & Tata Kelola Naskah Ilmiah",
      period: "Periode 2024",
      meta: "Pengelolaan administrasi penerbitan naskah ilmiah, verifikasi kelengkapan berkas, dan komunikasi editorial."
    },
    {
      code: "CNF-03",
      institution: "ACIEM 2026",
      title: "Presenter Konferensi Ilmiah Nasional",
      period: "Tahun 2026",
      meta: "Annual Conference on Islamic Education Management — pemaparan artikel dan riset manajemen pendidikan."
    }
  ];

  const skillDomains = [
    {
      code: "SKL-01",
      domain: "MANAJEMEN & OPERASIONAL",
      subtitle: "Tata Kelola & Administrasi",
      items: [
        "Manajemen Pendidikan Islam & Tata Kelola Institusi",
        "Administrasi Penerbitan Jurnal Ilmiah (EDIUM)",
        "Pencatatan Keuangan & Arus Kas Ritel",
        "Pengumpulan Data Lapangan (PT ESC)",
        "Penyusunan Laporan Pertanggungjawaban (LPJ)"
      ]
    },
    {
      code: "SKL-02",
      domain: "DIGITAL & WEB ENGINEERING",
      subtitle: "Arsitektur Web Modern",
      items: [
        "React.js & TypeScript Modern Architecture",
        "Tailwind CSS & Modular Design Systems",
        "Firebase Firestore & Cloud Authentication",
        "Mobile Packaging with Capacitor (APK)",
        "REST API Integration & State Management"
      ]
    },
    {
      code: "SKL-03",
      domain: "LEADERSHIP & KOMUNITAS",
      subtitle: "Koordinasi & Komunikasi",
      items: [
        "Kepemimpinan Ikatan Alumni (Ketua IKA)",
        "Koordinasi Anggota Komunitas (178 Alumni)",
        "Manajemen Program Kerja & Event",
        "Presentasi Ilmiah & Public Speaking (ACIEM)",
        "Koordinasi Tim Lintas Generasi"
      ]
    },
    {
      code: "SKL-04",
      domain: "AI & WORKFLOW AUTOMATION",
      subtitle: "Efisiensi & Automasi",
      items: [
        "Google Gemini API SDK Integration",
        "Prompt Engineering untuk Rekapitulasi Data",
        "AI-Assisted Workflow & Vibe Coding",
        "Automasi Dokumen & Formulir",
        "Optimalisasi Perangkat Kerja Digital"
      ]
    }
  ];

  return (
    <section 
      id="about" 
      className="relative py-16 sm:py-24 md:py-28 border-t border-[#342a22] bg-[#12100e] text-[#f4efe6] overflow-hidden"
    >
      {/* Visual Signature: Academic Ruled Paper Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to bottom, #d4a373 1px, transparent 1px)`,
          backgroundSize: '100% 32px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Chapter 02 Header */}
        <div className="flex items-center justify-between border-b border-[#342a22] pb-3 mb-6 sm:mb-8">
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
            <span className="hidden sm:inline">DISIPLIN KERJA:</span>
            <span className="text-[#d4a373]">MPI &times; TEKNOLOGI</span>
          </div>
        </div>

        {/* Headline + 1-Liner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-6 sm:mb-8 text-left items-start">
          <div className="lg:col-span-8">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fdfaf5] tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Tata Kelola Administrasi & Eksekusi Terstruktur.
            </h2>
          </div>
          <div className="lg:col-span-4 border-l border-[#342a22] pl-4 text-[#c7beaf] text-xs leading-relaxed font-normal">
            Latar belakang S1 MPI membentuk disiplin kerja: membedah masalah administrasi, menyusun alur data rapi, dan membangun sistem digital yang mudah dioperasikan.
          </div>
        </div>

        {/* Interactive Sub-View Navigator */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#342a22] pb-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={`ch02-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id as any)}
                className={`min-h-[40px] px-3.5 py-1.5 rounded font-mono text-xs uppercase tracking-wider transition-all cursor-pointer select-none flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-[#d4a373] text-[#12100e] font-bold shadow-md"
                    : "bg-[#1e1914] text-[#a89e90] border border-[#342a22] hover:text-[#f4efe6] hover:border-[#5c493a]"
                }`}
              >
                <span className="text-[10px] opacity-75">{tab.num}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <span className="font-mono text-[11px] text-[#8e8476]">
            STAGE VIEW // {activeTab === "poac" ? "01 / 03" : activeTab === "academic" ? "02 / 03" : "03 / 03"}
          </span>
        </div>

        {/* In-Place Interactive Stage Content */}
        <div className="min-h-[380px]">
          <AnimatePresence mode="wait">
            
            {/* VIEW 1: POAC OPERATIONAL FRAMEWORK */}
            {activeTab === "poac" && (
              <motion.div
                key="tab-poac"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-6 text-left"
              >
                {/* 4 Steps Segmented Selector */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  {poacSteps.map((p, idx) => (
                    <button
                      key={p.step}
                      onClick={() => setActivePoacStep(idx)}
                      className={`p-3 rounded border text-left transition-all cursor-pointer min-h-[44px] ${
                        activePoacStep === idx
                          ? "bg-[#27201a] border-[#d4a373] text-white"
                          : "bg-[#181410] border-[#2c221a] text-[#a89e90] hover:border-[#4a392c]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`font-mono text-xs font-bold ${activePoacStep === idx ? "text-[#d4a373]" : "text-[#7a6e60]"}`}>
                          {p.step}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-wider">
                          {p.phase}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold truncate text-[#fdfaf5]">
                        {p.title}
                      </h4>
                    </button>
                  ))}
                </div>

                {/* Active Step Deep-Dive Card */}
                <div className="p-5 sm:p-6 rounded-xl bg-[#1a1612] border border-[#342a22] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#d4a373] bg-[#292119] border border-[#4a3a2d] px-2 py-0.5 rounded">
                        FASE {poacSteps[activePoacStep].step} // {poacSteps[activePoacStep].phase}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#fdfaf5]">
                      {poacSteps[activePoacStep].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#ded7cb] leading-relaxed">
                      {poacSteps[activePoacStep].detail}
                    </p>
                  </div>

                  <div className="lg:col-span-4 bg-[#12100e] p-4 rounded-lg border border-[#2b221a]">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#8e8476] block mb-1">
                      LUARAN OPERASIONAL:
                    </span>
                    <p className="text-xs font-mono font-semibold text-[#d4a373]">
                      ✓ {poacSteps[activePoacStep].output}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VIEW 2: REKAM AKADEMIK & ARSIP */}
            {activeTab === "academic" && (
              <motion.div
                key="tab-academic"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left items-start"
              >
                {/* Left Column: Official Academic Document Log */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="divide-y divide-[#2b221a] border-y border-[#342a22]">
                    {academicRecords.map((item) => (
                      <div key={item.code} className="py-3.5 space-y-1">
                        <div className="flex items-baseline justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] text-[#d4a373] bg-[#221b15] border border-[#3e3024] px-1.5 py-0.5 rounded shrink-0">
                              {item.code}
                            </span>
                            <h4 className="text-sm sm:text-base font-bold text-[#fdfaf5]">
                              {item.title}
                            </h4>
                          </div>
                          <span className="font-mono text-xs font-semibold text-[#d4a373] shrink-0">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-xs text-[#b8ada0] pl-8">
                          {item.meta}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Dual Perspective Academic/Professional Portraits */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-3">
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
              </motion.div>
            )}

            {/* VIEW 3: MATRIKS KEAHLIAN */}
            {activeTab === "skills" && (
              <motion.div
                key="tab-skills"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left"
              >
                {skillDomains.map((domain) => (
                  <div
                    key={domain.code}
                    className="p-4 rounded-xl bg-[#181410] border border-[#342a22] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] font-bold text-[#d4a373] bg-[#261f18] px-1.5 py-0.5 rounded">
                          {domain.code}
                        </span>
                        <span className="font-mono text-[10px] text-[#8e8476] uppercase tracking-widest">
                          DOMAIN
                        </span>
                      </div>

                      <h3 className="text-xs font-bold text-[#fdfaf5] tracking-tight uppercase mb-0.5">
                        {domain.domain}
                      </h3>
                      <p className="text-[11px] text-[#a89e90] mb-3 font-mono">
                        {domain.subtitle}
                      </p>

                      <ul className="space-y-1.5 border-t border-[#2b221a] pt-2.5">
                        {domain.items.map((item, idx) => (
                          <li key={idx} className="text-xs text-[#ded7cb] flex items-start gap-1.5 leading-relaxed">
                            <span className="text-[#d4a373] font-mono text-[10px] shrink-0 mt-0.5">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
