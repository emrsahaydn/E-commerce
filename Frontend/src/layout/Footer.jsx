import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA] text-gray-700 pt-10">

      {/* ÜST KISIM: Logo + Sosyal Medya */}
      <div className="
  w-full 
  flex flex-col md:flex-row 
  items-start md:items-center 
  justify-start md:justify-between 
  px-6 md:px-20 
  pb-6 
  gap-4
">

        <h2 className="text-2xl font-bold text-gray-900">Bandage</h2>

        <div className="flex gap-4 mt-4 md:mt-0">
          <Facebook size={20} className="text-blue-500 cursor-pointer" />
          <Instagram size={20} className="text-blue-500 cursor-pointer" />
          <Twitter size={20} className="text-blue-500 cursor-pointer" />
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* ORTA KISIM: 5 Kolon */}
      <div className="w-full flex flex-col md:flex-row justify-between px-6 md:px-20 py-10 gap-10">

        {/* COMPANY INFO */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-gray-900">Company Info</h3>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>

        {/* LEGAL */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-gray-900">Legal</h3>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>

        {/* FEATURES */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-gray-900">Features</h3>
          <p>Business Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>

        {/* RESOURCES */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-gray-900">Resources</h3>
          <p>IOS & Android</p>
          <p>Watch a Demo</p>
          <p>Customers</p>
          <p>API</p>
        </div>

        {/* GET IN TOUCH */}
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <h3 className="font-semibold text-gray-900">Get In Touch</h3>

          <div className="flex w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Your Email"
              className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-l-md outline-none"
            />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>

          <p className="text-xs text-gray-500">Lore imp sum dolor Amit</p>
        </div>

      </div>

      {/* ALT YAZI */}
      <div
  className="
    w-full 
    bg-[#FAFAFA] 
    py-4 
    text-center md:text-left 
    px-6 md:px-20 
    text-sm
  "
  style={{ color: "#737373" }}
>
  Made With Love 

  <span className="hidden md:inline"> By </span>


  <span className="md:hidden"> By <br /> </span>

  Finland All Right Reserved
</div>


    </footer>
  );
}

export default Footer;
