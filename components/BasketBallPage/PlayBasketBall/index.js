import Image from "next/image";
import RightImg from "/public/assets/fantacyimg/Group 41837.png";
export default function PlayBasketBall() {
  return (
    <div className="pb-10">
      <h1 className="text-[#0169B6] font-bold font-mono text-[16px] sm:text-[20px] lg:text-[28px] pl-4 pt-14 text-center pb-8">
        Play Fantasy Kabaddi and{" "}
        <span className="text-[#00A547]"> win real cash!</span>
      </h1>
      <div className="flex justify-evenly items-center pb-5">
        <div className="flex text-white text-center bg-[#00A547] rounded-md h-[30px] w-[252px] ml-2">
          <p className="pr-16 pl-3">Win 11 </p>
          <p>Fantasy BasketBall</p>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4  lg:grid-rows-1 gap-5 mr-16 ">
        <div className="bg-[url('/assets/fantacyimg/Rectangle2047.svg')] h-[110px] sm:h-[120px]  lg:h-[150px] w-[220px] sm:w-[260px] lg:w-[400px] bg-no-repeat bg-center sm:ml-8 lg:ml-40 ml-5 ">
          <div className="flex justify-center pt-9 sm:pt-12 lg:pt-16 pl-8 sm:pl-6 lg:pl-6">
            <Image src={RightImg} alt="/" className="w-[25px] h-[25px]" />
            <p className="text-[#0B592A] text-[12px] sm:text-[14px] lg:text-[16px] w-[340px] sm:w-[300px] lg:w-[250px] pl-10 pr-8">
              Create a Basketball fantasy team to play the game
            </p>
          </div>
        </div>

        <div className="bg-[url('/assets/fantacyimg/Rectangle2047.svg')] h-[110px] sm:h-[120px]  lg:h-[150px] w-[220px] sm:w-[260px] lg:w-[400px] bg-no-repeat bg-center sm:ml-8 lg:ml-40 ml-20 ">
          <div className="flex justify-center pt-9 sm:pt-12 lg:pt-16 pl-8 sm:pl-6 lg:pl-6">
            <Image src={RightImg} alt="/" className="w-[25px] h-[25px]" />
            <p className="text-[#0B592A] text-[12px] sm:text-[14px] lg:text-[16px] w-[340px] sm:w-[300px] lg:w-[250px] pl-10 pr-8">
              Create teams for the upcoming actual Basketball matches.
            </p>
          </div>
        </div>
        <div className="bg-[url('/assets/fantacyimg/Rectangle2047.svg')] h-[110px] sm:h-[120px]  lg:h-[150px] w-[220px] sm:w-[260px] lg:w-[400px] bg-no-repeat bg-center sm:ml-28  lg:ml-40 ml-6 ">
          <div className="flex justify-center pt-9 sm:pt-12 lg:pt-16 pl-8 sm:pl-6 lg:pl-6">
            <Image src={RightImg} alt="/" className="w-[25px] h-[25px]" />
            <p className="text-[#0B592A] text-[12px] sm:text-[14px] lg:text-[16px] w-[340px] sm:w-[300px] lg:w-[250px] pl-10 pr-8">
              Enter contests to win amazing prizes.
            </p>
          </div>
        </div>

        <div className="bg-[url('/assets/fantacyimg/Rectangle2047.svg')] h-[110px] sm:h-[120px]  lg:h-[150px] w-[220px] sm:w-[260px] lg:w-[400px] bg-no-repeat bg-center sm:ml-24 lg:ml-8  ml-20 lg:hidden">
          <div className="flex justify-center pt-9 sm:pt-12 lg:pt-16 pl-8 sm:pl-6 lg:pl-6">
            <Image src={RightImg} alt="/" className="w-[25px] h-[25px]" />
            <p className="text-[#0B592A] text-[12px] sm:text-[14px] lg:text-[16px] w-[390px] sm:w-[270px] lg:w-[250px] pl-10 pr-8">
              Quick withdrawal of winnings to verified bank account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
