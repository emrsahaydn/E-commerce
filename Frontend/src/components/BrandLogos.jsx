import Vector1 from "../assets/brands/Vector1.png";
import Vector2 from "../assets/brands/Vector2.png";
import Vector3 from "../assets/brands/Vector3.png";
import Vector4 from "../assets/brands/Vector4.png";
import Vector5 from "../assets/brands/Vector5.png";
import Vector6 from "../assets/brands/Vector6.png";

function BrandLogos() {
  return (
    <div className="w-full bg-[#FAFAFA] py-12 flex justify-center">
      <div
        className="
          max-w-[1300px] w-full
          flex flex-col items-center gap-12
          md:flex-row md:flex-wrap md:justify-center
        "
      >
        <img src={Vector1} alt="brand1" className="w-[153px] h-[34px] opacity-70 object-contain" />
        <img src={Vector2} alt="brand2" className="w-[146px] h-[59px] opacity-70 object-contain" />
        <img src={Vector3} alt="brand3" className="w-[152px] h-[75px] opacity-70 object-contain" />
        <img src={Vector4} alt="brand4" className="w-[151px] h-[42px] opacity-70 object-contain" />
        <img src={Vector5} alt="brand5" className="w-[151px] h-[62px] opacity-70 object-contain" />
        <img src={Vector6} alt="brand6" className="w-[151px] h-[72px] opacity-70 object-contain" />
      </div>
    </div>
  );
}

export default BrandLogos;
