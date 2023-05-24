import Image from "next/image";
import IndianImg from "/public/assets/fantacyimg/Rectangle 2095.png";
import BallImg from "/public/assets/fantacyimg/Vector (10).png";
export default function Partners() {
  return (
    <div className="-z-50 relative">
      <h1 className=" text-[#00A547] font-bold font-mono text-[20px] sm:text-[24px] lg:text-[28px] pl-4 pt-14 text-center pb-8">
        {" "}
        Our
        <span className="text-[#0169B6]"> Official </span>Partners
      </h1>
      {/* <div className="flex justify-center"> */}
      <div className="grid lg:grid-cols-4 lg:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 grid-cols-2 grid-rows-1">
        <Image
          src={IndianImg}
          alt="/"
          height={100}
          width={190}
          className="pr-8 lg:ml-32 sm:ml-44"
        />
        <Image
          src={IndianImg}
          alt="/"
          height={100}
          width={190}
          className="pr-8 lg:ml-16"
        />
        <Image
          src={IndianImg}
          alt="/"
          height={100}
          width={190}
          className="pr-8 hidden sm:block lg:ml-7 sm:ml-16"
        />
        <Image
          src={IndianImg}
          alt="/"
          height={100}
          width={190}
          className="pr-8 hidden sm:block  sm:ml-24 lg:ml-0"
        />
      </div>
      <Image
        src={BallImg}
        alt="/"
        className="h-[100px] w-[50px] absolute top-[100%]"
      />
    </div>
  );
}
