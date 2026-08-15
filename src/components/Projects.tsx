import React, { useState } from "react";
import { 
  ExternalLink, 
  Github, 
  ShoppingCart, 
  BookOpen, 
  CreditCard,
  Trash2,
  X,
  Play,
  ArrowUpRight,
  Eye,
  Terminal,
  Cpu,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Layers,
  FileText
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolio";

// ==========================================
// 1. NGAJIKU INTERACTIVE QURAN READER
// ==========================================
function NgajiKuInteractiveReader() {
  const [selectedSurah, setSelectedSurah] = useState("fatihah");
  const [isPlaying, setIsPlaying] = useState(false);

  const surahs: { [key: string]: any } = {
    fatihah: {
      name: "Al-Fatihah",
      translation: "Pembukaan",
      versesCount: 7,
      type: "Makkiyah",
      verses: [
        {
          num: 1,
          ar: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
          latin: "Bismillāhir-raḥmānir-raḥīm",
          id: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang."
        },
        {
          num: 2,
          ar: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
          latin: "Al-ḥamdu lillāhi rabbil-'ālamīn",
          id: "Segala puji bagi Allah, Tuhan seluruh alam."
        },
        {
          num: 3,
          ar: "الرَّحْمَٰنِ الرَّحِيمِ",
          latin: "Ar-raḥmānir-raḥīm",
          id: "Yang Maha Pengasih, Maha Penyayang."
        },
        {
          num: 4,
          ar: "مَالِكِ يَوْمِ الدِّينِ",
          latin: "Māliki yaumid-dīn",
          id: "Pemilik hari pembalasan."
        }
      ]
    },
    ikhlas: {
      name: "Al-Ikhlas",
      translation: "Keikhlasan",
      versesCount: 4,
      type: "Makkiyah",
      verses: [
        {
          num: 1,
          ar: "قُلْ هُوَ اللَّهُ أَحَدٌ",
          latin: "Qul huwallāhu aḥad",
          id: "Katakanlah (Muhammad), 'Dialah Allah, Yang Maha Esa.'"
        },
        {
          num: 2,
          ar: "اللَّهُ الصَّمَدُ",
          latin: "Allāhuṣ-ṣamad",
          id: "Allah tempat meminta segala sesuatu."
        },
        {
          num: 3,
          ar: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
          latin: "Lam yalid wa lam yūlad",
          id: "(Allah) tidak beranak dan tidak pula diperanakkan,"
        },
        {
          num: 4,
          ar: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
          latin: "Wa lam yakul lahū kufuwan aḥad",
          id: "dan tidak ada sesuatu yang setara dengan Dia."
        }
      ]
    },
    falaq: {
      name: "Al-Falaq",
      translation: "Waktu Subuh",
      versesCount: 5,
      type: "Makkiyah",
      verses: [
        {
          num: 1,
          ar: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
          latin: "Qul a'ūżu birabbil-falaq",
          id: "Katakanlah, 'Aku berlindung kepada Tuhan yang menguasai subuh (fajar),'"
        },
        {
          num: 2,
          ar: "مِنْ شَرِّ مَا خَلَقَ",
          latin: "Min syarri mā khalaq",
          id: "dari kejahatan (makhluk yang) Dia ciptakan,"
        },
        {
          num: 3,
          ar: "وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ",
          latin: "Wa min syarri gāsiqin iżā waqab",
          id: "dan dari kejahatan malam apabila telah gelap gulita,"
        }
      ]
    }
  };

  const current = surahs[selectedSurah] || surahs.fatihah;

  return (
    <div className="w-full rounded-xl bg-[#040c09] border border-[#143e2e] p-3.5 sm:p-5 font-sans text-left shadow-lg">
      <div className="flex items-center justify-between border-b border-[#143e2e] pb-3 mb-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-300 uppercase">
            NGAJIKU WEB ENGINE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 bg-emerald-950/60 rounded border border-emerald-500/30">
            Capacitor Ready
          </span>
        </div>
      </div>

      {/* Surah Quick Selectors */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {Object.keys(surahs).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedSurah(key)}
            className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer min-h-[36px] ${
              selectedSurah === key
                ? "bg-emerald-500 text-neutral-950 font-bold"
                : "bg-[#091f16] text-neutral-300 border border-[#143e2e] hover:border-emerald-500"
            }`}
          >
            {surahs[key].name}
          </button>
        ))}
      </div>

      {/* Surah Header Card */}
      <div className="bg-[#091f16] border border-[#143e2e] rounded-lg p-2.5 sm:p-3 mb-3 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-white">
            Surah {current.name}
          </h4>
          <span className="text-[10px] font-mono text-neutral-400">
            {current.translation} • {current.versesCount} Ayat • {current.type}
          </span>
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="min-h-[34px] px-2.5 py-1 bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900 rounded text-[11px] font-mono text-emerald-300 flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <Play className={`w-3 h-3 ${isPlaying ? "text-emerald-400 animate-spin" : ""}`} />
          <span>{isPlaying ? "Memutar Audio" : "Audio Murottal"}</span>
        </button>
      </div>

      {/* Verses Flow */}
      <div className="space-y-3 max-h-48 sm:max-h-56 overflow-y-auto custom-scrollbar pr-1">
        {current.verses.map((v: any) => (
          <div key={v.num} className="p-2.5 rounded bg-[#091f16]/60 border border-[#143e2e] space-y-1.5">
            <div className="flex items-start justify-between gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                {v.num}
              </span>
              <p className="text-right text-base sm:text-lg font-serif text-emerald-100 font-bold leading-loose" dir="rtl">
                {v.ar}
              </p>
            </div>
            <p className="text-[11px] font-mono text-emerald-400/90 italic">
              {v.latin}
            </p>
            <p className="text-xs text-neutral-300 leading-relaxed font-normal">
              "{v.id}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 2. DOMPETKU SIMULATOR
// ==========================================
function DompetKuSimulator() {
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Penjualan Ritel Harian", type: "income", amount: 450000 },
    { id: 2, title: "Hosting & Server", type: "expense", amount: 75000 },
  ]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const calculatedBalance = 1250000 + totalIncome - totalExpense;

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount) return;
    const value = parseInt(amount);
    if (isNaN(value)) return;

    setTransactions([
      {
        id: Date.now(),
        title,
        type,
        amount: value,
      },
      ...transactions,
    ]);
    setTitle("");
    setAmount("");
  };

  return (
    <div className="w-full rounded-xl bg-[#040a08] border border-[#133328] p-3.5 sm:p-5 font-sans text-left shadow-lg">
      <div className="flex items-center justify-between border-b border-[#133328] pb-3 mb-3">
        <div className="flex items-center gap-2">
          <CreditCard className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-300 uppercase">
            DOMPETKU FINANCE ENGINE
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 bg-emerald-950/60 rounded border border-emerald-500/30">
          Client-Side Active
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="p-2.5 rounded bg-[#091712] border border-[#133328]">
          <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">
            Pemasukan
          </span>
          <span className="text-xs font-mono font-bold text-emerald-400 mt-0.5 block">
            Rp {totalIncome.toLocaleString("id-ID")}
          </span>
        </div>
        <div className="p-2.5 rounded bg-[#091712] border border-[#133328]">
          <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">
            Pengeluaran
          </span>
          <span className="text-xs font-mono font-bold text-rose-400 mt-0.5 block">
            Rp {totalExpense.toLocaleString("id-ID")}
          </span>
        </div>
      </div>

      <div className="bg-[#091712] border border-[#133328] rounded p-2.5 mb-3 text-center">
        <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">
          Saldo Aktif DompetKu
        </span>
        <h4 className="text-base sm:text-lg font-mono font-bold text-white mt-0.5">
          Rp {calculatedBalance.toLocaleString("id-ID")}
        </h4>
      </div>

      <form onSubmit={handleAdd} className="space-y-2 mb-3 bg-[#091712]/70 p-2.5 rounded border border-[#133328]">
        <div className="grid grid-cols-12 gap-2">
          <input
            type="text"
            placeholder="Keterangan"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="col-span-6 bg-[#040a08] border border-[#1b4436] rounded px-2 py-1.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500 min-h-[38px]"
          />
          <input
            type="number"
            placeholder="Nominal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="col-span-3 bg-[#040a08] border border-[#1b4436] rounded px-2 py-1.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500 min-h-[38px]"
          />
          <button
            type="submit"
            className="col-span-3 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-neutral-950 rounded py-1.5 text-xs font-mono font-bold uppercase transition-colors cursor-pointer min-h-[38px]"
          >
            + Catat
          </button>
        </div>
      </form>

      <div className="space-y-1.5 max-h-32 overflow-y-auto custom-scrollbar">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-2 rounded bg-[#091712] border border-[#133328] text-xs">
            <span className="text-neutral-200 truncate">{tx.title}</span>
            <span className={`font-mono font-bold text-xs ${tx.type === "income" ? "text-emerald-400" : "text-rose-400"}`}>
              {tx.type === "income" ? "+" : "-"}Rp {tx.amount.toLocaleString("id-ID")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 3. WARUNG AMMA IKA CUSTOMER CATALOG
// ==========================================
function WarungAmmaIkaCatalog() {
  const [selectedCat, setSelectedCat] = useState("Semua");
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 1, name: "Beras Sentra Ramos 5kg", category: "Sembako", price: 68000 },
    { id: 2, name: "Minyak Goreng Kita 2L", category: "Sembako", price: 34000 },
    { id: 3, name: "Gula Pasir Kristal 1kg", category: "Sembako", price: 17500 },
    { id: 4, name: "Kopi Bubuk Arabika 200g", category: "Minuman", price: 25000 },
    { id: 5, name: "Teh Celup SariWangi 25s", category: "Minuman", price: 7500 },
    { id: 6, name: "Telur Ayam Ras 1 Rak (30)", category: "Sembako", price: 52000 },
  ];

  const filtered = selectedCat === "Semua" ? products : products.filter(p => p.category === selectedCat);

  return (
    <div className="w-full rounded-xl bg-[#040a08] border border-[#133328] p-3.5 sm:p-5 font-sans text-left shadow-lg">
      <div className="flex items-center justify-between border-b border-[#133328] pb-3 mb-3">
        <div className="flex items-center gap-2">
          <ShoppingCart className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-300 uppercase">
            ETALASE WARUNG AMMA IKA
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 bg-emerald-950/60 rounded border border-emerald-500/30">
          Khusus Pelanggan
        </span>
      </div>

      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex gap-1.5">
          {["Semua", "Sembako", "Minuman"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-2 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer min-h-[34px] ${
                selectedCat === cat
                  ? "bg-emerald-500 text-neutral-950 font-bold"
                  : "bg-[#091712] text-neutral-300 border border-[#133328]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="text-xs font-mono text-emerald-400">
          Keranjang: <span className="font-bold text-white">{cartCount} Item</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto custom-scrollbar">
        {filtered.map((item) => (
          <div key={item.id} className="p-2.5 rounded bg-[#091712] border border-[#133328] flex items-center justify-between">
            <div>
              <h5 className="text-xs font-bold text-white truncate max-w-[140px]">{item.name}</h5>
              <span className="text-xs font-mono text-emerald-400">Rp {item.price.toLocaleString("id-ID")}</span>
            </div>
            <button
              onClick={() => setCartCount(cartCount + 1)}
              className="px-2 py-1 bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono rounded hover:bg-emerald-900 cursor-pointer min-h-[32px]"
            >
              + Pesan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 4. KASIR AMMA IKA POS SYSTEM
// ==========================================
function KasirAmmaIkaSimulator() {
  const [cashGiven, setCashGiven] = useState(100000);
  const totalBill = 78500;
  const change = Math.max(0, cashGiven - totalBill);

  return (
    <div className="w-full rounded-xl bg-[#040a08] border border-[#133328] p-3.5 sm:p-5 font-sans text-left shadow-lg">
      <div className="flex items-center justify-between border-b border-[#133328] pb-3 mb-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-300 uppercase">
            KASIR POS INTERNAL
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 bg-emerald-950/60 rounded border border-emerald-500/30">
          Internal Kasir
        </span>
      </div>

      <div className="p-3 bg-[#091712] border border-[#133328] rounded mb-3">
        <div className="flex justify-between text-xs text-neutral-400 mb-1">
          <span>Item Belanja (3 Item)</span>
          <span className="font-mono text-white font-bold">Rp {totalBill.toLocaleString("id-ID")}</span>
        </div>
        <div className="flex justify-between text-xs text-neutral-400 mb-1">
          <span>Uang Diterima</span>
          <span className="font-mono text-emerald-400 font-bold">Rp {cashGiven.toLocaleString("id-ID")}</span>
        </div>
        <div className="flex justify-between text-sm text-white font-bold pt-2 border-t border-[#133328]">
          <span>Kembalian Kasir</span>
          <span className="font-mono text-emerald-400">Rp {change.toLocaleString("id-ID")}</span>
        </div>
      </div>

      <div className="space-y-2">
        <span className="text-[10px] font-mono text-neutral-400 uppercase block">
          PILIHAN UANG TUNAI CEPAT:
        </span>
        <div className="grid grid-cols-3 gap-2">
          {[80000, 100000, 150000].map((val) => (
            <button
              key={val}
              onClick={() => setCashGiven(val)}
              className={`py-1.5 rounded font-mono text-xs cursor-pointer min-h-[36px] ${
                cashGiven === val
                  ? "bg-emerald-500 text-neutral-950 font-bold"
                  : "bg-[#091712] border border-[#133328] text-neutral-300"
              }`}
            >
              Rp {val.toLocaleString("id-ID")}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 5. MAIN PROJECTS STAGE
// ==========================================
export default function Projects() {
  const { projects } = portfolioData;
  const [selectedIdx, setSelectedIdx] = useState(0);

  const activeProject = projects[selectedIdx] || projects[0];

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setSelectedIdx((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  return (
    <section 
      id="projects" 
      className="relative py-16 sm:py-24 md:py-28 border-t border-[#143e2e] bg-[#030907] text-[#e0f2ea] overflow-hidden"
    >
      {/* Visual Signature: Digital Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(16, 185, 129, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 185, 129, 0.06) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Chapter 03 Header */}
        <div className="flex items-center justify-between border-b border-[#143e2e] pb-3 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-emerald-400 font-bold bg-[#071d15] border border-emerald-500/30 px-2 py-0.5 rounded">
              CHAPTER 03
            </span>
            <span className="text-[#143e2e] font-mono">/</span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-300 font-semibold">
              DIGITAL PRODUCTS & SYSTEMS
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-emerald-400 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>INTERACTIVE PRODUCT STAGE</span>
          </div>
        </div>

        {/* Headline + 1-Liner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-6 sm:mb-8 text-left items-start">
          <div className="lg:col-span-8">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Rekayasa Produk Digital & Aplikasi Web.
            </h2>
          </div>
          <div className="lg:col-span-4 border-l border-[#143e2e] pl-4 text-emerald-300/80 text-xs leading-relaxed font-normal">
            Sistem web fungsional yang dibangun untuk memecahkan persoalan operasional nyata: dari Al-Qur'an digital, manajemen finansial, hingga kasir ritel.
          </div>
        </div>

        {/* Interactive Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#143e2e] pb-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                id={`project-tab-${proj.id}`}
                onClick={() => setSelectedIdx(idx)}
                className={`min-h-[40px] px-3 py-1.5 rounded font-mono text-xs uppercase tracking-wider transition-all cursor-pointer select-none flex items-center gap-1.5 ${
                  selectedIdx === idx
                    ? "bg-emerald-500 text-neutral-950 font-bold shadow-md"
                    : "bg-[#081b14] text-neutral-300 border border-[#143e2e] hover:border-emerald-500 hover:text-white"
                }`}
              >
                <span className="text-[10px] opacity-75">0{idx + 1}</span>
                <span>{proj.title}</span>
              </button>
            ))}
          </div>

          {/* Stepper Navigation */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-neutral-400">
              0{selectedIdx + 1} / 0{projects.length}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="p-2 min-h-[38px] min-w-[38px] rounded bg-[#081b14] border border-[#143e2e] text-neutral-300 hover:text-white hover:border-emerald-500 transition-colors cursor-pointer flex items-center justify-center"
                title="Proyek Sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 min-h-[38px] min-w-[38px] rounded bg-[#081b14] border border-[#143e2e] text-neutral-300 hover:text-white hover:border-emerald-500 transition-colors cursor-pointer flex items-center justify-center"
                title="Proyek Selanjutnya"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* In-Place Interactive Product Stage */}
        <div className="min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start text-left"
            >
              {/* Left Column: Project Metadata & Fact Brief */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] uppercase font-bold text-emerald-400 bg-[#071d15] border border-emerald-500/30 px-2 py-0.5 rounded">
                      {activeProject.category}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400">
                      PROYEK #0{selectedIdx + 1}
                    </span>
                  </div>

                  <h3 
                    className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {activeProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-emerald-400 mt-1">
                    {activeProject.subtitle}
                  </p>
                </div>

                {/* Problem & Solution Strip */}
                <div className="space-y-2.5 pt-2 border-t border-[#143e2e]">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block">
                      TANTANGAN OPERASIONAL:
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed mt-0.5">
                      {activeProject.problem}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 block">
                      SOLUSI REKAYASA SISTEM:
                    </span>
                    <p className="text-xs text-neutral-200 leading-relaxed mt-0.5">
                      {activeProject.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-2 border-t border-[#143e2e]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block mb-1.5">
                    TEKNOLOGI & INFRASTRUKTUR:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#081b14] border border-[#143e2e] font-mono text-[11px] text-emerald-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  {activeProject.demoUrl && (
                    <a
                      href={activeProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="min-h-[42px] px-4 py-2 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider rounded flex items-center gap-1.5 transition-colors cursor-pointer select-none"
                    >
                      <span>Buka Aplikasi Web</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="min-h-[42px] px-4 py-2 bg-[#081b14] hover:bg-[#0d2a1f] active:bg-[#12392b] text-neutral-200 border border-[#143e2e] font-mono text-xs uppercase tracking-wider rounded flex items-center gap-1.5 transition-colors select-none"
                    >
                      <Github className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Live Interactive Simulator / UI Visual Stage */}
              <div className="lg:col-span-6">
                {activeProject.id === "proj-4" && <NgajiKuInteractiveReader />}
                {activeProject.id === "proj-1" && <DompetKuSimulator />}
                {activeProject.id === "proj-2" && <WarungAmmaIkaCatalog />}
                {activeProject.id === "proj-3" && <KasirAmmaIkaSimulator />}
                {activeProject.id === "proj-5" && (
                  <div className="p-5 rounded-xl bg-[#040a08] border border-[#133328] space-y-3 font-mono text-xs text-neutral-300">
                    <div className="flex items-center justify-between border-b border-[#133328] pb-2 text-emerald-400 font-bold">
                      <span>AZBHY PORTFOLIO ARCHITECTURE</span>
                      <span className="text-[10px] px-2 py-0.5 bg-emerald-950 rounded">Live</span>
                    </div>
                    <p className="leading-relaxed">
                      Sistem presentasi digital multi-chapter interaktif yang menggabungkan rekam jejak S1 MPI, data operasional ritel, dan produk web aktif.
                    </p>
                    <div className="p-3 bg-[#091712] rounded border border-[#133328] space-y-1 text-[11px]">
                      <div className="text-emerald-400 font-bold">✓ State Management: In-Place Progressive Disclosure</div>
                      <div className="text-emerald-400 font-bold">✓ Responsive: Mobile-First Touch Targets (≥44px)</div>
                      <div className="text-emerald-400 font-bold">✓ Database: Firebase Firestore Live Guestbook Sync</div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
