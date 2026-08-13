import React, { useState, useEffect } from "react";
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
  X,
  Eye
} from "lucide-react";
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
    <div className="w-full rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-indigo-500/40 p-5 font-sans overflow-hidden shadow-2xl relative text-left">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-500" />
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 pt-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-white uppercase">
            SIMULASI INTERAKTIF: DOMPETKU
          </span>
        </div>
        <span className="text-[10px] font-mono text-indigo-300 px-3 py-0.5 bg-indigo-950/80 rounded-full border border-indigo-500/30 font-bold">
          Live Prototype
        </span>
      </div>

      {/* Mini Card Display */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30">
          <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
            Total Pemasukan
          </span>
          <span className="text-xs sm:text-sm font-black text-emerald-300 mt-0.5 block">
            Rp {totalIncome.toLocaleString("id-ID")}
          </span>
        </div>
        <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/30">
          <span className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-wider block">
            Total Pengeluaran
          </span>
          <span className="text-xs sm:text-sm font-black text-rose-300 mt-0.5 block">
            Rp {totalExpense.toLocaleString("id-ID")}
          </span>
        </div>
      </div>

      {/* Main Balance Display */}
      <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white rounded-xl p-3.5 mb-3 text-center shadow-lg border border-indigo-400/40">
        <span className="text-[10px] font-mono font-bold text-indigo-200 uppercase tracking-wider block">
          Saldo Aktif DompetKu
        </span>
        <h4 className="text-xl sm:text-2xl font-black text-white mt-0.5 font-sans">
          Rp {calculatedBalance.toLocaleString("id-ID")}
        </h4>
      </div>

      {/* Mini quick form adder */}
      <form onSubmit={handleAdd} className="space-y-2 mb-3 bg-slate-950/80 p-3 rounded-xl border border-slate-800">
        <p className="text-[10px] font-bold font-mono text-indigo-300 uppercase tracking-wider">
          + Catat Transaksi Baru
        </p>
        <div className="grid grid-cols-12 gap-1.5">
          <input
            type="text"
            placeholder="Kopi, Peralatan"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="col-span-6 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 font-sans font-medium"
          />
          <input
            type="number"
            placeholder="Rp"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="col-span-4 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 font-sans font-medium"
          />
          <button
            type="submit"
            className="col-span-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg p-1 flex items-center justify-center transition-all cursor-pointer text-white shadow-md"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-2 p-1 bg-slate-900 rounded-lg border border-slate-800">
          <button
            type="button"
            onClick={() => setType("expense")}
            className={`flex-1 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
              type === "expense" ? "bg-rose-950 text-rose-300 border border-rose-500/40 font-extrabold" : "text-slate-400"
            }`}
          >
            (-) Pengeluaran
          </button>
          <button
            type="button"
            onClick={() => setType("income")}
            className={`flex-1 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
              type === "income" ? "bg-emerald-950 text-emerald-300 border border-emerald-500/40 font-extrabold" : "text-slate-400"
            }`}
          >
            (+) Pemasukan
          </button>
        </div>
      </form>

      {/* Real-time active ledger list */}
      <div className="space-y-1.5 max-h-[130px] overflow-y-auto pr-1">
        <AnimatePresence initial={false}>
          {transactions.map((trans) => (
            <motion.div
              key={trans.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs"
            >
              <div className="text-left">
                <p className="text-xs text-slate-200 font-bold">{trans.title}</p>
                <span className="text-[9px] font-mono text-indigo-400 uppercase font-semibold">
                  {trans.category}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-black font-mono ${
                  trans.type === "income" ? "text-emerald-400" : "text-rose-400"
                }`}>
                  {trans.type === "income" ? "+" : "-"} Rp {trans.amount.toLocaleString("id-ID")}
                </span>
                <button
                  type="button"
                  onClick={() => deleteTransaction(trans.id)}
                  className="text-slate-500 hover:text-rose-400 p-0.5 rounded transition-colors cursor-pointer"
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
// 2. WARUNG STOREFRONT SIMULATOR
// ==========================================
function WarungStorefrontSimulator() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Semua", "Sembako", "Minuman", "Snack"];

  const catalog = [
    { id: 1, name: "Beras Sembako 5kg", category: "Sembako", price: 75000, stock: "Tersedia" },
    { id: 2, name: "Minyak Goreng 2L", category: "Sembako", price: 34000, stock: "Tersedia" },
    { id: 3, name: "Gula Pasir 1kg", category: "Sembako", price: 16500, stock: "Tersedia" },
    { id: 4, name: "Air Mineral 600ml", category: "Minuman", price: 3500, stock: "Tersedia" },
    { id: 5, name: "Teh Kemasan Botol", category: "Minuman", price: 5000, stock: "Tersedia" },
    { id: 6, name: "Biskuit Kaleng 350g", category: "Snack", price: 22000, stock: "Tersedia" },
  ];

  const filtered = catalog.filter((item) => {
    const matchCat = activeCategory === "Semua" || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-emerald-500/40 p-5 font-sans overflow-hidden shadow-2xl relative text-left">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 pt-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-white uppercase">
            ETALASE PELANGGAN: WARUNG AMMA IKA
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-300 px-3 py-0.5 bg-emerald-950/80 rounded-full border border-emerald-500/30 font-bold">
          Katalog Pelanggan
        </span>
      </div>

      <div className="space-y-3">
        {/* Search & Categories */}
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Cari produk di etalase..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
          />
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-[10px] font-mono font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Catalog List */}
        <div className="grid grid-cols-2 gap-2 max-h-[170px] overflow-y-auto pr-1">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-2.5 rounded-xl bg-slate-950/80 border border-emerald-500/30 flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] font-mono font-bold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded-md uppercase border border-emerald-500/30">
                  {item.category}
                </span>
                <p className="text-xs font-bold text-white leading-snug mt-1">{item.name}</p>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-300 font-extrabold">
                  Rp {item.price.toLocaleString("id-ID")}
                </span>
                <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded">
                  {item.stock}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400 font-semibold">
          <span>📍 Suppa, Pinrang</span>
          <span className="text-emerald-400 font-bold">● Buka Setiap Hari</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. SISTEM POS UMKM SIMULATOR
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
    <div className="w-full rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-emerald-500/40 p-5 font-sans overflow-hidden shadow-2xl relative text-left">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 pt-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-white uppercase">
            POS KASIR (PENGGUNA INTERNAL): KASIR AMMA IKA
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-300 px-3 py-0.5 bg-emerald-950/80 rounded-full border border-emerald-500/30 font-bold">
          Sistem Internal
        </span>
      </div>

      {!showReceipt ? (
        <div className="space-y-3">
          {/* Catalog grid */}
          <div>
            <p className="text-[10px] font-bold font-mono text-emerald-300 uppercase tracking-wider mb-2">
              Katalog Produk Kasir
            </p>
            <div className="grid grid-cols-2 gap-2">
              {products.map((prod) => (
                <button
                  id={`pos-prod-${prod.id}`}
                  key={prod.id}
                  onClick={() => addToCart(prod)}
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500 text-left transition-all group cursor-pointer flex flex-col justify-between hover:shadow-md"
                >
                  <div>
                    <p className="text-xs font-bold text-white leading-tight group-hover:text-emerald-300 transition-colors">
                      {prod.name}
                    </p>
                    <p className="text-[11px] font-mono text-emerald-400 mt-1 font-bold">Rp {prod.price.toLocaleString("id-ID")}</p>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded-full mt-2 inline-block max-w-max border border-emerald-500/30 font-extrabold">
                    + Tambah
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <p className="text-[10px] font-bold font-mono text-emerald-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShoppingCart className="w-3.5 h-3.5 text-emerald-400" />
              Keranjang Kasir ({cart.length})
            </p>

            {cart.length === 0 ? (
              <div className="text-center py-3 text-xs text-slate-500 font-mono">
                [ Keranjang Kosong ]
              </div>
            ) : (
              <div className="space-y-2">
                <div className="max-h-[100px] overflow-y-auto space-y-1 pr-1">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-xs rounded-lg bg-slate-900 p-2 border border-slate-800">
                      <span className="text-white font-bold max-w-[120px] truncate">{item.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded border border-slate-800">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="p-0.5 hover:text-rose-400 cursor-pointer text-slate-400"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-[10px] font-mono text-white font-bold w-3 text-center">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="p-0.5 hover:text-emerald-400 cursor-pointer text-slate-400"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-mono text-emerald-300 text-xs font-extrabold min-w-[55px] text-right">
                          Rp {(item.price * item.qty).toLocaleString("id-ID")}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1.5 border-t border-slate-800 text-xs font-extrabold">
                  <span className="text-slate-400 font-mono">TOTAL</span>
                  <span className="text-emerald-400 font-sans text-sm">Rp {total.toLocaleString("id-ID")}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-[10px] tracking-wider uppercase rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Cetak Struk</span>
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
          className="bg-slate-950 text-white p-4 rounded-xl font-mono text-xs shadow-2xl border border-emerald-500/40 relative max-w-sm mx-auto"
        >
          <div className="text-center py-2 border-b border-dashed border-slate-700">
            <h5 className="font-extrabold tracking-wide text-xs text-emerald-400">KASIR AMMA' IKA POS</h5>
            <p className="text-[9px] text-emerald-300 font-bold">Ritel Internal Keluarga</p>
            <p className="text-[9px] text-slate-400 font-bold">{receiptNumber}</p>
          </div>

          <div className="py-2 space-y-1 border-b border-dashed border-slate-700">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-[10px]">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-white">{item.name}</span>
                  <span className="text-[9px] text-slate-400">
                    {item.qty} x Rp {item.price.toLocaleString("id-ID")}
                  </span>
                </div>
                <span className="mt-auto text-emerald-300 font-bold">
                  Rp {(item.price * item.qty).toLocaleString("id-ID")}
                </span>
              </div>
            ))}
          </div>

          <div className="py-2 space-y-1 text-xs font-bold">
            <div className="flex justify-between text-emerald-400 font-black">
              <span>TOTAL</span>
              <span>Rp {total.toLocaleString("id-ID")}</span>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="w-full mt-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-mono font-bold text-[10px] uppercase tracking-wider transition-colors cursor-pointer shadow-md"
          >
            Selesai / Transaksi Baru
          </button>
        </motion.div>
      )}
    </div>
  );
}

// ==========================================
// 4. NGAJIKU SIMULATOR
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
      translation: "Katakanlah, 'Aku berlindung kepada Tuhan yang menguasai subuh.'"
    },
  ];

  const current = surahs[selectedSurah];

  return (
    <div className="w-full rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-teal-500/40 p-5 font-sans overflow-hidden shadow-2xl relative text-left">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-sky-500" />
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 pt-1">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-teal-400" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-white uppercase">
            SIMULASI INTERAKTIF: NGAJIKU
          </span>
        </div>
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-full border border-slate-800">
          <button
            onClick={() => setViewMode("web")}
            className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase transition-all ${
              viewMode === "web" ? "bg-teal-600 text-white" : "text-slate-400"
            }`}
          >
            Web
          </button>
          <button
            onClick={() => setViewMode("apk")}
            className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase transition-all ${
              viewMode === "apk" ? "bg-emerald-600 text-white" : "text-slate-400"
            }`}
          >
            Capacitor
          </button>
        </div>
      </div>

      {/* Surah selector tabs */}
      <div className="flex gap-1 overflow-x-auto pb-1.5 mb-2.5">
        {surahs.map((s, idx) => (
          <button
            key={s.no}
            onClick={() => setSelectedSurah(idx)}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition-all border ${
              selectedSurah === idx
                ? "bg-teal-950 text-teal-300 border-teal-500/40 font-extrabold"
                : "bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800"
            }`}
          >
            {s.no}. {s.name}
          </button>
        ))}
      </div>

      {/* Viewport Frame */}
      <div className={`p-3.5 rounded-xl border transition-all ${
        viewMode === "apk"
          ? "bg-slate-950 border-slate-800 text-white max-w-[260px] mx-auto shadow-2xl"
          : "bg-teal-950/40 border-teal-500/30 text-white"
      }`}>
        <div className="flex items-center justify-between border-b border-teal-500/30 pb-2 mb-2.5">
          <span className="text-[11px] font-bold font-mono text-teal-300 flex items-center gap-1">
            {viewMode === "apk" ? <Smartphone className="w-3 h-3 text-emerald-400" /> : <Monitor className="w-3 h-3 text-teal-400" />}
            {current.no}. {current.name}
          </span>
          <span className="text-base font-serif text-teal-300 font-bold">{current.arabic}</span>
        </div>

        <div className="py-3 text-center space-y-2">
          <p className="text-xl font-serif leading-relaxed text-emerald-200 font-bold">
            {current.sampleVerse}
          </p>
          <p className="text-[11px] text-slate-300 italic font-medium leading-normal bg-slate-950/80 p-2 rounded-lg border border-teal-500/30">
            "{current.translation}"
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 5. PORTFOLIO SHOWCASE SIMULATOR
// ==========================================
function PortfolioShowcaseSimulator() {
  const [activeTab, setActiveTab] = useState<"stack" | "metrics">("metrics");

  return (
    <div className="w-full rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-indigo-500/40 p-5 font-sans overflow-hidden shadow-2xl relative text-left">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 pt-1">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-white uppercase">
            AZBHY PORTFOLIO SHOWCASE
          </span>
        </div>
        <span className="text-[10px] font-mono text-indigo-300 px-3 py-0.5 bg-indigo-950/80 rounded-full border border-indigo-500/30 font-bold">
          Verified 2026
        </span>
      </div>

      <div className="flex gap-2 mb-3 p-1 bg-slate-950 rounded-lg border border-slate-800">
        <button
          onClick={() => setActiveTab("metrics")}
          className={`flex-1 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
            activeTab === "metrics" ? "bg-indigo-600 text-white font-extrabold shadow-md" : "text-slate-400"
          }`}
        >
          Metrik Terverifikasi
        </button>
        <button
          onClick={() => setActiveTab("stack")}
          className={`flex-1 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
            activeTab === "stack" ? "bg-indigo-600 text-white font-extrabold shadow-md" : "text-slate-400"
          }`}
        >
          Arsitektur Kode
        </button>
      </div>

      {activeTab === "metrics" ? (
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3 bg-indigo-950/60 rounded-xl border border-indigo-500/30">
            <span className="block text-[9px] font-mono text-indigo-400 font-bold uppercase">TRANSAKSI DIGITAL</span>
            <span className="text-lg font-black text-white mt-0.5 block">100+</span>
            <span className="text-[10px] text-slate-400 block font-medium">Layanan & Ritel</span>
          </div>
          <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-500/30">
            <span className="block text-[9px] font-mono text-purple-400 font-bold uppercase">REPOSITORI GITHUB</span>
            <span className="text-lg font-black text-white mt-0.5 block">5</span>
            <span className="text-[10px] text-slate-400 block font-medium">Source Code Live</span>
          </div>
          <div className="p-3 bg-emerald-950/60 rounded-xl border border-emerald-500/30">
            <span className="block text-[9px] font-mono text-emerald-400 font-bold uppercase">PROJECT DIGITAL LIVE</span>
            <span className="text-lg font-black text-white mt-0.5 block">5</span>
            <span className="text-[10px] text-slate-400 block font-medium">Aplikasi Web</span>
          </div>
          <div className="p-3 bg-amber-950/60 rounded-xl border border-amber-500/30">
            <span className="block text-[9px] font-mono text-amber-400 font-bold uppercase">ALUMNI TERKOORDINASI</span>
            <span className="text-lg font-black text-white mt-0.5 block">150+</span>
            <span className="text-[10px] text-slate-400 block font-medium">Organisasi Alumni</span>
          </div>
        </div>
      ) : (
        <div className="p-3.5 bg-slate-950 text-slate-100 rounded-xl font-mono text-xs space-y-1.5 border border-slate-800">
          <div className="flex items-center justify-between text-[10px] text-indigo-400 border-b border-slate-800 pb-1.5">
            <span>AZBHY PORTFOLIO ARCHITECTURE</span>
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <p className="text-emerald-400 font-bold">✓ React 18 + Vite + TypeScript</p>
          <p className="text-indigo-300 font-bold">✓ Tailwind CSS v4 + Motion</p>
          <p className="text-purple-300 font-bold">✓ Firebase Integration Ready</p>
        </div>
      )}
    </div>
  );
}

