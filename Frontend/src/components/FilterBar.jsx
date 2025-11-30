import { LayoutGrid, List } from "lucide-react";

function FilterBar() {
  return (
    <div
      className="
        w-full py-6 max-w-[1300px] mx-auto px-4
        flex flex-col md:flex-row
        items-center md:items-center
        justify-center md:justify-between
        gap-4 md:gap-0
      "
    >
      {/* LEFT - RESULT COUNT */}
      <div className="text-gray-700 font-semibold text-center md:text-left">
        Showing all 12 results
      </div>

      {/* CENTER - VIEWS */}
      <div
        className="
          flex  items-center
          md:flex-row md:items-center
          gap-2 md:gap-4
        "
      >
        {/* Views label */}
        <span className="font-semibold text-gray-700 text-center">
          Views:
        </span>

        {/* Icons row */}
        <div className="flex items-center gap-3">
          {/* Grid view */}
          <button className="w-10 h-10 border rounded flex items-center justify-center">
            <LayoutGrid className="w-5 h-5 text-[#252B42]" />
          </button>

          {/* List view */}
          <button className="w-10 h-10 border rounded flex items-center justify-center">
            <List className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* RIGHT - SELECT + FILTER */}
      <div
        className="
          flex items-center gap-4
          md:justify-end
        "
      >
        {/* Popularity Dropdown */}
        <div className="border rounded px-4 py-2 text-gray-700 flex items-center gap-2 cursor-pointer">
          <span>Popularity</span>
          <span>▼</span>
        </div>

        {/* Filter Button */}
        <button className="px-6 py-2 rounded bg-[#23A6F0] text-white font-semibold">
          Filter
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
