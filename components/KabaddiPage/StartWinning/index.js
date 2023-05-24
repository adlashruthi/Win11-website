import Image from "next/image";
import CupImage from "/public/assets/Group (2).png";

import IconImg from "/public/assets/privacyimg/34) icon/chevron-up.png";
export default function StartWinning() {
  return (
    <div>
      <div className="pt-16">
        <h1 className="text-[#0169B6] font-bold font-[Montserrat Alternates] text-[24px] lg:text-[26px]  pb-4 text-center">
          Add the App &{" "}
          <span className="text-[#00A547] font-bold font-[Montserrat Alternates] text-[26px]">
            Start Wining!
          </span>
        </h1>

        <div className="flex justify-center">
          <div className="pl-36 ">
            <Image
              src={CupImage}
              alt="/"
              className=" sm:h-[140px] lg:h-[140px] lg:w-[130px]"
            />
          </div>
          <div>
            <p className="text-[#0B592A]  font-mono text-[12px] px-6 w-[350px] lg:w-[700px] sm:px-16 lg:px-24 text-center pb-4 ">
              Join the world of exciting Fantasy Kabaddi games and tournaments –
              download the Win 11 Fantasy App to play fantasy kabaddi or any
              other fantasy sport on your Android or iOS device.
            </p>
            <div className="flex justify-center items-center">
              <button className="bg-[#00A547] text-white h-[34px] w-[140px] rounded-lg  mt-4 text-center mb-20">
                GET THE APP
              </button>
            </div>
          </div>

          <div className="pr-36">
            <Image
              src={CupImage}
              alt="/"
              className="h-[100px] lg:h-[140px] lg:w-[130px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
