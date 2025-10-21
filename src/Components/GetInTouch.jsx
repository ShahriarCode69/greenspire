import { FiArrowUpRight, FiAward } from "react-icons/fi";

const GetInTouch = () => {
  return (
		<section className="relative isolate overflow-hidden bg-[url('https://framerusercontent.com/images/1uDNdt7tP7rIp8PSBYR7gWWFY.png?width=1200&height=1200')] bg-cover bg-bottom text-white">
			<div className="absolute inset-0 bg-[#012d1b]/30 mix-blend-multiply" />
      <div className="relative container mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 lg:flex-row lg:items-center lg:justify-between lg:px-10 xl:px-0 xl:py-32">
        <div className="max-w-xl">
          <span className="mb-6 inline-block font-medium tracking-[0.3em] text-[#b9ffd6]">
            [Get in Touch]
          </span>
          <h2 className="text-4xl leading-tight font-medium sm:text-5xl lg:text-6xl">
            Ready to Get
            <span className="font-display mt-2 block text-[3.25rem] italic sm:text-[3.75rem]">
              Started
            </span>
          </h2>
          <p className="mt-6 text-lg text-[#e7f8ef] sm:text-xl">
            Let our expert team handle the hard work while you enjoy a beautiful
            yard. Get in touch today for a free quote!
          </p>
          <button
            type="button"
            className="group mt-4 inline-flex w-fit items-center gap-12 rounded-full border border-[#9ae9bc] bg-[#b9ffd6] px-2 py-2 text-lg font-semibold text-slate-900 shadow-sm transition hover:border-[#012c3d] hover:bg-[#012c3d] focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:outline-none"
          >
            <span className="ml-2 transition group-hover:text-[#b9ffd6]">
              Learn More
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#012c3d] text-[#b9ffd6] transition group-hover:bg-[#b9ffd6] group-hover:text-[#012c3d]">
              <FiArrowUpRight className="h-6 w-6" strokeWidth={2.5} />
            </span>
          </button>
        </div>

        <div className="flex w-full max-w-fit flex-col items-start gap-6 self-end rounded-lg bg-white/95 p-2 text-left shadow-xl shadow-[#012c3d]/20 backdrop-blur-sm sm:ml-auto sm:flex-row sm:items-center sm:gap-3 lg:ml-0 lg:translate-y-12">
          <img
            src="https://framerusercontent.com/images/Gbwt6wbmZg9y1kR6ilAx3HaXEc.png?width=1322&height=697"
            alt="Gardener tending to a lawn"
            className="h-40 w-full rounded-md object-cover sm:w-30"
          />
          <div className="flex flex-col items-start gap-2">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#012c3d] text-[#b9ffd6]">
              <FiAward className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-[#012c3d]">
                10+ Years
              </h3>
              <p className="mt-1 max-w-[25ch] text-sm leading-relaxed text-[#0f3a2c]">
                We’ve spent over a decade perfecting our lawn and garden
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
