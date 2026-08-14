export default function Skills() {
  const competencyGroups = [
    {
      index: "01",
      domain: "MANAJEMEN & TATA KELOLA",
      title: "Administrasi & MPI",
      summary: "Keahlian dalam tata kelola administrasi pendidikan, manajemen berkas ilmiah, pencatatan keuangan ritel, dan SOP operasional.",
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
      title: "Pengembangan Web Modern",
      summary: "Pembangunan aplikasi web responsif dan modular berbasis stack modern dengan arsitektur data yang bersih dan efisien.",
      competencies: [
        "React.js & TypeScript Modern Architecture",
        "Tailwind CSS Layouting & Design Systems",
        "Firebase Firestore & Cloud Authentication",
        "Mobile Packaging with Capacitor (Android APK)",
        "RESTful API Integration & Client State Management"
      ]
    },
    {
      index: "03",
      domain: "ORGANISASI & LEADERSHIP",
      title: "Kepemimpinan Tim & Komunitas",
      summary: "Pengalaman nyata dalam memimpin struktur organisasi alumni, menjalin koordinasi lintas generasi, dan komunikasi publik.",
      competencies: [
        "Kepemimpinan Ikatan Alumni (Ketua IKA)",
        "Koordinasi Anggota & Komunitas (178+ Anggota)",
        "Manajemen Program Kerja & Pengorganisasian Event",
        "Public Speaking & Presentasi Ilmiah (ACIEM 2026)",
        "Manajemen Konflik & Penyelesaian Masalah Tim"
      ]
    },
    {
      index: "04",
      domain: "AI & WORKFLOW AUTOMATION",
      title: "Automasi & AI Modern",
      summary: "Pemanfaatan model AI Google Gemini dan alur kerja automasi untuk memangkas inefisiensi administrasi.",
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
    <section id="skills" className="relative py-16 sm:py-24 md:py-32 border-t border-neutral-800/80 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-neutral-800 pb-6 sm:pb-8 mb-10 sm:mb-16">
          <div className="text-left">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-emerald-400 font-bold">
                05 / KOMPETENSI & SPESIALISASI
              </span>
              <span className="h-px w-6 sm:w-8 bg-neutral-800" />
            </div>
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-snug"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Struktur Keahlian & Spesialisasi Kerja
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-normal text-left">
            Daftar kompetensi teruji yang menggabungkan kedisiplinan ilmu manajemen dengan eksekusi rekayasa perangkat lunak digital.
          </p>
        </div>

        {/* 4-Column Editorial Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {competencyGroups.map((group) => (
            <div
              key={group.index}
              id={`skill-group-${group.index}`}
              className="border-t border-neutral-800 pt-5 sm:pt-6 flex flex-col justify-between text-left group hover:border-neutral-600 transition-colors"
            >
              <div>
                {/* Index header */}
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="font-mono text-xs font-bold text-emerald-400">
                    // {group.index}
                  </span>
                  <span className="font-mono text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-widest">
                    {group.domain}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {group.title}
                </h3>
                
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-normal">
                  {group.summary}
                </p>

                {/* Competency items */}
                <div className="mt-4 pt-3 border-t border-neutral-800/60 space-y-2">
                  {group.competencies.map((comp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <span className="text-emerald-400 font-mono text-[10px] shrink-0 mt-0.5">•</span>
                      <span className="leading-snug">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>STANDAR MUTU</span>
                <span className="text-neutral-400">Terverifikasi</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
