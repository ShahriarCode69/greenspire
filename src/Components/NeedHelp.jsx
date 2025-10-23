import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const supportChannels = [
  {
    id: 1,
    icon: FaEnvelope,
    title: "Email",
    description:
      "Have a question or need assistance? Reach out to us via email.",
    emphasis: "hello@pentaclay.com",
  },
  {
    id: 2,
    icon: FaPhoneAlt,
    title: "Call Us",
    description: "Get instant help from our team - no waiting, no hassle.",
    emphasis: "+99 1234 5478",
  },
  {
    id: 3,
    icon: FaLocationDot,
    title: "Visit Us",
    description:
      "We'd love to welcome you to our headquarters - stop by for a chat.",
    emphasis: "See on Google Map",
  },
];

const NeedHelp = () => {
  return (
    <section className="mx container py-24">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-semibold text-slate-900 md:text-5xl">
          Need More{" "}
          <span className="font-display text-slate-900 italic">Help?</span>
        </h2>
        <p className="mt-4 text-base text-slate-900 md:text-lg">
          Reach out to our support team anytime - we're just a message away.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {supportChannels.map(
          ({ id, icon: Icon, title, description, emphasis }) => (
            <div
              key={id}
              className="flex h-full flex-col justify-between rounded-xl bg-[#f6f6f6] p-8 text-left"
            >
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-900">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  {description}
                </p>
              </div>
              <p className="mt-8 text-xl font-semibold transition-all duration-300 text-[#365a66] hover:text-[#0f3540] md:text-2xl cursor-pointer">
                {emphasis}
              </p>
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default NeedHelp;
