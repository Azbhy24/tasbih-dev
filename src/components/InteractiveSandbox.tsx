import { useState } from "react";
import { 
  Calculator, 
  Store, 
  Plus, 
  Minus, 
  Trash2, 
  Printer, 
  Receipt, 
  CheckCircle2, 
  RotateCcw,
  Sparkles,
  ShoppingBag,
  ExternalLink,
  Github,
  ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PosItem {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
}

const SAMPLE_PRODUCTS: PosItem[] = [
  { id: "p1", name: "Beras Premium", category: "Sembako", price: 15000, unit: "kg" },
  { id: "p2", name: "Minyak Goreng 1L", category: "Sembako", price: 17500, unit: "pouch" },
  { id: "p3", name: "Gula Pasir 1kg", category: "Sembako", price: 18000, unit: "bks" },
  { id: "p4", name: "Telur Ayam Ras", category: "Sembako", price: 2000, unit: "butir" },
  { id: "p5", name: "Kopi Sachet", category: "Minuman", price: 2500, unit: "sachet" },
  { id: "p6", name: "Teh Celup Kotak", category: "Minuman", price: 6500, unit: "kotak" },
  { id: "p7", name: "Mi Instan Goreng", category: "Makanan", price: 3500, unit: "bks" },
  { id: "p8", name: "Sabun Cuci Piring", category: "Kebersihan", price: 5000, unit: "pouch" }
];

export default function InteractiveSandbox() {
  const [cart, setCart] = useState<{ item: PosItem; qty: number }[]>([
    { item: SAMPLE_PRODUCTS[0], qty: 2 },
    { item: SAMPLE_PRODUCTS[1], qty: 1 },
    { item: SAMPLE_PRODUCTS[4], qty: 4 }
  ]);
  const [cashGiven, setCashGiven] = useState<number>(60000);
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"pos" | "quran" | "calc">("pos");

  const addToCart = (product: PosItem) => {
    setCart(prev => {
      const existing = prev.find(p => p.item.id === product.id);
      if (existing) {
        return prev.map(p => p.item.id === product.id ? { ...p, qty: p.qty + 1 } : p);
      }
      return [...prev, { item: product, qty: 1 }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart(prev => {
      return prev.map(p => {
        if (p.item.id === id) {
          const newQty = Math.max(1, p.qty + delta);
          return { ...p, qty: newQty };
        }
        return p;
      });
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(p => p.item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalAmount = cart.reduce((sum, p) => sum + (p.item.price * p.qty), 0);
  const changeAmount = Math.max(0, cashGiven - totalAmount);

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-stone-300 shadow-sm overflow-hidden text-left">
      {/* Top Header Bar */}
      <div className="bg-stone-900 text-white p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-b border-stone-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
            <Calculator className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-white tracking-wide">Live App Sandbox: Kasir Amma Ika POS</h4>
              <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                Interactive Engine
              </span>
            </div>
            <p className="text-xs text-stone-400 font-mono">Simulasi transaksi langsung & cetak nota struk kasir toko</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://kasir-amma-ika.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono flex items-center gap-1.5 transition-colors"
          >
            <span>Buka Versi Penuh</span>
            <ExternalLink className="w-3 h-3 text-stone-400" />
          </a>
        </div>
      </div>

      {/* POS Grid View */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left: Product Catalog Selection (7 cols) */}
        <div className="lg:col-span-7 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-stone-200 bg-stone-50/50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold text-stone-500 uppercase">1. Pilih Barang Dagangan:</span>
            <span className="text-[11px] font-mono text-stone-400">Klik item untuk menambah ke keranjang</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {SAMPLE_PRODUCTS.map((prod) => {
              const inCart = cart.find(c => c.item.id === prod.id);
              return (
                <button
                  key={prod.id}
                  onClick={() => addToCart(prod)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative group ${
                    inCart 
                      ? "bg-blue-50/80 border-blue-300 shadow-xs" 
                      : "bg-white border-stone-200 hover:border-stone-300 hover:shadow-xs"
                  }`}
                >
                  {inCart && (
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-mono font-bold flex items-center justify-center shadow-xs">
                      {inCart.qty}
                    </span>
                  )}
                  <span className="text-[10px] font-mono text-stone-400 uppercase block">{prod.category}</span>
                  <p className="text-xs font-bold text-stone-900 mt-0.5 line-clamp-1">{prod.name}</p>
                  <p className="text-xs font-mono font-bold text-blue-700 mt-1.5">
                    Rp {prod.price.toLocaleString("id-ID")}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Tips bar */}
          <div className="mt-4 p-3 rounded-xl bg-stone-100 border border-stone-200/80 text-[11px] font-mono text-stone-600 flex items-center justify-between">
            <span>💡 Dibangun khusus untuk efisiensi transaksi toko tanpa koneksi internet lambat.</span>
            <button
              onClick={() => {
                setCart([
                  { item: SAMPLE_PRODUCTS[0], qty: 3 },
                  { item: SAMPLE_PRODUCTS[1], qty: 2 }
                ]);
              }}
              className="text-blue-600 hover:underline font-semibold cursor-pointer shrink-0 ml-2"
            >
              Reset Demo Data
            </button>
          </div>
        </div>

        {/* Right: Cart, Totals & Receipt Preview (5 cols) */}
        <div className="lg:col-span-5 p-4 sm:p-6 bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-3">
              <div className="flex items-center gap-1.5">
                <Receipt className="w-4 h-4 text-stone-600" />
                <span className="text-xs font-mono font-bold text-stone-900 uppercase">Keranjang Kasir</span>
              </div>
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-[11px] font-mono text-rose-600 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Kosongkan</span>
                </button>
              )}
            </div>

            {/* Cart Items List */}
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="py-8 text-center text-xs font-mono text-stone-400">
                  Keranjang masih kosong. Klik barang di sebelah kiri!
                </div>
              ) : (
                cart.map(({ item, qty }) => (
                  <div key={item.id} className="flex items-center justify-between p-2 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                    <div className="min-w-0 flex-1 pr-2">
                      <p className="font-semibold text-stone-900 truncate">{item.name}</p>
                      <p className="text-[10px] font-mono text-stone-500">
                        @Rp {item.price.toLocaleString("id-ID")}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-5 h-5 rounded bg-white border border-stone-300 flex items-center justify-center text-stone-700 hover:bg-stone-100 cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono font-bold text-xs px-1">{qty}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-5 h-5 rounded bg-white border border-stone-300 flex items-center justify-center text-stone-700 hover:bg-stone-100 cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right min-w-[70px] font-mono font-bold text-stone-900 ml-2">
                      Rp {(item.price * qty).toLocaleString("id-ID")}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Payment & Cash Calculation */}
          <div className="pt-4 border-t border-stone-200 space-y-3 mt-4">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-stone-500">Total Belanja:</span>
              <span className="text-base font-bold text-stone-900 font-sans">
                Rp {totalAmount.toLocaleString("id-ID")}
              </span>
            </div>

            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-stone-500">Uang Diterima:</span>
              <div className="flex items-center gap-1">
                <span className="text-stone-400">Rp</span>
                <input
                  type="number"
                  value={cashGiven}
                  onChange={(e) => setCashGiven(Number(e.target.value))}
                  className="w-24 px-2 py-1 rounded border border-stone-300 text-right font-mono font-bold text-stone-900 text-xs focus:outline-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-between items-center text-xs font-mono p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
              <span className="font-semibold">Kembalian:</span>
              <span className="font-bold text-sm font-sans">
                Rp {changeAmount.toLocaleString("id-ID")}
              </span>
            </div>

            {/* Print / Struk Button */}
            <button
              onClick={() => setShowReceiptModal(true)}
              disabled={cart.length === 0}
              className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span>Cetak / Lihat Struk Kasir</span>
            </button>
          </div>
        </div>
      </div>

      {/* Receipt Modal Simulation */}
      <AnimatePresence>
        {showReceiptModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 border border-stone-200 font-mono text-stone-900 relative"
            >
              {/* Thermal Paper Styling */}
              <div className="text-center pb-4 border-b border-dashed border-stone-300 space-y-1">
                <h5 className="font-bold text-sm uppercase">WARUNG AMMA IKA</h5>
                <p className="text-[10px] text-stone-500">Jl. Poros Pinrang - Parepare</p>
                <p className="text-[10px] text-stone-500">Kasir: Tasbih (Admin MPI)</p>
                <p className="text-[10px] text-stone-400">Nota #{Math.floor(100000 + Math.random() * 900000)}</p>
              </div>

              {/* Items Breakdown */}
              <div className="py-4 space-y-2 border-b border-dashed border-stone-300 text-xs">
                {cart.map(({ item, qty }) => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.name} x{qty}</span>
                    <span>Rp {(item.price * qty).toLocaleString("id-ID")}</span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="py-3 space-y-1 text-xs">
                <div className="flex justify-between font-bold">
                  <span>TOTAL</span>
                  <span>Rp {totalAmount.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>TUNAI</span>
                  <span>Rp {cashGiven.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>KEMBALI</span>
                  <span>Rp {changeAmount.toLocaleString("id-ID")}</span>
                </div>
              </div>

              <div className="text-center pt-3 border-t border-dashed border-stone-300 text-[10px] text-stone-400">
                Terima kasih telah berbelanja!
              </div>

              <button
                onClick={() => setShowReceiptModal(false)}
                className="mt-5 w-full py-2.5 rounded-xl bg-stone-900 text-white text-xs font-mono font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Tutup Struk
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
