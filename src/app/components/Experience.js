import { useEffect, useState } from 'react';
import { SiLaravel, SiGo, SiMysql, SiPostgresql, SiReact, SiNextdotjs, SiOdoo } from 'react-icons/si';

const experience = {
  role: "Software Developer",
  company: "Erajaya Swasembada, Tbk.",
  date: "2020 — Present",
  description: [
      "Own the internal systems that run daily operations across Erajaya — Budgeting, Purchasing, Warehouse, and Risk Management",
      "Build and maintain Laravel and Node.js services over MySQL and PostgreSQL data models",
      "Design and optimize relational schemas and queries for performance and data integrity",
      "Refactor legacy modules to reduce bugs and downtime, and manage staging and production releases",
      "Translate operational workflows into reliable, maintainable internal tools with business teams",
    ],
};

const coreTech = [
  { name: 'Golang', icon: <SiGo />, color: '#00ADD8' },
  { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20' },
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'var(--fg)' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
  { name: 'Odoo', icon: <SiOdoo />, color: '#0F766E' },
];

export default function Experience() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: true };
      setTime(now.toLocaleTimeString('en-US', options));
    };
    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="experience" className="card exp-card c5 r4 reveal">
        <h2>Work Experience</h2>
        <div className="exp-role">{experience.role}</div>
        <div className="exp-co">{experience.company}</div>
        <div className="exp-date">{experience.date}</div>
        <div className="exp-list">
          {experience.description.map((item, i) => (
            <div className="exp-li" key={i}>{item}</div>
          ))}
        </div>
      </div>

      <div className="card tech-grid-card c4 r4 reveal">
        <h2>Primary Stack</h2>
        <div className="tech-bento-grid">
          {coreTech.map((tech) => (
            <div className="tech-bento-item" key={tech.name}>
              <span className="t-icon" style={{ color: tech.color }} aria-hidden="true">{tech.icon}</span>
              <span className="t-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card edu-card c3 r2 reveal">
        <h2>Education</h2>
        <div className="edu-list">
          <div className="edu-item">
            <div className="edu-degree">S1 Sistem Informasi</div>
            <div className="edu-school">Universitas Telkom</div>
            <div className="edu-year">2015 — 2019</div>
          </div>
        </div>
      </div>

      <div className="card location-card c3 r2 reveal">
        <h2>Based In</h2>
        <div className="loc-info">
          <div className="loc-city">Jakarta, ID 🇮🇩</div>
          <div className="loc-tz">WIB (UTC+7)</div>
        </div>
        <div className="loc-time">{time || "02:30 PM"}</div>
      </div>
    </>
  );
}
