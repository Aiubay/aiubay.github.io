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
            Pictures{" "}
          </h1>
          <p className="text-md py-2 leading-8">
            <span className="text-teal-500">What i did is ... </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
            nulla eget tortor laoreet imperdiet in non lorem. Aenean non
            suscipit ligula.
          </p>
          <p className="text-md py-2 leading-8">
            <span className="text-teal-500">Another Paragraph </span>
            Vivamus non congue eros. Quisque ut finibus lectus. Nulla feugiat
            quis lorem in tincidunt. Sed vel consequat sem, faucibus viverra
            eros. Integer ultricies augue felis. Donec vitae urna vel sem
            posuere pharetra. Aliquam porttitor pharetra tortor eget semper.
          </p>
          <div className="grid grid-cols-2 lg:gap-2 text-md py-10 dark:text-teal-500 md:gap-4">
            <ProjectsCards />
          </div>
        </div>
      </section>
    );
}

export default Projects;