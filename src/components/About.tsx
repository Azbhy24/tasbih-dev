import { useState } from "react";
import { 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  BookOpen, 
  FileCheck2, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";
import { motion } from "motion/react";
import formalPhoto from "../assets/images/jas_formal_1781399324196.jpg";

interface AboutProps {
  onNavigate: (sectionId: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
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
              Halo, saya <strong className="text-stone-900 font-semibold">Tasbih</strong>. Saya baru menyelesaikan studi strata satu di program studi <strong className="text-stone-900 font-semibold">Manajemen Pendidikan Islam (MPI)</strong> di Institut Agama Islam Negeri (IAIN) Parepare.
            </p>
          </div>

          {/* Narrative Paragraphs in Natural Indonesian */}
          <div className="space-y-4 text-sm sm:text-base text-stone-600 leading-relaxed">
            <p>
              Fokus utama saya adalah tata kelola dan administrasi pendidikan—mulai dari manajemen surat-menyurat, pengorganisasian data madrasah/sekolah, hingga pengelolaan alur kerja operasional institusi agar lebih rapi dan transparan.
            </p>
            <p>
              Di samping keilmuan manajemen pendidikan, saya memiliki ketertarikan kuat dalam memanfaatkan teknologi digital dan otomatisasi sederhana untuk mempermudah pekerjaan harian, seperti aplikasi pencatatan santri, sistem kasir toko, dan pengelolaan kas.
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

        {/* Right Column: Metadata Showcase & Photo Frame (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Editorial Detail Photo Frame */}
          <div className="relative bg-white p-3 rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 relative">
              <img 
                src={formalPhoto} 
                alt="Tasbih - S1 Manajemen Pendidikan Islam"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <p className="text-xs font-mono font-medium tracking-wide">IAIN PAREPARE CAMPUS</p>
                <p className="text-sm font-bold">Fakultas Tarbiyah · 2022–2026</p>
              </div>
            </div>
          </div>

          {/* Structured Editorial Metadata List (Typography-Driven) */}
          <div className="bg-stone-100/80 rounded-2xl p-5 border border-stone-200/80 space-y-3.5 text-left text-xs font-mono">
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

            <div className="flex justify-between items-center pt-1">
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
