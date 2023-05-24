import Footer from "../Footer";
import Navbar from "../Navbar";
import About from "./About";
import Captains from "./Captains";
import Investors from "./Investors";
import Mission from "./Mission";
import News from "./News";
import OurBrands from "./OurBrands";
import Vision from "./Vision";

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <About />
      <Vision />
      <OurBrands />
      <Mission />
      <Captains />
      <Investors />
      <News />
      <Footer />
    </div>
  );
}
