import { FaFireFlameCurved } from "react-icons/fa6";

const ProjectCard = ({
  image,
  title,
  description,
  location,
  area,
  duration,
}) => {
  return (
    <article className="w-full max-w-[600px] overflow-hidden rounded-lg group">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="h-96 w-full rounded-lg object-cover overflow-hidden transition-transform duration-300 group-hover:scale-110"
        />

        <div className="absolute right-5 bottom-5 left-5 w-fit rounded-md bg-[#043247] px-6 py-4 text-white shadow-lg">
          <div className="flex items-center gap-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white">
              <FaFireFlameCurved className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <p className="text-lg font-semibold">{title}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-6 rounded-lg bg-white px-3 py-3 text-[#1b3844]">
        <p className="text-base leading-relaxed text-[#345462]">
          {description}
        </p>

        <div className="grid grid-cols-3 gap-0 rounded-2xl">
          {[
            { label: "Location", value: location },
            { label: "Area", value: area },
            { label: "Duration", value: duration },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-start gap-1 border-[#dbe6ed] pl-2 text-center first:rounded-l-2xl last:rounded-r-2xl [&:not(:last-child)]:border-r"
            >
              <span className="text-xs tracking-[0.18em] text-[#103645] uppercase">
                {label}
              </span>
              <span className="text-sm font-medium text-[#103645]">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
