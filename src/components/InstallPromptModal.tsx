import React, { useState, useEffect } from "react";
import { Download, X, Smartphone, PlusCircle, Check, Share, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function InstallPromptModal() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // 1. Cek apakah sudah terinstall sebagai PWA standalone
    const isStandalone = 
      window.matchMedia("(display-mode: standalone)").matches || 
      (window.navigator as any).standalone === true;

    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    // 2. Cek apakah user sudah pernah menutup atau menolak popup sebelumnya (disimpan di localStorage)
    const hasDismissed = localStorage.getItem("pwa_install_dismissed");
    
    // 3. Deteksi apakah perangkat iOS (iPhone/iPad/Safari)
    const userAgent = window.navigator.userAgent.toLowerCase();
    const iOSDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(iOSDevice);

    // 4. Tangkap event native PWA di Google Chrome / Android / Edge / Desktop
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Tampilkan popup jika belum pernah ditutup secara manual oleh user
      if (!hasDismissed) {
        // Berikan sedikit jeda (delay 1.5 detik) agar halaman termuat mulus terlebih dahulu
        setTimeout(() => {
          setShowPrompt(true);
        }, 1500);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // 5. Jika di iOS Safari (yang tidak memiliki beforeinstallprompt otomatis), tampilkan panduan khusus setelah jeda
    if (iOSDevice && !hasDismissed && !isStandalone) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 2000);
      return () => clearTimeout(timer);
    }

    // 6. Listener ketika aplikasi berhasil diinstall
    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Panggil prompt instalasi bawaan browser (Chrome / Android / Desktop)
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Simpan status ditutup agar tidak mengganggu terus setiap reload (bisa dibuka kembali kapan saja jika diinginkan)
    localStorage.setItem("pwa_install_dismissed", "true");
  };

  if (isInstalled || !showPrompt) return null;

  return (
    <AnimatePresence>
      <div 
        id="pwa-install-banner-root"
        className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 max-w-md pointer-events-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="rounded-2xl bg-[#0a111e] border border-sky-500/40 shadow-2xl p-4 sm:p-5 text-[#e2e8f0] relative overflow-hidden backdrop-blur-md"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute -top-12 -right-12 w-28 h-28 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={handleDismiss}
            aria-label="Tutup notifikasi instal"
            className="absolute top-3 right-3 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-start gap-3.5 pr-6">
            {/* App Icon / Graphic Badge */}
            <div className="w-12 h-12 rounded-xl bg-[#0f1d32] border border-sky-400/40 flex items-center justify-center shrink-0 shadow-inner">
              <Smartphone className="w-6 h-6 text-sky-400" />
            </div>

            {/* Content Text */}
            <div className="text-left">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-mono text-[9px] uppercase tracking-widest text-sky-400 font-bold bg-sky-950/60 px-1.5 py-0.5 rounded border border-sky-500/30">
                  PINTASAN CEPAT
                </span>
                <span className="font-mono text-[10px] text-slate-400">PWA Ready</span>
              </div>
              
              <h4 className="text-sm font-bold text-white tracking-tight">
                Pasang Pintasan Aplikasi
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mt-1">
                Akses portofolio digital & aplikasi Tasbih langsung dari layar utama HP / Laptop Anda tanpa mengetik URL lagi.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-4 pt-3 border-t border-[#1a283e] flex items-center justify-between gap-2">
            {isIOS ? (
              // Petunjuk Khusus Pengguna iPhone / Safari
              <div className="text-left w-full space-y-1 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-1.5 text-sky-400 font-bold text-[11px]">
                  <Share className="w-3.5 h-3.5" />
                  <span>Cara di iPhone / Safari:</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Ketuk tombol <strong>Share</strong> (ikon bagikan di bawah) &rarr; pilih <strong>"Tambah ke Layar Utama"</strong>.
                </p>
              </div>
            ) : (
              // Tombol Install Native (Android / Chrome / Desktop Edge / Windows)
              <>
                <button
                  onClick={handleDismiss}
                  className="px-3 py-2 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                >
                  Nanti Saja
                </button>
                <button
                  id="btn-install-pwa-action"
                  onClick={handleInstallClick}
                  className="min-h-[40px] px-4 py-2 bg-sky-400 hover:bg-sky-300 active:bg-sky-500 text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 transition-all shadow-md cursor-pointer select-none"
                >
                  <Download className="w-3.5 h-3.5 text-neutral-950" />
                  <span>Pasang Sekarang</span>
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
