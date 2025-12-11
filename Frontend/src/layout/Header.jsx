import { Link, useHistory } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Search,
  ShoppingCart,
  Heart,
  Menu,
  User,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Gravatar from "react-gravatar";
import { setUser } from "../store/clientActions";
import { fetchCategories } from "../store/thunkActions";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  // LOGIN OLAN USER
  const user = useSelector((state) => state.client.user);

  // CATEGORIES REDUX’TAN
  const categories = useSelector((state) => state.product.categories);

  // HEADER MOUNT OLDUĞUNDA CATEGORIES ÇEK
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // KADIN / ERKEK AYIR
  const womenCategories = categories.filter((c) => c.gender === "k");
  const menCategories = categories.filter((c) => c.gender === "e");

  // URL OLUŞTURMA YARDIMCI FONKSİYON
  const buildCategoryLink = (cat) => {
    const genderSegment = cat.gender === "k" ? "kadin" : "erkek";
    // "k:tisort" → "tisort"
    const slugFromCode = cat.code?.split(":")[1] || "";
    const categorySegment =
      slugFromCode || cat.title.toLowerCase().replace(/\s+/g, "-");

    return `/shop/${genderSegment}/${categorySegment}/${cat.id}`;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    dispatch(setUser(null));
    history.push("/");
  };

  return (
    <header className="w-full flex flex-col relative z-50">
      {/* TOP BAR */}
      <div className="hidden md:flex w-full bg-[#252B42] text-white text-sm justify-between items-center px-4 py-2">
        <div className="flex items-center gap-4">
          <span>(225) 555-0118</span>
          <span>michelle.rivera@example.com</span>
        </div>

        <div className="text-center">
          Follow Us and get a chance to win 80% off
        </div>

        <div className="flex items-center gap-3">
          <span>Follow Us :</span>
          <Instagram className="w-4 h-4 cursor-pointer" />
          <Youtube className="w-4 h-4 cursor-pointer" />
          <Facebook className="w-4 h-4 cursor-pointer" />
          <Twitter className="w-4 h-4 cursor-pointer" />
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-200 relative">
        <h2 className="text-2xl font-bold text-[#252B42] cursor-pointer">
          <Link to="/">Bandage</Link>
        </h2>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700 relative">
          <Link to="/">Home</Link>

          {/* SHOP DROPDOWN WRAPPER */}
          <div className="relative group">
            {/* SHOP LINK (tıklayınca /shop'a gider) */}
            <Link to="/shop" className="flex items-center gap-1 cursor-pointer">
              Shop <span className="text-sm">▼</span>
            </Link>

            {/* DROPDOWN CONTENT */}
            <div
              className="
                absolute left-0 top-full mt-3 
                bg-white shadow-lg rounded-md p-6 
                opacity-0 invisible 
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200 
                w-[360px]   /* biraz küçülttük */
                flex gap-10 /* kadın / erkek birbirine yakın */
                z-50
              "
            >
              {/* Kadın */}
              <div className="flex flex-col gap-2 min-w-[140px]">
                <h4 className="font-semibold text-[#252B42] mb-1">Kadın</h4>
                {womenCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={buildCategoryLink(cat)}
                    className="text-sm text-gray-700 hover:text-[#23A6F0]"
                  >
                    {cat.title}
                  </Link>
                ))}
                {womenCategories.length === 0 && (
                  <span className="text-xs text-gray-400">Yükleniyor...</span>
                )}
              </div>

              {/* Erkek */}
              <div className="flex flex-col gap-2 min-w-[140px]">
                <h4 className="font-semibold text-[#252B42] mb-1">Erkek</h4>
                {menCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={buildCategoryLink(cat)}
                    className="text-sm text-gray-700 hover:text-[#23A6F0]"
                  >
                    {cat.title}
                  </Link>
                ))}
                {menCategories.length === 0 && (
                  <span className="text-xs text-gray-400">Yükleniyor...</span>
                )}
              </div>
            </div>
          </div>

          <Link to="/about">About</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product">Product</Link>
        </nav>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-6">
          {!user ? (
            <div className="hidden md:flex items-center gap-2 text-[#23A6F0] font-medium">
              <User className="w-4 h-4" />
              <Link to="/login">Login</Link>
              <span>/</span>
              <Link to="/signup">Register</Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3 text-[#23A6F0] font-medium">
              <Gravatar email={user.email} className="rounded-full w-6 h-6" />
              <span>{user.name}</span>
              <button
                onClick={handleLogout}
                className="text-red-600 font-medium hover:underline"
              >
                Logout
              </button>
            </div>
          )}

          <Search className="w-5 h-5 text-[#23A6F0] cursor-pointer" />

          <div className="flex items-center gap-1 text-[#23A6F0] cursor-pointer">
            <ShoppingCart className="w-5 h-5" />
            <span className="text-sm font-semibold">1</span>
          </div>

          <div className="flex items-center gap-1 text-[#23A6F0] cursor-pointer">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-semibold">1</span>
          </div>

          <Menu
            className="w-6 h-6 md:hidden text-[#252B42] cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-white shadow px-6 py-4 text-center z-50">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>

          {!user ? (
            <div className="flex items-center gap-2 text-[#23A6F0] font-medium mt-2">
              <User className="w-4 h-4" />
              <Link to="/login">Login</Link>
              <span>/</span>
              <Link to="/signup">Register</Link>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-[#23A6F0]">
              <Gravatar email={user.email} className="rounded-full w-8 h-8" />
              <span>{user.name}</span>
              <button
                onClick={handleLogout}
                className="text-red-600 font-medium"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
