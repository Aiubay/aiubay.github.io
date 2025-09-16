import ProjectsCards from "./projectsCard";

function Projects() {
  /* -------------------------------------------------------------------------- */
  /*          Budgeting, purchasing, warehouse, risk management, erafos         */
  /* -------------------------------------------------------------------------- */

  return (
    <section id="projects">
      <div>
        <h1 className="text-5xl text-center py-10 dark:text-white">
          {" "}
          Projects{" "}
        </h1>
        <p className="text-md py-2 leading-8 text-xl">
          <span className="text-teal-500">What i did is ... </span>
          Develop, maintain, debug, and deploy web applications are some of the
          tasks that I handle on a daily basis. Some examples of my projects
          are:
        </p>
        <div className="sm:grid sm:grid-cols-1 md:grid md:grid-cols-4 auto-cols-max lg:gap-2 sm:gap-2 md:gap-4 2xl:gap-10">
          <ProjectsCards />
        </div>
      </div>
    </section>
  );
}

export default Projects;
