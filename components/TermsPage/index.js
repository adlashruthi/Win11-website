import Footer from "../Footer";
import Navbar from "../Navbar";
import Conditions from "./Conditions";
import SigningUp from "./SigningUp";
import WinUsage from "./WinUsage";

export default function TermsPage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Conditions />
      <WinUsage />
      <SigningUp />
      <Footer />
    </div>
  );
}
