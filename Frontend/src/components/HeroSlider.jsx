import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeroSlider1 from "../assets/HeroSlider1.jpg";


function HeroSlider() {
  return (
    <div className="w-full h-[300px] md:h-[500px] bg-blue-200">
      <Swiper>
            <SwiperSlide>
  <div className="relative w-full h-[300px] md:h-[600px] lg:h-[750px]">
    {/* BACKGROUND IMAGE */}
    <img
      src={HeroSlider1}
      alt="Hero Slide"
      className="w-full h-full object-cover"
    />

    {/* TEXT CONTENT */}
    <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-20 gap-4">
      <p className="text-sm md:text-lg text-gray-200 tracking-wide">
        SUMMER 2025 
      </p>

      <h1 className="text-2xl md:text-5xl font-bold text-white max-w-lg leading-tight">
        NEW COLLECTION
      </h1>

      <button className="bg-green-600 text-white px-6 py-3 rounded-md text-sm md:text-base hover:bg-blue-700 transition">
        SHOP NOW
      </button>
    </div>
  </div>
</SwiperSlide>


        <SwiperSlide className="flex items-center justify-center text-white text-2xl font-bold bg-green-500">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-white text-2xl font-bold bg-purple-500">
          Slide 3
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
