import HomePage from "../components/pages/Home";
import Highlights from "../components/pages/Highlights";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div>
      <div className="items-center justify-items-center">
        <HomePage />
      </div>
      <div>
        <Highlights />
      </div>
      <div>
        <CTASection />
      </div>
    </div>
  );
}
