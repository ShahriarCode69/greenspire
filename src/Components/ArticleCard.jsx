import { ArrowUpRight } from "lucide-react";

const ArticleCard = ({ imgSrc, tag, title, description }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={imgSrc}
          alt={title}
          className="w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-110 sm:h-76 lg:aspect-square"
        />
        <span className="absolute bottom-4 left-4 rounded-md bg-white px-3 py-1 text-sm font-medium text-gray-800 shadow">
          {tag}
        </span>
      </div>
      <h3 className="mt-4 text-2xl leading-snug font-medium text-gray-900 md:-order-1 md:mt-0 md:mb-4">
        {title}
      </h3>
      <div className="md:mt-4">
        <p className="mb-5 text-sm text-gray-600">{description}</p>
        <button className="flex items-center gap-2 font-medium text-emerald-900 hover:underline">
          Read More
          <span className="rounded-full bg-[#033040] p-2 text-[#a9ffca] transition-all duration-500 group-hover:bg-[#a9ffca] group-hover:text-[#033040]">
            <ArrowUpRight size={20} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
