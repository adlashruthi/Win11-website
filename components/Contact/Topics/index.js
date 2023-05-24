import Image from "next/image";
import HeaderImg from "/public/assets/contactimg/Group 42418.png";
import Icon from "/public/assets/contactimg/IMAGE.png";
import Icon1 from "/public/assets/contactimg/IMAGE (1).png";
import Icon2 from "/public/assets/contactimg/IMAGE (2).png";
import Icon3 from "/public/assets/contactimg/IMAGE (3).png";
import Icon4 from "/public/assets/contactimg/IMAGE (4).png";
import Icon5 from "/public/assets/contactimg/IMAGE (5).png";
import Icon6 from "/public/assets/contactimg/IMAGE (6).png";
import Icon7 from "/public/assets/contactimg/IMAGE (7).png";
import MobileImg from "/public/assets/mobileimgs/Group 42312 (1).png";
export default function Topics() {
  return (
    <div className="-z-50 relative">
      <div className="hidden sm:block">
        <Image src={HeaderImg} alt="/" className="h-[700px] w-full" />
      </div>
      <div className="block sm:hidden">
        <Image src={MobileImg} alt="/" className="h-[600px] w-full" />
      </div>
      <h1 className="text-[#0B592A] font-bold font-mono text-[20px] sm:text-[24px] lg:text-[28px] pl-4 pt-10 text-center pb-8">
        Topics
      </h1>
      <div className="grid lg:grid-cols-3 lg:grid-rows-3 sm:grid-cols-2 sm:grid-rows-4 grid-rows-1 grid-cols-1  ">
        <div className="flex  lg:pl-40 pl-6 pb-3 gap-y-7">
          <Image src={Icon} alt="/" height={30} width={30} />
          <div className="pl-4">
            <h1 className="text-[#333333] text-[16px] font-mono font-semibold">
              Account Security
            </h1>
            <p className="text-[#0B592A] text-[12px] font-mono">
              Safety Tips and Measures
            </p>
          </div>
        </div>
        <div className="hidden sm:block lg:hidden ">
          <div className="flex pr-24 sm:ml-0 ml-28">
            <Image src={Icon1} alt="/" height={30} width={30} />
            <div className="pl-4">
              <h1 className="text-[#333333] text-[16px] font-sans font-semibold">
                What's New
              </h1>
              <p className="text-[#0B592A] text-[12px] font-sans">
                New Features, App Updates & more
              </p>
            </div>
          </div>
        </div>
        <div className="flex  lg:pl-20 pl-6  sm:ml-0 ml-28 mr-3 sm:mr-0 ">
          <Image src={Icon3} alt="/" height={30} width={30} />
          <div className="pl-4 pt-6 sm:pt-0">
            <h1 className="text-[#333333] text-[16px] font-sans font-semibold">
              My Balance
            </h1>
            <p className="text-[#0B592A] text-[12px] font-sans">
              Winnings, Withdrawals, Deposits & more
            </p>
          </div>
        </div>

        <div className="flex pl-4 pt-6 sm:pt-0">
          <Image src={Icon2} alt="/" height={30} width={30} />
          <div className="pl-4">
            <h1 className="text-[#333333] text-[16px] font-sans font-semibold">
              How to Play
            </h1>
            <p className="text-[#0B592A] text-[12px] font-sans">
              Create Teams, Join Contests & more
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 lg:grid-rows-3 sm:grid-cols-2 sm:grid-rows-4 grid-rows-1 grid-cols-1  ">
        <div className="flex  py-12 sm:py-0  lg:pl-40 pl-6  sm:ml-0 ml-28 mr-6 sm:mr-0">
          <Image src={Icon3} alt="/" height={30} width={30} />
          <div className="pl-4">
            <h1 className="text-[#333333] text-[16px] font-sans font-semibold">
              My Balance
            </h1>
            <p className="text-[#0B592A] text-[12px] font-sans">
              Winnings, Withdrawals, Deposits & more
            </p>
          </div>
        </div>

        <div className="flex sm:pl-24">
          <Image src={Icon4} alt="/" height={30} width={30} />
          <div className="pl-4 ">
            <h1 className="text-[#333333] text-[16px] font-sans font-semibold">
              Profile & Verification
            </h1>
            <p className="text-[#0B592A] text-[12px] font-sans">
              View/Modify details, Verification & more
            </p>
          </div>
        </div>

        <div className="flex ml-28 py-12 sm:py-0 sm:pt-0 mr-6 sm:mr-0 sm:ml-8">
          <Image src={Icon5} alt="/" height={30} width={30} />
          <div className="pl-4">
            <h1 className="text-[#333333] text-[16px] font-sans font-semibold">
              Offers & Rewards
            </h1>
            <p className="text-[#0B592A] text-[12px] font-sans">
              Invite Friends, W11 Champions & more
            </p>
          </div>
        </div>
        <div className="hidden sm:block lg:hidden">
          <div className="flex pr-24">
            <Image src={Icon6} alt="/" height={30} width={30} />
            <div className="pl-4">
              <h1 className="text-[#333333] text-[16px] font-sans font-semibold">
                Network on Win 11
              </h1>
              <p className="text-[#0B592A] text-[12px] font-sans">
                Win 11 Feed, Manage your groups & more
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:hidden lg:block ">
        <div className="flex justify-center pb-6 pt-4 pr-56">
          <div className="flex pr-24">
            <Image src={Icon6} alt="/" height={30} width={30} />
            <div className="pl-4">
              <h1 className="text-[#333333] text-[16px] font-sans font-semibold">
                Network on Win 11
              </h1>
              <p className="text-[#0B592A] text-[12px] font-sans">
                Win 11 Feed, Manage your groups & more
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex pr-44 ">
              <Image src={Icon7} alt="/" height={30} width={30} />
              <div className="pl-4">
                <h1 className="text-[#333333] text-[16px] font-sans font-semibold">
                  Legalityn & FairPlay
                </h1>
                <p className="text-[#0B592A] text-[12px] font-sans">
                  FairPlay and Legal rules
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
