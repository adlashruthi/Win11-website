import Footer from "../Footer";
import Navbar from "../Navbar";
import Find from "./Find";
import Topics from "./Topics";
import Touch from "./Touch";

export default function Contact() {
  return (
    <div className="overflow-hidden">
      <Navbar />

      <Topics />
      <Find />
      <Touch />
      <Footer />
    </div>
  );
}
