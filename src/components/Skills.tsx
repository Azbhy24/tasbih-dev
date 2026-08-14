import { portfolioData } from "../data/portfolio";

export default function Skills() {
  const competencyGroups = [
    {
      index: "01",
      domain: "MANAJEMEN & TATA KELOLA",
      title: "Administrasi & Manajemen Pendidikan",
      summary: "Keahlian dalam tata kelola administrasi pendidikan, manajemen berkas ilmiah, pencatatan keuangan ritel, dan perumusan SOP operasional.",
      competencies: [
        "Manajemen Pendidikan Islam & Tata Kelola Institusi",
        "Administrasi Penerbitan Jurnal Ilmiah (Jurnal EDIUM)",
        "Pencatatan Keuangan & Arus Kas Ritel Terstruktur",
        "Pengumpulan & Enumerasi Data Lapangan (PT ESC)",
        "Penyusunan Laporan Pertanggungjawaban (LPJ)"
      ]
    },
    {
      index: "02",
      domain: "DIGITAL & WEB ENGINEERING",
      title: "Pengembangan Web & Sistem Informasi",
      summary: "Pembangunan aplikasi web responsif dan modular berbasis stack modern dengan arsitektur data yang bersih dan efisien.",
      competencies: [
        "React.js & TypeScript Modern Web Architecture",
        "Tailwind CSS Layouting & Design Systems",
        "Firebase Firestore & Cloud Authentication",
        "Mobile Packaging with Capacitor (Android APK)",
        "RESTful API Integration & Client State Management"
      ]
    },
    {
      index: "03",
      domain: "ORGANISASI & LEADERSHIP",
      title: "Kepemimpinan & Koordinasi Tim",
      summary: "Pengalaman nyata dalam memimpin struktur organisasi alumni, menjalin koordinasi lintas generasi, dan komunikasi efektif.",
      competencies: [
        "Kepemimpinan Ikatan Alumni (Ketua IKA)",
        "Koordinasi Anggota & Komunikasi Komunitas (178+ Anggota)",
        "Manajemen Program Kerja & Pengorganisasian Event",
        "Public Speaking & Presentasi Ilmiah (ACIEM 2026)",
        "Manajemen Konflik & Penyelesaian Masalah Tim"
      ]
    },
    {
      index: "04",
      domain: "AI & WORKFLOW AUTOMATION",
      title: "Automasi & Pemanfaatan AI Modern",
      summary: "Pemanfaatan model kecerdasan buatan Google Gemini dan alur kerja automasi untuk memangkas inefisiensi administrasi.",
      competencies: [
        "Google Gemini API SDK Integration",
        "Prompt Engineering untuk Pengolahan Teks & Data",
        "AI-Assisted Development & Vibe Coding Workflow",
        "Otomatisasi Rekapitulasi Data & Alur Kerja Sederhana",
        "Optimalisasi Perangkat Kerja Digital (Google Workspace)"
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-28 sm:py-36 border-t border-neutral-800/80 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                05 / KOMPETENSI & SPESIALISASI
              </span>
              <span className="h-px w-8 bg-neutral-800" />
            </div>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Struktur Keahlian & Spesialisasi Kerja
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-normal">
            Daftar kompetensi teruji yang menggabungkan kedisiplinan ilmu manajemen dengan eksekusi rekayasa perangkat lunak digital.
          </p>
        </div>

        {/* 4-Column Editorial Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {competencyGroups.map((group) => (
            <div
              key={group.index}
              id={`skill-group-${group.index}`}
              className="border-t border-neutral-800 pt-6 flex flex-col justify-between text-left group hover:border-neutral-600 transition-colors"
            >
              <div>
                {/* Index header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-emerald-400">
                    // {group.index}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                    {group.domain}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  {group.title}
                </h3>

                <p className="text-xs text-neutral-400 mt-2.5 leading-relaxed">
                  {group.summary}
                </p>

                {/* Numbered / Dashed Competency List */}
                <ul className="mt-6 space-y-2.5 border-t border-neutral-900 pt-4">
                  {group.competencies.map((comp, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <span className="text-neutral-600 font-mono text-[11px] mt-0.5 shrink-0">
                        {String(cIdx + 1).padStart(2, "0")}.
                      </span>
                      <span className="leading-relaxed">{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-900 text-[10px] font-mono text-neutral-600 uppercase">
                KOMPETENSI TERVERIFIKASI
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
