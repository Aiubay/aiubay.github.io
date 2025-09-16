"use client";
import { usePathname } from "next/navigation";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

function Navbar({ setDarkMode, darkMode }) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const router = usePathname();
  const href = router === "/Resume" ? "/" : "/Resume";

  const NavLink = ({ href, children }) => (
    <li className="py-2 px-4 text-gray-800 dark:text-white hover:text-teal-500 dark:hover:text-teal-400">
      <Link href={href} onClick={() => setShowMenu(false)}>
        {children}
      </Link>
    </li>
  );

  return (
    <nav className="bg-white text-gray-800 dark:text-white dark:bg-gray-900 px-5 md:px-20 lg:px-40 py-10 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <a href="/">
        <h1 className="text-xl font-bold">Developed By Bay</h1>
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        <NavLink href="/#knowledge">Knowledge</NavLink>
        <NavLink href="/#projects">Projects</NavLink>
        <NavLink href="/#contact">Contact</NavLink>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:bg-gradient-to-bl"
            href={href}
          >
            {href === "/Resume" ? "Resume" : "Home"}
          </a>
        </li>
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl ml-8"
          />
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <BsFillMoonStarsFill
          onClick={() => setDarkMode(!darkMode)}
          className="cursor-pointer text-2xl mr-4"
        />
        <button onClick={toggleMenu} className="focus:outline-none">
          {showMenu ? (
            <AiOutlineClose className="text-2xl" />
          ) : (
            <AiOutlineMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute top-full right-0 bg-white dark:bg-gray-900 mt-2 mr-2 py-2 rounded-md shadow-xl w-48 md:hidden">
          <ul className="p-4">
            <NavLink href="/#knowledge">Knowledge</NavLink>
            <NavLink href="/#projects">Projects</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
            <li className="py-2 px-4">
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md hover:bg-gradient-to-bl"
                href={href}
              >
                {href === "/Resume" ? "Resume" : "Home"}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;