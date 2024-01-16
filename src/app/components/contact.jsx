"use client";

import Image from "next/image";
import contactImage from "../images/contact-image.jpg";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="p-6 m-auto bg-black">
        <div className="grid max-w-screen-xl m-auto p-4 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 rounded-xl">
          <div className="m-auto p-4 place-self-center lg:col-span-6 rounded-lg">
            <h1 className="max-w-2xl mb-8 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl text-emerald-500">
              Contact Us
            </h1>
            <a
              href="https://wa.me/c/919810092808"
              className="text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-500"
            >
              <p className="max-w-2xl m-auto lg:mb-4 md:text-lg lg:text-xl">
                +91-9810092808
              </p>
            </a>

            <a
              href="mailto:trellingfood@gmail.com"
              className="text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-500"
            >
              <p className="max-w-2xl m-auto lg:mb-4 md:text-lg lg:text-xl">
                trellingfood@gmail.com
              </p>
            </a>
          </div>
          <div className="lg:m-6 object-center p-8 lg:col-span-6 lg:flex rounded-lg">
            <Image
              src={contactImage}
              alt="featuresImage"
              className="m-auto rounded-xl shadow-xl ring-2 ring-emerald-600 sm:w-[57rem] md:auto lg:auto"
              width={600}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
