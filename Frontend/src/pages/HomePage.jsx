import HeroSlider from "../components/HeroSlider";

function HomePage() {
  return (
    <div className="w-full flex flex-col">

      {/* HERO / SLIDER SECTION */}
      <section className="w-full">
        <HeroSlider />
      </section>

    </div>
  );
}

export default HomePage;
