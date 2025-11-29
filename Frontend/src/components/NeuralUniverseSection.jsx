import CiftImg from "../assets/cift.png";

function NeuralUniverseSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="w-full flex flex-col md:flex-row items-center md:items-stretch">

        {/* SOL: GÖRSEL */}
        <div className="w-full md:w-1/2">
          <img
            src={CiftImg}
            alt="Happy couple"
            className="w-full h-[320px] md:h-[480px] lg:h-[520px] object-cover"
          />
        </div>

        {/* SAĞ: METİN */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="px-6 md:px-16 lg:px-24 py-8 md:py-0 max-w-xl">
            <p className="text-xs md:text-sm text-gray-400 tracking-wide mb-2">
              SUMMER 2020
            </p>

            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Part of the Neural <br /> Universe
            </h2>

            <p className="text-sm md:text-base text-gray-500 mb-6">
              We know how large objects will act, but things on a small scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              {/* BUY NOW */}
              <button className="bg-[#2DC071] hover:bg-[#28a867] text-white px-6 py-3 rounded-md text-xs md:text-sm font-semibold transition">
                BUY NOW
              </button>

              {/* READ MORE */}
              <button className="border border-[#2DC071] text-[#2DC071] px-6 py-3 rounded-md text-xs md:text-sm font-semibold hover:bg-[#2DC071] hover:text-white transition">
                READ MORE
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default NeuralUniverseSection;
