import { useState, FormEvent } from "react";
import { Mail, MessageSquare, Github, Linkedin, Instagram, ArrowUpRight, Copy, Check, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
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
    navigator.clipboard.writeText("azbhy24@gmail.com");
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
      setTimeout(() => setSubmitSuccess(false), 5 * 1000);
    } catch (err) {
      setIsSubmitting(false);
      handleFirestoreError(err, OperationType.CREATE, docPath);
    }
  };

  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "whatsapp": return <MessageSquare className="w-5 h-5 text-indigo-400" />;
      case "email": return <Mail className="w-5 h-5 text-indigo-450" />;
      case "github": return <Github className="w-5 h-5 text-indigo-400" />;
      case "linkedin": return <Linkedin className="w-5 h-5 text-indigo-400" />;
      case "instagram": return <Instagram className="w-5 h-5 text-indigo-400" />;
      default: return <Mail className="w-5 h-5 text-indigo-450" />;
    }
  };

  return (
    <section id="contact" className="relative py-24 border-t border-indigo-950/40 bg-[#030306]">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-indigo-500/[0.015] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-widest text-indigo-300 uppercase bg-zinc-950 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
            KONTAK & KEMITRAAN
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mari Memulai Sesuatu yang Berdampak
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Terbuka untuk kolaborasi proyek, kemandirian transformasi digital UMKM, analisis riset pendidikan, atau konsultasi automasi cerdas.
          </p>
          <div className="w-12 h-[1px] bg-indigo-500/20 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Social Bento Channels */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Quick Copy Email Card (Primary Bento Action) */}
            <button
              id="contact-bento-copy-email"
              onClick={handleCopyEmail}
              className="sm:col-span-2 p-6 rounded-xl border border-indigo-500/15 bg-zinc-950/40 backdrop-blur-md flex items-center justify-between transition-all hover:bg-zinc-950/60 hover:border-indigo-500/30 active:scale-[0.99] text-left cursor-pointer group shadow-2xl relative overflow-hidden"
            >
              {/* background flow aura */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/5 to-transparent blur-md pointer-events-none" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-650/20">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-indigo-400 font-bold uppercase leading-none tracking-wider">EMAIL UTAMA</span>
                  <span className="block text-white font-black text-sm sm:text-base mt-2">azbhy24@gmail.com</span>
                </div>
              </div>
              
              <div className="w-10 h-10 rounded bg-[#030306] border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:text-white group-hover:border-indigo-500/40 transition-all">
                {copied ? <Check className="w-4 h-4 text-emerald-400 animate-pulse" /> : <Copy className="w-4 h-4" />}
              </div>
            </button>

            {/* Render other bento listings dynamically */}
            {socials.filter(s => s.platform !== "Email").map((social, idx) => {
              const bColors = [
                { border: "border-indigo-500/10 hover:border-indigo-500/30", glow: "from-indigo-500/5 to-transparent", icon: "text-indigo-400 border-indigo-500/20" },
                { border: "border-indigo-500/10 hover:border-indigo-500/30", glow: "from-indigo-500/5 to-transparent", icon: "text-indigo-400 border-indigo-500/20" },
                { border: "border-indigo-500/10 hover:border-indigo-500/30", glow: "from-indigo-500/5 to-transparent", icon: "text-indigo-400 border-indigo-500/20" },
                { border: "border-indigo-500/10 hover:border-indigo-500/30", glow: "from-indigo-500/5 to-transparent", icon: "text-indigo-400 border-indigo-500/20" }
              ];
              const cspec = bColors[idx % bColors.length];

              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  id={`contact-bento-${social.platform.toLowerCase()}`}
                  className={`p-6 rounded-xl border ${cspec.border} bg-zinc-950/40 hover:bg-zinc-950/60 backdrop-blur-md flex flex-col justify-between h-40 transition-all cursor-pointer group shadow-xl relative overflow-hidden`}
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${cspec.glow} blur-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-550`} />
                  <div className="flex items-start justify-between relative z-10">
                    <div className="w-10 h-10 rounded bg-[#030306] border-none flex items-center justify-center">
                      {getIcon(social.platform)}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <div className="text-left mt-4 relative z-10">
                    <span className="block text-[9px] font-mono text-zinc-400 uppercase leading-none tracking-wider">{social.platform} Channel</span>
                    <span className="block text-white font-bold text-sm mt-2 font-mono truncate">{social.username}</span>
                  </div>
                </a>
              );
            })}

          </div>

          {/* Right Column: Mini Contact Form */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-xl border border-indigo-500/15 bg-zinc-950/45 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-transparent blur-xl pointer-events-none" />
              <h3 className="text-white text-lg font-bold font-sans tracking-wide text-left mb-6 relative z-10">
                Kirim Pesan Instan
              </h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-4 relative z-10">
                <div className="text-left">
                  <label htmlFor="contact-form-name" className="block text-[9px] font-mono font-bold text-indigo-300 uppercase tracking-widest mb-1.5 pl-1">Nama Lengkap</label>
                  <input
                    id="contact-form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Masukkan nama Anda..."
                    className="w-full px-4 py-3 bg-[#030306] border border-indigo-500/20 focus:border-indigo-400/80 rounded-xl text-xs text-white placeholder-zinc-700 outline-none transition-all shadow-inner"
                  />
                </div>

                <div className="text-left">
                  <label htmlFor="contact-form-email" className="block text-[9px] font-mono font-bold text-indigo-300 uppercase tracking-widest mb-1.5 pl-1">Alamat Email</label>
                  <input
                    id="contact-form-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@perusahaan.com"
                    className="w-full px-4 py-3 bg-[#030306] border border-indigo-500/20 focus:border-indigo-400/80 rounded-xl text-xs text-white placeholder-zinc-700 outline-none transition-all shadow-inner"
                  />
                </div>

                <div className="text-left">
                  <label htmlFor="contact-form-msg" className="block text-[9px] font-mono font-bold text-indigo-300 uppercase tracking-widest mb-1.5 pl-1">Pertanyaan / Pesan Kemitraan</label>
                  <textarea
                    id="contact-form-msg"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Detail kolaborasi yang ingin dibahas..."
                    className="w-full px-4 py-3 bg-[#030306] border border-indigo-500/20 focus:border-indigo-400/80 rounded-xl text-xs text-white placeholder-zinc-700 outline-none transition-all resize-none shadow-inner"
                  />
                </div>

                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50 transition-all cursor-pointer shadow-sm shadow-indigo-500/15 border-none"
                >
                  {isSubmitting ? (
                    <span>Mengirim...</span>
                  ) : (
                    <>
                      <span>Kirim Pesan Kemitraan</span>
                      <Send className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </form>

              {/* Success Notification Alert */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    id="contact-form-success-alert"
                    className="mt-4 p-4 bg-zinc-900 border border-zinc-800 text-white rounded text-xs font-semibold text-left flex items-start gap-2"
                  >
                    <span className="text-sm shrink-0">✨</span>
                    <div>
                      <span className="font-bold">Form Terkirim!</span>
                      <p className="mt-1 text-zinc-400 font-normal">Terima kasih atas pesan Anda. Tasbih (Aby Bhy) akan membalas via email atau WhatsApp secepatnya.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Live Firebase Real-Time Guestbook Wall */}
        <Guestbook />
      </div>
    </section>
  );
}
