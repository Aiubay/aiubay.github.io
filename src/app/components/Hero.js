import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div className="card hero-card c5 r4 reveal">
        <div className="hero-eyebrow">Full Stack Developer · Indonesia</div>
        <div className="hero-name"><span>Achmad Irjik Ubay</span></div>
        <p className="hero-desc">A Full Stack Developer with 5+ years building internal tools, enterprise systems, mobile and web applications — from database design to deployment.</p>
      </div>

      <div className="card photo-card c4 r4 reveal">
        <Image src="/Assets/Pic.png" alt="Achmad Irjik Ubay" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
        <div className="photo-overlay" />
      </div>

      <div className="card stat-card c3 r2 reveal">
        <div className="stat-num gv">5+</div>
        <div className="stat-lbl">Years experience</div>
      </div>

      <div className="card cta-card c3 r2 reveal">
        <a className="btn-big btn-grad" href="/Assets/resume.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
      </div>
    </>
  );
}
