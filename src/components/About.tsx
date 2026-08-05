import { BookOpen, CheckCircle, GraduationCap, LayoutGrid, Award, Settings } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";
import almetImage from "../assets/images/almet_mahasiswa_1781399345497.jpg";
import jasImage from "../assets/images/jas_formal_1781399324196.jpg";

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
    <section id="about" className="relative py-24 border-t border-slate-200 bg-white">
      {/* Background Ambient graphics */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-indigo-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider text-indigo-800 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200 shadow-sm">
            PROFIL PROFESIONAL & AKADEMIK
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Menyatukan Manajemen Pendidikan, Operasional Bisnis, dan Teknologi
          </h2>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Side: Editorial Bio Statement & Personal Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden shadow-sm">
              <h3 className="text-[11px] font-mono font-bold text-indigo-700 tracking-wider uppercase">01 // VISI MENDASAR</h3>
              <blockquote className="mt-4 text-xl sm:text-2xl text-slate-900 font-serif leading-relaxed italic border-l-4 border-indigo-600 pl-4 font-semibold">
                "{bio.tagline}"
              </blockquote>
              <p className="mt-5 text-slate-700 text-base leading-relaxed font-normal">
                {bio.extendedBio}
              </p>
            </div>

            {/* Dual Collage */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden shadow-sm">
              <h3 className="text-[11px] font-mono font-bold text-indigo-700 tracking-wider uppercase">02 // REKAM JEJAK BERGANDA</h3>
              <p className="text-sm text-slate-600 mt-1 mb-6">Inisiatif akademis di kampus dan kepemimpinan operasional nyata di lapangan.</p>
              
              <div className="grid grid-cols-2 gap-4 items-stretch">
                {/* Photo 1: Almet Mahasiswa */}
                <div className="relative rounded-xl overflow-hidden border border-emerald-300 bg-slate-900 flex flex-col justify-end h-64 sm:h-72 shadow-md group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent z-10 opacity-90" />
                  <img
                    src={almetImage}
                    alt="Tasbih Almet Mahasiswa"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="relative z-20 p-3.5 mt-auto">
                    <span className="inline-flex px-2 py-0.5 rounded bg-emerald-800 text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                      Sisi Akademis
                    </span>
                    <p className="text-xs text-white font-extrabold mt-1 leading-tight">
                      Pilar Akademik & Leadership
                    </p>
                    <p className="text-[11px] text-slate-200 mt-1 font-sans leading-snug">
                      S1 MPI IAIN Parepare & Ketua Alumni Regional.
                    </p>
                  </div>
                </div>

                {/* Photo 2: Jas Formal */}
                <div className="relative rounded-xl overflow-hidden border border-indigo-300 bg-slate-900 flex flex-col justify-end h-64 sm:h-72 shadow-md group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent z-10 opacity-90" />
                  <img
                    src={jasImage}
                    alt="Tasbih Jas Formal"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="relative z-20 p-3.5 mt-auto">
                    <span className="inline-flex px-2 py-0.5 rounded bg-indigo-800 text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                      Sisi Professional
                    </span>
                    <p className="text-xs text-white font-extrabold mt-1 leading-tight">
                      Digital Builder & Ritel
                    </p>
                    <p className="text-[11px] text-slate-200 mt-1 font-sans leading-snug">
                      Admin Warung Amma' Ika & Pengembang Web.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Stats or Mission Points */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-left">
                <Award className="w-5 h-5 text-indigo-600 mb-2" />
                <h4 className="text-slate-900 text-xs font-bold font-mono tracking-wider uppercase">Lead Locally</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Kepemimpinan efektif pengurus organisasi alumni sekolah.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-left">
                <Settings className="w-5 h-5 text-indigo-600 mb-2" />
                <h4 className="text-slate-900 text-xs font-bold font-mono tracking-wider uppercase">Build Modern</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Pengembangan sistem web dan otomatisasi alur kerja digital.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Education Block & The POAC Framework Diagram */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-left">
            {/* Academic Institution Card */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold text-indigo-700 uppercase tracking-wider">LATAR BELAKANG PENDIDIKAN</span>
                  <h4 className="text-slate-900 font-extrabold text-base leading-tight mt-0.5">{education.institution}</h4>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-slate-800 border-t border-slate-200 pt-4">
                <div>
                  <span className="text-indigo-700 font-bold uppercase tracking-wider">PROGRAM STUDI:</span> {education.degree}
                </div>
                <div>
                  <span className="text-indigo-700 font-bold uppercase tracking-wider">PERIODE:</span> {education.period}
                </div>
              </div>

              {/* Focus of studies */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="block text-[10px] font-mono text-indigo-800 font-bold uppercase tracking-wider">FOKUS UTAMA STUDI</span>
                <p className="text-xs text-slate-700 font-medium mt-1.5 leading-relaxed">
                  {education.focus}
                </p>
              </div>

              <ul className="mt-5 space-y-2.5 text-xs text-slate-700 font-sans">
                {education.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* POAC Management Framework Visual Element */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LayoutGrid className="w-4 h-4 text-indigo-600" />
                <h4 className="text-indigo-800 text-xs font-bold font-mono tracking-wider uppercase">
                  Prinsip Manajemen Pendidikan & Sistem (POAC)
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {poacModel.map((step) => (
                  <div
                    key={step.phase}
                    className="p-4 rounded-xl bg-white border border-slate-200 flex gap-3.5 shadow-sm hover:border-indigo-300 transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center font-bold text-lg font-mono text-indigo-700 shrink-0">
                      {step.phase}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-900 text-sm font-extrabold leading-tight">{step.title}</span>
                      <span className="text-[10px] text-slate-500 font-bold font-mono mt-0.5 uppercase">{step.subtitle}</span>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{step.desc}</p>
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
