import Image from "next/image";
import img1 from "/public/assets/fantacyimg/Group 42031.png";
import img2 from "/public/assets/fantacyimg/Group 42032.png";
export default function WhilePlaying() {
  return (
    <div className="pb-5 -z-50">
      <div className="bg-[url('/assets/fantacyimg/Group42293(1).svg')] lg:h-[700px] sm:h-[900px] h-[940px] bg-no-repeat bg-cover">
        <h1 className=" text-[#00A547] font-bold font-mono text-[16px] sm:text-[20px] lg:text-[26px]   pb-4 text-center pt-36 lg:pt-48 sm:mr-12 lg:mr-0">
          Do’s and Don'ts
          <span className=" text-[#0169B6]">
            {" "}
            While Playing Fantasy Cricket{" "}
          </span>
        </h1>

        <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] px-5  lg:px-28 text-center  pb-2 sm:pb-20 lg:pb-8 sm:pr-16 lg:pr-0 sm:pt-3 ">
          There are opportunities to play fantasy cricket daily and win crores.
          As you would have seen above in the list of winners, you can win
          anywhere from thousands, lakhs to crores if the Win 11 team created by
          you features in the winning list.
        </p>

        <div className="grid lg:grid-cols-2 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 grid-cols-1 grid-rows-2">
          <div className="flex  items-center lg:ml-56 sm:ml-36 ml-7 pt-6 sm:pt-0">
            <div>
              <Image
                src={img1}
                alt="/"
                className="lg:h-[240px] sm:h-[200px] h-[200px] lg:w-[400px] sm:w-[380px] w-[320px] "
              />
            </div>
          </div>
          <div className="sm:ml-80 lg:ml-0 sm:pt-5 pt-10">
            <Image
              src={img2}
              alt="/"
              className="lg:h-[240px] sm:h-[200px] h-[200px] lg:w-[400px] sm:w-[380px] w-[320px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
