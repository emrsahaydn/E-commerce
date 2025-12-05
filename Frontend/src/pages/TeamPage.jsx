import t1 from "../assets/teamPage/t1.jpg";
import t2 from "../assets/teamPage/t2.jpg";
import t3 from "../assets/teamPage/t3.jpg";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Facebook, Instagram, Twitter } from "lucide-react";

function TeamPage() {
  return (
    <div>
      <Header />

      <section className="w-full py-16 px-6 md:px-20 bg-white">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#252B42]">
            Meet Our Team
          </h2>

          <p className="text-[#737373] text-sm md:text-base mt-3">
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* TEAM CARDS */}
        <div className="
                w-full 
                flex flex-col md:flex-row 
                justify-center 
                items-center md:items-start 
                gap-10 md:gap-6
                px-4
                ">


          {/* CARD 1 */}
          <div className="w-[330px]">
            {/* IMAGE */}
            <img src={t1} className="w-full h-[280px] object-cover" />

            {/* CONTENT */}
            <div className="pt-6 border-t border-gray-200 text-center">
              <h3 className="font-semibold text-gray-800">Username</h3>
              <p className="text-gray-500 text-sm mt-1">Profession</p>

              <div className="flex justify-center gap-6 mt-4 text-[#23A6F0]">
                <Facebook size={20} />
                <Instagram size={20} />
                <Twitter size={20} />
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="w-[330px]">
            <img src={t2} className="w-full h-[280px] object-cover" />

            <div className="pt-6 border-t border-gray-200 text-center">
              <h3 className="font-semibold text-gray-800">Username</h3>
              <p className="text-gray-500 text-sm mt-1">Profession</p>

              <div className="flex justify-center gap-6 mt-4 text-[#23A6F0]">
                <Facebook size={20} />
                <Instagram size={20} />
                <Twitter size={20} />
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="w-[330px]">
            <img src={t3} className="w-full h-[280px] object-cover" />

            <div className="pt-6 border-t border-gray-200 text-center">
              <h3 className="font-semibold text-gray-800">Username</h3>
              <p className="text-gray-500 text-sm mt-1">Profession</p>

              <div className="flex justify-center gap-6 mt-4 text-[#23A6F0]">
                <Facebook size={20} />
                <Instagram size={20} />
                <Twitter size={20} />
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TeamPage;
