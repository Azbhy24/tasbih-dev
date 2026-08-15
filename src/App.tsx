import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import profileData from "./data/portfolio.json";
import formalPhoto from "./assets/images/jas_formal_1781399324196.jpg";

type Project = (typeof profileData.projects)[number];

const nav = [
  ["work", "Work"],
  ["about", "About"],
  ["journey", "Journey"],
  ["contact", "Contact"],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const featured = profileData.projects.find((p) => p.featured) ?? profileData.projects[0];
  const otherProjects = profileData.projects.filter((p) => p.id !== featured.id);

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="wordmark" onClick={() => go("top")} aria-label="Back to top">
            TASBIH<span>.</span>
          </button>
          <div className="desktop-nav">
            {nav.map(([id, label]) => <button key={id} onClick={() => go(id)}>{label}</button>)}
          </div>
          <button className="menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {menuOpen && <div className="mobile-nav">{nav.map(([id, label]) => <button key={id} onClick={() => go(id)}>{label}</button>)}</div>}
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">EDUCATION MANAGEMENT × DIGITAL SOLUTIONS</p>
            <h1>Building useful things<br /><em>with purpose.</em></h1>
            <p className="hero-lead">Saya Tasbih — lulusan Manajemen Pendidikan Islam yang menggabungkan pemahaman tata kelola pendidikan dengan kemampuan membangun solusi digital praktis.</p>
            <div className="hero-actions">
              <button className="btn btn-dark" onClick={() => go("work")}>Lihat karya <ArrowUpRight size={16} /></button>
              <button className="text-btn" onClick={() => go("contact")}>Hubungi saya</button>
            </div>
            <div className="hero-meta"><span>IAIN Parepare · 2022–2026</span><span>Pinrang / Parepare, Sulawesi Selatan</span></div>
          </div>
          <div className="hero-visual">
            <div className="photo-frame"><img src={formalPhoto} alt="Tasbih" /></div>
            <div className="photo-note"><span>01</span><strong>TASBIH</strong><small>Digital problem solver</small></div>
          </div>
        </section>

        <section className="statement-band">
          <div className="container statement-grid">
            <span className="section-index">01 / POSITION</span>
            <p>“Teknologi bukan tujuan akhir. Saya menggunakannya untuk membuat pekerjaan nyata menjadi lebih sederhana, rapi, dan mudah digunakan.”</p>
          </div>
        </section>

        <section id="work" className="section container">
          <div className="section-head"><div><span className="section-index">02 / SELECTED WORK</span><h2>Things I’ve built.</h2></div><p>Proyek nyata dari kebutuhan pendidikan, retail, sampai pengelolaan keuangan.</p></div>
          <article className="featured-card">
            <div className="featured-info"><span className="tag">FEATURED · 01</span><h3>{featured.name}</h3><p className="project-category">{featured.category}</p><p>{featured.whatIBuilt}</p><div className="chips">{featured.techStack.slice(0, 5).map((t) => <span key={t}>{t}</span>)}</div><div className="project-actions"><button className="btn btn-dark" onClick={() => setSelected(featured)}>Case study <ArrowUpRight size={15} /></button><a href={featured.liveDemo} target="_blank" rel="noreferrer" className="text-btn">Live demo ↗</a></div></div>
            <div className="featured-preview"><div className="browser-bar"><i></i><i></i><i></i><span>ngajiku-iota.vercel.app</span></div><div className="app-preview"><div className="preview-kicker">NGajiKu</div><div className="arabic">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div><div className="preview-line"></div><div className="preview-line short"></div><div className="preview-stat"><b>114</b><span>Surah lengkap</span></div></div></div>
          </article>
          <div className="project-grid">{otherProjects.map((project) => <ProjectCard key={project.id} project={project} onOpen={() => setSelected(project)} />)}</div>
        </section>

        <section id="about" className="section section-alt">
          <div className="container about-grid"><div><span className="section-index">03 / ABOUT</span><h2>Education first.<br /><em>Digital by practice.</em></h2></div><div className="about-copy"><p>{profileData.bio.aboutBrief}</p><div className="facts"><div><small>FOCUS</small><strong>Education Management</strong></div><div><small>STRENGTH</small><strong>Administration & Systems</strong></div><div><small>APPROACH</small><strong>Simple · Useful · Practical</strong></div></div></div></div>
        </section>

        <section id="journey" className="section container"><div className="section-head"><div><span className="section-index">04 / JOURNEY</span><h2>Experience that compounds.</h2></div><p>Pengalaman organisasi, administrasi, riset, dan operasional yang membentuk cara saya bekerja.</p></div><div className="timeline">{profileData.experience.slice(0, 4).map((item) => <div className="timeline-item" key={item.id}><span>{item.year}</span><div><p className="project-category">{item.type}</p><h3>{item.role}</h3><strong>{item.organization}</strong><p>{item.description}</p></div></div>)}</div></section>

        <section className="skills-strip"><div className="container skills-row"><span>CAPABILITIES</span><b>Administration</b><b>Project Coordination</b><b>Digital Prototyping</b><b>Web Development</b><b>Data & Documentation</b></div></section>

        <section id="contact" className="contact container"><span className="section-index">05 / CONTACT</span><h2>Have a useful problem<br /><em>to solve?</em></h2><p>Terbuka untuk peluang kerja, project, kolaborasi, dan percakapan yang relevan.</p><div className="contact-actions"><a className="btn btn-dark" href="mailto:tasbih@example.com"><Mail size={16} /> Email me</a><a className="icon-btn" href="https://github.com/Azbhy24" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a><a className="icon-btn" href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a></div></section>
      </main>

      <footer><div className="container footer-inner"><span>© 2026 Tasbih / AzBhy</span><span>Small steps. Consistent progress.</span></div></footer>
      {showTop && <button className="top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><ArrowUp size={17} /></button>}

      {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className="modal" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)}><X size={18} /></button><span className="tag">CASE STUDY</span><h2>{selected.name}</h2><p className="project-category">{selected.category}</p><div className="case-block"><small>PROBLEM</small><p>{selected.problem}</p></div><div className="case-block"><small>SOLUTION</small><p>{selected.whatIBuilt}</p></div><div className="chips">{selected.techStack.map((t) => <span key={t}>{t}</span>)}</div><a className="btn btn-dark" href={selected.liveDemo} target="_blank" rel="noreferrer">Open project <ArrowUpRight size={15} /></a></div></div>}
    </div>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return <article className="project-card"><div className="project-number">{project.symbol} / {project.category}</div><h3>{project.name}</h3><p>{project.tagline}</p><div className="chips">{project.techStack.slice(0, 3).map((t) => <span key={t}>{t}</span>)}</div><div className="card-actions"><button onClick={onOpen}>View case study <ArrowUpRight size={14} /></button><a href={project.liveDemo} target="_blank" rel="noreferrer">Live ↗</a></div></article>;
}
