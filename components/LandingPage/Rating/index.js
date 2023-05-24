import React from "react";
import Image from "next/image";
import Virat from "/public/assets/Rectangle 2045.png";
import Rating55 from "/public/assets/Group 41955.png";
import Santhosh from "/public/assets/Group 41947.png";
import Deepak from "/public/assets/Group 41956.png";
import Rajesh from "/public/assets/Group 41957.png";
import santhosh from "/public/assets/santhoshimg/Ellipse 2.png";
import star from "/public/assets/santhoshimg/Group 41955 (1).png";
const Rating = () => {
  return (
    <div className="pt-24 relative -z-50">
      <div className="bg-[url('/assets/Group42302.svg')] h-[1100px] bg-no-repeat bg-cover pb-14">
        <h1 className="text-[#0169B6] text-center text-[26px] font-[Montserrat Alternates] font-semibold pt-44">
          How to <span className="text-[#00A547]">Play</span>
        </h1>
        <p className="text-[#0B592A]  font-mono text-[12px] sm:text-[14px] lg:text-[16px] px-[16px] sm:px-[20px] lg:px-[28px] text-center pb-8 ">
          Ready to challenge other sports fans? Watch this video to learn how to
          play on Win11 and get started now. Compete with sports fans, make a
          perfect Win11 team with the best combination of players as per your
          knowledge and skill and win big.
        </p>
        <div className=" flex justify-center">
          <Image
            src={Virat}
            alt="/"
            className="sm:h-[240px] h-[200px] sm:w-[380px] w-[300px] pt-12"
          />
        </div>

        <h1 className="text-[#0169B6] text-center text-[18px] sm:text-[26px] font-mono font-semibold pt-8">
          Reviews & <span className="text-[#00A547]">Rating</span>
        </h1>
        <div className="flex justify-center">
          <div className="flex justify-center items-center border-[#FFBC00] border-solid border-2 sm:h-[40px] h-[45px] sm:w-[400px] w-[300px] rounded-md  mt-6">
            <h1 className="text-[#333333] sm:text-[16px] text-[14px] font-semibold font-mono sm:pr-16 pr-4">
              App rating
            </h1>
            <Image
              src={Rating55}
              alt="/"
              height={100}
              width={130}
              className="pr-4"
            />
            <h1 className="pl-4 text-[#00A547]">5K Ratings</h1>
          </div>
        </div>
        <div className="hidden sm:block mt-10">
          <div className="flex justify-center sm:ml-24">
            <div className="relative ml-5 ">
              <div className="bg-[url('/assets/santhoshimg/Rectangle27(3).svg')] lg:h-[300px] lg:w-[340px] sm:h-[900px] h-[940px] bg-no-repeat bg-contain">
                <Image
                  src={santhosh}
                  alt="/"
                  className="h-[60px] w-[60px]  absolute  lg:bottom-[90%] sm:bottom-[96%] left-0 ml-8 "
                />
                <div className="flex">
                  <h4 className="text-[#333333] lg:text-[14px] sm:text-[13px] font-medium w-[120px] ml-12 mt-10">
                    Santhosh Waghmare
                  </h4>
                  <Image
                    src={star}
                    alt="/"
                    className="h-[30px] w-[100px] lg:ml-5 mt-10"
                  />
                </div>
                <div className="bg-[url('/assets/santhoshimg/Rectangle29(1).svg')] lg:h-[300px] lg:w-[293px] sm:w-[260px] sm:h-[900px] h-[940px] bg-no-repeat bg-contain lg:ml-4 sm:ml-4 sm:mr-2 lg:mr-0">
                  <h4 className="text-white text-[14px] font-medium ml-5">
                    Mega Contest Winner{" "}
                    <span className="text-[#EAFC00]"> ₹1.05 Crore</span>
                  </h4>
                  <h4 className="text-black text-[14px] font-medium ml-5">
                    Pune vs Hyderabad{" "}
                    <span className="text-white"> ₹1.05 Crore</span>
                  </h4>

                  <p className=" text-[#0B592A] lg:text-[14px] sm:text-[12px] text-[11px] font-[400] lg:pl-2 sm:pl-2 pl-5 pt-6 pr-4">
                    Fantasy gaming is something I've done for years, but Win11
                    is the real deal. I made more money from my understanding of
                    cricket than I had anticipated. I couldn't be happier that
                    my childhood love of cricket has become lucrative.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative lg:ml-5 ">
              <div className="bg-[url('/assets/santhoshimg/Rectangle27(3).svg')] lg:h-[300px] lg:w-[340px] sm:h-[900px] h-[940px] bg-no-repeat bg-contain">
                <Image
                  src={santhosh}
                  alt="/"
                  className="h-[60px] w-[60px]  absolute  lg:bottom-[90%] sm:bottom-[96%] left-0 ml-8 "
                />
                <div className="flex">
                  <h4 className="text-[#333333] lg:text-[14px] sm:text-[13px] font-medium w-[120px] ml-12 mt-10">
                    Santhosh Waghmare
                  </h4>
                  <Image
                    src={star}
                    alt="/"
                    className="h-[30px] w-[100px] lg:ml-5 mt-10"
                  />
                </div>
                <div className="bg-[url('/assets/santhoshimg/Rectangle29(1).svg')] lg:h-[300px] lg:w-[293px] sm:w-[260px] sm:h-[900px] h-[940px] bg-no-repeat bg-contain lg:ml-4 sm:ml-4 sm:mr-2 lg:mr-0">
                  <h4 className="text-white text-[14px] font-medium ml-5">
                    Mega Contest Winner{" "}
                    <span className="text-[#EAFC00]"> ₹1.05 Crore</span>
                  </h4>
                  <h4 className="text-black text-[14px] font-medium ml-5">
                    Pune vs Hyderabad{" "}
                    <span className="text-white"> ₹1.05 Crore</span>
                  </h4>

                  <p className=" text-[#0B592A] lg:text-[14px] sm:text-[12px] text-[11px] font-[400] lg:pl-2 sm:pl-2 pl-5 pt-6 pr-4">
                    Fantasy gaming is something I've done for years, but Win11
                    is the real deal. I made more money from my understanding of
                    cricket than I had anticipated. I couldn't be happier that
                    my childhood love of cricket has become lucrative.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative lg:ml-5  ">
              <div className="bg-[url('/assets/santhoshimg/Rectangle27(3).svg')] lg:h-[300px] lg:w-[340px] sm:h-[900px] h-[940px] bg-no-repeat bg-contain">
                <Image
                  src={santhosh}
                  alt="/"
                  className="h-[60px] w-[60px]  absolute  lg:bottom-[90%] sm:bottom-[96%] left-0 ml-8 "
                />
                <div className="flex">
                  <h4 className="text-[#333333] lg:text-[14px] sm:text-[13px] font-medium w-[120px] ml-12 mt-10">
                    Santhosh Waghmare
                  </h4>
                  <Image
                    src={star}
                    alt="/"
                    className="h-[30px] w-[100px] lg:ml-5 mt-10"
                  />
                </div>
                <div className="bg-[url('/assets/santhoshimg/Rectangle29(1).svg')] lg:h-[300px] lg:w-[293px] sm:w-[260px] sm:h-[900px] h-[940px] bg-no-repeat bg-contain lg:ml-4 sm:ml-4 sm:mr-2 lg:mr-0">
                  <h4 className="text-white text-[14px] font-medium ml-5">
                    Mega Contest Winner{" "}
                    <span className="text-[#EAFC00]"> ₹1.05 Crore</span>
                  </h4>
                  <h4 className="text-black text-[14px] font-medium ml-5">
                    Pune vs Hyderabad{" "}
                    <span className="text-white"> ₹1.05 Crore</span>
                  </h4>

                  <p className=" text-[#0B592A] lg:text-[14px] sm:text-[12px] text-[11px] font-[400] lg:pl-2 sm:pl-2 pl-5 pt-6 pr-4">
                    Fantasy gaming is something I've done for years, but Win11
                    is the real deal. I made more money from my understanding of
                    cricket than I had anticipated. I couldn't be happier that
                    my childhood love of cricket has become lucrative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block sm:hidden mt-10">
          <div className="relative ml-5  ">
            <div className="bg-[url('/assets/santhoshimg/Rectangle27(3).svg')] h-[260px] :w-[260px]  bg-no-repeat bg-contain">
              <Image
                src={santhosh}
                alt="/"
                className="h-[50px] w-[50px]  absolute  bottom-[90%] sm:bottom-[96%] left-0 ml-8 "
              />
              <div className="flex">
                <h4 className="text-[#333333] lg:text-[14px] sm:text-[13px] font-medium w-[120px] ml-12 mt-10">
                  Santhosh Waghmare
                </h4>
                <Image
                  src={star}
                  alt="/"
                  className="h-[30px] w-[100px] lg:ml-5 mt-10"
                />
              </div>
              <div className="bg-[url('/assets/santhoshimg/Rectangle29(1).svg')] h-[180px] w-[260px]  bg-no-repeat bg-contain ml-3 mr-5 ">
                <h4 className="text-white text-[14px] font-medium ml-5">
                  Mega Contest Winner{" "}
                  <span className="text-[#EAFC00]"> ₹1.05 Crore</span>
                </h4>
                <h4 className="text-black text-[14px] font-medium ml-5">
                  Pune vs Hyderabad{" "}
                  <span className="text-white"> ₹1.05 Crore</span>
                </h4>

                <p className=" text-[#0B592A] lg:text-[14px] sm:text-[12px] text-[11px] font-[400] lg:pl-2 sm:pl-2 pl-5 pt-6 pr-4">
                  Fantasy gaming is something I've done for years, but Win11 is
                  the real deal. I made more money from my understanding of
                  cricket than I had anticipated. I couldn't be happier that my
                  childhood love of cricket has become lucrative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
