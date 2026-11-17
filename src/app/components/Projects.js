const featuredProjects = [
  {
    id: 'budgeting',
    category: 'Finance & planning',
    title: 'Budgeting App',
    description: 'Company-wide expense tracking and departmental budget management in one web platform.',
    tags: ['JavaScript', 'Laravel', 'MySQL'],
    platform: 'Web application',
    focus: 'Keeping departmental budgets and company expenses in view.',
    capabilities: ['Track expenses across the company', 'Manage budgets by department'],
    accent: 'violet',
  },
  {
    id: 'purchasing',
    category: 'Procurement & operations',
    title: 'Purchasing System',
    description: 'An internal purchasing workflow connecting purchase orders, approvals, and vendor transactions.',
    tags: ['JavaScript', 'CodeIgniter', 'MySQL'],
    platform: 'Web application',
    focus: 'Bringing the steps of company purchasing into a connected workflow.',
    capabilities: ['Handle company purchase orders', 'Support approval workflows', 'Manage vendor transactions'],
    accent: 'cyan',
  },
  {
    id: 'sales',
    category: 'Sales & reporting',
    title: 'Sales Management System',
    description: 'Web and mobile tools that help internal sales teams track leads, commissions, and revenue.',
    tags: ['React', 'PHP', 'SQL'],
    platform: 'Web & mobile application',
    focus: 'Giving internal sales teams access to their client and revenue information.',
    capabilities: ['Track active client leads', 'Track sales commissions', 'View revenue metrics'],
    accent: 'emerald',
  },
];

const otherProjects = [
  {
    title: 'Refund System',
    category: 'ERP & operations',
    description: 'Internal refund workflow built on Odoo.',
    tags: ['Odoo', 'Python'],
  },
  {
    title: 'Vendor Portal',
    category: 'Supplier operations',
    description: 'A supplier-facing portal for product inventory, incoming store orders, and compliance records.',
    tags: ['CodeIgniter', 'MySQL'],
  },
  {
    title: 'Risk Management App',
    category: 'Internal tooling',
    description: 'Operational risk logging, vulnerability scoring, and mitigation tracking for company teams.',
    tags: ['Laravel', 'PostgreSQL'],
  },
  {
    title: 'Lucky Draw',
    category: 'Live events',
    description: 'Random prize selection and distribution for live corporate promotional events.',
    tags: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Simple Thread Clone',
    category: 'Personal project',
    description: 'A full-stack practice project exploring social feeds, user interactions, and database updates.',
    tags: ['React', 'Firebase'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section c12" aria-labelledby="projects-title">
      <div className="work-heading reveal">
        <div>
          <p className="section-eyebrow">From workflows to working software</p>
          <h2 id="projects-title" className="section-title">Selected work<span aria-hidden="true">.</span></h2>
        </div>
        <p className="section-intro">A closer look at the enterprise tools I build, followed by more work across web and mobile.</p>
      </div>

      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <article className={`card featured-project project-${project.accent} reveal`} key={project.id} aria-labelledby={`${project.id}-title`}>
            <div className="project-topline">
              <span className="project-category">{project.category}</span>
              <span className="project-number" aria-hidden="true">0{index + 1}</span>
            </div>
            <div className="project-overview">
              <p className="project-platform">{project.platform}</p>
              <h3 className="proj-name" id={`${project.id}-title`}>{project.title}</h3>
              <p className="proj-desc">{project.description}</p>
            </div>
            <ul className="tag-row" aria-label={`${project.title} technologies`}>
              {project.tags.map(tag => <li className="tag tc" key={tag}>{tag}</li>)}
            </ul>
            <details className="project-brief" name="project-brief">
              <summary>
                <span>Read project brief<span className="sr-only"> for {project.title}</span></span>
                <span className="brief-toggle" aria-hidden="true">+</span>
              </summary>
              <div className="brief-content">
                <h4>The focus</h4>
                <p>{project.focus}</p>
                <h4>Application scope</h4>
                <ul>{project.capabilities.map(capability => <li key={capability}>{capability}</li>)}</ul>
                <p className="brief-note">Internal company project · No public demo linked.</p>
              </div>
            </details>
          </article>
        ))}
      </div>

      <div className="more-work-heading reveal">
        <h3>More things I&apos;ve built</h3>
        <p>Internal tools, event experiences, and side projects.</p>
      </div>
      <div className="other-projects">
        {otherProjects.map(project => (
          <article className="card secondary-project reveal" key={project.title}>
            <p className="project-category">{project.category}</p>
            <h4 className="proj-name">{project.title}</h4>
            <p className="proj-desc">{project.description}</p>
            <ul className="tag-row" aria-label={`${project.title} technologies`}>
              {project.tags.map(tag => <li className="tag tv" key={tag}>{tag}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <p className="private-work-note reveal">Most of this work supports internal company operations. These briefs outline application scope; private repositories and product screenshots are not shared here.</p>
    </section>
  );
}
