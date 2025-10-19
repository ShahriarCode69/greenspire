import { ReactLenis, useLenis } from "lenis/react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import CoreValues from "./Components/CoreValues";

const App = () => {
	const lenis = useLenis((lenis) => {
  });
  return (
    <main className="relative">
      <ReactLenis root />
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <CoreValues />
    </main>
  );
};

export default App;
