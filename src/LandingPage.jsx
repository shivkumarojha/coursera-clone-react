import Header from "./components/Header"
import Collaborate from "./components/Collaborate"
import Community from "./components/Community";
import NextStep from "./components/NextStep";
import Footer from "./components/Footer";
export default function LandingPage() {
    return (
      <div>
        <Header background={"rgb(24, 26, 27)"} textColor={"white"} />
        <Collaborate background={"#1E2021"} />
        <Community />
        <NextStep />
        <Footer />
      </div>
    );
}