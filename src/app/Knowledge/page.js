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

function KnowledgeSection() {
  const knowledgeItems = [
    {
      id: 1,
      title: "PHP",
      icon: <TbBrandPhp />,
    },
    {
      id: 2,
      title: "Laravel",
      icon: <SiLaravel />,
    },
    {
      id: 3,
      title: "Golang",
      icon: <TbBrandGolang />,
    },
    {
      id: 4,
      title: "MySQL",
      icon: <TbBrandMysql />,
    },
    {
      id: 5,
      title: "PostgreSQL",
      icon: <BiLogoPostgresql />,
    },
    {
      id: 6,
      title: "Git",
      icon: <TbBrandGithub />,
    },
    {
      id: 7,
      title: "JavaScript",
      icon: <TbBrandJavascript />,
    },
    {
      id: 8,
      title: "Next.js",
      icon: <TbBrandNextjs />,
    },
  ];

  return (
    <section>
      <h1 className="text-5xl text-center py-10 dark:text-white font-bold">
        My Knowledge
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {knowledgeItems.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-teal-500/50 border border-transparent hover:border-teal-500"
          >
            <div className="text-6xl text-teal-500 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KnowledgeSection;