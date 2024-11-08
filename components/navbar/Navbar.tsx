import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div
      className="shadow-xl"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)", 
        backdropFilter: "blur(3px)", 
      }}
    >
      <div className="container flex justify-between items-center py-2">
        <div className="">
          <Link href={"/"}>
            <Image src="/dema_res.png" width={180} height={87} alt="logo" />
          </Link>
        </div>
        <div
          style={{ fontFamily: "Sour Gummy, serif" }}
          className="flex gap-6 text-mainColor font-medium text-lg"
        >
          <Link href={"/"}>DeMà</Link>
          <Link href={"/about"}>About Us</Link>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/contact"}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
