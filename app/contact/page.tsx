import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col justify-between min-h-[85vh]">
      <div className="pt-[120px] pb-10 container flex justify-between items-center">
        <p className=" text-4xl md:text-6xl lg:text-8xl  font-two text-center text-white">
          Contact Us
        </p>
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt={"DeMà Restaurant"}
            width={200}
            height={200}
          />
        </Link>
      </div>
      <div className="flex w-full justify-evenly container pb-10 text-center text-[#FAA500]">
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
