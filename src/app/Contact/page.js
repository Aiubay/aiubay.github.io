import { AiFillLinkedin, AiFillMail, AiFillPhone } from "react-icons/ai";

function Contact() {
    return (
      <>
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-5xl mb-8 md:xl">Contact me</h1>
          <p className="mb-10 text-lg">
            Feel free to contact me for business or just want to say hi, you can
            find me on the social media links below.
          </p>
        </div>
        <div className="flex justify-center gap-16 py-3 text-gray-600 sm:flex-row md:text-xl text-4xl">
          <a href="https://www.linkedin.com/in/aiubay/" target="_blank">
            <AiFillLinkedin className="text-teal-500"
              style={{ width: "2.5rem", height: "2.5rem" }} />
          </a>
          <a href="https://wa.me/6281231508232" target="_blank">
            <AiFillPhone className="text-teal-500"
              style={{ width: "2.5rem", height: "2.5rem" }} />
          </a>
          <a href="mailto:airjikubay@gmail.com" target="_blank">
            <AiFillMail className="text-teal-500"
              style={{ width: "2.5rem", height: "2.5rem" }} />
          </a>
        </div>
      </>
    );
}
export default Contact;

