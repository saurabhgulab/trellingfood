import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import companies from "../images/companies.svg";
const strip2 = () => {
  return (
    <>
      <div className="bg-black grid justify-items-center">
        <h1 className="max-w-2xl p-2 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl text-white ">
          <span className="text-emerald-500">Trusted</span> By
        </h1>
        <p className="max-w-2xl m-auto p-2 font-sans  md:text-lg lg:text-xl text-white">
          The World's Leading and Largest{" "}
          <span className="text-emerald-500">Food</span> Enterprises
        </p>
      </div>
      <Marquee className="bg-black">
        <Image className="bg-black py-6 mx-8" src={companies} alt="" />
      </Marquee>
    </>
  );
};

export default strip2;
