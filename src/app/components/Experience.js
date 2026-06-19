import { useEffect, useState } from 'react';
import { SiLaravel, SiGo, SiMysql, SiPostgresql, SiReact, SiNextdotjs } from 'react-icons/si';

const experience = {
  role: "Software Developer",
  company: "Erajaya Swasembada, Tbk.",
  date: "2020 — Present",
  description: [
      "Engineered scalable backend applications using Laravel, Node.js, and modern ecosystems",
      "Architected optimized relational database structures to ensure maximum query performance",
      "Refactored legacy architectures, significantly minimizing bugs and system downtime",
      "Managed seamless application deployments across staging and production environments",
      "Spearheaded development of internal tooling to optimize operational workflows",
    ],
};

const coreTech = [
  { name: 'Golang', icon: <SiGo />, color: '#00ADD8' },
  { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20' },
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#FFFFFF' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
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
        <h4>Work Experience</h4>
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
        <h4>Primary Stack</h4>
        <div className="tech-bento-grid">
          {coreTech.map((tech) => (
            <div className="tech-bento-item" key={tech.name}>
              <span className="t-icon" style={{ color: tech.color }}>{tech.icon}</span>
              <span className="t-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card edu-card c3 r2 reveal">
        <h4>Education</h4>
        <div className="edu-list">
          <div className="edu-item">
            <div className="edu-degree">S1 Sistem Informasi</div>
            <div className="edu-school">Universitas Telkom</div>
            <div className="edu-year">2015 — 2019</div>
          </div>
        </div>
      </div>

      <div className="card location-card c3 r2 reveal">
        <h4>Based In</h4>
        <div className="loc-info">
          <div className="loc-city">Jakarta, ID 🇮🇩</div>
          <div className="loc-tz">WIB (UTC+7)</div>
        </div>
        <div className="loc-time">{time || "02:30 PM"}</div>
      </div>
    </>
  );
}
