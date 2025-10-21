import { ArrowRight } from "lucide-react";

import Chip from "./Chip";
import ArticleCard from "./ArticleCard";

const articles = [
  {
    title: "Top 7 Lawn Care Mistakes to Avoid This Season",
    image: "/article.png",
    tag: "Leaf Removal",
    description:
      "Avoid lawn mistakes with tips and expert advice for healthy, vibrant grass.",
  },
  {
    title: "How to Grow a Thriving Vegetable Garden Fast",
    image: "/article.png",
    tag: "Hedge Trimming",
    description:
      "Learn fast gardening tips to prep soil, water well, and boost your vegetable yield.",
  },
  {
    title: "Top Gardening Secrets Every Beginner Should",
    image: "/article.png",
    tag: "Lawn Mowing",
    description:
      "Learn essential gardening tips—planting, watering, and care—for a healthy garden.",
  },
];

export default function TrendingArticles() {
  return (
    <section className="section mx bg-[#f6f6f6]">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12 flex flex-col items-start justify-between gap-4 lg:flex-row">
            <div>
              <Chip badgeText={"Articles"} />
              <h2 className="mt-3 text-3xl font-medium text-gray-900 lg:text-5xl">
                Trending <span className="font-display italic">Articles</span>
              </h2>
            </div>
            <button className="flex items-center gap-2 rounded-full bg-[#033040] px-5 py-4 text-[#a9ffca] transition hover:bg-emerald-800">
              See All Articles <ArrowRight size={24} />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard
                imgSrc={article.image}
                title={article.title}
                description={article.description}
                tag={article.tag}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
