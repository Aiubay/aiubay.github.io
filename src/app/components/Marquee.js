const techs = ['PHP','Laravel','Golang','MySQL','PostgreSQL','Git','JavaScript','Next.js','React','CodeIgniter','Firebase'];

export default function Marquee() {
  return (
    <div className="card marquee-card c12 r1 reveal">
      <div className="mq-track">
        {techs.map((t, i) => (
          <span key={i}>{i > 0 && <span className="dot">◆</span>}{t}</span>
        ))}
        {techs.map((t, i) => (
          <span key={`d${i}`}><span className="dot">◆</span>{t}</span>
        ))}
      </div>
    </div>
  );
}
