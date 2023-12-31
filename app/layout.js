import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const vazir = Vazirmatn({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={vazir.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
