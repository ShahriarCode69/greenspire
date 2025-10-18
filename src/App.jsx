import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Gallery from "./Components/Gallery";

const App = () => {
	return (
		<main className="relative">
			<Navbar />
			<Hero />
			<About/>
			<Gallery/>
		</main>
	);
};

export default App;
