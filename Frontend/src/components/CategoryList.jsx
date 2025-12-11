import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CategoryList() {
  const categories = useSelector((state) => state.product.categories);

  // API'den map kullanacağımız değerler:
  // { id, title, img, gender, code }

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
      {categories.map((cat) => {
        const genderText = cat.gender === "k" ? "kadin" : "erkek";
        const nameFromCode = cat.code.split(":")[1]; // ör: "tisort"

        const link = `/shop/${genderText}/${nameFromCode}/${cat.id}`;

        return (
          <Link
            key={cat.id}
            to={link}
            className="border rounded-lg shadow hover:shadow-lg transition p-3 flex flex-col items-center"
          >
            <img src={cat.img} className="w-full rounded-md" />
            <h3 className="text-lg font-semibold mt-3">{cat.title}</h3>
          </Link>
        );
      })}
    </div>
  );
}
