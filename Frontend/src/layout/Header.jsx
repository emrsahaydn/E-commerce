import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Search, ShoppingCart, Heart,Menu } from "lucide-react";
import { useState } from "react";



function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col">
      {/* TOP BAR */}
<div className="w-full bg-gray-900 text-white text-xs md:text-sm flex flex-col md:flex-row justify-between items-center px-4 py-2 gap-2">

  {/* LEFT SIDE */}
  <div className="flex items-center gap-4">
    <span>(225) 555-0118</span>
    <span>michelle.rivera@example.com</span>
  </div>

  {/* CENTER TEXT */}
  <div className="text-center">
    Follow Us and get a chance to win 80% off
  </div>

  {/* RIGHT SIDE */}
  {/* RIGHT SIDE */}
<div className="flex items-center gap-3">
  <span>Follow Us :</span>
    <Instagram className="w-4 h-4 cursor-pointer" />
    <Youtube className="w-4 h-4 cursor-pointer" />
    <Facebook className="w-4 h-4 cursor-pointer" />
    <Twitter className="w-4 h-4 cursor-pointer" />
  
</div>

</div>


      {/* MAIN NAVBAR */}
<div className="w-full bg-white flex justify-between items-center px-4 py-4">
  {/* MOBILE MENU */}
{isMenuOpen && (
  <div className="w-full bg-white flex flex-col px-4 py-4 gap-4 md:hidden text-gray-700 text-sm border-t">
    <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
    <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
    <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
    <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
    <Link to="/pages" onClick={() => setIsMenuOpen(false)}>Pages</Link>

    <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-blue-600">
      Login / Register
    </Link>
  </div>
)}


  {/* LOGO */}
  <div className="text-2xl font-bold text-gray-800">
    Bandage
  </div>

  {/* MENU (Desktop Only) */}
  <nav className="hidden md:flex gap-6 text-gray-600 text-sm">
    <Link to="/">Home</Link>
    <Link to="/shop">Shop</Link>
    <Link to="/about">About</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/pages">Pages</Link>
  </nav>

  {/* RIGHT SECTION */}
<div className="flex items-center gap-4 text-sm text-blue-600">

  {/* LOGIN DESKTOP */}
  <Link to="/login" className="hidden md:block">
    Login / Register
  </Link>

  {/* ICONS (Desktop Only for wishlist) */}
  <Search className="w-5 h-5 cursor-pointer text-gray-600 hidden md:block" />
  <Heart className="w-5 h-5 cursor-pointer text-gray-600 hidden md:block" />
  <ShoppingCart className="w-5 h-5 cursor-pointer text-gray-600 hidden md:block" />

  {/* MOBILE MENU ICON (md:hidden means only mobile) */}
  <Menu
  className="w-6 h-6 cursor-pointer md:hidden"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
/>

</div>

</div>

    </header>
  );
}

export default Header;
