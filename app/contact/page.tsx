import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div
      className="flex flex-col justify-between"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),url("/contact.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        color: "white",
        height: "80vh",
      }}
    >
      <div className="pt-[120px] pb-10 container flex justify-between items-center">
        <p className=" text-4xl md:text-6xl lg:text-9xl  font-two">
          Contact Us
        </p>
        <Link href={"/"}>
          <Image src={"/logo.png"} alt={""} width={200} height={200} />
        </Link>
      </div>
      <div className="flex w-full justify-evenly container pb-10 text-center">
        <ul className="">
          <li>
            <Link className="font-bold text-xl" href={"/"}>
              PHONE
            </Link>
            <br />
            <Link href={"/"}>Ms. Giulia</Link>
            <br />
            <Link href={"tel:+971552246212"}>+971 55 224 6212</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="font-bold text-xl" href={"/"}>
              EMAIL
            </Link>
            <br />
            <Link href={"mailto:Dubai.giulia@gmail.com"}>
              Dubai.giulia@gmail.com
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="font-bold text-xl" href={"/"}>
              ADDRESS
            </Link>
            <br />
            <Link href={"/"}>Dubai, UAE</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
