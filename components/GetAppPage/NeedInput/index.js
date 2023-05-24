import Image from "next/image";
import Mobile from "/public/assets/getappimg/Frame 42018.png";
export default function NeedInput() {
  return (
    <div>
      <h1 className="text-[#FF0000] text-center lg:text-[28px] sm:text-[24px] text-[22px]  font-bold">
        NEED CLIENT INPUTS
      </h1>
      <div className="bg-[url('/assets/getappimg/Vector15(2).svg')] h-[604px] sm:h-[500px] w-full bg-no-repeat bg-contain bg-center sm:mt-4">
        <h1 className="text-[#0169B6] lg:text-[28px] sm:text-[24px] text-[16px]  font-mono font-bold text-center pt-52 sm:pt-28">
          Get the App and
          <span className="text-[#00A547]"> Win Crores</span>
        </h1>
        <div className="flex justify-center pt-8">
          <Image
            src={Mobile}
            alt="/"
            className="h-[130px] sm:h-[280px] sm:w-[140px] w-[80px] mt-4 sm:mt-4"
          />
        </div>
      </div>
    </div>
  );
}
