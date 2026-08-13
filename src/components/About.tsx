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
    <section id="about" className="relative py-28 sm:py-32 border-t border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Pembuka */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold tracking-wider text-indigo-300 uppercase bg-indigo-950/80 px-3.5 py-1.5 rounded-full border border-indigo-500/30">
            TENTANG TASBIH
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
            Manajemen, Pengalaman Nyata, & Teknologi Berdaya Guna
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-normal max-w-2xl mx-auto">
            Lulusan S1 Manajemen Pendidikan Islam (IAIN Parepare), fokus pada simplifikasi pekerjaan lewat sistem digital yang rapi dan efisien.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Side: Ringkasan Profil & Dua Sisi Profil */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-left">
            
            {/* Cerita Ringkas */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-indigo-500/40 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)] transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <User className="w-4 h-4 text-indigo-400" />
                <h3 className="text-xs font-mono font-bold text-indigo-300 tracking-wider uppercase">SEKILAS PROFIL</h3>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                Latar belakang Manajemen Pendidikan Islam membentuk dasar cara saya merencanakan, mengorganisasikan, dan mengevaluasi kerja. Ditunjang pengalaman di bidang administrasi, bisnis ritel, survei lapangan, dan web dev, saya membangun aplikasi dan otomatisasi yang mempermudah operasional harian.
              </p>
            </div>

            {/* Dua Sisi Profil Photos */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-indigo-500/40 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)] transition-all duration-300">
              <h3 className="text-xs font-mono font-bold text-indigo-300 tracking-wider uppercase mb-4">DUA SISI PROFIL</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                {/* Photo 1: Akademik & Manajemen */}
                <div className="relative rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 flex flex-col justify-end h-56 sm:h-64 shadow-lg group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
                  <img
                    src={almetImage}
                    alt="Tasbih - Akademik & Manajemen"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="relative z-20 p-3.5 mt-auto">
                    <span className="inline-flex px-2 py-0.5 rounded bg-emerald-700/90 border border-emerald-500/40 text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                      SISI AKADEMIK
                    </span>
                    <p className="text-xs text-white font-extrabold mt-1 leading-tight">
                      AKADEMIK & MANAJEMEN
                    </p>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                      Manajemen Pendidikan Islam, organisasi alumni, & tata kelola data.
                    </p>
                  </div>
                </div>

                {/* Photo 2: Operasional & Digital */}
                <div className="relative rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 flex flex-col justify-end h-56 sm:h-64 shadow-lg group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
                  <img
                    src={jasImage}
                    alt="Tasbih - Operasional & Digital"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="relative z-20 p-3.5 mt-auto">
                    <span className="inline-flex px-2 py-0.5 rounded bg-purple-700/90 border border-purple-500/40 text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                      SISI PROFESIONAL
                    </span>
                    <p className="text-xs text-white font-extrabold mt-1 leading-tight">
                      OPERASIONAL & DIGITAL
                    </p>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                      Administrasi ritel, enumerasi data, web dev & integrasi AI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Pendidikan & Compact POAC Framework */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-left">
            
            {/* Pendidikan Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-indigo-500/40 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)] transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(99,102,241,0.3)] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-wider">RIWAYAT PENDIDIKAN</span>
                  <h4 className="text-white font-extrabold text-base sm:text-lg leading-tight mt-0.5">{education.institution}</h4>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300 border-t border-slate-800 pt-3.5">
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-indigo-400 font-bold uppercase block text-[9px]">PROGRAM STUDI</span>
                  <span className="font-sans font-bold text-white">{education.degree}</span>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-indigo-400 font-bold uppercase block text-[9px]">PERIODE</span>
                  <span className="font-sans font-bold text-white">{education.period}</span>
                </div>
              </div>

              <div className="mt-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="block text-[9px] font-mono text-indigo-400 font-bold uppercase tracking-wider">FOKUS AKADEMIS</span>
                <p className="text-xs text-slate-300 font-medium mt-0.5 leading-relaxed">
                  {education.focus}
                </p>
              </div>
            </div>

            {/* Cara Saya Bekerja (Compact POAC Framework) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-indigo-500/40 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)] transition-all duration-300">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 text-indigo-400" />
                  <h3 className="text-white text-sm font-extrabold tracking-tight">
                    METODOLOGI KERJA (POAC)
                  </h3>
                </div>
                
                <button
                  onClick={() => setShowPoacDetails(!showPoacDetails)}
                  className="text-[11px] font-mono font-bold text-indigo-300 hover:text-white flex items-center gap-1 cursor-pointer bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 hover:border-indigo-500/40"
                >
                  <span>{showPoacDetails ? "Ringkas" : "Rincian"}</span>
                  {showPoacDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Step Badges Row */}
              <div className="grid grid-cols-4 gap-2 mb-2">
                {poacModel.map((step) => (
                  <div key={step.phase} className="p-2 bg-slate-950 rounded-xl border border-slate-800 text-center">
                    <span className="w-6 h-6 rounded-lg bg-indigo-950 border border-indigo-500/30 text-indigo-300 font-bold text-xs font-mono inline-flex items-center justify-center mb-1">
                      {step.phase}
                    </span>
                    <span className="block text-[10px] font-extrabold text-white leading-tight">
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
                    className="overflow-hidden mt-3 pt-3 border-t border-slate-800 space-y-2 text-xs"
                  >
                    {poacModel.map((step) => (
                      <div key={step.phase} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-start gap-2.5">
                        <span className="font-mono font-black text-indigo-400 text-xs shrink-0">{step.phase}:</span>
                        <p className="text-slate-300 leading-relaxed font-medium">{step.desc}</p>
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
