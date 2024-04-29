
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import Type from "../Type";

function Homepage() {
  return (
    <>
      <div className="text-center">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-emerald-400">
          {" "}
          Achmad Irjik Ubay{" "}
        </h2>
        <h3 className="text-2xl py-2 dark:text-white">
          {" "}
          <Type className="text-bold text-gray-800" />
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-lg dark:text-white">
          I&apos;m a developer with expertise in web development. I handle everything
          from project development to database design, maintenance, debugging,
          and deployment.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 md:text-xl">
        <a href="https://github.com/Aiubay" target="_blank">
          <AiFillGithub className="text-teal-500" style={{ width: "2.5rem", height: "2.5rem" }} />
        </a>
        <a href="https://www.linkedin.com/in/aiubay/" target="_blank">
          <AiFillLinkedin className="text-teal-500" style={{ width: "2.5rem", height: "2.5rem" }} />
        </a>
        <a href="https://wa.me/6281231508232" target="_blank">
          <AiFillPhone className="text-teal-500" style={{ width: "2.5rem", height: "2.5rem" }} />
        </a>
        <a href="mailto:airjikubay@gmail.com" target="_blank">
          <AiFillMail className="text-teal-500" style={{ width: "2.5rem", height: "2.5rem" }} />
        </a>
      </div>
    </>
  );
}

export default Homepage;