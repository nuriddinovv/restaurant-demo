import Image from "next/image";

export default function Home() {
  return (
    <div className="font-one">
      <div className="font-two pt-[120px] pb-6" data-aos="fade-down">
        <p className="container text-center text-white text-4xl md:text-6xl lg:text-8xl">
          Welcome to DeMa Restaurant
        </p>
      </div>
      <div className="py-10" data-aos="fade-right">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
          <Image
            data-aos="zoom-in"
            src="/sect_one.jpg"
            alt="DeMa Restaurant"
            width={500}
            height={400}
            className="mx-auto rounded-lg border-[15px]"
          />
          <p
            className="m-auto w-[60%] text-2xl text-gray-400"
            data-aos="fade-left"
          >
            <span className="text-mainColor">DeMa</span> Restaurant&apos;s
            commitment begins with authentic and memorable Italian dishes from
            the southeast of Italy in a{" "}
            <span className="text-mainColor">&quot;rustic euro&quot;</span>{" "}
            modern yet comfortable dining ambience for a quality food experience
            with the choice of dining in, take-out, and delivery.
          </p>
        </div>
      </div>
      <div className="py-10" ata-aos="fade-up">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="m-auto w-[60%]">
            <p
              className="text-center text-6xl text-white font-two mb-10"
              data-aos="fade-right"
            >
              DeMa Restaurant
            </p>
            <p className="text-2xl text-gray-400 mb-7" data-aos="fade-up">
              Italian cuisine is popular in Dubai because it&apos;s delicious,
              authentic, and healthy. The Petrone Family, originally from Bari,
              the South of Italy, brings traditional recipes passed down through
              generations to your plate in Dubai, UAE.
            </p>
            <p className="text-2xl text-gray-400" data-aos="fade-up">
              DeMa brings you a diversified unique Italian experience to your
              table using handmade pasta, the very best local seasonal produce,
              and the finest South-East Italian style recipes.
            </p>
          </div>
          <Image
            src="/square.jpg"
            alt="DeMa Restaurant"
            width={400}
            height={400}
            className="mx-auto rounded-lg border-[15px]"
            data-aos="zoom-in"
          />
        </div>
      </div>
      <div className="container py-10" data-aos="fade-up">
        <Image
          src="/sect_two.jpg"
          alt="DeMa Restaurant"
          width={700}
          height={500}
          className="mx-auto rounded-lg border-[15px] mb-10"
          data-aos="zoom-in"
        />
        <div className="grid grid-cols-2 gap-32">
          <div data-aos="fade-right">
            <p className="text-2xl text-gray-400">
              We provide our patrons with delicious traditional and
              straightforward dishes and exquisite delectables such as the
              famous square style thin pizza, arancini, parmigiana di melansana,
              panzerotto, gnocchi al forno, and more, all cooked to order.
            </p>
          </div>
          <div data-aos="fade-left">
            <p className="text-2xl text-gray-400">
              To complete your dining experience, choose a sweet and light
              Italian dessert.
            </p>
            <p className="text-6xl text-mainColor italic" data-aos="fade-up">
              Buon Appetito,
            </p>
            <p className="text-6xl text-mainColor font-two" data-aos="fade-up">
              Dubai!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
