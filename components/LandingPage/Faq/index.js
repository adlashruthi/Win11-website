import Image from "next/image";
import FantacyCricket from "/public/assets/Group 41963.png";
import CupImage from "/public/assets/Group (2).png";
import IconImg from "/public/assets/privacyimg/34) icon/chevron-up.png";
export default function Faq() {
  return (
    <div className=" pt-32">
      <div className="bg-[url('/assets/Group42133.svg')] h-[640px] sm:h-[740px] w-full bg-no-repeat bg-cover">
        <h1 className="text-[#0169B6] font-mono text-[22px] sm:text-[24px] lg:text-[28px] text-center lg:pt-28 sm:pt-48 pt-32">
          Popular <span className="text-[#00A547]"> Fantasy Sports</span> in
          India
        </h1>
        <p className="text-[#0B592A] font-[Montserrat Alternates] text-center pt-6 pl-4 pr-4">
          Fantasy sports is a platform for online gaming where fantasy players
          create a virtual team of real sports players. Win11 gives you plenty
          of options to create your fantasy sports team for the sport you would
          like to play and win! Here are the most popular fantasy sports leagues
          to play.
        </p>
        <div class="grid lg:grid-rows-3 lg:grid-flow-col-1 sm::grid-rows-3 sm::grid-flow-col-2 gap-4 lg:pt-4 sm:pt-0">
          <div class="row-start-2 row-span-2 ">
            <Image src={FantacyCricket} alt="/" height={400} width={400} />
          </div>
          <div className="row-end-3 row-span-2 sm:mt-40 hidden sm:block ">
            <Image src={FantacyCricket} alt="/" height={400} width={400} />
          </div>
          <div class="row-start-2 row-span-2 hidden lg:block  ">
            <Image src={FantacyCricket} alt="/" height={400} width={400} />
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="flex justify-around">
          <div className="md:hidden  ">
            <Image src={CupImage} alt="/" height={40} width={40} />
          </div>
          <h1 className="text-[#0169B6] font-bold font-mono text-[20px] sm:text-[20px] lg:text-[24px]  pb-4 text-center">
            Win 11{" "}
            <span className="text-[#00A547] font-bold font-mono text-[15px] sm:text-[20px] lg:text-[24px]">
              FAQ
            </span>
          </h1>
          <div className="md:hidden">
            <Image src={CupImage} alt="/" height={40} width={40} />
          </div>
        </div>
        <div className="flex justify-around">
          <div>
            <Image
              src={CupImage}
              alt="/"
              height={140}
              width={130}
              className="hidden lg:block"
            />
          </div>
          <div>
            <div className=" flex justify-between items-center border-[#959595] border-solid border-2 lg:h-[40px] sm:h-[40px] h-[50px] lg:w-[450px] sm:w-[380px] w-[320px] rounded-md pl-3  mb-4  lg:ml-0 sm:ml-9 ml-4">
              <h1 className="text-[#454545] font-Mono font-bold text-[14px] ">
                What is Fantasy Sports?
              </h1>
              <Image
                src={IconImg}
                alt="/"
                height={30}
                width={30}
                className="mr-2 text-[#6E6B7B]"
              />
            </div>

            <div className=" flex justify-between items-center border-[#959595] border-solid border-2 lg:h-[40px] sm:h-[40px] h-[50px] lg:w-[450px] sm:w-[380px] w-[320px] rounded-md pl-3  mb-4  lg:ml-0 sm:ml-9 ml-4">
              <h1 className="text-[#454545] font-Mono font-bold text-[14px] ">
                Is it safe to add money to Win11?
              </h1>
              <Image
                src={IconImg}
                alt="/"
                height={30}
                width={30}
                className="mr-2 text-[#6E6B7B]"
              />
            </div>
            <div className=" flex justify-between items-center border-[#959595] border-solid border-2 lg:h-[40px] sm:h-[40px] h-[50px] lg:w-[450px] sm:w-[380px] w-[320px] rounded-md pl-3  mb-4  lg:ml-0 sm:ml-9 ml-4">
              <h1 className="text-[#454545] font-Mono font-bold text-[14px] ">
                How are Win11 points calculated?
              </h1>
              <Image
                src={IconImg}
                alt="/"
                height={30}
                width={30}
                className="mr-2 text-[#6E6B7B]"
              />
            </div>
            <h1 className="text-[#0169B6] font-bold font-[Montserrat Alternates] text-[20px] ml-14 text-center">
              Add the App &{" "}
              <span className="text-[#00A547] font-bold font-[Montserrat Alternates] text-[20px]">
                Start Wining!
              </span>
            </h1>
            <button className="bg-[#00A547] text-white h-[34px] w-[140px] rounded-lg lg:ml-48 sm:ml-32 ml-24 mt-4 text-center mb-20">
              GET THE APP
            </button>
          </div>

          <div>
            <Image
              src={CupImage}
              alt="/"
              height={140}
              width={130}
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
