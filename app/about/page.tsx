/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div>
      <div className="font-two pt-[120px] pb-6">
        <p className=" text-4xl md:text-6xl lg:text-8xl text-white text-center">
          About Us
        </p>
      </div>
      <div className="font-one container">
        <div className="my-auto py-10 flex gap-20">
          <div className="">
            <p className=" text-6xl mb-10 text-white ml-10">Our Team</p>
            <p className="text-gray-400 text-xl mb-7">
              DeMà will employ a head chef from the South of Italy with
              comprehensive knowledge of traditional Italian Cuisines and an
              innovative approach to customized recipes for Dine-In or Take-Out
              customers. Our team who we wish to employ, has extensive
              experience in ensuring all our food is prepared with love and
              client satisfaction in mind. We always include seasonal
              ingredients to our dishes, so they are constantly evolving and
              refreshing.
            </p>
          </div>
          <Image
            src={"/about2.webp"}
            alt={"DeMà Restaurant"}
            width={600}
            height={400}
            className="mx-auto rounded-lg border-[15px] mb-10"
          />
        </div>
        <div className="py-10 flex gap-10">
          <Image
            src={"/about.jpg"}
            alt={"DeMà Restaurant"}
            width={600}
            height={400}
            className="mx-auto rounded-lg border-[15px] mb-10"
          />
          <div className=" w-fit m-auto ">
            <p className="text-6xl text-white">Our team will consist of:</p>
            <p className="text-2xl text-gray-400 flex items-center gap-4">
              <span className="block bg-mainColor w-3 h-3 rounded-full"></span>
              Head Shef
            </p>
            <p className="text-2xl text-gray-400 flex items-center gap-4">
              <span className="block bg-mainColor w-3 h-3 rounded-full"></span>
              Assistant Shef
            </p>
            <p className="text-2xl text-gray-400 flex items-center gap-4">
              <span className="block bg-mainColor w-3 h-3 rounded-full"></span>
              Kitchen hand
            </p>
            <p className="text-2xl text-gray-400 flex items-center gap-4">
              <span className="block bg-mainColor w-3 h-3 rounded-full"></span>
              Restaurant Operations Manager
            </p>
            <p className="text-2xl text-gray-400 flex items-center gap-4">
              <span className="block bg-mainColor w-3 h-3 rounded-full"></span>
              Waiters and Waitresses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
