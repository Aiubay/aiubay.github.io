
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Type from "../Type";

function Homepage() {
  return (
    <>
      <div className="text-center">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-emerald-400">
          {" "}
          Whispering Willow Breeze{" "}
        </h2>
        <h3 className="text-2xl py-2 dark:text-white"> <Type className="text-bold text-gray-800"/></h3>
        <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl dark:text-white">
          Freelancer providing services for programming and design content
          needs. Join me down below and let's get cracking!
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <a href="https://github.com/Aiubay" target="_blank">
          <AiFillGithub className="text-teal-500" />
        </a>
        <a href="https://www.linkedin.com/in/aiubay/" target="_blank">
          <AiFillLinkedin className="text-teal-500" />
        </a>
      </div>
    </>
  );
}

export default Homepage;