import React, { useState } from "react";
import { portfolioData } from "../data/portfolio";
import { TrendingUp, Users, Code, Award, BarChart3, FileText, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function Impact() {
  const { stats } = portfolioData;
  const [selectedStatId, setSelectedStatId] = useState<string>(stats[0]?.id || "");

  const iconMap: { [key: string]: any } = {
    FileText: FileText,
    Users: Users,
    Code: Code,
    Award: Award,
  };

  const activeStat = stats.find(s => s.id === selectedStatId) || stats[0];

  return (
    <section 
      id="impact" 
      className="relative py-16 sm:py-24 md:py-28 border-t border-[#1a283e] bg-[#050a12] text-[#e2e8f0] overflow-hidden"
    >
      {/* Visual Signature: Clean High-Precision Technical Coordinates */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Chapter 05 Marker */}
        <div className="flex items-center justify-between border-b border-[#1a283e] pb-3 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-sky-400 font-bold bg-[#0c182a] border border-sky-500/30 px-2 py-0.5 rounded">
              CHAPTER 05
            </span>
            <span className="text-[#1a283e] font-mono">/</span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-300 font-semibold">
              PERFORMANCE & EVIDENCE
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-sky-400/80 uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5 text-sky-400" />
            <span>VERIFIKASI DATA NYATA</span>
          </div>
        </div>

        {/* Section Headline & Compressed 1-liner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-8 sm:mb-12 text-left items-start">
          <div className="lg:col-span-8">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Statistik Kinerja & Verifikasi Angka.
            </h2>
          </div>
          <div className="lg:col-span-4 border-l border-[#1a283e] pl-4 text-slate-400 text-xs leading-relaxed font-normal">
            Metrik operasional riil dari pengelolaan barang ritel harian, keanggotaan alumni, serta deployment aplikasi web aktif.
          </div>
        </div>

        {/* Visual Signature: 4-Column Typographic Data Blocks (Click to inspect) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left mb-6">
          {stats.map((item, idx) => {
            const Icon = iconMap[item.icon] || TrendingUp;
            const isSelected = selectedStatId === item.id;
            return (
              <button
                key={item.id}
                id={`stat-block-${item.id}`}
                onClick={() => setSelectedStatId(item.id)}
                className={`p-4 sm:p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[160px] ${
                  isSelected 
                    ? "bg-[#0c1a2e] border-sky-400 shadow-md"
                    : "bg-[#070e1a] border-[#1a283e] hover:border-slate-600"
                }`}
              >
                <div>
                  {/* Top Index & Icon */}
                  <div className="flex items-center justify-between mb-2 font-mono text-xs">
                    <span className="text-sky-400 font-bold">
                      DATA // 0{idx + 1}
                    </span>
                    <Icon className="w-4 h-4 text-sky-400" />
                  </div>

                  {/* Massive Typographic Metric */}
                  <div 
                    className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tighter leading-none my-2 truncate"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.prefix}{item.value}{item.suffix}
                  </div>

                  {/* Label */}
                  <span className="font-mono text-xs uppercase tracking-wider text-sky-300 font-bold block mt-1">
                    {item.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stat Inspector Detail Banner */}
        {activeStat && (
          <div className="p-4 sm:p-5 rounded-xl bg-[#091424] border border-[#1a283e] text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-sky-400 font-bold block">
                  KONTEKS DATA TERVERIFIKASI:
                </span>
                <p className="text-xs sm:text-sm text-slate-200 font-normal mt-0.5">
                  {activeStat.description}
                </p>
              </div>
            </div>
            <span className="font-mono text-[11px] text-slate-400 shrink-0 bg-[#060c17] px-3 py-1 rounded border border-[#1a283e]">
              Status: Valid & Aktif
            </span>
          </div>
        )}

      </div>
    </section>
  );
}
