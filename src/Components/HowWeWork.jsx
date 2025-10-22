import {
  PiCalendarCheckFill,
  PiChatsCircleFill,
  PiLeafFill,
} from "react-icons/pi";

const steps = [
  {
    id: 1,
    title: "Consult & Assess",
    description:
      "We start by understanding your garden's needs through a free consultation or site visit.",
    Icon: PiChatsCircleFill,
  },
  {
    id: 2,
    title: "Plan & Schedule",
    description:
      "Based on your goals, we create a tailored service plan and book a time that fits your routine.",
    Icon: PiCalendarCheckFill,
  },
  {
    id: 3,
    title: "Deliver & Maintain",
    description:
      "Our expert team gets to work -- providing reliable, high-quality care to keep your outdoor space thriving.",
    Icon: PiLeafFill,
  },
];

const description =
  "We make garden care simple, efficient, and stress-free from start to finish. Professional results through a proven process.";

const HowWeWork = () => {
  return (
    <section className="section mx container bg-white">
      <div className="grid gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:grid-rows-[auto_auto] xl:items-start">
        <div>
          <span className="mb-6 inline-block text-sm font-semibold tracking-[0.22em] text-[#013b3a] uppercase">
            [How we work]
          </span>
          <h2 className="text-4xl leading-tight font-semibold text-[#022e3b] md:text-5xl xl:text-[56px] xl:leading-[1.05]">
            How We Bring Your{" "}
            <span className="font-display text-[#022e3b] italic">
              Garden to Life
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#1f4552] xl:hidden">
            {description}
          </p>
        </div>

        <div className="item-center flex h-full flex-col justify-between xl:row-span-2">
          <p className="hidden self-start text-lg leading-8 text-[#1f4552] xl:block xl:pt-14">
            {description}
          </p>
          <div className="relative mt-8 self-end overflow-hidden rounded-lg bg-[#0f3f3a]/5 md:mt-10 xl:mt-12">
            <img
              className="h-[470px] w-full object-cover"
              src="https://framerusercontent.com/images/qICJFrMEqzg6ei3kUQw5vzewPWg.jpg?scale-down-to=512&width=4096&height=2127"
              alt="Professional trimming hedges in a well-maintained garden"
            />
            <div className="absolute bottom-6 left-6 max-w-[280px] rounded-2xl bg-[#01364b] px-6 py-6 text-white md:bottom-8 md:left-8 md:max-w-[400px] xl:bottom-10 xl:left-10">
              <span className="block text-3xl font-semibold text-[#a9ffca] md:text-[40px]">
                1,200+
              </span>
              <p className="mt-3 text-sm leading-6 text-white/85 md:text-base">
                We&apos;ve proudly completed over 1,200 lawn and garden
                projects, each tailored to meet the unique needs of our clients.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 self-start xl:col-start-1 xl:row-start-2 xl:mt-16 xl:w-full">
          {steps.map(({ id, title, description, Icon }) => (
            <div
              key={id}
              className="flex items-start gap-6 border-t border-[#cad4d0] py-9 first:border-t-0 first:pt-0"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#013b3a] text-[#bfffd9]">
                <Icon className="h-6 w-6" />
              </span>
              <div className="space-y-2 text-[#0f3140]">
                <h3 className="text-xl font-semibold text-[#022e3b] md:text-2xl">
                  {title}
                </h3>
                <p className="text-base leading-7 text-[#1f4552] md:text-lg">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
