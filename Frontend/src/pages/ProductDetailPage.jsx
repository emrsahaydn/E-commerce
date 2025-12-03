import BrandLogos from "../components/BrandLogos";
import Footer from "../layout/Footer";
import BestsellerProducts from "../components/BestsellerProducts";
import ProductDetail from "../components/ProductDetail";
import ProductDetailTabs from "../components/ProductDetailTabs";
export default function ProductDetailPage() {
    return (

        <div>

            <ProductDetail />
            <ProductDetailTabs />
            <BestsellerProducts />
            <BrandLogos />
            <Footer />
        </div>
    )
}