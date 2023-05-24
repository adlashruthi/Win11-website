import Image from "next/image";
import FindImg from "/public/assets/contactimg/Group 42209.png";
import FindImg1 from "/public/assets/contactimg/Group 42210.png";
import FindImg2 from "/public/assets/contactimg/Group 42211.png";
export default function Find() {
  return (
    <div>
      <h1 className="text-[#00A547] font-mono text-[20px] sm:text-[24px] lg:text-[28px] font-bold  pt-24 text-center">
        Can’t Find
        <span className="text-[#0169B6]">
          what you <br />
          looking for?{" "}
        </span>
      </h1>
      <div className="grid lg:grid-cols-3 lg:grid-rows-1 sm:grid-cols-3 sm:grid-rows-1 grid-rows-1 grid-cols-1  ">
        <Image
          src={FindImg}
          alt="/"
          className="lg:h-[180px] lg:w-[390px] sm:h-[140px] h-[130px] w-[270px] sm:w-[330px] lg:pr-12 lg:pl-20 sm:pl-3 pl-14 sm:pb-0 lg:pb-0 pb-5"
        />
        <Image
          src={FindImg1}
          alt="/"
          className="lg:h-[180px] lg:w-[390px] sm:h-[140px] h-[130px] w-[270px] sm:w-[330px] lg:pr-12 lg:pl-20 sm:pl-3 pl-14 sm:pb-0 lg:pb-0 pb-5"
        />

        <Image
          src={FindImg2}
          alt="/"
          className="lg:h-[180px] lg:w-[390px] sm:h-[140px] h-[130px] w-[270px] sm:w-[330px] lg:pr-12 sm:pr-5 lg:pl-20 sm:pl-3 pl-14 sm:pb-0 lg:pb-0 pb-5"
        />
      </div>
    </div>
  );
}
