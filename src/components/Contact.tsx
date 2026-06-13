import { useState, FormEvent } from "react";
import { Mail, MessageSquare, Github, Linkedin, Instagram, ArrowUpRight, Copy, Check, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolio";

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

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending email / contact form dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5 * 1000);
    }, 1500);
  };

  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "whatsapp": return <MessageSquare className="w-5 h-5 text-zinc-300" />;
      case "email": return <Mail className="w-5 h-5 text-zinc-300" />;
      case "github": return <Github className="w-5 h-5 text-zinc-300" />;
      case "linkedin": return <Linkedin className="w-5 h-5 text-zinc-300" />;
      case "instagram": return <Instagram className="w-5 h-5 text-zinc-300" />;
      default: return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="relative py-24 border-t border-zinc-950 bg-[#09090B]">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-zinc-800/[0.01] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-zinc-850/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-widest text-zinc-450 uppercase bg-zinc-900 px-3.5 py-1.5 rounded border border-zinc-805">
            KONTAK & KEMITRAAN
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mari Memulai Sesuatu yang Berdampak
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Terbuka untuk kolaborasi proyek, kemandirian transformasi digital UMKM, analisis riset pendidikan, atau konsultasi automasi cerdas.
          </p>
          <div className="w-12 h-[1px] bg-zinc-800 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Social Bento Channels */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Quick Copy Email Card (Primary Bento Action) */}
            <button
              id="contact-bento-copy-email"
              onClick={handleCopyEmail}
              className="sm:col-span-2 p-6 rounded-xl border border-zinc-800 bg-[#0F0F12]/60 backdrop-blur-md flex items-center justify-between transition-all hover:bg-zinc-900/20 active:scale-[0.99] text-left cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-zinc-550 uppercase leading-none tracking-wider">EMAIL UTAMA</span>
                  <span className="block text-white font-bold text-sm sm:text-base mt-2">azbhy24@gmail.com</span>
                </div>
              </div>
              
              <div className="w-10 h-10 rounded hover:bg-zinc-905 flex items-center justify-center text-zinc-400 group-hover:text-white transition-all">
                {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
              </div>
            </button>

            {/* Render other bento listings dynamically */}
            {socials.filter(s => s.platform !== "Email").map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                id={`contact-bento-${social.platform.toLowerCase()}`}
                className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/10 hover:bg-zinc-900/20 hover:border-zinc-700 backdrop-blur-md flex flex-col justify-between h-40 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    {getIcon(social.platform)}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-650 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div className="text-left mt-4">
                  <span className="block text-[9px] font-mono text-zinc-500 uppercase leading-none tracking-wider">{social.platform} Channel</span>
                  <span className="block text-white font-bold text-sm mt-2 font-mono truncate">{social.username}</span>
                </div>
              </a>
            ))}

          </div>

          {/* Right Column: Mini Contact Form */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-xl border border-zinc-800 bg-[#0F0F12]/60">
              <h3 className="text-white text-lg font-bold font-sans tracking-wide text-left mb-6">
                Kirim Pesan Instan
              </h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="text-left">
                  <label htmlFor="contact-form-name" className="block text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1.5 pl-1">Nama Lengkap</label>
                  <input
                    id="contact-form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Masukkan nama Anda..."
                    className="w-full px-4 py-3 bg-[#09090B] border border-zinc-800 focus:border-white rounded text-xs text-white placeholder-zinc-700 outline-none transition-all"
                  />
                </div>

                <div className="text-left">
                  <label htmlFor="contact-form-email" className="block text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1.5 pl-1">Alamat Email</label>
                  <input
                    id="contact-form-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@perusahaan.com"
                    className="w-full px-4 py-3 bg-[#09090B] border border-zinc-800 focus:border-white rounded text-xs text-white placeholder-zinc-700 outline-none transition-all"
                  />
                </div>

                <div className="text-left">
                  <label htmlFor="contact-form-msg" className="block text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1.5 pl-1">Pertanyaan / Pesan Kemitraan</label>
                  <textarea
                    id="contact-form-msg"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Detail kolaborasi yang ingin dibahas..."
                    className="w-full px-4 py-3 bg-[#09090B] border border-zinc-800 focus:border-white rounded text-xs text-white placeholder-zinc-700 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-white hover:bg-zinc-200 text-[#09090B] font-extrabold text-xs tracking-widest uppercase rounded flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 transition-all cursor-pointer shadow-md"
                >
                  {isSubmitting ? (
                    <span>Mengirim...</span>
                  ) : (
                    <>
                      <span>Kirim Pesan Kemitraan</span>
                      <Send className="w-4 h-4" />
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
      </div>
    </section>
  );
}
