import Footer from "../Footer";
import Navbar from "../Navbar";
import AddTheApp from "./AddTheApp";
import HomePage from "./HomePage";
import Introduction from "./Introduction";
import OurAca from "./OurAca";
import PlayBasketBall from "./PlayBasketBall";
import WatchVideo from "./WatchVideo";

export default function BasketBallPage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HomePage />
      <PlayBasketBall />
      <OurAca />
      <WatchVideo />
      <Introduction />
      <AddTheApp />
      <Footer />
    </div>
  );
}
