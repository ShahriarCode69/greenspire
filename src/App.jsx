import { ReactLenis, useLenis } from "lenis/react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import CoreValues from "./Components/CoreValues";
import Pricing from "./Components/Pricing";
import CallToAction from "./Components/CallToAction";

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
      <Gallery />
      <Pricing/>
      <CallToAction />
    </main>
  );
};

export default App;
