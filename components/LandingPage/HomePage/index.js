import Group from "/public/assets/Group 42418.png";
import Image from "next/image";
import MobileImg from "/public/assets/mobileimgs/Group 42312 (1).png";
export default function HomePage() {
  return (
    <div>
      <div className="hidden sm:block">
        <Image src={Group} alt="/" className="h-[700px] w-full" />
      </div>
      <div className="block sm:hidden">
        <Image src={MobileImg} alt="/" className="h-[600px] w-full" />
      </div>
    </div>
  );
}
