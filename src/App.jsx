import { ReactLenis, useLenis } from "lenis/react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Services from "./Components/Services";
import CoreValues from "./Components/CoreValues";
import Articles from "./Components/Articles"
import Pricing from "./Components/Pricing";
import ChooseUs from "./Components/ChooseUs"
import CallToAction from "./Components/CallToAction";
import Footer from "./Components/Footer";

const App = () => {
	const lenis = useLenis((lenis) => {
  });
  return (
    <main className="relative">
      <ReactLenis root />
      <Navbar />
      <Hero />
      <About />
      <CoreValues />
      <Services/>
      <Gallery />
      <Articles/>
      <Pricing/>
      <ChooseUs/>
      <CallToAction />
      <Footer />
    </main>
  );
};

export default App;
