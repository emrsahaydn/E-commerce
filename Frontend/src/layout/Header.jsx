import { Link } from "react-router-dom";
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

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col">

      <div className="hidden md:flex w-full bg-gray-900 text-white text-sm justify-between items-center px-4 py-2">
        <div className="flex items-center gap-4">
          <span>(225) 555-0118</span>
          <span>michelle.rivera@example.com</span>
        </div>

        <div>
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

     <div className="w-full bg-white flex justify-between items-center px-4 py-4 md:px-8 relative">

  {/* LOGO */}
  <div className="text-2xl font-bold text-gray-800">
    Bandage
  </div>

  {/* DESKTOP MENU */}
  <nav className="hidden md:flex gap-6 text-gray-600 text-sm">
    <Link to="/">Home</Link>
    <Link to="/product">Product</Link>
    <Link to="/pricing">Pricing</Link>
    <Link to="/contact">Contact</Link>
  </nav>

  {/* ICONS RIGHT */}
  <div className="flex items-center gap-4 text-gray-800">
    <User className="w-5 h-5 cursor-pointer" />
    <Search className="w-5 h-5 cursor-pointer" />
    <ShoppingCart className="w-5 h-5 cursor-pointer" />
    <Menu
      className="w-6 h-6 cursor-pointer md:hidden"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    />
  </div>

  {/* MOBILE MENU */}
  {isMenuOpen && (
    <div className="absolute inset-x-0 top-full bg-white md:hidden flex flex-col items-center gap-6 py-10 text-lg text-gray-700 shadow-lg z-50">
      <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
      <Link to="/product" onClick={() => setIsMenuOpen(false)}>Product</Link>
      <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
      <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
    </div>
  )}
</div>

    </header>
  );
}

export default Header;
