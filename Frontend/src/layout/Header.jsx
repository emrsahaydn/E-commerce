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
  User
} from "lucide-react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Gravatar from "react-gravatar";
import { setUser } from "../store/clientActions";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  // REDUX USER
  const user = useSelector((state) => state.client.user);

  // LOGOUT FUNC
  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");

    dispatch(setUser(null));
    history.push("/");
  };

  return (
    <header className="w-full flex flex-col">
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
      <div className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-200">

        {/* LOGO */}
        <h2 className="text-2xl font-bold text-[#252B42] cursor-pointer">
          <Link to="/">Bandage</Link>
        </h2>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-6">

          {/* USER STATUS (DESKTOP) */}
          {!user ? (
            <div className="hidden md:flex items-center gap-2 text-[#23A6F0] font-medium">
              <User className="w-4 h-4" />
              <Link to="/login" className="hover:no-underline">Login</Link>
              <span>/</span>
              <Link to="/signup" className="hover:no-underline">Register</Link>
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

      {/* MOBILE DROPDOWN MENU */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-white shadow px-6 py-4 text-center">

          <Link to="/" className="text-gray-700">Home</Link>
          <Link to="/shop" className="text-gray-700">Shop</Link>
          <Link to="/about" className="text-gray-700">About</Link>
          <Link to="/team" className="text-gray-700">Team</Link>
          <Link to="/contact" className="text-gray-700">Contact</Link>

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
