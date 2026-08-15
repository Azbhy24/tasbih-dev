import { useState } from "react";
import { 
  ArrowDown, 
  FolderGit2, 
  Sparkles, 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  FileText,
  MessageCircle,
  ExternalLink,
  Layers,
  ArrowUpRight
} from "lucide-react";
import { portfolioData } from "../data/portfolio";
import almetPhoto from "../assets/images/almet_mahasiswa_1781399345497.jpg";
import formalPhoto from "../assets/images/jas_formal_1781399324196.jpg";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { bio, education } = portfolioData;
  const [photoType, setPhotoType] = useState<"formal" | "almet">("formal");

  const currentPhoto = photoType === "formal" ? formalPhoto : almetPhoto;

  return (
    <section 
      id="hero" 
      className="relative pt-6 sm:pt-12 pb-16 sm:pb-24 max-w-5xl mx-auto px-4 sm:px-6"
    >
      {/* Decorative subtle background accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-stone-200/30 via-emerald-100/10 to-transparent -z-10 blur-3xl pointer-events-none" />

      <div className="space-y-12">
        
        {/* Top Floating Badge & Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 shadow-2xs text-xs font-semibold text-stone-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Fresh Graduate S1 MPI</span>
            <span className="text-stone-300">•</span>
            <span className="text-stone-500 font-normal">IAIN Parepare</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-stone-500 font-mono bg-stone-100/80 px-3 py-1 rounded-lg border border-stone-200/60">
            <MapPin className="w-3.5 h-3.5 text-stone-400" />
            <span>Parepare &amp; Pinrang, Sulsel</span>
          </div>
        </div>

        {/* Main Editorial Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Big Typography & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Identity & Display Title */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-mono font-bold tracking-widest text-emerald-800 uppercase px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200/60">
                  PORTFOLIO &amp; KARYA
                </span>
                <span className="text-xs text-stone-400 font-mono">
                  [ 2022 — 2026 ]
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-stone-900 tracking-tight leading-[1.08]">
                TASBIH{" "}
                <span className="text-2xl sm:text-3xl md:text-4xl font-normal text-stone-400 font-mono">
                  / AzBhy
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-stone-800 font-medium leading-snug">
                Lulusan <span className="font-serif italic font-normal text-emerald-900 underline decoration-emerald-300 underline-offset-4">Manajemen Pendidikan Islam</span> yang menghubungkan tata kelola administrasi dengan solusi digital praktis.
              </p>
            </div>

            {/* Context Paragraph */}
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl font-normal">
              Memahami alur administrasi madrasah, pengarsipan naskah ilmiah OJS di Sekretariat Jurnal EDIUM, tata kelola kas ritel, serta membangun aplikasi web mandiri untuk mempermudah pekerjaan sehari-hari.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate("projects")}
                className="px-5 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer flex items-center gap-2"
              >
                <FolderGit2 className="w-4 h-4 text-emerald-400" />
                <span>Lihat Karya &amp; Projects</span>
              </button>

              <button
                onClick={() => onNavigate("about")}
                className="px-5 py-3 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 hover:border-stone-400 font-semibold text-xs sm:text-sm transition-all shadow-2xs active:scale-[0.98] cursor-pointer flex items-center gap-2"
              >
                <span>Tentang Saya</span>
                <ArrowDown className="w-3.5 h-3.5 text-stone-500" />
              </button>

              <a
                href="https://wa.me/6281915115390"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-1.5 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Micro Highlights Pill Row */}
            <div className="pt-4 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-stone-600">
              <div className="p-2.5 rounded-xl bg-white/70 border border-stone-200/70">
                <span className="text-[10px] font-mono uppercase text-stone-400 block">Fokus Utama</span>
                <span className="font-semibold text-stone-800 mt-0.5 block">Tata Kelola &amp; Admin</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/70 border border-stone-200/70">
                <span className="text-[10px] font-mono uppercase text-stone-400 block">Pengalaman Jurnal</span>
                <span className="font-semibold text-stone-800 mt-0.5 block">Sekretariat EDIUM</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/70 border border-stone-200/70 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-mono uppercase text-stone-400 block">Karya Digital</span>
                <span className="font-semibold text-stone-800 mt-0.5 block">NgajiKu &amp; Kasir POS</span>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Visual Photo Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
              
              {/* Decorative behind card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-stone-300/40 via-emerald-200/30 to-stone-200/50 rounded-3xl -rotate-2 -z-10" />

              {/* Main Photo Frame */}
              <div className="bg-white p-3.5 rounded-3xl border border-stone-200 shadow-md space-y-3">
                
                {/* Photo Element */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 border border-stone-100">
                  <img
                    src={currentPhoto}
                    alt="Foto Profil Tasbih"
                    className="w-full h-full object-cover object-top transition-all duration-500 filter contrast-[1.02]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent" />

                  {/* Overlay Tag */}
                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h2 className="font-bold text-sm leading-tight text-stone-50">Tasbih, S.Pd.</h2>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <p className="text-[11px] text-stone-300 font-mono mt-0.5">
                        IAIN Parepare • MPI 2022
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-1 rounded bg-white/20 backdrop-blur-xs text-stone-100 border border-white/20">
                      {photoType === "formal" ? "Formal" : "Almamater"}
                    </span>
                  </div>
                </div>

                {/* Interactive Dual Photo Switcher */}
                <div className="p-1.5 bg-stone-100 rounded-xl border border-stone-200/80 flex items-center gap-1.5 text-xs font-semibold">
                  <button
                    onClick={() => setPhotoType("formal")}
                    className={`flex-1 py-1.5 rounded-lg text-center transition-all cursor-pointer ${
                      photoType === "formal"
                        ? "bg-white text-stone-900 shadow-xs"
                        : "text-stone-500 hover:text-stone-800"
                    }`}
                  >
                    Jas Formal
                  </button>
                  <button
                    onClick={() => setPhotoType("almet")}
                    className={`flex-1 py-1.5 rounded-lg text-center transition-all cursor-pointer ${
                      photoType === "almet"
                        ? "bg-white text-emerald-900 shadow-xs"
                        : "text-stone-500 hover:text-stone-800"
                    }`}
                  >
                    Almamater Hijau
                  </button>
                </div>

                {/* Education Micro Badge */}
                <div className="px-2 py-1.5 flex items-center justify-between text-[11px] text-stone-500 font-mono">
                  <span className="flex items-center gap-1 text-stone-700 font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Fakultas Tarbiyah</span>
                  </span>
                  <span>Angkatan 2022</span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Hero Bottom Banner: Real Context Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-stone-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-stone-900 text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block font-bold">
                Kesiapan Profesional
              </span>
              <p className="text-xs sm:text-sm font-semibold text-stone-800">
                Terbuka untuk posisi Administrasi Madrasah, Pengelola Data/Sistem, dan Staf Kelembagaan Pendidikan.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate("contact")}
            className="self-start sm:self-auto shrink-0 px-3.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Hubungi Saya</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
