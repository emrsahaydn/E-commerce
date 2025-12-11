import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../store/thunkActions";

import ShopProducts from "../components/ShopProducts";
import Footer from "../layout/Footer";
import BrandLogos from "../components/BrandLogos";
import FilterBar from "../components/FilterBar";
import ShopHero from "../components/ShopHero";
import Header from "../layout/Header";

function ShopPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div>
      <Header />
      <ShopHero />
      <FilterBar />
      <ShopProducts />
      <BrandLogos />
      <Footer />
    </div>
  );
}

export default ShopPage;
