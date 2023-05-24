import Image from "next/image";
import BallImg from "/public/assets/privacyimg/Vector (9).png";
import BallImg1 from "/public/assets/privacyimg/Vector (10).png";
export default function Policy() {
  return (
    <div>
      <div className="ml-16 mr-16">
        <h1 className="text-[#0B592A] font-bold font-mono lg:text-[28px] sm:text-[24px] text-[22px] pl-4 pt-32 text-center pb-8">
          Privacy Policy
        </h1>

        <Image
          src={BallImg}
          alt="/"
          className="right-0 absolute top-40 lg:h-[90px]  sm:h-[80px] h-[80px] lg:w-[50px] sm:w-[40px] w-[40px]"
        />

        <p className="text-[#003718] w-[300px] lg:w-[1170px] sm:w-[650px]  lg: lg:text-[14px] sm:text-[13px] text-[12px] font-mono  pb-5  lg:pl-52 sm:pl-20 pl-2 lg:pr-52 pr-8 pt-4">
          The web-portal Win11.com and partner website(s) and mobile
          application(s) (collectively referred to as the "Portal") are operated
          by Win11 Gaming Private Limited in India and provide fantasy games for
          cricket, football, basketball, kabaddi, f1 racing, soccer, and
          investment prediction (Win11 Gaming Private Limited referred to herein
          as "Win11" or "we" or "us" or "our").
        </p>
        <p className="text-[#003718] w-[300px] lg:w-[1170px] sm:w-[650px]  lg: lg:text-[14px] sm:text-[13px] text-[12px] font-mono  pb-5  lg:pl-52 sm:pl-20 pl-2 lg:pr-52 pr-8 pt-4">
          The web-portal Win11.com and partner website(s) and mobile This
          Privacy Policy applies to anyone using the Portal ("User" or "you" or
          "your") or any of its features, including participation in the various
          competitions, games (including fantasy games) ("Games"), and services
          ("Services") being offered on the Portal.
        </p>
        <p className="text-[#003718] w-[300px] lg:w-[1170px] sm:w-[650px]  lg: lg:text-[14px] sm:text-[13px] text-[12px] font-mono  pb-5  lg:pl-52 sm:pl-20 pl-2 lg:pr-52 pr-8 pt-4">
          The web-portal Win11.com and partner website(s) and mobile Win11 is
          committed to protecting its users' privacy in every way because it
          values it. Win11 offers a vast collection of services with the goal of
          providing its users with a rich and comprehensive internet experience.
          To learn more about Win11, kindly take the time to read the "About Us"
          section. The majority of the services are free, but some, such as
          Windows Live's online games, may require registration. Win11 gathers
          information about Users in two ways: (i) data voluntarily provided by
          Users, and (ii) data automatically tracked while Users are navigating
          Win11.
        </p>
        <p className="text-[#003718] w-[300px] lg:w-[1170px] sm:w-[650px]  lg: lg:text-[14px] sm:text-[13px] text-[12px] font-mono  pb-5  lg:pl-52 sm:pl-20 pl-2 lg:pr-52 pr-8 pt-4">
          The web-portal Win11.com and partner website(s) and mobile Please read
          this privacy policy to understand how we will handle your personal
          information before submitting any data to the Portal. By using any
          portion of the Portal, you agree that your personal information will
          be collected, used, disclosed, and transferred for the purposes
          described in this privacy policy. You also agree that this information
          will be collected, processed, and maintained. Do not use the portal if
          you do not agree to this privacy statement. By using the portal in any
          way, you agree to this privacy statement and the collection, use, and
          disclosure of your personal information in accordance with it. While
          you have the choice to withhold certain information from us, withdraw
          your approval to
        </p>

        <Image
          src={BallImg1}
          alt="/"
          className="left-0 absolute lg:top-[110%] sm:top-[100%] lg:h-[80px]  sm:h-[80px] h-[80px] lg:w-[50px] sm:w-[40px] w-[40px]"
        />
      </div>
    </div>
  );
}
