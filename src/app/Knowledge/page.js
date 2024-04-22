import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandGithub, TbBrandGolang, TbBrandJavascript, TbBrandLaravel, TbBrandMysql, TbBrandNextjs, TbBrandPhp } from "react-icons/tb";


function Homepage() {
  return (
    <>
      <h1 className="text-5xl text-center p-10 dark:text-white"> Knowledge </h1>
      <div class="grid grid-cols-4 gap-2 md:gap-4 lg:gap-6 text-5xl py-10 dark:text-teal-500">
        <div className="hover:scale-110 border-2 border rounded border-teal-500 flex justify-center">
          <TbBrandPhp />
        </div>
        <div className="hover:scale-110 border-2 border rounded border-teal-500 flex justify-center">
          <TbBrandLaravel />
        </div>
        <div className="hover:scale-110 border-2 border rounded border-teal-500 flex justify-center">
          <TbBrandGolang />
        </div>
        <div className="hover:scale-110 border-2 border rounded border-teal-500 flex justify-center">
          <TbBrandMysql />
        </div>
        <div className="hover:scale-110 border-2 border rounded border-teal-500 flex justify-center">
          <BiLogoPostgresql />
        </div>
        <div className="hover:scale-110 border-2 border rounded border-teal-500 flex justify-center">
          <TbBrandGithub />
        </div>
        <div className="hover:scale-110 border-2 border rounded border-teal-500 flex justify-center">
          <TbBrandJavascript />
        </div>
        <div className="hover:scale-110 border-2 border rounded border-teal-500 flex justify-center">
          <TbBrandNextjs />
        </div>
      </div>
    </>
  );
}

export default Homepage;
