import Image from "next/image";
import TeamImage from "/public/assets/jobsimg/Rectangle 2112.png";
export default function BeAPartTeam() {
  return (
    <div className="flex justify-center mt-28 mb-6">
      <div className="mr-24 mt-6">
        <h1 className="text-[#0B592A] font-bold lg:text-[20px] sm:text-[16px] text-[16px] font-mono lg:pl-4 sm:pl-4 pl-32">
          “ WHY WORK WITH US
        </h1>
        <h1 className="text-[#0169B6] lg:text-[24px] sm:text-[22px] text-[18px] font-mono font-semibold w-[240px] lg:ml-16 sm:ml-16 ml-36 pt-6">
          BE A PART OF THE
          <span className="text-[#00A547]"> WIN TEAM </span>
        </h1>

        <p className="text-[#0B592A] lg:w-[509px] sm:w-[420px] w-[320px] text-[14px] pt-6 lg:ml-16 sm:ml-16 ml-20">
          {" "}
          “Our culture is like a jersey that unites our team within Dream
          Sports. It is also our game plan that will continue to fuel our
          growth."
        </p>
        <br />
        <span className="text-[#000000] lg:text-[16px] sm:text-[14px]  pb-10 lg:ml-14 sm:ml-16 ml-20 font-semibold">
          - Bhavit Sheth, COO & Co Founder,
        </span>
        <p className="text-[#0B592A] lg:w-[509px] sm:w-[410px] w-[320px] lg:text-[14px] text-[12px] pt-4 lg:ml-16 sm:ml-14 ml-20">
          We believe that the only thing that scales an organisation is its
          culture. Hence at Dream Sports, we DO-PUT our culture first!
        </p>
      </div>
      <div className="bg-[url('/assets/jobsimg/Ellipse560.svg')] lg:h-[480px] sm:h-[420px] lg:w-[350px] sm:w-[300px] bg-no-repeat bg-contain hidden sm:block ">
        <div className="mt-10 lg:ml-14 sm:ml-0  sm:mr-16">
          <Image
            src={TeamImage}
            alt="/"
            className="lg:h-[270px] lg:w-[340px] sm:h-[250px] sm:w-[400px] "
          />
        </div>
      </div>
    </div>
  );
}
