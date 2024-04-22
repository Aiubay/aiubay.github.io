'use client'
import Footer from "./footer";
import Type from "./Type";
import Navbar from './navbar';
import Homepage from './Home/home';
import Projects from './Projects/page';
import Knowledge from './Knowledge/page';
import { useState } from 'react';
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="bg-white px-10 text-gray-700 h-screen dark:bg-gray-900">
            <Navbar
              handleClick={handleClick}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
            <Homepage />
          {/* <section className="min-h-full">
          </section> */}
        </section>
        <section className="text-center p-10 bg-white px-10 text-gray-700 dark:bg-gray-900">
          <Knowledge />
        </section>
        <section className="text-center p-10 bg-white px-10 text-gray-700 dark:bg-gray-900 dark:text-white">
          <Projects/>
        </section>
        <Footer />
      </div>
    </main>
  );
}


