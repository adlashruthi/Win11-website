import Image from "next/image";
import HeaderImg from "/public/assets/contactimg/Group 42418.png";
import mobileView from "/public/assets/kabaddiimg/Group 42312.png";
export default function HomePage() {
  return (
    <div>
      <div className="hidden sm:block">
        <Image src={HeaderImg} alt="/" className="h-[700px] w-full" />
      </div>
      <div className="sm:hidden">
        <Image src={mobileView} alt="/" className="h-full w-full" />
      </div>
    </div>
  );
}
