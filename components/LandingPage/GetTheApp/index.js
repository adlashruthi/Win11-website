import React from "react";
import Image from "next/image";
import AppImage from "/public/assets/Frame 41944.png";
import Cricket from "/public/assets/Rectangle 2087.png";
import Football from "/public/assets/Rectangle 2087 (1).png";
import Basketball from "/public/assets/Rectangle 2087 (2).png";
import Kabaddi from "/public/assets/Rectangle 2087 (3).png";
import Basketball2 from "/public/assets/Rectangle 2087 (4).png";
import Soccer from "/public/assets/Rectangle 2087 (5).png";
import Formula from "/public/assets/Rectangle 2087 (6).png";
import Kickboxing from "/public/assets/Rectangle 2087 (7).png";
import Crypto from "/public/assets/Rectangle 2087 (8).png";
import Equity from "/public/assets/Rectangle 2087 (9).png";
import Commodity from "/public/assets/Rectangle 2087 (10).png";
import Forex from "/public/assets/Rectangle 2087 (11).png";

const GetTheApp = () => {
  return (
    <div>
      <div className="pt-28 flex justify-center">
        <Image src={AppImage} alt="/" height={650} width={900} />
      </div>

      <div className="pb-6">
        <h1 className="text-[#00A547] text-[30px] text-center pt-14 font-semibold">
          Win11 Fantasy Games
        </h1>
        <p className="text-[#00A547] text-[14px] text-center pb-6">
          Fantasy Games
        </p>
        <div className="hidden lg:block">
          <div className="flex justify-center">
            <div className="bg-[url('/assets/Vector.svg')] h-[254px] w-[350px] bg-no-repeat bg-cover">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#0169B6] font-mono font-semibold pt-9">
                  Cricket League
                </h1>
                <Image src={Cricket} alt="/" height={120} width={160} />
                <h2 className="text-[#0169B6] font-mono font-semibold">
                  View More{" "}
                </h2>
              </div>
            </div>
            <div className="bg-[url('/assets/Vector.svg')] h-[254px] w-[350px] bg-no-repeat bg-cover">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#0169B6] font-mono font-semibold pt-9">
                  Football League
                </h1>
                <Image src={Football} alt="/" height={120} width={160} />
                <h2 className="text-[#0169B6] font-mono font-semibold">
                  View More{" "}
                </h2>
              </div>
            </div>
            <div className="bg-[url('/assets/Vector.svg')] h-[254px] w-[350px] bg-no-repeat bg-cover">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#0169B6] font-mono font-semibold pt-9">
                  Basketball
                </h1>
                <Image src={Basketball} alt="/" height={120} width={160} />
                <h2 className="text-[#0169B6] font-mono font-semibold">
                  View More{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-6">
            <div className="bg-[url('/assets/Vector.svg')] h-[254px] w-[350px] bg-no-repeat bg-cover">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold pt-9">
                  Kabaddi League
                </h1>
                <Image src={Kabaddi} alt="/" height={120} width={160} />
                <h2 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold">
                  View More{" "}
                </h2>
              </div>
            </div>

            <div className="bg-[url('/assets/Vector.svg')] h-[254px] w-[350px] bg-no-repeat bg-cover">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold pt-9">
                  Baseball League
                </h1>
                <Image src={Basketball2} alt="/" height={120} width={160} />
                <h2 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold">
                  View More{" "}
                </h2>
              </div>
            </div>

            <div className="bg-[url('/assets/Vector.svg')] h-[254px] w-[350px] bg-no-repeat bg-cover">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold pt-9">
                  Soccer
                </h1>
                <Image src={Soccer} alt="/" height={120} width={160} />
                <h2 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold">
                  View More{" "}
                </h2>
              </div>
            </div>
          </div>
          <h1 className="text-[#00A547] text-center text-[24px] font-bold pt-12 pb-5">
            Exclusive
          </h1>
          <div className="flex justify-center items-center pt-6">
            <div className="bg-[url('/assets/Vector.svg')] h-[254px] w-[350px] bg-no-repeat bg-cover">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold pt-9">
                  Formula 1 Racing
                </h1>
                <Image src={Formula} alt="/" height={120} width={160} />
                <h2 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold">
                  View More{" "}
                </h2>
              </div>
            </div>

            <div className="bg-[url('/assets/Vector.svg')] h-[254px] w-[350px] bg-no-repeat bg-cover">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold pt-9">
                  Kickboxing
                </h1>
                <Image src={Kickboxing} alt="/" height={120} width={160} />
                <h2 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold">
                  View More{" "}
                </h2>
              </div>
            </div>
          </div>
          <h1 className="text-[#00A547] text-center text-[24px] font-bold pt-12 pb-5">
            Trade Prediction
          </h1>
          <div className="flex justify-center pt-6">
            <div className="bg-[url('/assets/Vector.svg')] h-[254px] w-[350px] bg-no-repeat bg-cover">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold pt-9">
                  Crypto Trading
                </h1>
                <Image src={Crypto} alt="/" height={120} width={160} />
                <h2 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold">
                  View More{" "}
                </h2>
              </div>
            </div>
            <div className="bg-[url('/assets/Vector.svg')] h-[254px] w-[350px] bg-no-repeat bg-cover">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold pt-9">
                  Equity Stocks
                </h1>
                <Image src={Equity} alt="/" height={120} width={160} />
                <h2 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold">
                  View More{" "}
                </h2>
              </div>
            </div>
            <div className="bg-[url('/assets/Vector.svg')] h-[254px] w-[350px] bg-no-repeat bg-cover">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold pt-9">
                  Commodity
                </h1>
                <Image src={Commodity} alt="/" height={120} width={160} />
                <h2 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold">
                  View More{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-6">
            <div className="bg-[url('/assets/Vector.svg')] h-[254px] w-[350px] bg-no-repeat bg-cover">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold pt-9">
                  Forex
                </h1>
                <Image src={Forex} alt="/" height={120} width={160} />
                <h2 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold">
                  View More{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //...........Tablet View .............// */}
      <div className="hidden sm:block lg:hidden">
        <div className="flex justify-center">
          <div className="bg-[url('/assets/Vector.svg')] h-[234px] w-[330px] bg-no-repeat bg-cover">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-mono font-semibold pt-9">
                Cricket League
              </h1>
              <Image src={Cricket} alt="/" height={120} width={160} />
              <h2 className="text-[#0169B6] font-mono font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>
          <div className="bg-[url('/assets/Vector.svg')] h-[234px] w-[330px] bg-no-repeat bg-cover">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-mono font-semibold pt-9">
                Football League
              </h1>
              <Image src={Football} alt="/" height={120} width={160} />
              <h2 className="text-[#0169B6] font-mono font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <div className="bg-[url('/assets/Vector.svg')] h-[234px] w-[330px] bg-no-repeat bg-cover">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-mono font-semibold pt-9">
                Basketball
              </h1>
              <Image src={Basketball} alt="/" height={120} width={160} />
              <h2 className="text-[#0169B6] font-mono font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>
          <div className="bg-[url('/assets/Vector.svg')] h-[234px] w-[330px] bg-no-repeat bg-cover">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold pt-9">
                Kabaddi League
              </h1>
              <Image src={Kabaddi} alt="/" height={120} width={160} />
              <h2 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <div className="bg-[url('/assets/Vector.svg')] h-[234px] w-[330px] bg-no-repeat bg-cover">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold pt-9">
                Baseball League
              </h1>
              <Image src={Basketball2} alt="/" height={120} width={160} />
              <h2 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>

          <div className="bg-[url('/assets/Vector.svg')] h-[234px] w-[330px] bg-no-repeat bg-cover">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold pt-9">
                Soccer
              </h1>
              <Image src={Soccer} alt="/" height={120} width={160} />
              <h2 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>
        </div>
        <h1 className="text-[#00A547] text-center text-[24px] font-bold pt-12 pb-5">
          Exclusive
        </h1>
        <div className="flex justify-center items-center pt-6">
          <div className="bg-[url('/assets/Vector.svg')] h-[234px] w-[330px] bg-no-repeat bg-cover">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold pt-9">
                Formula 1 Racing
              </h1>
              <Image src={Formula} alt="/" height={120} width={160} />
              <h2 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>

          <div className="bg-[url('/assets/Vector.svg')] h-[234px] w-[330px] bg-no-repeat bg-cover">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold pt-9">
                Kickboxing
              </h1>
              <Image src={Kickboxing} alt="/" height={120} width={160} />
              <h2 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>
        </div>
        <h1 className="text-[#00A547] text-center text-[24px] font-bold pt-12 pb-5">
          Exclusive
        </h1>
        <div className="flex justify-center pt-6">
          <div className="bg-[url('/assets/Vector.svg')] h-[234px] w-[330px] bg-no-repeat bg-cover">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold pt-9">
                Crypto Trading
              </h1>
              <Image src={Crypto} alt="/" height={120} width={160} />
              <h2 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>
          <div className="bg-[url('/assets/Vector.svg')] h-[234px] w-[330px] bg-no-repeat bg-cover">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold pt-9">
                Equity Stocks
              </h1>
              <Image src={Equity} alt="/" height={120} width={160} />
              <h2 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-6">
          <div className="bg-[url('/assets/Vector.svg')] h-[234px] w-[330px] bg-no-repeat bg-cover">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold pt-9">
                Commodity
              </h1>
              <Image src={Commodity} alt="/" height={120} width={160} />
              <h2 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>
          <div className="bg-[url('/assets/Vector.svg')] h-[234px] w-[330px] bg-no-repeat bg-cover">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold pt-9">
                Forex
              </h1>
              <Image src={Forex} alt="/" height={120} width={160} />
              <h2 className="text-[#0169B6] font-[Montserrat Alternates] font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* {..........Mobile View ..........} */}
      <div className="block sm:hidden">
        <div className="flex-col justify-center items-center pt-6">
          <div className="bg-[url('/assets/Vector.svg')] h-[200px] w-[280px] bg-no-repeat bg-cover mb-7">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-mono font-semibold pt-4">
                Basketball
              </h1>
              <Image src={Basketball} alt="/" height={100} width={140} />
              <h2 className="text-[#0169B6] font-mono font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>
          <div className="bg-[url('/assets/Vector.svg')] h-[200px] w-[280px] bg-no-repeat bg-cover mb-7 ml-14">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-mono font-semibold pt-4">
                Kabaddi League
              </h1>
              <Image src={Kabaddi} alt="/" height={100} width={140} />
              <h2 className="text-[#0169B6] font-mono font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>

          <div className="bg-[url('/assets/Vector.svg')] h-[200px] w-[280px] bg-no-repeat bg-cover mb-7 mr-10">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-mono font-semibold pt-4">
                Soccer
              </h1>
              <Image src={Soccer} alt="/" height={100} width={140} />
              <h2 className="text-[#0169B6] font-mono font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>
          <div className="bg-[url('/assets/Vector.svg')] h-[200px] w-[280px] bg-no-repeat bg-cover mb-7  ml-14">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-mono font-semibold pt-4">
                Baseball League
              </h1>
              <Image src={Basketball2} alt="/" height={100} width={140} />
              <h2 className="text-[#0169B6] font-mono font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>

          <div className="bg-[url('/assets/Vector.svg')] h-[200px] w-[280px] bg-no-repeat bg-cover mb-7 ">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-mono font-semibold pt-4">
                Soccer
              </h1>
              <Image src={Soccer} alt="/" height={100} width={140} />
              <h2 className="text-[#0169B6] font-mono font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>
          <div className="bg-[url('/assets/Vector.svg')] h-[200px] w-[280px] bg-no-repeat bg-cover mb-7  ml-14">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-mono font-semibold pt-4">
                Formula 1 Racing
              </h1>
              <Image src={Formula} alt="/" height={100} width={140} />
              <h2 className="text-[#0169B6] font-mono font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>

          <div className="bg-[url('/assets/Vector.svg')] h-[200px] w-[280px] bg-no-repeat bg-cover mb-7">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-mono font-semibold pt-4">
                Kickboxing
              </h1>
              <Image src={Kickboxing} alt="/" height={100} width={140} />
              <h2 className="text-[#0169B6] font-mono font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>
          <div className="bg-[url('/assets/Vector.svg')] h-[200px] w-[280px] bg-no-repeat bg-cover mb-7  ml-14">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-mono font-semibold pt-4">
                Crypto Trading
              </h1>
              <Image src={Crypto} alt="/" height={100} width={140} />
              <h2 className="text-[#0169B6] font-mono font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>
          <div className="bg-[url('/assets/Vector.svg')] h-[200px] w-[280px] bg-no-repeat bg-cover mb-7">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-mono font-semibold pt-4">
                Equity Stocks
              </h1>
              <Image src={Equity} alt="/" height={100} width={140} />
              <h2 className="text-[#0169B6] font-mono font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>
          <div className="bg-[url('/assets/Vector.svg')] h-[200px] w-[280px] bg-no-repeat bg-cover mb-7  ml-14">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-mono font-semibold pt-4">
                Commodity
              </h1>
              <Image src={Commodity} alt="/" height={100} width={140} />
              <h2 className="text-[#0169B6] font-mono font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>
          <div className="bg-[url('/assets/Vector.svg')] h-[200px] w-[280px] bg-no-repeat bg-cover mb-7">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-mono font-semibold pt-4">
                Formula 1 Racing
              </h1>
              <Image src={Formula} alt="/" height={100} width={140} />
              <h2 className="text-[#0169B6] font-mono font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>

          <div className="bg-[url('/assets/Vector.svg')] h-[200px] w-[280px] bg-no-repeat bg-cover mb-7  ml-14">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0169B6] font-mono font-semibold pt-4">
                Kickboxing
              </h1>
              <Image src={Kickboxing} alt="/" height={100} width={140} />
              <h2 className="text-[#0169B6] font-mono font-semibold">
                View More{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTheApp;
