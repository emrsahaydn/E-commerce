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
  <div className="mt-4 md:mt-8 flex flex-col md:flex-row justify-center gap-4">
    
    {/* MEN */}
    <div className="relative w-full h-[350px] md:w-[510px] md:h-[500px]">
      <img src={img1} className="w-full h-full object-cover" alt="Men" />
      <div className="absolute left-6 bottom-6 bg-white px-6 py-2 text-xs md:text-sm font-semibold tracking-widest">
        MEN
      </div>
    </div>

    {/* WOMEN */}
    <div className="relative w-full h-[350px] md:w-[240px] md:h-[500px]">
      <img src={img2} className="w-full h-full object-cover" alt="Women" />
      <div className="absolute left-6 bottom-6 bg-white px-6 py-2 text-xs md:text-sm font-semibold tracking-widest">
        WOMEN
      </div>
    </div>

    {/* ACCESSORIES + KIDS */}
    <div className="flex flex-col gap-4 w-full md:w-auto">
      
      {/* ACCESSORIES */}
      <div className="relative w-full h-[250px] md:w-[240px] md:h-[242px]">
        <img src={img3} className="w-full h-full object-cover" alt="Accessories" />
        <div className="absolute left-6 bottom-6 bg-white px-6 py-2 text-xs md:text-sm font-semibold tracking-widest">
          ACCESSORIES
        </div>
      </div>

      {/* KIDS */}
      <div className="relative w-full h-[250px] md:w-[240px] md:h-[242px]">
        <img src={img4} className="w-full h-full object-cover" alt="Kids" />
        <div className="absolute left-6 bottom-6 bg-white px-6 py-2 text-xs md:text-sm font-semibold tracking-widest">
          KIDS
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default EditorsPick;
