import { Sparkles, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Currently() {
  const { currently } = portfolioData;

  return (
    <section className="py-8 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="p-6 sm:p-7 rounded-2xl bg-blue-50/50 border border-blue-100 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 shadow-2xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 block">
              Currently
            </span>
            <p className="text-sm font-medium text-slate-800 mt-0.5">
              {currently}
            </p>
          </div>
        </div>

        <a
          href="https://github.com/azbhy24"
          target="_blank"
          rel="noreferrer"
          className="self-start sm:self-auto shrink-0 px-4 py-2 rounded-lg bg-white hover:bg-slate-50 border border-blue-200 text-slate-700 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-2xs"
        >
          <span>Explore GitHub</span>
          <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
        </a>
      </div>
    </section>
  );
}
