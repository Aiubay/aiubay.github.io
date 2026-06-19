'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('in'), i * 60);
        }
      });
    }, { threshold: 0.08 });

    targets.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="mesh"><div className="blob b1" /><div className="blob b2" /><div className="blob b3" /></div>
      <div className="dot-grid" />

      <Navbar />

      <main className="bento-main">
        <div className="grid">
          <Hero />
          <Marquee />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
