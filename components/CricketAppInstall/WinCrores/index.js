import Image from "next/image";
import phoneImg1 from "public/assets/cricketimg/Group 42114.png";
import phoneImg2 from "public/assets/cricketimg/Frame 42018.png";
import phoneImg3 from "public/assets/cricketimg/Frame 42018 (1).png";
import phoneImg4 from "public/assets/cricketimg/Frame 42018 (2).png";
import phoneImg5 from "public/assets/cricketimg/Frame 42018 (3).png";
import mobile from "public/assets/cricketimg/Frame 42018 (4).png";
export default function WinCrores() {
  return (
    <div>
      <div className="hidden sm:block">
        <div className="bg-[url('/assets/cricketimg/Vector15(4).svg')] bg-no-repeat bg-cover h-[1084px] ">
          <h1 className="text-[28px] font-[700] text-[#0169B6] text-center pt-64">
            Get the App and <span className="text-[#00A547]">Win Crores</span>
          </h1>
          <div className="flex lg:ml-20 sm:ml-8 lg:pt-6 sm:pt-9">
            <Image
              src={phoneImg1}
              alt="/"
              className="lg:h-[405px] sm:h-[260px] h-[200px] lg:w-[200px] sm:w-[140px]  lg:mr-5 sm:mr-3"
            />
            <Image
              src={phoneImg2}
              alt="/"
              className="lg:h-[405px] sm:h-[260px] h-[200px] lg:w-[200px] sm:w-[140px]  lg:mr-5 lg:mt-28 sm:mt-28 sm:mr-3"
            />
            <Image
              src={phoneImg3}
              alt="/"
              className="lg:h-[405px] sm:h-[260px] h-[200px] lg:w-[200px] sm:w-[140px]  lg:mr-5 lg:mt-44 sm:mt-44 sm:mr-3"
            />
            <Image
              src={phoneImg4}
              alt="/"
              className="lg:h-[405px] sm:h-[260px] h-[200px] lg:w-[200px] sm:w-[140px]  lg:mr-5 lg:mt-28 sm:mt-28 sm:mr-3"
            />
            <Image
              src={phoneImg5}
              alt="/"
              className="lg:h-[405px] sm:h-[260px] h-[200px] lg:w-[200px] sm:w-[140px]  lg:mr-5 sm:mr-3"
            />
          </div>
        </div>
           
      </div>
      <div className="sm:hidden">
        <div className="bg-[url('/assets/cricketimg/Vector15(5).svg')] bg-no-repeat bg-cover h-[284px] ">
          <h1 className="text-[18px] font-[700] text-[#0169B6] text-center pt-8 ">
            Get the App and <span className="text-[#00A547]">Win Crores</span>
          </h1>
          <Image
            src={mobile}
            alt="/"
            className="h-[200px] w-[80px] pt-8 ml-28"
          />
        </div>
      </div>
    </div>
  );
}
