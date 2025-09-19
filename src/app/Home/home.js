import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import Type from "../Type";
import Image from 'next/image';

function Homepage() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
        {/* Image Placeholder */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gray-300 dark:bg-gray-700 mb-8 md:mb-0 md:mr-12 flex-shrink-0 fade-in-up">
          {/* You can replace this div with an <Image> component once you have a picture */}
          {/* Example: <Image src="/path/to/your/image.jpg" alt="Your Name" width={256} height={256} className="rounded-full" /> */}
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-emerald-400 fade-in-up animation-delay-200">
            Achmad Irjik Ubay
          </h2>
          <div className="text-3xl flex justify-center md:justify-start gap-6 py-3 text-gray-600 fade-in-up animation-delay-400">
            <a href="https://github.com/Aiubay" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="text-teal-500 hover:text-teal-400 transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/aiubay/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="text-teal-500 hover:text-teal-400 transition-colors duration-300" />
            </a>
            <a href="https://wa.me/6281231508232" target="_blank" rel="noopener noreferrer">
              <AiFillPhone className="text-teal-500 hover:text-teal-400 transition-colors duration-300" />
            </a>
            <a href="mailto:airjikubay@gmail.com" target="_blank" rel="noopener noreferrer">
              <AiFillMail className="text-teal-500 hover:text-teal-400 transition-colors duration-300" />
            </a>
          </div>
          <h3 className="text-2xl py-2 dark:text-white fade-in-up animation-delay-600">
            <Type className="text-bold text-gray-800" />
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:mx-0 md:text-lg dark:text-white fade-in-up animation-delay-600">
            I&apos;m a developer with expertise in web development. I handle everything
            from project development to database design, maintenance, debugging,
            and deployment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;