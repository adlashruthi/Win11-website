import Footer from "../Footer";
import Navbar from "../Navbar";
// import Friends from "./Friends";
import InviteFriends from "./InviteFriends";

export default function Invite() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      {/* <Friends /> */}
      <InviteFriends />
      <Footer />
    </div>
  );
}
