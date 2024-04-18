import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer class="bg-white rounded">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center">
          © {year}{" "}
          <a href="#" class="hover:underline">
            Developed By Bay
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex justify-center gap-8 py-3 text-gray-600 text-2xl">
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
