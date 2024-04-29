import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Achmad Irjik Ubay Portofolio",
  description: "Achmad Irjik Ubay Portofolio",
  // icons: {
  //   icon: "/professional-portfolio.png",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
