"use client";
import Footer from "./footer";
import Navbar from "./navbar";
import Homepage from "./Home/home";
import Projects from "./Projects/page";
import Knowledge from "./Knowledge/page";
import { useState } from "react";
import Contact from "./Contact/page";
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <main className={darkMode ? "dark" : ""}>
      <Navbar
        handleClick={handleClick}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="bg-white px-10 text-gray-700 h-screen dark:bg-gray-900">
          <Homepage />
          {/* <section className="min-h-full">
          </section> */}
        </section>
        {/* <section className="text-center p-10 bg-white px-10 text-gray-700 dark:bg-gray-900">
        </section> */}
        <section className="text-center p-10 bg-white px-10 text-gray-700 dark:bg-gray-900 dark:text-white md:text-3xl">
          <Knowledge />
          <Projects />
        </section>
        <section className="text-center p-10 bg-white px-10 text-gray-700 dark:bg-gray-900 dark:text-white">
          <Contact />
        </section>
        <Footer />
      </div>
    </main>
  );
}
