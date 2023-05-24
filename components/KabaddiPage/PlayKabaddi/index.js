import Image from "next/image";
import RightImg from "/public/assets/fantacyimg/Group 41837.png";
import BallImg from "/public/assets/fantacyimg/Vector (9).png";
export default function PlayKabaddi() {
  return (
    <div className="pt-4 pb-10">
      <h1 className="text-[#0169B6] font-bold font-mono lg:text-[28px] pl-4 pt-14 text-center pb-8 sm:text-[16px]">
        Play Fantasy Kabaddi and{" "}
        <span className="text-[#00A547]"> win real cash!</span>
      </h1>

      <Image
        src={BallImg}
        alt="/"
        className="h-[110px] w-[60px] absolute right-0 top-[10%]"
      />
      {/* {//......... Background cards .............} */}

      <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4  lg:grid-rows-1 gap-5 mr-16 ">
        <div className="bg-[url('/assets/fantacyimg/Rectangle2047.svg')] h-[110px] sm:h-[120px]  lg:h-[150px] w-[220px] sm:w-[260px] lg:w-[400px] bg-no-repeat bg-center sm:ml-8 ml-5 ">
          <div className="flex justify-center pt-9 sm:pt-12 lg:pt-16 pl-8 sm:pl-6 lg:pl-6">
            <Image src={RightImg} alt="/" className="w-[25px] h-[25px]" />
            <p className="text-[#0B592A] text-[13px] sm:text-[14px] lg:text-[16px] w-[340px] sm:w-[300px] lg:w-[250px] pl-10 pr-8">
              Create a cricket fantasy team to play the game
            </p>
          </div>
        </div>

        <div className="bg-[url('/assets/fantacyimg/Rectangle2047.svg')] h-[110px] sm:h-[120px]  lg:h-[150px] w-[220px] sm:w-[260px] lg:w-[400px] bg-no-repeat bg-center sm:ml-8 ml-20 ">
          <div className="flex justify-center pt-9 sm:pt-12 lg:pt-16 pl-8 sm:pl-6 lg:pl-6">
            <Image src={RightImg} alt="/" className="w-[25px] h-[25px]" />
            <p className="text-[#0B592A] text-[13px] sm:text-[14px] lg:text-[16px] w-[340px] sm:w-[300px] lg:w-[250px] pl-10 pr-8">
              Create a cricket fantasy team to play the game
            </p>
          </div>
        </div>

        <div className="bg-[url('/assets/fantacyimg/Rectangle2047.svg')] h-[110px] sm:h-[120px]  lg:h-[150px] w-[220px] sm:w-[260px] lg:w-[400px] bg-no-repeat bg-center sm:ml-28 lg:ml-8  ml-6 ">
          <div className="flex justify-center pt-9 sm:pt-12 lg:pt-16 pl-8 sm:pl-6 lg:pl-6">
            <Image src={RightImg} alt="/" className="w-[25px] h-[25px]" />
            <p className="text-[#0B592A] text-[13px] sm:text-[14px] lg:text-[16px] w-[340px] sm:w-[300px] lg:w-[250px] pl-10 pr-8">
              Create a cricket fantasy team to play the game
            </p>
          </div>
        </div>

        <div className="bg-[url('/assets/fantacyimg/Rectangle2047.svg')] h-[110px] sm:h-[120px]  lg:h-[150px] w-[220px] sm:w-[260px] lg:w-[400px] bg-no-repeat bg-center sm:ml-24 lg:ml-8  ml-20 ">
          <div className="flex justify-center pt-9 sm:pt-12 lg:pt-16 pl-8 sm:pl-6 lg:pl-6">
            <Image src={RightImg} alt="/" className="w-[25px] h-[25px]" />
            <p className="text-[#0B592A] text-[13px] sm:text-[14px] lg:text-[16px] w-[340px] sm:w-[300px] lg:w-[250px] pl-10 pr-8">
              Create a cricket fantasy team to play the game
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
