import { useState, useEffect } from "react";
import { 
  Search, 
  Command, 
  Terminal, 
  Sparkles, 
  Layers, 
  FolderGit2, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Wrench, 
  Mail, 
  MessageSquare, 
  ArrowUpRight, 
  X, 
  Volume2, 
  VolumeX, 
  Copy, 
  Check, 
  Clock, 
  Sun, 
  Laptop,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface InteractiveToolbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function InteractiveToolbar({ onNavigate, activeSection }: InteractiveToolbarProps) {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [activeTabFilter, setActiveTabFilter] = useState<string>("all");
  const [currentTime, setCurrentTime] = useState<string>("");

  // Realtime clock (WITA / Parepare time GMT+8)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Makassar",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      setCurrentTime(new Intl.DateTimeFormat("id-ID", options).format(now) + " WITA");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard shortcut for Command Palette (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandOpen(prev => !prev);
      }
      if (e.key === "Escape") {
        setIsCommandOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const commandItems = [
    {
      id: "hero",
      title: "Hero & Identitas Utama",
      subtitle: "Tasbih · S1 MPI IAIN Parepare",
      category: "Navigation",
      icon: Sparkles,
      action: () => onNavigate("hero")
    },
    {
      id: "about",
      title: "Profil Lengkap & Filosofi",
      subtitle: "Latar belakang, foto profil, dan prinsip kerja",
      category: "Navigation",
      icon: FileText,
      action: () => onNavigate("about")
    },
    {
      id: "projects",
      title: "Proyek & Live Sandbox",
      subtitle: "NgajiKu, Warung Amma Ika, Kasir, DompetKu",
      category: "Navigation",
      icon: FolderGit2,
      action: () => onNavigate("projects")
    },
    {
      id: "experience",
      title: "Riwayat Perjalanan & Organisasi",
      subtitle: "Ketua IKA MA, Enumerator ESC, Sekretariat EDIUM",
      category: "Navigation",
      icon: Briefcase,
      action: () => onNavigate("experience")
    },
    {
      id: "education",
      title: "Latar Belakang Pendidikan",
      subtitle: "S1 MPI IAIN Parepare & Kompetensi Utama",
      category: "Navigation",
      icon: GraduationCap,
      action: () => onNavigate("education")
    },
    {
      id: "skills",
      title: "Toolkit & Alat Kerja",
      subtitle: "Administrasi, Madrasah, Digital, Web Terapan",
      category: "Navigation",
      icon: Wrench,
      action: () => onNavigate("skills")
    },
    {
      id: "contact",
      title: "Kontak & WhatsApp",
      subtitle: "Kirim pesan langsung ke Tasbih",
      category: "Action",
      icon: MessageSquare,
      action: () => onNavigate("contact")
    },
    {
      id: "copy-email",
      title: "Salin Email (azbhy.dev@gmail.com)",
      subtitle: "Copy alamat email ke clipboard",
      category: "Action",
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText("azbhy.dev@gmail.com");
        setCopiedNotification(true);
        setTimeout(() => setCopiedNotification(false), 2000);
      }
    },
    {
      id: "open-wa",
      title: "Buka WhatsApp Langsung",
      subtitle: "+62 858-2339-1662",
      category: "External",
      icon: ArrowUpRight,
      action: () => {
        window.open("https://wa.me/6285823391662?text=Halo%20Tasbih,%20saya%20tertarik%20dengan%20portofolio%20Anda.", "_blank");
      }
    }
  ];

  const filteredCommands = commandItems.filter(item => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = item.title.toLowerCase().includes(query) || 
                          item.subtitle.toLowerCase().includes(query) || 
                          item.category.toLowerCase().includes(query);
    if (activeTabFilter === "all") return matchesSearch;
    return matchesSearch && item.category.toLowerCase() === activeTabFilter.toLowerCase();
  });

  return (
    <>
      {/* Floating Interactive Micro Dock (Bottom Bar) */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-3 py-2 rounded-2xl bg-stone-900/90 text-white backdrop-blur-md border border-stone-700/60 shadow-2xl flex items-center gap-2 max-w-[95vw]">
        
        {/* Command Search Trigger */}
        <button
          onClick={() => setIsCommandOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono transition-all cursor-pointer group"
          title="Buka Command Menu (Ctrl + K)"
        >
          <Search className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline text-stone-300">Quick Search</span>
          <span className="px-1.5 py-0.5 rounded bg-stone-900 text-[10px] text-stone-400 border border-stone-700">
            ⌘K
          </span>
        </button>

        {/* Vertical Divider */}
        <div className="w-[1px] h-4 bg-stone-700" />

        {/* Live Parepare Clock Chip */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-stone-300">
          <Clock className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span className="hidden md:inline text-stone-400">Parepare:</span>
          <span className="font-semibold text-emerald-300">{currentTime || "Loading..."}</span>
        </div>

        {/* Vertical Divider */}
        <div className="w-[1px] h-4 bg-stone-700 hidden sm:block" />

        {/* WhatsApp Direct Quick Action */}
        <a
          href="https://wa.me/6285823391662?text=Halo%20Tasbih,%20saya%20melihat%20portfolio%20Anda."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-mono font-medium transition-all"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Chat WA</span>
        </a>

        {/* Copy Email Fast Button */}
        <button
          onClick={() => {
            navigator.clipboard.writeText("azbhy.dev@gmail.com");
            setCopiedNotification(true);
            setTimeout(() => setCopiedNotification(false), 2000);
          }}
          className="p-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-all cursor-pointer"
          title="Salin Email"
        >
          {copiedNotification ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Copy className="w-4 h-4 text-stone-300" />
          )}
        </button>
      </div>

      {/* Copy Notification Toast */}
      <AnimatePresence>
        {copiedNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-stone-900 text-white border border-emerald-500/50 shadow-2xl flex items-center gap-2 text-xs font-mono"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Email <strong>azbhy.dev@gmail.com</strong> berhasil disalin!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Palette Modal (Interactive Spotlight / Search) */}
      <AnimatePresence>
        {isCommandOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-stone-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="w-full max-w-xl bg-stone-900 border border-stone-700/80 rounded-2xl shadow-2xl overflow-hidden text-stone-100 font-sans"
              onClick={e => e.stopPropagation()}
            >
              {/* Search Header */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-stone-800 bg-stone-950/60">
                <Search className="w-5 h-5 text-blue-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Ketik tujuan, proyek, atau aksi (e.g. NgajiKu, S1 MPI, Kontak, WhatsApp)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none font-mono"
                />
                <button
                  onClick={() => setIsCommandOpen(false)}
                  className="p-1 rounded-lg hover:bg-stone-800 text-stone-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 px-4 py-2 border-b border-stone-800/80 bg-stone-900/80 text-xs font-mono">
                {["all", "navigation", "action", "external"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTabFilter(tab)}
                    className={`px-2.5 py-1 rounded-lg capitalize transition-colors cursor-pointer ${
                      activeTabFilter === tab 
                        ? "bg-blue-600 text-white font-bold" 
                        : "text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Results List */}
              <div className="max-h-80 overflow-y-auto p-2 space-y-1 custom-scrollbar">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          item.action();
                          setIsCommandOpen(false);
                        }}
                        className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-stone-800/90 text-left transition-all group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-stone-800 group-hover:bg-blue-600/20 text-blue-400 flex items-center justify-center transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-stone-100 group-hover:text-blue-300 transition-colors">
                              {item.title}
                            </p>
                            <p className="text-xs text-stone-400 font-mono">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-stone-800 text-stone-400 border border-stone-700/50">
                          {item.category}
                        </span>
                      </button>
                    );
                  })
                ) : (
                  <div className="py-8 text-center text-xs text-stone-500 font-mono">
                    Tidak ada aksi yang cocok dengan "{searchQuery}"
                  </div>
                )}
              </div>

              {/* Footer Helper */}
              <div className="px-4 py-2.5 border-t border-stone-800 bg-stone-950/80 flex items-center justify-between text-[11px] font-mono text-stone-500">
                <div className="flex items-center gap-2">
                  <span>Gunakan <kbd className="px-1.5 py-0.5 rounded bg-stone-800 text-stone-300">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-stone-800 text-stone-300">↓</kbd> untuk navigasi</span>
                </div>
                <span>Tekan <kbd className="px-1.5 py-0.5 rounded bg-stone-800 text-stone-300">ESC</kbd> untuk tutup</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
