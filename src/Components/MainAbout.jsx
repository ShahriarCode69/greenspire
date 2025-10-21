import { ArrowUpRight } from "lucide-react";
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

const MainAbout = () => {
  return (
    <section className="section container">
      <div className="flex flex-col items-start justify-between xl:flex-row">
        <span className="mb-4 inline-flex items-center justify-center rounded-full px-3 py-1 text-base font-medium">
          [ About Us ]
        </span>
        <div className="xl:basis-[75%]">
          <p className="mb-4 text-xl font-medium md:text-5xl">
            At <span className="font-display italic">Greenspire</span> we’ve
            been turning ordinary yards into thriving landscapes since 2015,
            with 1,200+ completed projects.
          </p>
          <div className="mt-10 mb-10 overflow-hidden border-l-3 border-black bg-white">
            <blockquote className="pl-6 text-lg text-black italic md:text-2xl">
              <span className="font-display leading-relaxed">
                "One of the most common mistakes I see is people cutting their
                grass too short, especially in spring and summer. Leaving it
                just a little longer encourages deeper roots and protects it
                from heat stress. If you are not adjusting your blade height
                with the seasons, you are missing a key part of lawn care."
              </span>
            </blockquote>
            <div className="mt-8 flex flex-col items-start gap-4 pl-6 sm:flex-row sm:items-center">
              <div className="font-display flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-lg font-semibold text-emerald-800">
                BD
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900">
                  Ben Ducket
                </p>
                <p className="text-sm text-slate-500">Founder &amp; CEO</p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="group mb-16 inline-flex items-center gap-12 rounded-full border border-[#9ae9bc] bg-[#b9ffd6] px-2 py-2 text-lg font-semibold text-slate-900 shadow-sm transition hover:border-[#012c3d] hover:bg-[#012c3d] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          >
            <span className="ml-2 transition group-hover:text-[#b9ffd6]">
              Contact Us
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#012c3d] text-[#b9ffd6] transition group-hover:bg-[#b9ffd6] group-hover:text-[#012c3d]">
              <ArrowUpRight className="h-6 w-6" strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex h-64 flex-col items-start justify-between rounded-lg bg-[#f6f6f6] p-8"
            >
              <div>
                <span className="text-lg font-medium">{stat.subtitle}</span>
                <p>{stat.description}</p>
              </div>
              <h2 className="text-6xl">{stat.number}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainAbout;
