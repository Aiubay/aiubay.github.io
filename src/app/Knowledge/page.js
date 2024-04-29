import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandGithub, TbBrandGolang, TbBrandJavascript, TbBrandMysql, TbBrandNextjs, TbBrandPhp } from "react-icons/tb";
import { SiLaravel } from "react-icons/si";


function Homepage() {

  const Knowledge = [
    {
      title: "PHP",
      image: <TbBrandPhp />,
    },
    {
      title: "Laravel",
      image: <SiLaravel />,
    },
    {
      title: "Golang",
      image: <TbBrandGolang />,
    },
    {
      title: "Mysql",
      image: <TbBrandMysql />,
    },
    {
      title: "Postgre",
      image: <BiLogoPostgresql />,
    },
    {
      title: "Git",
      image: <TbBrandGithub />,
    },
    {
      title: "Js",
      image: <TbBrandJavascript />,
    },
    {
      title: "Next",
      image: <TbBrandNextjs />,
    },
  ];
  
  return (
    <>
      <h1 className="text-5xl text-center p-10 dark:text-white"> Knowledge </h1>
      <div className="grid grid-cols-4 gap-2 md:gap-4 lg:gap-6 text-5xl py-10 dark:text-teal-500">
        {Knowledge.map((item) => (
          <div className="hover:scale-110 border-2 border rounded border-teal-500 flex justify-center">
            {item.image}
          </div>
        ))}
      </div>
    </>
  );
}

export default Homepage;
