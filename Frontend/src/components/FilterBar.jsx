import { LayoutGrid, List } from "lucide-react";

function FilterBar({ filterText, setFilterText, sortOption, setSortOption, onFilterClick, total }) {
  return (
    <div className="w-full py-6 max-w-[1300px] mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-0">
      
      {/* LEFT - RESULT COUNT */}
      <div className="text-gray-700 font-semibold text-center md:text-left">
        Showing all {total} results
      </div>

      {/* CENTER - VIEWS */}
      <div className="flex items-center gap-2 md:gap-4">
        <span className="font-semibold text-gray-700">Views:</span>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 border rounded flex items-center justify-center border-[#23A6F0]">
            <LayoutGrid className="w-5 h-5 text-[#252B42]" />
          </button>
          <button className="w-10 h-10 border rounded flex items-center justify-center">
            <List className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* RIGHT - SELECT + FILTER INPUT */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <input 
          type="text"
          placeholder="Search products..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="border rounded px-4 py-2 text-sm text-gray-700 outline-none focus:border-[#23A6F0]"
        />

        <select 
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded px-4 py-2 text-gray-700 text-sm cursor-pointer outline-none"
        >
          <option value="">Sort By</option>
          <option value="price:asc">Price: Low to High</option>
          <option value="price:desc">Price: High to Low</option>
          <option value="rating:asc">Rating: Low to High</option>
          <option value="rating:desc">Rating: High to Low</option>
        </select>

        <button 
          onClick={onFilterClick}
          className="px-6 py-2 rounded bg-[#23A6F0] text-white font-semibold hover:bg-[#1a8cd3] transition-colors"
        >
          Filter
        </button>
      </div>
    </div>
  );
}

export default FilterBar;