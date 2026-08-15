import { useState } from "react";
import { 
  FileText, 
  Sparkles, 
  Send, 
  Copy, 
  Check, 
  RefreshCw, 
  Bot, 
  BookOpen, 
  Building2,
  Calendar,
  Layers,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DocumentTemplate {
  id: string;
  category: string;
  title: string;
  description: string;
  fields: { key: string; label: string; placeholder: string; defaultValue: string }[];
  generate: (values: Record<string, string>) => string;
}

const TEMPLATES: DocumentTemplate[] = [
  {
    id: "surat-undangan-madrasah",
    category: "Administrasi Madrasah",
    title: "Surat Undangan Rapat Komite Madrasah",
    description: "Format surat dinas resmi standar Kemenag/Madrasah untuk pertemuan komite & wali santri.",
    fields: [
      { key: "noSurat", label: "Nomor Surat", placeholder: "Contoh: 045/MA-BU/ADM/VIII/2026", defaultValue: "045/MA-BU/ADM/VIII/2026" },
      { key: "namaMadrasah", label: "Nama Lembaga", placeholder: "Nama Madrasah / TPA", defaultValue: "Madrasah Aliyah Biharul Ulum Ma'arif" },
      { key: "agenda", label: "Agenda Pembahasan", placeholder: "Contoh: Evaluasi Awal Semester & Sarpras", defaultValue: "Rapat Koordinasi Evaluasi Pembelajaran & Sarpras" },
      { key: "hariTanggal", label: "Hari / Tanggal", placeholder: "Contoh: Senin, 24 Agustus 2026", defaultValue: "Senin, 24 Agustus 2026" },
      { key: "waktu", label: "Waktu & Tempat", placeholder: "09.00 WITA - Selesai / Aula Utama", defaultValue: "09.00 WITA - Selesai (Aula Pertemuan)" }
    ],
    generate: (vals) => `KOP SURAT LEMBAGA PENDIDIKAN
${vals.namaMadrasah.toUpperCase()}
Jl. Pendidikan No. 12, Sulawesi Selatan
======================================================================

Nomor   : ${vals.noSurat}
Lampiran: -
Perihal : Undangan ${vals.agenda}

Kepada Yth.
Bapak/Ibu Pengurus Komite & Wali Santri
di Tempat

Assalamu'alaikum Warahmatullahi Wabarakatuh,

Puji syukur kita panjatkan ke hadirat Allah SWT atas limpahan rahmat dan karunia-Nya. Dalam rangka meningkatkan mutu tata kelola lembaga serta mempererat koordinasi pembelajaran, kami mengundang Bapak/Ibu untuk menghadiri pertemuan yang insyaAllah akan dilaksanakan pada:

  Hari / Tanggal : ${vals.hariTanggal}
  Waktu          : ${vals.waktu}
  Tempat         : Aula Pertemuan ${vals.namaMadrasah}
  Agenda         : ${vals.agenda}

Mengingat pentingnya agenda tersebut, kami sangat mengharapkan kehadiran Bapak/Ibu tepat pada waktunya.

Demikian undangan ini kami sampaikan. Atas perhatian dan kerja samanya, kami ucapkan terima kasih.

Wassalamu'alaikum Warahmatullahi Wabarakatuh.

Parepare, ${new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}

Mengetahui,
Kepala / Koordinator Tata Usaha


Tasbih, S.Pd.
NIP/NIDN: Administrasi & Tata Usaha MPI`
  },
  {
    id: "rekap-hafalan-santri",
    category: "Pendidikan Al-Qur'an / TPA",
    title: "Format Rekapitulasi Kemajuan Santri (TPA)",
    description: "Template monitoring tahsin & tahfidz hafalan santri per kelompok halaqah.",
    fields: [
      { key: "namaTpa", label: "Nama TPA / Halaqah", placeholder: "TPA Biharul Ulum", defaultValue: "TPA Biharul Ulum Ma'arif" },
      { key: "namaUstadz", label: "Pembimbing / Ustadz", placeholder: "Ustadz Tasbih", defaultValue: "Tasbih (Koordinator Pembelajaran)" },
      { key: "periode", label: "Periode Monitoring", placeholder: "Bulan Agustus 2026", defaultValue: "Agustus 2026" }
    ],
    generate: (vals) => `LEMBAR REKAPITULASI CAPAIAN SANTRI
LEMBAGA: ${vals.namaTpa.toUpperCase()}
PERIODE: ${vals.periode.toUpperCase()}
PEMBIMBING: ${vals.namaUstadz}
======================================================================

No | Nama Santri    | Capaian Jilid/Juz | Status Hafalan    | Catatan Tajwid
---+----------------+-------------------+-------------------+-----------------
01 | Ahmad Fauzi    | Al-Qur'an Juz 1   | Surah Al-Baqarah  | Makhraj 'Ain baik
02 | Siti Maryam    | Iqro Jilid 5      | Hal. 15-20        | Latihan Mad Thobi'i
03 | Muhammad Bilal | Al-Qur'an Juz 30  | An-Naba s/d Al-A'la| Lancar & Tartil
04 | Nur Aisyah     | Iqro Jilid 6      | Pengenalan Waqaf  | Siap Tasmi'

Catatan Evaluasi Koordinator:
1. Santri menunjukkan perkembangan konsisten dalam kehadiran halaqah.
2. Penggunaan aplikasi NgajiKu mempercepat pemantauan hafalan harian di rumah.

Disahkan oleh:
Koordinator Kurikulum & Administrasi TPA
Tasbih, S.Pd.`
  }
];

export default function AdminAssistantTool() {
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);
  const [formValues, setFormValues] = useState<Record<string, string>>({
    noSurat: "045/MA-BU/ADM/VIII/2026",
    namaMadrasah: "Madrasah Aliyah Biharul Ulum Ma'arif",
    agenda: "Rapat Koordinasi Evaluasi Pembelajaran & Sarpras",
    hariTanggal: "Senin, 24 Agustus 2026",
    waktu: "09.00 WITA - Selesai (Aula Pertemuan)",
    namaTpa: "TPA Biharul Ulum Ma'arif",
    namaUstadz: "Tasbih (Koordinator Pembelajaran)",
    periode: "Agustus 2026"
  });
  const [isCopied, setIsCopied] = useState(false);

  const currentTemplate = TEMPLATES[selectedTemplateIndex];

  const handleInputChange = (key: string, val: string) => {
    setFormValues(prev => ({ ...prev, [key]: val }));
  };

  const outputDocument = currentTemplate.generate(formValues);

  const handleCopy = () => {
    navigator.clipboard.writeText(outputDocument);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-stone-300 shadow-sm overflow-hidden text-left">
      {/* Top Header */}
      <div className="bg-stone-900 text-white p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-b border-stone-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-white tracking-wide">Interactive Generator: Tata Usaha & Dokumen Madrasah</h4>
              <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                MPI Toolkit
              </span>
            </div>
            <p className="text-xs text-stone-400 font-mono">Simulasi otomatisasi administrasi instan berbasis kompetensi S1 MPI</p>
          </div>
        </div>

        {/* Template Selector Tabs */}
        <div className="flex gap-1.5">
          {TEMPLATES.map((tmpl, idx) => (
            <button
              key={tmpl.id}
              onClick={() => setSelectedTemplateIndex(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                selectedTemplateIndex === idx
                  ? "bg-blue-600 text-white font-bold"
                  : "bg-stone-800 hover:bg-stone-700 text-stone-300"
              }`}
            >
              {tmpl.category}
            </button>
          ))}
        </div>
      </div>

      {/* Main Form & Live Preview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Input Form (5 cols) */}
        <div className="lg:col-span-5 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-stone-200 bg-stone-50/60 space-y-4">
          <div>
            <h5 className="text-xs font-mono font-bold text-stone-900 uppercase">
              {currentTemplate.title}
            </h5>
            <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
              {currentTemplate.description}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {currentTemplate.fields.map((field) => (
              <div key={field.key} className="space-y-1">
                <label className="text-[11px] font-mono font-semibold text-stone-700 block">
                  {field.label}
                </label>
                <input
                  type="text"
                  value={formValues[field.key] || ""}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full px-3 py-1.5 bg-white rounded-lg border border-stone-300 text-xs font-sans text-stone-900 focus:outline-blue-600 shadow-2xs"
                />
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                const defaults: Record<string, string> = {};
                currentTemplate.fields.forEach(f => defaults[f.key] = f.defaultValue);
                setFormValues(prev => ({ ...prev, ...defaults }));
              }}
              className="text-[11px] font-mono text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset ke Contoh Standar</span>
            </button>
          </div>
        </div>

        {/* Right Column: Live Formatted Document Preview (7 cols) */}
        <div className="lg:col-span-7 p-4 sm:p-6 bg-[#fcfbfa] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono font-bold text-stone-900 uppercase">
                  Hasil Dokumen Otomatis (Realtime Preview)
                </span>
              </div>

              <button
                onClick={handleCopy}
                className="px-3 py-1 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-mono flex items-center gap-1.5 cursor-pointer transition-colors shadow-2xs"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-blue-400" />
                    <span>Salin Naskah</span>
                  </>
                )}
              </button>
            </div>

            {/* Formatted Text Paper */}
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-300 shadow-xs font-mono text-[11px] sm:text-xs text-stone-800 leading-relaxed whitespace-pre-wrap max-h-96 overflow-y-auto custom-scrollbar select-all">
              {outputDocument}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-[11px] font-mono text-stone-500">
            <span>Standar: Format Tata Usaha & Kemenag RI</span>
            <span className="text-stone-700 font-semibold">Siap Salin ke Ms. Word</span>
          </div>
        </div>
      </div>
    </div>
  );
}
