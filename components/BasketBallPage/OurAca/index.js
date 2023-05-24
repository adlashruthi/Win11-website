import Image from "next/image";
import Football from "/public/assets/footballimg/Rectangle 2094 (1).png";
import mobileview from "/public/assets/basketballimg/Rectangle 2097.png";
export default function OurAca() {
  return (
    <div>
      <h1 className=" text-[#00A547] font-bold font-[Montserrat Alternates] text-[26px] pt-8  pb-4 text-center">
        Our{" "}
        <span className=" text-[#0169B6] font-bold font-[Montserrat Alternates] text-[26px]">
          Official
        </span>{" "}
        Partners
      </h1>
      <div className="hidden lg:block">
        <div className="flex justify-center  ">
          <Image
            src={Football}
            alt="/"
            height={140}
            width={190}
            className="pr-10"
          />
          <Image
            src={Football}
            alt="/"
            height={140}
            width={190}
            className="pr-10"
          />
          <Image
            src={Football}
            alt="/"
            height={140}
            width={190}
            className="pr-10"
          />
          <Image
            src={Football}
            alt="/"
            height={140}
            width={190}
            className="pr-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-1 sm:grid-cols-2  sm:grid-rows-2  lg:hidden">
        <Image
          src={mobileview}
          alt="/"
          className="h-[60px] w-[150px] ml-4 sm:ml-36 "
        />
        <Image
          src={mobileview}
          alt="/"
          className="h-[60px] w-[150px] mr-4 ml-4 "
        />

        <Image
          src={mobileview}
          alt="/"
          className="h-[60px] w-[150px] ml-4 sm:ml-36 hidden sm:block"
        />
        <Image
          src={mobileview}
          alt="/"
          className="h-[60px] w-[150px] ml-4  hidden sm:block"
        />
      </div>
    </div>
  );
}
