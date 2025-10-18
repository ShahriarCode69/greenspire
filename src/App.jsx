import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";

const App = () => {
	return (
		<main className="relative">
			<Navbar />
			<Hero />
			<About/>
		</main>
	);
};

export default App;
