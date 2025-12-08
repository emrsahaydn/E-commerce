export default function StatsSection() {
  return (
    <section className="w-full bg-white py-16">
      <div
        className="
          max-w-6xl mx-auto 
          flex flex-col md:flex-row 
          items-center justify-between 
          gap-12 md:gap-4 
          px-6 md:px-10
        "
      >
        {/* 1. STAT */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-4xl font-bold text-[#252B42]">15K</h3>
          <p className="text-sm font-semibold text-[#737373] mt-2">
            Happy Customers
          </p>
        </div>

        {/* 2. STAT */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-4xl font-bold text-[#252B42]">150K</h3>
          <p className="text-sm font-semibold text-[#737373] mt-2">
            Monthly Visitors
          </p>
        </div>

        {/* 3. STAT */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-4xl font-bold text-[#252B42]">15</h3>
          <p className="text-sm font-semibold text-[#737373] mt-2">
            Countries Worldwide
          </p>
        </div>

        {/* 4. STAT */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-4xl font-bold text-[#252B42]">100+</h3>
          <p className="text-sm font-semibold text-[#737373] mt-2">
            Top Partners
          </p>
        </div>
      </div>
    </section>
  );
}
