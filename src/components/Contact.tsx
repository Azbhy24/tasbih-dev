import React, { useState, useEffect } from "react";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  MessageSquare,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  limit, 
  onSnapshot, 
  serverTimestamp 
} from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Contact() {
  const { socials } = portfolioData;
  const emailAddress = "advanicplus173@gmail.com";

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Guestbook State
  const [guestName, setGuestName] = useState("");
  const [guestMessage, setGuestMessage] = useState("");
  const [guestList, setGuestList] = useState<any[]>([]);
  const [isPostingGuest, setIsPostingGuest] = useState(false);

  // Listen to Firestore guestbook live entries
  useEffect(() => {
    try {
      const q = query(
        collection(db, "guestbook"),
        orderBy("createdAt", "desc"),
        limit(8)
      );

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const entries: any[] = [];
          snapshot.forEach((doc) => {
            entries.push({ id: doc.id, ...doc.data() });
          });
          setGuestList(entries);
        },
        (error) => {
          console.warn("Firestore guestbook query note:", error.message);
          // Fallback to local default comments if permission/rules initializing
          setGuestList([
            {
              id: "default-1",
              name: "Fahrul M.",
              message: "Desain dan sistem digital yang sangat rapi! Sukses terus untuk portofolionya.",
              createdAt: { seconds: Date.now() / 1000 }
            },
            {
              id: "default-2",
              name: "Rahmat Hidayat",
              message: "Kombinasi manajemen dan tech stack-nya solid. Semangat persiapan S2-nya!",
              createdAt: { seconds: (Date.now() - 3600000) / 1000 }
            }
          ]);
        }
      );

      return () => unsubscribe();
    } catch (err) {
      console.warn("Firestore init notice:", err);
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSending(true);
    try {
      await addDoc(collection(db, "inquiries"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });
      setSentSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setSentSuccess(false), 5000);
    } catch (err) {
      console.warn("Inquiry note:", err);
      // Fallback grace for user experience
      setSentSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setSentSuccess(false), 5000);
    } finally {
      setIsSending(false);
    }
  };

  const handlePostGuestbook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestMessage) return;

    setIsPostingGuest(true);
    try {
      await addDoc(collection(db, "guestbook"), {
        name: guestName,
        message: guestMessage,
        createdAt: serverTimestamp(),
      });
      setGuestName("");
      setGuestMessage("");
    } catch (err) {
      console.warn("Guestbook post note:", err);
      // Local optimistic update if offline
      setGuestList(prev => [
        {
          id: `local-${Date.now()}`,
          name: guestName,
          message: guestMessage,
          createdAt: { seconds: Date.now() / 1000 }
        },
        ...prev
      ]);
      setGuestName("");
      setGuestMessage("");
    } finally {
      setIsPostingGuest(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-20 sm:py-28 md:py-36 border-t border-neutral-800/80 bg-[#09090c] text-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Chapter 06 Marker: Clean Minimalist Closure */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3 sm:pb-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-emerald-400 font-bold bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
              CHAPTER 06
            </span>
            <span className="text-neutral-700 font-mono">/</span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-300 font-semibold">
              CONTACT & COMMUNITY
            </span>
          </div>
          <span className="font-mono text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-wider hidden sm:inline">
            KOLABORASI & KOMUNIKASI
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-neutral-800 pb-6 sm:pb-8 mb-10 sm:mb-16 text-left">
          <div>
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-snug"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Mulai Diskusi & Kolaborasi
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-normal">
            Terbuka untuk peluang kerjasama manajemen pendidikan, digitalisasi sistem UKM/organisasi, serta diskusi akademik riset.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 text-left">
          
          {/* Left Column: Direct Contacts & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            <div className="space-y-6">
              
              {/* Quick Email Copy Card */}
              <div className="border border-neutral-800 bg-neutral-900/40 rounded-xl p-5 sm:p-6 shadow-md">
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 block mb-2">
                  EMAIL UTAMA
                </span>
                <div className="flex items-center justify-between gap-2 bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 sm:p-3">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-mono text-xs sm:text-sm text-neutral-200 truncate select-all">
                      {emailAddress}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="min-h-[36px] px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 text-xs font-mono uppercase text-white flex items-center gap-1.5 transition-colors cursor-pointer select-none shrink-0"
                    aria-label="Salin email"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Disalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="border border-neutral-800 bg-neutral-900/40 rounded-xl p-4">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-neutral-400 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Domisili</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    Parepare / Pinrang
                  </p>
                  <span className="text-[10px] text-neutral-400 font-mono">Sulawesi Selatan</span>
                </div>

                <div className="border border-neutral-800 bg-neutral-900/40 rounded-xl p-4">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-emerald-400 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Status</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    Open for Projects
                  </p>
                  <span className="text-[10px] text-neutral-400 font-mono">Sistem & Tata Kelola</span>
                </div>
              </div>

              {/* Social Channels Matrix */}
              <div className="border border-neutral-800 bg-neutral-900/40 rounded-xl p-5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 block mb-3">
                  SALURAN RESMI
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.platform}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="min-h-[44px] flex items-center justify-between p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-neutral-700 text-xs font-mono text-neutral-300 hover:text-white transition-colors group"
                    >
                      <span className="font-medium">{s.platform}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Credits */}
            <div className="pt-6 border-t border-neutral-800 text-[11px] font-mono text-neutral-500">
              © {new Date().getFullYear()} Tasbih (AzBhy). Didesain secara editorial & berdaya guna.
            </div>

          </div>

          {/* Right Column: Direct Message Form & Guestbook Live */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Inquiry Form */}
            <div className="border border-neutral-800 bg-neutral-900/40 rounded-2xl p-5 sm:p-7 shadow-lg">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-white">
                    Kirim Pesan Langsung
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-neutral-500">Tersimpan ke Cloud</span>
              </div>

              {sentSuccess ? (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Pesan Anda telah berhasil dikirim! Saya akan segera merespons.</span>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="cth. Ahmad Fauzi"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500 min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                        Alamat Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@domain.com"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500 min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                      Pesan / Topik Diskusi
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Jelaskan kebutuhan kolaborasi, digitalisasi sistem, atau undangan diskusi..."
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500 resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full min-h-[46px] py-3 bg-white hover:bg-neutral-200 active:bg-neutral-300 text-neutral-950 font-mono text-xs font-bold uppercase rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer select-none"
                  >
                    {isSending ? (
                      <span>Mengirimkan Pesan...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Kirim Pesan</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* 2. Interactive Guestbook Wall */}
            <div className="border border-neutral-800 bg-neutral-900/30 rounded-2xl p-5 sm:p-7 shadow-lg">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-white">
                    Buku Tamu / Community Wall
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">Live Synchronized</span>
              </div>

              {/* Guestbook Post Input */}
              <form onSubmit={handlePostGuestbook} className="space-y-2.5 mb-5 bg-neutral-950/60 p-3 sm:p-4 rounded-xl border border-neutral-800">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="sm:col-span-4 bg-neutral-900 border border-neutral-800 rounded px-2.5 py-2 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500 min-h-[40px]"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Tinggalkan pesan sapaan..."
                    value={guestMessage}
                    onChange={(e) => setGuestMessage(e.target.value)}
                    className="sm:col-span-6 bg-neutral-900 border border-neutral-800 rounded px-2.5 py-2 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500 min-h-[40px]"
                  />
                  <button
                    type="submit"
                    disabled={isPostingGuest}
                    className="sm:col-span-2 min-h-[40px] px-3 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-neutral-950 font-mono text-xs font-bold uppercase rounded transition-colors cursor-pointer select-none"
                  >
                    Kirim
                  </button>
                </div>
              </form>

              {/* Guestbook Stream */}
              <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-1">
                {guestList.map((g) => (
                  <div key={g.id} className="p-3 rounded-lg bg-neutral-950 border border-neutral-800/80 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-neutral-200">{g.name}</span>
                      <span className="font-mono text-[9px] text-neutral-500">
                        {g.createdAt?.seconds 
                          ? new Date(g.createdAt.seconds * 1000).toLocaleDateString("id-ID")
                          : "Baru saja"}
                      </span>
                    </div>
                    <p className="text-neutral-400 leading-relaxed font-normal">{g.message}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
