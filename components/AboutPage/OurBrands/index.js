import Image from "next/image";
import Line from "/public/assets/aboutimg/Vector1(1).svg";
import Card from "/public/assets/aboutimg/Group 42150.png";
import win11 from "/public/assets/aboutimg/Group (5).png";
export default function OurBrands() {
  return (
    // <div className="relative pt-72 justify-center ">
    //   <Image
    //     src={Line}
    //     className="absolute top-0 bottom-0 left-0 right-0 h-[800px] w-[700px]  ml-80 -z-50"
    //   />
    //   <div>
    //     <Image src={Card} alt="/" className="h-[200px] w-[400px] ml-16" />
    //   </div>
    //   <div className="flex justify-end mr-52">
    //     <Image src={Card} alt="/" className="h-[200px] w-[400px] mb-10" />
    //   </div>
    //   <div className="flex justify-start mt-6 ml-20">
    //     <Image src={Card} alt="/" className="h-[200px] w-[400px]" />
    //   </div>
    //
    // </div>
    <div>
      <h1 className="text-[#00A547] text-[22px] ml-20 pt-6"> “ OUR BRANDS</h1>
      <div className="sm:ml-16">
        <div className="bg-[url('/assets/aboutimg/Rectangle27(4).svg')] sm:h-[300px] h-[350px] sm:w-[500px] w-[400px]  bg-no-repeat bg-contain bg-center sm:mt-20 ">
          <div className="flex ml-8 pt-16">
            <Image
              src={win11}
              alt="/"
              className="sm:h-[30px] h-[30px]  sm:w-[140px] w-[120px] mt-16"
            />
            <p className="sm:text-[12px] text-[10px] text-black w-[200px] sm:w-[270px] sm:ml-6 ml-4 mt-6 sm:mt-0">
              {" "}
              Win 11 is the world’s largest fantasy sports platform with 12
              million+ users playing fantasy Cricket. football, kabaddi,
              basketball, hockey, volleyball, handball, rugby, futsal, American
              football & baseball, on it. Win 11 is the flagship brand of Win
              Sports, India’s leading Sports Technology company and has
              partnerships with several national & international sports bodies
              and cricketers.
            </p>
          </div>
        </div>
      </div>
      <Image
        src={Line}
        className="absolute top-[1400px] bottom-0 left-0 right-0 lg:h-[1000px] lg:w-[900px] sm:h-[850px] h-[800px] sm:w-[500px] w-[500px]  sm:mt-60  mt-40 sm:ml-80 -z-50"
      />

      <div className="flex lg:justify-end sm:justify-end ">
        <div className="bg-[url('/assets/aboutimg/Rectangle27(4).svg')] sm:h-[300px] h-[350px] sm:w-[500px] w-[400px]  bg-no-repeat bg-contain bg-center mt-4 sm:mt-10">
          <div className="flex ml-8 pt-16">
            <Image
              src={win11}
              alt="/"
              className="sm:h-[30px] h-[30px]  sm:w-[140px] w-[120px] mt-16"
            />
            <p className="sm:text-[12px] text-[10px] text-black w-[200px] sm:w-[270px] sm:ml-6 ml-4 mt-6 sm:mt-0">
              {" "}
              Win 11 is the world’s largest fantasy sports platform with 12
              million+ users playing fantasy Cricket. football, kabaddi,
              basketball, hockey, volleyball, handball, rugby, futsal, American
              football & baseball, on it. Win 11 is the flagship brand of Win
              Sports, India’s leading Sports Technology company and has
              partnerships with several national & international sports bodies
              and cricketers.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end sm:mr-16">
        <div className="bg-[url('/assets/aboutimg/Rectangle27(4).svg')] sm:h-[300px] h-[350px] sm:w-[500px] w-[400px]  bg-no-repeat bg-contain bg-center mt-4 sm:mt-20 ">
          <div className="flex ml-8 pt-16">
            <Image
              src={win11}
              alt="/"
              className="sm:h-[30px] h-[30px]  sm:w-[140px] w-[100px] mt-16"
            />
            <p className="sm:text-[12px] text-[10px] text-black w-[200px] sm:w-[270px] sm:ml-6 ml-4 mt-6 sm:mt-0">
              {" "}
              Win 11 is the world’s largest fantasy sports platform with 12
              million+ users playing fantasy Cricket. football, kabaddi,
              basketball, hockey, volleyball, handball, rugby, futsal, American
              football & baseball, on it. Win 11 is the flagship brand of Win
              Sports, India’s leading Sports Technology company and has
              partnerships with several national & international sports bodies
              and cricketers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
