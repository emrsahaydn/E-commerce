import { useState } from "react";
import { Link, useParams } from "react-router-dom"; 
import { useSelector } from "react-redux"; 
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Eye } from "lucide-react";

function ProductDetail() {
  const { productId } = useParams(); 
  const [current, setCurrent] = useState(0);

  const product = useSelector((state) => 
    state.product.productList.find((p) => p.id === Number(productId))
  );

  if (!product) {
    return (
      <div className="w-full py-20 text-center">
        <h2 className="text-xl font-bold">Product not found.</h2>
        <Link to="/shop" className="text-blue-500 underline">Back to Shop</Link>
      </div>
    );
  }

  const images = product.images || [];

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full bg-white px-4 md:px-20 py-10 flex flex-col">

      {/* BREADCRUMB - Dinamikleşti */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="font-semibold text-gray-800">Home</Link>
        <span>›</span>
        <Link to="/shop" className="text-gray-500">Shop</Link>
        <span>›</span>
        <span className="text-gray-400">{product.name}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-10">

        {/* LEFT - DYNAMIC GALLERY */}
        <div className="flex flex-col">
          <div className="relative w-[500px] h-[500px]">
            {/* API'den gelen resim */}
            <img
              src={images[current]?.url}
              alt={product.name}
              className="w-full h-full object-cover rounded shadow"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow"
                >
                  <ChevronRight />
                </button>
              </>
            )}
          </div>

          <div className="flex gap-4 mt-6">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                onClick={() => setCurrent(index)}
                className={`w-[100px] h-[75px] object-cover rounded cursor-pointer border
                  ${current === index ? "border-blue-500" : "border-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT - DYNAMIC INFO */}
        <div className="flex flex-col max-w-xl">
          <h2 className="text-3xl font-semibold text-gray-800">{product.name}</h2>

          <div className="flex items-center gap-2 mt-4">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-sm text-gray-500">{product.rating} / 5</span>
          </div>

          <p className="text-2xl font-bold mt-4">{product.price} ₺</p>

          <p className="text-sm mt-1">
            Availability : 
            <span className={`font-semibold ml-1 ${product.stock > 0 ? "text-blue-500" : "text-red-500"}`}>
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </p>

          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            {product.description}
          </p>

          {/* COLORS */}
          <div className="flex items-center gap-3 mt-6">
            <span className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"></span>
            <span className="w-6 h-6 bg-green-500 rounded-full cursor-pointer"></span>
            <span className="w-6 h-6 bg-orange-500 rounded-full cursor-pointer"></span>
            <span className="w-6 h-6 bg-gray-900 rounded-full cursor-pointer"></span>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors">
              Add to Cart
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-50">
              <Heart size={18} />
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-50">
              <ShoppingCart size={18} />
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-50">
              <Eye size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;