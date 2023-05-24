// import Image from "next/image";
// import BallImg from "/public/assets/fantacyimg/Vector (10).png";
export default function PlayIndian() {
  return (
    <div className="relative -z-50">
      <div className="flex flex-col justify-center items-center pt-20">
        <button className="text-white text-center bg-[#00A547] rounded-md lg:h-[30px] lg:w-[532px] sm:w-[400px] w-[320px]  ml-2">
          Follow Win 11 For Today’s Fantasy Cricket Match Prediction
        </button>
      </div>
      <h1 className="text-[#0169B6] font-bold font-mono text-[18px] sm:text-[24px] lg:text-[28px]  pl-4 pt-14 text-center pb-8">
        Play
        <span className="text-[#00A547]"> Indian Fantasy Cricket </span>on Win
        11
      </h1>

      <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] px-5 sm:px-20 lg:px-28 text-center  pb-2 sm:pb-5 lg:pb-8  relative">
        Indian fantasy cricket is a virtual online game featuring your team of
        the best 11 cricketers for a chosen fantasy league. You should select
        players based on their performance on the field to earn good points as
        per the points system and win real money. So, when you play Indian
        fantasy cricket online, the more points your players in the fantasy team
        score, the more you win money.
      </p>
      {/* <Image
        src={BallImg}
        alt="/"
        className="h-[100px] w-[50px] absolute  bottom-[-90%] left-0"
      /> */}
    </div>
  );
}
