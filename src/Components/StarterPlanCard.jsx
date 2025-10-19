import { Check, ArrowUpRight, Leaf } from "lucide-react";

const features = [
  "Lawn mowing (up to 100 m²)",
  "Edge trimming",
  "General garden tidy-up",
  "Grass clippings removal",
  "Weed Control",
  "Flower Bed Care",
  "Priority Scheduling",
  "Basic spot treatment",
];

export default function StarterPlanCard() {
  return (
    <div className="group mx-auto w-full max-w-[800px] rounded-xl border-1 border-black/10 bg-white p-8 select-none">
      {/* Title */}
      <div className="mb-2 flex items-center space-x-2">
        <div className="flex-center h-10 w-10 rounded-full bg-teal-900">
          <Leaf color={"#a9ffca"} />
        </div>
        <h2 className="text-4xl font-semibold text-gray-800">Starter Plan</h2>
      </div>
      <p className="mb-8 text-lg text-black">Perfect for smaller gardens</p>

      {/* Price */}
      <div className="mb-8 text-5xl font-medium text-gray-800">
        $39<span className="text-2xl text-gray-500">/visit</span>
      </div>

      {/* Features Grid */}
      <ul className="mt-4 mb-10 grid grid-cols-1 gap-3 md:grid-cols-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-700">
            <Check className="mt-0.5 mr-2 h-4 w-4 shrink-0 text-gray-700" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className="flex w-full items-center justify-between gap-2 rounded-full border-1 border-black/40 bg-transparent px-3 py-2 text-black transition-all duration-500 group-hover:bg-emerald-300 group-hover:border-emerald-300">
        <span className="pl-2">Contact Us</span>
        <span className="rounded-full bg-emerald-800 p-1 text-emerald-100">
          <ArrowUpRight size={28} />
        </span>
      </button>
    </div>
  );
}
