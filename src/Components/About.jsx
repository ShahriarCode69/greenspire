import AnimatedLogoCloud from "./AnimatedLogoCloud";
import Badge from "./Badge";

const About = () => {
  return (
    <section className="section mx w-full bg-[#f6f6f6]">
      <div className="container">
        <div className="flex flex-col gap-4 items-center justify-between">
          <h5 className="font-medium text-sm md:text-lg">Trusted by more than 5k+ satisfied clients</h5>
          <AnimatedLogoCloud />
        </div>
        <div>
          <Badge badgeText={"About us"}/>
        </div>
      </div>
    </section>
  );
};

export default About;
