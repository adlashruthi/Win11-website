import Image from "next/image";
import img from "/public/assets/privacyimg/Vector (9).png";
import img1 from "/public/assets/privacyimg/Vector (10).png";
import leftImg from "public/assets/inviteimg/Guy with cape cheering.png";
import RightImg from "/public/assets/inviteimg/Guy with trumpet.png";
export default function Friends() {
  return (
    <div className="pb-44 -z-50 relative">
      <div className="absolute top-[20%] right-0 hidden sm:block">
        <Image
          src={img}
          alt="/"
          className="sm:h-[100px] sm:w-[100px] lg:w-[100px] lg:h-[150px]"
        />
      </div>
      <div className="absolute bottom-0 left-0 hidden sm:block">
        <Image
          src={img1}
          alt="/"
          className="h-[100px] w-[70px] lg:w-[100px] lg:h-[200px]"
        />
      </div>
      <h1 className="text-[#0B592A] font-bold font-mono lg:text-[28px] sm:text-[24px] text-[22px] pl-4 pt-32 text-center pb-8">
        INVITE FRIENDS
      </h1>
      <Image
        src={BallImg}
        alt="/"
        className="right-0 absolute top-40 lg:h-[80px]  sm:h-[80px] h-[80px] lg:w-[50px] sm:w-[40px] w-[40px]"
      />
      <p className="text-[#003718] w-[430px] lg:w-[1300px] sm:w-[900px]  lg: lg:text-[16px] sm:text-[14px] text-[13px] font-mono  pb-5  lg:pl-28 sm:pl-28 pl-8 pr-28 pt-4">
        One of the best refer-and-earn apps in India, Win11, has made a name for
        itself in the world of fantasy sports. With the addition of Fantasy
        Kabaddi, Fantasy Football, Fantasy Baseball, and Fantasy Basketball,
        along with Trade Prediction, we are not just a revolutionary fantasy
        cricket app but have also evolved into India's premier fantasy sports
        destination.
      </p>
      <p className="text-[#003718] w-[430px] lg:w-[1300px] sm:w-[900px]  lg: lg:text-[16px] sm:text-[14px] text-[13px] font-mono  pb-5  lg:pl-28 sm:pl-28 pl-8 pr-28 pt-1">
        Win11 gamming format is the first and only one to offer multiple fantacy
        formats inculding stock Predictions.
      </p>
      <h1 className="text-[#0B592A] font-bold font-mono lg:text-[24px] sm:text-[22px] text-[18px] pl-4 pt-10 lg:ml-20 sm:ml-28 ml-8 pb-8">
        Why participate in New Refer and Earn?
      </h1>
      <p className="text-[#003718] w-[470px] lg:w-[1300px] sm:w-[900px]  lg: lg:text-[16px] sm:text-[14px] text-[13px] font-mono  pb-5  lg:pl-28 sm:pl-28 pl-8 pr-28 pt-1">
        Allow us to explain why you must join the ground-breaking Refer & Earn
        by Win11: Earn money while your friends make their first deposit.
      </p>

      <p className="text-[#003718] w-[430px] lg:w-[1300px] sm:w-[900px]  lg: lg:text-[16px] sm:text-[14px] text-[13px] font-mono  pb-5  lg:pl-28 sm:pl-28 pl-8 pr-28 pt-1">
        Earn from as many recommendations as you like. You earn more money by
        referring more people
      </p>
      <p className="text-[#003718] w-[430px] lg:w-[1300px] sm:w-[900px]  lg: lg:text-[16px] sm:text-[14px] text-[13px] font-mono  pb-5  lg:pl-28 sm:pl-28 pl-8 pr-28 pt-1">
        Get a second way to make money on the fantasy sports platform in
        addition to your normal fantasy practise.
      </p>
      <p className="text-[#003718] w-[430px] lg:w-[1300px] sm:w-[900px]  lg: lg:text-[16px] sm:text-[14px] text-[13px] font-mono  pb-5  lg:pl-28 sm:pl-28 pl-8 pr-28 pt-1">
        Save money and make use of the extra cash you earn by joining more and
        more fantasy leagues on the Win11 platform.
      </p>
      <Image
        src={BallImg1}
        alt="/"
        className="left-0 absolute lg:top-[110%] sm:top-[100%] lg:h-[80px]  sm:h-[80px] h-[80px] lg:w-[50px] sm:w-[40px] w-[40px]"
      />
    </div>
  );
}
