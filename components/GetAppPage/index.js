import HomeScreen from "../CricketAppInstall/HomeScreen";
import Win11Faq from "../FootBallPage/Win11Faq";
import Footer from "../Footer";
import Follow from "./Follow";
import NeedInput from "./NeedInput";

export default function GetAppPage() {
  return (
    <div className="overflow-hidden">
      <Follow />
      <HomeScreen />
      <NeedInput />
      <Win11Faq />
      <Footer />
    </div>
  );
}
