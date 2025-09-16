'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <html lang="en">
      <body className={`${inter.className} ${darkMode ? 'dark' : ''}`}>
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}