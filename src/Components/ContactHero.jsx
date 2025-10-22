import { ArrowUpRight, ChevronDown } from "lucide-react";

const serviceOptions = [
  "General Landscaping",
  "Garden Maintenance",
  "Tree Trimming",
  "Outdoor Lighting",
  "Seasonal Cleanup",
];

const ContactHero = () => {
  return (
    <section className="mx pt-44 pb-28 bg-[#f6f6f6]">
      <div className="container">
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          <div className="space-y-6 md:flex-[1.5] lg:space-y-8">
            <span className="text-sm font-medium text-[#074158]">
              [Projects]
            </span>

            <h1 className="text-4xl leading-[1.1] font-semibold text-[#042537] sm:text-5xl lg:text-6xl xl:text-7xl xl:leading-[1.05]">
              Reach Out & Let Nature&apos;s{" "}
              <span className="font-display text-[#032233] italic">
                Revival Begin
              </span>
            </h1>
          </div>

          <div className="flex flex-col gap-6 self-end md:max-w-sm md:flex-1 md:justify-center">
            <p className="text-base leading-relaxed text-[#1d4a5a] sm:text-lg">
              Have a question, need a quote, or want to schedule a visit? Reach
              out - we&apos;d love to hear from you.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-xl bg-white p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
            <div className="aspect-[4/5] overflow-hidden rounded-md border border-[#e2f1f2] bg-[#f2f9f7] sm:aspect-[5/4] lg:aspect-auto lg:h-full lg:min-h-[420px]">
              <img
                src="/callToAction.png"
                alt="GreenSpire landscape expert ready to help"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <form className="flex flex-col gap-8">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="flex flex-col text-sm font-medium text-[#032233]">
                  Full Name*
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    className="mt-2 border-0 border-b border-[#c8d8df] bg-transparent py-3 text-base font-normal text-[#06394b] placeholder:text-[#7a919e] focus:border-[#0a7b64] focus:ring-0 focus:outline-none"
                  />
                </label>
                <label className="flex flex-col text-sm font-medium text-[#032233]">
                  Email Address*
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="mt-2 border-0 border-b border-[#c8d8df] bg-transparent py-3 text-base font-normal text-[#06394b] placeholder:text-[#7a919e] focus:border-[#0a7b64] focus:ring-0 focus:outline-none"
                  />
                </label>
                <label className="flex flex-col text-sm font-medium text-[#032233]">
                  Phone Number*
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(123) 456-7890"
                    className="mt-2 border-0 border-b border-[#c8d8df] bg-transparent py-3 text-base font-normal text-[#06394b] placeholder:text-[#7a919e] focus:border-[#0a7b64] focus:ring-0 focus:outline-none"
                  />
                </label>
                <label className="flex flex-col text-sm font-medium text-[#032233]">
                  Service Interested In
                  <div className="relative mt-2">
                    <select
                      name="service"
                      defaultValue={serviceOptions[0]}
                      className="w-full appearance-none border-0 border-b border-[#c8d8df] bg-transparent py-3 pr-10 text-base font-normal text-[#06394b] focus:border-[#0a7b64] focus:ring-0 focus:outline-none"
                    >
                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={20}
                      strokeWidth={1.6}
                      className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 text-[#0f3b4f]"
                    />
                  </div>
                </label>
              </div>

              <label className="flex flex-col text-sm font-medium text-[#032233]">
                Your Message
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Share a few project details..."
                  className="mt-2 resize-y border-0 border-b border-[#c8d8df] bg-transparent py-3 text-base font-normal text-[#06394b] placeholder:text-[#7a919e] focus:border-[#0a7b64] focus:ring-0 focus:outline-none"
                />
              </label>

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-center gap-3 text-sm text-[#0c3243]">
                  <input
                    type="checkbox"
                    name="terms"
                    className="mt-1 h-5 w-5 rounded-md border border-[#7eb9a6] accent-[#0a7b64]"
                  />
                  <span>
                    <span className="font-semibold text-[#074158]">
                      I accept
                    </span>{" "}
                    the terms and conditions
                  </span>
                </label>

                <button
                  type="submit"
                  className="group w-fit inline-flex items-center justify-center gap-12 self-start rounded-full bg-[#032233] px-2 py-2 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#043347] sm:self-auto"
                >
                  <span className="pl-2">Send</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#9ce4a7] text-[#032233] transition-colors duration-200 group-hover:bg-[#89d392]">
                    <ArrowUpRight size={22} strokeWidth={1.5} />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
