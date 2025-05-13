import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#CFE5FF]">
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}
