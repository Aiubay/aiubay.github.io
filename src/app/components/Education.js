const education = [
  { degree: "S1 Informatika", school: "Universitas Contoh", year: "2016 — 2020" },
  { degree: "SMA IPA", school: "SMA Contoh", year: "2013 — 2016" },
];

export default function Education() {
  return (
    <div id="education" className="card edu-card c4 r3 reveal">
      <h4>Education</h4>
      <div className="edu-list">
        {education.map((e, i) => (
          <div className="edu-item" key={i}>
            <div className="edu-degree">{e.degree}</div>
            <div className="edu-school">{e.school}</div>
            <div className="edu-year">{e.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
