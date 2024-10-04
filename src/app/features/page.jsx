import Image from "next/image";
import aboutImage from "../images/about-image.jpg";

const Page = () => {
  return (
    <>
      <section
        className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8"
        id="features-body"
      >
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <h1 className="text-center text-2xl tracking-tight leading-none font-extrabold text-gray-900 md:text-3xl xl:text-5xl">
              We help businesses in the digital management of their operations.
              From e-commerce to websites to the right technology and marketing
              campaigns.
            </h1>

            <Image
              className="rounded-lg m-auto p-8 my-4 place-self-center"
              src={aboutImage}
              alt=""
              width={400}
              height={400}
              loading="eager"
              priority={true}
            />
            <h2 className="text-center text-2xl tracking-tight leading-none font-extrabold text-emerald-500 md:text-3xl xl:text-5xl">
              {" "}
              We take care of it all!
            </h2>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Page;
