import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import companies from "../images/companies.svg";
const strip2 = () => {
  return (
    <>
      <div className="bg-black grid justify-items-center mt-6">
        <div className="m-4">
          <h1 className="flex items-center justify-center max-w-2xl p-2 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl text-white ">
            <span className="text-emerald-500 mx-3">Trusted</span> By
          </h1>
          <p className="max-w-2xl m-auto p-2 font-sans  md:text-lg lg:text-xl text-white">
            The World's Leading and the Largest{" "}
            <span className="text-emerald-500">Food</span> Enterprises
          </p>
        </div>
      </div>
    </>
  );
};

export default strip2;
