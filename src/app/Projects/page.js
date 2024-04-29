import ProjectsCards from "./projectsCard";

function Projects(){

    /* -------------------------------------------------------------------------- */
    /*          Budgeting, purchasing, warehouse, risk management, erafos         */
    /* -------------------------------------------------------------------------- */

    return (
      <section>
        <div>
          <h1 className="text-5xl text-center p-10 dark:text-white">
            {" "}
            Projects{" "}
          </h1>
          <p className="text-md py-2 leading-8">
            <span className="text-teal-500">What i did is ... </span>
            Develop, maintain, debug, and deploy web applications are some of
            the tasks + that I handle on a daily basis. Some examples of my
            projects are:
          </p>
          <div className="grid grid-cols-2 lg:gap-2 text-md py-10 md:gap-4">
            <ProjectsCards />
          </div>
        </div>
      </section>
    );
}

export default Projects;