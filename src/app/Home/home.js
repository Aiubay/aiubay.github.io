
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Homepage() {
  return (
    <>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">
          {" "}
          Achmad Irjik Ubay{" "}
        </h2>
        {/* <h3 className="text-2xl py-2"> <Type className="text-bold text-gray-800"/> </h3> */}
        <h3 className="text-md py-5 leading-8 text-gray-800"> Description </h3>
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