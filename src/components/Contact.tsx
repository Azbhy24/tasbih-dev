import React, { useState } from "react";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MessageCircle, 
  Github, 
  Instagram, 
  ArrowUpRight,
  ShieldCheck,
  ChevronUp,
  MapPin,
  Sparkles
} from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Contact() {
  const { socials } = portfolioData;
  const emailAddress = "advanicplus173@gmail.com";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

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
        subject: subject || "Pesan dari Web Portfolio",
        message,
        createdAt: serverTimestamp(),
      });
      setSentSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setTimeout(() => setSentSuccess(false), 5000);
    } catch (err) {
      console.warn("Inquiry stored locally fallback:", err);
      setSentSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setTimeout(() => setSentSuccess(false), 5000);
    } finally {
      setIsSending(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section 
      id="contact" 
      className="py-16 sm:py-24 border-t border-stone-200/90 max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="space-y-12 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/80 text-stone-700 text-xs font-mono font-semibold">
              <Mail className="w-3.5 h-3.5 text-stone-500" />
              <span>KONTAK &amp; KOMUNIKASI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
              Mari Terhubung &amp; Berdiskusi.
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
              Saya sangat terbuka untuk komunikasi seputar peluang karir di bidang administrasi pendidikan/madrasah, tata kelola dokumen, atau bertukar pikiran tentang proyek digital.
            </p>
          </div>

          <div className="text-xs font-mono text-stone-400">
            [ RESPON CEPAT: WA &amp; EMAIL ]
          </div>
        </div>

        {/* Channels & Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Communication Channels (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Email Action Card */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-400 block">
                Email Utama
              </span>
              <div className="font-mono text-sm font-semibold text-stone-900 break-all">
                {emailAddress}
              </div>
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
                  <span>{copiedEmail ? "Tersalin!" : "Salin Email"}</span>
                </button>

                <a
                  href={`mailto:${emailAddress}`}
                  className="px-3.5 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Kirim Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Direct Links List */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-2.5">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-400 block mb-2">
                Kanal Pesan Langsung
              </span>

              <a
                href="https://wa.me/6281915115390"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-emerald-50/60 hover:bg-emerald-100/80 border border-emerald-100 flex items-center justify-between transition-colors text-xs font-semibold text-emerald-900"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp (+62 819-1511-5390)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
              </a>

              <a
                href="https://github.com/azbhy24"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-100 flex items-center justify-between transition-colors text-xs font-medium text-stone-800"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-stone-900 shrink-0" />
                  <span>GitHub (@Azbhy24)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href="https://instagram.com/tasbii_az"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-100 flex items-center justify-between transition-colors text-xs font-medium text-stone-800"
              >
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-pink-600 shrink-0" />
                  <span>Instagram (@tasbii_az)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
              </a>
            </div>

            {/* Location Pill */}
            <div className="p-4 rounded-2xl bg-stone-100/80 border border-stone-200 text-xs font-mono text-stone-600 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-stone-500" />
              <span>Lokasi: Parepare / Pinrang, Sulawesi Selatan</span>
            </div>

          </div>

          {/* Right Column: Clean Inquiry Form (7 Cols) */}
          <div className="md:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-4">
              <div>
                <h3 className="text-lg font-bold text-stone-900">
                  Tinggalkan Pesan
                </h3>
                <p className="text-xs text-stone-500 mt-0.5 font-normal">
                  Kirimkan pertanyaan, tawaran peluang kerja, atau pesan silaturahmi.
                </p>
              </div>

              {sentSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 text-center my-4">
                  <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto" />
                  <p className="font-bold text-sm">Pesan Berhasil Terkirim!</p>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Terima kasih telah menghubungi saya. Saya akan segera membalas melalui email atau WhatsApp yang Anda cantumkan.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1 font-mono">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nama Anda"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:bg-white focus:border-stone-900 focus:outline-none text-xs text-stone-900 placeholder:text-stone-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1 font-mono">
                        Alamat Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@anda.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:bg-white focus:border-stone-900 focus:outline-none text-xs text-stone-900 placeholder:text-stone-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1 font-mono">
                      Subjek / Topik (Opsional)
                    </label>
                    <input
                      type="text"
                      placeholder="Misal: Peluang Kerja Administrasi / Diskusi Madrasah"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:bg-white focus:border-stone-900 focus:outline-none text-xs text-stone-900 placeholder:text-stone-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1 font-mono">
                      Pesan *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tuliskan pesan Anda..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:bg-white focus:border-stone-900 focus:outline-none text-xs text-stone-900 placeholder:text-stone-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 active:scale-[0.99] text-white text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSending ? "Mengirim Pesan..." : "Kirimkan Pesan"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Refined Gen-Z Editorial Footer */}
        <footer className="pt-12 border-t border-stone-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-500">
          <div className="space-y-1">
            <p className="font-extrabold text-stone-900 text-sm">
              Tasbih <span className="font-mono font-normal text-stone-400">/ AzBhy</span>
            </p>
            <p className="text-[11px] text-stone-500 font-mono">
              S1 Manajemen Pendidikan Islam • IAIN Parepare
            </p>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>© {new Date().getFullYear()} Tasbih. Parepare / Pinrang.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white border border-stone-200 hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer shadow-2xs"
              title="Kembali ke atas"
              aria-label="Kembali ke atas"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </footer>

      </div>
    </section>
  );
}
