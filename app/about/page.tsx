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
      <div className="">
        <div className="bg-gray-300 py-10">
          <div className="container grid grid-cols-1 mx-auto md:grid-cols-2">
            <div className="my-auto">
              <p className="italic text-6xl font-semibold mb-10 text-white">
                Demà Restaurant
              </p>
              <p className="text-gray-600 text-xl mb-7">
                Italian cuisine is popular in Dubai because it's delicious,
                authentic and healthy. The Petrone Family, originally from Bari,
                the South of Italy, brings traditional recipes passed down
                through generations to your plate in Dubai, UAE.
              </p>
              <p className="text-gray-600 text-xl">
                DeMà brings you a diversified unique Italian experience to your
                table using handmade pasta, the very best local seasonal produce
                and the finest South- East Italian style recipes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
