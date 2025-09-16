import Image from "next/image";
import Link from "next/link";

function ProjectsCards() {
  const projects = [
    {
      id: 1,
      image: "/Assets/budget.png",
      title: "Budgeting App",
      description: "A web application to manage and track budgets for various projects.",
      tags: ["JavaScript", "Laravel", "MySql"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 2,
      image: "/Assets/payment-method.png",
      title: "Purchasing System",
      description: "A system to streamline the purchasing process and manage vendors.",
      tags: ["JavaScript", "CodeIgniter", "MySQL"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 3,
      image: "/Assets/grocery.png",
      title: "Vendor Portal",
      description: "A portal for vendors to manage their products and orders.",
      tags: ["Code Igniter", "MySQL"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 4,
      image: "/Assets/risk-assessment.png",
      title: "Risk Management App",
      description: "A tool for assessing and managing risks.",
      tags: ["Laravel", "PostgreSQL"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 5,
      image: "/Assets/erafos.jpeg",
      title: "Sales Management System",
      description: "An internal application for Sales Management.",
      tags: ["React Js", "PHP", "SQL"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 6,
      image: "/Assets/threads-app-icon.png",
      title: "Simple Thread(Meta) Clone",
      description: "A clone of the popular social media app, Threads.",
      tags: ["React Js", "Firebase"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 7,
      image: "/Assets/eraversary2.png",
      title: "Lucky Draw",
      description: "A lucky draw application for an event.",
      tags: ["JavaScript", "HTML", "CSS"],
      liveUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <>
      {projects.map((project) => (
        <div
          className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg dark:bg-gray-800 border-teal-500 border transition-transform duration-300 ease-in-out 2xl:hover:scale-105"
          key={project.id}
        >
          <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-gray-200 dark:bg-gray-700 bg-clip-border">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-contain"
              width={400}
              height={225}
            />
          </div>
          <div className="p-6 flex flex-col">
            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 dark:text-white break-words mb-2">
              {project.title}
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 dark:bg-teal-700 dark:text-teal-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectsCards;