import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '../components/ThemeToggle';
import Footer from '../components/Footer';
import { SITE_URL, SITE_DESCRIPTION } from '../site';

export const metadata = {
  title: 'Resume',
  description: 'View or download the resume of Achmad Irjik Ubay, Full Stack Developer.',
  alternates: { canonical: `${SITE_URL}Resume/` },
  openGraph: {
    title: 'Resume',
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}Resume/`,
    images: [`${SITE_URL}og-image.png`],
  },
};

export default function Resume() {
  return (
    <>
      <div className="mesh"><div className="blob b1" /><div className="blob b2" /></div>
      <div className="dot-grid" />

      <nav className="cyber-nav" aria-label="Main">
        <Link href="/" className="brand">DevBay</Link>
        <div className="nav-right">
          <ThemeToggle />
          <Link className="btn-nav" href="/">← Back to portfolio</Link>
        </div>
      </nav>

      <main className="resume-main" id="main-content" tabIndex={-1}>
        <div className="card resume-head">
          <h1 className="resume-title">Resume</h1>
          <p className="resume-sub">View it below, open it in a new tab, or download a copy.</p>
          <div className="resume-actions">
            <a
              className="btn-big btn-grad"
              href="/Assets/resume.pdf"
              download="Achmad Irjik Ubay - Resume.pdf"
            >
              Download PDF
            </a>
            <a
              className="btn-big btn-ghost"
              href="/Assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in new tab ↗
            </a>
          </div>
        </div>

        <div className="card resume-frame">
          <a
            className="resume-preview"
            href="/Assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Achmad Irjik Ubay's resume PDF in a new tab"
          >
            <Image
              src="/Assets/resume-preview.png"
              alt="Preview of Achmad Irjik Ubay's one-page resume"
              width={1588}
              height={2246}
              sizes="(max-width: 768px) 100vw, 760px"
            />
          </a>
        </div>
        <p className="resume-hint">Click the preview to open the full PDF in a new tab.</p>
      </main>

      <Footer />
    </>
  );
}
