export default function BigCompanies() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 md:py-24 flex justify-center">
      <div className="text-center px-6 max-w-xl">

        {/* MOBİL BAŞLIK (3 satır) */}
        <h2 className="font-bold text-[#252B42] text-[40px] leading-tight md:hidden">
          Big
          <br />
          Companies
          <br />
          Are Here
        </h2>

        {/* DESKTOP BAŞLIK (tek satır, 40px) */}
        <h2 className="hidden md:block font-bold text-[#252B42] text-[40px] leading-tight">
          Big Companies Are Here
        </h2>

        {/* ALT METİN */}
        <p className="mt-4 text-[#737373] text-[14px] leading-relaxed">
          Problems trying to resolve the conflict between
          <br className="hidden md:block" />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
    </section>
  );
}
