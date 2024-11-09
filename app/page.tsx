import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "DeMà Restaurant",
  description: "Home page",
};

export default function Home() {
  return (
    <div className="font-one">
      <div className="font-two pt-[120px] pb-6">
        <p className="container text-center text-white text-4xl md:text-6xl lg:text-8xl">
          Welcome to DeMà Restaurant
        </p>
      </div>
      <div className="py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
          <Image
            src="/sect_one.jpg"
            alt="DeMà Restaurant"
            width={500}
            height={400}
            className="mx-auto rounded-lg border-[15px]"
          />
          <p className="m-auto w-[60%] text-2xl text-gray-400">
            <span className="text-mainColor">DeMà</span> Restaurant&apos;s
            commitment begins with authentic and memorable Italian dishes from
            the southeast of Italy in a{" "}
            <span className="text-mainColor">&quot;rustic euro&quot;</span>{" "}
            modern yet comfortable dining ambience for a quality food experience
            with the choice of dining in, take-out, and delivery.
          </p>
        </div>
      </div>
      <div className="py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="m-auto w-[60%]">
            <p className="text-center text-6xl text-white font-two mb-10">
              DeMà Restaurant
            </p>
            <p className="text-2xl text-gray-400 mb-7">
              Italian cuisine is popular in Dubai because it&apos;s delicious,
              authentic, and healthy. The Petrone Family, originally from Bari,
              the South of Italy, brings traditional recipes passed down through
              generations to your plate in Dubai, UAE.
            </p>
            <p className="text-2xl text-gray-400">
              DeMà brings you a diversified unique Italian experience to your
              table using handmade pasta, the very best local seasonal produce,
              and the finest South-East Italian style recipes.
            </p>
          </div>
          <Image
            src="/square.jpg"
            alt="DeMà Restaurant"
            width={400}
            height={400}
            className="mx-auto rounded-lg border-[15px]"
          />
        </div>
      </div>
      <div className="container py-10">
        <Image
          src="/sect_two.jpg"
          alt="DeMà Restaurant"
          width={700}
          height={500}
          className="mx-auto rounded-lg border-[15px] mb-10"
        />
        <div className="grid grid-cols-2 gap-32">
          <div>
            <p className="text-2xl text-gray-400">
              We provide our patrons with delicious traditional and
              straightforward dishes and exquisite delectables such as the
              famous square style thin pizza, arancini, parmigiana di melansana,
              panzerotto, gnocchi al forno, and more, all cooked to order.
            </p>
          </div>
          <div>
            <p className="text-2xl text-gray-400">
              To complete your dining experience, choose a sweet and light
              Italian dessert.
            </p>
            <p className="text-6xl text-mainColor italic">Buon Appetito,</p>
            <p className="text-6xl text-mainColor font-two">Dubai!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
