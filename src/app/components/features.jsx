import Image from "next/image";
import aboutImage from "../images/about-image.jpg";

const features = () => {
  return (
    <>
      <section
        className="bg-slate-100 relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8"
        id="features-body"
      >
        <div className=" mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <h1 className="text-center text-2xl tracking-tight leading-none font-extrabold text-gray-900 md:text-3xl xl:text-5xl">
              We help businesses in the digital management of their operations.
              From <span className="text-emerald-500   ">e-commerce</span> to{" "}
              <span className="text-emerald-500">websites</span> to the right
              technology and marketing campaigns.
            </h1>

            <Image
              className="bg-emerald-500 rounded-lg m-auto b-4 p-2 my-4 place-self-center"
              src={aboutImage}
              alt=""
              width={400}
              height={400}
              loading="eager"
              priority={true}
            />
            <h2 className="text-center text-2xl tracking-tight leading-none font-extrabold text-gray-900 md:text-3xl xl:text-5xl">
              {" "}
              We take care of it all!
            </h2>
          </figure>
        </div>
      </section>
    </>
  );
};

export default features;
