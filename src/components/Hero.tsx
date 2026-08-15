import { useState } from "react";
import { ArrowDown, FolderGit2, Sparkles } from "lucide-react";
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
    <section 
      id="hero" 
      className="pt-10 sm:pt-16 pb-16 sm:pb-24 max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Text & CTAs (7 Cols) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-700">
            <span>{bio.kicker}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Management Student <br className="hidden sm:inline" />
            <span className="text-blue-600">Building Useful Digital Things.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            {bio.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate("projects")}
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-sm hover:shadow active:scale-[0.98] cursor-pointer flex items-center gap-2"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>View Projects</span>
            </button>

            <button
              onClick={() => onNavigate("about")}
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 font-medium text-sm transition-all shadow-2xs active:scale-[0.98] cursor-pointer flex items-center gap-2"
            >
              <span>About Me</span>
              <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

          {/* Quick Academic Tag */}
          <div className="pt-3 border-t border-slate-200/60 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>{bio.educationSummary}</span>
          </div>

        </div>

        {/* Right Column: Natural Photo Presentation (5 Cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-[320px] sm:max-w-[340px] bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
            
            {/* Photo Container */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100">
              <img
                src={currentPhoto}
                alt="Tasbih"
                className="w-full h-full object-cover object-top transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle badge on photo */}
              <div className="absolute bottom-3 left-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white px-3 py-2 rounded-lg text-xs flex items-center justify-between">
                <div>
                  <p className="font-semibold leading-none">Tasbih</p>
                  <p className="text-[10px] text-slate-300 mt-0.5">IAIN Parepare</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/30 text-blue-200 font-medium">
                  MPI 2022
                </span>
              </div>
            </div>

            {/* Photo Toggle Buttons */}
            <div className="mt-3 flex items-center justify-between gap-2 p-1 bg-slate-50 rounded-lg border border-slate-200/60 text-xs font-medium">
              <button
                onClick={() => setPhotoType("formal")}
                className={`flex-1 py-1.5 rounded-md text-center transition-all cursor-pointer ${
                  photoType === "formal"
                    ? "bg-white text-slate-900 shadow-2xs font-semibold"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Jas Formal
              </button>
              <button
                onClick={() => setPhotoType("almet")}
                className={`flex-1 py-1.5 rounded-md text-center transition-all cursor-pointer ${
                  photoType === "almet"
                    ? "bg-white text-slate-900 shadow-2xs font-semibold"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Almamater
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
