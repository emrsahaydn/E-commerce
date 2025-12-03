import detailImg from "../assets/Productdetail/p1.jpg";

function ProductDetailTabs() {
  return (
    <section className="w-full mt-16 px-4 md:px-16">

      {/* TOP TABS */}
      <div className="w-full flex justify-center border-b pb-4">
        <div className="flex gap-8 text-sm md:text-base font-semibold text-gray-600">

          <button className="text-gray-800 border-b-2 border-gray-800 pb-2">
            Description
          </button>

          <button className="hover:text-gray-800">
            Additional Information
          </button>

          <button className="hover:text-gray-800 flex items-center gap-1">
            Reviews <span className="text-green-500 font-semibold">(0)</span>
          </button>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col md:flex-row gap-10 mt-10">

        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/3">
          <img
            src={detailImg}
            className="w-full h-auto rounded-lg shadow"
          />
        </div>

        {/* MIDDLE TEXT AREA */}
        <div className="flex-1 flex flex-col gap-6">

          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            the quick fox jumps over
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum <br /> met.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum <br /> met.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum <br /> met.
          </p>
        </div>

        {/* RIGHT LIST AREA */}
        <div className="flex-1 flex flex-col gap-10">

          {/* LIST 1 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              the quick fox jumps over
            </h2>

            <ul className="flex flex-col gap-3 text-gray-600 text-sm">
              <li className="flex items-center gap-2">› the quick fox jumps over the lazy dog</li>
              <li className="flex items-center gap-2">› the quick fox jumps over the lazy dog</li>
              <li className="flex items-center gap-2">› the quick fox jumps over the lazy dog</li>
              <li className="flex items-center gap-2">› the quick fox jumps over the lazy dog</li>
            </ul>
          </div>

          {/* LIST 2 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              the quick fox jumps over
            </h2>

            <ul className="flex flex-col gap-3 text-gray-600 text-sm">
              <li className="flex items-center gap-2">› the quick fox jumps over the lazy dog</li>
              <li className="flex items-center gap-2">› the quick fox jumps over the lazy dog</li>
              <li className="flex items-center gap-2">› the quick fox jumps over the lazy dog</li>
              <li className="flex items-center gap-2">› the quick fox jumps over the lazy dog</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductDetailTabs;
