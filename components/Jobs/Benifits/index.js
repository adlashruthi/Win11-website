import Image from "next/image";
import BenifitsImg from "/public/assets/jobsimg/Group (3).png";
import BenifitsImg1 from "/public/assets/jobsimg/Frame.png";
import BenifitsImg2 from "/public/assets/jobsimg/Frame (1).png";
import BenifitsImg3 from "/public/assets/jobsimg/Frame (2).png";
import BenifitsImg4 from "/public/assets/jobsimg/Frame (3).png";
import BenifitsImg5 from "/public/assets/jobsimg/Frame (4).png";
import BenifitsImg6 from "/public/assets/jobsimg/Frame (5).png";
import BenifitsImg7 from "/public/assets/jobsimg/Frame (6).png";
import BenifitsImg8 from "/public/assets/jobsimg/Frame (7).png";

export default function Benifits() {
  return (
    <div>
      <div className="bg-[url('/assets/jobsimg/Vector15(2).svg')] lg:h-[1200px] sm:h-[1000px] h-[800px] w-full bg-no-repeat bg-cover pb-6">
        <h1 className="text-[#00A547] font-bold font-mono lg:text-[28px] sm:text-[24px] text-[22px]  lg:pt-28 sm:pt-28 pt-40 text-center pb-3">
          “ BENEFITS
        </h1>
        <h1 className="text-[#0169B6] font-bold font-mono text-[24px]   text-center pb-2">
          PERKS OF BEING ON THE TEAM
        </h1>
        <p className="text-[#0B592A] text-center  lg:text-[14px] sm:text-[13px] text-[12px] lg:w-[1200px] sm:w-[900px] w-[600px] lg:pl-72 sm:pl-56 pl-6 pr-64 ">
          Every Sportan is valuable to what we do here, so we pull all stops in
          making their day-to-day life more comfortable. We offer numerous
          benefits to them as well as their families.
        </p>

        {/* //background imags */}
        <div className="hidden sm:block">
          <div className="flex justify-center pt-6 lg:ml-5 sm:ml-10">
            <div className="bg-[url('/assets/jobsimg/Rectangle2119.svg')] lg:h-[234px] sm:h-[220px] lg:w-[247px] w-[230px] bg-no-repeat bg-contain mr-8">
              <Image
                src={BenifitsImg}
                alt="/"
                className="pl-16 pt-6 lg:h-[100px] sm:h-[80px] lg:w-[130px] sm:w-[110px]"
              />
              <h1 className="text-[#0B592A] font-bold font-mono lg:text-[18px] sm:text-[15px] pr-10 text-center pt-3 ">
                Proximity to Stadium
              </h1>
              <p className="text-[#0B592A] text-center lg:text-[12px] sm:text-[11px]  pr-10 pt-3">
                Stay closer to our office a.k.a our Stadium and we take care of
                a substantial part of your rent.
              </p>
            </div>
            <div className="bg-[url('/assets/jobsimg/Rectangle2119.svg')] lg:h-[234px] sm:h-[220px] lg:w-[247px] w-[230px] bg-no-repeat bg-contain mr-8">
              <Image
                src={BenifitsImg1}
                alt="/"
                className="pl-16 pt-6 lg:h-[100px] sm:h-[80px] lg:w-[130px] sm:w-[110px]"
              />
              <h1 className="text-[#0B592A] font-bold font-mono text-[18px] pr-10 text-center pt-3 ">
                Learning wallet
              </h1>
              <p className="text-[#0B592A] text-center text-[12px]  pr-10 pt-3">
                Stay closer to our office a.k.a our Stadium and we take care of
                a substantial part of your rent.
              </p>
            </div>

            <div className="bg-[url('/assets/jobsimg/Rectangle2119.svg')] lg:h-[234px] sm:h-[220px] lg:w-[247px] w-[230px] bg-no-repeat bg-contain mr-8">
              <Image
                src={BenifitsImg2}
                alt="/"
                className="pl-16 pt-6 lg:h-[100px] sm:h-[80px] lg:w-[130px] sm:w-[110px]"
              />
              <h1 className="text-[#0B592A] font-bold font-mono text-[18px] pr-10 text-center pt-3 ">
                Unplugged
              </h1>
              <p className="text-[#0B592A] text-center text-[12px]  pr-10 pt-3">
                Stay closer to our office a.k.a our Stadium and we take care of
                a substantial part of your rent.
              </p>
            </div>
          </div>

          {/* //background imags2 */}
          <div className="flex justify-center pt-6 sm:ml-10">
            <div className="bg-[url('/assets/jobsimg/Rectangle2119.svg')] lg:h-[234px] sm:h-[220px] lg:w-[247px] w-[230px] bg-no-repeat bg-contain mr-8">
              <Image
                src={BenifitsImg3}
                alt="/"
                className="pl-16 pt-6 lg:h-[100px] sm:h-[80px] lg:w-[130px] sm:w-[110px]"
              />
              <h1 className="text-[#0B592A] font-bold font-mono text-[18px] pr-10 text-center pt-3 ">
                Insurance
              </h1>
              <p className="text-[#0B592A] text-center text-[12px]  pr-10 pt-3">
                Stay closer to our office a.k.a our Stadium and we take care of
                a substantial part of your rent.
              </p>
            </div>
            <div className="bg-[url('/assets/jobsimg/Rectangle2119.svg')] lg:h-[234px] sm:h-[220px] lg:w-[247px] w-[230px] bg-no-repeat bg-contain mr-8">
              <Image
                src={BenifitsImg4}
                alt="/"
                className="pl-16 pt-6 lg:h-[100px] sm:h-[80px] lg:w-[130px] sm:w-[110px]"
              />
              <h1 className="text-[#0B592A] font-bold font-mono text-[18px] pr-10 text-center pt-1 ">
                Health & Wellness
              </h1>
              <p className="text-[#0B592A] text-center text-[12px]  pr-10 pt-1">
                Stay closer to our office a.k.a our Stadium and we take care of
                a substantial part of your rent.
              </p>
            </div>

            <div className="bg-[url('/assets/jobsimg/Rectangle2119.svg')] lg:h-[234px] sm:h-[220px] lg:w-[247px] w-[230px] bg-no-repeat bg-contain mr-8">
              <Image
                src={BenifitsImg5}
                alt="/"
                className="pl-16 pt-6 lg:h-[100px] sm:h-[80px] lg:w-[130px] sm:w-[110px]"
              />
              <h1 className="text-[#0B592A] font-bold font-mono text-[18px] pr-10 text-center pt-1 ">
                Company offsite
              </h1>
              <p className="text-[#0B592A] text-center text-[12px]  pr-10 pt-1">
                Stay closer to our office a.k.a our Stadium and we take care of
                a substantial part of your rent.
              </p>
            </div>
          </div>

          {/* //background imags */}
          <div className="flex justify-center pt-6 lg:ml-12 sm:ml-10">
            <div className="bg-[url('/assets/jobsimg/Rectangle2119.svg')] lg:h-[234px] sm:h-[220px] lg:w-[247px] w-[230px] bg-no-repeat bg-contain mr-8">
              <Image
                src={BenifitsImg6}
                alt="/"
                className="pl-16 pt-6 lg:h-[100px] sm:h-[80px] lg:w-[130px] sm:w-[120px]"
              />
              <h1 className="text-[#0B592A] font-bold font-mono text-[18px] pr-10 text-center pt-1 ">
                Unlimited leaves
              </h1>
              <p className="text-[#0B592A] text-center text-[12px]  pr-10 pt-1">
                Stay closer to our office a.k.a our Stadium and we take care of
                a substantial part of your rent.
              </p>
            </div>
            <div className="bg-[url('/assets/jobsimg/Rectangle2119.svg')] lg:h-[234px] sm:h-[220px] lg:w-[247px] w-[230px] bg-no-repeat bg-contain mr-8">
              <Image
                src={BenifitsImg7}
                alt="/"
                className="pl-16 pt-6 lg:h-[100px] sm:h-[80px] lg:w-[130px] sm:w-[120px]"
              />
              <h1 className="text-[#0B592A] font-bold font-mono text-[18px] pr-10 text-center pt-1 ">
                ESOPs
              </h1>
              <p className="text-[#0B592A] text-center text-[12px]  pr-10 pt-1">
                Stay closer to our office a.k.a our Stadium and we take care of
                a substantial part of your rent.
              </p>
            </div>

            <div className="bg-[url('/assets/jobsimg/Rectangle2119.svg')] lg:h-[234px] sm:h-[220px] lg:w-[247px] w-[230px] bg-no-repeat bg-contain mr-8">
              <Image
                src={BenifitsImg8}
                alt="/"
                className="pl-16 pt-6 lg:h-[100px] sm:h-[80px] lg:w-[130px] sm:w-[120px]"
              />
              <h1 className="text-[#0B592A] font-bold font-mono text-[18px] pr-10 text-center pt-3 ">
                Live in the city
              </h1>
              <p className="text-[#0B592A] text-center text-[12px]  pr-10 pt-1">
                Stay closer to our office a.k.a our Stadium and we take care of
                a substantial part of your rent.
              </p>
            </div>
          </div>
        </div>
        <div className="block sm:hidden lg:hidden">
          <div className="flex justify-center pt-6 ml-3">
            <div className=" flex justify-center pt-24">
              <div className="  border-4 h-[190px] w-[180px] border-green-700 mb-20 lg:mr-10 mr-2 ">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={BenifitsImg}
                    alt="/"
                    className=" h-[60px] w-[70px] lg:mt-10 lg:ml-20"
                  />
                  <h1 className="text-[#0B592A] sm:text-[16px] lg:text-[24px] font-[700]">
                    {" "}
                    Proximity to Stadium
                  </h1>
                  <p className="text-[#0B592A] text-[14px] lg:text-[16px] font-[400] lg:pl-4">
                    Stay closer to our office a.k.a our Stadium and we take care
                    of a substantial part of your rent.
                  </p>
                </div>
              </div>
              <div className="  border-4 h-[190px] w-[180px] border-green-700 mb-20 lg:mr-10 mr-2 ">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={BenifitsImg}
                    alt="/"
                    className=" h-[60px] w-[70px] lg:mt-10 lg:ml-20"
                  />
                  <h1 className="text-[#0B592A] sm:text-[16px] lg:text-[24px] font-[700]">
                    {" "}
                    Proximity to Stadium
                  </h1>
                  <p className="text-[#0B592A] text-[14px] lg:text-[16px] font-[400] lg:pl-4">
                    Stay closer to our office a.k.a our Stadium and we take care
                    of a substantial part of your rent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
