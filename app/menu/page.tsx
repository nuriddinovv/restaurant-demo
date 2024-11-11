import Image from "next/image";
import React from "react";

export default function Menu() {
  return (
    <div>
      <div className="font-two pt-[120px] pb-6">
        <p
          className="text-4xl container md:text-6xl lg:text-8xl text-white text-center"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          The Menu
        </p>
      </div>
      <div className="font-one text-[#Faa500]">
        <div className="flex justify-between">
          <p className="text-4xl ">PANZEROTTERIA</p>
          <Image src={"/zxc.png"} alt="" width={100} height={100} />
        </div>
        <div className="">
          <div className="text-3xl flex justify-between">
            <p>Classico</p>
            <p>
              2,00 <span className="text-white">€</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
