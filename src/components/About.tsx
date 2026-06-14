import { BookOpen, CheckCircle, GraduationCap, LayoutGrid, Award, Settings } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";

export default function About() {
  const { bio, education } = portfolioData;

  const poacModel = [
    {
      phase: "P",
      title: "Planning",
      subtitle: "Perencanaan Strategis",
      desc: "Menyusun peta jalan sistematis berbasis data analisis untuk pencapaian program kerja dan inisiatif.",
      cardColor: "border-indigo-500/15 bg-zinc-950/40 hover:border-indigo-500/30 hover:bg-zinc-900/10 shadow-2xl",
      badgeColor: "border-indigo-500/20 bg-indigo-950/20 text-indigo-400"
    },
    {
      phase: "O",
      title: "Organizing",
      subtitle: "Pengorganisasian Sumber Daya",
      desc: "Mendelegasikan dan menstrukturkan jaringan relasi internal & kolaborator eksternal secara optimal.",
      cardColor: "border-indigo-500/15 bg-zinc-950/40 hover:border-indigo-500/30 hover:bg-zinc-900/10 shadow-2xl",
      badgeColor: "border-indigo-500/20 bg-indigo-950/20 text-indigo-400"
    },
    {
      phase: "A",
      title: "Actuating",
      subtitle: "Pelaksanaan Aksi Nyata",
      desc: "Menjalankan, mengimplementasikan program kerja, dan mendistribusikan solusi digital cerdas.",
      cardColor: "border-indigo-500/15 bg-zinc-950/40 hover:border-indigo-500/30 hover:bg-zinc-900/10 shadow-2xl",
      badgeColor: "border-indigo-500/20 bg-indigo-950/20 text-indigo-400"
    },
    {
      phase: "C",
      title: "Controlling",
      subtitle: "Pengawasan & Evaluasi",
      desc: "Mengukur keberhasilan operasional menggunakan metrik real-time & instrumen audit internal.",
      cardColor: "border-indigo-500/15 bg-zinc-950/40 hover:border-indigo-500/30 hover:bg-zinc-900/10 shadow-2xl",
      badgeColor: "border-indigo-500/20 bg-indigo-950/20 text-indigo-400"
    }
  ];

  return (
    <section id="about" className="relative py-24 border-t border-indigo-950/40 bg-[#030306]">
      {/* Background Ambient Vector Lines/Circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-500/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-widest text-indigo-300 uppercase bg-zinc-950 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
            PROFIL PROFESIONAL
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Menyatukan Manajemen, Bisnis dan Kreativitas Digital
          </h2>
          <div className="w-12 h-[1px] bg-indigo-500/20 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Editorial Bio Statement & Personal Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <div className="p-8 rounded-xl glass-panel border-indigo-500/10 relative overflow-hidden group transition-colors hover:border-indigo-500/20 duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/5 to-transparent blur-md pointer-events-none" />
              
              <h3 className="text-[10px] font-mono font-bold text-indigo-400 tracking-widest uppercase">01 // ESSENCE</h3>
              <blockquote className="mt-6 text-xl sm:text-2xl text-zinc-300 font-serif leading-relaxed italic border-l border-indigo-500/20 pl-4">
                "{bio.tagline}"
              </blockquote>
              <p className="mt-6 text-zinc-400 text-sm leading-relaxed">
                {bio.extendedBio}
              </p>
            </div>

            {/* Micro Stats or Mission Points */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-zinc-950/40 border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300 text-left group">
                < Award className="w-5 h-5 text-indigo-400 mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-white text-xs font-bold font-mono tracking-widest uppercase">Lead locally</h4>
                <p className="text-[11px] text-zinc-400 mt-1 leading-snug">Menghubungkan alumni regional dengan instansi terintegrasi.</p>
              </div>
              <div className="p-6 rounded-xl bg-zinc-950/40 border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300 text-left group">
                < Settings className="w-5 h-5 text-indigo-400 mb-3 group-hover:rotate-45 transition-transform" />
                <h4 className="text-white text-xs font-bold font-mono tracking-widest uppercase">Build globally</h4>
                <p className="text-[11px] text-zinc-400 mt-1 leading-snug">Menguji integrasi API canggih untuk produktivitas tak terbatas.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Education Block & The POAC Framework Diagram */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-left">
            {/* Academic Institution Card */}
            <div className="p-8 rounded-xl glass-panel border-indigo-500/10 relative overflow-hidden transition-all duration-300 hover:border-indigo-500/20">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-500/5 to-transparent blur-lg pointer-events-none" />
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#030306] border border-indigo-500/30 flex items-center justify-center text-indigo-405">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono font-bold text-indigo-400 uppercase tracking-widest">EDUCATIONAL BACKGROUND</span>
                  <h4 className="text-white font-bold text-base leading-tight mt-0.5">{education.institution}</h4>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-zinc-300 border-t border-indigo-950/40 pt-4">
                <div>
                  <span className="text-indigo-400 font-bold uppercase tracking-wider">DEGREE:</span> {education.degree}
                </div>
                <div>
                  <span className="text-indigo-400 font-bold uppercase tracking-wider">PERIOD:</span> {education.period}
                </div>
              </div>

              {/* Focus of studies */}
              <div className="mt-4 p-4 rounded bg-indigo-950/10 border border-indigo-500/25">
                <span className="block text-[9px] font-mono text-indigo-300 uppercase tracking-widest leading-none">PRIMARY RESEARCH FOCUS</span>
                <p className="text-xs text-zinc-350 font-medium mt-1.5 leading-relaxed">
                  {education.focus}
                </p>
              </div>

              <ul className="mt-6 space-y-2.5 text-xs text-zinc-400 font-sans">
                {education.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5 animate-pulse" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* POAC Management Framework Visual Element */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LayoutGrid className="w-4 h-4 text-indigo-400" />
                <h4 className="text-indigo-400 text-[10px] font-bold font-mono tracking-widest uppercase">
                  Metodologi Integrasi Organisasi & Sistem (POAC)
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {poacModel.map((step) => (
                  <div
                    key={step.phase}
                    className={`p-4 rounded-xl border ${step.cardColor} flex gap-3.5 transition-all hover:scale-[1.02] duration-300`}
                  >
                    <div className={`w-9 h-9 rounded border flex items-center justify-center font-bold text-lg font-mono shrink-0 ${step.badgeColor}`}>
                      {step.phase}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-[13px] font-bold leading-tight">{step.title}</span>
                      <span className="text-[9px] text-zinc-400 uppercase font-mono mt-0.5">{step.subtitle}</span>
                      <p className="text-[11px] text-zinc-350 mt-2 leading-normal">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
