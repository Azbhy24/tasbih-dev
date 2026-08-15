import { useState } from "react";
import { 
  ExternalLink, 
  Github, 
  Layers, 
  X, 
  Info, 
  CheckCircle2, 
  HelpCircle,
  FolderGit2
} from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { ProjectData } from "../types";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section 
      id="projects" 
      className="py-16 sm:py-24 border-t border-slate-200/80 max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="space-y-10 text-left">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Works</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Things I've Built.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Beberapa project yang saya buat untuk belajar, bereksperimen, dan menyelesaikan masalah nyata.
          </p>
        </div>

        {/* Projects Grid: 2 Columns on Tablet/Desktop, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-5">
                
                {/* Card Top: Symbol, Name & Quick Tag */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      {proj.symbol}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                        {proj.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {proj.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Problem & What I Built */}
                <div className="space-y-3 pt-1 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="font-semibold text-slate-700 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                      <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
                      Problem
                    </span>
                    <p className="text-slate-600 leading-relaxed">
                      {proj.problem}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100/80 space-y-1">
                    <span className="font-semibold text-blue-900 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      What I Built
                    </span>
                    <p className="text-slate-700 leading-relaxed">
                      {proj.whatIBuilt}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <a
                    href={proj.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-2xs active:scale-[0.98]"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-medium inline-flex items-center gap-1.5 transition-all active:scale-[0.98]"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-600" />
                    <span>GitHub</span>
                  </a>
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer inline-flex items-center gap-1"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Detail</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2 rounded-xl bg-slate-50 border border-slate-100">
                  {selectedProject.symbol}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {selectedProject.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {selectedProject.tagline}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Latar Belakang &amp; Masalah
                </span>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  {selectedProject.problem}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Solusi &amp; Yang Saya Bangun
                </span>
                <p className="text-sm text-slate-800 leading-relaxed bg-blue-50/50 p-3.5 rounded-xl border border-blue-100/80">
                  {selectedProject.whatIBuilt}
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Teknologi Yang Digunakan
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Links */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Lihat Repository</span>
              </a>
              <a
                href={selectedProject.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <span>Buka Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
