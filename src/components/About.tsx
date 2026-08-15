import { useState } from "react";
import { 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  BookOpen, 
  FileCheck2, 
  CheckCircle2, 
  ArrowUpRight,
  User,
  Users,
  Compass
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import formalPhoto from "../assets/images/jas_formal_1781399324196.jpg";
import almetPhoto from "../assets/images/almet_mahasiswa_1781399345497.jpg";
import pdhPhoto from "../assets/images/himpunan_pdh_1786794143177.jpg";
import kknPhoto from "../assets/images/kkn_lapangan_1786794161153.jpg";

interface AboutProps {
  onNavigate: (sectionId: string) => void;
}

const PHOTO_PROFILES = [
  {
    id: "pdh",
    label: "PDH Himpunan",
    subtitle: "Organisasi Mahasiswa (HMJ MPI)",
    tag: "Dokumentasi Asli",
    image: "/foto-pdh.jpg",
    fallback: pdhPhoto,
    caption: "Himpunan Mahasiswa Manajemen Pendidikan Islam (HMJ MPI)",
    badgeColor: "bg-indigo-600"
  },
  {
    id: "kkn",
    label: "Rompi KKN",
    subtitle: "Pengabdian & Lapangan",
    tag: "Dokumentasi Asli",
    image: "/foto-kkn.jpg",
    fallback: kknPhoto,
    caption: "KKN Posko & Pengabdian Masyarakat IAIN Parepare",
    badgeColor: "bg-emerald-600"
  },
  {
    id: "formal",
    label: "Jas Formal",
    subtitle: "Profesional & Administrasi",
    tag: "Formal Attire",
    image: "/foto-formal.jpg",
    fallback: formalPhoto,
    caption: "Fakultas Tarbiyah · Lulusan 2026",
    badgeColor: "bg-blue-600"
  },
  {
    id: "almet",
    label: "Almamater",
    subtitle: "S1 IAIN Parepare",
    tag: "Kampus Hijau",
    image: "/foto-almet.jpg",
    fallback: almetPhoto,
    caption: "Institut Agama Islam Negeri (IAIN) Parepare",
    badgeColor: "bg-teal-600"
  }
];

export default function About({ onNavigate }: AboutProps) {
  const [activePhoto, setActivePhoto] = useState(PHOTO_PROFILES[0]);

  return (
    <section 
      id="about" 
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-stone-200/80"
    >
      {/* Section Header Metadata */}
      <div className="flex items-center justify-between border-b border-stone-200/80 pb-4 mb-10 text-xs font-mono text-stone-500">
        <div className="flex items-center gap-2">
          <span className="text-blue-600 font-bold">01 /</span>
          <span className="text-stone-900 font-semibold tracking-wider uppercase">TENTANG SAYA & PROFIL</span>
        </div>
        <span className="text-stone-400 font-normal">IAIN PAREPARE · S1 MPI</span>
      </div>

      {/* Main Editorial Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Large Editorial Statement & Typography (7 cols) */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 leading-[1.15] tracking-tight">
              “Belajar mengelola pendidikan, organisasi, dan hal-hal nyata yang ada di dalamnya.”
            </h2>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed pt-2">
              Halo, saya <strong className="text-stone-900 font-semibold">Tasbih</strong>. Saya menyelesaikan studi strata satu di program studi <strong className="text-stone-900 font-semibold">Manajemen Pendidikan Islam (MPI)</strong> di Institut Agama Islam Negeri (IAIN) Parepare.
            </p>
          </div>

          {/* Narrative Paragraphs in Natural Indonesian */}
          <div className="space-y-4 text-sm sm:text-base text-stone-600 leading-relaxed">
            <p>
              Fokus utama saya adalah tata kelola dan administrasi pendidikan—mulai dari manajemen surat-menyurat, pengorganisasian data madrasah/sekolah, hingga pengelolaan alur kerja operasional institusi agar lebih rapi dan transparan.
            </p>
            <p>
              Pengalaman nyata saya dibentuk lewat kegiatan riset lapangan sebagai <em>Enumerator</em>, kepengurusan himpunan mahasiswa, pengabdian <em>Kuliah Kerja Nyata (KKN)</em> di masyarakat, hingga tata kelola sekretariat jurnal ilmiah di kampus.
            </p>
          </div>

          {/* Core Values / Editorial List (Not Generic Cards) */}
          <div className="pt-2 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-900 uppercase">
                <FileCheck2 className="w-4 h-4 text-blue-600" />
                <span>Tata Kelola Rapi</span>
              </div>
              <p className="text-xs text-stone-500 leading-normal">
                Dokumentasi terstruktur, pengarsipan berkas akurat, dan kepatuhan administrasi institusi.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-900 uppercase">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Teknologi Terapan</span>
              </div>
              <p className="text-xs text-stone-500 leading-normal">
                Membangun alat bantu digital praktis untuk pencatatan dan efisiensi operasional.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Photo Switcher & Metadata (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Photo Persona Switcher Tabs */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 pb-1">
              <span className="font-semibold uppercase text-stone-800">Galeri Foto Persona:</span>
              <span>Pilih sudut aktivitas</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-stone-100/90 rounded-xl border border-stone-200">
              {PHOTO_PROFILES.map((p) => {
                const isSelected = activePhoto.id === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePhoto(p)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-mono transition-all text-center cursor-pointer ${
                      isSelected
                        ? "bg-white text-stone-900 font-bold shadow-xs border border-stone-200/80"
                        : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/50"
                    }`}
                  >
                    <span className="block truncate">{p.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Editorial Detail Photo Frame with AnimatePresence */}
          <div className="relative bg-white p-3 rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-stone-900 relative">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activePhoto.id}
                  src={activePhoto.image} 
                  alt={activePhoto.caption}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-full object-cover object-top"
                />
              </AnimatePresence>

              {/* Tag Badge Top Right */}
              <div className="absolute top-3 right-3 z-10">
                <span className={`px-2.5 py-1 rounded-full text-white text-[10px] font-mono font-semibold shadow-md ${activePhoto.badgeColor}`}>
                  {activePhoto.tag}
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/10 to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 text-white z-10">
                <p className="text-[10px] font-mono uppercase tracking-wider text-stone-300">
                  {activePhoto.subtitle}
                </p>
                <p className="text-xs sm:text-sm font-bold truncate">
                  {activePhoto.caption}
                </p>
              </div>
            </div>
          </div>

          {/* Structured Editorial Metadata List (Typography-Driven) */}
          <div className="bg-stone-100/80 rounded-2xl p-4 sm:p-5 border border-stone-200/80 space-y-3 text-left text-xs font-mono">
            <div className="flex justify-between items-center pb-2 border-b border-stone-200">
              <span className="text-stone-500 uppercase">Status</span>
              <span className="font-semibold text-stone-900">Fresh Graduate (2026)</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-stone-200">
              <span className="text-stone-500 uppercase">Program Studi</span>
              <span className="font-semibold text-stone-900">Manajemen Pendidikan Islam</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-stone-200">
              <span className="text-stone-500 uppercase">Perguruan Tinggi</span>
              <span className="font-semibold text-stone-900">IAIN Parepare</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-stone-200">
              <span className="text-stone-500 uppercase">Fokus Minat</span>
              <span className="font-semibold text-stone-900">Admin Madrasah / Tata Usaha</span>
            </div>

            <div className="flex justify-between items-center pt-0.5">
              <span className="text-stone-500 uppercase">Domisili</span>
              <span className="font-semibold text-stone-900 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-blue-600" />
                Parepare / Pinrang, Sulsel
              </span>
            </div>
          </div>

          {/* Quick Action */}
          <button
            onClick={() => onNavigate("projects")}
            className="w-full py-3 px-4 rounded-xl bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 text-xs font-semibold font-mono flex items-center justify-center gap-2 transition-colors cursor-pointer group"
          >
            <span>Lihat Karya & Aplikasi Terapan</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

      </div>
    </section>
  );
}
