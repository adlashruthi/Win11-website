import Image from "next/image";
import ViratImg from "/public/assets/fantacyimg/Rectangle 2045 (1).png";
export default function WatchVideo() {
  return (
    <div>
      <div className="bg-[url('/assets/aboutimg/Group42296.svg')] h-[530px] sm:h-[480px] lg:h-[800px] bg-no-repeat bg-cover ">
        <h4 className="text-[#0B592A] text-[12px] font-mono pt-32 text-center">
          Sounds interesting?
        </h4>
        <h1 className="text-[#0169B6] font-bold font-mono text-[22px] sm:text-[24px] lg:text-[28px] pl-20 pt-6 text-center pr-14 sm:pr-0 lg:pr-0 ">
          Watch this
          <span className="text-[#00A547]"> video </span> to know more:
        </h1>
        <div className="bg-[url('/assets/fantacyimg/Ellipse558.svg')] lg:h-[600px] bg-no-repeat bg-contain bg-center pb-40 sm:h-[320px] h-[300px] ">
          <div className="flex flex-col justify-center items-center pt-4 sm:pt-8 lg:pt-20 pl-12 sm:pl-24 lg:pl-32">
            <Image
              src={ViratImg}
              alt="/"
              className="h-[140px] sm:h-[200px] lg:h-[230px] w-[260px] sm:w-[290px] lg:w-[400px] pb-8 pr-10"
            />
          </div>
          <h2 className="text-[#00A547] text-[10px] lg:text-[12px] font-mono  lg:pt-7 text-center sm:pl-10 px-14 lg:pl-24 pb-6">
            Win 11 is India’s best fantasy sports app, where you can show your
            skills and keep winning.
          </h2>
        </div>
      </div>
    </div>
  );
}
