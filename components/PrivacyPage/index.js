import Footer from "../Footer";
import Navbar from "../Navbar";
import Options from "./Options";
import Policy from "./Policy";
import UseAnd from "./UseAnd";

export default function PrivacyPage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Policy />
      <UseAnd />
      <Options />
      <Footer />
    </div>
  );
}
