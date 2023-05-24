import Image from "next/image";
import Football from "/public/assets/footballimg/Rectangle 2094 (1).png";

export default function Aca() {
  return (
    <div>
      <h1 className=" text-[#00A547] font-bold font-[Montserrat Alternates] text-[26px] pt-8  pb-4 text-center">
        Our{" "}
        <span className=" text-[#0169B6] font-bold font-[Montserrat Alternates] text-[26px]">
          Official
        </span>{" "}
        Partners
      </h1>
      <div className="grid grid-cols-4 grid-rows-1  sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4  lg:grid-rows-1 ">
        <div className="ml-20 lg:ml-0">
          <Image
            src={Football}
            alt="/"
            className="pr-10 sm:pl-12  h-[60px] w-[390px] sm:h-[80px] sm:w-[220px] lg:h-[120px] lg:w-[280px]"
          />
        </div>
        <Image
          src={Football}
          alt="/"
          className="pr-3 sm:pl-12  sm:h-[80px] sm:w-[220px] lg:h-[120px] lg:w-[280px]"
        />
        <div className="ml-20 lg:ml-0 hidden sm:block">
          <Image
            src={Football}
            alt="/"
            className="pr-10 sm:pl-12  sm:h-[80px] sm:w-[220px] lg:h-[120px] lg:w-[280px]"
          />
        </div>
        <Image
          src={Football}
          alt="/"
          className="pr-10 sm:pl-12  sm:h-[80px] sm:w-[220px] lg:h-[120px] lg:w-[280px]"
        />
      </div>
    </div>
  );
}
