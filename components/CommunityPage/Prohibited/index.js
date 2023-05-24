import Image from "next/image";
import IconImg from "/public/assets/privacyimg/34) icon/chevron-up.png";

export default function Prohibited() {
  return (
    <div className="hidden lg:block">
      <h1 className="text-[#00A547] font-bold font-mono text-[24px] pt-24 pl-64 pb-2">
        Prohibited Content
      </h1>
      <h1 className="text-[#00A547]  font-mono text-[14px]  pl-64 pr-64 pb-2">
        The following types of content are prohibited on the Dream11 Platform
        and may warrant action from Dream11.
      </h1>

      <div className=" pt-10 flex justify-center mb-16">
        <div>
          <div className=" flex justify-between items-center border-[#959595] border-solid border-2 h-[50px] w-[750px] rounded-md pl-3 pt-2 mb-4 ">
            <h1 className="text-[#00A547] font-Mono font-bold text-[18px]">
              Spam
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
              Misinformation or Scam
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
              Violent and Criminal Behaviour
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
              Harassment
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
              Hate Speech
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
              Copyright Violation
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
              Security of the Dream11 Platform
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
              Offensive Language & Visually Inappropriate Content
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
              Reporting
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
              Moderation
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
      </div>
    </div>
  );
}
