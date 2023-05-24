import Image from "next/image";
import RightImg from "/public/assets/fantacyimg/Group 41837.png";
export default function FantasyFootBall() {
  return (
    <div className="-z-50 relative">
      <div className="bg-[url('/assets/aboutimg/Group42296.svg')] lg:h-[800px] sm:h-[920px] h-[900px] bg-no-repeat bg-cover ">
        <h1 className=" text-[#00A547] font-bold font-mono text-[15px] sm:text-[20px] lg:text-[24px] pl-4 lg:pt-56 sm:pt-48 pt-36 text-center pb-8">
          Do’s and Don'ts{" "}
          <span className="text-[#0169B6]"> in Fantasy Football</span>
        </h1>

        <div className="grid lg:grid-cols-2 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-1 grid-cols-1 grid-rows-1 pt-9">
          <div className="bg-[url('/assets/footballimg/Rectangle27.svg')] lg:h-[290px] sm:h-[320px] h-[360px]  lg:w-[430px] sm:w-[400px] bg-no-repeat bg-contain relative lg:ml-20 sm:ml-40">
            <div className=" bg-[#0BAF59] flex justify-center rounded-2xl  lg:h-[40px] sm:h-[30px] h-[30px] lg:w-[280px] sm:w-[260px] w-[240px] items-center absolute top-[-5%] ml-20">
              <Image
                src={RightImg}
                alt="/"
                className="w-[20px] h-[20px] ml-4"
              />
              <p className="text-[#FFFFFF] w-[270px] pl-4 lg:text-[13px] sm:text-[12px] text-[11px] ">
                Do’s of playing fantasy Football
              </p>
            </div>

            <p className="text-[#0B592A] lg:text-[13px] sm:text-[12px] text-[12px] lg:w-[400px] pl-12 pr-6 lg:pt-8 sm:pt-5 pt-2">
              . For long-term results, remain composed and persistent. Create a
              team based on thorough investigation and comprehension.
            </p>
            <p className="text-[#0B592A] text-[13px] w-[400px] pl-12 pr-6 pb-1 ">
              . Do not undervalue the significance of a kicker.
            </p>
            <p className="text-[#0B592A] text-[13px] w-[400px] pl-12 pr-6 pb-1 ">
              . Select games wisely.
            </p>
            <p className="text-[#0B592A] text-[13px] w-[400px] pl-12 pr-6 pb-1 ">
              . Set recollections for lineup announcements.
            </p>
            <p className="text-[#0B592A] text-[13px] w-[400px] pl-12 pr-6 pb-1 ">
              . Having match schedules on hand.
            </p>
          </div>

          <div className="bg-[url('/assets/footballimg/Rectangle27.svg')] lg:h-[290px] sm:h-[320px] h-[360px]  lg:w-[430px] sm:w-[400px] bg-no-repeat bg-contain relative lg:ml-20 sm:ml-40">
            <div className=" bg-[#0BAF59] flex justify-center rounded-2xl  lg:h-[40px] sm:h-[30px] h-[30px] lg:w-[280px] sm:w-[260px] w-[250px] items-center absolute top-[-5%] ml-20">
              <Image
                src={RightImg}
                alt="/"
                className="w-[20px] h-[20px] ml-4"
              />
              <p className="text-[#FFFFFF] w-[270px] pl-4 lg:text-[13px] sm:text-[12px] text-[11px] ">
                Do’s of playing fantasy Football
              </p>
            </div>

            <p className="text-[#0B592A] text-[13px] w-[400px] pl-12 pr-6 pt-11 ">
              . You drafted your team too soon.
            </p>
            <p className="text-[#0B592A] text-[13px] w-[400px] pl-12 pr-6 pb-1 ">
              . Play one game with all of your money.
            </p>
            <p className="text-[#0B592A] text-[13px] w-[400px] pl-12 pr-6 pb-1 ">
              . Ignore the state of the terrain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
