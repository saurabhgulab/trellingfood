import Image from "next/image";
import Emily from "../images/testimonial.jpg";

const testimonial = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-6xl p-10 mx-auto">
          <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-emerald-200 -z-10 md:h-96 rounded-2xl"></div>

            <div className="w-full p-6 bg-emerald-200 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
              <Image
                className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                src={Emily}
                alt="client photo"
              />

              <div className="mt-2 md:mx-6">
                <div>
                  <p className="text-xl font-bold tracking-tight text-black">
                    Emily Watson
                  </p>
                  <p className="text-black ">
                    Marketing Manager at Trellingfood
                  </p>
                </div>

                <p className="mt-4 text-lg leading-relaxed text-black md:text-xl">
                  {" "}
                  “Launching a new website which is responsive and unique in an
                  already cluttered market was not an easy task, but the
                  innovative and quirky approach keeping youth in mind did the
                  trick. We worked tirelessly for many days to crack the idea
                  but when we cracked it, it was talk of the town.”.
                </p>

                {/* <div className="flex items-center justify-between mt-6 md:justify-start">
                  <button
                    title="left arrow"
                    className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    title="right arrow"
                    className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default testimonial;
