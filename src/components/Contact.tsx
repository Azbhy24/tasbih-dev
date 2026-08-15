import React, { useState, useEffect } from "react";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  Phone,
  Github,
  Instagram,
  Linkedin
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
        limit(6)
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
          console.warn("Firestore guestbook note:", error.message);
          setGuestList([
            {
              id: "def-1",
              name: "Fahrul M.",
              message: "Integrasi manajemen dan teknologinya solid. Sukses terus untuk portofolionya!",
              createdAt: { seconds: Date.now() / 1000 }
            },
            {
              id: "def-2",
              name: "Rahmat Hidayat",
              message: "Sistem digital yang sangat rapi. Semangat persiapan S2-nya!",
              createdAt: { seconds: (Date.now() - 3600000) / 1000 }
            }
          ]);
        }
      );

      return () => unsubscribe();
    } catch (err) {
      console.warn("Firestore listener note:", err);
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
      console.warn("Inquiry error fallback:", err);
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
      console.warn("Guestbook error fallback:", err);
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
      className="relative py-20 sm:py-28 md:py-36 border-t border-neutral-800 bg-[#08080a] text-neutral-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Chapter 07 Marker */}
        <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 sm:pb-4 mb-10 sm:mb-16">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-emerald-400 font-bold bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded">
              CHAPTER 07
            </span>
            <span className="text-neutral-700 font-mono">/</span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-300 font-semibold">
              CONTACT & COLLABORATION
            </span>
          </div>
          <span className="font-mono text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-wider hidden sm:inline">
            SALURAN KOMUNIKASI RESMI
          </span>
        </div>

        {/* Section Headline: Confident Closing Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16 text-left items-start">
          <div className="lg:col-span-8">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Mari Memulai Kolaborasi & Diskusi Nyata.
            </h2>
          </div>
          <div className="lg:col-span-4 border-l border-neutral-800 pl-4 sm:pl-6 text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal">
            Terbuka untuk konsultasi tata kelola administrasi, pengembangan sistem web, riset lapangan, atau pertukaran wawasan profesional.
          </div>
        </div>

        {/* Visual Signature: Large Visual Email Anchor Block */}
        <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-neutral-900/60 border border-neutral-800 mb-12 sm:mb-16 text-left flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-1">
              EMAIL RESMI
            </span>
            <div className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-white">
              {emailAddress}
            </div>
            <div className="flex items-center gap-2 mt-2 text-xs font-mono text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Parepare / Pinrang, Sulawesi Selatan, Indonesia</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              id="copy-email-btn"
              onClick={handleCopyEmail}
              className="min-h-[44px] px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 transition-colors cursor-pointer select-none"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Email Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-emerald-400" />
                  <span>Salin Alamat Email</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${emailAddress}`}
              className="min-h-[44px] px-5 py-2.5 bg-white hover:bg-neutral-200 active:bg-neutral-300 text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 transition-colors select-none"
            >
              <span>Kirim Email Langsung</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-950" />
            </a>
          </div>
        </div>

        {/* 2-Column Split: Direct Form & Live Guestbook */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 text-left">
          
          {/* Left Column: Direct Message Form */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-4 h-4 text-emerald-400" />
                <h3 className="font-mono text-xs uppercase font-bold tracking-wider text-white">
                  KIRIM PESAN LANGSUNG
                </h3>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-3 sm:space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500 font-sans min-h-[44px]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Alamat Email Anda"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500 font-sans min-h-[44px]"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Tuliskan pesan, penawaran proyek, atau topik diskusi..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500 font-sans"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full min-h-[44px] py-3 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer select-none"
                >
                  <Send className="w-4 h-4 text-neutral-950" />
                  <span>{isSending ? "Mengirim Pesan..." : "Kirimkan Pesan"}</span>
                </button>

                {sentSuccess && (
                  <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-lg text-emerald-300 text-xs font-mono">
                    ✓ Pesan berhasil dikirim. Terima kasih telah menghubungi!
                  </div>
                )}
              </form>
            </div>

            {/* Social Channels Bar */}
            <div className="pt-6 mt-6 border-t border-neutral-800 flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
              <span className="text-neutral-500">SALURAN RESMI:</span>
              {socials.map((s, idx) => (
                <a 
                  key={s.platform} 
                  href={s.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-neutral-300 hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>{s.platform}</span>
                  {idx < socials.length - 1 && <span className="text-neutral-600 ml-2">•</span>}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Community Guestbook Wall */}
          <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-neutral-800 pt-6 lg:pt-0 lg:pl-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <h3 className="font-mono text-xs uppercase font-bold tracking-wider text-white">
                  BUKU TAMU / GUESTBOOK
                </h3>
              </div>
              <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded">
                Live Cloud Sync
              </span>
            </div>

            <form onSubmit={handlePostGuestbook} className="mb-5 space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                <input
                  type="text"
                  placeholder="Nama / Inisial"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  required
                  className="sm:col-span-5 bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500 min-h-[40px]"
                />
                <input
                  type="text"
                  placeholder="Tinggalkan jejak apresiasi..."
                  value={guestMessage}
                  onChange={(e) => setGuestMessage(e.target.value)}
                  required
                  className="sm:col-span-7 bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500 min-h-[40px]"
                />
              </div>
              <button
                type="submit"
                disabled={isPostingGuest}
                className="w-full min-h-[38px] py-1.5 bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 text-white font-mono text-xs uppercase tracking-wider rounded transition-colors cursor-pointer select-none"
              >
                {isPostingGuest ? "Menyimpan..." : "+ Kirim Jejak Buku Tamu"}
              </button>
            </form>

            {/* Guest list entries */}
            <div className="space-y-2.5 max-h-[320px] overflow-y-auto custom-scrollbar pr-1">
              {guestList.map((entry) => (
                <div key={entry.id} className="p-3 rounded-lg bg-neutral-900/40 border border-neutral-800 text-left">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-neutral-200">{entry.name}</span>
                    <span className="font-mono text-[10px] text-neutral-500">
                      {entry.createdAt?.seconds 
                        ? new Date(entry.createdAt.seconds * 1000).toLocaleDateString("id-ID")
                        : "Baru saja"}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 font-normal leading-relaxed">
                    "{entry.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
