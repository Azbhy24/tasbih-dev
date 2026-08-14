import { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";
import { portfolioData } from "../data/portfolio";
import { ArrowUpRight } from "lucide-react";

function AnimatedCount({ value, suffix = "", prefix = "" }: { value: number | string; suffix?: string; prefix?: string }) {
  const isNumeric = typeof value === "number" || (!isNaN(Number(value)) && value !== "");
  const numericValue = isNumeric ? Number(value) : 0;

  const [count, setCount] = useState<number | string>(isNumeric ? 0 : value);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    let start = 0;
    const end = numericValue;
    if (end === 0) return;

    const duration = 1500;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      
      // outQuad
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
    <span ref={ref} className="font-mono text-inherit">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Impact() {
  const metrics = [
    {
      index: "01",
      numberDisplay: "500+",
      isNumeric: true,
      numVal: 500,
      suffix: "+",
      title: "SKU Ritel & Transaksi Terkelola",
      context: "Warung Sembako Amma' Ika",
      desc: "Menata sistem pencatatan stok, kasir harian, dan pembukuan piutang pelanggan dengan rekap digital.",
    },
    {
      index: "02",
      numberDisplay: "178",
      isNumeric: true,
      numVal: 178,
      suffix: "",
      title: "Alumni Terkoordinasi",
      context: "Ketua IKA MA Biharul Ulum Ma'arif",
      desc: "Memfasilitasi tata kelola komunikasi alumni, arsip keanggotaan, dan koordinasi program lintas wilayah.",
    },
    {
      index: "03",
      numberDisplay: "5",
      isNumeric: true,
      numVal: 5,
      suffix: "",
      title: "Produk Web & Sistem Digital Live",
      context: "DompetKu, Kasir, NgajiKu, Warung, Portofolio",
      desc: "Aplikasi web fungsional yang dibangun dengan React, TypeScript, Tailwind CSS, dan Firebase.",
    },
    {
      index: "04",
      numberDisplay: "Submitin",
      isNumeric: false,
      title: "Layanan Jasa Akademik Aktif",
      context: "Platform Submitin.id",
      desc: "Menyediakan layanan cek plagiasi Turnitin, cek AI, dan parafrase naskah untuk mahasiswa & akademisi.",
    },
  ];

  return (
    <section id="impact" className="relative py-28 sm:py-36 border-t border-neutral-800/80 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
              02 / PENCAPAIAN & DATA RIIL
            </span>
            <span className="h-px w-8 bg-neutral-800" />
            <span className="font-mono text-xs text-neutral-500 uppercase hidden sm:inline">
              REKAM KERJA TERVERIFIKASI
            </span>
          </div>
          <span className="font-mono text-[11px] text-neutral-500 uppercase">
            UPDATE 2026
          </span>
        </div>

        {/* Lead Statement */}
        <div className="max-w-3xl mb-16">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Angka Nyata dari Praktik Lapangan & Pengembangan Digital.
          </h2>
          <p className="mt-4 text-neutral-400 text-base leading-relaxed">
            Kinerja diukur bukan dari klaim abstrak, melainkan dari rekam jejak pengelolaan organisasi, pembukuan bisnis ritel, survei lapangan, dan sistem web yang beroperasi.
          </p>
        </div>

        {/* Large Typography Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {metrics.map((item) => (
            <div
              key={item.index}
              id={`metric-item-${item.index}`}
              className="flex flex-col justify-between pt-6 border-t border-neutral-800 group hover:border-neutral-600 transition-colors"
            >
              <div>
                {/* Index marker */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-neutral-500 uppercase">
                    METRIC // {item.index}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-emerald-400 transition-colors" />
                </div>

                {/* Oversized Number Typography */}
                <div className="text-5xl sm:text-6xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter leading-none my-3">
                  {item.isNumeric ? (
                    <AnimatedCount value={item.numVal} suffix={item.suffix} />
                  ) : (
                    <span className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold font-mono tracking-tight text-neutral-100">
                      Submitin<span className="text-emerald-400">.id</span>
                    </span>
                  )}
                </div>

                {/* Title and Context */}
                <h3 className="text-base font-bold text-neutral-200 mt-4 leading-snug">
                  {item.title}
                </h3>
                <span className="font-mono text-[11px] text-emerald-400/90 block mt-1 uppercase tracking-wider">
                  {item.context}
                </span>

                {/* Description */}
                <p className="text-xs text-neutral-400 mt-2.5 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>STATUS</span>
                <span className="text-neutral-400">Aktif & Terverifikasi</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
