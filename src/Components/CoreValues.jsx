import Chip from "./Chip";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CoreValues = () => {
  const Values = [
    {
      id: 1,
      text: "Every cut, trim, and plant is handled with precision and pride.",
    },
    {
      id: 2,
      text: "On time, on point, and always professional.",
    },
    {
      id: 3,
      text: "Healthy yards, safe methods, greener choices.",
    },
    {
      id: 4,
      text: "Healthy yards, safe methods, greener choices.",
    },
    {
      id: 5,
      text: "Your satisfaction is our top priority—every visit, every time.",
    },
  ];

  return (
    <section className="section mx xl:mx-0 container bg-white xl:flex items-strech xl:justify-center xl:gap-20">
      <img
        className="mb-12 aspect-[3/4] basis-[50%] w-full rounded-xl object-cover md:aspect-video md:w-full xl:mb-0 xl:h-[690px] xl:w-[530px]"
        src="/coreValues.png"
        alt=""
      />
      <div className="flex flex-col gap-6 xl:gap-12 basis-[50%] justify-between">
        <div>
          <Chip badgeText="Core Values" />
          <h2 className="heading-md mb-4 !text-black">
            It’s Not Just <span className="font-display italic">Lawn Care</span>
          </h2>
          <p>
            We’ve been turning ordinary yards into thriving, beautiful
            landscapes since 2015. Whether it's regular mowing, seasonal
            cleanups, or complete garden makeovers — we’re here to help you grow
            something amazing.
          </p>
        </div>
        <div>
          {Values.map((value) => (
            <div className="border-t-1 border-black/10 py-4 last:border-b-1">
              <span className="font-medium">{value.text}</span>
            </div>
          ))}
        </div>
        <Button className="group w-fit cursor-pointer rounded-full px-6 py-6 text-lg text-black">
          Get Started
          <ArrowRight
            className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2"
            size={32}
          />
        </Button>
      </div>
    </section>
  );
};

export default CoreValues;
