import Image from "next/image";
import cricket from "/public/assets/kabaddiimg/Rectangle 2094 (1).png";
import BallImg1 from "/public/assets/privacyimg/Vector (10).png";
export default function Official() {
  return (
    <div className="hidden lg:block">
      <h1 className=" text-[#00A547] font-bold font-[Montserrat Alternates] text-[26px] pt-8  pb-4 text-center">
        Our{" "}
        <span className=" text-[#0169B6] font-bold font-[Montserrat Alternates] text-[26px]">
          Official
        </span>{" "}
        Partners
      </h1>
      <Image
        src={BallImg1}
        alt="/"
        height={60}
        width={60}
        className="left-0 absolute "
      />
      <div className="flex justify-center">
        <Image
          src={cricket}
          alt="/"
          height={140}
          width={160}
          className="pr-10"
        />
        <Image
          src={cricket}
          alt="/"
          height={140}
          width={160}
          className="pr-10"
        />
        <Image
          src={cricket}
          alt="/"
          height={140}
          width={160}
          className="pr-10"
        />
        <Image
          src={cricket}
          alt="/"
          height={140}
          width={160}
          className="pr-10"
        />
      </div>
    </div>
  );
}
