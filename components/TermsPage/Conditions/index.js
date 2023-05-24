import Image from "next/image";
import BallImg from "/public/assets/privacyimg/Vector (9).png";
import BallImg1 from "/public/assets/privacyimg/Vector (10).png";
import IconImg from "/public/assets/privacyimg/34) icon/chevron-up.png";
export default function Conditions() {
  return (
    <div>
      <h1 className="text-[#0B592A] font-bold font-mono lg:text-[28px] sm:text-[24px] text-[22px]  pt-20 sm:pl-32 pl-14 text-center pb-4">
        Terms and Conditions
      </h1>
      <Image
        src={BallImg}
        alt="/"
        height={60}
        width={60}
        className="right-0 absolute top-40"
      />
      <h1 className="text-[#0B592A] font-bold font-mono lg:text-[28px] sm:text-[24px] text-[22px]  pt-12 lg:pl-56 sm:pl-32  pl-16  pb-4">
        . Win11
      </h1>
      <p className="text-[#003718] w-[320px] lg:w-[1170px] sm:w-[700px]  lg: lg:text-[14px] sm:text-[13px] text-[12px] font-mono  pb-5  lg:pl-64 sm:pl-32 pl-16 lg:pr-52 pr-8 pt-2">
        The primary brand of Win11 Gaming Private Limited is Win11 ("Win11").
        Win11 operates through its applications online fantasy games based on
        cricket, football, basketball, f1 racing, soccer, baseball, kabaddi and
        investment prediction games. Win11 also operates its subpages and the
        Win11 App. When the term "Win11" is used in this text, it refers to both
        Win11 and the Win11 App collectively.
      </p>

      <div className="hidden lg:block">
        <div className=" pt-10 flex justify-center mb-16">
          <div>
            <div className=" flex justify-between items-center border-[#959595] border-solid border-2 h-[50px] w-[750px] rounded-md pl-3 pt-2 mb-4 ">
              <h1 className="text-[#00A547] font-Mono font-bold text-[18px]">
                Win11 usage
              </h1>
              <Image
                src={IconImg}
                alt="/"
                height={30}
                width={30}
                className="mr-2 text-[#6E6B7B]"
              />
            </div>

            <div className=" flex justify-between items-center border-[#959595] border-solid border-2 h-[50px] w-[750px] rounded-md pl-3 pt-2 mb-4 ">
              <h1 className="text-[#00A547] font-Mono font-bold text-[18px]">
                Sites, services, and products from third parties
              </h1>
              <Image
                src={IconImg}
                alt="/"
                height={30}
                width={30}
                className="mr-2"
              />
            </div>

            <div className=" flex justify-between items-center border-[#959595] border-solid border-2 h-[50px] w-[750px] rounded-md pl-3 pt-2 mb-4 ">
              <h1 className="text-[#00A547] font-Mono font-bold text-[18px]">
                Privacy Policy
              </h1>
              <Image
                src={IconImg}
                alt="/"
                height={30}
                width={30}
                className="mr-2"
              />
            </div>

            <div className=" flex justify-between items-center border-[#959595] border-solid border-2 h-[50px] w-[750px] rounded-md pl-3 pt-2 mb-4 ">
              <h1 className="text-[#00A547] font-Mono font-bold text-[18px]">
                User Conduct
              </h1>
              <Image
                src={IconImg}
                alt="/"
                height={30}
                width={30}
                className="mr-2"
              />
            </div>

            <div className=" flex justify-between items-center border-[#959595] border-solid border-2 h-[50px] w-[750px] rounded-md pl-3 pt-2 mb-4 ">
              <h1 className="text-[#00A547] font-Mono font-bold text-[18px]">
                Requirements for Participation:
              </h1>
              <Image
                src={IconImg}
                alt="/"
                height={30}
                width={30}
                className="mr-2"
              />
            </div>

            <div className=" flex justify-between items-center border-[#959595] border-solid border-2 h-[50px] w-[750px] rounded-md pl-3 pt-2 mb-4 ">
              <h1 className="text-[#00A547] font-Mono font-bold text-[18px]">
                Signing up for a competition
              </h1>
              <Image
                src={IconImg}
                alt="/"
                height={30}
                width={30}
                className="mr-2"
              />
            </div>

            <div className=" flex justify-between items-center border-[#959595] border-solid border-2 h-[50px] w-[750px] rounded-md pl-3 pt-2 mb-4 ">
              <h1 className="text-[#00A547] font-Mono font-bold text-[18px]">
                Contest(s), Participation and Prizes
              </h1>
              <Image
                src={IconImg}
                alt="/"
                height={30}
                width={30}
                className="mr-2"
              />
            </div>
          </div>
          <Image
            src={BallImg1}
            alt="/"
            height={60}
            width={60}
            className="left-0 absolute top-[100%]"
          />
        </div>
      </div>
    </div>
  );
}
