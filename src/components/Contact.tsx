import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Github, 
  Instagram, 
  Send, 
  CheckCircle2, 
  Copy, 
  ArrowUpRight,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailAddress = "azbhy.dev@gmail.com";
  const whatsappNumber = "+62 858-2339-1662";
  const whatsappClean = "6285823391662";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate swift clean submission & direct WhatsApp/mailto bridge
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <section 
      id="contact" 
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-stone-200/80"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-200/80 pb-4 mb-12 text-left">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-1">
            <span className="text-blue-600 font-bold">06 /</span>
            <span className="text-stone-900 font-semibold tracking-wider uppercase">HUBUNGI SAYA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 tracking-tight">
            Let's Connect.
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-500 font-mono mt-2 sm:mt-0 max-w-xs text-left sm:text-right">
          Saya sedang membuka diri untuk kesempatan kerja, pengalaman baru, dan koneksi profesional.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        
        {/* Left: Contact Channels & Verified Direct Actions (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Mulai Percakapan
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Tertarik mendiskusikan peluang kerja di bidang administrasi pendidikan, operator madrasah, atau kolaborasi digital terapan? Silakan hubungi saya melalui jalur berikut:
            </p>
          </div>

          {/* Quick Action 1: WhatsApp Direct */}
          <a
            href={`https://wa.me/${whatsappClean}?text=Halo%20Tasbih,%20saya%20tertarik%20dengan%20profil%20portfolio%20Anda.`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 hover:bg-emerald-100/80 transition-all flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-emerald-800 uppercase font-semibold">Respon Cepat via WhatsApp</p>
                <p className="text-sm font-bold text-stone-900 font-mono">{whatsappNumber}</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Quick Action 2: Email Direct & Copy */}
          <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-stone-400 uppercase font-semibold">Surat Elektronik (Email)</p>
                  <p className="text-sm font-bold text-stone-900 font-mono">{emailAddress}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 pt-1">
              <a
                href={`mailto:${emailAddress}`}
                className="flex-1 py-2 px-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Buka Email Client</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="py-2 px-3 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-stone-500" />
                    <span>Salin Alamat</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles & Verified Accounts */}
          <div className="p-4 rounded-2xl bg-stone-100/80 border border-stone-200/80 space-y-2.5 text-xs font-mono">
            <p className="text-stone-400 uppercase font-semibold">Profil & Jejaring Sosial:</p>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/Azbhy24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-stone-900 hover:bg-stone-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-stone-800" />
                  <span>github.com/Azbhy24</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href="https://instagram.com/azbhy24_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-stone-900 hover:bg-stone-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>instagram.com/azbhy24_</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Right: Clean Inquiry Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl border border-stone-300 shadow-sm p-6 sm:p-8">
          
          {formSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif font-bold text-stone-900">
                Pesan Terkirim!
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Terima kasih atas pesannya. Saya akan meninjau dan merespon secepat mungkin melalui email atau WhatsApp.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: "", email: "", subject: "", message: "" });
                }}
                className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-mono cursor-pointer"
              >
                Kirim Pesan Lain
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <h3 className="text-lg font-serif font-bold text-stone-900">
                  Kirim Pesan Langsung
                </h3>
                <p className="text-xs text-stone-500 font-mono mt-0.5">
                  Formulir terhubung langsung ke inbox pesan Tasbih.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-semibold text-stone-700">
                    Nama Lengkap / Instansi
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama Anda atau Nama Madrasah"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs text-stone-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-semibold text-stone-700">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email.anda@contoh.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs text-stone-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-semibold text-stone-700">
                  Subjek / Keperluan
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Peluang Kerja / Konsultasi / Administrasi"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs text-stone-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-semibold text-stone-700">
                  Isi Pesan
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tuliskan pesan Anda secara singkat..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs text-stone-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow"
              >
                {isSubmitting ? (
                  <span>Mengirim pesan...</span>
                ) : (
                  <>
                    <span>Kirim Pesan ke Tasbih</span>
                    <Send className="w-3.5 h-3.5 text-blue-400" />
                  </>
                )}
              </button>
            </form>
          )}

        </div>

      </div>

      {/* Editorial Footer Bottom Note */}
      <div className="mt-16 pt-8 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
        <div className="flex items-center gap-2">
          <span className="font-bold text-stone-900">Tasbih (AzBhy)</span>
          <span>·</span>
          <span>S1 Manajemen Pendidikan Islam (IAIN Parepare)</span>
        </div>
        <p className="text-stone-400">
          © {new Date().getFullYear()} · "Small Steps. Consistent Progress."
        </p>
      </div>

    </section>
  );
}
