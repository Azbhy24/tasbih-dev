import { useState, FormEvent } from "react";
import { Mail, MessageSquare, Github, Linkedin, Instagram, ArrowUpRight, Copy, Check, Send, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "../lib/firebase";
import Guestbook from "./Guestbook";

export default function Contact() {
  const { socials } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("advanicplus173@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const messageId = "msg-" + Date.now() + "-" + Math.random().toString(36).substring(2, 9);
    const docPath = `messages/${messageId}`;
    try {
      await setDoc(doc(db, "messages", messageId), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp(),
      });
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      setIsSubmitting(false);
      handleFirestoreError(err, OperationType.CREATE, docPath);
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 border-t border-neutral-800/80 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
            07 / KONTAK & JARINGAN
          </span>
          <span className="h-px w-8 bg-neutral-800" />
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-8">
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Let’s Build Something Useful.
            </h2>
          </div>
          <div className="lg:col-span-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Terbuka untuk peluang kerja, kemitraan proyek web development, otomatisasi alur kerja administrasi, dan implementasi sistem ritel & edukasi.
          </div>
        </div>

        {/* 2-Column Contact Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-neutral-800">
          
          {/* Left Column: Direct Channels & Location */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Quick Email Copy Block */}
            <div className="border border-neutral-800 bg-neutral-900/40 rounded-xl p-6">
              <span className="font-mono text-[10px] uppercase text-neutral-500 tracking-wider block mb-2">
                EMAIL UTAMA
              </span>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-base sm:text-lg text-white font-bold">
                  advanicplus173@gmail.com
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Channels List */}
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase text-neutral-500 tracking-wider block mb-2">
                SALURAN KOMUNIKASI & SOSIAL MEDIA
              </span>
              
              <a
                href="https://wa.me/6281915115390"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-lg bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-emerald-400">WA //</span>
                  <div>
                    <span className="text-sm font-bold text-white block">WhatsApp Direct</span>
                    <span className="font-mono text-xs text-neutral-400">+62 819-1511-5390</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://github.com/azbhy24"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-lg bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-neutral-400">GH //</span>
                  <div>
                    <span className="text-sm font-bold text-white block">GitHub Repositories</span>
                    <span className="font-mono text-xs text-neutral-400">github.com/azbhy24</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://instagram.com/tasbii_az"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-lg bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-neutral-400">IG //</span>
                  <div>
                    <span className="text-sm font-bold text-white block">Instagram</span>
                    <span className="font-mono text-xs text-neutral-400">@tasbii_az</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Location & Availability Note */}
            <div className="flex items-start gap-3 p-4 border border-neutral-800 bg-neutral-900/20 rounded-lg text-xs font-mono text-neutral-400">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-bold block">Lokasi & Mobilitas:</span>
                <span>Parepare / Suppa, Kab. Pinrang, Sulawesi Selatan. Siap bekerja secara remote maupun onsite.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Editorial Direct Message Form */}
          <div className="lg:col-span-6 text-left">
            <div className="border border-neutral-800 bg-neutral-900/40 rounded-xl p-6 sm:p-8">
              <span className="font-mono text-[10px] uppercase text-neutral-500 tracking-wider block mb-1">
                DIRECT INQUIRY
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight mb-6">
                Kirim Pesan Langsung
              </h3>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                  ✓ Pesan Anda telah berhasil terkirim. Terima kasih, saya akan segera merespons.
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-[11px] uppercase text-neutral-400 mb-1.5">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Anda atau Instansi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase text-neutral-400 mb-1.5">
                    Email Kontak
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase text-neutral-400 mb-1.5">
                    Isi Pesan / Kebutuhan Proyek
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tuliskan tujuan kolaborasi, konsultasi, atau pesan Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-white hover:bg-neutral-200 text-neutral-950 font-mono text-xs font-bold uppercase rounded tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "Mengirim..." : "Kirim Pesan Sekarang"}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Interactive Guestbook Wall */}
        <div className="mt-20">
          <Guestbook />
        </div>

      </div>
    </section>
  );
}
