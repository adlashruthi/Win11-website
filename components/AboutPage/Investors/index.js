import Image from "next/image";
import Indian from "/public/assets/aboutimg/Rectangle 2114.png";
export default function Investors() {
  return (
    <div>
      <div className="bg-[url('/assets/aboutimg/Group42296.svg')] lg:h-[800px] sm:h-[940px] h-[600px] w-full bg-no-repeat bg-cover lg:bg-contain">
        <h1 className="text-[#0B592A] text-center text-[24px] font-bold pt-32">
          “ OUR INVESTORS
        </h1>
        <h1 className="text-[#0169B6] text-[30px] font-mono font-bold  pt-6 text-center">
          FUELING THE
          <span className="text-[#00A547]"> GROWTH </span>
        </h1>
        <p className="text-[#0B592A] text-[14px] text-center ">
          Meet our biggest believers who always have our backs!
        </p>
        <div className="hidden lg:block">
          <div className="flex justify-center pt-12">
            <Image src={Indian} alt="/" height={100} width={300} />
            <Image src={Indian} alt="/" height={100} width={300} />
            <Image src={Indian} alt="/" height={100} width={300} />
          </div>

          <div className="flex justify-center pt-16 ">
            <Image src={Indian} alt="/" height={100} width={300} />
            <Image src={Indian} alt="/" height={100} width={300} />
            <Image src={Indian} alt="/" height={100} width={300} />
            <Image src={Indian} alt="/" height={100} width={300} />
          </div>
        </div>

        {/* //...............Tablet View.............// */}
        <div className="hidden sm:block lg:hidden">
          <div className="flex justify-center pt-12">
            <Image src={Indian} alt="/" height={100} width={300} />
          </div>
          <div className="flex justify-center pt-12">
            <Image src={Indian} alt="/" height={100} width={300} />
            <Image src={Indian} alt="/" height={100} width={300} />
          </div>
          <div className="flex justify-center pt-12">
            <Image src={Indian} alt="/" height={100} width={300} />
            <Image src={Indian} alt="/" height={100} width={300} />
          </div>
          <div className="flex justify-center pt-12">
            <Image src={Indian} alt="/" height={100} width={300} />
          </div>
        </div>

        <div className="block sm:hidden">
          <div className="flex justify-center pt-12">
            <Image src={Indian} alt="/" height={100} width={300} />
          </div>
        </div>
      </div>
    </div>
  );
}
