import { ArrowUpRight } from "lucide-react";


const CustomPlan = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#a9ffca] p-8 sm:flex-row sm:items-center">
      {/* Left Side: Text */}
      <div>
        <h2 className="mb-2 text-2xl font-semibold text-gray-900 sm:text-3xl">
          Need a Custom Plan
        </h2>
        <p className="max-w-md text-gray-800">
          We’ll tailor our services to match your garden’s size, style, and
          needs — let’s build the perfect plan for you.
        </p>
      </div>

      {/* Right Side: Button */}
      <button className="flex items-center justify-between gap-2 rounded-full bg-[#002E2E] px-2 py-2 text-white transition hover:bg-[#004444]">
        <span className="pl-1">Contact Us</span>
        <span className="rounded-full bg-green-300 p-1 text-[#002E2E]">
          <ArrowUpRight size={28} />
        </span>
      </button>
    </div>
  );
};

export default CustomPlan;
