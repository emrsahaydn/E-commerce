import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSlider1 from "../assets/HeroSlider1.jpg";
import { Navigation, Pagination } from "swiper/modules";
import { useHistory } from "react-router-dom";

function HeroSlider() {
  const history = useHistory();
  return (
    <div className="w-full h-[753px]">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        style={{
          "--swiper-navigation-color": "#FFF",
          "--swiper-pagination-color": "#FFF",
        }}
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
  <div className="relative w-full h-[753px] overflow-hidden">

    {/* BACKGROUND IMAGE — Mobile crop 414px */}
    <img
  src={HeroSlider1}
  alt="Hero Slide"
  className="
    w-full min-w-[414px] h-full object-cover 
    scale-[1.3]           
    md:scale-100          
    md:w-full md:min-w-0 md:h-full md:object-cover
  "
/>



    {/* TEXT CONTENT */}
    <div
      className="
        absolute inset-0
        flex flex-col 
        items-center md:items-start
        justify-center
        text-center md:text-left
        px-6 md:px-40
        gap-4
      "
    >
      <p className="text-white text-sm md:text-lg tracking-wide">
        SUMMER 2020
      </p>

      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
        NEW COLLECTION
      </h1>

      <p className="text-white text-sm md:text-base max-w-xs md:max-w-md">
        We know how large objects will act, but things on a small scale.
      </p>

      <button
        className="
          bg-green-600 text-white 
          px-10 md:px-6 
          py-3 
          rounded-md 
          text-md md:text-base 
          font-semibold
          mt-4
        "
        onClick={() => history.push('/shop')}
      >
        SHOP NOW
      </button>
    </div>
  </div>
</SwiperSlide>


        {/* SLIDE 2 */}
        <SwiperSlide>
          <div className="w-full h-[753px] flex items-center justify-center bg-green-500 text-white text-2xl">
            Slide 2
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <div className="w-full h-[753px] flex items-center justify-center bg-purple-500 text-white text-2xl">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
