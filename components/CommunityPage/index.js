import Footer from "../Footer";
import Navbar from "../Navbar";
import CopyRight from "./CopyRight";
import Guidelines from "./Guidelines";
import Prohibited from "./Prohibited";
import Spam from "./Spam";

export default function CommunityPage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Guidelines />
      <Prohibited />
      <Spam />
      <CopyRight />
      <Footer />
    </div>
  );
}
