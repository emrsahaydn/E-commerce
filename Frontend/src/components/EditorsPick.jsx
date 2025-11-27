import img1 from "../assets/menu2/gorsel1.jpg";
import img2 from "../assets/menu2/gorsel2.jpg";
import img3 from "../assets/menu2/gorsel3.jpg";
import img4 from "../assets/menu2/gorsel4.jpg";


function EditorsPick() {
  return (
    <section className="w-full py-12 px-4 md:px-16 bg-white">
      {/* TITLE */}
      <div className="text-center">
        <h2 className="text-sm md:text-base font-bold tracking-widest text-gray-800">
          EDITOR&apos;S PICK
        </h2>
        <p className="text-xs md:text-sm text-gray-500 mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

   {/* CONTENT */}
<div className="mt-8 flex flex-col md:flex-row justify-center gap-4">

  {/* LEFT - MEN */}
  <div className="relative w-[510px] h-[500px]">
    <img
      src={img1}
      alt="Men"
      className="w-full h-full object-cover"
    />
    <div className="absolute left-6 bottom-6 bg-white px-6 py-2 text-xs md:text-sm font-semibold tracking-widest text-gray-800 z-10">
      MEN
    </div>
  </div>

  {/* MIDDLE - WOMEN */}
  <div className="relative w-[240px] h-[500px]">
    <img
      src={img2}
      alt="Women"
      className="w-full h-full object-cover"
    />
    <div className="absolute left-6 bottom-6 bg-white px-6 py-2 text-xs md:text-sm font-semibold tracking-widest text-gray-800 z-10">
      WOMEN
    </div>
  </div>

  {/* RIGHT - ACCESSORIES + KIDS */}
  <div className="flex flex-col gap-4">
    {/* ACCESSORIES */}
    <div className="relative w-[240px] h-[242px]">
      <img
        src={img3}
        alt="Accessories"
        className="w-full h-full object-cover"
      />
      <div className="absolute left-6 bottom-6 bg-white px-6 py-2 text-xs md:text-sm font-semibold tracking-widest text-gray-800 z-10">
        ACCESSORIES
      </div>
    </div>

    {/* KIDS */}
    <div className="relative w-[240px] h-[242px]">
      <img
        src={img4}
        alt="Kids"
        className="w-full h-full object-cover"
      />
      <div className="absolute left-6 bottom-6 bg-white px-6 py-2 text-xs md:text-sm font-semibold tracking-widest text-gray-800 z-10">
        KIDS
      </div>
    </div>
  </div>

</div>


    </section>
  );
}

export default EditorsPick;
