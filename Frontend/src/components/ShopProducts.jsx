import shop1 from "../assets/shopimg/shop1.jpg";
import shop2 from "../assets/shopimg/shop2.jpg";
import shop3 from "../assets/shopimg/shop3.jpg";
import shop4 from "../assets/shopimg/shop4.jpg";
import shop5 from "../assets/shopimg/shop5.jpg";
import shop6 from "../assets/shopimg/shop6.jpg";
import shop7 from "../assets/shopimg/shop7.jpg";
import shop8 from "../assets/shopimg/shop8.jpg";
import shop9 from "../assets/shopimg/shop9.jpg";
import shop10 from "../assets/shopimg/shop10.jpg";
import shop11 from "../assets/shopimg/shop11.jpg";
import shop12 from "../assets/shopimg/shop12.jpg";

const products = [
  shop1, shop2, shop3, shop4,
  shop5, shop6, shop7, shop8,
  shop9, shop10, shop11, shop12
];

function ShopProducts() {
  return (
    <div className="w-full flex flex-col items-center py-12">

      {/* PRODUCT LIST */}
      <div className="w-full max-w-[1300px] flex flex-wrap justify-center gap-10">
        {products.map((img, index) => (
          <div key={index} className="flex flex-col items-center">

            {/* IMAGE */}
            <img
              src={img}
              alt="product"
              className="
                w-[348px] h-[427px]   /* MOBIL */
                md:w-[239px] md:h-[300px]  /* MASAÜSTÜ */
                object-cover mx-auto
              "
            />

            {/* TITLE */}
            <h3 className="text-[15px] font-semibold mt-3">Graphic Design</h3>
            <p className="text-gray-500 text-sm">English Department</p>

            {/* PRICE */}
            <div className="flex gap-2 mt-1">
              <span className="text-gray-500 text-sm">$16.48</span>
              <span className="text-green-500 font-semibold text-sm">$6.48</span>
            </div>

            {/* COLORS */}
            <div className="flex gap-2 mt-3">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-600 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            </div>

          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex items-center gap-3 mt-12">
        <button className="border px-4 py-2 text-gray-600 rounded">First</button>
        <button className="border px-4 py-2 rounded">1</button>
        <button className="border px-4 py-2 bg-blue-500 text-white rounded">2</button>
        <button className="border px-4 py-2 rounded">3</button>
        <button className="border px-4 py-2 text-gray-600 rounded">Next</button>
      </div>

    </div>
  );
}

export default ShopProducts;
