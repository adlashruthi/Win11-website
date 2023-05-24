import Image from "next/image";
import EveryImg from "/public/assets/jobsimg/IMAGE (8).png";
import EveryImg1 from "/public/assets/jobsimg/IMAGE (9).png";
import EveryImg2 from "/public/assets/jobsimg/IMAGE (10).png";
export default function EveryDay() {
  return (
    <div>
      <h1 className="text-[#0169B6]  font-bold font-mono lg:text-[22px] sm:text-[20px] text-[18px] pl-4 pt-10 text-center pb-8">
        EVERYDAY,
        <br /> WE BRING OUR A - GAME
      </h1>
      <div className="flex justify-around pt-4">
        <Image
          src={EveryImg}
          alt="/"
          className="lg:h-[350px] sm:h-[250px] h-[160px] lg:w-[300px] sm:w-[250px] w-[180px] sm:ml-32 lg:ml-0 ml-56"
        />
        <Image
          src={EveryImg1}
          alt="/"
          className="lg:h-[350px] lg:w-[500px] sm:h-[250px] h-[160px] sm:w-[400px] w-[200px] sm:ml-12 lg:ml-0 ml-6"
        />
        <Image
          src={EveryImg2}
          alt="/"
          className="lg:h-[350px] sm:h-[250px]  lg:w-[300px] sm:w-[250px] w-[180px] sm:ml-8 lg:ml-0"
        />
      </div>
    </div>
  );
}
