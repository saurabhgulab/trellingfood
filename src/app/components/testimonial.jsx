import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import z1 from "../images/testimonials/z1.svg";

const testimonial = () => {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  " Successful brand marketing requires the art of crafting
                  enduring impressions that resonate deeply with your audience.
                  Captivate hearts by telling compelling stories that evoke
                  emotions and foster genuine connections. ”
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <Image
                  className="mx-auto h-20 w-20 rounded-full"
                  src={z1}
                  alt=""
                  width={120}
                  height={120}
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">
                    Judith Black
                  </div>
                  <svg
                    viewBox="0 0 2 2"
                    width={10}
                    height={10}
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-gray-600">CEO of Workcation</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default testimonial;
