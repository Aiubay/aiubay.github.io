import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar({ setDarkMode, darkMode }) {
  // const [showMenu, setShowMenu] = useState(false);
  // const toggleMenu = () => setShowMenu(!showMenu);

  return (
    // <nav className="py-10 mb-12 flex justify-between sticky top-0 bg-white dark:bg-gray-900 text-white">
    //   <h1 className="text-2xl">Developed By Bay</h1>

    //   <div className="sm:hidden">
    //     <button
    //       type="button"
    //       className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
    //       onClick={toggleMenu}
    //     >
    //       <svg
    //         className="h-6 w-6 fill-current"
    //         viewBox="0 0 24 24"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           fillRule="evenodd"
    //           d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
    //         ></path>
    //       </svg>
    //     </button>

    //     {showMenu && (
    //       <div className="absolute top-0 right-0 bg-white mt-12 mr-2 py-2 rounded-md shadow-xl w-48">
    //         <ul className="p-4">
    //           <li className="py-2 px-4">
    //             <Link href="/Projects">
    //               <p className="text-gray-800 hover:text-white-600 focus:text-gray-600 focus:outline-none">
    //                 Projects
    //               </p>
    //             </Link>
    //           </li>
    //           <li className="">
    //             <Link href="/Resume">
    //               <p className="flex items-center justify-start px-4 py-2 mt-2 text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:bg-white-300 hover:text-gray-700 focus:bg-gray-300 focus:text-gray-700 focus:outline-none rounded-md">
    //                 Resume
    //               </p>
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     )}
    //   </div>

    //   <ul className="hidden sm:flex items-center">
    //     <li className="px-4 py-2 ml-8">
    //       <Link href="/Projects">Projects</Link>
    //     </li>
    //     <li>
    //       <Link href="/Resume">
    //         <p className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
    //           Resume
    //         </p>
    //       </Link>
    //     </li>
    //     <li>
    //       <BsFillMoonStarsFill
    //         onClick={() => setDarkMode(!darkMode)}
    //         className="cursor-pointer text-2xl ml-8"
    //       />
    //     </li>
    //   </ul>
    // </nav>
    // className="  "
    <nav
      className="bg-white text-gray-800 dark:text-white dark:bg-gray-900 px-5 md:px-20 lg:px-40 py-10 flex justify-between"
    >
      <a href="/">
        <h1 className="text-xl">Developed By Bay</h1>
      </a>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className=" cursor-pointer text-2xl"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-white px-4 py-2 border-none rounded-md ml-8 hover:bg-gradient-to-bl "
            href={location.pathname === "/Resume" ? "/" : "/Resume"}
          >
            {location.pathname === "/Resume" ? "Home" : "Resume"}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
