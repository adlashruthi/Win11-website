import Image from "next/image";
import CupImage from "/public/assets/Group (2).png";

import IconImg from "/public/assets/privacyimg/34) icon/chevron-up.png";
export default function AddTheApp() {
  return (
    <div>
      <div>
        <h1 className="text-[#0169B6] font-bold font-mono text-[20px] sm:text-[24px] lg:text-[28px]  pb-4 text-center  ">
          Add the App &{" "}
          <span className="text-[#00A547] font-bold font-mono text-[26px]">
            Start Wining!
          </span>
        </h1>

        <div className="flex justify-center">
          <div className="pl-36">
            <Image src={CupImage} alt="/" height={140} width={130} />
          </div>
          <div>
            <p className="text-[#0B592A] lg:w-[700px] sm:w-[300px] w-[370px]  font-mono   text-[12px] sm:text-[13px] lg:text-[14px] lg:pl-48 text-center pb-4 pt-4  sm:pl-0 pl-4 lg:pr-20 sm:pr-0 pr-8">
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
            <Image src={CupImage} alt="/" height={140} width={130} />
          </div>
        </div>
      </div>
    </div>
  );
}
