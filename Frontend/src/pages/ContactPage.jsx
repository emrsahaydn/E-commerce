import bgImg from "../assets/HeroSlider1.jpg";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function ContactPage() {
  return (
    <div>
      <Header />

      <section
        className="
          w-full
          min-h-[832px]
          text-white
          flex flex-col md:flex-row
          items-center md:items-start
          justify-between
          px-6 md:px-40
          py-40
          bg-cover
          bg-center
          relative
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,54,79,0.9), rgba(0,54,79,0.3), rgba(0,54,79,0)),
            url(${bgImg})
          `,
        }}
      >

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 mt-10 md:mt-20">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">
            CONTACT US
          </h1>

          <p className="text-sm max-w-[350px] leading-relaxed opacity-90">
            Problems trying to resolve the conflict between
            the two major realms of Classical physics: <br />
            Newtonian mechanics
          </p>

          <button className="mt-4 bg-[#23A6F0] w-[177px] h-[52px] rounded-md font-semibold shadow-lg hover:bg-blue-500 transition">
            CONTACT US
          </button>
        </div>

        {/* RIGHT SECTION – FLEX VERSION */}
        <div
          className="
            w-full md:w-1/2
            flex
            flex-col md:flex-row
            gap-12
            mt-16 md:mt-20
            text-white
            z-10
          "
        >

          {/* COLUMN 1 */}
          <div className="flex flex-col gap-10">
            {/* PARIS */}
            <div>
              <h3 className="text-lg font-semibold">Paris</h3>
              <p className="opacity-90">1901 Thorn ridge Cir.</p>
              <p className="opacity-70 mt-1">75000 Paris</p>
              <p className="opacity-70 mt-1">Phone : +451 215 215</p>
              <p className="opacity-70 mt-1">Fax : +451 215 215</p>
            </div>

            {/* BERLIN */}
            <div>
              <h3 className="text-lg font-semibold">Berlin</h3>
              <p className="opacity-90">4140 Parker Rd.</p>
              <p className="opacity-70 mt-1">75000 Paris</p>
              <p className="opacity-70 mt-1">Phone : +451 215 215</p>
              <p className="opacity-70 mt-1">Fax : +451 215 215</p>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-10">
            {/* NEW YORK */}
            <div>
              <h3 className="text-lg font-semibold">New York</h3>
              <p className="opacity-90">2715 Ash Dr. San Jose,</p>
              <p className="opacity-70 mt-1">75000 Paris</p>
              <p className="opacity-70 mt-1">Phone : +451 215 215</p>
              <p className="opacity-70 mt-1">Fax : +451 215 215</p>
            </div>

            {/* LONDON */}
            <div>
              <h3 className="text-lg font-semibold">London</h3>
              <p className="opacity-90">3517 W. Gray St. Utica,</p>
              <p className="opacity-70 mt-1">75000 Paris</p>
              <p className="opacity-70 mt-1">Phone : +451 215 215</p>
              <p className="opacity-70 mt-1">Fax : +451 215 215</p>
            </div>
          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
}

export default ContactPage;
