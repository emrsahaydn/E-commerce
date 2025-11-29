import CiftImg from "../assets/cift.png";

function NeuralUniverseSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16">

      {/* ANA WRAPPER */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-stretch">

        {/* --- MOBİL TASARIM --- */}
        
        <div className="flex flex-col items-center text-center px-6 mb-5 md:hidden">

          {/* ÜST YAZILAR */}
          <p className="text-xs text-gray-400 tracking-wide mb-3">
            SUMMER 2020
          </p>

          <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
            Part of the <br /> Neural <br /> Universe
          </h2>

          <p className="text-sm text-gray-500 mb-6 max-w-xs">
            We know how large <br /> objects will act, but <br /> things on a small scale.
          </p>

          {/* BUTONLAR */}
          <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md text-xs font-semibold transition mb-3">
            BUY NOW
          </button>

          <button className="border border-[#23A6F0] text-[#23A6F0] px-8 py-3 rounded-md text-xs font-semibold transition">
            Learn More
          </button>

          {/* GÖRSEL */}
          <img
            src={CiftImg}
            alt="Happy couple"
            className="w-full mt-10 object-contain -translate-x-8"
          />
        </div>

       
        <div className="hidden md:flex w-full">
          
          {/* SOL: GÖRSEL */}
          <div className="w-1/2">
            <img
              src={CiftImg}
              alt="Happy couple"
              className="w-full h-[480px] lg:h-[520px] object-cover"
            />
          </div>

          {/* SAĞ: METİN */}
          <div className="w-1/2 flex items-center justify-center">
            <div className="px-16 lg:px-24 max-w-xl">

              <p className="text-sm text-gray-400 tracking-wide mb-2">
                SUMMER 2020
              </p>

              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                Part of the Neural <br /> Universe
              </h2>

              <p className="text-base text-gray-500 mb-6">
                We know how large objects will act, but things on a small scale.
              </p>

              <div className="flex flex-row gap-3">
                <button className="bg-[#2DC071] text-white px-6 py-3 rounded-md">
                  BUY NOW
                </button>

                <button className="border border-[#2DC071] text-[#2DC071] px-6 py-3 rounded-md">
                  READ MORE
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default NeuralUniverseSection;
