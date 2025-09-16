'use client';

import { useState } from "react";
import { AiOutlineDownload, AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.5);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">My Resume</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Here you can view and download my resume.
          </p>
          <a
            href="/Assets/resume.pdf"
            download="Achmad Irjik Ubay - Resume.pdf"
            className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-3 rounded-md hover:bg-gradient-to-bl text-lg font-semibold shadow-lg"
          >
            <AiOutlineDownload className="mr-2 text-2xl" />
            Download Resume
          </a>
        </div>

        <div className="flex flex-col items-center py-10">
          <div className="w-full max-w-4xl bg-gray-100 dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <div className="p-4 bg-gray-200 dark:bg-gray-700 flex items-center justify-center space-x-4">
              <button
                onClick={() => setScale(scale > 0.5 ? scale - 0.1 : 0.5)}
                className="p-2 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              >
                <AiOutlineZoomOut className="text-2xl text-gray-800 dark:text-white" />
              </button>
              <span className="text-lg font-semibold text-gray-800 dark:text-white">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={() => setScale(scale < 2.5 ? scale + 0.1 : 2.5)}
                className="p-2 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              >
                <AiOutlineZoomIn className="text-2xl text-gray-800 dark:text-white" />
              </button>
            </div>
            <div className="overflow-auto" style={{ maxHeight: '80vh' }}>
              <Document
                file="/Assets/resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                className="flex justify-center"
              >
                <Page pageNumber={pageNumber} scale={scale} />
              </Document>
            </div>
            {numPages && numPages > 1 && (
              <div className="p-4 bg-gray-200 dark:bg-gray-700 flex items-center justify-center space-x-4">
                <button
                  disabled={pageNumber <= 1}
                  onClick={() => setPageNumber(pageNumber - 1)}
                  className="px-4 py-2 rounded-md bg-gray-300 dark:bg-gray-600 disabled:opacity-50"
                >
                  Previous
                </button>
                <p className="text-gray-800 dark:text-white">
                  Page {pageNumber} of {numPages}
                </p>
                <button
                  disabled={pageNumber >= numPages}
                  onClick={() => setPageNumber(pageNumber + 1)}
                  className="px-4 py-2 rounded-md bg-gray-300 dark:bg-gray-600 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}