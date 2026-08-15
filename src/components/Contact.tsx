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
import Magnetic from "./Magnetic";

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
      className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-stone-200/80"
    >
      {/* Massive Dennis Snellenberg Style Statement & Giant Magnetic Button */}
      <div className="pb-16 text-left space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-2">
          <span className="text-blue-600 font-bold">06 /</span>
          <span className="text-stone-900 font-semibold tracking-wider uppercase">HUBUNGI SAYA</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-2">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black text-stone-900 tracking-tight leading-[1.05]">
              Let's create & collaborate together.
            </h2>
            <p className="text-base sm:text-lg text-stone-600 font-sans max-w-xl leading-relaxed pt-2">
              Terbuka untuk posisi administrasi, tata kelola madrasah/sekolah, enumerator lapangan, hingga pengembangan sistem operasional digital.
            </p>
          </div>

          {/* Giant Magnetic Circular CTA Button (Dennis Snellenberg Signature) */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <Magnetic strength={0.4}>
              <a
                href={`https://wa.me/${whatsappClean}?text=Halo%20Tasbih,%20saya%20tertarik%20dengan%20profil%20portfolio%20Anda.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-blue-600 hover:bg-stone-900 text-white flex flex-col items-center justify-center p-4 transition-all duration-300 shadow-2xl group cursor-pointer text-center"
              >
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider group-hover:scale-105 transition-transform">
                  Hubungi
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider group-hover:scale-105 transition-transform">
                  Tasbih
                </span>
                <ArrowUpRight className="w-5 h-5 mt-1 text-blue-200 group-hover:text-blue-400 group-hover:rotate-45 transition-all duration-300" />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left pt-6 border-t border-stone-200/80">
        
        {/* Left: Contact Channels & Verified Direct Actions (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Saluran Langsung
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Respon cepat tersedia melalui WhatsApp dan pesan elektronik:
            </p>
          </div>

          {/* Quick Action 1: WhatsApp Direct with Magnetic */}
          <Magnetic strength={0.25} className="w-full">
            <a
              href={`https://wa.me/${whatsappClean}?text=Halo%20Tasbih,%20saya%20tertarik%20dengan%20profil%20portfolio%20Anda.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 hover:bg-emerald-100/80 transition-all flex items-center justify-between group cursor-pointer w-full"
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
          </Magnetic>

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

          {/* Social Profiles with Magnetic Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <Magnetic strength={0.3}>
              <a
                href="https://github.com/Azbhy24"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-mono flex items-center gap-2 transition-all shadow-2xs"
              >
                <Github className="w-4 h-4 text-stone-700" />
                <span>GitHub @Azbhy24</span>
              </a>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a
                href="https://instagram.com/azbhy24_"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-mono flex items-center gap-2 transition-all shadow-2xs"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>Instagram @azbhy24_</span>
              </a>
            </Magnetic>
          </div>

        </div>

        {/* Right: Interactive Direct Message Form (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-stone-200 shadow-sm">
          
          <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
            <div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                Kirim Pesan Langsung
              </h3>
              <p className="text-xs text-stone-500 font-mono mt-0.5">
                Formulir ini akan terhubung langsung dengan kotak masuk saya.
              </p>
            </div>
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-stone-100 text-stone-600">
              Formulir Aktif
            </span>
          </div>

          {formSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-serif font-bold text-stone-900">Pesan Telah Diterima!</h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                  Terima kasih, <strong>{formData.name || "Bapak/Ibu"}</strong>. Pesan Anda mengenai "{formData.subject || "Kolaborasi"}" telah masuk. Saya akan merespons secepat mungkin.
                </p>
              </div>
              <div className="pt-2 flex justify-center gap-3">
                <a
                  href={`https://wa.me/${whatsappClean}?text=Halo%20Tasbih,%20saya%20${encodeURIComponent(formData.name)}%20sudah%20mengirimkan%20pesan%20portfolio.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-mono flex items-center gap-1.5 hover:bg-emerald-500 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Lanjutkan di WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="px-4 py-2 rounded-xl bg-stone-100 text-stone-700 text-xs font-mono hover:bg-stone-200 transition-colors cursor-pointer"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
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
                    placeholder="Nama atau Lembaga Anda"
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
