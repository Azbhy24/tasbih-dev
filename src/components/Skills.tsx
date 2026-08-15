export default function Skills() {
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
      id="skills" 
      className="relative py-16 sm:py-24 border-t border-[#342a22] bg-[#0e0c0a] text-[#f4efe6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#342a22] pb-4 mb-8 sm:mb-12 text-left">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#d4a373]">
              CH 02 / KOMPETENSI
            </span>
            <span className="text-[#5c493a] font-mono">•</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Matriks Keahlian & Spesialisasi
            </h2>
          </div>
          <span className="font-mono text-[10px] text-[#a89e90] uppercase tracking-wider">
            Struktur Keahlian Terverifikasi
          </span>
        </div>

        {/* 4-Column Structured Technical Index */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-left">
          {skillDomains.map((domain) => (
            <div
              key={domain.code}
              id={`skill-domain-${domain.code}`}
              className="border-t border-[#342a22] pt-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] font-bold text-[#d4a373] bg-[#221b15] px-1.5 py-0.5 rounded">
                    {domain.code}
                  </span>
                  <span className="font-mono text-[10px] text-[#8e8476] uppercase tracking-widest">
                    DOMAIN
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#fdfaf5] tracking-tight uppercase">
                  {domain.domain}
                </h3>
                <p className="text-xs text-[#a89e90] mb-4 font-mono">
                  {domain.subtitle}
                </p>

                <ul className="space-y-2 border-t border-[#2b221a] pt-3">
                  {domain.items.map((item, idx) => (
                    <li key={idx} className="text-xs text-[#ded7cb] flex items-start gap-2 leading-relaxed">
                      <span className="text-[#d4a373] font-mono text-[10px] shrink-0 mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
