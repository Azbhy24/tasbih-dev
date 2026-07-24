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
  Play, 
  Check, 
  RefreshCw, 
  CreditCard,
  Trash2,
  ArrowRight
} from "lucide-react";
import React, { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolio";

// ==========================================
// 1. DOMPETKU SIMULATOR
// ==========================================
function DompetKuSimulator() {
  const [balance, setBalance] = useState(1250000);
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Usaha Ritel Harian", type: "income", amount: 450000, category: "Bisnis" },
    { id: 2, title: "Server Cloud n8n", type: "expense", amount: 75000, category: "Server" },
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
        category: type === "income" ? "Ekstra" : "Desain/AI",
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
    <div className="w-full rounded-2xl bg-zinc-950/80 border border-indigo-500/20 p-5 font-sans overflow-hidden shadow-2xl relative group/sim">
      {/* Figma style canvas label */}
      <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#F3F4F6] uppercase">
            SIMULASI INTERAKTIF: DOMPETKU
          </span>
        </div>
        <span className="text-[9px] font-mono text-zinc-500 px-2 py-0.5 bg-zinc-900 rounded border border-zinc-800">
          Interactive Prototype
        </span>
      </div>

      {/* Mini Card Display */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800/80">
          <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
            Pemasukan Tambahan
          </span>
          <span className="text-sm font-bold text-white mt-1 block">
            Rp {(450000 + totalIncome).toLocaleString("id-ID")}
          </span>
        </div>
        <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800/80">
          <span className="text-[9px] font-mono text-rose-450 font-bold uppercase tracking-wider block">
            Total Pengeluaran
          </span>
          <span className="text-sm font-bold text-white mt-1 block">
            Rp {totalExpense.toLocaleString("id-ID")}
          </span>
        </div>
      </div>

      {/* Main Balance Display with Glow */}
      <div className="bg-gradient-to-r from-indigo-950/40 to-zinc-900/60 border border-indigo-500/10 rounded-xl p-4 mb-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-500/5 mix-blend-overlay" />
        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
          Saldo Aktif DompetKu
        </span>
        <h4 className="text-2xl font-black text-indigo-300 mt-1.5 font-sans">
          Rp {calculatedBalance.toLocaleString("id-ID")}
        </h4>
      </div>

      {/* Mini quick form adder */}
      <form onSubmit={handleAdd} className="space-y-2 mb-4 bg-zinc-900/40 p-3 rounded-xl border border-zinc-900">
        <p className="text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-wider">
          + Catat Transaksi Baru
        </p>
        <div className="grid grid-cols-12 gap-1.5">
          <input
            type="text"
            placeholder="Contoh: Kopi, Desain"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="col-span-6 bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-indigo-500/40 font-sans"
          />
          <input
            type="number"
            placeholder="Jumlah Rp"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="col-span-4 bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-indigo-500/40 font-sans"
          />
          <button
            type="submit"
            className="col-span-2 bg-indigo-600 hover:bg-indigo-500 rounded p-1 flex items-center justify-center transition-all cursor-pointer text-white"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-2 p-0.5 bg-zinc-950 rounded border border-zinc-800/80">
          <button
            type="button"
            onClick={() => setType("expense")}
            className={`flex-1 py-1 rounded text-[9px] font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
              type === "expense" ? "bg-rose-950/40 text-rose-400 border border-rose-500/30" : "text-zinc-500"
            }`}
          >
            Minus (-) Expense
          </button>
          <button
            type="button"
            onClick={() => setType("income")}
            className={`flex-1 py-1 rounded text-[9px] font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
              type === "income" ? "bg-emerald-950/40 text-emerald-400 border border-emerald-500/30" : "text-zinc-500"
            }`}
          >
            Plus (+) Income
          </button>
        </div>
      </form>

      {/* Real-time active ledger list with mini animation */}
      <div className="space-y-1.5 max-h-[140px] overflow-y-auto pr-1">
        <AnimatePresence initial={false}>
          {transactions.map((trans) => (
            <motion.div
              key={trans.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex items-center justify-between p-2 rounded bg-zinc-900 border border-zinc-800/50 hover:border-zinc-800"
            >
              <div className="text-left">
                <p className="text-xs text-white font-bold">{trans.title}</p>
                <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
                  {trans.category}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold font-mono ${
                  trans.type === "income" ? "text-emerald-400" : "text-rose-400"
                }`}>
                  {trans.type === "income" ? "+" : "-"} Rp {trans.amount.toLocaleString("id-ID")}
                </span>
                <button
                  type="button"
                  onClick={() => deleteTransaction(trans.id)}
                  className="text-zinc-600 hover:text-rose-400 p-0.5 rounded transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" />
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
    { id: 1, name: "Beras Sentra Ramos", price: 75000, stock: 12 },
    { id: 2, name: "Minyak Goreng 2L", price: 34000, stock: 24 },
    { id: 3, name: "Gula Pasir 1kg", price: 16500, stock: 8 },
    { id: 4, name: "Kopi Arabika Buatan", price: 28000, stock: 15 },
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
    <div className="w-full rounded-2xl bg-zinc-950/80 border border-indigo-500/20 p-5 font-sans overflow-hidden shadow-2xl relative group/sim">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#F3F4F6] uppercase">
            SIMULASI INTERAKTIF: POS KASIR UMKM
          </span>
        </div>
        <span className="text-[9px] font-mono text-zinc-500 px-2 py-0.5 bg-zinc-900 rounded border border-zinc-800">
          Kasir Ritel Modern
        </span>
      </div>

      {!showReceipt ? (
        <div className="space-y-4">
          {/* Catalog grid */}
          <div>
            <p className="text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-wider mb-2">
              Katalog Produk Toko Ritel
            </p>
            <div className="grid grid-cols-2 gap-2">
              {products.map((prod) => (
                <button
                  id={`pos-prod-${prod.id}`}
                  key={prod.id}
                  onClick={() => addToCart(prod)}
                  className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80 hover:border-emerald-500/40 text-left transition-all group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <p className="text-xs font-bold text-white leading-tight group-hover:text-emerald-400 transition-colors">
                      {prod.name}
                    </p>
                    <p className="text-[10px] text-zinc-500 mt-1">Rp {prod.price.toLocaleString("id-ID")}</p>
                  </div>
                  <span className="text-[8px] font-mono text-emerald-500 bg-emerald-950/45 px-1.5 py-0.5 rounded mt-2 inline-block max-w-max border border-emerald-500/10">
                    + Tambah
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-900">
            <p className="text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <ShoppingCart className="w-3.5 h-3.5 text-zinc-400" />
              Keranjang Kasir: {cart.length} item
            </p>

            {cart.length === 0 ? (
              <div className="text-center py-4 text-xs text-zinc-500 font-mono">
                [ Keranjang Kosong ]
              </div>
            ) : (
              <div className="space-y-2">
                <div className="max-h-[100px] overflow-y-auto space-y-1.5 pr-1">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-xs rounded bg-zinc-900 p-2 border border-zinc-800/50">
                      <span className="text-white font-medium max-w-[120px] truncate">{item.name}</span>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 bg-zinc-950 p-0.5 rounded border border-zinc-800">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="p-0.5 hover:text-rose-400 transition-colors cursor-pointer text-zinc-500"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-[10px] font-mono text-white font-bold w-4 text-center">{item.qty}</span>
                          <button
                            onClick={() => addToCart(item)}
                            className="p-0.5 hover:text-emerald-400 transition-colors cursor-pointer text-zinc-500"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-mono text-white text-[11px] font-bold min-w-[60px] text-right">
                          Rp {(item.price * item.qty).toLocaleString("id-ID")}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-sm font-bold">
                  <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">Total</span>
                  <span className="text-emerald-400 font-sans">Rp {total.toLocaleString("id-ID")}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] tracking-widest uppercase rounded transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Bayar & Cetak Struk</span>
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Dynamic Printed Receipt simulation with cinematic micro-fades */
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white text-zinc-900 p-4 rounded-xl font-mono text-xs shadow-inner relative max-w-sm mx-auto"
        >
          {/* Paper jagged top effect simulation using pure border */}
          <div className="absolute top-0 inset-x-0 h-1 bg-[radial-gradient(circle,transparent_20%,white_20%)] bg-[length:10px_10px] bg-repeat-x -mt-0.5" />

          <div className="text-center py-2 border-b border-dashed border-zinc-350">
            <h5 className="font-bold tracking-wide text-sm">AZBHY PREMIUM POS</h5>
            <p className="text-[9px] text-zinc-500">Toko Ritel & Usaha Berkah Keluarga</p>
            <p className="text-[8px] text-zinc-400 mt-0.5">{receiptNumber}</p>
          </div>

          <div className="py-3 space-y-1.5 border-b border-dashed border-zinc-350">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-[10px]">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-zinc-800">{item.name}</span>
                  <span className="text-[8px] text-zinc-500">
                    {item.qty} x Rp {item.price.toLocaleString("id-ID")}
                  </span>
                </div>
                <span className="mt-auto text-zinc-800 font-bold">
                  Rp {(item.price * item.qty).toLocaleString("id-ID")}
                </span>
              </div>
            ))}
          </div>

          <div className="py-2.5 space-y-1 text-[11px] font-bold">
            <div className="flex justify-between">
              <span className="text-zinc-500 font-normal">Subtotal</span>
              <span>Rp {total.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between text-emerald-700">
              <span>Biaya Admin</span>
              <span>Rp 0</span>
            </div>
            <div className="flex justify-between border-t border-zinc-200 pt-1.5 text-xs text-black border-solid">
              <span>TOTAL CASH</span>
              <span>Rp {total.toLocaleString("id-ID")}</span>
            </div>
          </div>

          <div className="text-center pt-3 border-t border-dashed border-zinc-350 text-[8px] text-zinc-500">
            <p className="font-bold text-black uppercase tracking-wider">STRUK RESMI TERVERIFIKASI</p>
            <p className="mt-1">Terima kasih atas kunjungan Anda!</p>
          </div>

          <button
            onClick={handleReset}
            className="w-full mt-4 py-1.5 bg-zinc-900 border border-zinc-850 hover:bg-zinc-800 text-white rounded font-mono font-bold text-[9px] uppercase tracking-wider transition-colors cursor-pointer"
          >
            Selesai / Transaksi Baru
          </button>
        </motion.div>
      )}
    </div>
  );
}

// ==========================================
// 3. AZBHY WORKFLOWS SIMULATOR
// ==========================================
function WorkflowsSimulator() {
  const [topic, setTopic] = useState("");
  const [workflowState, setWorkflowState] = useState<"idle" | "trigger" | "gemini" | "webhook" | "done">("idle");
  const [logs, setLogs] = useState<string[]>([]);
  const [summaryOutput, setSummaryOutput] = useState("");

  const clearState = () => {
    setWorkflowState("idle");
    setLogs([]);
    setSummaryOutput("");
  };

  const runWorkflow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic) return;

    clearState();
    setWorkflowState("trigger");
    setLogs(["⚡ Webhook Cloud Triggered", "📥 Menerima input naskah: " + topic]);

    // Stage 1: Trigger -> Gemini
    setTimeout(() => {
      setWorkflowState("gemini");
      setLogs((prev) => [
        ...prev,
        "🔗 Menghubungkan Google Gemini Pro API",
        "⚙️ Mengolah prompt rekayasa kognitif...",
        "📝 Membuat peta rangkuman akademik & klasifikasi..."
      ]);
    }, 1500);

    // Stage 2: Gemini -> Webhook Out
    setTimeout(() => {
      setWorkflowState("webhook");
      setLogs((prev) => [
        ...prev,
        "📤 Mengirim ringkasan otomatis ke WhatsApp & Drive",
        "📡 Integrasi n8n webhook berhasil disalurkan"
      ]);
    }, 3200);

    // Stage 3: Fully Compiled Output
    setTimeout(() => {
      setWorkflowState("done");
      setLogs((prev) => [...prev, "✓ Rangkuman AI Selesai Disusun!"]);
      
      const briefTopic = topic.length > 25 ? topic.substring(0, 25) + "..." : topic;
      setSummaryOutput(
        `📚 [DOKUMEN RANGKUMAN AZBHY]\n` +
        `• Tema: "${briefTopic}"\n` +
        `• Status: Terstruktur & Klasifikasi Mutu\n` +
        `• Strategi Mutu: Meningkatkan keterlibatan pengawas akademik, mendongkrak sinergi operator penjaminan data, dan mengoperasikan sistem n8n webhook secara periodik.`
      );
    }, 5000);
  };

  return (
    <div className="w-full rounded-2xl bg-zinc-950/80 border border-indigo-500/20 p-5 font-sans overflow-hidden shadow-2xl relative group/sim">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-violet-500 animate-pulse" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#F3F4F6] uppercase">
            SIMULASI INTERAKTIF: AZBHY WORKFLOWS
          </span>
        </div>
        <span className="text-[9px] font-mono text-zinc-500 px-2 py-0.5 bg-zinc-900 rounded border border-zinc-800">
          AI & n8n Engine
        </span>
      </div>

      {/* Visual Workflow Canvas blocks with lines styling */}
      <div className="flex justify-between items-center bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80 relative mb-4">
        {/* Connection pipeline glowing line */}
        <div className="absolute inset-x-8 top-[33px] h-[1px] bg-zinc-800 z-0">
          {workflowState !== "idle" && workflowState !== "done" && (
            <motion.div
              initial={{ left: 0 }}
              animate={{ left: "100%" }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
              className="absolute h-0.5 w-[50px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent z-10"
            />
          )}
        </div>

        {/* Node 1: Cloud Trigger */}
        <div className={`relative z-10 flex flex-col items-center max-w-[80px] text-center ${
          workflowState === "trigger" ? "scale-105" : "opacity-60"
        } transition-all duration-300`}>
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center border text-xs font-bold font-mono ${
            workflowState === "trigger" ? "bg-indigo-950/60 border-indigo-500 text-indigo-400" : "bg-zinc-950 border-zinc-800 text-zinc-500"
          }`}>
            ☁️
          </div>
          <span className="text-[8px] font-mono font-bold mt-1.5 uppercase tracking-wide truncate max-w-full">
            Trigger
          </span>
        </div>

        <ArrowRight className={`w-3.5 h-3.5 text-zinc-800 ${workflowState !== "idle" && "text-indigo-500/50 animate-pulse"}`} />

        {/* Node 2: Gemini AI */}
        <div className={`relative z-10 flex flex-col items-center max-w-[80px] text-center ${
          workflowState === "gemini" ? "scale-105 animate-pulse" : "opacity-60"
        } transition-all duration-300`}>
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center border text-xs font-bold font-mono ${
            workflowState === "gemini" ? "bg-violet-950/60 border-violet-500 text-violet-400" : "bg-zinc-950 border-zinc-800 text-zinc-500"
          }`}>
            🪄
          </div>
          <span className="text-[8px] font-mono font-bold mt-1.5 uppercase tracking-wide truncate max-w-full">
            Gemini
          </span>
        </div>

        <ArrowRight className={`w-3.5 h-3.5 text-zinc-800 ${workflowState !== "idle" && "text-violet-500/50 animate-pulse"}`} />

        {/* Node 3: Outbox Webhook */}
        <div className={`relative z-10 flex flex-col items-center max-w-[80px] text-center ${
          workflowState === "webhook" ? "scale-105" : "opacity-60"
        } transition-all duration-300`}>
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center border text-xs font-bold font-mono ${
            workflowState === "webhook" ? "bg-emerald-950/60 border-emerald-500 text-emerald-400" : "bg-zinc-950 border-zinc-800 text-zinc-500"
          }`}>
            🪁
          </div>
          <span className="text-[8px] font-mono font-bold mt-1.5 uppercase tracking-wide truncate max-w-full">
            Webhook
          </span>
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={runWorkflow} className="space-y-3 mb-4 text-left">
        <label className="text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-widest block">
          Topik Rangkuman Akademik / Konsep Jurnal
        </label>
        <div className="flex gap-1.5">
          <input
            id="automation-topic-input"
            type="text"
            required
            disabled={workflowState !== "idle" && workflowState !== "done"}
            placeholder="Contoh: Mutu Kemitraan Strategis Kemenag"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="flex-1 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500/40"
          />
          <button
            type="submit"
            disabled={workflowState !== "idle" && workflowState !== "done"}
            className="px-3 py-1.5 bg-violet-600 hover:bg-violet-500 disabled:bg-zinc-900 disabled:text-zinc-650 rounded text-[10px] font-mono font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-1 cursor-pointer text-white border-none"
          >
            {workflowState !== "idle" && workflowState !== "done" ? (
              <RefreshCw className="w-3 h-3 animate-spin" />
            ) : (
              <Play className="w-3 h-3" />
            )}
            <span>RUN</span>
          </button>
        </div>
      </form>

      {/* Dynamic Terminal Output Terminal logs simulator */}
      <div className="bg-black/90 rounded-lg p-3 border border-zinc-900/60 font-mono text-[9px] text-zinc-400 text-left min-h-[90px] relative">
        <div className="flex items-center gap-1.5 text-[8px] text-zinc-600 uppercase border-b border-zinc-950 pb-1.5 mb-2 font-bold tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="ml-1 tracking-widest">Azbhy-Engine Log Monitor</span>
        </div>

        <div className="space-y-1 select-none max-h-[85px] overflow-y-auto">
          {logs.length === 0 && (
            <p className="text-zinc-600">[ Engine standby. Menunggu input untuk memulai proses otomatisasi ]</p>
          )}
          {logs.map((log, lIdx) => (
            <p key={lIdx} className={log.startsWith("✓") ? "text-emerald-400" : log.startsWith("⚡") ? "text-indigo-400" : "text-zinc-350"}>
              {log}
            </p>
          ))}
        </div>
      </div>

      {/* Compiled finished summary visual box */}
      <AnimatePresence>
        {workflowState === "done" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="mt-3 p-3 bg-indigo-950/20 border border-indigo-500/20 rounded-xl text-left font-mono text-[10px] text-indigo-300 leading-relaxed overflow-hidden"
          >
            <div className="flex items-center gap-1 text-[9px] font-bold text-white uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Output Google Gemini Pro:</span>
            </div>
            <p className="whitespace-pre-line text-[#F3F4F6]">{summaryOutput}</p>
          </motion.div>
        )}
      </AnimatePresence>
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
      transition: { type: "spring", stiffness: 100, damping: 16 },
    },
  };

  return (
    <section id="projects" className="relative py-24 border-t border-indigo-950/40 bg-[#030306]">
      {/* Background glowing elements */}
      <div className="absolute top-[35%] left-0 w-[500px] h-[500px] bg-indigo-500/[0.012] rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-[25%] right-0 w-[500px] h-[500px] bg-indigo-500/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] font-bold tracking-widest text-indigo-300 uppercase bg-zinc-950 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
            STUDI KASUS PROYEK
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Produk Digital & Sistem Otomatisasi
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 text-center">
            Penyelesaian masalah nyata melalui kode bersih, rekayasa prompt AI cerdas, integrasi webhook cloud, dan otomatisasi workflow nir-entri.
          </p>
          <div className="w-12 h-[1px] bg-indigo-500/20 mx-auto mt-6" />
        </div>

        {/* Project Case Studies Container */}
        <motion.div
          id="project-case-studies-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-28"
        >
          {projects.map((project, index) => {
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
                      <span className="text-[9px] font-mono font-bold tracking-widest text-indigo-300 bg-[#030306] border border-indigo-500/35 px-2.5 py-1 rounded-full uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-extrabold text-white tracking-tight leading-none">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-500 mt-1.5 uppercase tracking-wider">
                      // {project.subtitle}
                    </p>
                  </div>

                  {/* Problems and Solutions Grid side-by-side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    {/* Problem Column */}
                    <div className="p-4 rounded-xl border border-rose-500/10 bg-zinc-950/20 flex flex-col justify-start relative overflow-hidden">
                      <div className="flex items-center gap-1.5 text-rose-400 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Masalah (Problem)</span>
                      </div>
                      <p className="text-zinc-300 text-xs leading-relaxed font-sans">
                        {project.problem}
                      </p>
                    </div>

                    {/* Solution Column */}
                    <div className="p-4 rounded-xl border border-indigo-500/15 bg-zinc-950/20 flex flex-col justify-start relative overflow-hidden">
                      <div className="flex items-center gap-1.5 text-indigo-400 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Solusi Digital</span>
                      </div>
                      <p className="text-zinc-300 text-xs leading-relaxed font-sans">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Impact Columns */}
                  <div className="p-4 rounded-xl border border-indigo-500/15 bg-zinc-950/20">
                    <div className="flex items-center gap-1.5 text-indigo-400 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Hasil & Manfaat (Impact)</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-zinc-300 leading-relaxed list-inside">
                      {project.results.map((result, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 text-zinc-300">
                          <span className="text-indigo-500 font-semibold shrink-0 mt-0.5">•</span>
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
                          className="p-2.5 bg-zinc-950/45 hover:bg-zinc-900 text-zinc-400 hover:text-white rounded border border-indigo-500/20 transition-colors flex items-center justify-center cursor-pointer"
                          title="View Source on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        id={`proj-demo-${project.id}`}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[9px] tracking-widest uppercase rounded transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-indigo-550/15 border-none"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3 text-white" />
                      </a>
                    </div>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap items-center gap-1.5 p-2 bg-indigo-950/10 border border-indigo-500/10 rounded-xl">
                      <span className="flex items-center gap-1 text-[8px] font-mono font-bold text-indigo-400 uppercase tracking-widest mr-1.5">
                        <Layers className="w-3 h-3" />
                        Tech:
                      </span>
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-zinc-950/40 border border-indigo-500/10 rounded text-[10px] font-mono text-[#F3F4F6]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* COLUMN 2 (6/12): FIGMA STYLE LIVE SIMULATOR FOR RECRUITERS TO PLAY WITH COLD/HARD CODE */}
                <div className="lg:col-span-6 flex items-center justify-center">
                  <div className="w-full flex justify-center">
                    {project.id === "proj-1" && <DompetKuSimulator />}
                    {project.id === "proj-2" && <POSUMKMSimulator />}
                    {project.id === "proj-3" && <WorkflowsSimulator />}
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
