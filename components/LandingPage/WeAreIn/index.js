import React from "react";
import Image from "next/image";
import One from "/public/assets/1.png";
import Two from "/public/assets/2.png";
import Three from "/public/assets/3.png";
import Card1 from "/public/assets/Rectangle 2046.png";
import Weare from "/public/assets/Group 42317.png";
const Wearein = () => {
  return (
    //WE ARE IN PAGE
    <div>
      <div className="pt-24 lg:ml-28 sm:ml-10">
        <div className="hidden sm:block">
          <div className="bg-[url('/assets/Vector15.svg')] lg:h-[240px] sm:h-[220px] h-[340px] lg:w-[980px] sm:w-[750px] w-[360px] bg-no-repeat bg-cover ">
            <h1 className="text-[#00A547]  sm:text-[22px] text-[18px] font-bold font-mono text-center pt-10 pb-2 ml-16 sm:ml-0">
              We are on Win 11
            </h1>
            <h4 className="text-[#333333]   text-[12px] sm:text-[14px] lg:text-[16px] font-mono font-semibold text-center pb-3 ml-5 sm:ml-0">
              A Destination for gamers and winners!
            </h4>
            <p className="text-[#0B592A]  font-mono text-[12px] sm:text-[14px] lg:text-[16px] px-[16px] sm:px-[20px] lg:px-[28px] text-center pb-8 ">
              From football and cricket to basketball to even financial markets.
              Choose from a wide variety of exciting, action-packed, sporty
              games and wager real money on the outcome.
            </p>
            <p className="text-[#0B592A]  font-mono text-[12px] sm:text-[14px] lg:text-[16px] px-[16px] sm:px-[20px] lg:px-[28px] text-center pb-8 ">
              Creating a new world, A world where fans become players and
              players win!
            </p>
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <div className="bg-[url('/assets/getappimg/Vector15(2).svg')] h-[304px]  w-full bg-no-repeat bg-contain bg-center mt-4">
          <h1 className="text-[#00A547]  sm:text-[22px] text-[18px] font-bold font-mono text-center pt-10 pb-2 ml-16 sm:ml-0">
            We are on Win 11
          </h1>
          <h4 className="text-[#333333]   text-[11px] sm:text-[14px] lg:text-[16px] font-mono font-semibold text-center pb-3 ml-5 sm:ml-0">
            A Destination for gamers and winners!
          </h4>
          <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[14px] lg:text-[16px] px-[20px] sm:px-[20px] lg:px-[28px] text-center pb-8 ">
            From football and cricket to basketball to even financial markets.
            Choose from a wide variety of exciting, action-packed, sporty games
            and wager real money on the outcome.
          </p>
          <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[14px] lg:text-[16px] px-[24px] sm:px-[20px] lg:px-[28px] mr-7 text-center pb-8 ">
            Creating a new world, A world where and players win!
          </p>
        </div>
      </div>

      {/* 3 Simple Steps */}

      <div className="pt-16">
        <Image
          src={Weare}
          alt="/"
          className="items-center h-full w-full pb-3"
        />
      </div>
    </div>
  );
};

export default Wearein;
