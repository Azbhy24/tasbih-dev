import { motion } from "motion/react";

interface MarqueeTickerProps {
  items?: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export default function MarqueeTicker({
  items = [
    "TASBIH",
    "S1 MANAJEMEN PENDIDIKAN ISLAM",
    "IAIN PAREPARE",
    "FRESH GRADUATE 2026",
    "NGAJIKU APP",
    "OPERASIONAL DIGITAL",
    "ADMINISTRASI MADRASAH",
    "KASIR AMMA IKA"
  ],
  direction = "left",
  speed = 25,
  className = ""
}: MarqueeTickerProps) {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`w-full overflow-hidden whitespace-nowrap select-none py-3 border-y border-stone-300/80 bg-stone-900 text-white ${className}`}>
      <motion.div
        className="inline-flex items-center gap-8 text-xs sm:text-sm font-mono tracking-widest uppercase font-semibold"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed
        }}
      >
        {repeatedItems.map((text, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="hover:text-blue-400 transition-colors">{text}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
