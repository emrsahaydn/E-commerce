import a1 from "../assets/about/a1.png";

export default function AboutHero() {
  return (
    <section
      className="
        w-full bg-white 
        flex flex-col md:flex-row 
        items-center justify-between 
        px-6 md:px-24 lg:px-40 
        pt-10 pb-0 md:py-4
        relative overflow-hidden
      "
    >
      {/* SOL METİN */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6 z-20">
        <p className="text-sm font-semibold text-gray-700 tracking-wider">
          ABOUT COMPANY
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-[#252B42]">
          ABOUT US
        </h1>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
          We know how large objects will act, <br />
          but things on a small scale just do not act that way.
        </p>

        <button className="bg-[#23A6F0] text-white font-semibold text-sm md:text-base px-6 py-3 rounded-md mt-4 w-[180px] md:w-fit hover:bg-blue-500 transition">
          Get Quote Now
        </button>
      </div>

      {/* SAĞ GÖRSEL */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-20 md:mt-0 z-10">
        <img
          src={a1}
          alt="About"
          className="
            w-[375px] 
            h-[439px]
            md:w-[571px] md:h-[668px] 
            object-cover
            md:left-1/4
            relative z-20
          "
        />
      </div>

      

      {/* BÜYÜK PEMBE DAİRE (arkadaki) */}
      <div
        className="
          absolute 
          w-[295px] h-[295px]
          md:w-[484px] md:h-[484px]
          bg-[#FFE9EA] rounded-full opacity-80
          top-[430px] left-1/2 -translate-x-1/2
          md:top-[40px] md:right-20 md:left-auto md:translate-x-0
          z-0
        "
      ></div>

      {/* Üst soldaki küçük pembe daire */}
      <div
        className="
          absolute 
          w-[47px] h-[47px] bg-[#FFE9EA] rounded-full opacity-70
          top-[470px] left-[40px]
          md:w-[77px] md:h-[77px]
          md:top-[40px] md:left-[55%]
          z-0
        "
      ></div>

      {/* Alt sağ küçük pembe daire */}
      <div
        className="
          absolute w-[18px] h-[18px] bg-[#FFE9EA] rounded-full opacity-70
          bottom-[220px] right-[100px]
          md:w-[30px] md:h-[30px]
          md:right-[35px] md:top-[280px]
          z-10
        "
      ></div>

      {/* Mor nokta 1 (orta alt) */}
      <div
        className="
          absolute w-[9px] h-[9px] bg-[#977DF4] rounded-full
          bottom-[300px] left-[83%]
            md:w-[14px] md:h-[14px]
          md:right-[620px] md:top-[400px]
          md:left-auto
          z-10
        "
      ></div>

      {/* Mor nokta 2 (alt sol) */}
      <div
        className="
          absolute w-[9px] h-[9px] bg-[#977DF4] rounded-full
          bottom-[100px] left-[40px]
          md:w-[14px] md:h-[14px]
          md:left-auto md:bottom-[600px] md:right-[50px]
          z-10
        "
      ></div>
    </section>
  );
}
