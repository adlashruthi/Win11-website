import Win11Faq from "../FootBallPage/Win11Faq";
import Footer from "../Footer";
import Navbar from "../Navbar";
import EnterIntoThe from "./EnterIntoThe";
import HomePage from "./HomePage";
import HomeScreen from "./HomeScreen";
import PlayToWin from "./PlayToWin";
import TheWin11 from "./TheWin11";
import WinCrores from "./WinCrores";

export default function CricketAppInstall() {
  return (
    <div className="overflow-hidden ">
      <Navbar />
      <HomePage />
      <HomeScreen />
      <WinCrores />
      <TheWin11 />
      <PlayToWin />
      <EnterIntoThe />
      <Win11Faq />
      <Footer />
    </div>
  );
}
