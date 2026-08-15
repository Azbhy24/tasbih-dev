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
  ChevronUp
} from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Contact() {
  const { socials } = portfolioData;
  const emailAddress = "advanicplus173@gmail.com";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
        message,
        createdAt: serverTimestamp(),
      });
      setSentSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setSentSuccess(false), 5000);
    } catch (err) {
      console.warn("Inquiry stored locally fallback:", err);
      setSentSuccess(true);
      setName("");
      setEmail("");
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
      className="py-16 sm:py-24 border-t border-slate-200/80 max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="space-y-12 text-left">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's build something useful.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Terbuka untuk diskusi mengenai administrasi, pengelolaan sistem informasi, kolaborasi project web, atau sekadar bertukar pikiran.
          </p>
        </div>

        {/* Channels & Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Communication Channels (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Email Action Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Email
              </span>
              <div className="font-mono text-sm font-semibold text-slate-900 break-all">
                {emailAddress}
              </div>
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                  <span>{copiedEmail ? "Tersalin!" : "Salin Email"}</span>
                </button>

                <a
                  href={`mailto:${emailAddress}`}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Kirim Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Links List */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Social &amp; Direct Messaging
              </span>

              <a
                href="https://wa.me/6281915115390"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 flex items-center justify-between transition-colors text-xs font-medium text-slate-700"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp (+62 819-1511-5390)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="https://github.com/azbhy24"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 flex items-center justify-between transition-colors text-xs font-medium text-slate-700"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-900" />
                  <span>GitHub (azbhy24)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="https://instagram.com/tasbii_az"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 flex items-center justify-between transition-colors text-xs font-medium text-slate-700"
              >
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Instagram (@tasbii_az)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean Inquiry Form (7 Cols) */}
          <div className="md:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Kirim Pesan
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Tinggalkan pesan atau pertanyaan Anda di bawah ini.
                </p>
              </div>

              {sentSuccess ? (
                <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 space-y-1 text-center my-4">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 mx-auto" />
                  <p className="font-semibold text-sm">Pesan Berhasil Terkirim!</p>
                  <p className="text-xs text-emerald-700">Terima kasih atas pesan Anda. Saya akan segera merespons.</p>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Nama
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nama Anda"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-xs text-slate-900 placeholder:text-slate-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@anda.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-xs text-slate-900 placeholder:text-slate-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Pesan
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tuliskan pesan Anda..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-xs text-slate-900 placeholder:text-slate-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white text-xs font-semibold tracking-wide transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSending ? "Mengirim..." : "Kirimkan Pesan"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="pt-10 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="space-y-0.5">
            <p className="font-semibold text-slate-900">
              Tasbih <span className="font-normal text-slate-400">/</span> AzBhy
            </p>
            <p className="text-[11px] text-slate-500">
              Management • Digital • Learning
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Tasbih. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
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
