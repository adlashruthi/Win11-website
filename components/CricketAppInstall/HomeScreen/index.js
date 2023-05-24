import Image from "next/image";
import num1 from "/public/assets/cricketimg/1 (1).png";
import num2 from "/public/assets/cricketimg/2 (1).png";
import homeScreenImg1 from "/public/assets/cricketimg/Rectangle 30.png";
import homeScreenImg2 from "/public/assets/cricketimg/Rectangle 2087 (12).png";
export default function HomeScreen() {
  return (
    <div className="relative -z-10">
      <div className="flex justify-evenly items-center pb-5">
        <div className="flex text-white text-center bg-[#00A547] rounded-md h-[30px] w-[352px] ml-2">
          <p className="pr-6 pl-3">Win 11 </p>
          <p>Fantasy Cricket</p>
          <p className=" pl-7">App Download</p>
        </div>
      </div>

      {/* {//......background cards and images........//} */}
      <div className="hidden lg:block  ">
        <div className="grid lg:grid-cols-2 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 grid-cols-1 grid-rows-2">
          <div className="lg:ml-52 sm:ml-52 flex ml-6">
            <div className="flex">
              <div className="bg-[url('/assets/cricketimg/Vector(1).svg')] bg-no-repeat bg-contain lg:h-[587px] sm:h-[460px] h-[300px] lg:w-[421px] sm:w-[380px] w-[300px] lg:mr-20 sm:mr-0 mr-96 ">
                <p className="text-[#0169B6] lg:text-[16px] sm:text-[14px] text-[12px] font-[500] lg:pt-14 pt-12 w-[305px] lg:ml-28 sm:ml-24 ml-16 pr-2">
                  Tap Ok to add Win 11 to your homescren
                </p>
                <Image
                  src={homeScreenImg1}
                  alt="/"
                  className="lg:h-[200px] sm:h-[180px] h-[130px] lg:w-[260px] sm:w-[200px] w-[200px] ml-16 pt-2"
                />
                <div className="absolute  lg:bottom-[35%] bottom-[20%] ml-3">
                  <Image
                    src={num1}
                    alt="/"
                    className="lg:h-[130px] sm:h-[140px] h-[100px] lg:w-[56px] sm:w-[45px] w-[35px]  "
                  />
                </div>
              </div>

              {/*...............homescreen card2...............*/}
              <div className="">
                <div className="bg-[url('/assets/cricketimg/Vector(1).svg')] bg-no-repeat bg-contain lg:h-[587px] sm:h-[460px] h-[300px] lg:w-[421px] sm:w-[380px] w-[300px] relative lg:mr-20 sm:mr-0 mr-96 ">
                  <p className="text-[#0169B6] lg:text-[16px] sm:text-[14px] text-[12px] font-[500] lg:pt-14 pt-12 w-[305px] lg:ml-28 sm:ml-24 ml-16 pr-2">
                    Use the app from your Homescreen!
                  </p>
                  <Image
                    src={homeScreenImg2}
                    alt="/"
                    className="lg:h-[200px] sm:h-[180px] h-[130px] lg:w-[260px] sm:w-[200px] w-[200px] ml-16 pt-2"
                  />
                  <div className="absolute  bottom-[35%] ml-3">
                    <Image
                      src={num2}
                      alt="/"
                      className="lg:h-[130px] sm:h-[140px] h-[100px] lg:w-[56px] sm:w-[45px] w-[35px] "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="lg:ml-52 sm:ml-52 flex ml-6">
          <div className="flex-col">
            <div className="bg-[url('/assets/cricketimg/Vector(1).svg')] bg-no-repeat bg-contain lg:h-[587px] sm:h-[460px] h-[300px] lg:w-[421px] sm:w-[380px] w-[300px] relative lg:mr-20 sm:mr-0 mr-96 ">
              <p className="text-[#0169B6] lg:text-[16px] sm:text-[14px] text-[12px] font-[500] lg:pt-14 pt-12 w-[305px] lg:ml-28 sm:ml-24 ml-16 pr-2">
                Tap Ok to add Win 11 to your homescren
              </p>
              <Image
                src={homeScreenImg1}
                alt="/"
                className="lg:h-[200px] sm:h-[180px] h-[130px] lg:w-[260px] sm:w-[200px] w-[200px] ml-16 pt-2"
              />
              <div className="absolute  lg:bottom-[35%] bottom-[20%] ml-3">
                <Image
                  src={num1}
                  alt="/"
                  className="lg:h-[130px] sm:h-[140px] h-[100px] lg:w-[56px] sm:w-[45px] w-[35px]  "
                />
              </div>
            </div>

            {/*...............homescreen card2...............*/}
            <div>
              <div className="bg-[url('/assets/cricketimg/Vector(1).svg')] bg-no-repeat bg-contain lg:h-[587px] sm:h-[460px] h-[300px] lg:w-[421px] sm:w-[380px] w-[300px] relative lg:mr-20 sm:mr-0 mr-96 ">
                <p className="text-[#0169B6] lg:text-[16px] sm:text-[14px] text-[12px] font-[500] lg:pt-14 pt-12 w-[305px] lg:ml-28 sm:ml-24 ml-16 pr-2">
                  Use the app from your Homescreen!
                </p>
                <Image
                  src={homeScreenImg2}
                  alt="/"
                  className="lg:h-[200px] sm:h-[180px] h-[130px] lg:w-[260px] sm:w-[200px] w-[200px] ml-16 pt-2"
                />
                <div className="absolute  bottom-[35%] ml-3">
                  <Image
                    src={num2}
                    alt="/"
                    className="lg:h-[130px] sm:h-[140px] h-[100px] lg:w-[56px] sm:w-[45px] w-[35px] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
