'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains('light'));
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle('light', next);
    try { localStorage.setItem('theme', next ? 'light' : 'dark'); } catch (e) {}
  };

  return (
    <button
      className="theme-btn"
      onClick={toggle}
      aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      {light ? '🌙' : '☀'}
    </button>
  );
}
