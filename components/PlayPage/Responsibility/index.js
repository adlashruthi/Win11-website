import Group from "/public/assets/Group 42418.png";
import Image from "next/image";
import Icon from "/public/assets/contactimg/IMAGE.png";
import BallImg from "/public/assets/privacyimg/Vector (9).png";
import BallImg1 from "/public/assets/privacyimg/Vector (10).png";
import MobileImg from "/public/assets/mobileimgs/Group 42312 (1).png";
export default function Responsibility() {
  return (
    <div>
      <div>
        <div className="hidden sm:block">
          <Image src={Group} alt="/" className="h-[700px] w-full" />
        </div>
        <div className="block sm:hidden">
          <Image src={MobileImg} alt="/" className="h-[600px] w-full" />
        </div>
        <div className="grid lg:grid-cols-2 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-2">
          <div className="flex lg:pr-24 lg:ml-64 sm:ml-20 sm:pr-12 ml-7 pb-2">
            <Image src={Icon} alt="/" className="mr-3 h-[50px] w-[30px]" />
            <Image
              src={BallImg}
              alt="/"
              height={40}
              width={40}
              className="right-0 absolute top-50"
            />
            <div className="lg:pl-4 ">
              <h1 className="text-[#333333] lg:text-[16px] sm:text-[14px] font-mono font-semibold">
                Whats is Fairplay ?
              </h1>
              <p className="text-[#00A547] text-[11px] lg:w-[280px] sm:w-[250px] w-[220px] font-mono">
                Playing fair is about having a level playing field for everyone
                on Dream11. These guidelines are to help you understand all the
                efforts we make to keep the Dream11 fantasy sports format fair
                to all.
              </p>
            </div>
          </div>

          <div className="flex lg:ml-20 sm:ml-0 ml-8">
            <Image src={Icon} alt="/" className="h-[50px] w-[30px]" />
            <div className="pl-4">
              <h1 className="text-[#333333] lg:text-[16px] sm:text-[14px] font-sans font-semibold">
                How does it work ?
              </h1>
              <p className="text-[#00A547] text-[11px] lg:w-[270px] sm:w-[250px] w-[220px] font-mono">
                For us, fairness has three core areas - transparency of format
                and system, trust of all participants, and our responsibility
                towards those who trust us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={BallImg1}
        alt="/"
        height={60}
        width={60}
        className="left-0 absolute "
      />
    </div>
  );
}
