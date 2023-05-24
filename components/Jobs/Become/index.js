import Image from "next/image";
import JobsImg from "/public/assets/jobsimg/Group 42181.png";
import CupImg from "/public/assets/jobsimg/Group.png";
export default function Become() {
  return (
    <div>
      <div className="bg-[url('/assets/jobsimg/Group42300.svg')] h-[800px]  bg-no-repeat bg-cover">
        <div className="flex">
          <Image
            src={JobsImg}
            alt="/"
            className="pt-36 sm:pl-20 lg:h-[480px] sm:h-[430px] h-[280px] lg:w-[480px] sm:w-[450px] w-[200px]"
          />

          <div className="lg:ml-16 sm:ml-2 ml-0">
            <Image
              src={CupImg}
              alt="/"
              className="sm:h-[180px] h-[170px] sm:w-[200px] w-[180px] pt-32 pl-28"
            />
            <h1 className="text-[#006731] sm:text-[36px] text-[24px] font-mono font-bold   pl-28">
              Win 11
            </h1>
            <p className="text-[#616160] sm:text-[10px] text-[8px] pl-28">
              Your winning Your Destination
            </p>
            <h2 className="text-[#0169B6] font-mono sm:text-[28px] text-[24px] pl-24 sm:w-[340px] w-[240px]">
              BECOME A <span className="text-[#00A547]">SPORTAN</span> AND MAKE{" "}
              <span className="text-[#00A547]"> SPORTS BETTER </span> WITH US
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
