export default function ProblemsSection() {
  return (
    <section className="w-full bg-white py-16">
      <div
        className="
          max-w-6xl mx-auto 
          flex flex-col md:flex-row 
          gap-8 md:gap-15 
          px-6 md:px-10
        "
      >
        
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className="text-sm font-semibold tracking-wide text-[#E74040]">
            Problems trying
          </p>

          <h2 className="text-[24px] sm:text-2xl font-bold text-[#252B42] leading-tight">
            Met minim Mollie non desert
            <br className="hidden sm:block" />
            Alamo est sit cliquey dolor do
            <br className="hidden sm:block" />
            met sent.
          </h2>
        </div>


        <div className="md:w-1/2 flex items-center">
          <p className="text-sm sm:text-base text-[#737373] leading-relaxed">
            Problems trying to resolve the conflict between the two major realms
            of  Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
    </section>
  );
}
