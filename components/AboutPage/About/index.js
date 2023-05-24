import Image from "next/image";
import about1 from "/public/assets/aboutimg/Rectangle 2.png";
import MobileImg from "/public/assets/mobileimgs/Rectangle 2.png";
export default function About() {
  return (
    <div>
      <div className="hidden sm:block">
        <Image src={about1} alt="/" className="full w-full" />
      </div>
      <div className="block sm:hidden">
        <Image src={MobileImg} alt="/" className="h-[300px] w-full" />
      </div>
      <h1 className="text-[rgb(11,89,42)] text-center pt-14 text-[42px] font-mono font-bold ">
        About
      </h1>
      <p className="text-[#0B592A]  font-mono   text-[12px] sm:text-[13px] lg:text-[15px] sm:mx-16 text-center pb-4 pt-4  sm:pl-0 pl-4 lg:pr-0 sm:pr-0 pr-8">
        Step into the exciting realm of Fantasy sports, online sports games that
        emphasises strategy and allow you to construct a virtual team of real
        players competing in real matches. Construct a squad whose overall
        performance in a real game will earn you points.
      </p>
      <p className="text-[#0B592A]  font-mono   text-[12px] sm:text-[13px] lg:text-[15px] sm:mx-16 text-center pb-4 pt-4  sm:pl-0 pl-4 lg:pr-0 sm:pr-0 pr-8">
        <span className="text-[#000000] font-bold ">
          Players at Win11 gaming are
        </span>{" "}
        rewarded for their efforts based on how you perform in an actual
        sporting event. As a result, the ability to grasp and track player
        performances and determine a team combination that would perform as the
        winning one is crucial. Our games are tailor-made for real-life Indian
        sports fans and provide a reasonably safe and secure platform for them
        to experience joy and test their knowledge and talents against other
        sports fans while still getting the thrill of experiencing actual
        sporting events firsthand in real life.
      </p>
      <p className="text-[#0B592A]  font-mono   text-[12px] sm:text-[13px] lg:text-[15px] sm:mx-16 text-center pb-4 pt-4  sm:pl-0 pl-4 lg:pr-0 sm:pr-0 pr-8">
        We are dedicated to providing every sports enthusiast with the best
        fantasy sports experience possible. Our goal is to make sports more
        exciting. We host multiple cricket, football, kabaddi, and formula one
        leagues.
      </p>
    </div>
  );
}
