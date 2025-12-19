import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux"; 
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Eye, ArrowLeft } from "lucide-react";
import { fetchProductDetail } from "../store/thunkActions"; 

function ProductDetail() {
  const { productId } = useParams(); 
  const history = useHistory();
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);

  const { activeProduct, fetchState } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductDetail(productId));
  }, [dispatch, productId]);

  if (fetchState === "FETCHING") {
    return (
      <div className="w-full py-40 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-gray-500 font-semibold">Loading product details...</p>
      </div>
    );
  }

  if (!activeProduct) {
    return (
      <div className="w-full py-20 text-center">
        <h2 className="text-xl font-bold">Product not found.</h2>
        <button onClick={() => history.goBack()} className="text-blue-500 underline mt-4">
          Go Back
        </button>
      </div>
    );
  }

  const images = activeProduct.images || [];

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full bg-white px-4 md:px-20 py-10 flex flex-col">
      
      <div className="flex flex-col gap-4 mb-8">
        <button 
          onClick={() => history.goBack()} 
          className="flex items-center gap-2 text-blue-500 hover:text-blue-700 transition-colors font-semibold w-fit"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="font-semibold text-gray-800">Home</Link>
          <span>›</span>
          <Link to="/shop" className="text-gray-500">Shop</Link>
          <span>›</span>
          <span className="text-gray-400">{activeProduct.name}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* LEFT - DYNAMIC GALLERY */}
        <div className="flex flex-col">
          <div className="relative w-full max-w-[500px] aspect-square">
            <img
              src={images[current]?.url}
              alt={activeProduct.name}
              className="w-full h-full object-cover rounded shadow"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-white"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-white"
                >
                  <ChevronRight />
                </button>
              </>
            )}
          </div>

          <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                onClick={() => setCurrent(index)}
                className={`w-[100px] h-[75px] object-cover rounded cursor-pointer border-2 transition-all
                  ${current === index ? "border-blue-500 scale-105" : "border-transparent opacity-70 hover:opacity-100"}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT - DYNAMIC INFO */}
        <div className="flex flex-col max-w-xl">
          <h2 className="text-3xl font-semibold text-gray-800">{activeProduct.name}</h2>

          <div className="flex items-center gap-2 mt-4">
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <span className="text-sm text-gray-500 font-bold">{activeProduct.rating} / 5</span>
          </div>

          <p className="text-2xl font-bold mt-4 text-[#252B42]">{activeProduct.price} ₺</p>

          <p className="text-sm mt-2">
            Availability : 
            <span className={`font-bold ml-1 ${activeProduct.stock > 0 ? "text-blue-500" : "text-red-500"}`}>
              {activeProduct.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </p>

          <p className="text-sm text-[#858585] mt-6 leading-relaxed">
            {activeProduct.description}
          </p>

          <div className="h-[1px] bg-gray-200 w-full my-6" />

          {/* COLORS */}
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 bg-[#23A6F0] rounded-full cursor-pointer hover:ring-2 ring-offset-2 ring-blue-500"></span>
            <span className="w-6 h-6 bg-[#23856D] rounded-full cursor-pointer hover:ring-2 ring-offset-2 ring-green-500"></span>
            <span className="w-6 h-6 bg-[#E77C40] rounded-full cursor-pointer hover:ring-2 ring-offset-2 ring-orange-500"></span>
            <span className="w-6 h-6 bg-[#252B42] rounded-full cursor-pointer hover:ring-2 ring-offset-2 ring-gray-900"></span>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-600 transition-all transform active:scale-95 shadow-md">
              Add to Cart
            </button>
            <div className="flex gap-2">
              <button className="p-3 border rounded-full hover:bg-gray-100 transition-colors bg-white">
                <Heart size={18} />
              </button>
              <button className="p-3 border rounded-full hover:bg-gray-100 transition-colors bg-white">
                <ShoppingCart size={18} />
              </button>
              <button className="p-3 border rounded-full hover:bg-gray-100 transition-colors bg-white">
                <Eye size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;