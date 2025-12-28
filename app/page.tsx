import Image from "next/image";
import HomePage from "../components/pages/Home";
import Navbar from "../components/usable-components/Navbar";
import Highlights from "../components/pages/Highlights";

export default function Home() {
  return (
    <div>
      <div className="items-center justify-items-center">
        <HomePage />
      </div>
      <div>
        <Highlights />
      </div>
    </div>
  );
}
