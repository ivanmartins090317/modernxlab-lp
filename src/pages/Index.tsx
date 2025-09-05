// Header is included in the artificial hero component
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Header />
        <Hero />
        <About />
        <Services />
        <Cases />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
