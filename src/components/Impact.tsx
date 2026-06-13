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

  return (
    <span ref={ref} className="font-sans font-extrabold text-white text-5xl sm:text-6xl tracking-tight block">
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
    <section id="impact" className="relative py-24 border-t border-zinc-950 bg-[#09090B] overflow-hidden">
      {/* background glow balls */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-widest text-zinc-450 uppercase bg-zinc-900 px-3.5 py-1.5 rounded border border-zinc-805">
            METRIK DAMPAK
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pencapaian Riil dalam Data dan Angka
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Aktivitas organisasi, implementasi produk digital, digitalisasi ritel, serta bimbingan naskah akademis dihitung berdasarkan data kerja nyata.
          </p>
          <div className="w-12 h-[1px] bg-zinc-800 mx-auto mt-6" />
        </div>

        {/* Stats Grid Layout with premium card designs and light hover indices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const IconComponent = iconMapping[stat.icon] || Award;
            return (
              <motion.div
                key={stat.id}
                id={`stat-card-${stat.id}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="group relative p-8 rounded-xl border border-zinc-800 overflow-hidden flex flex-col justify-between h-full bg-zinc-900/10 hover:bg-zinc-900/20 transition-all"
              >
                {/* Background Ambient Gradient on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-zinc-800/[0.02] to-transparent blur-md pointer-events-none group-hover:from-white/[0.02] transition-colors" />

                <div className="flex items-start justify-between mb-6">
                  {/* Glowing Icon holder */}
                  <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">AZBHY</span>
                </div>

                {/* Animated metrics */}
                <div className="text-left mt-auto">
                  <AnimatedCount value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  <h3 className="text-white text-sm font-bold font-sans tracking-wide mt-3 group-hover:text-white transition-colors">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
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
