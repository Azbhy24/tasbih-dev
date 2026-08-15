import { useState } from "react";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import almetPhoto from "../assets/images/almet_mahasiswa_1781399345497.jpg";
import formalPhoto from "../assets/images/jas_formal_1781399324196.jpg";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { bio } = portfolioData;
  const [photoType, setPhotoType] = useState<"formal" | "almet">("formal");
  const currentPhoto = photoType === "formal" ? formalPhoto : almetPhoto;

  return (
    <section id="hero" className="relative overflow-hidden pt-8 sm:pt-14 pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative min-h-[620px] grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4">
          <div className="absolute left-0 top-6 hidden lg:block text-[10px] font-mono tracking-[0.28em] text-stone-400 [writing-mode:vertical-rl]">
            PERSONAL PORTFOLIO / 2026
          </div>

          <div className="lg:col-span-8 relative z-10 pt-6 lg:pt-0">
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-10 bg-stone-900" />
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-stone-500">{bio.kicker}</span>
            </div>

            <h1 className="text-[clamp(4.4rem,11vw,9.5rem)] font-black leading-[0.78] tracking-[-0.075em] text-stone-950">
              TASBIH<span className="text-blue-600">.</span>
            </h1>

            <div className="mt-9 max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-7 items-start">
              <p className="text-xl sm:text-2xl leading-tight tracking-tight text-stone-800 font-medium">
                Lulusan <span className="text-stone-400">Manajemen Pendidikan Islam</span> yang sedang memulai perjalanan profesional.
              </p>
              <div className="sm:border-l sm:border-stone-200 sm:pl-6">
                <p className="text-sm leading-relaxed text-stone-500 max-w-sm">{bio.subheadline}</p>
                <button onClick={() => onNavigate("projects")} className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-stone-900 cursor-pointer">
                  Lihat karya saya
                  <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 relative z-20 flex justify-center lg:justify-end lg:-mt-10">
            <div className="relative w-[min(78vw,350px)]">
              <div className="absolute -top-7 -right-5 z-30 rotate-6 px-3 py-2 bg-white border border-stone-200 shadow-sm text-[10px] font-mono text-stone-700">
                <Sparkles className="inline w-3 h-3 mr-1 text-blue-600" /> OPEN TO OPPORTUNITIES
              </div>

              <div className="absolute -bottom-7 -left-8 z-30 -rotate-3 bg-stone-950 text-white px-4 py-3 shadow-xl">
                <div className="text-[9px] uppercase tracking-[0.18em] text-stone-400">Education</div>
                <div className="text-sm font-semibold mt-1">IAIN Parepare · MPI</div>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden bg-stone-200 border border-stone-300 shadow-2xl">
                <img src={currentPhoto} alt="Tasbih" className="w-full h-full object-cover object-top transition-all duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/35 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <div className="text-lg font-bold tracking-tight">Tasbih</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-white/75">Fresh Graduate · 2026</div>
                  </div>
                  <button onClick={() => setPhotoType(photoType === "formal" ? "almet" : "formal")} className="rounded-full border border-white/50 bg-black/20 backdrop-blur-sm px-3 py-1.5 text-[10px] font-medium cursor-pointer hover:bg-black/40 transition-colors">
                    {photoType === "formal" ? "Almamater →" : "Formal →"}
                  </button>
                </div>
              </div>

              <div className="absolute -right-12 top-1/2 hidden sm:block -translate-y-1/2 [writing-mode:vertical-rl] text-[9px] font-mono tracking-[0.3em] text-stone-400">
                SMALL STEPS · CONSISTENT PROGRESS
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-stone-200 pt-4 text-[10px] font-mono uppercase tracking-[0.16em] text-stone-400">
          <span>Education · Administration · Digital</span>
          <button onClick={() => onNavigate("about")} className="flex items-center gap-2 hover:text-stone-900 transition-colors cursor-pointer">
            Scroll to explore <span className="text-base leading-none">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}
