import Footer from "../Footer";
import Navbar from "../Navbar";
import HomePage from "./HomePage";
import KnowMore from "./KnowMore";
import Official from "./Official";
import PlayKabaddi from "./PlayKabaddi";
import StartWinning from "./StartWinning";
import WhatIs from "./WhatIs";

export default function KabaddiPage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HomePage />
      <PlayKabaddi />
      <Official />
      <KnowMore />
      <WhatIs />
      <StartWinning />
      <Footer />
    </div>
  );
}
