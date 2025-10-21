import { ReactLenis, useLenis } from "lenis/react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";


import Home from "./Pages/Home";
import About from "./Pages/About"



const App = () => {
	const lenis = useLenis((lenis) => {
  });
  return (
    <main className="relative">
      <ReactLenis root />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default App;
