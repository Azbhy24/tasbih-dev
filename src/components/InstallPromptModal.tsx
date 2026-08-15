import { useState, useEffect } from "react";
import { Download, X, Smartphone, PlusCircle, Share } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function InstallPromptModal() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const isStandalone = 
      window.matchMedia("(display-mode: standalone)").matches || 
      (window.navigator as any).standalone === true;

    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    const hasDismissed = localStorage.getItem("pwa_install_dismissed");
    
    const userAgent = window.navigator.userAgent.toLowerCase();
    const iOSDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(iOSDevice);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      if (!hasDismissed) {
        setTimeout(() => {
          setShowPrompt(true);
        }, 1500);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    if (iOSDevice && !hasDismissed && !isStandalone) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 2500);
      return () => clearTimeout(timer);
    }

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
    localStorage.setItem("pwa_install_dismissed", "true");
  };

  if (isInstalled || !showPrompt) return null;

  return (
    <AnimatePresence>
      <div 
        id="pwa-install-banner-root"
        className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 max-w-sm pointer-events-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="rounded-3xl bg-white border border-stone-200 shadow-2xl p-4 text-stone-900 text-left relative"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900 leading-tight">
                  Simpan Tasbih Portfolio
                </h4>
                <p className="text-[11px] text-stone-500 mt-0.5 font-mono">
                  Akses instan di layar utama ponsel Anda.
                </p>
              </div>
            </div>

            <button
              onClick={handleDismiss}
              className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Tutup notifikasi"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body instructions */}
          <div className="mt-3 text-xs text-stone-600">
            {isIOS ? (
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-100 space-y-1 text-[11px]">
                <p className="flex items-center gap-1.5 font-medium text-stone-800">
                  <Share className="w-3.5 h-3.5 text-stone-600" />
                  <span>1. Ketuk tombol 'Share' (Bagikan)</span>
                </p>
                <p className="flex items-center gap-1.5 font-medium text-stone-800">
                  <PlusCircle className="w-3.5 h-3.5 text-stone-600" />
                  <span>2. Pilih 'Add to Home Screen'</span>
                </p>
              </div>
            ) : (
              <p className="text-[11px] text-stone-500 leading-relaxed font-normal">
                Dapat dibuka layaknya aplikasi tanpa perlu mengetik ulang alamat web di browser.
              </p>
            )}
          </div>

          {/* Action Button */}
          {!isIOS && deferredPrompt && (
            <div className="mt-3 flex items-center gap-2">
              <button
                onClick={handleInstallClick}
                className="flex-1 py-2 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Tambahkan ke Layar Utama</span>
              </button>
              <button
                onClick={handleDismiss}
                className="py-2 px-3 rounded-xl text-xs font-semibold text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                Nanti
              </button>
            </div>
          )}

          {isIOS && (
            <button
              onClick={handleDismiss}
              className="mt-3 w-full py-1.5 rounded-xl bg-stone-100 text-stone-700 text-xs font-semibold hover:bg-stone-200 transition-colors cursor-pointer"
            >
              Mengerti
            </button>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
