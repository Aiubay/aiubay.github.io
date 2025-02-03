import { BiLogoPostgresql } from "react-icons/bi";
import {
  TbBrandGithub,
  TbBrandGolang,
  TbBrandJavascript,
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandPhp,
} from "react-icons/tb";
import { SiLaravel } from "react-icons/si";

function Homepage() {
  const Knowledge = [
    {
      id: 1,
      title: "PHP",
      image: <TbBrandPhp />,
    },
    {
      id: 2,
      title: "Laravel",
      image: <SiLaravel />,
    },
    {
      id: 3,
      title: "Golang",
      image: <TbBrandGolang />,
    },
    {
      id: 4,
      title: "Mysql",
      image: <TbBrandMysql />,
    },
    {
      id: 5,
      title: "Postgre",
      image: <BiLogoPostgresql />,
    },
    {
      id: 6,
      title: "Git",
      image: <TbBrandGithub />,
    },
    {
      id: 7,
      title: "Js",
      image: <TbBrandJavascript />,
    },
    {
      id: 8,
      title: "Next",
      image: <TbBrandNextjs />,
    },
  ];

  return (
    <>
      <h1 className="text-5xl text-center py-10 dark:text-white">
        {" "}
        Knowledge{" "}
      </h1>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-6 4xl:grid-cols-7 mx-auto text-5xl py-10 dark:text-teal-500">
        {Knowledge.map((item) => (

            <div
              className="relative w-full h-full border-2 rounded border-teal-500 flex justify-center dark:bg-gray-900 transition-transform duration-300 ease-in-out hover:scale-105 sm:hover:scale-110 md:hover:scale-105 lg:hover:scale-110 xl:hover:scale-105 2xl:hover:scale-110 z-10 hover:z-20"
              key={item.id}
              >
              <div className="w-full h-full flex items-center justify-center">
                {item.image}
              </div>
              {/* <div className="absolute bottom-0 right-0 p-2 bg-white rounded-bl border-l border-b border-teal-500">
                <p className="text-sm">{item.title}</p>
                </div> */}
            </div>
        ))}
      </div>
    </>
  );
}

export default Homepage;
