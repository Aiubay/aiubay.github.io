'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  { id: 'top', label: 'Home' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('top');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const els = links.map(l => document.getElementById(l.id)).filter(Boolean);
    const updateBoundary = () => {
      if (window.scrollY <= 2) setActive('top');
      else if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) setActive('contact');
    };
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
        updateBoundary();
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    els.forEach(el => io.observe(el));
    window.addEventListener('scroll', updateBoundary, { passive: true });
    updateBoundary();
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', updateBoundary);
    };
  }, []);

  useEffect(() => {
    const onKey = e => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const items = links.map(l => (
    <a
      key={l.id}
      href={`#${l.id}`}
      className={`np${active === l.id ? ' active' : ''}`}
      aria-current={active === l.id ? 'true' : undefined}
      onClick={() => setOpen(false)}
    >
      {l.label}
    </a>
  ));

  return (
    <nav className="cyber-nav" aria-label="Main">
      <a href="#top" className="brand">DevBay</a>
      <div className="nav-center">{items}</div>
      <div className="nav-right">
        <ThemeToggle />
        <div className="avail-pill"><span className="avail-dot" />Open to work</div>
        <a className="btn-nav" href="/Resume">Resume</a>
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(o => !o)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && <div id="mobile-menu" className="mobile-menu">{items}</div>}
    </nav>
  );
}
