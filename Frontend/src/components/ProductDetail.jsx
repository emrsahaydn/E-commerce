import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Eye } from "lucide-react";

import p1 from "../assets/Productdetail/p1.jpg";
import p2 from "../assets/Productdetail/p2.jpg";


const images = [p1, p2];

function ProductDetail() {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full bg-white px-4 md:px-20 py-10 flex flex-col">

      {/* BREADCRUMB */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="font-semibold text-gray-800">Home</Link>
        <span>›</span>
        <Link to="/shop" className="text-gray-500">Shop</Link>
      </div>

      {/* MAIN FLEX ROW */}
      <div className="flex flex-col md:flex-row gap-10">

        {/* LEFT - BIG IMAGE */}
        <div className="flex flex-col">
          
          {/* Main Image */}
          <div className="relative w-[500px] h-[500px]">
            <img
              src={images[current]}
              className="w-full h-full object-cover rounded shadow"
            />

            {/* LEFT ARROW */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow"
            >
              <ChevronLeft />
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow"
            >
              <ChevronRight />
            </button>
          </div>

          {/* THUMBNAIL ROW */}
          <div className="flex gap-4 mt-6">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setCurrent(index)}
                className={`w-[100px] h-[75px] object-cover rounded cursor-pointer border
                  ${current === index ? "border-blue-500" : "border-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT - PRODUCT INFO */}
        <div className="flex flex-col max-w-xl">

          <h2 className="text-3xl font-semibold text-gray-800">Floating Phone</h2>

          {/* Stars + Reviews */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-sm text-gray-500">10 Reviews</span>
          </div>

          {/* Price */}
          <p className="text-2xl font-bold mt-4">$1,139.33</p>

          {/* Availability */}
          <p className="text-sm mt-1">
            Availability : <span className="text-blue-500 font-semibold">In Stock</span>
          </p>

          {/* Description */}
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
            consequent sent nostrum met.
          </p>

          {/* COLORS */}
          <div className="flex items-center gap-3 mt-6">
            <span className="w-6 h-6 bg-blue-500 rounded-full"></span>
            <span className="w-6 h-6 bg-green-500 rounded-full"></span>
            <span className="w-6 h-6 bg-orange-500 rounded-full"></span>
            <span className="w-6 h-6 bg-gray-900 rounded-full"></span>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-4 mt-8">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold">
              Select Options
            </button>

            <button className="p-3 border rounded-full">
              <Heart size={18} />
            </button>

            <button className="p-3 border rounded-full">
              <ShoppingCart size={18} />
            </button>

            <button className="p-3 border rounded-full">
              <Eye size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
