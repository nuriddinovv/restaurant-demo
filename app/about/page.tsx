import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div>
      <div className="font-two pt-[120px] pb-6">
        <p
          className="text-4xl md:text-6xl lg:text-8xl text-white text-center"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          About Us
        </p>
      </div>
      <div className="font-one container">
        <div
          className="my-auto py-10 flex gap-20"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div>
            <p
              className="text-6xl mb-10 text-white ml-10"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Our Team
            </p>
            <p
              className="text-gray-400 text-xl mb-7"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              DeMa will employ a head chef from the South of Italy with
              comprehensive knowledge of traditional Italian Cuisines and an
              innovative approach to customized recipes for Dine-In or Take-Out
              customers. Our team, who we wish to employ, has extensive
              experience in ensuring all our food is prepared with love and
              client satisfaction in mind. We always include seasonal
              ingredients in our dishes, so they are constantly evolving and
              refreshing.
            </p>
          </div>
          <Image
            src={"/about2.webp"}
            alt={"DeMa Restaurant"}
            width={600}
            height={400}
            className="mx-auto rounded-lg border-[15px] mb-10"
            data-aos="zoom-in"
            data-aos-duration="1200"
          />
        </div>
        <div
          className="py-10 flex gap-10"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Image
            src={"/about.jpg"}
            alt={"DeMa Restaurant"}
            width={600}
            height={400}
            className="mx-auto rounded-lg border-[15px] mb-10"
            data-aos="zoom-in"
            data-aos-duration="1200"
          />
          <div
            className="w-fit m-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="text-6xl text-white mb-6">
              Our team will consist of:
            </p>
            <p
              className="text-2xl text-gray-400 flex items-center gap-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <span className="block bg-mainColor w-3 h-3 rounded-full"></span>
              Head Chef
            </p>
            <p
              className="text-2xl text-gray-400 flex items-center gap-4"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <span className="block bg-mainColor w-3 h-3 rounded-full"></span>
              Assistant Chef
            </p>
            <p
              className="text-2xl text-gray-400 flex items-center gap-4"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <span className="block bg-mainColor w-3 h-3 rounded-full"></span>
              Kitchen Hand
            </p>
            <p
              className="text-2xl text-gray-400 flex items-center gap-4"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <span className="block bg-mainColor w-3 h-3 rounded-full"></span>
              Restaurant Operations Manager
            </p>
            <p
              className="text-2xl text-gray-400 flex items-center gap-4"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <span className="block bg-mainColor w-3 h-3 rounded-full"></span>
              Waiters and Waitresses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
