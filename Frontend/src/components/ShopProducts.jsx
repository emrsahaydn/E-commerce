import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../store/cartActions";

function ShopProducts({ currentPage, setCurrentPage, limit }) {
  const dispatch = useDispatch();
  const { productList, fetchState, total, categories } = useSelector((state) => state.product);
  const { gender } = useParams(); 
  
  const filteredProducts = productList.filter((product) => {
    if (!gender) return true; 

    const title = product.name.toLowerCase();
    const description = product.description.toLowerCase();
    
   
    if (gender === "kadin") {
      return (
        title.includes("kadın") || 
        description.includes("kadın") || 
        title.includes("unisex") ||
        product.category_id === 4 
      );
    } 
    
    if (gender === "erkek") {
      return (
        title.includes("erkek") || 
        description.includes("erkek") || 
        title.includes("unisex")
      );
    }
    
    return true;
  });

  
  const totalPages = Math.ceil(total / limit);

  const createSlug = (name) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? createSlug(category.title) : "category";
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(renderButton(i));
      }
      return pages;
    }

    let startPage, endPage;
    if (currentPage <= 2) {
      startPage = 1;
      endPage = 3;
    } else if (currentPage >= totalPages - 1) {
      startPage = totalPages - 2;
      endPage = totalPages;
    } else {
      startPage = currentPage - 1;
      endPage = currentPage + 1;
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(renderButton(i));
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="dots" className="px-4 py-2 bg-white text-[#737373] border-r border-[#E8E8E8]">
            ...
          </span>
        );
      }
      pages.push(renderButton(totalPages));
    }
    return pages;
  };

  const renderButton = (i) => (
    <button
      key={i}
      onClick={() => handlePageChange(i)}
      className={`px-4 py-2 font-bold border-r border-[#E8E8E8] transition-colors ${
        currentPage === i 
        ? "bg-[#23A6F0] text-white" 
        : "bg-white text-[#23A6F0] hover:bg-gray-50"
      }`}
    >
      {i}
    </button>
  );

  if (fetchState === "FETCHING") {
    return (
      <div className="w-full flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#23A6F0]"></div>
        <p className="ml-3 font-semibold text-[#23A6F0]">Loading Products...</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center py-12">
      <div className="w-full max-w-[1300px] flex flex-wrap justify-center gap-10 min-h-[400px]">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const productSlug = createSlug(product.name);
            const categoryName = getCategoryName(product.category_id);
            const productGender = gender || (product.category_id === 4 ? "kadin" : "erkek");
            
            return (
              <div 
                key={product.id} 
                className="flex flex-col items-center group cursor-pointer hover:shadow-lg transition-all duration-300 p-2 rounded-lg"
              >
                <Link 
                  to={`/shop/${productGender}/${categoryName}/${product.category_id}/${productSlug}/${product.id}`} 
                  className="flex flex-col items-center"
                >
                  <div className="overflow-hidden">
                    <img
                      src={product.images[0]?.url}
                      alt={product.name}
                      className="w-[348px] h-[427px] md:w-[239px] md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-[15px] font-bold mt-3 text-[#252B42] uppercase hover:text-[#23A6F0] transition-colors text-center px-2">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-[#737373] text-sm font-bold truncate max-w-[200px] text-center">{product.description}</p>
                <div className="flex gap-2 mt-2 font-bold">
                  <span className="text-[#BDBDBD] text-sm">{(product.price * 1.2).toFixed(2)} ₺</span>
                  <span className="text-[#23856D] text-sm">{product.price} ₺</span>
                </div>
                <div className="flex gap-2 mt-3 items-center">
                  <span className="w-4 h-4 bg-[#23A6F0] rounded-full"></span>
                  <span className="w-4 h-4 bg-[#23856D] rounded-full"></span>
                  <span className="w-4 h-4 bg-[#E77C40] rounded-full"></span>
                  <span className="w-4 h-4 bg-[#252B42] rounded-full"></span>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                    className="ml-4 bg-[#23A6F0] text-white text-xs px-2 py-1 rounded hover:bg-[#1a85c2] transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h3 className="text-[#737373] font-bold text-xl mb-2">No items here!</h3>
            <p className="text-[#737373] italic">There are no products in this category for the selected gender.</p>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center gap-0 mt-12 border rounded-md overflow-hidden shadow-sm border-[#E8E8E8]">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-white text-[#23A6F0] font-bold border-r hover:bg-[#23A6F0] hover:text-white disabled:bg-gray-100 disabled:text-gray-400 transition-colors"
          >
            First
          </button>
          
          {renderPageNumbers()}

          <button
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-white text-[#23A6F0] font-bold hover:bg-[#23A6F0] hover:text-white disabled:bg-gray-100 disabled:text-gray-400 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default ShopProducts;