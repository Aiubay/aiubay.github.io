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
        <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg sm:gap-20 hover:scale-110 dark:bg-gray-800 border-teal-500 border">
          <div class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
            <img src={project.image} alt="ui/ux review check" />
            {/* <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div> */}
          </div>
          <div class="p-6 overflow-hidden">
            <h5 class="block font-sans text-lg antialiased font-medium leading-snug tracking-normal text-blue-gray-900 dark:text-white break-words">
              {project.title}
            </h5>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectsCards;

