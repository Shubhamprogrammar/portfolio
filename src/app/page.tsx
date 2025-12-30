import About from "@/components/About";
import Education from "@/components/Education";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#CFE5FF]">
      <Navbar />
      <section id="about" className="scroll-smooth"> 
      <About />
      </section>
      <Education />
      <section id="project" className="scroll-smooth"> 
      <Projects />
      </section>
      <section id="skills" className="scroll-smooth">
      <Skills />
      </section>
      <section id="contact" className="scroll-smooth">
      <Contact />
      </section>
      <Footer />
    </div>
  );
}
