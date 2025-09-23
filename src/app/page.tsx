import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Portfolio from "@/components/porfolio/porfolio";
import Resume from "@/components/Resume";
import Sidebar from "@/components/Sidebar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="space-y-20">
      <Sidebar className="!block" />
      <About />
      <Resume />
      <Portfolio />
      {/* <Testimonials /> */}
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
