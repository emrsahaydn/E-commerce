import HeroSlider from "../components/HeroSlider";
import EditorsPick from "../components/EditorsPick";
import BestsellerProducts from "../components/BestsellerProducts";
import SecondHeroSlider from "../components/SecondHeroSlider";
import NeuralUniverseSection from "../components/NeuralUniverseSection";
import FeaturedPostsSection from "../components/FeaturedPostsSection";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <Header />

      <section className="w-full">
        <HeroSlider />
      </section>

      <div className="mt-10 md:mt-50">
        <EditorsPick />
      </div>

      <div className="mt-10">
        <BestsellerProducts />
      </div>

      <div className="mt-10">
        <SecondHeroSlider />
      </div>

      <div className="mt-20">
        <NeuralUniverseSection />
      </div>

      <div className="mt-10">
        <FeaturedPostsSection />
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
