import Image from "next/image";

function ProjectsCards(){
  /* -------------------------------------------------------------------------- */
  /*          Budgeting, purchasing, warehouse, risk management, erafos         */
  /* -------------------------------------------------------------------------- */

  const projects = [
    {
      id: 1,
      image: "/Assets/budget.png",
      title: "Budgeting",
    },
    {
      id: 2,
      image: "/Assets/payment-method.png",
      title: "Purchasing",
    },
    {
      id: 3,
      image: "/Assets/grocery.png",
      title: "Vendor Portal",
    },
    {
      id: 4,
      image: "/Assets/risk-assessment.png",
      title: "Erajaya Risk Management",
    },
    {
      id: 5,
      image: "/Assets/erafos.jpeg",
      title: "Erafos",
    },
    {
      id: 6,
      image: "/Assets/threads-app-icon.png",
      title: "Simple Thread(Meta) Clone",
    },
    {
      id: 7,
      image: "/Assets/eraversary2.png",
      title: "Eraversary",
    },
  ];


  return (
    <>
      {projects.map((project) => (
        <div className="w-80 mx-auto py-2" key={project.id}>
          <div className="bg-white border border-teal-500 rounded-lg shadow w-full dark:bg-gray-800 dark:border-teal-500 hover:scale-110">
            <div className="flex items-center justify-center">
              <Image
                className="rounded-t-lg w-full h-64 object-cover"
                style={{ aspectRatio: "16/9" }}
                src={project.image}
                alt=""
                width={100}
                height={100}
                // key={project.id}
              />
            </div>
            <div className="p-5">
              <h5
                className="mb-2 text-2xl font-bold tracking-tight whitespace-nowrap overflow-x-hidden"
                // key={project.id}
              >
                {project.title}
              </h5>
              {/* <p className="mb-3 font-normal text-gray-700 dark:text-white">
                {project.description}
              </p> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectsCards;