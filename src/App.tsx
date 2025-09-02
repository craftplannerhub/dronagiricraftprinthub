import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Statistics from "./components/Statistics";
import Packages from "./components/Packages";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Statistics />
        <Packages />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}