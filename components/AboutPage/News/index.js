import Image from "next/image";
import Image1 from "/public/assets/aboutimg/Rectangle 2118.png";
export default function News() {
  return (
    <div>
      <h1 className="text-[rgb(11,89,42)] text-center pt-14 lg:text-[32px] sm:text-[26px] text-[22px] font-mono font-bold">
        “ MEDIA
      </h1>
      <h1 className="text-[#0169B6] lg:text-[30px] sm:text-[26px] text-[22px] font-mono font-bold  pt-6 text-center">
        LATEST IN
        <span className="text-[#00A547]"> NEWS</span>
      </h1>
      <div className="hidden lg:block">
        <div className="flex justify-evenly">
          <div className="bg-[url('/assets/aboutimg/Rectangle2117.svg')] h-[294px] w-[320px]  bg-no-repeat bg-contain mt-8">
            <Image src={Image1} alt="/" className="h-[220px] w-[320px] p-4" />
            <h1 className="font-mono text-[12px] text-[#333333] pl-4">
              High-end tech talent key to fantasy sports
            </h1>
            <h2 className="text-[#0169B6] font-semibold text-end pt-5 pr-6">
              View More{" "}
            </h2>
          </div>

          <div className="bg-[url('/assets/aboutimg/Rectangle2117.svg')] h-[294px] w-[320px]  bg-no-repeat bg-contain mt-8 mb-16">
            <Image src={Image1} alt="/" className="h-[220px] w-[320px] p-4" />

            <h1 className="font-mono text-[12px] text-[#333333] pl-4">
              High-end tech talent key to fantasy sports
            </h1>
            <h2 className="text-[#0169B6] font-semibold text-end pt-5 pr-6">
              View More{" "}
            </h2>
          </div>

          <div className="bg-[url('/assets/aboutimg/Rectangle2117.svg')] h-[294px] w-[320px]  bg-no-repeat bg-contain mt-8">
            <Image src={Image1} alt="/" className="h-[220px] w-[320px] p-4" />
            <h1 className="font-mono text-[12px] text-[#333333] pl-4">
              High-end tech talent key to fantasy sports
            </h1>
            <h2 className="text-[#0169B6] font-semibold text-end pt-5 pr-6">
              View More{" "}
            </h2>
          </div>
        </div>
      </div>
      <div className="hidden sm:block lg:hidden mb-10">
        <div className="flex justify-evenly">
          <div className="bg-[url('/assets/aboutimg/Rectangle2117.svg')] h-[274px] w-[300px]  bg-no-repeat bg-contain mt-8">
            <Image src={Image1} alt="/" className="h-[200px] w-[300px] p-4" />
            <h1 className="font-mono text-[12px] text-[#333333] pl-4">
              High-end tech talent key to fantasy sports
            </h1>
            <h2 className="text-[#0169B6] font-semibold text-end pt-5 pr-6">
              View More{" "}
            </h2>
          </div>

          <div className="bg-[url('/assets/aboutimg/Rectangle2117.svg')] h-[274px] w-[300px]  bg-no-repeat bg-contain mt-8">
            <Image src={Image1} alt="/" className="h-[200px] w-[300px] p-4" />

            <h1 className="font-mono text-[12px] text-[#333333] pl-4">
              High-end tech talent key to fantasy sports
            </h1>
            <h2 className="text-[#0169B6] font-semibold text-end pt-5 pr-6">
              View More{" "}
            </h2>
          </div>
        </div>
      </div>
      <div className="block sm:hidden mb-28">
        <div className="flex justify-evenly">
          <div className="bg-[url('/assets/aboutimg/Rectangle2117.svg')] h-[274px] w-[300px]  bg-no-repeat bg-contain mt-8">
            <Image src={Image1} alt="/" className="h-[200px] w-[300px] p-4" />
            <h1 className="font-mono text-[12px] text-[#333333] pl-4">
              High-end tech talent key to fantasy sports
            </h1>
            <h2 className="text-[#0169B6] font-semibold text-end pt-5 pr-6">
              View More{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
