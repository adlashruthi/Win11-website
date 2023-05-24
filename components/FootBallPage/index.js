import Footer from "../Footer/index.js";
import Nav from "../Navbar/index.js";
import Navbar from "../Navbar/index.js";

import Aca from "./Aca/index.js";
import Business from "./Business/index.js";
import FantasyFootBall from "./FantacyFootBall/index.js";
import HomePage from "./HomePage.js";
import HowDo from "./HowDo/index.js";
import RealCash from "./RealCash/index.js";
import WhatIs from "./WhatIs/index.js";
import Win11Faq from "./Win11Faq/index.js";

export default function FootBallPage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      {/* <Nav /> */}
      <HomePage />
      <RealCash />
      <Aca />
      <WhatIs />
      <Business />
      <HowDo />
      <FantasyFootBall />
      <Win11Faq />
      <Footer />
    </div>
  );
}
