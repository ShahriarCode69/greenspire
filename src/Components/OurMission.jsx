import Chip from "./Chip";
import { ArrowUpRight } from "lucide-react";

const Missions = [
  {
    id: 1,
    text: "Providing dependable, high-quality lawn and garden care.",
  },
  {
    id: 2,
    text: "Treating every outdoor space with precision and pride.",
  },
  {
    id: 3,
    text: "Building trust through eco-friendly, honest service.",
  },
];

const OurMission = () => {
  return (
    <section className="section mx items-strech container bg-white xl:mx-0 xl:flex xl:justify-center xl:gap-20">
      <div className="flex basis-[70%] flex-col justify-between gap-2 xl:gap-6">
        <div>
          <span className="mb-4 inline-flex items-center justify-center rounded-full px-3 py-1 text-base font-medium">
            [Our Mission]
          </span>
          <h2 className="heading-md mb-4 !text-black">
            Growing Beauty Through Honest,{" "}
            <span className="font-display italic">Reliable Care</span>
          </h2>
          <p>
            To provide dependable, eco-conscious lawn and garden care that
            enhances curb appeal, supports healthy growth, and gives our clients
            more time.
          </p>
        </div>
        <div>
          {Missions.map((mission) => (
            <div className="border-t-1 border-black/10 py-4 last:border-b-1">
              <span className="font-medium">{mission.text}</span>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="group mb-16 inline-flex w-fit items-center gap-12 rounded-full border border-[#9ae9bc] bg-[#b9ffd6] px-2 py-2 text-lg font-semibold text-slate-900 shadow-sm transition hover:border-[#012c3d] hover:bg-[#012c3d] focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:outline-none"
        >
          <span className="ml-2 transition group-hover:text-[#b9ffd6]">
            Learn More
          </span>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#012c3d] text-[#b9ffd6] transition group-hover:bg-[#b9ffd6] group-hover:text-[#012c3d]">
            <ArrowUpRight className="h-6 w-6" strokeWidth={2.5} />
          </span>
        </button>
      </div>
      <img
        className="mb-12 aspect-[3/4] w-full basis-[30%] rounded-xl object-cover md:aspect-video md:w-full xl:mb-0 xl:h-[580px] xl:w-[430px]"
        src="https://framerusercontent.com/images/Oz3LWVOu2MFm9W2uXLEPzWGjQ.png?scale-down-to=1024&width=2180&height=2402 "
        alt=""
      />
    </section>
  );
};

export default OurMission;
