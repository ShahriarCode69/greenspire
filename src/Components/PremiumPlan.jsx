import { Check, ArrowUpRight, Leaf } from "lucide-react";

const features = [
  "Lawn mowing (up to 200 m²)",
  "Trimming & edging",
  "Light hedge maintenance",
  "Seasonal plant care",
  "Weed Control",
  "Assigned expert",
  "Priority Scheduling",
  "Advanced spot treatment",
];

export default function StarterPlanCard() {
  return (
    <div className="group mx-auto w-full max-w-[800px] rounded-xl border-1 border-black/10 bg-[#033040] p-8 select-none">
      {/* Title */}
      <div className="mb-2 flex items-center space-x-2">
        <div className="flex-center h-10 w-10 rounded-full bg-emerald-300">
          <Leaf color={"#033040"} />
        </div>
        <h2 className="text-4xl font-semibold text-white">Starter Plan</h2>
      </div>
      <p className="mb-8 text-lg text-gray-400">Perfect for smaller gardens</p>

      {/* Price */}
      <div className="mb-8 text-5xl font-medium text-white">
        $39<span className="text-2xl text-gray-300">/visit</span>
      </div>

      {/* Features Grid */}
      <ul className="mt-4 mb-10 grid grid-cols-1 gap-3 md:grid-cols-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-300">
            <Check className="mt-0.5 mr-2 h-4 w-4 shrink-0 text-gray-300" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className="flex w-full items-center justify-between gap-2 rounded-full bg-emerald-300 px-3 py-2 text-black transition-all duration-500  group-hover:bg-teal-800 group-hover:text-white">
        <span className="pl-2">Contact Us</span>
        <span className="rounded-full bg-teal-700 p-1 text-teal-100">
          <ArrowUpRight size={28} />
        </span>
      </button>
    </div>
  );
}
