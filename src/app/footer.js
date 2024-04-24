import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="bg-white rounded dark:bg-gray-900">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center md:text-center flex justify-center">
          © {year} &nbsp;
          <a href="#" className="hover:underline">
            {" "}
            Developed By Bay
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex justify-center gap-8 py-3 text-gray-600 text-2xl">
          <AiFillGithub
            href="https://github.com/Aiubay"
            className="text-teal-500"
          />
          <AiFillLinkedin
            href="https://www.linkedin.com/in/aiubay/"
            className="text-teal-500"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
