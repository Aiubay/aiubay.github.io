'use client'
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
import Navbar from './navbar';
import Homepage from './Home/home';
import Projects from './Projects/page';
export default function Home() {
  return (
    <main className="bg-white px-10 text-gray-700">
      <section className="min-h-screen">
        <Navbar />
        <Homepage />
        <h1 className="text-5xl text-center p-10"> Skillset</h1>
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
      <Projects />
      <section className="text-center p-10"></section>
      <Footer />
    </main>
  );
}
