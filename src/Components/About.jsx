import AnimatedLogoCloud from "./AnimatedLogoCloud";

const About = () => {
  return (
    <section className="section w-full bg-[#f6f6f6]">
      <div className="container">
        <div className="flex items-center justify-between">
          <h5 className="font-semibold text-xl">Trusted by more than 5k+ <br />satisfied clients</h5>
          <AnimatedLogoCloud />
        </div>
      </div>
    </section>
  );
};

export default About;
