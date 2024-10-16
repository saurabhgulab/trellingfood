"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Emily from "../images/testimonial.jpg";
import Alice from "../images/testimonial2.jpg";

const testimonial = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <section className="bg-white dark:bg-gray-900">
          <SwiperSlide>
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
                      <p className="text-black ">Offline-Marketing Manager</p>
                    </div>

                    <p className="mt-4 text-lg leading-relaxed text-black md:text-xl">
                      {" "}
                      “Launching a new website which is responsive and unique in
                      an already cluttered market was not an easy task, but the
                      innovative and quirky approach keeping youth in mind did
                      the trick. We worked tirelessly for many days to crack the
                      idea but when we cracked it, it was talk of the town.”.
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-6xl p-10 mx-auto">
              <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                <div className="absolute w-full bg-emerald-200 -z-10 md:h-96 rounded-2xl"></div>

                <div className="w-full p-6 bg-emerald-200 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                  <Image
                    className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                    src={Alice}
                    alt="client photo"
                  />

                  <div className="mt-2 md:mx-6">
                    <div>
                      <p className="text-xl font-bold tracking-tight text-black">
                        Alice
                      </p>
                      <p className="text-black ">Social Media Intern</p>
                    </div>

                    <p className="mt-4 text-lg leading-relaxed text-black md:text-xl">
                      {" "}
                      “She is responsible for creating, curating, and managing
                      published content across social media platforms to build
                      brand awareness and engagement. She develops and
                      implements social media strategies, monitors analytics,
                      and interacts with followers to foster a strong online
                      community. Her role also includes collaborating with
                      content creators, designers, and marketing teams to craft
                      compelling campaigns that align with business goals.
                      Additionally, she tracks trends and platform updates to
                      optimize posts, increase reach, and maintain a consistent
                      brand voice. She plays a key role in enhancing the brand's
                      online reputation and driving customer interaction”.
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </SwiperSlide>
        </section>
      </Swiper>
    </>
  );
};

export default testimonial;
