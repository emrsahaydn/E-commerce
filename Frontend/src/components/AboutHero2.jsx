import heroImg from "../assets/about/abouthero2.jpg";

export default function AboutHero2() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center">
      {/* SOL TARAF — MAVİ BACKGROUND */}
      <div
        className="
          w-full md:w-3/4 
          bg-[#2A7CC7] 
          text-white 
          flex flex-col justify-center
          px-6 py-16 
          md:px-20 md:py-28
          min-h-[640px]

          items-center md:items-start     /* Mobilde ortala, desktop'ta sola */
          text-center md:text-left        /* Mobil yazılar ortalı */
        "
      >
        {/* ÜST METİN */}
        <p className="text-sm font-semibold tracking-wide">
          WORK WITH US
        </p>

        {/* BAŞLIK */}
        <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-snug">
          Now Let’s grow Yours
        </h2>

        {/* ALT METİN */}
        <p className="text-sm md:text-base text-white/90 mt-4 max-w-md leading-relaxed">
          The gradual accumulation of information about atomic and 
          small-scale behavior during the first quarter of the 20th
        </p>

        {/* BUTTON */}
        <button
          className="
            mt-8 px-8 py-3 
            border border-white 
            rounded-md
            text-white font-semibold
            hover:bg-white hover:text-[#2A7CC7] 
            transition
            w-fit
          "
        >
          Button
        </button>
      </div>

      {/* SAĞ TARAF — GÖRSEL */}
      <div className="hidden md:block w-full md:w-1/2 flex justify-center md:justify-end bg-[#F5F5F5]">
        <img
          src={heroImg}
          alt="About Hero"
          className="
            object-cover
            w-[307px] h-[330px]      
            md:w-[590px] md:h-[640px]
          "
        />
      </div>
    </section>
  );
}
