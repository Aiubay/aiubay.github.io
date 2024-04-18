import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="py-10 mb-12 flex justify-between sticky top-0">
      <h1 className="text-2xl">Developed By Bay</h1>
      <ul className="flex items-center">
        <li className="px-4 py-2 ml-8">
            Projects
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            href="/Resume"
          >
            Resume
          </a>
        </li>
        <li> 
          <BsFillMoonStarsFill className="cursor-pointer text-2xl ml-8" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
