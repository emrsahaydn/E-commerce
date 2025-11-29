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
    <div className="w-full h-[320px] md:h-[480px] lg:h-[520px] bg-[#23856D] flex flex-col md:flex-row items-center justify-between px-4 md:px-12 lg:px-20 py-8 md:py-12">
      {/* Aynı içerik, veya ufak değişiklik yapabilirsin */}
      {/* Örneğin başlığı değiştir: */}
      <div className="flex-1 flex flex-col items-start gap-4 text-white max-w-xl">
        <p className="text-xs md:text-sm tracking-wide">
          SUMMER 2020
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Vita Classic <br /> Product 2
        </h2>

        <p className="text-xs md:text-sm text-gray-100 max-w-md">
          We know how large objects will act, We know how are objects will act, We know
        </p>

        <div className="flex items-center gap-4 mt-2">
          <span className="text-lg md:text-xl font-bold">
            $18.99
          </span>
          <button className="bg-[#2DC071] hover:bg-[#28a867] text-white px-6 py-2 md:px-8 md:py-3 rounded-md text-xs md:text-sm font-semibold transition">
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
        <img
          src={SliderMan}
          alt="Vita Classic Product 2"
          className="h-[230px] md:h-[360px] lg:h-[420px] object-contain"
        />
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="w-full h-[320px] md:h-[480px] lg:h-[520px] bg-[#23856D] flex flex-col md:flex-row items-center justify-between px-4 md:px-12 lg:px-20 py-8 md:py-12">
      {/* ... burası mevcut metin + görselin olduğu kısım ... */}
    </div>
  </SwiperSlide>

  
  
</Swiper>

    </section>
  );
}

export default SecondHeroSlider;
