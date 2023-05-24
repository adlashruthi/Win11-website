import Image from "next/image";
import Cup1 from "/public/assets/getappimg/Group.png";
import Link from "next/link";
import MobileImg from "/public/assets/mobileimgs/Group 42312 (1).png";
// import Step1 from "/public/assets/getappimg/Step 1.png";
// import Step2 from "/public/assets/getappimg/Step 2.png";
// import Mobile from "/public/assets/getappimg/Frame 42018.png";

// import num1 from "/public/assets/cricketimg/1 (1).png";
// import num2 from "/public/assets/cricketimg/2 (1).png";
// import homeScreenImg1 from "/public/assets/cricketimg/Rectangle 30.png";
// import homeScreenImg2 from "/public/assets/cricketimg/Rectangle 2087 (12).png";
export default function Follow() {
  return (
    <div>
      <div className="hidden sm:block">
        <div className="bg-[url('/assets/getappimg/Group42501(1).svg')] h-[680px] w-full bg-no-repeat bg-center">
          <Image
            src={Cup1}
            alt="/"
            height={180}
            width={170}
            className="pt-28 pl-16"
          />
          <h1 className="text-[#006731] text-[32px] font-bold pl-16">Win 11</h1>
          <p className="text-[#616160] text-[10px] pl-16">
            Your winning Your Destination
          </p>
          <h1 className="text-[#006731] text-[16px] w-[400px] h-[44px] pl-14">
            Create your team to win points based on all the players' performance
            in a live game.
          </h1>
          <div className="flex">
            <div className="border-[#959595] bg-slate-200 border-solid border-2 h-[30px] w-[180px] rounded-sm pl-3 pt-2 mb-4 pb-6 mt-4 ml-8 text-[12px]">
              Enter your Mobile Number
            </div>
            <button className="text-[#075500] text-center bg-[#FFEB00] rounded-md h-[30px] w-[99px] ml-2 mt-5 text-[14px]">
              Get The App
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-8">
          <h1 className="text-[#0169B6] lg:text-[28px] sm:text-[24px] text-[22px] mx-6 font-semibold">
            Follow these steps to install the{" "}
            <span className="text-[#00A547]">Win 11 Android App</span>
          </h1>
          <button className="text-[#ffff] text-center bg-[#00A547] rounded-md h-[30px] w-[179px] text-[16px] justify-center mb-5 mt-4">
            <Link href="/getapp"> Get The App</Link>
          </button>
        </div>
      </div>
      {/* {//......background cards and images........//} */}
         
      <div className="block sm:hidden">
        <Image src={MobileImg} alt="/" className="h-[360px] w-full" />
      </div>
    </div>
  );
}
