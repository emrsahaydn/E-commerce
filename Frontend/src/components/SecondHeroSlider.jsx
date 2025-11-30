import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderMan from "../assets/slider2.png";

function SecondHeroSlider() {
  return (
    <section className="w-full">
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


  <div className="hidden md:flex w-full h-[480px] lg:h-[520px] bg-[#23856D] px-12 lg:px-20 py-12 items-center justify-between">


    <div className="flex-1 flex flex-col items-start gap-4 text-white max-w-xl">
      <p className="text-sm tracking-wide">SUMMER 2020</p>
      <h2 className="text-5xl font-bold leading-tight">
        Vita Classic <br /> Product 
      </h2>
      <p className="text-sm text-gray-100 max-w-md">
        We know how large objects will act, We know how are objects will act
      </p>

      <div className="flex items-center gap-4 mt-2">
        <span className="text-xl font-bold">$18.99</span>
        <button className="bg-[#2DC071] px-8 py-3 rounded-md text-sm font-semibold">
          ADD TO CART
        </button>
      </div>
    </div>

    {/* Desktop Image */}
    <div className="flex-1 flex justify-end">
      <img
        src={SliderMan}
        className="h-[360px] lg:h-[420px] object-contain"
      />
    </div>

  </div>
  {/* END DESKTOP */}
  


<div className="relative md:hidden w-full bg-[#23856D] h-[1230px] px-6 flex flex-col items-center">


  <div
    className="
      absolute 
      top-[30%]
      left-1/2 -translate-x-1/2
      flex flex-col items-center text-center 
      text-white gap-4 max-w-xs
    "
  >
    <p className="text-xs tracking-wider">SUMMER 2020</p>

    <h2 className="text-3xl font-bold leading-tight">
      Vita Classic <br /> Product
    </h2>

    <p className="text-xs text-gray-100">
      We know how large objects will act, but things on a small scale.
    </p>
  </div>


  <div
    className="
      absolute 
      top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2
      flex flex-col items-center gap-3
    "
  >
    <span className="text-white font-bold text-lg">$16.48</span>

    <button className="
      bg-[#2DC071] text-white 
      px-10 py-3 rounded-md 
      text-xs font-semibold
    ">
      ADD TO CART
    </button>
  </div>


  <div className="absolute bottom-[-100px]  w-full flex justify-center pb-0">
    <img
      src={SliderMan}
      className="w-[416px] h-[681px] object-contain -translate-x-12"
    />
  </div>

</div>







</SwiperSlide>

  <SwiperSlide>
    <div className="w-full h-[320px] md:h-[480px] lg:h-[520px] bg-[#23856D] flex flex-col md:flex-row items-center justify-between px-4 md:px-12 lg:px-20 py-8 md:py-12">

    </div>
  </SwiperSlide>

  
  
</Swiper>

    </section>
  );
}

export default SecondHeroSlider;
