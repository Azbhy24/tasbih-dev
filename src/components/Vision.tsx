export default function Vision() {
  const milestones = [
    {
      step: "01",
      tag: "TARGET KARIR",
      title: "Digital Operations & Systems Specialist",
      desc: "Menjadi bagian dari tim profesional untuk merancang aplikasi web, otomatisasi alur kerja, dan arsitektur sistem informasi terintegrasi.",
      period: "Jangka Pendek"
    },
    {
      step: "02",
      tag: "STUDI LANJUT",
      title: "Melanjutkan Magister S2 (Beasiswa LPDP)",
      desc: "Melanjutkan studi magister Manajemen Pendidikan melalui jalur beasiswa LPDP dengan fokus pada pengembangan sistem & teknologi pendidikan.",
      period: "Jangka Menengah"
    },
    {
      step: "03",
      tag: "INOVASI PRODUK",
      title: "Pengembangan Ekosistem Digital AzBhy",
      desc: "Memperluas jangkauan platform digital AzBhy untuk memfasilitasi kebutuhan operasional UMKM, digitalisasi ritel, dan efisiensi administrasi organisasi.",
      period: "Jangka Panjang"
    }
  ];

  return (
    <section id="vision" className="relative py-16 sm:py-24 md:py-32 border-t border-neutral-800/80 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Marker */}
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-10">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-emerald-400 font-bold">
            06 / FILOSOFI & ROADMAP MASA DEPAN
          </span>
          <span className="h-px w-6 sm:w-8 bg-neutral-800" />
        </div>

        {/* Large Typography Personal Manifesto Statement */}
        <div className="max-w-5xl mb-12 sm:mb-20 text-left">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-neutral-500 block mb-3 sm:mb-4">
            PERSONAL MANIFESTO // FILOSOFI TEKNOLOGI
          </span>
          <blockquote 
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-neutral-100 tracking-tight leading-snug sm:leading-[1.2]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            “Teknologi bukan sekadar alat atau baris kode, melainkan sarana untuk membuat pekerjaan, pendidikan, dan sistem menjadi lebih efektif, terstruktur, dan berdaya guna bagi sesama.”
          </blockquote>
          <div className="mt-4 sm:mt-6 flex items-center gap-3">
            <span className="h-px w-8 sm:w-10 bg-emerald-400" />
            <cite className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-neutral-300 font-bold not-italic">
              Tasbih (Aby Bhy) — S1 Manajemen Pendidikan Islam
            </cite>
          </div>
        </div>

        {/* 3-Column Roadmap Milestones */}
        <div className="border-t border-neutral-800 pt-8 sm:pt-12">
          <div className="flex items-center justify-between mb-6 sm:mb-8 text-left">
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-neutral-400">
              ROADMAP STRATEGIS (2026 – 2028)
            </span>
            <span className="font-mono text-[10px] sm:text-xs text-neutral-500 uppercase">
              KOMITMEN
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {milestones.map((item) => (
              <div 
                key={item.step}
                className="border-t border-neutral-800 pt-4 sm:pt-6 text-left flex flex-col justify-between group hover:border-neutral-600 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="font-mono text-xs font-bold text-emerald-400">
                      STEP // {item.step}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                      {item.period}
                    </span>
                  </div>

                  <span className="font-mono text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">
                    {item.tag}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-400 mt-2 sm:mt-2.5 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 sm:mt-6 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                  <span>STATUS</span>
                  <span className="text-neutral-400">On Track</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
