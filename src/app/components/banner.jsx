import Image from "next/image";
import bannerImage from "../images/eb680f8bdc4031227e8ce78ee2a2d46b.svg";
import React from "react";

const banner = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="mx-auto max-w-2xl py-28 sm:py-48 lg:py-56">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Where creativity meets strategy to elevate your presence in the
              digital age.
            </h1>
          </div>
          <Image
            className="banner-image-1"
            src={bannerImage}
            alt="Banner Image"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default banner;
