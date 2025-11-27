import HeroSlider from "../components/HeroSlider";
import EditorsPick from "../components/EditorsPick";
import BestsellerProducts from "../components/BestsellerProducts";

function HomePage() {
  return (
    <div className="w-full flex flex-col">

      {/* HERO / SLIDER SECTION */}
      <section className="w-full">
        <HeroSlider />
      </section>
      <div className="mt-60">
        <EditorsPick />
      </div>
      <div className="mt-10">
        <BestsellerProducts />
      </div>


    </div>
  );
}

export default HomePage;
