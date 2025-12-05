import BrandLogos from "../components/BrandLogos";
import Footer from "../layout/Footer";
import BestsellerProducts from "../components/BestsellerProducts";
import ProductDetail from "../components/ProductDetail";
import ProductDetailTabs from "../components/ProductDetailTabs";
import Header from "../layout/Header";
export default function ProductDetailPage() {
    return (

        <div>
            <Header/>
            <ProductDetail />
            <ProductDetailTabs />
            <BestsellerProducts />
            <BrandLogos />
            <Footer />
        </div>
    )
}