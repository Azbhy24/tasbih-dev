import { useState } from "react";
import { 
  Building2, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ArrowUpRight, 
  Users, 
  FileSpreadsheet, 
  BookOpenCheck,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface JourneyMilestone {
  year: string;
  role: string;
  organization: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  keyHighlight: string;
}

const JOURNEY_DATA: JourneyMilestone[] = [
  {
    year: "2026",
    role: "Ketua Ikatan Alumni (IKA)",
    organization: "MA Biharul Ulum Ma'arif",
    location: "Pinrang / Parepare, Sulsel",
    type: "Kepemimpinan Organisasi & Alumni",
    summary: "Memimpin koordinasi jejaring alumni madrasah aliyah, merancang temu alumni berkala, serta menyusun program pembimbingan studi lanjut bagi adik-adik santri/siswa madrasah.",
    responsibilities: [
      "Mengkoordinir database dan komunikasi jejaring lintas angkatan alumni madrasah.",
      "Menyelenggarakan forum orientasi kampus dan pembagian informasi beasiswa perguruan tinggi.",
      "Membangun sinergi antara alumni dan pihak pimpinan madrasah untuk kegiatan sosial."
    ],
    keyHighlight: "Peningkatan keterhubungan alumni dan penyelenggaraan agenda mentoring studi lanjut."
  },
  {
    year: "2025",
    role: "Enumerator Lapangan",
    organization: "PT ESC Indonesia (Riset & Survei)",
    location: "Wilayah Sulawesi Selatan",
    type: "Riset Lapangan & Pengumpulan Data",
    summary: "Bertugas sebagai enumerator lapangan dalam pengumpulan data primer, wawancara responden terstruktur, penginputan kuesioner digital, dan verifikasi validitas data lapangan.",
    responsibilities: [
      "Melakukan wawancara tatap muka langsung kepada responden sesuai instrumen penelitian resmi.",
      "Memastikan data yang diinput bebas duplikasi dan memenuhi standar validitas metodologi riset.",
      "Menyusun rekapitulasi progres harian kepada koordinator tim riset ESC Indonesia."
    ],
    keyHighlight: "Penyelesaian target survei 100% tepat waktu dengan tingkat akurasi data yang tinggi."
  },
  {
    year: "2024",
    role: "Staf Sekretariat Jurnal EDIUM",
    organization: "Fakultas Tarbiyah IAIN Parepare",
    location: "Kampus IAIN Parepare",
    type: "Administrasi & Pengelolaan Naskah Akademik",
    summary: "Mendukung operasional tata kelola naskah jurnal ilmiah Open Journal Systems (OJS), pengarsipan artikel penelitian, korespondensi naskah, dan verifikasi format penulisan akademik.",
    responsibilities: [
      "Membantu proses registrasi dan pengecekan kelengkapan naskah ilmiah yang masuk ke portal OJS.",
      "Mengatur pengarsipan dokumen fisik dan digital berkas terbitan jurnal berkala.",
      "Mendukung korespondensi teknis antara pengelola jurnal, reviewer, dan penulis artikel."
    ],
    keyHighlight: "Mendukung kelancaran penerbitan edisi berkala Jurnal EDIUM Fakultas Tarbiyah."
  },
  {
    year: "Ongoing",
    role: "Pengelola Administrasi & Kas",
    organization: "Warung Amma Ika (Usaha Keluarga)",
    location: "Pinrang, Sulsel",
    type: "Operasional & Digitalisasi Toko",
    summary: "Mengelola tata kelola stok, pencatatan transaksi kas harian, dan menginisiasi pembuatan aplikasi web kasir & katalog untuk mempermudah operasional toko kelontong keluarga.",
    responsibilities: [
      "Mencatat mutasi kas masuk dan keluar secara teratur.",
      "Membangun katalog web sederhana dan sistem kasir digital untuk mempercepat pelayanan.",
      "Mengecek rotasi stok barang sembako untuk mencegah barang kosong."
    ],
    keyHighlight: "Transformasi pencatatan kas toko dari buku tulis manual ke sistem digital praktis."
  }
];

export default function Experience() {
  const [selectedMilestone, setSelectedMilestone] = useState<JourneyMilestone>(JOURNEY_DATA[0]);

  return (
    <section 
      id="experience" 
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-stone-200/80"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-200/80 pb-4 mb-12 text-left">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-1">
            <span className="text-blue-600 font-bold">03 /</span>
            <span className="text-stone-900 font-semibold tracking-wider uppercase">PERJALANAN & PENGALAMAN NYATA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 tracking-tight">
            Journey & Real Roles.
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-500 font-mono mt-2 sm:mt-0 max-w-xs text-left sm:text-right">
          Aktivitas riil di sekretariat jurnal kampus, riset lapangan, kepemimpinan alumni, dan operasional.
        </p>
      </div>

      {/* EDITORIAL ASYMMETRIC TIMELINE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Year Anchors (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <p className="text-xs font-mono text-stone-400 uppercase font-semibold pb-1 tracking-wider text-left">
            Pilih Milestone Tahun:
          </p>

          <div className="flex flex-col gap-2.5">
            {JOURNEY_DATA.map((item) => {
              const isSelected = selectedMilestone.year === item.year;
              return (
                <button
                  key={item.year}
                  onClick={() => setSelectedMilestone(item)}
                  className={`p-4 rounded-2xl text-left transition-all border cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-stone-900 text-white border-stone-900 shadow-md translate-x-1"
                      : "bg-white text-stone-800 border-stone-200/80 hover:bg-stone-50 hover:border-stone-300"
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className={`text-2xl font-serif font-bold ${isSelected ? "text-blue-400" : "text-stone-900"}`}>
                        {item.year}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isSelected ? "bg-stone-800 text-stone-300" : "bg-stone-100 text-stone-600"
                      }`}>
                        {item.type.split("&")[0]}
                      </span>
                    </div>
                    <p className={`text-xs font-semibold truncate ${isSelected ? "text-stone-100" : "text-stone-700"}`}>
                      {item.role}
                    </p>
                    <p className={`text-[11px] truncate ${isSelected ? "text-stone-400" : "text-stone-500"}`}>
                      {item.organization}
                    </p>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? "text-blue-400 translate-x-0.5" : "text-stone-300"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Milestone Editorial Detail Canvas (8 cols) */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMilestone.year}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl sm:rounded-3xl border border-stone-300 shadow-sm p-6 sm:p-8 text-left space-y-6"
            >
              {/* Header Info */}
              <div className="space-y-2 border-b border-stone-200 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase border border-blue-200/60">
                    {selectedMilestone.type}
                  </span>
                  <span className="text-xs font-mono text-stone-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    {selectedMilestone.location}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                  {selectedMilestone.role}
                </h3>
                
                <p className="text-sm font-semibold text-stone-700 font-mono">
                  {selectedMilestone.organization} · <span className="text-blue-600">{selectedMilestone.year}</span>
                </p>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-wider">
                  Ringkasan Peran & Tanggung Jawab
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {selectedMilestone.summary}
                </p>
              </div>

              {/* Verified Checklist */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-wider">
                  Pekerjaan & Tanggung Jawab Nyata:
                </h4>
                <div className="space-y-2">
                  {selectedMilestone.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200/80 text-xs text-stone-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Key Highlight */}
              <div className="p-4 rounded-xl bg-stone-900 text-white flex items-center justify-between text-xs font-mono">
                <div className="space-y-0.5">
                  <span className="text-[10px] text-blue-400 uppercase font-semibold">Hasil Kunci:</span>
                  <p className="text-stone-200 font-medium font-sans">{selectedMilestone.keyHighlight}</p>
                </div>
                <span className="text-emerald-400 font-bold hidden sm:inline">Verified</span>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
