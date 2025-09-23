import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import Resume from '@/components/Resume';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <About />
      <Resume />
      <Services />
      <Portfolio />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