// ==========================================
// MAIN PROJECTS COMPONENT (SCAN -> SELECT -> DETAIL)
// ==========================================
export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProjectModal, setSelectedProjectModal] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProjectModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="relative py-24 border-t border-slate-800/80 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-wider text-indigo-300 uppercase bg-indigo-950/80 px-3.5 py-1.5 rounded-full border border-indigo-500/30 shadow-[0_0_12px_rgba(99,102,241,0.2)]">
            PORTOFOLIO KARYA & SOLUSI
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
            Produk Digital & Sistem Operasional
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-normal">
            Pilih project untuk melihat detail problem, solusi, hasil dampak, tech stack lengkap, serta simulator interaktif.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Overview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const isWarung = project.id === "proj-2";
            const isKasir = project.id === "proj-3";
            const isNgaji = project.id === "proj-4";
            const isPorto = project.id === "proj-5";

            const categoryColor = isWarung || isKasir
              ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/30"
              : isNgaji
              ? "bg-teal-950/80 text-teal-300 border-teal-500/30"
              : isPorto
              ? "bg-purple-950/80 text-purple-300 border-purple-500/30"
              : "bg-indigo-950/80 text-indigo-300 border-indigo-500/30";

            return (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="group p-6 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl shadow-xl hover:border-indigo-500/60 hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] flex flex-col justify-between text-left"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl shrink-0">
                      {project.featuredSymbol || "💻"}
                    </div>
                    <span className={`text-[10px] font-mono font-extrabold tracking-wider border px-2.5 py-0.5 rounded-md uppercase ${categoryColor}`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title & Subtitle */}
                  <h3 className="text-xl font-extrabold text-white tracking-tight leading-snug group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono font-bold text-slate-400 mt-1 uppercase">
                    {project.subtitle}
                  </p>

                  {/* 1 Kalimat Value / Problem Statement */}
                  <p className="text-xs text-slate-300 mt-3.5 leading-relaxed font-medium line-clamp-2 border-l-2 border-indigo-500 pl-2.5">
                    {project.problem}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  {/* Top 3 Tech Stack Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-slate-950 border border-slate-800 rounded text-[10px] font-mono font-bold text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA Button "Lihat Detail" */}
                  <button
                    id={`btn-open-project-${project.id}`}
                    onClick={() => setSelectedProjectModal(project)}
                    className="w-full py-2.5 bg-indigo-600/90 hover:bg-indigo-500 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  >
                    <Eye className="w-4 h-4 text-white" />
                    <span>Lihat Detail & Simulator</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* PROJECT DETAIL MODAL / DRAWER */}
      <AnimatePresence>
        {selectedProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProjectModal(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-5 sm:p-8 text-left z-10 my-auto max-h-[92vh] overflow-y-auto custom-scrollbar"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedProjectModal.featuredSymbol || "💻"}</span>
                  <div>
                    <span className="inline-block text-[10px] font-mono font-extrabold uppercase tracking-wider bg-indigo-950/80 text-indigo-300 border border-indigo-500/30 px-2.5 py-0.5 rounded-md mb-1">
                      {selectedProjectModal.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {selectedProjectModal.title}
                    </h3>
                    <p className="text-xs font-mono font-bold text-slate-400 uppercase">
                      {selectedProjectModal.subtitle}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProjectModal(null)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Content Grid: Details on Left/Top, Simulator on Right/Bottom */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">
                
                {/* Details Column */}
                <div className="lg:col-span-6 space-y-5">
                  {/* Problem & Solution */}
                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-4 rounded-xl border border-rose-500/30 bg-rose-950/40">
                      <div className="flex items-center gap-1.5 text-rose-300 font-mono text-xs font-extrabold uppercase tracking-wider mb-1.5">
                        <AlertCircle className="w-4 h-4 text-rose-400" />
                        <span>Masalah Utama</span>
                      </div>
                      <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
                        {selectedProjectModal.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/40">
                      <div className="flex items-center gap-1.5 text-emerald-300 font-mono text-xs font-extrabold uppercase tracking-wider mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Solusi Digital</span>
                      </div>
                      <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
                        {selectedProjectModal.solution}
                      </p>
                    </div>
                  </div>

                  {/* Impact Results */}
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950">
                    <div className="flex items-center gap-1.5 text-indigo-300 font-mono text-xs font-extrabold uppercase tracking-wider mb-2">
                      <TrendingUp className="w-4 h-4 text-indigo-400" />
                      <span>Hasil & Dampak Kerja</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300 font-medium">
                      {selectedProjectModal.results.map((res, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-bold shrink-0">•</span>
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Full */}
                  <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950">
                    <span className="block text-[10px] font-mono font-extrabold text-indigo-300 uppercase tracking-wider mb-2">
                      Tech Stack Lengkap
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProjectModal.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-md text-xs font-mono font-bold text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {selectedProjectModal.githubUrl && (
                      <a
                        href={selectedProjectModal.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md"
                      >
                        <Github className="w-4 h-4" />
                        <span>Repository GitHub</span>
                      </a>
                    )}
                    {selectedProjectModal.demoUrl && (
                      <a
                        href={selectedProjectModal.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-indigo-600/20"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Simulator Column */}
                <div className="lg:col-span-6 flex items-center justify-center">
                  <div className="w-full">
                    {selectedProjectModal.id === "proj-1" && <DompetKuSimulator />}
                    {selectedProjectModal.id === "proj-2" && <WarungStorefrontSimulator />}
                    {selectedProjectModal.id === "proj-3" && <POSUMKMSimulator />}
                    {selectedProjectModal.id === "proj-4" && <NgajiKuSimulator />}
                    {selectedProjectModal.id === "proj-5" && <PortfolioShowcaseSimulator />}
                  </div>
                </div>

              </div>

              {/* Footer Close Button */}
              <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedProjectModal(null)}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Tutup Detail
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
