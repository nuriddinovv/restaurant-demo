"use client";

import React from "react";
import { menuInterface } from "./interface";

export default function Card({ title, price, desc, drinks }: menuInterface) {
  return (
    <div className="p-3 rounded-md gap-5 flex flex-col font-one">
      <div className="flex gap-3 items-center">
        <p className="w-[65%] text-[#FAA500] uppercase md:text-xl text-xs font-semibold  ">
          {title}
        </p>
        <div className="w-12 h-12 md:w-14 md:h-14 bg-white text-gray-500 rounded-full flex items-center justify-center flex-col text-sm md:text-lg ">
          <p>{price}</p>
          <p>AED</p>
        </div>
      </div>
      <p className="text-white  text-sm md:text-lg">{desc}</p>
      {drinks ? (
        <p className="bg-white px-4 py-2 text-sm md:text-lg w-fit">
          Includes drinks
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
