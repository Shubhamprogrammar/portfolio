import About from "@/components/About";
import Education from "@/components/Education";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Education />
      <Projects />
    </>
  );
}
