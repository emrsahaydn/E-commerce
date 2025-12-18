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


  const user = useSelector((state) => state.client.user);


  const categories = useSelector((state) => state.product.categories);


  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);


  const womenCategories = categories.filter((c) => c.gender === "k");
  const menCategories = categories.filter((c) => c.gender === "e");

 
  const buildCategoryLink = (cat) => {

    const genderSegment = cat.gender === "k" ? "kadin" : "erkek";
    

    const categorySegment = cat.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]/g, "-") 
      .replace(/-+/g, "-")       
      .replace(/^-|-$/g, "");    

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
        <div className="text-center font-bold">
          Follow Us and get a chance to win 80% off
        </div>
        <div className="flex items-center gap-3">
          <span>Follow Us :</span>
          <Instagram className="w-4 h-4 cursor-pointer hover:text-[#23A6F0]" />
          <Youtube className="w-4 h-4 cursor-pointer hover:text-[#23A6F0]" />
          <Facebook className="w-4 h-4 cursor-pointer hover:text-[#23A6F0]" />
          <Twitter className="w-4 h-4 cursor-pointer hover:text-[#23A6F0]" />
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
        <h2 className="text-2xl font-bold text-[#252B42] cursor-pointer">
          <Link to="/">Bandage</Link>
        </h2>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-[#737373] relative">
          <Link to="/" className="hover:text-[#252B42]">Home</Link>

          {/* SHOP DROPDOWN WRAPPER */}
          <div className="relative group">
            <Link to="/shop" className="flex items-center gap-1 cursor-pointer hover:text-[#252B42]">
              Shop <span className="text-[10px]">▼</span>
            </Link>

            {/* DROPDOWN CONTENT */}
            <div
              className="
                absolute left-[-50px] top-full mt-2 
                bg-white shadow-xl rounded-lg p-6 
                opacity-0 invisible 
                group-hover:opacity-100 group-hover:visible
                transition-all duration-300 
                w-[350px] 
                flex justify-between
                z-50 border border-gray-100
              "
            >
              {/* Kadın Bölümü */}
              <div className="flex flex-col gap-3 min-w-[130px]">
                <h4 className="font-bold text-[#252B42] border-b pb-1 mb-1">Kadın</h4>
                {womenCategories.length > 0 ? (
                  womenCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={buildCategoryLink(cat)}
                      className="text-sm font-medium text-[#737373] hover:text-[#23A6F0] hover:translate-x-1 transition-transform"
                    >
                      {cat.title}
                    </Link>
                  ))
                ) : (
                  <span className="text-xs text-gray-400">Yükleniyor...</span>
                )}
              </div>

              {/* Erkek Bölümü */}
              <div className="flex flex-col gap-3 min-w-[130px]">
                <h4 className="font-bold text-[#252B42] border-b pb-1 mb-1">Erkek</h4>
                {menCategories.length > 0 ? (
                  menCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={buildCategoryLink(cat)}
                      className="text-sm font-medium text-[#737373] hover:text-[#23A6F0] hover:translate-x-1 transition-transform"
                    >
                      {cat.title}
                    </Link>
                  ))
                ) : (
                  <span className="text-xs text-gray-400">Yükleniyor...</span>
                )}
              </div>
            </div>
          </div>

          <Link to="/about" className="hover:text-[#252B42]">About</Link>
          <Link to="/team" className="hover:text-[#252B42]">Team</Link>
          <Link to="/contact" className="hover:text-[#252B42]">Contact</Link>
        </nav>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-5">
          {!user ? (
            <div className="hidden md:flex items-center gap-1 text-[#23A6F0] font-bold">
              <User className="w-4 h-4" />
              <Link to="/login" className="hover:underline">Login</Link>
              <span>/</span>
              <Link to="/signup" className="hover:underline">Register</Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3 text-[#23A6F0] font-bold">
              <div className="flex items-center gap-2">
                <Gravatar email={user.email} className="rounded-full w-6 h-6 shadow-sm" />
                <span className="text-[#252B42]">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-700 text-sm border border-red-200 px-2 py-1 rounded"
              >
                Logout
              </button>
            </div>
          )}

          <div className="flex items-center gap-4 text-[#23A6F0]">
            <Search className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
            <div className="flex items-center gap-1 cursor-pointer hover:scale-110 transition-transform">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-xs font-bold">1</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:scale-110 transition-transform">
              <Heart className="w-5 h-5" />
              <span className="text-xs font-bold">1</span>
            </div>
          </div>

          <Menu
            className="w-6 h-6 md:hidden text-[#252B42] cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 bg-white border-b px-6 py-8 text-center text-[#737373] text-xl font-medium animate-in fade-in slide-in-from-top-4 duration-300">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/team" onClick={() => setIsMenuOpen(false)}>Team</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>

          {!user ? (
            <div className="flex flex-col items-center gap-4 text-[#23A6F0] font-bold mt-2">
              <User className="w-6 h-6 inline-block" />
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
              <Link to="/signup" className="bg-[#23A6F0] text-white px-8 py-3 rounded-md w-full" onClick={() => setIsMenuOpen(false)}>Register</Link>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
               <div className="flex items-center gap-2">
                <Gravatar email={user.email} className="rounded-full w-10 h-10" />
                <span className="text-[#252B42]">{user.name}</span>
              </div>
              <button onClick={handleLogout} className="text-red-500 font-bold border-b border-red-100 w-full pb-2">Logout</button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;