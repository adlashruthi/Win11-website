import Image from "next/image";
import Card1 from "/public/assets/fantacyimg/Group 42028.png";
import Card2 from "/public/assets/fantacyimg/Group 42029.png";
import Card3 from "/public/assets/fantacyimg/Group 42030.png";
export default function Enjoy() {
  return (
    <div>
      <h1 className=" text-[#0169B6] font-bold font-mono text-[16px] sm:text-[20px] lg:text-[26px]   pb-4 text-center pt-36 lg:pt-48 sm:mr-12 lg:mr-0">
        Play Fantasy Cricket Leagues -
        <span className="text-[#00A547]"> Enjoy Bonus Offers! </span>
      </h1>

      <div className="hidden sm:block">
        <div className="flex  items-center lg:ml-44 sm:ml-10 ">
          <div>
            <Image
              src={Card1}
              alt="/"
              className="lg:h-[280px] sm:h-[220px] h-[200px] lg:w-[350px] sm:w-[320px] w-[300px] pr-7 "
            />
          </div>

          <div>
            <Image
              src={Card2}
              alt="/"
              className="lg:h-[280px] sm:h-[220px] h-[200px] lg:w-[350px] sm:w-[320px] w-[300px] pr-7 "
            />
          </div>
          <div>
            <Image
              src={Card3}
              alt="/"
              className="lg:h-[280px] sm:h-[220px] h-[200px] lg:w-[350px] sm:w-[320px] w-[300px] pr-7 "
            />
          </div>
        </div>
      </div>

      <div className="flex-col  items-center ml-6 sm:hidden ">
        <div>
          <Image
            src={Card1}
            alt="/"
            className="lg:h-[280px] sm:h-[220px] h-[180px] lg:w-[350px] sm:w-[320px] w-[280px] pr-7 "
          />
        </div>

        <div>
          <Image
            src={Card2}
            alt="/"
            className="lg:h-[280px] sm:h-[220px] h-[180px] lg:w-[350px] sm:w-[320px] w-[280px] pl-16 "
          />
        </div>
        <div>
          <Image
            src={Card3}
            alt="/"
            className="lg:h-[280px] sm:h-[220px] h-[180px] lg:w-[350px] sm:w-[320px] w-[280px] pr-7 "
          />
        </div>
      </div>

      <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[16px] px-5 sm:px-20 lg:px-28 text-center  pb-2 sm:pb-5 lg:pb-8 pt-4 relative">
        Once you are, enter various cash contests to win real money!
      </p>
      <div className="flex flex-col justify-center items-center pb-4 pt-4">
        <button className="text-white text-center bg-[#00A547] rounded-md lg:h-[52px] sm:h-[52px] lg:w-[760px] sm:w-[450px] h-[120px] w-[300px] ml-2 pl-3 pr-3  sm:mr-24 lg:mr-16 mr-6">
          Know that the tTo know more about our Terms & Conditions on promotions
          and offers, visit hereeam names can only be changed once!
        </button>
      </div>
    </div>
  );
}
