import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandGithub, TbBrandGolang, TbBrandJavascript, TbBrandMysql, TbBrandNextjs, TbBrandPhp } from "react-icons/tb";
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
      <h1 className="text-5xl text-center p-10 dark:text-white"> Knowledge </h1>
      <div className="grid grid-cols-4 gap-2 md:gap-4 lg:gap-6 text-5xl py-10 dark:text-teal-500">
        {Knowledge.map((item) => (
          <div className="hover:scale-110 border-2 border rounded border-teal-500 flex justify-center" key={item.id}>
            {item.image}
          </div>
        ))}
      </div>
    </>
  );
}

export default Homepage;
