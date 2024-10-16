"use client";

import Image from "next/image";
import serviceImage from "../images/services-image.jpg";
import React from "react";

const Service = () => {
  return (
    <>
      <div className="p-6 m-auto bg-emerald-200">
        <div className="grid max-w-screen-xl m-auto p-4 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12  rounded-xl">
          <div className="bg-black lg:m-6 lg:col-span-6 lg:flex rounded-lg p-2">
            <Image
              src={serviceImage}
              alt="featuresImage"
              className=" m-auto rounded-xl shadow-xl ring-2 ring-gray-400/10 sm:w-[57rem] md:auto lg:auto"
              width={500}
              height={180}
            />
          </div>
          <div className="m-auto p-4 place-self-center lg:col-span-6 rounded-lg bg-white">
            <h1 className="max-w-2xl p-2 mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl text-dark">
              We'll help you create a perfect business model for you.
            </h1>
            <p className="max-w-2xl m-auto p-2 lg:mb-4 md:text-lg lg:text-xl text-dark">
              Outlining a comprehensive business plan that includes target
              market analysis, services offered, pricing strategy, and growth
              projections.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
