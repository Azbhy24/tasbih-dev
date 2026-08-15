import { 
  FileSpreadsheet, 
  BookOpen, 
  Laptop, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Layers 
} from "lucide-react";

export default function Skills() {
  const toolkits = [
    {
      category: "Administrasi & Tata Usaha",
      icon: FileSpreadsheet,
      badge: "Utama",
      items: [
        "Microsoft Word (Surat & Dokumen Resmi)",
        "Microsoft Excel (Pencatatan & Rekap Data)",
        "Google Workspace (Docs, Sheets, Drive)",
        "Pengarsipan Berkas Digital & Fisik",
        "Penyusunan Notulensi & Laporan Kegiatan"
      ]
    },
    {
      category: "Pendidikan & Madrasah",
      icon: BookOpen,
      badge: "Studi S1",
      items: [
        "Sistem Informasi Madrasah / Sekolah",
        "Manajemen Kurikulum & Jadwal Pembelajaran",
        "Administrasi Santri / Siswa",
        "Tata Kelola Lembaga TPA / Diniyah",
        "Komunikasi Koordinasi Antar Guru & Pengurus"
      ]
    },
    {
      category: "Digital Tools & Riset",
      icon: Laptop,
      badge: "Praktis",
      items: [
        "Open Journal Systems (OJS Workflow)",
        "Instrumen Kuesioner & Survei Lapangan",
        "Canva (Desain Informasi & Pengumuman)",
        "Digital POS (Aplikasi Kasir Toko)",
        "WhatsApp Business & Integrasi Kontak"
      ]
    },
    {
      category: "Teknologi Web Terapan",
      icon: Code2,
      badge: "Kekuatan Pendukung",
      items: [
        "React & TypeScript Dasar",
        "Tailwind CSS (Antarmuka Web Bersih)",
        "Vite & Deploy Vercel",
        "Git & GitHub (Version Control)",
        "Integrasi REST API Sederhana"
      ]
    },
    {
      category: "AI-Assisted Workflow",
      icon: Sparkles,
      badge: "Produktivitas",
      items: [
        "Prompting untuk Rekapitulasi Dokumen",
        "Penyusunan Draf Surat & Administrasi Cepat",
        "Pencarian & Ringkasan Bahan Riset",
        "Otomasi Alur Kerja Harian"
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-stone-200/80"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-200/80 pb-4 mb-10 text-left">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-1">
            <span className="text-blue-600 font-bold">05 /</span>
            <span className="text-stone-900 font-semibold tracking-wider uppercase">TOOLKIT & PERANGKAT KERJA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight">
            Things I Use.
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-500 font-mono mt-2 sm:mt-0 max-w-xs text-left sm:text-right">
          Kombinasi keahlian administrasi pendidikan, perangkat kantor, dan alat bantu digital terapan.
        </p>
      </div>

      {/* Grid of Toolkits (Categorized lists, no percent bars) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
        {toolkits.map((tool, idx) => {
          const Icon = tool.icon;
          return (
            <div 
              key={idx}
              className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-2xs hover:border-stone-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800">
                      <Icon className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <h3 className="text-xs font-bold text-stone-900 font-mono">
                      {tool.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                    {tool.badge}
                  </span>
                </div>

                <ul className="space-y-2">
                  {tool.items.map((item, i) => (
                    <li key={i} className="text-xs text-stone-600 flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
