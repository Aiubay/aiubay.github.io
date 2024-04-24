'use client'

import { useEffect, useState } from "react";
import Navbar from "../navbar";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import Footer from "../footer";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function Resume(){
    const [darkMode, setDarkMode] = useState(false);
    function handleClick() {
      setDarkMode(!darkMode);
    }

    const [width, setWidth] = useState(1200);

    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);


    return (
      <>
        <div className={darkMode ? "dark" : ""}>
          <section className="bg-white px-10 text-gray-700 min-h-screen dark:bg-gray-900">
            <Navbar
              handleClick={handleClick}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
            <div className="text-center">
              <a
                href="/Assets/resume.pdf"
                download="Achmad Irjik Ubay - Resume.pdf"
              >
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  <span className="inline-flex items-center justify-center">
                    <AiOutlineDownload className="mr-2" />
                    &nbsp; Download 
                  </span>
                </button>
              </a>
            </div>
            <div className="flex justify-center py-10">
              {/* <div
                style={{
                  overflow: "auto",
                  height: `${width < 768 ? "calc(100vh - 260px)" : "80vh"}`,
                  border: "1px solid black",
                }}
              > */}
                {/* <Document
                  file={"/Assets/resume.pdf"}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                > */}
                  {/* <Page
                    pageIndex={0}
                    scale={1.5}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  /> */}
                  {/* {Array.from(new Array(2), (el, index) => (
                    <Page
                      key={index}
                      pageIndex={0}
                      scale={1.5}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  ))} */}
                {/* </Document> */}
              {/* </div> */}
            </div>
            <div className="text-center">
              <a
                href="/Assets/resume.pdf"
                download="Achmad Irjik Ubay - Resume.pdf"
              >
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  href="#"
                >
                  <span className="inline-flex items-center justify-center">
                    <AiOutlineDownload className="mr-2" />
                    &nbsp; Download 
                  </span>
                </button>
              </a>
            </div>
          </section>
          <Footer />
        </div>
      </>
    );

}
