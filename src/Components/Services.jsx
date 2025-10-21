import ServiceCard from "./ServiceCard";
import Chip from "./Chip";
import { Leaf, Droplet, Trees } from "lucide-react";

const services = [
  {
    id: 1,
    image: "/article.png",
    title: "Grass Adjustment",
    description:
      "Protect root health and maintain vibrancy with expert mowing height adjustments matched to each season’s conditions.",
    icon: <Leaf size={20} />,
  },
  {
    id: 2,
    image: "/article.png",
    title: "Smart Watering",
    description:
      "Ensure efficient irrigation with automated watering schedules that save water and keep lawns consistently hydrated.",
    icon: <Droplet size={20} />,
  },
  {
    id: 3,
    image: "/article.png",
    title: "Tree Care",
    description:
      "Promote long-term growth with seasonal pruning, pest control, and soil treatments designed for healthy, thriving trees.",
    icon: <Trees size={20} />,
  },
];

const Services = () => {
  return (
    <section className="w-full bg-[#f6f6f6] py-20">
      <div className="container mx-auto flex flex-col items-center px-4">
        {/* Title Section */}
        <Chip badgeText="Services" />
        <h2 className="heading-md mt-4 text-center mb-12 !text-black">
          Services Designed To Keep <br /> Your{" "}
          <span className="font-display italic">Outdoors Thriving</span>
        </h2>

        {/* ✅ Centered Grid */}
        <div className="grid items-center justify-center gap-8 md:grid-cols-1 lg:grid-cols-3">
          {services.map((service) => (
              <ServiceCard
                bgImg={service.image}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
