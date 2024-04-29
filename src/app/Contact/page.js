import { AiFillLinkedin, AiFillMail, AiFillPhone } from "react-icons/ai";

function Contact() {
    return (
      <section className="min-h-full p-10 bg-white px-10 text-gray-700 dark:bg-gray-900 dark:text-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-5xl mb-8">Contact me</h1>
          <p className="mb-10 text-lg">
            Feel free to contact me for business or just want to say hi,
            you can find me on the social media links below.
          </p>
        </div>
        <div className="text-2xl flex justify-center gap-16 py-3 text-gray-600">
          <a href="https://www.linkedin.com/in/aiubay/" target="_blank">
            <AiFillLinkedin className="text-teal-500" />
          </a>
          <a href="https://wa.me/6281231508232" target="_blank">
            <AiFillPhone className="text-teal-500" />
          </a>
          <a href="mailto:airjikubay@gmail.com" target="_blank">
            <AiFillMail className="text-teal-500" />
          </a>
        </div>
      </section>
    );
}
export default Contact;

