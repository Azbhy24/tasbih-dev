import { useState } from "react";
import { GraduationCap, LayoutGrid, User, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolio";
import almetImage from "../assets/images/almet_mahasiswa_1781399345497.jpg";
import jasImage from "../assets/images/jas_formal_1781399324196.jpg";

export default function About() {
  const { education } = portfolioData;
  const [showPoacDetails, setShowPoacDetails] = useState(false);

  const poacModel = [
    { phase: "P", title: "Planning", desc: "Memahami masalah dan menentukan tujuan proyek." },
    { phase: "O", title: "Organizing", desc: "Menata orang, data, dan sumber daya operasional." },
    { phase: "A", title: "Actuating", desc: "Menjalankan solusi dan memastikan pekerjaan bergerak." },
    { phase: "C", title: "Controlling", desc: "Mengevaluasi hasil dan melakukan perbaikan berlanjut." }
  ];

  return (
    <section id="about" className="relative py-20 sm:py-24 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Pembuka */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-wider text-indigo-800 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200 shadow-2xs">
            TENTANG TASBIH
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Manajemen, Pengalaman Nyata, & Teknologi Berdaya Guna
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-700 font-normal max-w-2xl mx-auto">
            Lulusan S1 Manajemen Pendidikan Islam (IAIN Parepare), fokus pada simplifikasi pekerjaan lewat sistem digital yang rapi dan efisien.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Ringkasan Profil & Dua Sisi Profil */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            
            {/* Cerita Ringkas */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-2 mb-3">
                <User className="w-4 h-4 text-indigo-600" />
                <h3 className="text-xs font-mono font-bold text-indigo-700 tracking-wider uppercase">SEKILAS PROFIL</h3>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                Latar belakang Manajemen Pendidikan Islam membentuk dasar cara saya merencanakan, mengorganisasikan, dan mengevaluasi kerja. Ditunjang pengalaman di bidang administrasi, bisnis ritel, survei lapangan, dan web dev, saya membangun aplikasi dan otomatisasi yang mempermudah operasional harian.
              </p>
            </div>

            {/* Dua Sisi Profil Photos */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <h3 className="text-xs font-mono font-bold text-indigo-700 tracking-wider uppercase mb-4">DUA SISI PROFIL</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                {/* Photo 1: Akademik & Manajemen */}
                <div className="relative rounded-xl overflow-hidden border border-slate-300 bg-slate-900 flex flex-col justify-end h-56 sm:h-64 shadow-xs group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
                  <img
                    src={almetImage}
                    alt="Tasbih - Akademik & Manajemen"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="relative z-20 p-3.5 mt-auto">
                    <span className="inline-flex px-2 py-0.5 rounded bg-indigo-700 text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                      SISI AKADEMIK
                    </span>
                    <p className="text-xs text-white font-extrabold mt-1 leading-tight">
                      AKADEMIK & MANAJEMEN
                    </p>
                    <p className="text-[11px] text-slate-200 mt-0.5 leading-snug">
                      Manajemen Pendidikan Islam, organisasi alumni, & tata kelola data.
                    </p>
                  </div>
                </div>

                {/* Photo 2: Operasional & Digital */}
                <div className="relative rounded-xl overflow-hidden border border-slate-300 bg-slate-900 flex flex-col justify-end h-56 sm:h-64 shadow-xs group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
                  <img
                    src={jasImage}
                    alt="Tasbih - Operasional & Digital"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="relative z-20 p-3.5 mt-auto">
                    <span className="inline-flex px-2 py-0.5 rounded bg-purple-700 text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                      SISI PROFESIONAL
                    </span>
                    <p className="text-xs text-white font-extrabold mt-1 leading-tight">
                      OPERASIONAL & DIGITAL
                    </p>
                    <p className="text-[11px] text-slate-200 mt-0.5 leading-snug">
                      Administrasi ritel, enumerasi data, web dev & integrasi AI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Pendidikan & Compact POAC Framework */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            
            {/* Pendidikan Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-xs shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold text-indigo-700 uppercase tracking-wider">RIWAYAT PENDIDIKAN</span>
                  <h4 className="text-slate-900 font-extrabold text-base sm:text-lg leading-tight mt-0.5">{education.institution}</h4>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-800 border-t border-slate-200 pt-3.5">
                <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="text-indigo-700 font-bold uppercase block text-[9px]">PROGRAM STUDI</span>
                  <span className="font-sans font-bold text-slate-900">{education.degree}</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="text-indigo-700 font-bold uppercase block text-[9px]">PERIODE</span>
                  <span className="font-sans font-bold text-slate-900">{education.period}</span>
                </div>
              </div>

              <div className="mt-3 p-3 rounded-xl bg-white border border-slate-200">
                <span className="block text-[9px] font-mono text-indigo-700 font-bold uppercase tracking-wider">FOKUS AKADEMIS</span>
                <p className="text-xs text-slate-700 font-medium mt-0.5 leading-relaxed">
                  {education.focus}
                </p>
              </div>
            </div>

            {/* Cara Saya Bekerja (Compact POAC Framework) */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-slate-900 text-sm font-extrabold tracking-tight">
                    METODOLOGI KERJA (POAC)
                  </h3>
                </div>
                
                <button
                  onClick={() => setShowPoacDetails(!showPoacDetails)}
                  className="text-[11px] font-mono font-bold text-indigo-700 hover:text-indigo-900 flex items-center gap-1 cursor-pointer bg-white px-2.5 py-1 rounded-md border border-slate-200"
                >
                  <span>{showPoacDetails ? "Ringkas" : "Rincian"}</span>
                  {showPoacDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Step Badges Row */}
              <div className="grid grid-cols-4 gap-2 mb-2">
                {poacModel.map((step) => (
                  <div key={step.phase} className="p-2 bg-white rounded-xl border border-slate-200 text-center shadow-2xs">
                    <span className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold text-xs font-mono inline-flex items-center justify-center mb-1">
                      {step.phase}
                    </span>
                    <span className="block text-[10px] font-extrabold text-slate-900 leading-tight">
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Optional Expanded Panel */}
              <AnimatePresence>
                {showPoacDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden mt-3 pt-3 border-t border-slate-200 space-y-2 text-xs"
                  >
                    {poacModel.map((step) => (
                      <div key={step.phase} className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-start gap-2.5">
                        <span className="font-mono font-black text-indigo-700 text-xs shrink-0">{step.phase}:</span>
                        <p className="text-slate-700 leading-relaxed font-medium">{step.desc}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
