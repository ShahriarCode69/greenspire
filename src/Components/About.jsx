import AnimatedLogoCloud from "./AnimatedLogoCloud";
import Chip from "./Chip";

const stats = [
  {
    id: 1,
    number: "1200+",
    subtitle: "Transforming yard",
    description: "Into beautiful, thriving spaces across the city.",
  },
  {
    id: 2,
    number: "10+",
    subtitle: "Lawn Care Specialists",
    description: "Expert Lawn & Garden Services Since 2015",
  },
  {
    id: 3,
    number: "98%",
    subtitle: "Customer Satisfaction",
    description: "Trusted by Homeowners for Quality Service",
  },
  {
    id: 4,
    number: "50+",
    subtitle: "Multiple local areas",
    description: "Serving Local Areas with Professional Care",
  },
];

const About = () => {
  return (
    <section className="section mx w-full bg-[#f6f6f6]">
      <div className="container flex flex-col">
        <div className="mb-20 flex flex-col justify-between gap-4 xl:flex-row">
          <h5 className="text-sm font-medium md:text-lg">
            Trusted by more than 5k+ satisfied clients
          </h5>
          <AnimatedLogoCloud />
        </div>
        <div className="flex flex-col items-start justify-between xl:flex-row">
          <Chip badgeText={"About us"} />
          <div className="xl:basis-[75%]">
            <p className="mb-4 text-xl font-medium md:text-3xl">
              At <span className="font-display italic">Greenspire</span> we’ve
              been turning ordinary yards into thriving landscapes since 2015,
              with 1,200+ completed projects. We take pride in delivering
              tailored solutions that match your space, style, and schedule.
            </p>
            <p className="mb-12 text-sm">
              Every successful outdoor transformation begins with a thoughtful
              conversation. During this first stage, our team takes the time to
              understand your goals, preferences, and pain points — whether
              you’re struggling with uneven growth, overgrown hedges, patchy
              turf, or a garden that simply needs a fresh start.
            </p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex h-64 flex-col items-start justify-between rounded-lg bg-white p-8"
              >
                <h2 className="text-6xl">{stat.number}</h2>
                <div>
                  <span className="text-lg font-medium">{stat.subtitle}</span>
                  <p>{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
