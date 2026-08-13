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
      case "email": return <Mail className="w-5 h-5 text-indigo-400" />;
      case "github": return <Github className="w-5 h-5 text-indigo-400" />;
      case "linkedin": return <Linkedin className="w-5 h-5 text-indigo-400" />;
      case "instagram": return <Instagram className="w-5 h-5 text-indigo-400" />;
      default: return <Mail className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-32 border-t border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold tracking-wider text-indigo-300 uppercase bg-indigo-950/80 px-3.5 py-1.5 rounded-full border border-indigo-500/30">
            KONTAK & KOLABORASI
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
            Kontak & Peluang Kerja Sama
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-normal">
            Terbuka untuk peluang kerja, magang, dan kolaborasi di bidang manajemen, administrasi, maupun pengembangan digital.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Social Channels */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Quick Copy Email Card */}
            <button
              id="contact-bento-copy-email"
              onClick={handleCopyEmail}
              className="sm:col-span-2 p-6 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl flex items-center justify-between transition-all duration-300 hover:border-indigo-500/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:-translate-y-1 text-left cursor-pointer group"
            >
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider">EMAIL UTAMA</span>
                  <span className="block text-white font-extrabold text-base sm:text-lg mt-0.5">azbhy24@gmail.com</span>
                </div>
              </div>
              
              <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-indigo-400 group-hover:border-indigo-500/40 transition-all shadow-xs">
                {copied ? <Check className="w-4 h-4 text-emerald-400 font-bold" /> : <Copy className="w-4 h-4" />}
              </div>
            </button>

            {/* Other channels */}
            {socials.filter(s => s.platform !== "Email").map((social) => {
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  id={`contact-bento-${social.platform.toLowerCase()}`}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl flex flex-col justify-between h-40 transition-all duration-300 hover:border-indigo-500/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] cursor-pointer group text-left"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                      {getIcon(social.platform)}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <div className="text-left mt-4">
                    <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">{social.platform} Channel</span>
                    <span className="block text-white font-extrabold text-sm mt-1 font-mono truncate">{social.username}</span>
                  </div>
                </a>
              );
            })}

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl shadow-xl">
              <h3 className="text-white text-lg font-extrabold font-sans tracking-wide text-left mb-6">
                Kirim Pesan Instan
              </h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="text-left">
                  <label htmlFor="contact-form-name" className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5 pl-0.5">Nama Lengkap</label>
                  <input
                    id="contact-form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Masukkan nama Anda..."
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 rounded-xl text-xs text-white placeholder-slate-500 outline-none transition-all font-medium"
                  />
                </div>

                <div className="text-left">
                  <label htmlFor="contact-form-email" className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5 pl-0.5">Alamat Email</label>
                  <input
                    id="contact-form-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@perusahaan.com"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 rounded-xl text-xs text-white placeholder-slate-500 outline-none transition-all font-medium"
                  />
                </div>

                <div className="text-left">
                  <label htmlFor="contact-form-msg" className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5 pl-0.5">Pesan / Topik Diskusi</label>
                  <textarea
                    id="contact-form-msg"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan pesan atau hal yang ingin didiskusikan..."
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 rounded-xl text-xs text-white placeholder-slate-500 outline-none transition-all resize-none font-medium"
                  />
                </div>

                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 transition-all cursor-pointer shadow-md shadow-indigo-600/20"
                >
                  {isSubmitting ? (
                    <span>Mengirim...</span>
                  ) : (
                    <>
                      <span>Kirim Pesan</span>
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
                    className="mt-4 p-4 bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 rounded-xl text-xs font-medium text-left flex items-start gap-2"
                  >
                    <span className="text-sm shrink-0">✨</span>
                    <div>
                      <span className="font-extrabold text-emerald-300">Form Terkirim!</span>
                      <p className="mt-1 text-emerald-200">Terima kasih atas pesan Anda. Tasbih (Aby Bhy) akan membalas via email atau WhatsApp secepatnya.</p>
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
