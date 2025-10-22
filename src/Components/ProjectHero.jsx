import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

export const projectCards = [
  {
    id: 1,
    title: "Oakfield Manor",
    description:
      "Restored a 300 m\u00B2 heritage garden with premium turf and formal planting, completing elegant lawns.",
    location: "Cambridge",
    area: "300 m\u00B2",
    duration: "6 weeks",
    image: "/gallery/1.png",
  },
  {
    id: 2,
    title: "Riverside Retreat",
    description:
      "Designed a 450 m\u00B2 riverside landscape featuring stone pathways, ornamental grasses, and a reflective pond.",
    location: "Oxford",
    area: "450 m\u00B2",
    duration: "8 weeks",
    image: "/gallery/2.png",
  },
  {
    id: 3,
    title: "Maple Grove Estate",
    description:
      "Transformed a suburban 250 m\u00B2 backyard into a modern Zen-inspired garden with low-maintenance foliage.",
    location: "Brighton",
    area: "250 m\u00B2",
    duration: "5 weeks",
    image: "/gallery/2.png",
  },
  {
    id: 4,
    title: "Willow Park Gardens",
    description:
      "Rejuvenated a 600 m\u00B2 parkland with seasonal flowerbeds, shaded seating zones, and upgraded irrigation.",
    location: "Bath",
    area: "600 m\u00B2",
    duration: "10 weeks",
    image: "/gallery/3.png",
  },
  {
    id: 5,
    title: "Rosewood Villa",
    description:
      "Installed 200 m\u00B2 of vibrant flowerbeds complemented by stone edging and cascading water features.",
    location: "York",
    area: "200 m\u00B2",
    duration: "4 weeks",
    image: "/gallery/4.png",
  },
  {
    id: 6,
    title: "Evergreen Courtyard",
    description:
      "Designed a 320 m\u00B2 modern courtyard with layered evergreens and ambient lighting throughout walkways.",
    location: "Manchester",
    area: "320 m\u00B2",
    duration: "7 weeks",
    image: "/gallery/4.png",
  },
];

const ProjectHero = () => {
  return (
    <section className="mx w-full bg-[#f6f6f6] pt-44 pb-28">
      <div className="container">
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          <div className="space-y-6 md:flex-[1.5] self-start lg:space-y-8">
            <span className="text-sm font-medium text-[#074158]">
              [Projects]
            </span>

            <h1 className="text-4xl leading-[1.1] font-semibold text-[#042537] sm:text-5xl lg:text-6xl xl:text-[64px] xl:leading-[1.05]">
              Beautiful Results, One{" "}
              <span className="font-display text-[#032233] italic">
                Garden at a Time
              </span>
            </h1>
          </div>

          <div className="flex flex-col gap-6 md:max-w-sm md:flex-1 md:justify-center md:self-stretch">
            <p className="text-base leading-relaxed text-[#1d4a5a] sm:text-lg">
              Explore our recent projects and see how we bring beauty and life
              to outdoor spaces.
            </p>

            <button
              type="button"
              className="group mb-16 inline-flex w-fit items-center gap-12 rounded-full border border-[#9ae9bc] bg-[#b9ffd6] px-2 py-2 text-lg font-semibold text-slate-900 shadow-sm transition hover:border-[#012c3d] hover:bg-[#012c3d] focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:outline-none"
            >
              <span className="ml-2 transition group-hover:text-[#b9ffd6]">
                Start the Projects
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#012c3d] text-[#b9ffd6] transition group-hover:bg-[#b9ffd6] group-hover:text-[#012c3d]">
                <ArrowUpRight className="h-6 w-6" strokeWidth={2.5} />
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projectCards.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              location={project.location}
              area={project.area}
              duration={project.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
