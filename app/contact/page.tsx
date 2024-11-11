import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col justify-between min-h-[85vh]">
      <div
        className="pt-[120px]  container flex justify-between items-center"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        <p className="text-4xl md:text-6xl lg:text-8xl font-two text-center text-white">
          Contact Us
        </p>
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt={"DeMa Restaurant"}
            width={200}
            height={200}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
          />
        </Link>
      </div>

      <div
        className=" text-center text-gray-300"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <p className="text-2xl md:text-3xl font-one">Business Hours</p>
        <p className="mt-4 text-lg">
          <strong>Monday - Friday:</strong> 10:00 AM - 11:00 PM
        </p>
        <p className="text-lg">
          <strong>Saturday - Sunday:</strong> 11:00 AM - 12:00 AM
        </p>
      </div>
      <div
        className="flex w-full justify-evenly container pb-10 text-center text-[#FAA500]"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
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

      {/* Qo'shimcha ma'lumotlar */}
    </div>
  );
}
