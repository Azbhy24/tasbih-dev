import { CheckCircle, GraduationCap, LayoutGrid, Award, Settings, User } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import almetImage from "../assets/images/almet_mahasiswa_1781399345497.jpg";
import jasImage from "../assets/images/jas_formal_1781399324196.jpg";

export default function About() {
  const { education } = portfolioData;

  const poacModel = [
    {
      phase: "P",
      title: "Planning",
      subtitle: "Perencanaan",
      desc: "Memahami masalah dan menentukan tujuan.",
      cardColor: "border-slate-200 bg-white"
    },
    {
      phase: "O",
      title: "Organizing",
      subtitle: "Pengorganisasian",
      desc: "Menata orang, data, dan sumber daya.",
      cardColor: "border-slate-200 bg-white"
    },
    {
      phase: "A",
      title: "Actuating",
      subtitle: "Pelaksanaan",
      desc: "Menjalankan solusi dan memastikan pekerjaan bergerak.",
      cardColor: "border-slate-200 bg-white"
    },
    {
      phase: "C",
      title: "Controlling",
      subtitle: "Pengawasan & Evaluasi",
      desc: "Mengevaluasi hasil dan melakukan perbaikan.",
      cardColor: "border-slate-200 bg-white"
    }
  ];

  return (
    <section id="about" className="relative py-20 sm:py-24 border-t border-slate-200 bg-white">
      {/* Background Ambient graphics */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Pembuka */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-wider text-indigo-800 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200 shadow-2xs">
            TENTANG TASBIH
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Manajemen, pengalaman nyata, dan teknologi yang bekerja bersama.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-800 font-semibold leading-relaxed max-w-2xl mx-auto">
            Saya Tasbih. Saya tertarik pada bagaimana teknologi bisa membuat pekerjaan menjadi lebih sederhana, rapi, dan efisien.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Cerita Singkat & Dua Sisi Profil */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            {/* Cerita Singkat */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-2 mb-3">
                <User className="w-4 h-4 text-indigo-600" />
                <h3 className="text-xs font-mono font-bold text-indigo-700 tracking-wider uppercase">SEKILAS PROFIL</h3>
              </div>
              <div className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Latar belakang saya berada di bidang Manajemen Pendidikan Islam. Dari sana saya belajar tentang bagaimana sebuah organisasi direncanakan, dijalankan, dan dievaluasi.
                </p>
                <p>
                  Di luar akademik, saya mendapat pengalaman melalui organisasi, administrasi, bisnis ritel, pengelolaan data, dan berbagai proyek digital.
                </p>
                <p>
                  Pengalaman tersebut membuat saya melihat bahwa banyak pekerjaan sebenarnya bisa dibuat lebih sederhana dengan sistem yang tepat. Karena itu, saya mulai membangun website, sistem digital, dan workflow otomatisasi untuk membantu pekerjaan menjadi lebih rapi dan efisien.
                </p>
              </div>
            </div>

            {/* Dua Sisi Profil */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <h3 className="text-xs font-mono font-bold text-indigo-700 tracking-wider uppercase mb-4">DUA SISI PROFIL</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                {/* Photo 1: Akademik & Manajemen */}
                <div className="relative rounded-xl overflow-hidden border border-slate-300 bg-slate-900 flex flex-col justify-end h-64 sm:h-72 shadow-sm group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
                  <img
                    src={almetImage}
                    alt="Tasbih - Akademik & Manajemen"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="relative z-20 p-4 mt-auto">
                    <span className="inline-flex px-2 py-0.5 rounded bg-indigo-700 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                      SISI AKADEMIK
                    </span>
                    <p className="text-sm text-white font-extrabold mt-1.5 leading-tight">
                      AKADEMIK & MANAJEMEN
                    </p>
                    <p className="text-xs text-slate-200 mt-1 leading-snug font-sans">
                      Memahami perencanaan, pengorganisasian, pelaksanaan, dan evaluasi melalui pendidikan dan pengalaman organisasi.
                    </p>
                  </div>
                </div>

                {/* Photo 2: Operasional & Digital */}
                <div className="relative rounded-xl overflow-hidden border border-slate-300 bg-slate-900 flex flex-col justify-end h-64 sm:h-72 shadow-sm group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
                  <img
                    src={jasImage}
                    alt="Tasbih - Operasional & Digital"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="relative z-20 p-4 mt-auto">
                    <span className="inline-flex px-2 py-0.5 rounded bg-purple-700 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                      SISI PROFESIONAL
                    </span>
                    <p className="text-sm text-white font-extrabold mt-1.5 leading-tight">
                      OPERASIONAL & DIGITAL
                    </p>
                    <p className="text-xs text-slate-200 mt-1 leading-snug font-sans">
                      Memahami pekerjaan nyata melalui administrasi, bisnis ritel, pengelolaan data, pengembangan web, dan otomatisasi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Pendidikan & Cara Saya Bekerja (POAC) */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            {/* Pendidikan Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold text-indigo-700 uppercase tracking-wider">PENDIDIKAN</span>
                  <h4 className="text-slate-900 font-extrabold text-base sm:text-lg leading-tight mt-0.5">{education.institution}</h4>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-800 border-t border-slate-200/80 pt-4">
                <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="text-indigo-700 font-bold uppercase block text-[10px]">PROGRAM STUDI:</span>
                  <span className="font-sans font-bold text-slate-900">{education.degree}</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="text-indigo-700 font-bold uppercase block text-[10px]">PERIODE:</span>
                  <span className="font-sans font-bold text-slate-900">{education.period}</span>
                </div>
              </div>

              <div className="mt-3 p-3.5 rounded-xl bg-white border border-slate-200">
                <span className="block text-[10px] font-mono text-indigo-700 font-bold uppercase tracking-wider">FOKUS STUDI</span>
                <p className="text-xs text-slate-700 font-medium mt-1 leading-relaxed">
                  {education.focus}
                </p>
              </div>
            </div>

            {/* Cara Saya Bekerja (POAC Framework) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <div className="flex flex-col gap-1 mb-5 border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-slate-900 text-base font-extrabold tracking-tight">
                    CARA SAYA BEKERJA
                  </h3>
                </div>
                <p className="text-xs font-mono text-indigo-700 font-bold uppercase tracking-wider">
                  Planning → Organizing → Actuating → Controlling
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {poacModel.map((step) => (
                  <div
                    key={step.phase}
                    className="p-3.5 rounded-xl bg-white border border-slate-200 flex gap-3 shadow-2xs hover:border-indigo-300 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center font-bold text-base font-mono text-indigo-700 shrink-0">
                      {step.phase}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-900 text-xs sm:text-sm font-extrabold leading-tight">{step.title}</span>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
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

