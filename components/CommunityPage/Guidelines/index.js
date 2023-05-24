import Image from "next/image";
import BallImg from "/public/assets/privacyimg/Vector (9).png";
import BallImg1 from "/public/assets/privacyimg/Vector (10).png";

export default function Guidelines() {
  return (
    <div>
      <h1 className="text-[#00A547] font-bold font-mono lg:text-[28px] sm:text-[24px] text-[22px]  pt-36 text-center pb-4">
        Community <span className="text-[#0169B6]">Guidelines</span>
      </h1>
      <Image
        src={BallImg}
        alt="/"
        height={60}
        width={60}
        className="right-0 absolute top-40"
      />
      <p className="text-[#003718] w-[320px] lg:w-[1170px] sm:w-[700px]  lg: lg:text-[14px] sm:text-[13px] text-[12px] font-mono  pb-5  lg:pl-64 sm:pl-32 pl-16 lg:pr-52 pr-8 pt-2">
        Dream11 is the flagship brand of Sporta Technologies Private Limited
        ("Dream11" or “We”). Dream11 is committed to creating a safe and open
        environment for expression and give people a voice on its social
        communities available on the Dream11 website and mobile app (“Dream11
        Platform”). Through these communities, you can post, comment, vote,
        discuss, learn, debate, support and connect with people who share your
        interests. These guidelines (“Community Guidelines”), set out below
        provide general guidance and an overview of what is and what is not
        allowed on the Dream11 Platform. These Community Guidelines apply to any
        content uploaded, hosted, transmitted or otherwise made available or
        communicated on our platform (“Content”). Use of the Dream11 Platform
        constitutes the user's acceptance of these Community Guidelines as may
        be amended from time to time. Dream11 may, at its sole discretion, also
        notify the user of any change or modification in these Community
        Guidelines, by way of sending an email to the user's registered email
        address or posting notifications on the Dream11 Platform. By using
        Dream11, you agree to these guidelines and our Terms of Use and Privacy
        Policy. We are committed to these Community Guidelines and we require
        you to be committed too. Violation of these Community Guidelines may
        result in deleted content, disabled accounts, or other restrictions
        including a complete ban from the Dream11 Platform.
      </p>
      <p className="text-[#003718] w-[320px] lg:w-[1170px] sm:w-[700px]  lg: lg:text-[14px] sm:text-[13px] text-[12px] font-mono  pb-5  lg:pl-64 sm:pl-32 pl-16 lg:pr-52 pr-8 pt-2">
        We may also notify law enforcement when we believe that there is a
        genuine risk of physical harm or a direct threat to public safety. Any
        action or decision taken by Dream11 for violation of these Community
        Guidelines shall be at Dream11’s sole discretion. Dream11 has sought to
        make these Community Guidelines as detailed as possible, however, this
        is not an exhaustive list of policies and all Content, if reported,
        shall be analysed independently based on the parameters mentioned in
        these Community Guidelines. We urge you that if you find Content that
        indirectly or directly violates these Community Guidelines, please
        report it to Dream11 in the manner set forth herein.
      </p>
      <Image
        src={BallImg1}
        alt="/"
        height={60}
        width={60}
        className="left-0 absolute top-[100%]"
      />
    </div>
  );
}
