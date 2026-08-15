import { useState } from "react";
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  BookOpen, 
  Store, 
  Calculator, 
  Wallet, 
  ArrowUpRight, 
  CheckCircle2, 
  X, 
  Maximize2,
  Volume2,
  VolumeX,
  Play,
  RotateCcw,
  ShoppingBag,
  Layers,
  ChevronRight,
  Info,
  Terminal,
  FileSpreadsheet
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import InteractiveSandbox from "./InteractiveSandbox";
import AdminAssistantTool from "./AdminAssistantTool";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  status: string;
  type: "featured" | "catalog" | "pos" | "ledger";
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "ngajiku",
    title: "NgajiKu",
    category: "Pendidikan Al-Qur'an / Web App",
    badge: "Featured Project · TPA",
    description: "Aplikasi pendukung pembelajaran dan manajemen Taman Pendidikan Al-Qur'an (TPA). Membantu santri membaca Al-Qur'an secara interaktif dan mempermudah ustadz/pengurus dalam monitoring hafalan santri.",
    problem: "Pencatatan perkembangan mengaji santri di TPA seringkali masih menggunakan buku manual fisik yang rentan hilang atau rusak, serta santri membutuhkan antarmuka digital yang nyaman untuk muraja'ah mandiri.",
    solution: "Membangun sistem web interaktif dengan teks Arab berharakat jelas, terjemahan bahasa Indonesia, navigasi surah yang cepat, dan modul manajemen data santri sederhana untuk pengurus TPA.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Quran API", "Local Storage"],
    liveUrl: "https://ngajiku.vercel.app",
    githubUrl: "https://github.com/Azbhy24/ngajiku",
    status: "Aktif / Terus Dikembangkan",
    type: "featured"
  },
  {
    id: "warung-amma-ika",
    title: "Warung Amma Ika",
    category: "Katalog Toko & UMKM / Web",
    badge: "Katalog & Stok",
    description: "Website etalase dan katalog produk digital untuk toko kelontong keluarga (Warung Amma Ika). Memudahkan pelanggan mengecek ketersediaan sembako dan pesanan harian secara langsung.",
    problem: "Pelanggan sering bertanya melalui pesan singkat mengenai ketersediaan stok barang dan harga terkini karena belum adanya daftar harga atau etalase digital terpusat.",
    solution: "Membuat katalog web responsif dengan kategorisasi produk (sembako, minuman, bumbu dapur), label status ketersediaan stok, dan tombol kontak WhatsApp otomatis untuk pemesanan langsung.",
    techStack: ["React", "Vite", "Tailwind CSS", "WhatsApp API Link", "Responsive Design"],
    liveUrl: "https://warung-amma-ika.vercel.app",
    githubUrl: "https://github.com/Azbhy24/warung-amma-ika",
    status: "Digunakan Operasional",
    type: "catalog"
  },
  {
    id: "kasir-amma-ika",
    title: "Kasir Amma Ika",
    category: "Point of Sale (POS) / Sistem Kasir",
    badge: "Operasional Toko",
    description: "Aplikasi kasir dan pencatatan transaksi point-of-sale berbasis web untuk mempercepat proses kalkulasi belanja pelanggan dan pencetakan nota pembelian.",
    problem: "Kalkulasi manual saat jam sibuk toko berisiko salah hitung dan memperlambat antrean pembeli, serta pencatatan omzet harian tidak tersimpan otomatis.",
    solution: "Merancang antarmuka kasir cepat dengan tombol angka layar sentuh, keranjang belanja otomatis, kalkulator kembalian, dan format cetak nota struk kasir.",
    techStack: ["React", "TypeScript", "State Management", "Tailwind CSS", "Print Engine"],
    liveUrl: "https://kasir-amma-ika.vercel.app",
    githubUrl: "https://github.com/Azbhy24/kasir-amma-ika",
    status: "Versi 1.2 Stabil",
    type: "pos"
  },
  {
    id: "dompetku",
    title: "DompetKu",
    category: "Keuangan Pribadi & Kas / Tracker",
    badge: "Pencatatan Keuangan",
    description: "Aplikasi pencatatan arus kas pemasukan dan pengeluaran pribadi serta kas kegiatan organisasi dengan kategorisasi anggaran dan ringkasan saldo.",
    problem: "Pencatatan pengeluaran harian dan uang kas sering terlupakan jika tidak ada media pencatatan instan yang ringan dan bisa dibuka di smartphone tanpa loading berat.",
    solution: "Membangun buku kas digital sederhana dengan grafik ringkasan bulanan, pemisahan pos anggaran penting, dan rekap mutasi yang mudah dibaca.",
    techStack: ["React", "Tailwind CSS", "Local Storage DB", "Chart Component"],
    liveUrl: "https://dompetku-web.vercel.app",
    githubUrl: "https://github.com/Azbhy24/dompetku",
    status: "Rilis Publik",
    type: "ledger"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  
  // Interactive mini Quran reader state for NgajiKu featured showcase
  const [currentSurahIndex, setCurrentSurahIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const quranSurahs = [
    {
      no: 1,
      name: "Al-Fatihah",
      arabicName: "الفاتحة",
      ayahCount: 7,
      arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      latin: "Bismillaahir-Rahmaanir-Rahiim",
      translation: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang."
    },
    {
      no: 112,
      name: "Al-Ikhlas",
      arabicName: "الإخلاص",
      ayahCount: 4,
      arabicText: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ",
      latin: "Qul huwal-laahu ahad, Allaahush-shamad",
      translation: "Katakanlah (Muhammad), 'Dialah Allah, Yang Maha Esa. Allah tempat meminta segala sesuatu.'"
    },
    {
      no: 113,
      name: "Al-Falaq",
      arabicName: "الفلق",
      ayahCount: 5,
      arabicText: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ",
      latin: "Qul a'uudzu birabbil-falaq, min syarri maa khalaq",
      translation: "Katakanlah, 'Aku berlindung kepada Tuhan yang menguasai subuh, dari kejahatan makhluk yang Dia ciptakan.'"
    },
    {
      no: 114,
      name: "An-Nas",
      arabicName: "الناس",
      ayahCount: 6,
      arabicText: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ",
      latin: "Qul a'uudzu birabbin-naas, Malikin-naas",
      translation: "Katakanlah, 'Aku berlindung kepada Tuhannya manusia, Raja manusia.'"
    }
  ];

  const currentSurah = quranSurahs[currentSurahIndex];

  return (
    <section 
      id="projects" 
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-stone-200/80"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-200/80 pb-4 mb-12 text-left">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-1">
            <span className="text-blue-600 font-bold">02 /</span>
            <span className="text-stone-900 font-semibold tracking-wider uppercase">KARYA & APLIKASI TERAPAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 tracking-tight">
            Things I've Built.
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-500 font-mono mt-2 sm:mt-0 max-w-xs text-left sm:text-right">
          Aplikasi nyata yang dibangun untuk kebutuhan pendidikan, pencatatan toko, dan manajemen kas.
        </p>
      </div>

      {/* ASYMMETRIC PROJECT GALLERY */}
      <div className="space-y-12">
        
        {/* ========================================================================= */}
        {/* 1. FEATURED PROJECT: NGAJIKU (Large Horizontal Showcase) */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-300 shadow-sm overflow-hidden text-left hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Info Column (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase border border-blue-200/60">
                    <Sparkles className="w-3 h-3" />
                    Featured Project
                  </span>
                  <span className="text-xs font-mono text-stone-400">01 / 04</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                    NgajiKu
                  </h3>
                  <p className="text-xs font-mono text-blue-600 font-medium mt-1">
                    Pendidikan Al-Qur'an & Manajemen TPA
                  </p>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">
                  Aplikasi web pendukung santri dan ustadz dalam pembelajaran Al-Qur'an. Dilengkapi dengan antarmuka membaca yang bersih, terjemahan bahasa Indonesia, navigasi surah cepat, dan pencatatan santri.
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["React", "TypeScript", "Tailwind CSS", "Quran API"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 text-[11px] font-mono border border-stone-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-stone-100 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedProject(PROJECTS_DATA[0])}
                  className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold font-mono flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Detail Studi Kasus</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="https://ngajiku.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold font-mono flex items-center gap-2 transition-colors"
                >
                  <span>Buka Website</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                </a>

                <a
                  href="https://github.com/Azbhy24/ngajiku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 transition-colors"
                  aria-label="GitHub NgajiKu"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Interactive Simulator Column (7 cols) */}
            <div className="lg:col-span-7 bg-[#faf9f5] p-5 sm:p-8 flex flex-col justify-center">
              
              {/* Browser Mockup Window */}
              <div className="bg-white rounded-xl border border-stone-300 shadow-sm overflow-hidden">
                
                {/* Browser top chrome */}
                <div className="bg-stone-100 px-4 py-2.5 border-b border-stone-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <div className="px-3 py-0.5 rounded-md bg-white border border-stone-200 text-[11px] font-mono text-stone-600 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>https://ngajiku.vercel.app/surah/{currentSurah.no}</span>
                  </div>
                  <span className="text-[10px] font-mono text-stone-400 uppercase font-semibold">Live Preview</span>
                </div>

                {/* Simulated Quran Reading Canvas */}
                <div className="p-6 space-y-6">
                  
                  {/* Surah switcher pills */}
                  <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1">
                    <div className="flex gap-1.5">
                      {quranSurahs.map((surah, idx) => (
                        <button
                          key={surah.no}
                          onClick={() => setCurrentSurahIndex(idx)}
                          className={`px-3 py-1 rounded-md text-xs font-mono transition-all cursor-pointer ${
                            currentSurahIndex === idx
                              ? "bg-blue-600 text-white font-bold shadow-xs"
                              : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                          }`}
                        >
                          {surah.no}. {surah.name}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className={`p-1.5 rounded-md border text-xs font-mono flex items-center gap-1 cursor-pointer transition-colors ${
                        isPlayingAudio 
                          ? "bg-blue-50 border-blue-200 text-blue-700 font-semibold" 
                          : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                      }`}
                    >
                      {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5 text-blue-600 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
                      <span className="hidden sm:inline">{isPlayingAudio ? "Murottal Play" : "Audio Demo"}</span>
                    </button>
                  </div>

                  {/* Surah Header Banner */}
                  <div className="bg-stone-900 text-white p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono text-blue-400 uppercase">Surah Ke-{currentSurah.no} · {currentSurah.ayahCount} Ayat</p>
                      <h4 className="text-lg font-bold font-serif">{currentSurah.name}</h4>
                    </div>
                    <span className="text-2xl font-serif text-stone-200 font-bold">
                      {currentSurah.arabicName}
                    </span>
                  </div>

                  {/* Interactive Ayah Display */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-3">
                    <div className="flex justify-between items-center text-xs font-mono text-stone-400">
                      <span>Ayat 1</span>
                      <span className="text-emerald-700 font-bold text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Makkiyah
                      </span>
                    </div>

                    <p className="text-2xl sm:text-3xl text-right font-serif font-medium text-stone-900 leading-loose py-2">
                      {currentSurah.arabicText}
                    </p>

                    <div className="pt-2 border-t border-stone-200/60 space-y-1">
                      <p className="text-xs font-mono text-blue-700 italic">
                        {currentSurah.latin}
                      </p>
                      <p className="text-xs text-stone-600">
                        "{currentSurah.translation}"
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2 & 3: ASYMMETRIC GRID: WARUNG AMMA IKA & KASIR AMMA IKA */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Project 2: Warung Amma Ika (7 cols) */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-stone-300 shadow-sm p-6 sm:p-7 flex flex-col justify-between text-left hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-xs font-mono font-semibold border border-emerald-200/60">
                  <Store className="w-3 h-3" />
                  Katalog & WhatsApp Order
                </span>
                <span className="text-xs font-mono text-stone-400">02 / 04</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                  Warung Amma Ika
                </h3>
                <p className="text-xs font-mono text-stone-500 mt-0.5">
                  Etalase & Katalog Produk Toko Kelontong
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Platform katalog produk sembako dan kebutuhan harian keluarga. Dilengkapi pencarian harga, status stok riil, serta integrasi pemesanan langsung ke WhatsApp toko.
              </p>

              {/* Visual Mockup: Interactive Product Cards */}
              <div className="pt-2">
                <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 space-y-2 text-xs font-mono">
                  <div className="flex justify-between items-center pb-2 border-b border-stone-200 text-stone-500">
                    <span>Item Sembako</span>
                    <span>Harga & Ketersediaan</span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded bg-white border border-stone-200">
                    <span className="font-semibold text-stone-800">Beras Ramos 5kg</span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">Rp 68.000 · Ready</span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded bg-white border border-stone-200">
                    <span className="font-semibold text-stone-800">Minyak Goreng 2L</span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">Rp 36.000 · Ready</span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded bg-white border border-stone-200">
                    <span className="font-semibold text-stone-800">Telur Ayam 1 Rak</span>
                    <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded">Rp 52.000 · Terbatas</span>
                  </div>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["React", "Vite", "Tailwind CSS", "WhatsApp API"].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 text-[11px] font-mono border border-stone-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(PROJECTS_DATA[1])}
                className="text-xs font-mono font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
              >
                <span>Lihat Studi Kasus</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2">
                <a
                  href="https://warung-amma-ika.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-mono font-medium flex items-center gap-1.5"
                >
                  <span>Buka Web</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Project 3: Kasir Amma Ika (5 cols) */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-stone-300 shadow-sm p-6 sm:p-7 flex flex-col justify-between text-left hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-mono font-semibold border border-blue-200/60">
                  <Calculator className="w-3 h-3" />
                  Point of Sale (POS)
                </span>
                <span className="text-xs font-mono text-stone-400">03 / 04</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                  Kasir Amma Ika
                </h3>
                <p className="text-xs font-mono text-stone-500 mt-0.5">
                  Sistem Kasir & Cetak Struk Belanja
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Aplikasi kasir web untuk transaksi harian toko. Menghitung total belanjaan, kembalian, dan mencetak nota struk thermal.
              </p>

              {/* Visual Mockup: Thermal Receipt Slip */}
              <div className="pt-2">
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 font-mono text-[11px] space-y-1.5 shadow-2xs">
                  <div className="text-center pb-1 border-b border-dashed border-stone-300">
                    <p className="font-bold text-stone-900">WARUNG AMMA IKA</p>
                    <p className="text-[9px] text-stone-500">Struk Transaksi Kasir</p>
                  </div>
                  
                  <div className="space-y-1 py-1">
                    <div className="flex justify-between">
                      <span>Beras 5kg x1</span>
                      <span>68.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minyak 2L x1</span>
                      <span>36.000</span>
                    </div>
                  </div>

                  <div className="pt-1 border-t border-dashed border-stone-300 flex justify-between font-bold text-stone-900">
                    <span>TOTAL</span>
                    <span className="text-blue-700">Rp 104.000</span>
                  </div>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["React", "TypeScript", "Tailwind CSS", "Print Engine"].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 text-[11px] font-mono border border-stone-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(PROJECTS_DATA[2])}
                className="text-xs font-mono font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
              >
                <span>Lihat Studi Kasus</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://kasir-amma-ika.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-mono font-medium flex items-center gap-1.5"
              >
                <span>Buka Web</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. COMPACT EDITORIAL BLOCK: DOMPETKU */}
        {/* ========================================================================= */}
        <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300 text-xs font-mono font-bold uppercase border border-blue-400/30">
                04 / DompetKu
              </span>
              <span className="text-xs font-mono text-stone-400">Pencatatan Arus Kas</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
              DompetKu — Pencatatan Keuangan Pribadi & Kas Kegiatan
            </h3>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Buku kas digital sederhana untuk melacak pemasukan, pengeluaran, saldo berjalan, dan ringkasan bulanan tanpa ribet.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {["React", "Local Storage DB", "Tailwind CSS", "Chart"].map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded bg-stone-800 text-stone-300 text-[10px] font-mono border border-stone-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setSelectedProject(PROJECTS_DATA[3])}
              className="px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-100 text-xs font-mono font-semibold transition-colors cursor-pointer"
            >
              Detail Kasus
            </button>

            <a
              href="https://dompetku-web.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>Buka DompetKu</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. LIVE INTERACTIVE APPS SANDBOX & SIMULATOR */}
        {/* ========================================================================= */}
        <div className="pt-6 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Live Sandbox: Coba Langsung di Sini
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-mono">
            Anda dapat langsung mencoba mesin simulasi kasir POS toko dan generator dokumen administrasi madrasah di bawah ini:
          </p>

          <InteractiveSandbox />
          <AdminAssistantTool />
        </div>

      </div>

      {/* PROJECT DETAIL MODAL / CASE STUDY */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-2xl sm:rounded-3xl border border-stone-300 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar p-6 sm:p-8 text-left space-y-6"
            >
              {/* Modal Top Header */}
              <div className="flex items-start justify-between border-b border-stone-200 pb-4">
                <div>
                  <span className="text-xs font-mono text-blue-600 font-bold uppercase">
                    {selectedProject.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-0.5">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-stone-500 mt-0.5">
                    {selectedProject.category}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer transition-colors"
                  aria-label="Tutup detail modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Case Study Content */}
              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <div>
                  <h4 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-blue-600" />
                    Latar Belakang & Masalah
                  </h4>
                  <p className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-600">
                    {selectedProject.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Apa yang Saya Bangun (Solusi)
                  </h4>
                  <p className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-600">
                    {selectedProject.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-stone-600" />
                    Teknologi & Alat Bantu
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-stone-100 text-stone-800 text-xs font-mono border border-stone-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-stone-500 pt-2 border-t border-stone-100">
                  <span>Status Pengembangan:</span>
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    {selectedProject.status}
                  </span>
                </div>
              </div>

              {/* Modal Footer Links */}
              <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-mono font-semibold flex items-center gap-2 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Lihat Kode (GitHub)</span>
                  </a>
                </div>

                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold flex items-center gap-2 transition-colors"
                >
                  <span>Buka Aplikasi Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
