import ShopProducts from "../components/ShopProducts";
import Footer from "../layout/Footer";
import BrandLogos from "../components/BrandLogos";
import FilterBar from "../components/FilterBar";
import ShopHero from "../components/ShopHero";
import Header from "../layout/Header";
function ShopPage() {
    return (
        <div>
            <Header/>
            <ShopHero />
            <FilterBar />
            <ShopProducts />
            <BrandLogos />
            <Footer />
        </div>
    )
}

export default ShopPage;