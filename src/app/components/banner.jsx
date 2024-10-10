import Image from "next/image";
import bannerImage from "../images/banner-image.jpg";
import React from "react";

const banner = () => {
  return (
    <>
      <div className="p-6 m-auto" id="banner-body">
        <div className="grid max-w-screen-xl m-auto p-4 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-black rounded-xl">
          <div className="m-auto p-4 place-self-center lg:col-span-6 rounded-lg">
            <h1 className="max-w-2xl p-2 mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl text-white ">
              Where <span className="text-emerald-500">creativity</span> meets
              strategy to elevate your presence in the digital age.
            </h1>
            <p className="max-w-2xl m-auto p-2 font-sans mb-4  md:text-lg lg:text-xl text-white">
              Here at Trellingfood we focus on businesses where technology,
              innovation, and capital can unlock long-term value and drive
              economic growth.
            </p>

            <a
              href="/services"
              className="inline-flex items-center justify-center p-3 text-base font-medium text-center text-emerald-500 border border-emerald-500 rounded-lg hover:bg-emerald-50 focus:ring-4 "
            >
              Learn more
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div className="lg:m-6 lg:col-span-5 lg:flex rounded-lg">
            <Image
              src={bannerImage}
              alt="featuresImage"
              className="m-auto rounded-xl shadow-xl ring-2 ring-gray-400/10 sm:w-[57rem] md:auto lg:auto"
              width={600}
              height={200}
              loading="eager"
              priority={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default banner;
