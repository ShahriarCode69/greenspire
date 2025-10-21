
import Hero from "../Components/Hero";
import HomeAbout from "../Components/HomeAbout";
import Gallery from "../Components/Gallery";
import Services from "../Components/Services";
import CoreValues from "../Components/CoreValues";
import Articles from "../Components/Articles";
import Pricing from "../Components/Pricing";
import ChooseUs from "../Components/ChooseUs";
import CallToAction from "../Components/CallToAction";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <main>
      <Hero />
      <HomeAbout />
      <CoreValues />
      <Services />
      <Gallery />
      <Articles />
      <Pricing />
      <ChooseUs />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Home;
