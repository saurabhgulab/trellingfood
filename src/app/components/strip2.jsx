import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import companies from "../images/companies.svg";
const strip2 = () => {
  return (
    <>
      <Marquee>
        <Image className="bg-black py-6" src={companies} alt="" />
      </Marquee>
    </>
  );
};

export default strip2;
