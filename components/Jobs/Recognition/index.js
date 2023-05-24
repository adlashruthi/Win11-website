import Image from "next/image";
import Img1 from "/public/assets/jobsimg/Group 42191.png";
export default function Recognition() {
  return (
    <div className="pt-10 pb-10 ">
      <div className="bg-[url('/assets/jobsimg/Group42301.svg')] h-[850px] bg-no-repeat bg-cover">
        <div className="flex flex-wrap sm:flex-nowrap">
          <div className="lg:pt-64 sm:pt-64 lg:pl-20 sm:pl-20 pt-36">
            <h1 className="text-[#0B592A] font-bold lg:text-[20px] sm:text-[16px] text-[16px] font-mono lg:pl-4 sm:pl-4 pl-32">
              “ RECOGNITION
            </h1>

            <h1 className="text-[#00A547] lg:text-[24px] sm:text-[22px] text-[18px] font-mono font-semibold w-[240px] lg:ml-16 sm:ml-16 ml-36 pt-6">
              THE WORKPLACE OF YOUR DREAMS
            </h1>

            <p className="text-[#0B592A] lg:w-[509px] sm:w-[300px] w-[280px] text-[14px] pt-6 ml-16">
              {" "}
              We know how important a role the environment plays in a player's
              performance, so we make sure we offer the best to our Sportans.We
              ranked #10 in 2019 and #7 in 2020 among India's Great Mid-size
              Workplaces. We were also recognised as one of the Best Workplaces
              for Women and as one of the best places to work in the IT & IT-BPM
              sector in 2020.
            </p>
          </div>
          <div className="lg:pt-20 sm:pt-64">
            <Image src={Img1} alt="/" height={550} width={580} />
          </div>
        </div>
      </div>
    </div>
  );
}
