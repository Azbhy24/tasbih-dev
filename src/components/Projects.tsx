import React, { useState, useEffect } from "react";
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
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolio";

// ==========================================
// 1. DOMPETKU SIMULATOR
// ==========================================
function DompetKuSimulator() {
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Penjualan Ritel Harian", type: "income", amount: 450000, category: "Bisnis" },
    { id: 2, title: "Cloud Hosting & Domain", type: "expense", amount: 75000, category: "Server" },
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
        category: type === "income" ? "Pemasukan" : "Pengeluaran",
      },
      ...transactions,
    ]);
    setTitle("");
    setAmount("");
  };

  const deleteTransaction = (id: number) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="w-full rounded-xl bg-neutral-950 border border-neutral-800 p-4 sm:p-5 font-sans text-left">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-white uppercase">
            DOMPETKU FINANCE ENGINE
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono text-neutral-400 px-2 py-0.5 bg-neutral-900 rounded border border-neutral-800">
          Prototype
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3">
        <div className="p-2.5 sm:p-3 rounded bg-neutral-900 border border-neutral-800">
          <span className="text-[9px] sm:text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
            Pemasukan
          </span>
          <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400 mt-0.5 block">
            Rp {totalIncome.toLocaleString("id-ID")}
          </span>
        </div>
        <div className="p-2.5 sm:p-3 rounded bg-neutral-900 border border-neutral-800">
          <span className="text-[9px] sm:text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
            Pengeluaran
          </span>
          <span className="text-xs sm:text-sm font-mono font-bold text-rose-400 mt-0.5 block">
            Rp {totalExpense.toLocaleString("id-ID")}
          </span>
        </div>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded p-2.5 sm:p-3 mb-3 text-center">
        <span className="text-[9px] sm:text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
          Saldo Aktif DompetKu
        </span>
        <h4 className="text-lg sm:text-xl font-mono font-bold text-white mt-0.5">
          Rp {calculatedBalance.toLocaleString("id-ID")}
        </h4>
      </div>

      <form onSubmit={handleAdd} className="space-y-2 mb-3 bg-neutral-900/50 p-2.5 sm:p-3 rounded border border-neutral-800">
        <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
          + Catat Transaksi
        </p>
        <div className="grid grid-cols-12 gap-2">
          <input
            type="text"
            placeholder="Keterangan"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="col-span-12 sm:col-span-6 bg-neutral-950 border border-neutral-700 rounded px-2.5 py-2 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 font-sans min-h-[40px]"
          />
          <input
            type="number"
            placeholder="Nominal (Rp)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="col-span-8 sm:col-span-4 bg-neutral-950 border border-neutral-700 rounded px-2.5 py-2 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 font-sans min-h-[40px]"
          />
          <button
            type="submit"
            className="col-span-4 sm:col-span-2 bg-white hover:bg-neutral-200 active:bg-neutral-300 text-neutral-950 rounded py-2 text-xs font-mono font-bold uppercase transition-colors cursor-pointer min-h-[40px] flex items-center justify-center select-none"
          >
            + Tambah
          </button>
        </div>
      </form>

      <div className="space-y-1.5 max-h-36 sm:max-h-40 overflow-y-auto custom-scrollbar">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-2 rounded bg-neutral-900/80 border border-neutral-800 text-xs">
            <span className="text-neutral-200 font-medium truncate max-w-[150px] sm:max-w-none">{tx.title}</span>
            <div className="flex items-center gap-2 shrink-0">
              <span className={`font-mono font-bold text-[11px] sm:text-xs ${tx.type === "income" ? "text-emerald-400" : "text-rose-400"}`}>
                {tx.type === "income" ? "+" : "-"} Rp {tx.amount.toLocaleString("id-ID")}
              </span>
              <button onClick={() => deleteTransaction(tx.id)} className="text-neutral-600 hover:text-rose-400 p-1 cursor-pointer">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 2. WARUNG AMMA IKA SIMULATOR
