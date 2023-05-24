import Footer from "../Footer";
import Navbar from "../Navbar";
import Responsibility from "./Responsibility";
import Transparency from "./Transparency";
import Trust from "./Trust";

export default function PlayPage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Responsibility />
      <Transparency />
      <Trust />
      <Footer />
    </div>
  );
}
