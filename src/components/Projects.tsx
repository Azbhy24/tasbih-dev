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
    <div className="w-full rounded-2xl bg-white/95 backdrop-blur-xl border border-indigo-200 p-5 font-sans overflow-hidden shadow-md relative text-left">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-500" />
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-4 pt-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-slate-900 uppercase">
            SIMULASI INTERAKTIF: DOMPETKU
          </span>
        </div>
        <span className="text-[10px] font-mono text-indigo-900 px-3 py-0.5 bg-indigo-50 rounded-full border border-indigo-200 font-bold">
          Live Prototype
        </span>
      </div>

      {/* Mini Card Display */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200">
          <span className="text-[10px] font-mono text-emerald-800 font-bold uppercase tracking-wider block">
            Total Pemasukan
          </span>
          <span className="text-xs sm:text-sm font-black text-emerald-950 mt-0.5 block">
            Rp {totalIncome.toLocaleString("id-ID")}
          </span>
        </div>
        <div className="p-3 rounded-xl bg-rose-50/80 border border-rose-200">
          <span className="text-[10px] font-mono text-rose-800 font-bold uppercase tracking-wider block">
            Total Pengeluaran
          </span>
          <span className="text-xs sm:text-sm font-black text-rose-950 mt-0.5 block">
            Rp {totalExpense.toLocaleString("id-ID")}
          </span>
        </div>
      </div>

      {/* Main Balance Display */}
      <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white rounded-xl p-3.5 mb-3 text-center shadow-xs">
        <span className="text-[10px] font-mono font-bold text-indigo-200 uppercase tracking-wider block">
          Saldo Aktif DompetKu
        </span>
        <h4 className="text-xl sm:text-2xl font-black text-white mt-0.5 font-sans">
          Rp {calculatedBalance.toLocaleString("id-ID")}
        </h4>
      </div>

      {/* Mini quick form adder */}
      <form onSubmit={handleAdd} className="space-y-2 mb-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
        <p className="text-[10px] font-bold font-mono text-indigo-900 uppercase tracking-wider">
          + Catat Transaksi Baru
        </p>
        <div className="grid grid-cols-12 gap-1.5">
          <input
            type="text"
            placeholder="Kopi, Peralatan"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="col-span-6 bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 font-sans font-medium"
          />
          <input
            type="number"
            placeholder="Rp"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="col-span-4 bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 font-sans font-medium"
          />
          <button
            type="submit"
            className="col-span-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg p-1 flex items-center justify-center transition-all cursor-pointer text-white shadow-xs"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-2 p-1 bg-white rounded-lg border border-slate-200">
          <button
            type="button"
            onClick={() => setType("expense")}
            className={`flex-1 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
              type === "expense" ? "bg-rose-100 text-rose-800 border border-rose-300 font-extrabold" : "text-slate-500"
            }`}
          >
            (-) Pengeluaran
          </button>
          <button
            type="button"
            onClick={() => setType("income")}
            className={`flex-1 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
              type === "income" ? "bg-emerald-100 text-emerald-800 border border-emerald-300 font-extrabold" : "text-slate-500"
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
              className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs"
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
    <div className="w-full rounded-2xl bg-white/95 backdrop-blur-xl border border-emerald-200 p-5 font-sans overflow-hidden shadow-md relative text-left">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-4 pt-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-slate-900 uppercase">
            ETALASE PELANGGAN: WARUNG AMMA IKA
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-900 px-3 py-0.5 bg-emerald-50 rounded-full border border-emerald-200 font-bold">
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
            className="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
          />
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-[10px] font-mono font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
              className="p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md uppercase">
                  {item.category}
                </span>
                <p className="text-xs font-bold text-slate-900 leading-snug mt-1">{item.name}</p>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-900 font-extrabold">
                  Rp {item.price.toLocaleString("id-ID")}
                </span>
                <span className="text-[9px] font-mono font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                  {item.stock}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-600 font-semibold">
          <span>📍 Suppa, Pinrang</span>
          <span className="text-emerald-700 font-bold">● Buka Setiap Hari</span>
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
    <div className="w-full rounded-2xl bg-white/95 backdrop-blur-xl border border-emerald-200 p-5 font-sans overflow-hidden shadow-md relative text-left">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-4 pt-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-slate-900 uppercase">
            POS KASIR (PENGGUNA INTERNAL): KASIR AMMA IKA
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-900 px-3 py-0.5 bg-emerald-50 rounded-full border border-emerald-200 font-bold">
          Sistem Internal
        </span>
      </div>

      {!showReceipt ? (
        <div className="space-y-3">
          {/* Catalog grid */}
          <div>
            <p className="text-[10px] font-bold font-mono text-emerald-900 uppercase tracking-wider mb-2">
              Katalog Produk Kasir
            </p>
            <div className="grid grid-cols-2 gap-2">
              {products.map((prod) => (
                <button
                  id={`pos-prod-${prod.id}`}
                  key={prod.id}
                  onClick={() => addToCart(prod)}
                  className="p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-200 hover:border-emerald-500 text-left transition-all group cursor-pointer flex flex-col justify-between hover:shadow-xs"
                >
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-tight group-hover:text-emerald-700 transition-colors">
                      {prod.name}
                    </p>
                    <p className="text-[11px] font-mono text-emerald-800 mt-1 font-bold">Rp {prod.price.toLocaleString("id-ID")}</p>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-full mt-2 inline-block max-w-max border border-emerald-300 font-extrabold">
                    + Tambah
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-[10px] font-bold font-mono text-emerald-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShoppingCart className="w-3.5 h-3.5 text-emerald-600" />
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
                    <div key={item.id} className="flex items-center justify-between text-xs rounded-lg bg-white p-2 border border-slate-200">
                      <span className="text-slate-900 font-bold max-w-[120px] truncate">{item.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded border border-slate-300">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="p-0.5 hover:text-rose-600 cursor-pointer text-slate-600"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-[10px] font-mono text-slate-900 font-bold w-3 text-center">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="p-0.5 hover:text-emerald-600 cursor-pointer text-slate-600"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-mono text-slate-900 text-xs font-extrabold min-w-[55px] text-right">
                          Rp {(item.price * item.qty).toLocaleString("id-ID")}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1.5 border-t border-slate-200 text-xs font-extrabold">
                  <span className="text-slate-600 font-mono">TOTAL</span>
                  <span className="text-emerald-700 font-sans text-sm">Rp {total.toLocaleString("id-ID")}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[10px] tracking-wider uppercase rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
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
          className="bg-white text-slate-900 p-4 rounded-xl font-mono text-xs shadow-md border border-emerald-200 relative max-w-sm mx-auto"
        >
          <div className="text-center py-2 border-b border-dashed border-slate-300">
            <h5 className="font-extrabold tracking-wide text-xs text-emerald-950">KASIR AMMA' IKA POS</h5>
            <p className="text-[9px] text-emerald-700 font-bold">Ritel Internal Keluarga</p>
            <p className="text-[9px] text-slate-500 font-bold">{receiptNumber}</p>
          </div>

          <div className="py-2 space-y-1 border-b border-dashed border-slate-300">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-[10px]">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-slate-900">{item.name}</span>
                  <span className="text-[9px] text-slate-500">
                    {item.qty} x Rp {item.price.toLocaleString("id-ID")}
                  </span>
                </div>
                <span className="mt-auto text-slate-900 font-bold">
                  Rp {(item.price * item.qty).toLocaleString("id-ID")}
                </span>
              </div>
            ))}
          </div>

          <div className="py-2 space-y-1 text-xs font-bold">
            <div className="flex justify-between text-emerald-900 font-black">
              <span>TOTAL</span>
              <span>Rp {total.toLocaleString("id-ID")}</span>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="w-full mt-3 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-mono font-bold text-[10px] uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
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
    <div className="w-full rounded-2xl bg-white/95 backdrop-blur-xl border border-teal-200 p-5 font-sans overflow-hidden shadow-md relative text-left">
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
            className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase transition-all ${
              viewMode === "web" ? "bg-teal-600 text-white" : "text-slate-600"
            }`}
          >
            Web
          </button>
          <button
            onClick={() => setViewMode("apk")}
            className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase transition-all ${
              viewMode === "apk" ? "bg-emerald-600 text-white" : "text-slate-600"
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
                ? "bg-teal-50 text-teal-900 border-teal-300 font-extrabold"
                : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
            }`}
          >
            {s.no}. {s.name}
          </button>
        ))}
      </div>

      {/* Viewport Frame */}
      <div className={`p-3.5 rounded-xl border transition-all ${
        viewMode === "apk"
          ? "bg-slate-900 border-slate-800 text-white max-w-[260px] mx-auto shadow-xl"
          : "bg-teal-50/40 border-teal-200 text-slate-900"
      }`}>
        <div className="flex items-center justify-between border-b border-teal-200/50 pb-2 mb-2.5">
          <span className="text-[11px] font-bold font-mono text-teal-800 flex items-center gap-1">
            {viewMode === "apk" ? <Smartphone className="w-3 h-3 text-emerald-400" /> : <Monitor className="w-3 h-3 text-teal-600" />}
            {current.no}. {current.name}
          </span>
          <span className="text-base font-serif text-teal-700 font-bold">{current.arabic}</span>
        </div>

        <div className="py-3 text-center space-y-2">
          <p className="text-xl font-serif leading-relaxed text-slate-900 font-bold">
            {current.sampleVerse}
          </p>
          <p className="text-[11px] text-slate-700 italic font-medium leading-normal bg-white/80 p-2 rounded-lg border border-teal-100">
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
    <div className="w-full rounded-2xl bg-white/95 backdrop-blur-xl border border-indigo-200 p-5 font-sans overflow-hidden shadow-md relative text-left">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-4 pt-1">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-slate-900 uppercase">
            AZBHY PORTFOLIO SHOWCASE
          </span>
        </div>
        <span className="text-[10px] font-mono text-indigo-900 px-3 py-0.5 bg-indigo-50 rounded-full border border-indigo-200 font-bold">
          Verified 2026
        </span>
      </div>

      <div className="flex gap-2 mb-3 p-1 bg-slate-100 rounded-lg border border-slate-200">
        <button
          onClick={() => setActiveTab("metrics")}
          className={`flex-1 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
            activeTab === "metrics" ? "bg-indigo-600 text-white font-extrabold" : "text-slate-600"
          }`}
        >
          Metrik Terverifikasi
        </button>
        <button
          onClick={() => setActiveTab("stack")}
          className={`flex-1 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
            activeTab === "stack" ? "bg-indigo-600 text-white font-extrabold" : "text-slate-600"
          }`}
        >
          Arsitektur Kode
        </button>
      </div>

      {activeTab === "metrics" ? (
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3 bg-indigo-50/70 rounded-xl border border-indigo-200">
            <span className="block text-[9px] font-mono text-indigo-700 font-bold uppercase">TRANSAKSI DIGITAL</span>
            <span className="text-lg font-black text-slate-900 mt-0.5 block">100+</span>
            <span className="text-[10px] text-slate-600 block font-medium">Layanan & Ritel</span>
          </div>
          <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-200">
            <span className="block text-[9px] font-mono text-purple-700 font-bold uppercase">REPOSITORI GITHUB</span>
            <span className="text-lg font-black text-slate-900 mt-0.5 block">5+</span>
            <span className="text-[10px] text-slate-600 block font-medium">Source Code Live</span>
          </div>
          <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200">
            <span className="block text-[9px] font-mono text-emerald-700 font-bold uppercase">PROJECT DIGITAL LIVE</span>
            <span className="text-lg font-black text-slate-900 mt-0.5 block">4</span>
            <span className="text-[10px] text-slate-600 block font-medium">Aplikasi Web</span>
          </div>
          <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200">
            <span className="block text-[9px] font-mono text-amber-700 font-bold uppercase">ALUMNI TERKOORDINASI</span>
            <span className="text-lg font-black text-slate-900 mt-0.5 block">150+</span>
            <span className="text-[10px] text-slate-600 block font-medium">Organisasi Alumni</span>
          </div>
        </div>
      ) : (
        <div className="p-3.5 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs space-y-1.5">
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
    <section id="projects" className="relative py-24 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-wider text-indigo-800 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200 shadow-xs">
            PORTOFOLIO KARYA & SOLUSI
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Produk Digital & Sistem Operasional
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-700 font-normal">
            Pilih project untuk melihat detail problem, solusi, hasil dampak, tech stack lengkap, serta simulator interaktif.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Overview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const isWarung = project.id === "proj-2";
            const isKasir = project.id === "proj-3";
            const isNgaji = project.id === "proj-4";
            const isPorto = project.id === "proj-5";

            const categoryColor = isWarung || isKasir
              ? "bg-emerald-50 text-emerald-900 border-emerald-200"
              : isNgaji
              ? "bg-teal-50 text-teal-900 border-teal-200"
              : isPorto
              ? "bg-purple-50 text-purple-900 border-purple-200"
              : "bg-indigo-50 text-indigo-900 border-indigo-200";

            return (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="group p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between text-left"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-xl shrink-0">
                      {project.featuredSymbol || "💻"}
                    </div>
                    <span className={`text-[10px] font-mono font-extrabold tracking-wider border px-2.5 py-0.5 rounded-md uppercase ${categoryColor}`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title & Subtitle */}
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono font-bold text-slate-500 mt-1 uppercase">
                    {project.subtitle}
                  </p>

                  {/* 1 Kalimat Value / Problem Statement */}
                  <p className="text-xs text-slate-600 mt-3.5 leading-relaxed font-medium line-clamp-2 border-l-2 border-indigo-300 pl-2.5">
                    {project.problem}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  {/* Top 3 Tech Stack Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] font-mono font-bold text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[10px] font-mono font-bold text-slate-600">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA Button "Lihat Detail" */}
                  <button
                    id={`btn-open-project-${project.id}`}
                    onClick={() => setSelectedProjectModal(project)}
                    className="w-full py-2.5 bg-slate-900 hover:bg-indigo-600 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
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
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-5 sm:p-8 text-left z-10 my-auto max-h-[92vh] overflow-y-auto custom-scrollbar"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedProjectModal.featuredSymbol || "💻"}</span>
                  <div>
                    <span className="inline-block text-[10px] font-mono font-extrabold uppercase tracking-wider bg-indigo-100 text-indigo-900 border border-indigo-200 px-2.5 py-0.5 rounded-md mb-1">
                      {selectedProjectModal.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {selectedProjectModal.title}
                    </h3>
                    <p className="text-xs font-mono font-bold text-slate-600 uppercase">
                      {selectedProjectModal.subtitle}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProjectModal(null)}
                  className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer shrink-0"
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
                    <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/70">
                      <div className="flex items-center gap-1.5 text-rose-800 font-mono text-xs font-extrabold uppercase tracking-wider mb-1.5">
                        <AlertCircle className="w-4 h-4 text-rose-600" />
                        <span>Masalah Utama</span>
                      </div>
                      <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium">
                        {selectedProjectModal.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/70">
                      <div className="flex items-center gap-1.5 text-emerald-800 font-mono text-xs font-extrabold uppercase tracking-wider mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Solusi Digital</span>
                      </div>
                      <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium">
                        {selectedProjectModal.solution}
                      </p>
                    </div>
                  </div>

                  {/* Impact Results */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <div className="flex items-center gap-1.5 text-indigo-900 font-mono text-xs font-extrabold uppercase tracking-wider mb-2">
                      <TrendingUp className="w-4 h-4 text-indigo-600" />
                      <span>Hasil & Dampak Kerja</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-800 font-medium">
                      {selectedProjectModal.results.map((res, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold shrink-0">•</span>
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Full */}
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                    <span className="block text-[10px] font-mono font-extrabold text-indigo-800 uppercase tracking-wider mb-2">
                      Tech Stack Lengkap
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProjectModal.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs font-mono font-bold text-slate-800"
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
                        className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-xs"
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
                        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-xs"
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
              <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setSelectedProjectModal(null)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
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
