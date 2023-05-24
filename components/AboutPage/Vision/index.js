import Image from "next/image";
import VisionImg from "/public/assets/aboutimg/Group 42144.png";
import VisionImg2 from "/public/assets/aboutimg/Group 42178.png";
import VisionImg3 from "public/assets/aboutimg/Group 42295.png";
export default function Vision() {
  return (
    <div className="relative -z-50">
      <div className="flex pt-20">
        <div className="mr-24 mt-6 lg:ml-16 sm:ml-4">
          <h1 className="text-[#0B592A] font-bold lg:text-[20px] sm:text-[16px] text-[16px] font-mono lg:pl-4 sm:pl-4 pl-32">
            “ OUR VISION
          </h1>
          <h1 className="text-[#0169B6] lg:text-[24px] sm:text-[22px] text-[18px] font-mono font-semibold w-[400px] sm::ml-16 ml-5 pt-6">
            Become the premier fantasy
            <span className="text-[#00A547]"> SPORTS.</span> platform.
          </h1>
          <p className="text-[#0B592A] lg:w-[509px] sm:w-[410px] w-[320px] lg:text-[14px] text-[12px] pt-4 lg:ml-16 sm:ml-14 ml-10">
            {" "}
            “We are proud to continually serve our growing community of avid
            sports fans with the latest innovative offerings and contribute to
            the overall expansion of the Indian sports ecosystem”
            <br />
            <span className="text-[#000000] text-[16px] pt-10 font-semibold">
              - Harsh Jain, CEO & Co Founder, Dream Sports
            </span>
          </p>
        </div>
        <div className="lg:pl-16 sm:pl-0 pt-6 sm:mr-10">
          <Image
            src={VisionImg}
            alt="/"
            className="lg:h-[340px] sm:h-[300px] w-[340px]"
          />
        </div>
      </div>

      {/* <div className="pt-10">
        <Image src={VisionImg2} alt="/" height={950} className="w-full" />
      </div> */}
    </div>
  );
}
