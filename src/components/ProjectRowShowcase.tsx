import { useState, useRef, useEffect, MouseEvent } from "react";
import { motion, useSpring, AnimatePresence } from "motion/react";
import { ArrowUpRight, ExternalLink, Github, Sparkles, Eye } from "lucide-react";
import Magnetic from "./Magnetic";

interface ProjectRowData {
  id: string;
  title: string;
  role: string;
  category: string;
  year: string;
  previewColor: string;
  summary: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageMockup: string;
}

const PROJECT_ROWS: ProjectRowData[] = [
  {
    id: "ngajiku",
    title: "NgajiKu",
    role: "Lead Creator & Developer",
    category: "PWA Web App · Islamic Education",
    year: "2026",
    previewColor: "from-blue-900 to-indigo-950",
    summary: "Platform Web Al-Qur'an 30 Juz digital modern dengan audio murattal per ayat, penanda tilawah harian, dan offline support.",
    tags: ["React", "TypeScript", "Tailwind", "Audio API"],
    liveUrl: "https://ngajiku.vercel.app",
    githubUrl: "https://github.com/azbhy/ngajiku-quran-app",
    imageMockup: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "warung-amma-ika",
    title: "Warung Amma Ika",
    role: "Digital Operations & Web",
    category: "E-Commerce Sederhana · UMKM Lokal",
    year: "2025",
    previewColor: "from-emerald-900 to-stone-950",
    summary: "Katalog produk sembako dan kebutuhan harian dengan integrasi pemesanan WhatsApp langsung untuk memodernisasi warung keluarga.",
    tags: ["Product Catalog", "WhatsApp API", "UMKM", "Responsive"],
    liveUrl: "https://warung-amma-ika.vercel.app",
    githubUrl: "https://github.com/azbhy/warung-amma-ika",
    imageMockup: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "kasir-amma-ika",
    title: "Kasir Toko (POS)",
    role: "System Designer",
    category: "Point of Sale · Kasir Cepat",
    year: "2025",
    previewColor: "from-stone-900 to-amber-950",
    summary: "Aplikasi kasir web responsif untuk pencatatan transaksi cepat, kalkulasi kembalian otomatis, dan cetak struk nota belanja.",
    tags: ["POS System", "Thermal Receipt", "Kalkulasi Kasir"],
    liveUrl: "https://kasir-amma-ika.vercel.app",
    githubUrl: "https://github.com/azbhy/kasir-amma-ika",
    imageMockup: "https://images.unsplash.com/photo-1556742049-0a67e557b637?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "dompetku",
    title: "DompetKu Ledger",
    role: "Creator",
    category: "Financial Tracker · Personal",
    year: "2024",
    previewColor: "from-sky-900 to-slate-950",
    summary: "Buku kas digital ringkas untuk mencatat arus kas masuk dan keluar kegiatan kemahasiswaan serta kas operasional organisasi.",
    tags: ["Finance Tracker", "Cash Flow", "Analytics"],
    liveUrl: "https://dompetku-tracker.vercel.app",
    githubUrl: "https://github.com/azbhy/dompetku",
    imageMockup: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
  }
];

interface ProjectRowShowcaseProps {
  onSelectProject?: (id: string) => void;
}

export default function ProjectRowShowcase({ onSelectProject }: ProjectRowShowcaseProps) {
  const [activeProject, setActiveProject] = useState<ProjectRowData | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse follower coordinates
  const mouseX = useSpring(0, { damping: 20, stiffness: 200, mass: 0.1 });
  const mouseY = useSpring(0, { damping: 20, stiffness: 200, mass: 0.1 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActiveProject(null)}
      className="relative w-full py-4 text-left select-none"
    >
      {/* Editorial Table Header */}
      <div className="hidden md:grid grid-cols-12 pb-3 border-b border-stone-300/80 text-[11px] font-mono uppercase tracking-wider text-stone-500 font-semibold">
        <div className="col-span-4">Proyek / Solusi</div>
        <div className="col-span-4">Kategori & Bidang</div>
        <div className="col-span-2">Peran</div>
        <div className="col-span-1">Tahun</div>
        <div className="col-span-1 text-right">Aksi</div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-stone-200/80">
        {PROJECT_ROWS.map((project) => {
          const isHovered = activeProject?.id === project.id;
          return (
            <div
              key={project.id}
              onMouseEnter={() => setActiveProject(project)}
              onClick={() => onSelectProject?.(project.id)}
              className={`group relative py-6 sm:py-8 transition-all duration-300 cursor-pointer flex flex-col md:grid md:grid-cols-12 md:items-center gap-3 ${
                isHovered ? "bg-stone-200/40 px-3 sm:px-4 rounded-xl -mx-3 sm:-mx-4" : ""
              }`}
            >
              {/* Col 1: Title & Summary */}
              <div className="md:col-span-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 group-hover:translate-x-2 group-hover:text-blue-700 transition-all duration-300">
                    {project.title}
                  </span>
                </div>
                <p className="text-xs text-stone-500 font-mono mt-1 line-clamp-1 group-hover:text-stone-700">
                  {project.summary}
                </p>
              </div>

              {/* Col 2: Category & Tags */}
              <div className="md:col-span-4">
                <p className="text-xs font-mono font-semibold text-stone-700">
                  {project.category}
                </p>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Col 3: Role */}
              <div className="md:col-span-2 text-xs font-mono text-stone-600">
                {project.role}
              </div>

              {/* Col 4: Year */}
              <div className="md:col-span-1 text-xs font-mono font-semibold text-stone-500">
                {project.year}
              </div>

              {/* Col 5: Actions */}
              <div className="md:col-span-1 flex items-center justify-end gap-2">
                <Magnetic strength={0.4}>
                  <div className="w-9 h-9 rounded-full bg-stone-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-xs">
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </Magnetic>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Hover Project Modal (Dennis Snellenberg Style) */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            style={{
              left: mouseX,
              top: mouseY,
              translateX: "-50%",
              translateY: "-50%"
            }}
            className="pointer-events-none absolute z-30 hidden lg:block w-80 rounded-2xl overflow-hidden shadow-2xl border border-stone-800/80 bg-stone-950 text-white"
          >
            {/* Preview Image */}
            <div className="relative h-44 w-full overflow-hidden bg-stone-900">
              <img
                src={activeProject.imageMockup}
                alt={activeProject.title}
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
              
              {/* Circular "VIEW" badge center indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-4 py-2 rounded-full bg-blue-600 text-white font-mono text-xs font-bold shadow-lg flex items-center gap-1.5 uppercase tracking-wider backdrop-blur-xs">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Lihat Solusi</span>
                </div>
              </div>
            </div>

            {/* Info Footer */}
            <div className="p-3.5 bg-stone-950 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold font-serif text-white">{activeProject.title}</p>
                <p className="text-[10px] font-mono text-stone-400">{activeProject.category}</p>
              </div>
              <span className="text-xs font-mono text-blue-400 font-bold">{activeProject.year}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
