import Image from "next/image";
import About from "../dummy/About.svg";
import Home from "../dummy/Home.svg";
import Contact from "../dummy/Contact.svg";
import More from "../dummy/More.svg";
import Services from "../dummy/Services.svg";
import React from "react";

const Dummy = () => {
  return (
    <div className=" max-w-screen-xl px-4 py-4 m-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className=" lg:m-6 lg:col-span-5 lg:flex">
        <Image
          src={Home}
          alt="Home"
          className="m-auto rounded-xl shadow-xl ring-2 ring-gray-400/10 sm:w-[57rem] md:auto lg:auto"
          width={1200}
          height={400}
        />
      </div>
      <div className=" lg:m-6 lg:col-span-5 lg:flex">
        <Image
          src={About}
          alt="About"
          className="m-auto rounded-xl shadow-xl ring-2 ring-gray-400/10 sm:w-[57rem] md:auto lg:auto"
          width={1200}
          height={400}
        />
      </div>
      <div className=" lg:m-6 lg:col-span-5 lg:flex">
        <Image
          src={Services}
          alt="Services"
          className="m-auto rounded-xl shadow-xl ring-2 ring-gray-400/10 sm:w-[57rem] md:auto lg:auto"
          width={1200}
          height={400}
        />
      </div>
      <div className=" lg:m-6 lg:col-span-5 lg:flex">
        <Image
          src={More}
          alt="More"
          className="m-auto rounded-xl shadow-xl ring-2 ring-gray-400/10 sm:w-[57rem] md:auto lg:auto"
          width={1200}
          height={400}
        />
      </div>
      <div className=" lg:m-6 lg:col-span-5 lg:flex">
        <Image
          src={Contact}
          alt="Contact"
          className="m-auto rounded-xl shadow-xl ring-2 ring-gray-400/10 sm:w-[57rem] md:auto lg:auto"
          width={1200}
          height={400}
        />
      </div>
    </div>
  );
};

export default Dummy;
