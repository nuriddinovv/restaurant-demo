import React from "react";

export default function About() {
  return (
    <div>
      <div
        className="font-two bg-gray-200 pt-[120px] pb-6"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),url("/menuText.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className=" text-4xl md:text-6xl lg:text-9xl text-white">About Us</p>
      </div>
    </div>
  );
}
