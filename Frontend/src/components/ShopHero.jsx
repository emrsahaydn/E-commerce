import { Link } from "react-router-dom";

import shophero1 from "../assets/shophero/shophero1.png";
import shophero2 from "../assets/shophero/shophero2.png";
import shophero3 from "../assets/shophero/shophero3.png";
import shophero4 from "../assets/shophero/shophero4.png";
import shophero5 from "../assets/shophero/shophero5.png";

const heroImages = [shophero1, shophero2, shophero3, shophero4, shophero5];

function ShopHero() {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1300px] mx-auto px-4">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-[#252B42]">Shop</h1>

          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="font-semibold text-[#252B42] hover:underline">
              Home
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-500">Shop</span>
          </div>
        </div>

        {/* CATEGORY CARDS */}
        <div className="w-full flex flex-wrap justify-center gap-6">

          {heroImages.map((img, index) => (
            <div
              key={index}
              className="
                relative 

                /* 🎯 Mobil boyutlar */
                w-[332px] h-[300px]

                /* 🎯 Masaüstü boyutlar */
                md:w-[205px] md:h-[223px]

                rounded overflow-hidden shadow-md
              "
            >
              {/* IMAGE */}
              <img
                src={img}
                alt="category"
                className="w-full h-full object-cover"
              />

              
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default ShopHero;
