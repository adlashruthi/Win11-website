import Image from "next/image";
import Location from "/public/assets/contactimg/Rectangle 2122.png";
import Linkdin from "/public/assets/contactimg/Vector (4).png";
import Twitter from "/public/assets/contactimg/Vector (5).png";
import Facebook from "/public/assets/contactimg/Vector (6).png";
import Insta from "/public/assets/contactimg/Vector (7).png";
import Youtube from "/public/assets/contactimg/Vector (8).png";

export default function Touch() {
  return (
    <div className="mb-9">
      <div className="bg-[url('/assets/aboutimg/Group42296.svg')] h-[800px] bg-no-repeat bg-cover">
        <h1 className=" text-[#0169B6] font-mono text-[20px] sm:text-[24px] lg:text-[28px] font-bold  pt-32 text-center">
          LETS GET IN
          <span className="text-[#00A547]"> TOUCH</span>
        </h1>
        <div className="flex justify-center">
          <div className="pr-28 pt-7 hidden sm:block lg:block">
            <Image
              src={Location}
              alt="/"
              className="lg:h-[280px] sm:h-[220px] lg:w-[320px] sm:w-[280px] sm:pl-10"
            />
          </div>

          <div className="lg:pl-10 pt-7">
            <div className="border-[#959595] border-solid border-2 h-[35px] w-[300px] rounded-md  pl-2 mb-4 mt-6">
              <h1 className="text-[#959595] font-[Montserrat Alternates] text-[18px]">
                Your Full Name
              </h1>
            </div>

            <div className="border-[#959595] border-solid border-2 h-[35px] w-[300px] rounded-md  pl-2 mb-4 mt-6">
              <h1 className="text-[#959595] font-[Montserrat Alternates] text-[18px]">
                Your Email Address
              </h1>
            </div>

            <div className="border-[#959595] border-solid border-2 h-[35px] w-[300px] rounded-md  pl-2 mb-4 mt-6">
              <h1 className="text-[#959595] font-[Montserrat Alternates] text-[18px]">
                Your Phone Number
              </h1>
            </div>

            <div className="border-[#959595] border-solid border-2 h-[95px] w-[300px] rounded-md  pl-2 mb-4 mt-6 pt-6">
              <h1 className="text-[#959595] font-[Montserrat Alternates] text-[18px]">
                Message
              </h1>
            </div>

            <button className="text-white text-center bg-[#00A547] rounded-xl h-[33px] w-[142px] ml-16">
              SEND MESSAGE
            </button>
          </div>
        </div>

        <div className="flex justify-center pt-14">
          <Image
            src={Linkdin}
            alt="/"
            height={20}
            width={20}
            className="mr-8"
          />
          <Image
            src={Twitter}
            alt="/"
            height={20}
            width={20}
            className="mr-8"
          />
          <Image
            src={Facebook}
            alt="/"
            height={20}
            width={20}
            className="mr-8"
          />
          <Image src={Insta} alt="/" height={20} width={20} className="mr-8" />
          <Image
            src={Youtube}
            alt="/"
            height={20}
            width={20}
            className="mr-8"
          />
        </div>
      </div>
    </div>
  );
}
