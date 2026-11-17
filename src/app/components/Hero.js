import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div className="card hero-card c5 r4 reveal">
        <div className="hero-eyebrow">Full Stack Developer · Indonesia</div>
        <h1 className="hero-name"><span>Achmad Irjik Ubay</span></h1>
        <p className="hero-desc">I build the tools behind everyday business — enterprise web and mobile applications for budgeting, purchasing, and sales, from database design to deployment.</p>
        <div className="hero-actions">
          <a className="btn-big btn-grad" href="#projects">View my work <span aria-hidden="true">↗</span></a>
          <a className="btn-big btn-ghost" href="#contact">Contact me</a>
        </div>
      </div>

      <div className="card photo-card c4 r4 reveal">
        <Image src="/Assets/Pic.webp" sizes="(max-width: 768px) 100vw, 33vw" alt="Achmad Irjik Ubay" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
        <div className="photo-overlay" />
      </div>

      <div className="card stat-card c3 r2 reveal">
        <div className="stat-num gv">5+</div>
        <div className="stat-lbl">Years experience</div>
      </div>

      <div className="card cta-card c3 r2 reveal">
        <p className="cv-label">The full picture</p>
        <p className="cv-desc">Experience, skills, and background in one place.</p>
        <a className="btn-big btn-ghost" href="/Assets/resume.pdf" download="Achmad Irjik Ubay - Resume.pdf">Download CV <span aria-hidden="true">↓</span></a>
      </div>
    </>
  );
}
