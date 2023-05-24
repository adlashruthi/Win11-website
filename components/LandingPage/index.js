import Footer from "../Footer";
import Navbar from "../Navbar";
import Faq from "./Faq";
import GetTheApp from "./GetTheApp";
import HomePage from "./HomePage";
import Rating from "./Rating";
import Wearein from "./WeAreIn";

export default function LandingPage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HomePage />
      <Wearein />
      <Rating />
      <GetTheApp />
      <Faq />
      <Footer />
    </div>
  );
}
