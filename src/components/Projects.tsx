import { 
  Code2, 
  ExternalLink, 
  Github, 
  AlertCircle, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  Plus, 
  Minus, 
  ShoppingCart, 
  BookOpen, 
  Smartphone, 
  Monitor, 
  Check, 
  CreditCard,
  Trash2,
  Award
} from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolio";

// ==========================================
// 1. DOMPETKU SIMULATOR
// ==========================================
function DompetKuSimulator() {
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Usaha Ritel Harian", type: "income", amount: 450000, category: "Bisnis" },
    { id: 2, title: "Domain & Cloud Hosting", type: "expense", amount: 75000, category: "Server" },
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
    <div className="w-full rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-indigo-100 p-6 font-sans overflow-hidden shadow-xl relative text-left">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-500" />
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-4 pt-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-slate-900 uppercase">
            SIMULASI INTERAKTIF: DOMPETKU
          </span>
        </div>
        <span className="text-[10px] font-mono text-indigo-900 px-3 py-1 bg-indigo-50 rounded-full border border-indigo-200 font-bold">
          Live Prototype
        </span>
      </div>

      {/* Mini Card Display */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
          <span className="text-[10px] font-mono text-emerald-800 font-bold uppercase tracking-wider block">
            Total Pemasukan
          </span>
          <span className="text-sm font-black text-emerald-950 mt-1 block">
            Rp {totalIncome.toLocaleString("id-ID")}
          </span>
        </div>
        <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200/80">
          <span className="text-[10px] font-mono text-rose-800 font-bold uppercase tracking-wider block">
            Total Pengeluaran
          </span>
          <span className="text-sm font-black text-rose-950 mt-1 block">
            Rp {totalExpense.toLocaleString("id-ID")}
          </span>
        </div>
      </div>

      {/* Main Balance Display */}
      <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white rounded-2xl p-4 mb-4 text-center shadow-md">
        <span className="text-[10px] font-mono font-bold text-indigo-200 uppercase tracking-wider block">
          Saldo Aktif DompetKu
        </span>
        <h4 className="text-2xl font-black text-white mt-1 font-sans">
          Rp {calculatedBalance.toLocaleString("id-ID")}
        </h4>
      </div>

      {/* Mini quick form adder */}
      <form onSubmit={handleAdd} className="space-y-2 mb-4 bg-slate-50 p-3 rounded-2xl border border-slate-200">
        <p className="text-[10px] font-bold font-mono text-indigo-900 uppercase tracking-wider">
          + Catat Transaksi Baru
        </p>
        <div className="grid grid-cols-12 gap-1.5">
          <input
            type="text"
            placeholder="Kopi, Peralatan"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="col-span-6 bg-white border border-slate-300 rounded-xl px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 font-sans font-medium"
          />
          <input
            type="number"
            placeholder="Rp"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="col-span-4 bg-white border border-slate-300 rounded-xl px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 font-sans font-medium"
          />
          <button
            type="submit"
            className="col-span-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl p-1 flex items-center justify-center transition-all cursor-pointer text-white shadow-sm"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-2 p-1 bg-white rounded-xl border border-slate-200">
          <button
            type="button"
            onClick={() => setType("expense")}
            className={`flex-1 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
              type === "expense" ? "bg-rose-100 text-rose-800 border border-rose-300 font-extrabold" : "text-slate-500"
            }`}
          >
            (-) Pengeluaran
          </button>
          <button
            type="button"
            onClick={() => setType("income")}
            className={`flex-1 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
              type === "income" ? "bg-emerald-100 text-emerald-800 border border-emerald-300 font-extrabold" : "text-slate-500"
            }`}
          >
            (+) Pemasukan
          </button>
        </div>
      </form>

      {/* Real-time active ledger list */}
      <div className="space-y-1.5 max-h-[140px] overflow-y-auto pr-1">
        <AnimatePresence initial={false}>
          {transactions.map((trans) => (
            <motion.div
              key={trans.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200"
            >
              <div className="text-left">
                <p className="text-xs text-slate-900 font-bold">{trans.title}</p>
                <span className="text-[9px] font-mono text-indigo-700 uppercase font-semibold">
                  {trans.category}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-black font-mono ${
                  trans.type === "income" ? "text-emerald-700" : "text-rose-700"
                }`}>
                  {trans.type === "income" ? "+" : "-"} Rp {trans.amount.toLocaleString("id-ID")}
                </span>
                <button
                  type="button"
                  onClick={() => deleteTransaction(trans.id)}
                  className="text-slate-400 hover:text-rose-600 p-0.5 rounded transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ==========================================
// 2. SISTEM POS UMKM SIMULATOR
// ==========================================
function POSUMKMSimulator() {
  const [cart, setCart] = useState<{ id: number; name: string; price: number; qty: number }[]>([]);
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState("");

  const products = [
    { id: 1, name: "Beras Sentra Ramos", price: 75000 },
    { id: 2, name: "Minyak Goreng 2L", price: 34000 },
    { id: 3, name: "Gula Pasir 1kg", price: 16500 },
    { id: 4, name: "Kopi Arabika", price: 28000 },
  ];

  const addToCart = (prod: typeof products[0]) => {
    const existing = cart.find((item) => item.id === prod.id);
    if (existing) {
      setCart(cart.map((item) => (item.id === prod.id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id: prod.id, name: prod.name, price: prod.price, qty: 1 }]);
    }
  };

  const updateQty = (id: number, delta: number) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.qty + delta;
            return { ...item, qty: nextQty };
          }
          return item;
        })
        .filter((item) => item.qty > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setReceiptNumber(`TRX-${Math.floor(100000 + Math.random() * 900000)}`);
    setShowReceipt(true);
  };

  const handleReset = () => {
    setCart([]);
    setShowReceipt(false);
  };

  return (
    <div className="w-full rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-emerald-100 p-6 font-sans overflow-hidden shadow-xl relative text-left">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-4 pt-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-slate-900 uppercase">
            SIMULASI INTERAKTIF: POS KASIR
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-900 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200 font-bold">
          Ritel Modern
        </span>
      </div>

      {!showReceipt ? (
        <div className="space-y-4">
          {/* Catalog grid */}
          <div>
            <p className="text-[10px] font-bold font-mono text-emerald-900 uppercase tracking-wider mb-2">
              Katalog Produk Toko Ritel
            </p>
            <div className="grid grid-cols-2 gap-2">
              {products.map((prod) => (
                <button
                  id={`pos-prod-${prod.id}`}
                  key={prod.id}
                  onClick={() => addToCart(prod)}
                  className="p-3 rounded-2xl bg-emerald-50/40 border border-emerald-200/80 hover:border-emerald-500 text-left transition-all group cursor-pointer flex flex-col justify-between hover:shadow-md"
                >
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-tight group-hover:text-emerald-700 transition-colors">
                      {prod.name}
                    </p>
                    <p className="text-[11px] font-mono text-emerald-800 mt-1 font-bold">Rp {prod.price.toLocaleString("id-ID")}</p>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-full mt-2 inline-block max-w-max border border-emerald-300 font-extrabold">
                    + Tambah
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-[10px] font-bold font-mono text-emerald-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <ShoppingCart className="w-3.5 h-3.5 text-emerald-600" />
              Keranjang Kasir: {cart.length} item
            </p>

            {cart.length === 0 ? (
              <div className="text-center py-4 text-xs text-slate-500 font-mono">
                [ Keranjang Kosong ]
              </div>
            ) : (
              <div className="space-y-2">
                <div className="max-h-[100px] overflow-y-auto space-y-1.5 pr-1">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-xs rounded-xl bg-white p-2 border border-slate-200">
                      <span className="text-slate-900 font-bold max-w-[120px] truncate">{item.name}</span>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 bg-slate-100 p-0.5 rounded-lg border border-slate-300">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="p-0.5 hover:text-rose-600 transition-colors cursor-pointer text-slate-600"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-[10px] font-mono text-slate-900 font-bold w-4 text-center">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="p-0.5 hover:text-emerald-600 transition-colors cursor-pointer text-slate-600"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-mono text-slate-900 text-xs font-extrabold min-w-[60px] text-right">
                          Rp {(item.price * item.qty).toLocaleString("id-ID")}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-sm font-extrabold">
                  <span className="text-slate-600 font-mono text-xs uppercase">Total</span>
                  <span className="text-emerald-700 font-sans text-base">Rp {total.toLocaleString("id-ID")}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-extrabold text-[10px] tracking-wider uppercase rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Bayar & Cetak Struk</span>
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Struk */
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white text-slate-900 p-5 rounded-2xl font-mono text-xs shadow-xl border-2 border-emerald-200 relative max-w-sm mx-auto"
        >
          <div className="text-center py-2 border-b border-dashed border-slate-300">
            <h5 className="font-extrabold tracking-wide text-sm text-emerald-950">WARUNG AMMA' IKA POS</h5>
            <p className="text-[10px] text-emerald-700 font-bold">Toko Ritel Berkah Keluarga</p>
            <p className="text-[9px] text-slate-500 mt-0.5 font-bold">{receiptNumber}</p>
          </div>

          <div className="py-3 space-y-1.5 border-b border-dashed border-slate-300">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-[11px]">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-slate-900">{item.name}</span>
                  <span className="text-[9px] text-slate-600">
                    {item.qty} x Rp {item.price.toLocaleString("id-ID")}
                  </span>
                </div>
                <span className="mt-auto text-slate-900 font-bold">
                  Rp {(item.price * item.qty).toLocaleString("id-ID")}
                </span>
              </div>
            ))}
          </div>

          <div className="py-2.5 space-y-1 text-xs font-bold">
            <div className="flex justify-between">
              <span className="text-slate-600 font-normal">Subtotal</span>
              <span>Rp {total.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-1.5 text-xs text-emerald-900 font-black">
              <span>TOTAL</span>
              <span>Rp {total.toLocaleString("id-ID")}</span>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="w-full mt-4 py-2.5 bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-mono font-bold text-[10px] uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
          >
            Selesai / Transaksi Baru
          </button>
        </motion.div>
      )}
    </div>
  );
}

// ==========================================
// 3. NGAJIKU SIMULATOR
// ==========================================
function NgajiKuSimulator() {
  const [selectedSurah, setSelectedSurah] = useState(0);
  const [viewMode, setViewMode] = useState<"web" | "apk">("web");

  const surahs = [
    {
      no: 1,
      name: "Al-Fatihah",
      arabic: "الفاتحة",
      versesCount: 7,
      sampleVerse: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      translation: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang."
    },
    {
      no: 112,
      name: "Al-Ikhlas",
      arabic: "الإخلاص",
      versesCount: 4,
      sampleVerse: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      translation: "Katakanlah (Muhammad), 'Dialah Allah, Yang Maha Esa.'"
    },
    {
      no: 113,
      name: "Al-Falaq",
      arabic: "الفلق",
      versesCount: 5,
      sampleVerse: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
      translation: "Katakanlah, 'Aku berlindung kepada Tuhan yang menguasai subuh (fajar).'"
    },
    {
      no: 114,
      name: "An-Nas",
      arabic: "الناس",
      versesCount: 6,
      sampleVerse: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
      translation: "Katakanlah, 'Aku berlindung kepada Tuhannya manusia.'"
    }
  ];

  const current = surahs[selectedSurah];

  return (
    <div className="w-full rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-teal-100 p-6 font-sans overflow-hidden shadow-xl relative text-left">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-sky-500" />
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-4 pt-1">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-teal-600" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-slate-900 uppercase">
            SIMULASI INTERAKTIF: NGAJIKU
          </span>
        </div>
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-full border border-slate-200">
          <button
            onClick={() => setViewMode("web")}
            className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase transition-all ${
              viewMode === "web" ? "bg-teal-600 text-white" : "text-slate-600"
            }`}
          >
            Web
          </button>
          <button
            onClick={() => setViewMode("apk")}
            className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase transition-all ${
              viewMode === "apk" ? "bg-emerald-600 text-white" : "text-slate-600"
            }`}
          >
            Capacitor APK
          </button>
        </div>
      </div>

      {/* Surah selector tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-2 mb-3">
        {surahs.map((s, idx) => (
          <button
            key={s.no}
            onClick={() => setSelectedSurah(idx)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all border ${
              selectedSurah === idx
                ? "bg-teal-50 text-teal-900 border-teal-300 shadow-2xs font-extrabold"
                : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
            }`}
          >
            {s.no}. {s.name}
          </button>
        ))}
      </div>

      {/* Viewport Frame */}
      <div className={`p-4 rounded-2xl border transition-all ${
        viewMode === "apk"
          ? "bg-slate-900 border-slate-800 text-white max-w-[280px] mx-auto shadow-2xl"
          : "bg-teal-50/40 border-teal-200 text-slate-900"
      }`}>
        <div className="flex items-center justify-between border-b border-teal-200/50 pb-2 mb-3">
          <span className="text-xs font-bold font-mono text-teal-800 flex items-center gap-1">
            {viewMode === "apk" ? <Smartphone className="w-3.5 h-3.5 text-emerald-400" /> : <Monitor className="w-3.5 h-3.5 text-teal-600" />}
            {current.no}. {current.name} ({current.versesCount} Ayat)
          </span>
          <span className="text-lg font-serif text-teal-700 font-bold">{current.arabic}</span>
        </div>

        <div className="py-4 text-center space-y-3">
          <p className="text-2xl font-serif leading-loose tracking-wide text-slate-900 font-bold">
            {current.sampleVerse}
          </p>
          <p className="text-xs text-slate-700 italic font-medium leading-relaxed bg-white/80 p-2.5 rounded-xl border border-teal-100">
            "{current.translation}"
          </p>
        </div>

        <div className="pt-2 border-t border-teal-200/50 flex justify-between items-center text-[10px] font-mono font-bold text-teal-800">
          <span>STATUS: READY</span>
          <span>{viewMode === "apk" ? "Capacitor Android Configured" : "React/Vite Responsive"}</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. PORTFOLIO SHOWCASE SIMULATOR
// ==========================================
function PortfolioShowcaseSimulator() {
  const [activeTab, setActiveTab] = useState<"stack" | "metrics">("metrics");

  return (
    <div className="w-full rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-indigo-100 p-6 font-sans overflow-hidden shadow-xl relative text-left">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-4 pt-1">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-slate-900 uppercase">
            AZBHY PORTFOLIO SHOWCASE
          </span>
        </div>
        <span className="text-[10px] font-mono text-indigo-900 px-3 py-1 bg-indigo-50 rounded-full border border-indigo-200 font-bold">
          Verified 2026
        </span>
      </div>

      <div className="flex gap-2 mb-4 p-1 bg-slate-100 rounded-xl border border-slate-200">
        <button
          onClick={() => setActiveTab("metrics")}
          className={`flex-1 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
            activeTab === "metrics" ? "bg-indigo-600 text-white shadow-xs font-extrabold" : "text-slate-600"
          }`}
        >
          Metrik Terverifikasi
        </button>
        <button
          onClick={() => setActiveTab("stack")}
          className={`flex-1 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
            activeTab === "stack" ? "bg-indigo-600 text-white shadow-xs font-extrabold" : "text-slate-600"
          }`}
        >
          Arsitektur Kode
        </button>
      </div>

      {activeTab === "metrics" ? (
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3.5 bg-indigo-50/60 rounded-2xl border border-indigo-200">
            <span className="block text-[9px] font-mono text-indigo-700 font-bold uppercase">TRANSAKSI DIGITAL</span>
            <span className="text-xl font-black text-slate-900 mt-1 block">100+</span>
            <span className="text-[10px] text-slate-600 block mt-0.5 font-medium">Layanan & Ritel</span>
          </div>
          <div className="p-3.5 bg-purple-50/60 rounded-2xl border border-purple-200">
            <span className="block text-[9px] font-mono text-purple-700 font-bold uppercase">REPOSITORI GITHUB</span>
            <span className="text-xl font-black text-slate-900 mt-1 block">5+</span>
            <span className="text-[10px] text-slate-600 block mt-0.5 font-medium">Source Code Live</span>
          </div>
          <div className="p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-200">
            <span className="block text-[9px] font-mono text-emerald-700 font-bold uppercase">PROJECT DIGITAL</span>
            <span className="text-xl font-black text-slate-900 mt-1 block">4+</span>
            <span className="text-[10px] text-slate-600 block mt-0.5 font-medium">Aplikasi Web</span>
          </div>
          <div className="p-3.5 bg-amber-50/60 rounded-2xl border border-amber-200">
            <span className="block text-[9px] font-mono text-amber-700 font-bold uppercase">ALUMNI TERKOORDINASI</span>
            <span className="text-xl font-black text-slate-900 mt-1 block">150+</span>
            <span className="text-[10px] text-slate-600 block mt-0.5 font-medium">Organisasi Alumni</span>
          </div>
        </div>
      ) : (
        <div className="p-4 bg-slate-900 text-slate-100 rounded-2xl font-mono text-xs space-y-2">
          <div className="flex items-center justify-between text-[10px] text-indigo-400 border-b border-slate-800 pb-2">
            <span>AZBHY PORTFOLIO ARCHITECTURE</span>
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <p className="text-emerald-400 font-bold">✓ React 18 + Vite + TypeScript</p>
          <p className="text-indigo-300 font-bold">✓ Tailwind CSS v4 + Motion</p>
          <p className="text-purple-300 font-bold">✓ Firebase Integration Ready</p>
          <p className="text-slate-400 text-[10px] pt-1 border-t border-slate-800">
            100% High-Contrast Light Theme Approved
          </p>
        </div>
      )}
    </div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function Projects() {
  const { projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 16 },
    },
  };

  return (
    <section id="projects" className="relative py-24 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <span className="text-xs font-bold tracking-wider text-indigo-800 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200 shadow-sm">
            STUDI KASUS PROYEK & PORTOFOLIO
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Produk Digital & Sistem Operasional
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-700 font-normal">
            Penyelesaian masalah nyata melalui kode bersih, antarmuka web interaktif, dan sistem digital yang bermanfaat.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Case Studies Container */}
        <motion.div
          id="project-case-studies-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16 sm:space-y-24"
        >
          {projects.map((project) => {
            const isPos = project.id === "proj-2";
            const isNgaji = project.id === "proj-3";
            const isPorto = project.id === "proj-4";

            const categoryBg = isPos
              ? "bg-emerald-50 text-emerald-900 border-emerald-200"
              : isNgaji
              ? "bg-teal-50 text-teal-900 border-teal-200"
              : isPorto
              ? "bg-purple-50 text-purple-900 border-purple-200"
              : "bg-indigo-50 text-indigo-900 border-indigo-200";

            const btnBg = isPos
              ? "bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600"
              : isNgaji
              ? "bg-gradient-to-r from-teal-600 to-emerald-700 hover:from-teal-500 hover:to-emerald-600"
              : isPorto
              ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500"
              : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500";

            const solutionBg = isPos
              ? "border-emerald-200 bg-emerald-50/60 text-emerald-900"
              : isNgaji
              ? "border-teal-200 bg-teal-50/60 text-teal-900"
              : isPorto
              ? "border-purple-200 bg-purple-50/60 text-purple-900"
              : "border-indigo-200 bg-indigo-50/60 text-indigo-900";

            return (
              <motion.div
                key={project.id}
                id={`project-studi-kasus-${project.id}`}
                variants={itemVariants}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
              >
                {/* COLUMN 1 (6/12): TEXT DETAILS */}
                <div className="lg:col-span-6 flex flex-col justify-between gap-6 text-left">
                  
                  {/* Category, Title & Subtitle */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{project.featuredSymbol || "💻"}</span>
                      <span className={`text-[10px] font-mono font-extrabold tracking-wider border px-3 py-1 rounded-full uppercase shadow-2xs ${categoryBg}`}>
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-none">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-600 mt-2 uppercase font-bold">
                      // {project.subtitle}
                    </p>
                  </div>

                  {/* Problems and Solutions Grid side-by-side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    {/* Problem Column */}
                    <div className="p-4 rounded-2xl border border-rose-200 bg-rose-50/60 flex flex-col justify-start">
                      <div className="flex items-center gap-1.5 text-rose-800 font-mono text-[11px] font-black uppercase tracking-wider mb-2">
                        <AlertCircle className="w-4 h-4 text-rose-600" />
                        <span>Masalah (Problem)</span>
                      </div>
                      <p className="text-slate-800 text-xs leading-relaxed font-medium">
                        {project.problem}
                      </p>
                    </div>

                    {/* Solution Column */}
                    <div className={`p-4 rounded-2xl border flex flex-col justify-start ${solutionBg}`}>
                      <div className="flex items-center gap-1.5 font-mono text-[11px] font-black uppercase tracking-wider mb-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Solusi Digital</span>
                      </div>
                      <p className="text-slate-800 text-xs leading-relaxed font-medium">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Impact Columns */}
                  <div className="p-4 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-md">
                    <div className="flex items-center gap-1.5 text-indigo-900 font-mono text-[11px] font-black uppercase tracking-wider mb-2">
                      <TrendingUp className="w-4 h-4 text-indigo-600" />
                      <span>Hasil & Manfaat (Impact)</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-800 leading-relaxed font-medium">
                      {project.results.map((result, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold shrink-0 mt-0.5">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions & Tech row */}
                  <div className="flex flex-col gap-3">
                    {/* Source and demo links */}
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          id={`proj-github-${project.id}`}
                          className={
                            project.demoUrl
                              ? "p-3 bg-white hover:bg-slate-100 text-slate-800 rounded-xl border border-slate-300 transition-colors flex items-center justify-center cursor-pointer shadow-sm hover:border-slate-400"
                              : "px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-[10px] tracking-wider uppercase rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md"
                          }
                          title="View Source on GitHub"
                        >
                          <Github className="w-4 h-4" />
                          {!project.demoUrl && <span>Repository GitHub</span>}
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          id={`proj-demo-${project.id}`}
                          className={`px-6 py-3 text-white font-extrabold text-[10px] tracking-wider uppercase rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md ${btnBg}`}
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5 text-white" />
                        </a>
                      )}
                    </div>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap items-center gap-1.5 p-2.5 bg-white border border-slate-200/90 rounded-2xl shadow-sm">
                      <span className="flex items-center gap-1 text-[9px] font-mono font-extrabold text-indigo-800 uppercase tracking-wider mr-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        Tech:
                      </span>
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 bg-slate-100/80 border border-slate-200 rounded-lg text-[10px] font-mono font-bold text-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* COLUMN 2 (6/12): SIMULATOR */}
                <div className="lg:col-span-6 flex items-center justify-center">
                  <div className="w-full flex justify-center">
                    {project.id === "proj-1" && <DompetKuSimulator />}
                    {project.id === "proj-2" && <POSUMKMSimulator />}
                    {project.id === "proj-3" && <NgajiKuSimulator />}
                    {project.id === "proj-4" && <PortfolioShowcaseSimulator />}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
