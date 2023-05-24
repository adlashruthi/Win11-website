import Image from "next/image";
import WorkImg from "/public/assets/jobsimg/Group 42192.png";
export default function WorkWith() {
  return (
    <div>
      <div className="bg-[url('/assets/jobsimg/Vector16.svg')] h-[880px]  bg-no-repeat bg-cover">
        <h1 className="text-[#0169B6]  font-bold font-mono lg:text-[28px] sm:text-[20px] text-[18px]  pt-44 pl-28 ">
          {" "}
          WORK WITH US
        </h1>

        <div className="flex pt-14 lg:pl-24 sm:pl-24 pl-4 justify-Center flex-wrap sm:flex-nowrap">
          <Image
            src={WorkImg}
            alt="/"
            className="lg:pl-6 sm:pl-6 pl-0 lg:h-[160px] lg:w-[390px] sm:h-[130px] h-[140px]  sm:w-[290px] w-[350px] pb-8 sm:pb-0 pr-20 sm:pr-0"
          />
          <Image
            src={WorkImg}
            alt="/"
            className="lg:ml-16 sm:ml-12 ml-14 lg:h-[160px] lg:w-[390px] sm:h-[130px] h-[120px]  sm:w-[290px] w-[250px]"
          />
        </div>

        <div className="flex lg:pt-28 sm:pt-28 pt-8 pl-10 justify-center flex-wrap sm:flex-nowrap">
          <Image
            src={WorkImg}
            alt="/"
            className="lg:pl-6 sm:pl-6 pl-0 lg:h-[160px] lg:w-[390px] sm:h-[130px] h-[140px]  sm:w-[290px] w-[350px] pb-8 sm:pb-0 pr-20 sm:pr-0"
          />
          <Image
            src={WorkImg}
            alt="/"
            className="lg:ml-16 sm:ml-12 lg:h-[160px] lg:w-[390px] sm:h-[120px] h-[120px]  sm:w-[290px] w-[250px]"
          />
        </div>
      </div>
    </div>
  );
}
