import { useState } from "react";
import { 
  ExternalLink, 
  Github, 
  Layers, 
  X, 
  Info, 
  CheckCircle2, 
  HelpCircle,
  FolderGit2,
  Play,
  Pause,
  Volume2,
  Receipt,
  ShoppingCart,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
  Maximize2,
  Check
} from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { ProjectData } from "../types";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Interactive state for NgajiKu featured preview
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeSurahIndex, setActiveSurahIndex] = useState(0);

  const sampleSurahs = [
    { number: 1, name: "Al-Fatihah", arabic: "الفاتحة", verses: 7, meaning: "Pembukaan", sampleAyat: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", translation: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang." },
    { number: 112, name: "Al-Ikhlas", arabic: "الإخلاص", verses: 4, meaning: "Keesaan Allah", sampleAyat: "قُلْ هُوَ اللَّهُ أَحَدٌ", translation: "Katakanlah (Muhammad), Dialah Allah, Yang Maha Esa." },
    { number: 113, name: "Al-Falaq", arabic: "الفلق", verses: 5, meaning: "Waktu Subuh", sampleAyat: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", translation: "Katakanlah, Aku berlindung kepada Tuhan yang menguasai subuh (fajar)." },
    { number: 114, name: "An-Nas", arabic: "الناس", verses: 6, meaning: "Manusia", sampleAyat: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", translation: "Katakanlah, Aku berlindung kepada Tuhannya manusia." },
  ];

  // Interactive sample state for Kasir Amma Ika
  const [kasirTotal, setKasirTotal] = useState(48500);
  const [kasirPaid, setKasirPaid] = useState(50000);

  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const secondaryProjects = projects.filter((p) => p.id !== featuredProject.id);

  return (
    <section 
      id="projects" 
      className="py-16 sm:py-24 border-t border-stone-200/90 max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="space-y-12 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/70 text-xs font-mono font-semibold">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>KARYA &amp; DIGITAL PROJECTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
              Aplikasi Nyata yang Saya Bangun.
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
              Membangun perangkat lunak mandiri yang lahir dari kebutuhan nyata di sekitar: media belajar Al-Qur'an, otomasi kasir ritel sembako, dan manajemen keuangan.
            </p>
          </div>

          <div className="text-xs font-mono text-stone-400">
            [ 4 REPOSITORIES • LIVE DEMO READY ]
          </div>
        </div>

        {/* 1. FEATURED PROJECT SHOWCASE (Asymmetric Rich Mockup): NGAJIKU */}
        <div className="relative rounded-3xl bg-white border border-stone-200/90 p-6 sm:p-8 shadow-sm space-y-6 overflow-hidden">
          
          {/* Top Label */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-100">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
                FEATURED WORK
              </span>
              <span className="text-xs font-mono text-stone-500 font-medium">
                Islamic Education &amp; Web App
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repository</span>
              </a>
              <a
                href={featuredProject.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <span>Buka Live App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Grid Layout: Left Details, Right Interactive Quran Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2.5 rounded-2xl bg-emerald-50 border border-emerald-100">
                  {featuredProject.symbol}
                </span>
                <div>
                  <h3 className="text-2xl font-black text-stone-900 tracking-tight">
                    {featuredProject.name}
                  </h3>
                  <p className="text-xs text-stone-500 font-medium mt-0.5">
                    {featuredProject.tagline}
                  </p>
                </div>
              </div>

              {/* Problem & Built Box */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2 text-xs">
                <div>
                  <span className="font-bold text-stone-700 uppercase font-mono text-[10px] tracking-wider block">
                    Problem
                  </span>
                  <p className="text-stone-600 leading-relaxed mt-0.5">
                    {featuredProject.problem}
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-200/60">
                  <span className="font-bold text-emerald-800 uppercase font-mono text-[10px] tracking-wider block">
                    Solusi Yang Saya Bangun
                  </span>
                  <p className="text-stone-700 leading-relaxed mt-0.5">
                    {featuredProject.whatIBuilt}
                  </p>
                </div>
              </div>

              {/* Key Features Checklist */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                  Fitur Utama NgajiKu
                </span>
                <ul className="space-y-1 text-xs text-stone-600">
                  {featuredProject.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {featuredProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 text-[11px] font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(featuredProject)}
                className="text-xs font-semibold text-emerald-800 hover:text-emerald-900 inline-flex items-center gap-1 cursor-pointer pt-1"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Pelajari Detail Arsitektur Lengkap</span>
              </button>
            </div>

            {/* Right Interactive Mockup (7 cols): Interactive Quran Reader Demo */}
            <div className="lg:col-span-7">
              <div className="bg-stone-900 text-stone-100 rounded-2xl border border-stone-800 shadow-xl overflow-hidden">
                
                {/* Mockup Browser Top Bar */}
                <div className="px-4 py-2.5 bg-stone-950 border-b border-stone-800 flex items-center justify-between text-xs text-stone-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-[11px] font-mono ml-2 text-stone-400 hidden sm:inline">
                      ngajiku-iota.vercel.app
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                    Live Simulator
                  </span>
                </div>

                {/* Mockup App Interface */}
                <div className="p-5 space-y-4">
                  
                  {/* Surah Selector Tabs */}
                  <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 custom-scrollbar">
                    {sampleSurahs.map((s, idx) => (
                      <button
                        key={s.number}
                        onClick={() => setActiveSurahIndex(idx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono shrink-0 transition-all cursor-pointer ${
                          activeSurahIndex === idx
                            ? "bg-emerald-600 text-white font-bold"
                            : "bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-white"
                        }`}
                      >
                        {s.number}. {s.name}
                      </button>
                    ))}
                  </div>

                  {/* Active Surah Card Preview */}
                  <div className="p-5 rounded-xl bg-stone-800/80 border border-stone-700 space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-700 pb-3">
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          Surah {sampleSurahs[activeSurahIndex].name} ({sampleSurahs[activeSurahIndex].meaning})
                        </h4>
                        <span className="text-[10px] text-stone-400 font-mono">
                          {sampleSurahs[activeSurahIndex].verses} Ayat • Makkiyah
                        </span>
                      </div>
                      <span className="text-xl font-serif text-emerald-400">
                        {sampleSurahs[activeSurahIndex].arabic}
                      </span>
                    </div>

                    {/* Arabic Text & Translation Display */}
                    <div className="space-y-2 text-right">
                      <p className="text-2xl sm:text-3xl text-emerald-100 font-serif leading-loose tracking-wide pt-2">
                        {sampleSurahs[activeSurahIndex].sampleAyat}
                      </p>
                      <p className="text-left text-xs text-stone-300 italic pt-1 leading-relaxed">
                        "{sampleSurahs[activeSurahIndex].translation}"
                      </p>
                    </div>

                    {/* Audio Player Bar Simulation */}
                    <div className="p-2.5 rounded-lg bg-stone-900/90 border border-stone-700/80 flex items-center justify-between gap-3 text-xs">
                      <button
                        onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                        className="px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center gap-1.5 cursor-pointer text-[11px]"
                      >
                        {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        <span>{isPlayingAudio ? "Jeda Tilawah" : "Putar Audio Ayat"}</span>
                      </button>

                      <div className="flex items-center gap-2 text-[11px] text-stone-400 font-mono">
                        <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Misyari Rasyid (Qari)</span>
                      </div>
                    </div>
                  </div>

                  {/* App Feature Highlights in Mockup */}
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-stone-400 pt-1">
                    <span className="p-1.5 rounded bg-stone-800 border border-stone-700">✓ 114 Surah</span>
                    <span className="p-1.5 rounded bg-stone-800 border border-stone-700">✓ Tanpa Iklan</span>
                    <span className="p-1.5 rounded bg-stone-800 border border-stone-700">✓ Tajwid Color</span>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

        {/* 2. SECONDARY PROJECTS (3 DISTINCT VISUAL CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {secondaryProjects.map((proj) => {
            return (
              <div
                key={proj.id}
                className="bg-white rounded-3xl border border-stone-200 p-6 shadow-2xs hover:shadow-md hover:border-stone-300 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  
                  {/* Card Header: Category & Symbol */}
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-3xl p-2.5 rounded-2xl bg-stone-50 border border-stone-100">
                      {proj.symbol}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-700 uppercase">
                      {proj.category.split("&")[0]}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 tracking-tight">
                      {proj.name}
                    </h3>
                    <p className="text-xs text-stone-500 font-normal mt-1 leading-relaxed">
                      {proj.tagline}
                    </p>
                  </div>

                  {/* Custom Mini Visual Previews Depending on Project Type */}
                  {proj.id === "kasir-amma-ika" && (
                    <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100/90 space-y-2 text-xs">
                      <div className="flex items-center justify-between text-[11px] font-mono font-bold text-blue-900">
                        <span>SIMULASI STRUK KASIR</span>
                        <Receipt className="w-3.5 h-3.5 text-blue-700" />
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-blue-100 font-mono text-[10px] space-y-1 text-stone-700">
                        <div className="flex justify-between">
                          <span>1x Beras Ramos 5kg</span>
                          <span>Rp 70.000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2x Minyak Goreng 1L</span>
                          <span>Rp 34.000</span>
                        </div>
                        <div className="pt-1 border-t border-dashed border-stone-200 flex justify-between font-bold text-stone-900">
                          <span>Total Belanja</span>
                          <span>Rp 104.000</span>
                        </div>
                        <div className="flex justify-between text-emerald-700">
                          <span>Kembalian (Bayar 150rb)</span>
                          <span>Rp 46.000</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {proj.id === "warung-amma-ika" && (
                    <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100/90 space-y-2 text-xs">
                      <div className="flex items-center justify-between text-[11px] font-mono font-bold text-amber-900">
                        <span>KATALOG ETALASE ONLINE</span>
                        <ShoppingCart className="w-3.5 h-3.5 text-amber-700" />
                      </div>
                      <div className="grid grid-cols-2 gap-1.5 font-mono text-[10px]">
                        <div className="p-2 rounded-lg bg-white border border-amber-100 text-stone-800">
                          <p className="font-bold">Beras &amp; Minyak</p>
                          <span className="text-amber-700 text-[9px]">Stok Tersedia</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white border border-amber-100 text-stone-800">
                          <p className="font-bold">Gula &amp; Tepung</p>
                          <span className="text-amber-700 text-[9px]">Harga Terupdate</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {proj.id === "dompetku" && (
                    <div className="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-100/90 space-y-2 text-xs">
                      <div className="flex items-center justify-between text-[11px] font-mono font-bold text-purple-900">
                        <span>TRACKER ARUS KAS</span>
                        <TrendingUp className="w-3.5 h-3.5 text-purple-700" />
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-purple-100 space-y-1.5 text-[10px] font-mono">
                        <div className="flex items-center justify-between">
                          <span className="text-stone-500">Pemasukan</span>
                          <span className="font-bold text-emerald-600">+Rp 2.500.000</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-stone-500">Pengeluaran</span>
                          <span className="font-bold text-rose-600">-Rp 1.150.000</span>
                        </div>
                        <div className="w-full bg-stone-100 rounded-full h-1.5 overflow-hidden flex">
                          <div className="bg-emerald-500 h-full w-[65%]" />
                          <div className="bg-rose-500 h-full w-[35%]" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Problem Statement snippet */}
                  <div className="text-xs text-stone-600 leading-relaxed font-normal bg-stone-50 p-3 rounded-xl border border-stone-100">
                    <strong className="text-stone-900 block font-semibold mb-0.5">Tujuan Pembuatan:</strong>
                    {proj.problem}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 text-[10px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Bottom Action Cluster */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <a
                      href={proj.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold inline-flex items-center gap-1 transition-all shadow-2xs"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs transition-colors"
                      title="Lihat GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer inline-flex items-center gap-1"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Detail</span>
                  </button>
                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Project Detail Modal / Drawer */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="w-full max-w-xl bg-white rounded-3xl border border-stone-200 shadow-2xl overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 bg-stone-50 border-b border-stone-200 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <span className="text-3xl p-3 rounded-2xl bg-white border border-stone-200 shadow-2xs">
                  {selectedProject.symbol}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-stone-900">
                      {selectedProject.name}
                    </h3>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                      {selectedProject.category}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 font-medium mt-0.5">
                    {selectedProject.tagline}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl text-stone-400 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto custom-scrollbar">
              
              {/* Problem */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 block">
                  Latar Belakang &amp; Masalah Nyata
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-stone-50 p-4 rounded-2xl border border-stone-200/80">
                  {selectedProject.problem}
                </p>
              </div>

              {/* What I Built */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 block">
                  Solusi &amp; Yang Saya Bangun
                </span>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200/70">
                  {selectedProject.whatIBuilt}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 block">
                  Fitur Utama
                </span>
                <ul className="space-y-1.5">
                  {selectedProject.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 block">
                  Teknologi &amp; Tools Yang Digunakan
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 text-xs font-mono font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Links */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-end gap-3">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-white border border-stone-300 hover:bg-stone-100 text-stone-800 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Lihat Repository GitHub</span>
              </a>
              <a
                href={selectedProject.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <span>Buka Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
