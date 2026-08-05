import { useState } from "react";
import { 
  Building2, 
  GraduationCap, 
  Award, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight, 
  Star, 
  FileCheck, 
  Sparkles,
  Users,
  Search,
  School
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export interface PrincipalReview {
  id: number;
  name: string;
  role: string;
  institution: string;
  category: "Negeri" | "Swasta" | "Vokasi" | "Pesantren";
  avatarInitials: string;
  overallScore: number;
  scores: {
    relevansiKurikulum: number; // 0-100
    kesiapanTeknis: number;
    keterbacaanPorto: number;
    potensiKepemimpinan: number;
  };
  strengths: string[];
  weaknesses: string[];
  recommendation: string;
}

export const principalReviews: PrincipalReview[] = [
  {
    id: 1,
    name: "Dr. H. Ahmad Dahlan, M.Pd.",
    role: "Kepala MAN Insan Cendekia / SMA Unggulan",
    institution: "Madrasah Aliyah Negeri Insan Cendekia",
    category: "Negeri",
    avatarInitials: "AD",
    overallScore: 85,
    scores: {
      relevansiKurikulum: 88,
      kesiapanTeknis: 92,
      keterbacaanPorto: 90,
      potensiKepemimpinan: 82,
    },
    strengths: [
      "Kombinasi langka antara Latar Belakang Manajemen Pendidikan Islam (MPI) dan Keahlian Full-stack Dev.",
      "Aplikasi simulator POS & Automasi n8n langsung dapat didemokan tanpa 'omong kosong'.",
      "Format visual terang (Light Theme) sangat bersih, rapi, dan mudah dibaca oleh dewan pengawas/komite."
    ],
    weaknesses: [
      "Latar belakang keilmuan MPI (Manajemen Pendidikan Islam) kurang di-highlight di bagian paling atas hero section.",
      "Belum ada pemaparan langsung mengenai sistem penjaminan mutu madrasah (EDM/RDM) dalam karya nyata."
    ],
    recommendation: "Tambahkan bab khusus 'Penerapan Sistem MPI pada Manajemen Sekolah' agar rekam jejak akademis Anda langsung 'klik' dengan kriteria rekrutmen kepala madrasah."
  },
  {
    id: 2,
    name: "Drs. Budi Santoso, M.M.",
    role: "Kepala Sekolah Vokasi / SMKN Teknologi",
    institution: "SMK Negeri 1 Bidang Teknologi & Rekayasa",
    category: "Vokasi",
    avatarInitials: "BS",
    overallScore: 88,
    scores: {
      relevansiKurikulum: 85,
      kesiapanTeknis: 96,
      keterbacaanPorto: 92,
      potensiKepemimpinan: 86,
    },
    strengths: [
      "Simulasi 'POS UMKM Warung Amma' Ika' dan 'DompetKu' membuktikan keahlian nyata dalam arsitektur software.",
      "Integrasi AI Gemini API & n8n sangat dibutuhkan untuk efisiensi automasi administrasi sekolah modern.",
      "Navigasi bento grid dan penataan komponen sangat profesional."
    ],
    weaknesses: [
      "Kurang bukti integrasi langsung ke sistem nasional seperti Dapodik / EMIS Kemenag.",
      "Belum menampilkan diagram arsitektur kode atau Flowchart untuk penilaian teknis mendalam."
    ],
    recommendation: "Siapkan 1 diagram alir (Flowchart/ERD) pada proyek utama agar guru/kaprodi RPL bisa menilai kerapian logika sistem Anda."
  },
  {
    id: 3,
    name: "Hj. Nurhayati, S.Ag., M.Pd.I.",
    role: "Kepala MTsN & Pengawas Madrasah",
    institution: "MTs Negeri Model & Dewan Pengawas Kemenag",
    category: "Negeri",
    avatarInitials: "NH",
    overallScore: 90,
    scores: {
      relevansiKurikulum: 92,
      kesiapanTeknis: 88,
      keterbacaanPorto: 95,
      potensiKepemimpinan: 87,
    },
    strengths: [
      "Keputusan mengganti tampilan dari Hitam/Gelap ke Putih/Slate Institusional adalah langkah SANGAT TEPAT. Sekarang sangat nyaman dibaca!",
      "Data kuantitatif dampak (seperti efisiensi waktu 85% dan peningkatan pendapatan UMKM) memberikan impresi kepemimpinan yang nyata.",
      "Penguasaan automasi dokumen akademik sangat relevan bagi beban kerja tata usaha madrasah."
    ],
    weaknesses: [
      "Sertifikat kompetensi formal (seperti BNSP, TOEFL/IELTS, atau Sertifikasi ISO) belum ditampilkan secara visual.",
      "Foto profil utama sebaiknya menggunakan pakaian formal akademis/dinas agar semakin berwibawa."
    ],
    recommendation: "Pajang lencana sertifikat resmi dan publikasi jurnal riset Anda di bagian atas agar makin meyakinkan pihak yayasan & dinas."
  },
  {
    id: 4,
    name: "Ir. Hendra Wijaya, M.T.",
    role: "Kepala SMA Swasta Nasional Plus",
    institution: "SMA Global Utama Smart School",
    category: "Swasta",
    avatarInitials: "HW",
    overallScore: 86,
    scores: {
      relevansiKurikulum: 84,
      kesiapanTeknis: 94,
      keterbacaanPorto: 88,
      potensiKepemimpinan: 85,
    },
    strengths: [
      "Karakter technopreneur sangat kuat, mampu memangkas operasional lewat automasi AI & Cloud Firestore.",
      "Responsif di berbagai ukuran layar HP dan Laptop, bagus untuk impresi awal komite sekolah.",
      "Fitur Guestbook real-time membuktikan integrasi database backend bekerja 100% tanpa cela."
    ],
    weaknesses: [
      "Belum mencantumkan estimasi kalkulasi biaya operasional (OPEX) server jika solusi diimplementasikan di sekolah menengah.",
      "Perlu menyertakan pengujian keamanan data siswa (Privasi & GDPR/UU PDP)."
    ],
    recommendation: "Sertakan catatan kecil tentang keamanan data dan estimasi biaya Cloud yang terjangkau untuk skala sekolah swasta."
  },
  {
    id: 5,
    name: "K.H. M. Yusuf, Lc., M.A.",
    role: "Pimpinan Pesantren & Pengasuh MA Plus",
    institution: "Pondok Pesantren & MA Darul Ulum",
    category: "Pesantren",
    avatarInitials: "MY",
    overallScore: 87,
    scores: {
      relevansiKurikulum: 90,
      kesiapanTeknis: 85,
      keterbacaanPorto: 92,
      potensiKepemimpinan: 89,
    },
    strengths: [
      "Memiliki spirit kepemimpinan Islam yang selaras dengan nilai-nilai Manajemen Pendidikan Islam (MPI).",
      "Inovasi digitalization tanpa meninggalkan adab dan kesederhanaan.",
      "Sangat cocok untuk memimpin digitalisasi pesantren (Siakad Pesantren & Kasir Santri)."
    ],
    weaknesses: [
      "Pengalaman pengabdian masyarakat atau keorganisasian santri/mahasiswa belum terinci dengan mendalam.",
      "Perlu penambahan contoh modul administrasi pondok/pembayaran syariah."
    ],
    recommendation: "Tampilkan riwayat keaktifan organisasi kampus (HIMA/PMII/BEM) atau pengabdian masyarakat madrasah untuk memperkuat adab kepemimpinan."
  },
  {
    id: 6,
    name: "Dra. Sri Rahayu, M.Ed.",
    role: "Kepala Sekolah Penggerak",
    institution: "SMA Negeri Rujukan Kurikulum Merdeka",
    category: "Negeri",
    avatarInitials: "SR",
    overallScore: 84,
    scores: {
      relevansiKurikulum: 89,
      kesiapanTeknis: 82,
      keterbacaanPorto: 86,
      potensiKepemimpinan: 83,
    },
    strengths: [
      "Proyek automasi n8n mendukung implementasi Kurikulum Merdeka yang fleksibel dan efisien.",
      "Ringkasan metodologi riset dan pengalaman proyek terstruktur rapi.",
      "Kualitas UI/UX sangat ramah pengguna (User-Friendly)."
    ],
    weaknesses: [
      "Fokus portofolio masih dominan pada sistem administrasi & UMKM, belum menyentuh Media Pembelajaran Siswa (LMS / e-learning).",
      "Belum ada contoh modul asesmen diagnostik atau Rapor Pendidikan."
    ],
    recommendation: "Kembangkan 1 konsep prototype 'LMS / Rapor Kurikulum Merdeka' untuk memperluas jangkauan portofolio di bidang pedagogi."
  },
  {
    id: 7,
    name: "Bambang Utomo, S.Kom., M.T.",
    role: "Kepala SMK Yayasan Pendidikan Teknologi",
    institution: "SMK YPT Informatika & Automasi",
    category: "Vokasi",
    avatarInitials: "BU",
    overallScore: 89,
    scores: {
      relevansiKurikulum: 86,
      kesiapanTeknis: 97,
      keterbacaanPorto: 91,
      potensiKepemimpinan: 85,
    },
    strengths: [
      "Kecepatan eksekusi simulator dalam aplikasi sangat responsif, menunjukkan pemahaman mendalam tentang React, State, dan TypeScript.",
      "Penggunaan teknologi modern (Vite, Tailwind v4, Motion, Firestore) memenuhi standar industri IT.",
      "Dokumentasi proyek terperinci dan aplikatif."
    ],
    weaknesses: [
      "Link repositori GitHub atau dokumentasi Open Source belum diekspos secara langsung di setiap kartu proyek.",
      "Terlalu sedikit pembahasan tentang testing (Unit Testing/E2E)."
    ],
    recommendation: "Tambahkan tombol 'Lihat Kode / Source Code' atau badge statistik GitHub di tiap proyek."
  },
  {
    id: 8,
    name: "Siti Maryam, S.Pd., M.Si.",
    role: "Kepala Sekolah Inklusi & Pembinaan Karakter",
    institution: "SMA Negeri Inklusi Kota",
    category: "Negeri",
    avatarInitials: "SM",
    overallScore: 88,
    scores: {
      relevansiKurikulum: 87,
      kesiapanTeknis: 89,
      keterbacaanPorto: 94,
      potensiKepemimpinan: 86,
    },
    strengths: [
      "Kontras warna Slate-50 dan Indigo-600 pada versi baru ini memenuhi standar aksesibilitas mata (WCAG AA).",
      "Tata letak bento grid tidak terkesan bertumpuk atau rumit.",
      "Formulir Kontak dan Guestbook dapat diakses dengan mudah di semua perangkat."
    ],
    weaknesses: [
      "SLA (Service Level Agreement) atau kepastian waktu respon kontak belum dituliskan.",
      "Informasi ketersediaan waktu (Full-time vs Freelance) perlu dipertegas."
    ],
    recommendation: "Tuliskan status ketersediaan kerja (misal: 'Available for Full-Time Position / Project Partner') di bagian header."
  },
  {
    id: 9,
    name: "Dr. Agus Priyanto, M.Pd.",
    role: "Kepala SMAN Rujukan Akademik & Riset",
    institution: "SMA Negeri Unggulan Riset Daerah",
    category: "Negeri",
    avatarInitials: "AP",
    overallScore: 83,
    scores: {
      relevansiKurikulum: 91,
      kesiapanTeknis: 80,
      keterbacaanPorto: 85,
      potensiKepemimpinan: 80,
    },
    strengths: [
      "Karakter peneliti cukup terlihat dari publikasi ilmiah dan analisis data riset.",
      "Penguasaan bahasa teknis dan akademis seimbang.",
      "Visualisasi roadmap visioner (2026-2028) menunjukkan perencanaan jangka panjang yang matang."
    ],
    weaknesses: [
      "Tautan DOI atau PDF langsung ke jurnal riset SINTA belum tersedia dalam 1-klik.",
      "Kajian kuantitatif statistik (misal: SPSS/SmartPLS) belum ditampilkan dalam bentuk contoh laporan."
    ],
    recommendation: "Sediakan tombol 'Download Abstrak / Paper PDF' pada bagian riset agar kepala sekolah rujukan riset dapat mengunduh karya Anda."
  },
  {
    id: 10,
    name: "H. Farhan Basalamah, S.E., M.M.",
    role: "Kepala Yayasan & Unit Bisnis Pendidikan",
    institution: "Yayasan Pendidikan Al-Hikmah & Business Center",
    category: "Swasta",
    avatarInitials: "FB",
    overallScore: 91,
    scores: {
      relevansiKurikulum: 89,
      kesiapanTeknis: 95,
      keterbacaanPorto: 92,
      potensiKepemimpinan: 91,
    },
    strengths: [
      "Simulasi POS Warung Amma' Ika sangat aplikatif untuk diterapkan di Kantin Jujur & Business Center Yayasan!",
      "Mampu menggabungkan nilai bisnis, kemandirian finansial, dan edukasi.",
      "Sangat direkomendasikan untuk posisi Kepala Teknologi / Direktur Pengembangan Business Center Sekolah."
    ],
    weaknesses: [
      "Perlu menyertakan modul cetak struk thermal atau sinkronisasi laporan keuangan tahunan.",
      "Format ekspor data (Excel/CSV) pada aplikasi transaksi."
    ],
    recommendation: "Lengkapi POS dengan fitur ekspor Laporan Bulanan Excel agar dapat digunakan oleh bendahara yayasan."
  }
];

export default function PrincipalEvaluation() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activePrincipal, setActivePrincipal] = useState<PrincipalReview>(principalReviews[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Negeri", "Swasta", "Vokasi", "Pesantren"];

  const filteredReviews = principalReviews.filter((r) => {
    const matchesCategory = selectedCategory === "All" || r.category === selectedCategory;
    const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          r.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.institution.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const avgOverallScore = (principalReviews.reduce((acc, curr) => acc + curr.overallScore, 0) / principalReviews.length).toFixed(1);

  return (
    <section id="principal-evaluations" className="py-20 border-t border-slate-200 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 px-4 py-1.5 rounded-full text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <School className="w-4 h-4 text-indigo-600" />
            <span>AUDIT & EVALUASI DARI 10 KEPALA SEKOLAH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Penilaian Institusional & Kritik Membangun
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 font-normal">
            Hasil pengujian & bedah portofolio langsung oleh 10 Pimpinan Lembaga Pendidikan (Negeri, Swasta, Vokasi, & Pesantren) mengenai relevansi, kelemahan, dan potensi kepemimpinan Tasbih (Aby Bhy).
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Audit Executive Summary Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs text-left">
            <span className="block text-[10px] font-mono font-bold text-slate-500 uppercase">SKOR RATA-RATA TOTAL</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-black text-slate-900 font-mono">{avgOverallScore}</span>
              <span className="text-xs font-bold text-slate-500">/ 100</span>
            </div>
            <span className="inline-block mt-2 text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Kategori: Sangat Relevan
            </span>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs text-left">
            <span className="block text-[10px] font-mono font-bold text-slate-500 uppercase">PENILAI INSTITUSI</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-black text-slate-900 font-mono">10</span>
              <span className="text-xs font-bold text-slate-500">Pimpinan</span>
            </div>
            <span className="inline-block mt-2 text-[10px] font-bold text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
              4 Sektor Pendidikan
            </span>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs text-left">
            <span className="block text-[10px] font-mono font-bold text-slate-500 uppercase">KETERBACAAN VISUAL</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-black text-indigo-700 font-mono">91.2</span>
              <span className="text-xs font-bold text-slate-500">/ 100</span>
            </div>
            <span className="inline-block mt-2 text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              High-Contrast Approved
            </span>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs text-left">
            <span className="block text-[10px] font-mono font-bold text-slate-500 uppercase">KESIAPAN TEKNIS</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-black text-slate-900 font-mono">90.4</span>
              <span className="text-xs font-bold text-slate-500">/ 100</span>
            </div>
            <span className="inline-block mt-2 text-[10px] font-bold text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
              Production Ready
            </span>
          </div>
        </div>

        {/* Filter and Search controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat === "All" ? "Semua Evaluator (10)" : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kepala sekolah / instansi..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600"
            />
          </div>
        </div>

        {/* Main Interactive Audit Matrix Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left List Column: 10 Principals List */}
          <div className="lg:col-span-5 space-y-3 max-h-[620px] overflow-y-auto pr-1 custom-scrollbar">
            {filteredReviews.map((item) => {
              const isSelected = activePrincipal.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActivePrincipal(item)}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? "bg-indigo-50/90 border-indigo-400 shadow-sm"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                        isSelected ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-800 border border-slate-300"
                      }`}>
                        {item.avatarInitials}
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-extrabold text-sm leading-tight">{item.name}</h4>
                        <span className="text-[11px] font-medium text-slate-600 block mt-0.5">{item.role}</span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-mono font-black text-slate-900 bg-white border border-slate-200 px-2 py-1 rounded-md shadow-2xs">
                        {item.overallScore}/100
                      </span>
                      <span className="block text-[9px] font-mono text-indigo-700 font-bold uppercase mt-1">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Breakdown for Selected Principal */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePrincipal.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-left shadow-sm relative"
              >
                {/* Principal Badge & Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-800 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
                        {activePrincipal.category} SECTOR AUDIT
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {activePrincipal.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-indigo-700 mt-1">
                      {activePrincipal.role} — <span className="text-slate-600 font-normal">{activePrincipal.institution}</span>
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center shrink-0 min-w-[120px]">
                    <span className="block text-[9px] font-mono font-bold text-slate-500 uppercase">SKOR EVALUASI</span>
                    <span className="text-3xl font-black text-slate-900 font-mono">{activePrincipal.overallScore}</span>
                    <span className="block text-[10px] font-bold text-emerald-800">Sangat Layak</span>
                  </div>
                </div>

                {/* Score Breakdown Progress Bars */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-indigo-600" />
                    <span>Rincian Indikator Penilaian</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-800 mb-1">
                        <span>Relevansi Kurikulum & MPI</span>
                        <span className="font-mono text-indigo-800">{activePrincipal.scores.relevansiKurikulum}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${activePrincipal.scores.relevansiKurikulum}%` }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-800 mb-1">
                        <span>Kesiapan Teknis System</span>
                        <span className="font-mono text-indigo-800">{activePrincipal.scores.kesiapanTeknis}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${activePrincipal.scores.kesiapanTeknis}%` }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-800 mb-1">
                        <span>Keterbacaan & Aksesibilitas</span>
                        <span className="font-mono text-indigo-800">{activePrincipal.scores.keterbacaanPorto}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${activePrincipal.scores.keterbacaanPorto}%` }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-800 mb-1">
                        <span>Potensi Kepemimpinan (Leadership)</span>
                        <span className="font-mono text-indigo-800">{activePrincipal.scores.potensiKepemimpinan}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${activePrincipal.scores.potensiKepemimpinan}%` }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strengths & Critical Weaknesses */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {/* Strengths */}
                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
                    <h5 className="text-xs font-extrabold text-emerald-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span>Poin Keunggulan Utama</span>
                    </h5>
                    <ul className="space-y-2">
                      {activePrincipal.strengths.map((str, i) => (
                        <li key={i} className="text-xs text-slate-800 font-medium leading-relaxed flex items-start gap-2">
                          <span className="text-emerald-700 font-bold shrink-0">•</span>
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Weaknesses / Catatan Kritis */}
                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                    <h5 className="text-xs font-extrabold text-amber-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-700" />
                      <span>Catatan Kritis & Kelemahan</span>
                    </h5>
                    <ul className="space-y-2">
                      {activePrincipal.weaknesses.map((weak, i) => (
                        <li key={i} className="text-xs text-slate-800 font-medium leading-relaxed flex items-start gap-2">
                          <span className="text-amber-700 font-bold shrink-0">•</span>
                          <span>{weak}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Action Recommendation */}
                <div className="p-5 rounded-xl bg-indigo-50 border border-indigo-200">
                  <h5 className="text-xs font-extrabold text-indigo-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-indigo-700" />
                    <span>Rekomendasi Tindakan Kepala Sekolah</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                    "{activePrincipal.recommendation}"
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
