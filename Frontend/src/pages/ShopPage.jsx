import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategories, fetchProducts } from "../store/thunkActions";

import ShopProducts from "../components/ShopProducts";
import Footer from "../layout/Footer";
import BrandLogos from "../components/BrandLogos";
import FilterBar from "../components/FilterBar";
import ShopHero from "../components/ShopHero";
import Header from "../layout/Header";

function ShopPage() {
  const dispatch = useDispatch();
  const { gender, categoryId } = useParams();

  const total = useSelector((state) => state.product.total);

  const [filterText, setFilterText] = useState("");
  const [sortOption, setSortOption] = useState("");
  
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 25; 

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);


  useEffect(() => {
    setCurrentPage(1);
  }, [categoryId, gender, filterText, sortOption]);

  const handleFetchProducts = useCallback(() => {
    const apiGender = gender === "kadin" ? "k" : gender === "erkek" ? "e" : null;
    
    const offset = (currentPage - 1) * limit;

    dispatch(fetchProducts(categoryId, filterText, sortOption, apiGender, limit, offset));
  }, [dispatch, categoryId, gender, filterText, sortOption, currentPage]);


  useEffect(() => {
    handleFetchProducts();
  }, [categoryId, gender, sortOption, currentPage, handleFetchProducts]);

  useEffect(() => {
    if (filterText === "") return;

    const delayDebounceFn = setTimeout(() => {
      handleFetchProducts();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [filterText, handleFetchProducts]);

  return (
    <div>
      <Header />
      <ShopHero />
      <FilterBar 
        filterText={filterText} 
        setFilterText={setFilterText} 
        sortOption={sortOption} 
        setSortOption={setSortOption}
        onFilterClick={handleFetchProducts}
        total={total}
      />
      

      <ShopProducts 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        limit={limit} 
      />
      
      <BrandLogos />
      <Footer />
    </div>
  );
}

export default ShopPage;