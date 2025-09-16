import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 py-6">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {year} &nbsp;
          <a href="#" className="hover:underline font-semibold">
            Developed By Bay
          </a>
        </span>
        <div className="flex justify-center gap-6 mt-4 md:mt-0">
          <a href="https://github.com/Aiubay" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="text-teal-500 text-3xl hover:text-teal-400 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/aiubay/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="text-teal-500 text-3xl hover:text-teal-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;