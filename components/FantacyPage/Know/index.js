import Image from "next/image";
import TableImg from "/public/assets/fantacyimg/Group 41809.png";
export default function Know() {
  return (
    <div>
      <h1 className="text-[#0169B6] font-bold font-mono text-[16px] sm:text-[24px] lg:text-[26px]  pl-4 pt-14 text-center pb-4">
        Know more on <span className="text-[#00A547]"> How to Play </span> for
        Other Fantasy Sports Games
      </h1>
      <h1 className="text-[#00A547] font-bold font-mono text-[16px] sm:text-[20px] lg:text-[22px]  pl-4 pt-6 text-center pb-4">
        Fantasy Cricket <span className="text-[#0169B6]"> Points System </span>
      </h1>
      {/* <p className="text-[#0B592A]  font-mono text-[14px] pl-28 pr-28 text-center pb-8"> */}
      <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] px-5 sm:px-20 lg:px-28 text-center  pb-2 sm:pb-5 lg:pb-8 ">
        The fantasy points are calculated slightly differently depending on the
        type of cricket being played. In T20 Internationals, for instance, a
        bowler receives an additional six points if their economy rate is lower
        than 5 runs per over. In contrast, there is no point system at all for
        the economy rate in the format of cricket known as the Test. In the same
        vein, if a batter is run out without scoring any runs during a test
        match, they will lose four points. On the other hand, you will lose two
        points if the same thing takes place in a T10 or T20 format. This page
        provides a comprehensive breakdown of the fantasy cricket point system.
      </p>

      {/* {//.........How To Make A Fantasy Cricket Team on Win 11-The Easier Way!......//} */}

      <h1 className="text-[#0169B6] font-bold font-mono text-[16px] sm:text-[24px] lg:text-[26px]  pl-4 pt-14 text-center pb-4">
        How To Make A{" "}
        <span className="text-[#00A547]"> Fantasy Cricket Team </span> on Win
        11-The Easier Way!
      </h1>
      <p className="text-[#0B592A]  font-mono text-[12px] sm:text-[13px] lg:text-[14px] px-5 sm:px-20 lg:px-28 text-center  pb-2 sm:pb-5 lg:pb-8 ">
        There must be 11 players on your cricket team when you create it on
        Win11. A maximum of 7 players may be selected by any one team.
      </p>
      <p className="text-[#0B592A]  font-mono text-[12px] sm:text-[13px] lg:text-[14px] px-5 sm:px-20 lg:px-28 text-center  pb-2 sm:pb-5 lg:pb-8 ">
        . Every cricket team you build on Win 11 must have 11 players
      </p>
      <p className="text-[#0B592A]  font-mono text-[12px] sm:text-[13px] lg:text-[14px] px-5 sm:px-20 lg:px-28 text-center  pb-2 sm:pb-5 lg:pb-8 ">
        . Every cricket team you build on Win 11 must have 11 players
      </p>
      <p className="text-[#0B592A]  font-mono text-[14px] text-center pb-2">
        . Every cricket team you build on Win 11 must have 11 players
      </p>

      <div className="bg-[url('/assets/fantacyimg/Ellipse558.svg')] h-[500px] bg-no-repeat bg-contain bg-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#0B592A]  font-mono text-[12px] sm:text-[14px] lg:text-[16px] text-center pt-6 pb-2 sm:px-0 px-5">
            No of Players you can choose for the game is as below:
          </h1>
          <Image
            src={TableImg}
            alt="/"
            className="lg:h-[280px] lg:w-[350px] sm:h-[260px] h:[240px] sm:w-[320px] w-[290px] pt-16"
          />
        </div>
        <p className="text-[#0B592A]  font-mono text-[16px] text-center pt-6 pb-2">
          The player combinations for your team are countless.
        </p>

        {/* //...........Captain and Vice - Captain Points System ........// */}
        <h1 className="text-[#00A547] font-bold font-mono text-[16px] sm:text-[20px] lg:text-[22px] pl-4 text-center pb-4 pt-6">
          Captain and Vice - Captain{" "}
          <span className="text-[#0169B6]"> Points System</span>
        </h1>

        <p className="text-[#0B592A]  font-mono text-[12px] sm:text-[13px] lg:text-[14px] px-5 sm:px-20 lg:px-28 text-center  pb-2 sm:pb-5 lg:pb-8 ">
          You must choose a team captain and vice-captain once you have chosen
          your 11 players. You will receive twice (2X times) as many points from
          the captain as they did in the actual game. The vice-captain will
          award you 1.5 times as many points as they did in the actual game.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center pt-20">
        <button className="text-white text-center bg-[#00A547] rounded-md h-[30px] w-[232px] ml-2">
          Click For Win 11 Fantasy Cricket Points System
        </button>
      </div>
    </div>
  );
}
