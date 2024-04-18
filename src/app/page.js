'use client'
import { BsFillMoonStarsFill } from "react-icons/bs";
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import {
  TbBrandPhp,
  TbBrandLaravel,
  TbBrandMysql,
  TbBrandGolang,
  TbBrandGithub,
  TbBrandJavascript,
  TbBrandNextjs,
} from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import Footer from "./footer";
import Type from "./Type";
export default function Home() {
  return (
    <main className="bg-white px-10 text-gray-700">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between sticky top-0">
          <h1 className="text-2xl">Developed By Bay</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            {" "}
            Achmad Irjik Ubay{" "}
          </h2>
          {/* <h3 className="text-2xl py-2"> <Type className="text-bold text-gray-800"/> </h3> */}
          <h3 className="text-md py-5 leading-8 text-gray-800">
            {" "}
            Description{" "}
          </h3>
        </div>
        {/* <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillGithub />
          <AiFillLinkedin />
        </div> */}
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1"> Project i did </h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            <span className="text-teal-500">What i did is ... </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
            nulla eget tortor laoreet imperdiet in non lorem. Aenean non
            suscipit ligula.
          </p>
          <p className="ext-md py-2 leading-8 text-gray-800">
            <span className="text-teal-500">Another Paragraph </span>
            Vivamus non congue eros. Quisque ut finibus lectus. Nulla feugiat
            quis lorem in tincidunt. Sed vel consequat sem, faucibus viverra
            eros. Integer ultricies augue felis. Donec vitae urna vel sem
            posuere pharetra. Aliquam porttitor pharetra tortor eget semper.
          </p>
        </div>
      </section>
      <section className="text-center p-10">
        <h1 className="text-5xl"> Skillset</h1>

        <div class="grid grid-cols-4 gap-2 md:gap-4 lg:gap-6 text-5xl py-10 ">
          <div className="hover:scale-110 border-2 border rounded border-black flex justify-center">
            <TbBrandPhp />
          </div>
          <div className="hover:scale-110 border-2 border rounded border-black flex justify-center">
            <TbBrandLaravel />
          </div>
          <div className="hover:scale-110 border-2 border rounded border-black flex justify-center">
            <TbBrandGolang />
          </div>
          <div className="hover:scale-110 border-2 border rounded border-black flex justify-center">
            <TbBrandMysql />
          </div>
          <div className="hover:scale-110 border-2 border rounded border-black flex justify-center">
            <BiLogoPostgresql />
          </div>
          <div className="hover:scale-110 border-2 border rounded border-black flex justify-center">
            <TbBrandGithub />
          </div>
          <div className="hover:scale-110 border-2 border rounded border-black flex justify-center">
            <TbBrandJavascript />
          </div>
          <div className="hover:scale-110 border-2 border rounded border-black flex justify-center">
            <TbBrandNextjs />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
