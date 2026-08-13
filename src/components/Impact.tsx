import { useEffect, useState, useRef } from "react";
import { Users, Code, Award, FileText, TrendingUp } from "lucide-react";
import { motion, useInView } from "motion/react";
import { portfolioData } from "../data/portfolio";

function AnimatedCount({ value, suffix = "", prefix = "" }: { value: number | string; suffix?: string; prefix?: string }) {
  const isNumeric = typeof value === "number" || (!isNaN(Number(value)) && value !== "");
  const numericValue = isNumeric ? Number(value) : 0;

  const [count, setCount] = useState<number | string>(isNumeric ? 0 : value);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    let start = 0;
    const end = numericValue;
    if (end === 0) return;

    const duration = 2000; // 2 seconds
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      
      // Easing function (outQuad)
      const easeProgress = progressPercentage * (2 - progressPercentage);
      
      const currentCount = Math.floor(easeProgress * (end - start) + start);
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue, isNumeric]);

  const strValue = String(value);
  const isLongText = strValue.length > 6;

  return (
    <span
      ref={ref}
      className={`font-sans font-extrabold text-inherit tracking-tight block ${
        isLongText ? "text-2xl sm:text-3xl lg:text-4xl" : "text-4xl sm:text-5xl lg:text-6xl"
      }`}
    >
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Impact() {
  const { stats } = portfolioData;

  const iconMapping: { [key: string]: any } = {
    Users: Users,
    Code: Code,
    TrendingUp: TrendingUp,
    FileText: FileText,
  };

  return (
    <section id="impact" className="relative py-24 border-t border-slate-800/80 bg-slate-900/50 overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-wider text-indigo-300 uppercase bg-indigo-950/80 px-3.5 py-1.5 rounded-full border border-indigo-500/30 shadow-[0_0_12px_rgba(99,102,241,0.2)]">
            METRIK DAMPAK & HASIL
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
            Pencapaian Riil dalam Data dan Angka
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-normal">
            Aktivitas organisasi, implementasi produk digital, digitalisasi ritel, serta pengelolaan administrasi dihitung berdasarkan data kerja nyata.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, sIdx) => {
            const IconComponent = iconMapping[stat.icon] || Award;

            return (
              <motion.div
                key={stat.id}
                id={`stat-card-${stat.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: sIdx * 0.08 }}
                className="group relative p-8 rounded-2xl border border-slate-800/90 overflow-hidden flex flex-col justify-between h-full bg-slate-900/90 backdrop-blur-xl hover:border-indigo-500/60 hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] cursor-default"
              >
                {/* Subtle card top glow ribbon */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:border-indigo-400/60 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <div className="text-left mt-auto">
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 drop-shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                    <AnimatedCount value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <h3 className="text-white text-base font-extrabold font-sans tracking-tight mt-3">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed font-medium">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
