import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="text-gray-600 body-font"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url("/footerbg.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/">
          <Image src={"/dema_res.png"} alt={"Logo"} width={180} height={80} />
        </Link>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 text-mainColor sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          DeMà Restaurant
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-mainColor">
          Dubai UAE
        </span>
      </div>
    </footer>
  );
}
