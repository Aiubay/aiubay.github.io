function ProjectsCards(){
  /* -------------------------------------------------------------------------- */
  /*          Budgeting, purchasing, warehouse, risk management, erafos         */
  /* -------------------------------------------------------------------------- */

  const projects = [
    {
      image: "/Xianyun.jpeg",
      title: "Budgeting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nulla eget tortor laoreet imperdiet in non lorem. Aenean non suscipit ligula. ",
    },
    {
      image: "/test.png",
      title: "Purchasing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nulla eget tortor laoreet imperdiet in non lorem. Aenean non suscipit ligula. ",
    },
    {
      image: "/room.jpg",
      title: "Warehouse",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nulla eget tortor laoreet imperdiet in non lorem. Aenean non suscipit ligula. ",
    },
    {
      image: "/reddit_recap_card_9.png",
      title: "Erajaya Risk Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nulla eget tortor laoreet imperdiet in non lorem. Aenean non suscipit ligula. ",
    },
    {
      image: "/randomi.jpeg",
      title: "Erafos",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nulla eget tortor laoreet imperdiet in non lorem. Aenean non suscipit ligula. ",
    },
  ];

  return (
    <>
      {projects.map((project) => (
        <div className="w-80 mx-auto py-2">
          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-110">
            <div className="flex items-center justify-center">
              <img
                className="rounded-t-lg w-full h-56 object-cover"
                style={{aspectRatio: "16/9"}}
                src={project.image}
                alt=""
              />
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectsCards;