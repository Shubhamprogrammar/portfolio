import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#CFE5FF]">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}
