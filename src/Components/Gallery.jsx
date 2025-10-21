import Chip from "./Chip";

const items = [
  {
    id: 1,
    img: "/gallery/1.png",
    title: "Tree Cutting",
    text: "At look at full-service jobs where we’ve handled mowing, planting, trimming, and more..",
    className: "lg:col-span-2 lg:row-span-10",
  },
  {
    id: 2,
    img: "/gallery/2.png",
    title: "Complete Yard Care",
    text: "Polished, sharp edges that boost your home’s curb appeal effortlessly.",
    className: "lg:col-start-3 lg:col-span-2 lg:row-span-5",
  },
  {
    id: 3,
    img: "/gallery/3.png",
    title: "Flower Maze Trim",
    text: "Perfectly trimmed edges that make your outdoor space look neat and inviting.",
    className: "lg:col-start-5 lg:col-span-2 lg:row-span-5",
  },
  {
    id: 4,
    img: "/gallery/4.png",
    title: "Garden Renovation",
    text: "Clean-cut edges that keep your landscape looking flawless year-round.",
    className: "lg:col-start-3 lg:col-span-4 lg:row-start-6 lg:row-span-5",
  },
];

const Gallery = () => {
  return (
    <section className="section mx bg-[#f6f6f6] pb-12">
      <div className="container">
        <div className="flex-center flex-col">
          <Chip badgeText="Gallery" />
          <h2 className="heading-md mb-12 text-center !text-black">
            From Patchy Lawns to <br />{" "}
            <span className="font-display italic">Explore Our Gallery</span>
          </h2>
        </div>
        <div className="parent grid auto-rows-[250px] grid-cols-1 gap-4 p-4 sm:auto-rows-[300px] sm:grid-cols-2 sm:p-6 lg:h-[65vh] lg:grid-cols-6 lg:grid-rows-10">
          {items.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl ${item.className}`}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent" />

              {/* Text */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-white sm:p-6">
                <h3 className="text-lg font-semibold sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm opacity-90 sm:text-base">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
