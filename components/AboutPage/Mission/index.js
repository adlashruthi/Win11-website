import Image from "next/image";
import VisionImg3 from "public/assets/aboutimg/Group 42295.png";
export default function Mission() {
  return (
    <div>
      <div className="flex pt-20">
        <div className="mr-24 mt-6 lg:ml-16 sm:ml-4">
          <h1 className="text-[#0B592A] font-bold lg:text-[20px] sm:text-[16px] text-[16px] font-mono lg:pl-4 sm:pl-4 pl-32">
            “ OUR MISSION
          </h1>
          <h1 className="text-[#0169B6] lg:text-[24px] sm:text-[22px] text-[18px] font-mono font-bold w-[320px] sm:ml-16 ml-7 pt-6">
            TEAMWORK MAKES THE
            <span className="text-[#00A547]"> DREAM WORK</span>
          </h1>
          <p className="text-[#0B592A] lg:w-[509px] sm:w-[410px] w-[320px] lg:text-[14px] text-[12px] pt-4 lg:ml-16 sm:ml-14 ml-10">
            Deliver Best possible fantasy sports experience and Highly
            personalise Win11 for the fans. Become nationally recognized as
            standard in the esports industry. Be a platform where people come to
            feel the thrill of winning
          </p>
        </div>
        <div className="hidden sm:block">
          <Image
            src={VisionImg3}
            alt="/"
            className="lg:h-[380px] sm:h-[300px] w-[340px]"
          />
        </div>
      </div>

      <h1 className="text-[#0169B6] lg:text-[24px] sm:text-[22px] text-[18px] font-mono font-bold w-[320px] sm:ml-16 ml-12 pt-6">
        About
        <span className="text-[#00A547]"> Fantasy games</span>
      </h1>
      <p className="text-[#0B592A]  font-mono   text-[12px] sm:text-[13px] lg:text-[15px] sm:mx-16 text-center pb-4 pt-4  sm:pl-0 pl-4 lg:pr-0 sm:pr-0 pr-8">
        Each Win11 game has levels to serve Beginner, Intermediate and advanced
        players. On completion of each milestone user can earn unlimited coins
        and power ups to keep enjoying the game
      </p>
      <p className="text-[#0B592A]  font-mono   text-[12px] sm:text-[13px] lg:text-[15px] sm:mx-16 text-center pb-4 pt-4  sm:pl-0 pl-4 lg:pr-0 sm:pr-0 pr-8">
        <span className="text-[#000000] text-[16px] pt-10 font-semibold">
          With our always-on{""}
        </span>
        tournaments and one-on-one matches, we make sure users stay interests
        all along the gaming.
      </p>
      <p className="text-[#0B592A]  font-mono   text-[12px] sm:text-[13px] lg:text-[15px] sm:mx-16 text-center pb-4 pt-4  sm:pl-0 pl-4 lg:pr-0 sm:pr-0 pr-8">
        You take part, compete, and earn rewards throughout the day. Winners of
        a tournaments can receive their winnings by Popular Wallets, UPI, or
        bank transfer following the announcement of the final standings.
      </p>
    </div>
  );
}
