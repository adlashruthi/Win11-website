import Image from "next/image";
import img1 from "/public/assets/cricketimg/Group 41929.png";
import RightImg from "/public/assets/fantacyimg/Group 41837.png";

export default function PlayToWin() {
  return (
    <div className="pb-20 sm:pb-0">
      <div className="bg-[url('/assets/cricketimg/Vector16.svg')] bg-no-repeat bg-center h-[1080px] w-full mb-10 ">
        <div>
          <h1 className="text-[#0169B6] text-[16px] sm:text-[24px] lg:text-[28px] font-[700] text-center sm:ml-28 ml-7 pt-32">
            Play to Win Big!{" "}
            <span className="text-[#00A547]">
              Fantasy Cricket Tips and Tricks
            </span>
          </h1>
          <div className="lg:h-[100px] sm:h-[90px] lg:w-[988px] sm:w-[700px] w-[300px] flex justify-center lg:ml-28 sm:ml-28 ml-10 pt-6">
            <p className=" text-[#0B592A] lg:text-[16px] sm:text-[14px] text-[12px] font-[400] sm:pl-20  pr-6  text-center">
              Want to start playing fantasy cricket on the Win11 cricket fantasy
              app? Here are some essential and expert tips to increase your
              chances of winning.
            </p>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap justify-around sm:mt-32 mt-16 lg:ml-20 ml-16 pr-8">
            <div>
              <Image
                src={img1}
                alt="/"
                className="lg:h-[451px] sm:h-[450px] h-[370px] lg:w-[360px] sm:w-[400px] w-[360px] pb-10 sm:pb-0"
              />
            </div>
            <div>
              <div className="flex pb-5">
                <Image src={RightImg} alt="/" className="w-[20px] h-[20px]" />
                <p className="lg:text-[15px] text-[14px] text-[#0B592A] text-center pl-6 font-[400]">
                  Check the players’{" "}
                  <span className="text-[#0169B6]">recent performances</span>
                </p>
              </div>

              <div className="flex pb-3">
                <Image src={RightImg} alt="/" className="w-[20px] h-[20px]" />
                <p className="lg:text-[15px] text-[14px] text-[#0B592A] text-center pl-6 font-[400]">
                  Analyse the{" "}
                  <span className="text-[#0169B6]">
                    {" "}
                    pitch and weather report
                  </span>
                </p>
              </div>

              <div className="flex pb-5">
                <Image src={RightImg} alt="/" className="w-[20px] h-[20px]" />
                <p className="lg:text-[15px] text-[14px] text-[#0B592A] text-center pl-6 font-[400]">
                  Select your wicketkeeper, batters, all-rounders and bowlers
                </p>
              </div>
              <div className="flex   pb-5">
                <Image src={RightImg} alt="/" className="w-[20px] h-[20px]" />
                <p className="lg:text-[15px] text-[14px] text-[#0B592A] text-center pl-6 font-[400]">
                  Choose your
                  <span className="text-[#0169B6]">
                    {" "}
                    Captain and Vice-captain
                  </span>
                  based on which two players you think will perform the best
                </p>
              </div>
              <div className="flex pb-6">
                <Image src={RightImg} alt="/" className="w-[20px] h-[20px]" />
                <p className="lg:text-[15px] text-[14px] text-[#0B592A] text-center pl-6 font-[400]">
                  Follow the
                  <span className="text-[#0169B6]">
                    {" "}
                    latest updates and lineup announcements
                  </span>{" "}
                  about the teams
                </p>
              </div>
              <div className="flex pb-6">
                <Image src={RightImg} alt="/" className="w-[20px] h-[20px]" />
                <p className="lg:text-[15px] text-[14px] text-[#0B592A] text-center pl-6 font-[400]">
                  Play for free in practice contests
                  <span className="text-[#0169B6]"> on Win11 fantasy app</span>
                </p>
              </div>
              <div className="flex pb-6">
                <Image src={RightImg} alt="/" className="w-[20px] h-[20px]" />
                <p className="lg:text-[15px] text-[14px] text-[#0B592A] text-center pl-6 font-[400]">
                  The more fantasy games or contests
                  <span className="text-[#0169B6]">
                    {" "}
                    you play, the better is your probability of winning!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
         
    </div>
  );
}
