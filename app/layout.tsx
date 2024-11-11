"use client";

import { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./globals.css";
import AOS from "aos";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("/bgmain.webp")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="fixed w-full z-50">
          <Navbar />
        </div>
        <div className="w-full ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
