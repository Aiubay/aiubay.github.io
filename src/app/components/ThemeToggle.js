'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') { setDark(false); document.documentElement.classList.add('light'); }
  }, []);

  const toggle = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('light');
    localStorage.setItem('theme', dark ? 'light' : 'dark');
  };

  return (
    <button className="theme-btn" onClick={toggle} aria-label="Toggle theme">
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
