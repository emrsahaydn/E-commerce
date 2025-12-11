import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ShopHero() {
  const categories = useSelector((state) => state.product.categories);

  // İlk 5 kategori (rating'e göre sıralayıp alıyoruz)
  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

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

        {/* TOP CATEGORY CARDS */}
        <div className="w-full flex flex-wrap justify-center gap-6">

          {topCategories.map((cat) => {
            const genderText = cat.gender === "k" ? "kadin" : "erkek";
            const categoryName = cat.code.split(":")[1];

            return (
              <Link
                key={cat.id}
                to={`/shop/${genderText}/${categoryName}/${cat.id}`}
                className="
                  relative 
                  w-[332px] h-[300px]
                  md:w-[205px] md:h-[223px]
                  rounded overflow-hidden shadow-md
                  hover:scale-105 transition-transform
                "
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />

                <div className="
                  absolute bottom-0 left-0 right-0 
                  bg-black bg-opacity-40 text-white 
                  p-2 text-center text-lg font-semibold
                ">
                  {cat.title}
                </div>
              </Link>
            );
          })}

        </div>
      </div>
    </div>
  );
}

export default ShopHero;
