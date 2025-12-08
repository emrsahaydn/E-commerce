import Header from "../layout/Header";
import Footer from "../layout/Footer";
import AboutHero from "../components/AboutHero";
import ProblemsSection from "../components/ProblemsSection";
import StatsSection from "../components/StatsSection";
import VideoCard from "../components/VideoCard";
import bgImg from "../assets/about/videocard.jpg";
import Team from "../components/Team";
import BrandLogos from "../components/BrandLogos";
import BigCompanies from "../components/BigCompanies";
import AboutHero2 from "../components/AboutHero2";

function AboutPage() {

    return (
        <div>
            <Header />
            <AboutHero />
            <ProblemsSection />
            <StatsSection />
            <VideoCard thumbnail={bgImg} />
            <Team />
            <BigCompanies />
            <BrandLogos />
            <AboutHero2 />
            <Footer />
        </div>
    );
}

export default AboutPage;