import Image from "next/image";
import Card1 from "/public/assets/fantacyimg/Rectangle 2052.png";
import Card2 from "/public/assets/fantacyimg/Rectangle 2053.png";
import Card3 from "/public/assets/fantacyimg/Rectangle 2054.png";

export default function WinBig() {
  return (
    <div>
      <h1 className="text-[#0169B6] font-bold font-mono text-[16px] sm:text-[24px] lg:text-[26px] pl-4 pt-14 text-center pb-4">
        Win Big With
        <span className="text-[#00A547]"> Win 11 </span>
      </h1>
      <p className="text-[#0B592A]  font-mono text-[12px] sm:text-[13px] lg:text-[14px] px-5 sm:px-20 lg:px-28 text-center  pb-2 sm:pb-5 lg:pb-8 ">
        Play TATA IPL 2022 & win cash prizes daily. Win contests to access prize
        pools ranging from ₹6 lakhs to ₹35 crores!
      </p>
      <div className="flex justify-center ">
        <Image
          src={Card1}
          alt="/"
          className="lg:h-[200px] sm:h-[170px] h-[180px] lg:w-[300px] sm:w-[280px] w-[240px] lg:pr-8 sm:pr-4 sm:pl-4 ml-52 sm:ml-0 "
        />
        <Image
          src={Card2}
          alt="/"
          className="lg:h-[200px] sm:h-[170px] h-[180px] lg:w-[300px] sm:w-[280px] w-[280px] lg:pr-8 sm:pr-4 sm:pl-4 ml-8 sm:ml-0"
        />
        <Image
          src={Card3}
          alt="/"
          className="lg:h-[200px] sm:h-[170px] h-[180px] lg:w-[300px] sm:w-[280px] w-[280px] lg:pr-8 sm:pr-4 sm:pl-4 hidden sm:block"
        />
      </div>
      <p className="text-[#0B592A]  font-mono text-[12px] sm:text-[15px] lg:text-[16px] px-5 sm:px-20 lg:px-28 text-center font-semibold pt-3  pb-2 sm:pb-5 lg:pb-8 ">
        Excited To Start Playing? Explore Fantasy Cricket Related Pages To Get A
        Headstart!
      </p>

      <div className="hidden sm:block">
        <div className="flex justify-center">
          <div className="border-[#959595] border-solid border-2 lg:h-[30px] sm:h-[30px] lg:w-[250px] sm:w-[200px] rounded-md pl-3 items-center mb-4 mr-7">
            <h1 className="text-[#454545] font-[Montserrat Alternates] text-[14px]">
              Players comparison
            </h1>
          </div>
          <div className="border-[#959595] border-solid border-2 lg:h-[30px] sm:h-[30px] lg:w-[250px] sm:w-[200px] rounded-md pl-3 items-center mb-4 mr-7">
            <h1 className="text-[#454545] font-[Montserrat Alternates] text-[14px]">
              Players comparison
            </h1>
          </div>
          <div className="border-[#959595] border-solid border-2 lg:h-[30px] sm:h-[30px] lg:w-[250px] sm:w-[200px] rounded-md pl-3 items-center mb-4 mr-7">
            <h1 className="text-[#454545] font-[Montserrat Alternates] text-[14px]">
              Players comparison
            </h1>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="border-[#959595] border-solid border-2 lg:h-[30px] sm:h-[30px] lg:w-[250px] sm:w-[200px] rounded-md pl-3 items-center mb-4 mr-7">
            <h1 className="text-[#454545] font-[Montserrat Alternates] text-[14px]">
              Players comparison
            </h1>
          </div>
          <div className="border-[#959595] border-solid border-2 lg:h-[30px] sm:h-[30px] lg:w-[250px] sm:w-[200px] rounded-md pl-3 items-center mb-4 mr-7">
            <h1 className="text-[#454545] font-[Montserrat Alternates] text-[14px]">
              Players comparison
            </h1>
          </div>
          <div className="border-[#959595] border-solid border-2 lg:h-[30px] sm:h-[30px] lg:w-[250px] sm:w-[200px] rounded-md pl-3 items-center mb-4 mr-7">
            <h1 className="text-[#454545] font-[Montserrat Alternates] text-[14px]">
              Players comparison
            </h1>
          </div>
        </div>
      </div>
      <div className="sm:hidden block">
        <div className="flex justify-center  ">
          <div className="border-[#959595] border-solid border-2 h-[30px] w-[170px] rounded-md pl-3 items-center mb-4 mr-4 ml-2">
            <h1 className="text-[#454545] font-mono text-[13px]">
              Players comparison
            </h1>
          </div>
          <div className="border-[#959595] border-solid border-2 h-[30px] w-[170px] rounded-md pl-3 items-center mb-4 mr-4 ml-2">
            <h1 className="text-[#454545] font-mono text-[13px]">
              Players comparison
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="border-[#959595] border-solid border-2 h-[30px] w-[170px] rounded-md pl-3 items-center mb-4 mr-4 ml-2">
            <h1 className="text-[#454545] font-mono text-[13px]">
              Players comparison
            </h1>
          </div>
          <div className="border-[#959595] border-solid border-2 h-[30px] w-[170px] rounded-md pl-3 items-center mb-4 mr-4 ml-2">
            <h1 className="text-[#454545] font-mono text-[13px]">
              Players comparison
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
