import HomePage from "./HomePage";
import Partners from "./Partners";
import TakePart from "./TakePart";
import Watch from "./Watch";
import Winners from "./Winners";
import Welcome from "./Welcome";
import Know from "./Know";
import SafeAndFun from "./SafeAndFun";
import PlayIndian from "./PlayIndian";
import Tips from "./Tips";

import Navbar from "../Navbar";
import Tournment from "./Tournament";
import WhilePlaying from "./WhilePlaying";
import Enjoy from "./Enjoy";
import Offers from "./Offers";
import WinBig from "./WinBig";
import Faqs from "./Faqs";
import Footer from "../Footer";
export default function FantacyPage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HomePage />
      <TakePart />
      <Partners />
      <Watch />
      <Winners />
      <Welcome />
      <Know />

      <SafeAndFun />
      <PlayIndian />
      <Tips />

      <Tournment />
      <WhilePlaying />
      <Enjoy />
      <Offers />
      <WinBig />
      <Faqs />
      <Footer />
    </div>
  );
}
