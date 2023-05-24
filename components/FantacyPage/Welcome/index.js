import Image from "next/image";
import Line from "/public/assets/fantacyimg/Rectangle 29.png";
export default function Welcome() {
  return (
    <div>
      <h1 className="text-[#0169B6] font-bold font-mono text-[18px] sm:text-[24px] lg:text-[28px] pl-4 pt-14 text-center pb-8">
        Welcome to the Best of
        <span className="text-[#00A547]"> Fantasy Cricket on Win 11 </span>
      </h1>

      {/* ///background-card and Line image */}

      <div className="grid lg:grid-cols-3 lg:grid-rows-1 sm:grid-cols-3 sm:grid-rows-1 grid-cols-1 grid-rows-1 pl-4 pr-4 pt-6">
        <div className="bg-[url('/assets/fantacyimg/Rectangle27.svg')] lg:h-[300px] sm:h-[290px] h-[260px] sm:w-[320px] lg:w-[350px] w-[300px] bg-no-repeat bg-contain sm:ml-5 lg:ml-0">
          <h1 className="text-black font-mono font-[400] text-[12px] sm:text-[14px] lg:text-[16px] w-[320px] pl-10 pr-5 pt-3">
            What is the fantasy cricket format of Win 11?
          </h1>
          <Image src={Line} alt="/" className="pl-5 pr-2" />
          <h4 className="text-[#0B592A] font-mono  text-[11px] sm:text-[13px] lg:text-[13px] lg:w-[330px] w-[310px] lg:pl-10 pr-5 pt-3 pl-4 sm:pl-6">
            I’ve been playing on Win 11 since 2017. It’s truly my cricket
            knowledge that has helped me gain this achievement and empowered me
            to be capable in society. It's due to my skills that I've won on Win
            11.
          </h4>
        </div>

        <div className="bg-[url('/assets/fantacyimg/Rectangle27.svg')] lg:h-[300px] sm:h-[290px] h-[260px] sm:w-[320px] lg:w-[350px] w-[300px] bg-no-repeat bg-contain sm:ml-20 lg:ml-0 hidden sm:block">
          <h1 className="text-black font-mono font-[400] text-[12px] sm:text-[14px] lg:text-[16px] w-[320px] pl-10 pr-5 pt-3">
            What is the fantasy cricket format of Win 11?
          </h1>
          <Image src={Line} alt="/" className="pl-5 pr-2" />
          <h4 className="text-[#0B592A] font-mono  text-[11px] sm:text-[13px] lg:text-[13px] lg:w-[330px] w-[310px] lg:pl-10 pr-5 pt-3 pl-4 sm:pl-6">
            I’ve been playing on Win 11 since 2017. It’s truly my cricket
            knowledge that has helped me gain this achievement and empowered me
            to be capable in society. It's due to my skills that I've won on Win
            11.
          </h4>
        </div>

        <div className="bg-[url('/assets/fantacyimg/Rectangle27.svg')] lg:h-[300px] sm:h-[290px] h-[260px] sm:w-[320px] lg:w-[350px] w-[300px] bg-no-repeat bg-contain sm:ml-36 lg:ml-0 hidden sm:block">
          <h1 className="text-black font-mono font-[400] text-[12px] sm:text-[14px] lg:text-[16px] w-[320px] pl-10 pr-5 pt-3">
            What is the fantasy cricket format of Win 11?
          </h1>
          <Image src={Line} alt="/" className="pl-5 pr-2" />
          <h4 className="text-[#0B592A] font-mono  text-[11px] sm:text-[13px] lg:text-[13px] lg:w-[330px] w-[310px] lg:pl-10 pr-5 pt-3 pl-4 sm:pl-6">
            I’ve been playing on Win 11 since 2017. It’s truly my cricket
            knowledge that has helped me gain this achievement and empowered me
            to be capable in society. It's due to my skills that I've won on Win
            11.
          </h4>
        </div>
      </div>
    </div>
  );
}
