import Image from 'next/image';

const getTagClassName = (tag) => {
  const t = tag.toLowerCase();
  if (t.includes('laravel') || t.includes('php') || t.includes('codeigniter')) return 'tv';
  if (t.includes('mysql') || t.includes('sql') || t.includes('css')) return 'tc';
  if (t.includes('react') || t.includes('postgresql')) return 'tr';
  if (t.includes('javascript') || t.includes('firebase') || t.includes('html')) return 'ta';
  return 'te';
};

export default function ProjectCard({ img, name, desc, tags = [], span }) {
  return (
    <div className={`card proj-card ${span} reveal`}>
      <div className="proj-img-wrap">
        <Image src={img} alt={name} width={200} height={80} style={{ objectFit: 'contain', padding: '.5rem' }} />
      </div>
      <div>
        <div className="proj-name">{name}</div>
        {desc && <div className="proj-desc">{desc}</div>}
        <div className="tag-row">
          {tags.map((label) => (
            <span className={`tag ${getTagClassName(label)}`} key={label}>{label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
