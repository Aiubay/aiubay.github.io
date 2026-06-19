import Image from "next/image";

const projects = [
  {
    id: 1,
    image: "/Assets/budget.png",
    title: "Budgeting App",
    description:
      "A secure web platform built for tracking expenses and managing departmental budgets across the whole company.",
    tags: ["JavaScript", "Laravel", "MySQL"],
  },
  {
    id: 2,
    image: "/Assets/payment-method.png",
    title: "Purchasing System",
    description:
      "An internal app designed to handle company purchase orders, approval workflows, and vendor transactions.",
    tags: ["JavaScript", "CodeIgniter", "MySQL"],
  },
  {
    id: 3,
    image: "/Assets/Sales-Management-Software-1.webp",
    title: "Sales Management System",
    description:
      "A web and mobile system built for internal sales teams to track active client leads, commissions, and revenue metrics.",
    tags: ["React Js", "PHP", "SQL"],
  },
  {
    id: 4,
    image: "/Assets/grocery.png",
    title: "Vendor Portal",
    description:
      "A portal for external suppliers to update their product inventory, view incoming store orders, and log compliances.",
    tags: ["CodeIgniter", "MySQL"],
  },
  {
    id: 5,
    image: "/Assets/risk-assessment.png",
    title: "Risk Management App",
    description:
      "A company tool used to log operational risks, calculate vulnerability scores, and assign mitigation steps to teams.",
    tags: ["Laravel", "PostgreSQL"],
  },
  {
    id: 6,
    image: "/Assets/eraversary2.png",
    title: "Lucky Draw",
    description:
      "A web application built to handle random prize selection and distributions during live corporate promotional events.",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 7,
    image: "/Assets/threads-app-icon.png",
    title: "Simple Thread Clone",
    description:
      "A full-stack social media practice project focusing on instant message feeds, user interactions, and database state updates.",
    tags: ["React Js", "Firebase"],
  },
];

export default function Projects() {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className={`card proj-card reveal c3 r4`}
          id="projects"
        >
          <div className="proj-img-wrap">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="proj-name">{project.title}</div>
          <p className="proj-desc">{project.description}</p>
          <div className="tag-row">
            {project.tags.map((tag) => (
              <span className="tag tc" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
      <div className="card many-more-card c3 r4 reveal">
        <div className="mm-wrapper">
          <div className="mm-visual-wrap">
            <div className="mm-dots">
              <span className="mm-dot-indicator tv"></span>
              <span className="mm-dot-indicator tc"></span>
              <span className="mm-dot-indicator te"></span>
            </div>
          </div>

          <div className="proj-name">...and many more</div>
          <p className="proj-desc">
            Internal administrative systems, data migration scripts, and private company workflows.
          </p>

          <div className="tag-row">
            <span className="tag tv">Private Repos</span>
          </div>
        </div>
      </div>
    </>
  );
}