// ==========================================
function WarungAmmaIkaSimulator() {
  const products = [
    { id: 1, name: "Beras Premium 5kg", price: 68000 },
    { id: 2, name: "Minyak Goreng 2L", price: 34000 },
    { id: 3, name: "Gula Pasir 1kg", price: 17500 },
    { id: 4, name: "Telur Ayam (1 Rak)", price: 52000 },
  ];

  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [orderSent, setOrderSent] = useState(false);

  const addToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setOrderSent(false);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (next[id] > 1) next[id]--;
      else delete next[id];
      return next;
    });
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = products.find((x) => x.id === parseInt(id));
    return sum + (p ? p.price * qty : 0);
  }, 0);

  return (
    <div className="w-full rounded-xl bg-neutral-950 border border-neutral-800 p-4 sm:p-5 font-sans text-left">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <ShoppingCart className="w-4 h-4 text-emerald-400" />
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-white uppercase">
            ETALASE: WARUNG AMMA IKA
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono text-emerald-400 px-2 py-0.5 bg-emerald-950/40 rounded border border-emerald-500/30">
          Katalog Ritel
        </span>
      </div>

      <div className="space-y-2 mb-3 max-h-44 sm:max-h-48 overflow-y-auto custom-scrollbar">
        {products.map((p) => {
          const qty = cart[p.id] || 0;
          return (
            <div key={p.id} className="flex items-center justify-between p-2.5 rounded bg-neutral-900 border border-neutral-800">
              <div className="pr-2">
                <span className="text-xs font-bold text-neutral-200 block truncate">{p.name}</span>
                <span className="font-mono text-[11px] text-emerald-400">Rp {p.price.toLocaleString("id-ID")}</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                {qty > 0 ? (
                  <>
                    <button onClick={() => removeFromCart(p.id)} className="w-7 h-7 rounded bg-neutral-800 active:bg-neutral-700 text-white font-mono text-xs flex items-center justify-center cursor-pointer">
                      -
                    </button>
                    <span className="font-mono text-xs text-white px-1.5">{qty}</span>
                    <button onClick={() => addToCart(p.id)} className="w-7 h-7 rounded bg-neutral-800 active:bg-neutral-700 text-white font-mono text-xs flex items-center justify-center cursor-pointer">
                      +
                    </button>
                  </>
                ) : (
                  <button onClick={() => addToCart(p.id)} className="min-h-[32px] px-3 py-1 rounded bg-neutral-800 active:bg-neutral-700 text-white font-mono text-[11px] uppercase cursor-pointer">
                    + Beli
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-3 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-between gap-2">
        <div>
          <span className="text-[9px] sm:text-[10px] font-mono text-neutral-500 uppercase block">Total ({totalItems} item)</span>
          <span className="font-mono text-xs sm:text-sm font-bold text-white">Rp {totalPrice.toLocaleString("id-ID")}</span>
        </div>
        <button
          disabled={totalItems === 0}
          onClick={() => setOrderSent(true)}
          className={`min-h-[38px] px-3.5 py-1.5 rounded text-xs font-mono uppercase tracking-wider font-bold transition-colors cursor-pointer select-none ${
            totalItems > 0 ? "bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-neutral-950" : "bg-neutral-800 text-neutral-600 cursor-not-allowed"
          }`}
        >
          {orderSent ? "Terkirim!" : "Pesan WA"}
        </button>
      </div>
    </div>
  );
}

// ==========================================
// 3. KASIR AMMA IKA SIMULATOR (POS)
// ==========================================
function KasirAmmaIkaSimulator() {
  const [cart] = useState<{ [key: string]: { name: string; price: number; qty: number } }>({
    "Beras 5kg": { name: "Beras 5kg", price: 68000, qty: 1 },
    "Minyak 2L": { name: "Minyak 2L", price: 34000, qty: 2 },
  });
  const [cashGiven, setCashGiven] = useState("150000");
  const [receiptPrinted, setReceiptPrinted] = useState(false);

  const total = Object.values(cart).reduce((sum, item) => sum + item.price * item.qty, 0);
  const cashNum = parseInt(cashGiven) || 0;
  const change = Math.max(0, cashNum - total);

  return (
    <div className="w-full rounded-xl bg-neutral-950 border border-neutral-800 p-4 sm:p-5 font-sans text-left">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <CreditCard className="w-4 h-4 text-emerald-400" />
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-white uppercase">
            INTERNAL POS: KASIR AMMA IKA
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono text-neutral-400 px-2 py-0.5 bg-neutral-900 rounded border border-neutral-800">
          Kasir POS
        </span>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded p-3 mb-3">
        <div className="flex justify-between items-center text-[11px] font-mono text-neutral-400 border-b border-neutral-800 pb-1.5 mb-2">
          <span>ITEM TRANSAKSI</span>
          <span>SUBTOTAL</span>
        </div>
        {Object.values(cart).map((item, i) => (
          <div key={i} className="flex justify-between text-xs py-0.5">
            <span className="text-neutral-200">{item.name} x{item.qty}</span>
            <span className="font-mono text-neutral-300">Rp {(item.price * item.qty).toLocaleString("id-ID")}</span>
          </div>
        ))}
        <div className="border-t border-neutral-800 pt-2 mt-2 flex justify-between font-mono text-xs sm:text-sm font-bold text-white">
          <span>TOTAL:</span>
          <span className="text-emerald-400">Rp {total.toLocaleString("id-ID")}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3">
        <div>
          <label className="text-[9px] sm:text-[10px] font-mono text-neutral-400 uppercase block mb-1">Uang Diterima</label>
          <input
            type="number"
            value={cashGiven}
            onChange={(e) => setCashGiven(e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-700 rounded px-2.5 py-1.5 text-xs text-white font-mono min-h-[36px]"
          />
        </div>
        <div>
          <label className="text-[9px] sm:text-[10px] font-mono text-neutral-400 uppercase block mb-1">Kembalian</label>
          <div className="bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1.5 text-xs font-mono font-bold text-emerald-400 min-h-[36px] flex items-center">
            Rp {change.toLocaleString("id-ID")}
          </div>
        </div>
      </div>

      <button
        onClick={() => setReceiptPrinted(true)}
        className="w-full min-h-[42px] py-2 bg-white hover:bg-neutral-200 active:bg-neutral-300 text-neutral-950 font-mono text-xs font-bold uppercase rounded cursor-pointer transition-colors select-none"
      >
        {receiptPrinted ? "✓ Struk Berhasil Dicetak" : "Proses & Cetak Struk"}
      </button>
    </div>
  );
}

// ==========================================
// 4. NGAJIKU SIMULATOR (AL-QUR'AN READER)
// ==========================================
function NgajiKuSimulator() {
  const [selectedSurah, setSelectedSurah] = useState("001");
  const [playingAudio, setPlayingAudio] = useState(false);

  const surahData: { [key: string]: { name: string; meaning: string; verses: { num: number; arabic: string; transliteration: string; translation: string }[] } } = {
    "001": {
      name: "Al-Fatihah (Pembukaan)",
      meaning: "7 Ayat • Mekah",
      verses: [
        { num: 1, arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "Bismillāhir-raḥmānir-raḥīm", translation: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang." },
        { num: 2, arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", transliteration: "Al-ḥamdu lillāhi rabbil-'ālamīn", translation: "Segala puji bagi Allah, Tuhan seluruh alam." },
      ],
    },
    "112": {
      name: "Al-Ikhlas (Keesaan)",
      meaning: "4 Ayat • Mekah",
      verses: [
        { num: 1, arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ", transliteration: "Qul huwallāhu aḥad", translation: "Katakanlah (Muhammad), 'Dialah Allah, Yang Maha Esa.'" },
      ],
    },
  };

  const current = surahData[selectedSurah] || surahData["001"];

  return (
    <div className="w-full rounded-xl bg-neutral-950 border border-neutral-800 p-4 sm:p-5 font-sans text-left">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-emerald-400" />
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-white uppercase">
            NGAJIKU: AL-QUR'AN READER
          </span>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => setSelectedSurah("001")}
            className={`px-2 py-1 rounded text-[10px] font-mono cursor-pointer ${selectedSurah === "001" ? "bg-neutral-800 text-white font-bold" : "text-neutral-500"}`}
          >
            Al-Fatihah
          </button>
          <button
            onClick={() => setSelectedSurah("112")}
            className={`px-2 py-1 rounded text-[10px] font-mono cursor-pointer ${selectedSurah === "112" ? "bg-neutral-800 text-white font-bold" : "text-neutral-500"}`}
          >
            Al-Ikhlas
          </button>
        </div>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded p-2.5 sm:p-3 mb-3 flex items-center justify-between">
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-white">{current.name}</h4>
          <span className="font-mono text-[9px] sm:text-[10px] text-neutral-400">{current.meaning}</span>
        </div>
        <button
          onClick={() => setPlayingAudio(!playingAudio)}
          className="min-h-[34px] px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-[11px] flex items-center gap-1.5 cursor-pointer select-none"
        >
          <Play className={`w-3 h-3 ${playingAudio ? "text-emerald-400" : "text-white"}`} />
          <span>{playingAudio ? "Audio Play" : "Murottal"}</span>
        </button>
      </div>

      <div className="space-y-2.5 max-h-44 sm:max-h-48 overflow-y-auto custom-scrollbar">
        {current.verses.map((v) => (
          <div key={v.num} className="p-2.5 sm:p-3 rounded bg-neutral-900/60 border border-neutral-800">
            <div className="text-right text-base sm:text-lg font-serif text-white leading-relaxed mb-1">
              {v.arabic}
            </div>
            <p className="text-[11px] sm:text-xs text-emerald-400 font-mono italic">{v.transliteration}</p>
            <p className="text-[11px] sm:text-xs text-neutral-300 mt-0.5">{v.translation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 5. MAIN PROJECTS SECTION
// ==========================================
export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProjectModal, setSelectedProjectModal] = useState<typeof projects[0] | null>(null);

  const featuredProject = projects.find(p => p.id === "proj-4") || projects[0];
  const secondaryProjects = projects.filter(p => p.id !== featuredProject.id);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProjectModal(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const renderSimulator = (projectId: string) => {
    switch (projectId) {
      case "proj-1": return <DompetKuSimulator />;
      case "proj-2": return <WarungAmmaIkaSimulator />;
      case "proj-3": return <KasirAmmaIkaSimulator />;
      case "proj-4": return <NgajiKuSimulator />;
      default: return <DompetKuSimulator />;
    }
  };

  return (
    <section id="projects" className="relative py-16 sm:py-24 md:py-32 border-t border-neutral-800/80 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-neutral-800 pb-6 sm:pb-8 mb-10 sm:mb-16">
          <div className="text-left">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-emerald-400 font-bold">
                04 / PORTOFOLIO & PRODUK DIGITAL
              </span>
              <span className="h-px w-6 sm:w-8 bg-neutral-800" />
            </div>
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-snug"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Produk Digital & Sistem Operasional
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-normal text-left">
            Aplikasi web fungsional yang dibangun untuk memecahkan problem nyata: manajemen finansial, etalase ritel, POS kasir, hingga platform edukasi Islam.
          </p>
        </div>

        {/* 1. FEATURED HERO SHOWCASE */}
        <div className="mb-12 sm:mb-16">
          <div className="border border-neutral-800 bg-neutral-900/40 rounded-2xl p-5 sm:p-8 lg:p-10 relative overflow-hidden">
            
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 sm:pb-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-emerald-400 font-bold">
                  ★ FEATURED SHOWCASE
                </span>
                <span className="text-neutral-700 hidden sm:inline">•</span>
                <span className="font-mono text-[11px] sm:text-xs text-neutral-400 uppercase hidden sm:inline">
                  {featuredProject.category}
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs">
                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-400 hover:text-white flex items-center gap-1 transition-colors min-h-[36px] items-center"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
                {featuredProject.demoUrl && (
                  <a
                    href={featuredProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-400 hover:text-white flex items-center gap-1 transition-colors min-h-[36px] items-center"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live App</span>
                  </a>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6 text-left">
                <h3 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {featuredProject.title}
                </h3>
                <p className="font-mono text-xs uppercase text-neutral-400 mt-1">
                  {featuredProject.subtitle}
                </p>

                <div className="my-4 sm:my-6 space-y-2.5 sm:space-y-3">
                  <div className="border-l-2 border-neutral-700 pl-3">
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase text-neutral-500 block">Problem</span>
                    <p className="text-xs sm:text-sm text-neutral-300 mt-0.5 leading-relaxed">
                      {featuredProject.problem}
                    </p>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-3">
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase text-emerald-400 block font-bold">Solusi Digital</span>
                    <p className="text-xs sm:text-sm text-neutral-200 mt-0.5 leading-relaxed">
                      {featuredProject.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 my-4 sm:my-6">
                  {featuredProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-neutral-950 border border-neutral-800 rounded font-mono text-[9px] sm:text-[10px] text-neutral-300 uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-2">
                  <button
                    onClick={() => setSelectedProjectModal(featuredProject)}
                    className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 bg-white hover:bg-neutral-200 active:bg-neutral-300 text-neutral-950 font-mono text-xs font-bold uppercase rounded flex items-center justify-center gap-2 cursor-pointer transition-colors select-none"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Uji Simulator Interaktif</span>
                  </button>
                  {featuredProject.demoUrl && (
                    <a
                      href={featuredProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs uppercase rounded flex items-center justify-center gap-2 transition-colors select-none"
                    >
                      <span>Kunjungi Website</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right: Embedded Interactive Engine Preview */}
              <div className="lg:col-span-6">
                <NgajiKuSimulator />
              </div>

            </div>

          </div>
        </div>

        {/* 2. SECONDARY PROJECTS EDITORIAL GRID */}
        <div>
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              SISTEM DIGITAL LAINNYA
            </span>
            <span className="h-px flex-1 bg-neutral-800/80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="border border-neutral-800 bg-neutral-900/30 rounded-xl p-5 sm:p-7 flex flex-col justify-between text-left hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-3">
                    <span className="font-mono text-[10px] uppercase text-emerald-400 font-bold tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-lg">{project.featuredSymbol || "💻"}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-neutral-400 uppercase mt-0.5">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-neutral-300 mt-3 leading-relaxed font-normal">
                    {project.problem}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 my-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-neutral-950 border border-neutral-800 rounded font-mono text-[9px] text-neutral-400 uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 sm:pt-4 border-t border-neutral-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProjectModal(project)}
                    className="min-h-[40px] px-3.5 py-1.5 bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 text-white font-mono text-xs uppercase rounded flex items-center gap-1.5 cursor-pointer transition-colors select-none"
                  >
                    <Eye className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Uji Simulator</span>
                  </button>

                  <div className="flex items-center gap-3 font-mono text-xs">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white p-2" aria-label="GitHub Repository">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white p-2" aria-label="Live Demo">
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {selectedProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProjectModal(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl p-4 sm:p-6 md:p-8 text-left z-10 my-auto max-h-[92vh] overflow-y-auto custom-scrollbar shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-neutral-800 pb-4 mb-5">
                <div>
                  <span className="font-mono text-[10px] uppercase text-emerald-400 font-bold block mb-0.5">
                    {selectedProjectModal.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {selectedProjectModal.title}
                  </h3>
                  <p className="font-mono text-[11px] sm:text-xs text-neutral-400 uppercase mt-0.5">
                    {selectedProjectModal.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProjectModal(null)}
                  className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-neutral-400 hover:text-white rounded bg-neutral-800 active:bg-neutral-700 cursor-pointer select-none"
                  aria-label="Tutup modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8">
                <div className="lg:col-span-6 space-y-3">
                  <div className="p-3 sm:p-4 rounded bg-neutral-950 border border-neutral-800">
                    <span className="font-mono text-[10px] uppercase text-neutral-400 block mb-1">Problem</span>
                    <p className="text-xs text-neutral-300 leading-relaxed">{selectedProjectModal.problem}</p>
                  </div>

                  <div className="p-3 sm:p-4 rounded bg-neutral-950 border border-neutral-800">
                    <span className="font-mono text-[10px] uppercase text-emerald-400 block mb-1 font-bold">Solusi Digital</span>
                    <p className="text-xs text-neutral-200 leading-relaxed">{selectedProjectModal.solution}</p>
                  </div>

                  {selectedProjectModal.results && (
                    <div className="p-3 sm:p-4 rounded bg-neutral-950 border border-neutral-800">
                      <span className="font-mono text-[10px] uppercase text-neutral-400 block mb-1.5">Hasil & Dampak</span>
                      <ul className="space-y-1.5 text-xs text-neutral-300">
                        {selectedProjectModal.results.map((res, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-400 mt-0.5 shrink-0">—</span>
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-6">
                  <div className="mb-2 font-mono text-[10px] uppercase text-neutral-400">
                    LIVE SIMULASI ENGINE
                  </div>
                  {renderSimulator(selectedProjectModal.id)}
                </div>
              </div>

              {/* Modal Footer Links */}
              <div className="mt-6 pt-4 border-t border-neutral-800 flex flex-wrap justify-between items-center gap-3 text-xs font-mono">
                <div className="flex gap-4">
                  {selectedProjectModal.githubUrl && (
                    <a href={selectedProjectModal.githubUrl} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white flex items-center gap-1.5 min-h-[36px] items-center">
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Repository</span>
                    </a>
                  )}
                  {selectedProjectModal.demoUrl && (
                    <a href={selectedProjectModal.demoUrl} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white flex items-center gap-1.5 min-h-[36px] items-center">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Buka Aplikasi Live</span>
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProjectModal(null)}
                  className="min-h-[36px] px-3 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white rounded cursor-pointer select-none"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
