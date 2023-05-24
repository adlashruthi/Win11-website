import Image from "next/image";
import IconImg from "/public/assets/privacyimg/34) icon/chevron-up.png";
import VisionImg from "/public/assets/aboutimg/Group 42144.png";
export default function Transparency() {
  return (
    <div>
      <h1 className="text-[#00A547] font-bold font-mono text-[18px] sm:text-[24px] lg:text-[26px] pl-4 pt-10 text-center pb-16">
        Responsibility
      </h1>
      <div className="flex justify-between flex-wrap-reverse sm:flex-nowrap ">
        <div className="lg:ml-28 sm:ml-20 ml-10 sm:mt-12 mt-10 mr-8 ">
          <div className=" flex justify-between items-center border-[#959595] border-solid border-2 lg:h-[40px] sm:h-[35px] lg:w-[400px] sm:w-[260px] h-[35px] w-[250px] rounded-md pl-3 pt-2 mb-4 ">
            <h1 className="text-[#454545] font-Mono font-bold text-[14px]">
              Equal opportunity for all
            </h1>
            <Image
              src={IconImg}
              alt="/"
              height={30}
              width={30}
              className="mr-2 text-[#6E6B7B]"
            />
          </div>

          <div className=" flex justify-between items-center border-[#959595] border-solid border-2 lg:h-[40px] sm:h-[35px] lg:w-[400px] sm:w-[260px] h-[35px] w-[250px] rounded-md pl-3 pt-2 mb-4 ">
            <h1 className="text-[#454545] font-Mono font-bold text-[14px]">
              Equal opportunity for all
            </h1>
            <Image
              src={IconImg}
              alt="/"
              height={30}
              width={30}
              className="mr-2 text-[#6E6B7B]"
            />
          </div>

          <div className=" flex justify-between items-center border-[#959595] border-solid border-2 lg:h-[40px] sm:h-[35px] lg:w-[400px] sm:w-[260px] h-[35px] w-[250px] rounded-md pl-3 pt-2 mb-4 ">
            <h1 className="text-[#454545] font-Mono font-bold text-[14px]">
              Equal opportunity for all
            </h1>
            <Image
              src={IconImg}
              alt="/"
              height={30}
              width={30}
              className="mr-2 text-[#6E6B7B]"
            />
          </div>

          <div className=" flex justify-between items-center border-[#959595] border-solid border-2 lg:h-[40px] sm:h-[35px] lg:w-[400px] sm:w-[260px] h-[35px] w-[250px] rounded-md pl-3 pt-2 mb-4 ">
            <h1 className="text-[#454545] font-Mono font-bold text-[14px]">
              Equal opportunity for all
            </h1>
            <Image
              src={IconImg}
              alt="/"
              height={30}
              width={30}
              className="mr-2 text-[#6E6B7B]"
            />
          </div>
          <div className=" flex justify-between items-center border-[#959595] border-solid border-2 lg:h-[40px] sm:h-[35px] lg:w-[400px] sm:w-[260px] h-[35px] w-[250px] rounded-md pl-3 pt-2 mb-4 ">
            <h1 className="text-[#454545] font-Mono font-bold text-[14px]">
              Equal opportunity for all
            </h1>
            <Image
              src={IconImg}
              alt="/"
              height={30}
              width={30}
              className="mr-2 text-[#6E6B7B]"
            />
          </div>
        </div>
        <div className="bg-[url('/assets/playimg/Ellipse559.svg')] h-[500px] w-[990px] bg-no-repeat bg-contain  ">
          <div className="lg:pt-8 sm:pt-0 lg:pl-36 sm:pl-24 pl-8 pt-24 ">
            <Image
              src={VisionImg}
              alt="/"
              className="lg:h-[300px] sm:h-[280px] lg:w-[320px] sm:w-[300px] h-[250px] w-[270px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
