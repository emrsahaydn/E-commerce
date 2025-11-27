import resim1 from "../assets/menu3/resim1.jpg";
import resim2 from "../assets/menu3/resim2.jpg";
import resim3 from "../assets/menu3/resim3.jpg";
import resim4 from "../assets/menu3/resim4.jpg";
import resim5 from "../assets/menu3/resim5.jpg";
import resim6 from "../assets/menu3/resim6.jpg";
import resim7 from "../assets/menu3/resim7.jpg";
import resim8 from "../assets/menu3/resim8.jpg";

const products = [
  { img: resim1, title: "Graphic Design", dept: "English Department", oldPrice: "16.48", price: "6.48" },
  { img: resim2, title: "Graphic Design", dept: "English Department", oldPrice: "16.48", price: "6.48" },
  { img: resim3, title: "Graphic Design", dept: "English Department", oldPrice: "16.48", price: "6.48" },
  { img: resim4, title: "Graphic Design", dept: "English Department", oldPrice: "16.48", price: "6.48" },
  { img: resim5, title: "Graphic Design", dept: "English Department", oldPrice: "16.48", price: "6.48" },
  { img: resim6, title: "Graphic Design", dept: "English Department", oldPrice: "16.48", price: "6.48" },
  { img: resim7, title: "Graphic Design", dept: "English Department", oldPrice: "16.48", price: "6.48" },
  { img: resim8, title: "Graphic Design", dept: "English Department", oldPrice: "16.48", price: "6.48" },
];

function BestsellerProducts() {
  return (
    <section className="w-full py-16 px-4 md:px-20 bg-white">

      {/* TITLES */}
      <div className="text-center mb-12">
        <p className="text-gray-500 text-sm">Featured Products</p>
        <h2 className="text-xl md:text-2xl font-bold mt-1">BESTSELLER PRODUCTS</h2>
        <p className="text-xs md:text-sm text-gray-400 mt-1">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* PRODUCT LIST - FLEX ONLY */}
      <div className="flex flex-wrap justify-center gap-10">

        {products.map((p, i) => (
          <div key={i} className="flex flex-col items-start w-[239px]">

            {/* IMAGE */}
            <div className="w-[239px] h-[427px] bg-gray-100">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-sm font-semibold text-gray-800 mt-4">
              {p.title}
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              {p.dept}
            </p>

            {/* PRICES */}
            <div className="flex gap-2 mt-2 items-center">
              <span className="text-gray-400 line-through text-xs">${p.oldPrice}</span>
              <span className="text-green-600 font-semibold text-xs">${p.price}</span>
            </div>

            {/* COLOR DOTS */}
            <div className="flex gap-2 mt-3">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="w-3 h-3 rounded-full bg-teal-500"></span>
              <span className="w-3 h-3 rounded-full bg-orange-500"></span>
              <span className="w-3 h-3 rounded-full bg-gray-900"></span>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default BestsellerProducts;
