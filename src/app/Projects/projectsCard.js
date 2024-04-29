import { FaThreads } from "react-icons/fa6";

function ProjectsCards(){
  /* -------------------------------------------------------------------------- */
  /*          Budgeting, purchasing, warehouse, risk management, erafos         */
  /* -------------------------------------------------------------------------- */

  const projects = [
    {
      image: "/Assets/budget.png",
      title: "Budgeting",
    },
    {
      image: "/Assets/payment-method.png",
      title: "Purchasing",
    },
    {
      image: "/Assets/grocery.png",
      title: "Vendor Portal",
    },
    {
      image: "/Assets/risk-assessment.png",
      title: "Erajaya Risk Management",
    },
    {
      image: "/Assets/erafos.jpeg",
      title: "Erafos",
    },
    {
      image: "/Assets/threads-app-icon.png",
      title: "Simple Thread(Meta) Clone",
    },
    {
      image: "/Assets/eraversary2.png",
      title: "Eraversary",
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <div
          className="w-80 mx-auto py-2"
        >
          <div className="bg-white border border-teal-500 rounded-lg shadow w-full dark:bg-gray-800 dark:border-teal-500 hover:scale-110">
            <div className="flex items-center justify-center">
              <img
                className="rounded-t-lg w-full h-64 object-cover"
                style={{ aspectRatio: "16/9" }}
                src={project.image}
                alt=""
              />
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight whitespace-nowrap overflow-x-hidden">
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