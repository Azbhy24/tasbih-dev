import { Code2, ExternalLink, Github, AlertCircle, Sparkles, CheckCircle2, TrendingUp, Layers } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="projects" className="relative py-24 border-t border-indigo-950/40 bg-[#030306]">
      {/* Background glowing elements */}
      <div className="absolute top-[35%] left-0 w-[500px] h-[500px] bg-indigo-500/[0.015] rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-[25%] right-0 w-[500px] h-[500px] bg-indigo-500/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] font-bold tracking-widest text-indigo-300 uppercase bg-zinc-950 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
            STUDI KASUS PROYEK
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Produk Digital & Sistem Otomatisasi
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Penyelesaian masalah nyata melalui kode bersih, rekayasa prompt AI cerdas, integrasi webhook cloud, dan otomatisasi workflow nir-entri.
          </p>
          <div className="w-12 h-[1px] bg-indigo-500/20 mx-auto mt-6" />
        </div>

        {/* Project Case Studies Container */}
        <motion.div
          id="project-case-studies-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                id={`project-studi-kasus-${project.id}`}
                variants={itemVariants}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Left column / Right Column text details (reversing even or odd) */}
                <div className={`lg:col-span-12 flex flex-col gap-6 text-left`}>
                  
                  {/* Category, Title & Subtitle */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-indigo-950/40 pb-6">
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{project.featuredSymbol || "💻"}</span>
                        <span className="text-[9px] font-mono font-bold tracking-widest text-indigo-300 bg-[#030306] border border-indigo-500/35 px-2.5 py-1 rounded-full uppercase">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
                        {project.title}
                        <span className="text-sm font-normal text-zinc-500 font-mono tracking-normal block sm:inline">
                          // {project.subtitle}
                        </span>
                      </h3>
                    </div>

                    {/* External Buttons */}
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          id={`proj-github-${project.id}`}
                          className="p-3 bg-zinc-950/40 hover:bg-zinc-900/80 text-zinc-400 hover:text-white rounded border border-indigo-500/20 transition-colors flex items-center justify-center cursor-pointer"
                          title="View Source on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        id={`proj-demo-${project.id}`}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[10px] tracking-widest uppercase rounded transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-indigo-550/15 border-none"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Core Content Layout split into Problem, Solution and Results */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-2">
                    
                    {/* Problem Column */}
                    <div className="lg:col-span-4 p-6 rounded-xl border border-rose-500/10 bg-zinc-950/20 hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-start relative overflow-hidden">
                      <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
                        <AlertCircle className="w-4 h-4" />
                        <span>Masalah (The Problem)</span>
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed font-sans">
                        {project.problem}
                      </p>
                    </div>

                    {/* Solution Column */}
                    <div className="lg:col-span-4 p-6 rounded-xl border border-indigo-500/15 bg-zinc-950/20 hover:border-indigo-500/35 transition-all duration-300 flex flex-col justify-start relative overflow-hidden">
                      <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Solusi Digital (The Solution)</span>
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed font-sans">
                        {project.solution}
                      </p>
                    </div>

                    {/* Outcome / Results Column */}
                    <div className="lg:col-span-4 p-6 rounded-xl border border-indigo-500/15 bg-zinc-950/20 hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
                          <TrendingUp className="w-4 h-4" />
                          <span>Hasil & Manfaat (The Impact)</span>
                        </div>
                        <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 leading-relaxed list-inside">
                          {project.results.map((result, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2">
                              <span className="text-indigo-500 font-semibold shrink-0 mt-0.5">•</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>

                  {/* Tech stack badges footer section */}
                  <div className="flex flex-wrap items-center gap-2 mt-4 px-4 py-3 bg-indigo-950/10 border border-indigo-500/15 rounded-xl">
                    <span className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-indigo-400 uppercase tracking-widest mr-2">
                      <Layers className="w-3.5 h-3.5" />
                      Tech Built:
                    </span>
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-zinc-950/40 hover:bg-indigo-950/20 border border-indigo-500/20 hover:border-indigo-500/35 rounded text-xs font-mono text-[#F3F4F6] hover:text-indigo-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
