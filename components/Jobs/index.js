//compontents import
import Footer from "../Footer";

import Navbar from "../Navbar";
import BeAPartTeam from "./BeAPartTeam";
import Become from "./Become";
import Benifits from "./Benifits";
import EveryDay from "./EveryDay";
import Recognition from "./Recognition";
import TeamTalk from "./TeamTalk";
import WorkWith from "./WorkWith";

export default function Jobs() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Become />
      <BeAPartTeam />
      <EveryDay />
      <Benifits />
      <TeamTalk />
      <Recognition />
      <WorkWith />
      <Footer />
    </div>
  );
}
