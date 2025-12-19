import BrandLogos from "../components/BrandLogos";
import Footer from "../layout/Footer";
import BestsellerProducts from "../components/BestsellerProducts";
import ProductDetail from "../components/ProductDetail";
import ProductDetailTabs from "../components/ProductDetailTabs";
import Header from "../layout/Header";
import { useEffect } from "react";

export default function ProductDetailPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header/>
            <main className="container mx-auto">
                <ProductDetail />
                <ProductDetailTabs />
                <BestsellerProducts />
                <BrandLogos />
            </main>
            <Footer />
        </div>
    );
}