import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Clock, Leaf, ShieldCheck } from "lucide-react";

const items = [
  {
    img: "https://framerusercontent.com/images/4o5woq7zsRmvlzePRSMa6XjckZ8.png?width=826&height=1237",
    icon: <Clock className="h-6 w-6 text-green-600" />,
    title: "Reliable & On-Time Service",
    text: "Our team values your time and ensures every visit is punctual, efficient, and completed to perfection.",
  },
  {
    img: "https://framerusercontent.com/images/4o5woq7zsRmvlzePRSMa6XjckZ8.png?width=826&height=1237",
    icon: <Leaf className="h-6 w-6 text-green-600" />,
    title: "Tailored Lawn & Garden Solutions",
    text: "Crisp, defined edges that elevate your curb appeal and give your landscape a pristine look.",
  },
  {
    img: "https://framerusercontent.com/images/4o5woq7zsRmvlzePRSMa6XjckZ8.png?width=826&height=1237",
    icon: <ShieldCheck className="h-6 w-6 text-green-600" />,
    title: "Fully Licensed & Insured",
    text: "Clean, sharp edges and professional care to keep your landscape looking amazing year-round.",
  },
  {
    img: "https://framerusercontent.com/images/4o5woq7zsRmvlzePRSMa6XjckZ8.png?width=826&height=1237",
    icon: <ShieldCheck className="h-6 w-6 text-green-600" />,
    title: "Fully Licensed & Insured",
    text: "Clean, sharp edges and professional care to keep your landscape looking amazing year-round.",
  },
  {
    img: "https://framerusercontent.com/images/4o5woq7zsRmvlzePRSMa6XjckZ8.png?width=826&height=1237",
    icon: <ShieldCheck className="h-6 w-6 text-green-600" />,
    title: "Fully Licensed & Insured",
    text: "Clean, sharp edges and professional care to keep your landscape looking amazing year-round.",
  },
  {
    img: "https://framerusercontent.com/images/4o5woq7zsRmvlzePRSMa6XjckZ8.png?width=826&height=1237",
    icon: <ShieldCheck className="h-6 w-6 text-green-600" />,
    title: "Fully Licensed & Insured",
    text: "Clean, sharp edges and professional care to keep your landscape looking amazing year-round.",
  },
  {
    img: "https://framerusercontent.com/images/4o5woq7zsRmvlzePRSMa6XjckZ8.png?width=826&height=1237",
    icon: <ShieldCheck className="h-6 w-6 text-green-600" />,
    title: "Fully Licensed & Insured",
    text: "Clean, sharp edges and professional care to keep your landscape looking amazing year-round.",
  },
];

export default function CarouselSection() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  return (
    <section className="w-screen overflow-hidden">
      <Carousel
        className="w-full"
        plugins={[autoplay.current]}
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className="w-fit">
              <div className="border h-auto grid grid-cols-1 md:grid-cols-3">
                {/* Left: Image */}
                <div className="relative h-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-[350px] w-[320px] rounded-xl object-cover"
                  />
                </div>

                {/* Right: Text Box */}
                <Card className="flex bg-white/90 px-8 backdrop-blur-sm">
                  <CardContent className="space-y-4 text-center md:text-left">
                    <div className="flex justify-center md:justify-start">
                      {item.icon}
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-gray-600">{item.text}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation buttons */}
        <div className="absolute bottom-6 left-30 flex -translate-x-1/2 gap-4">
          <CarouselPrevious className="rounded-full bg-white/70 hover:bg-white" />
          <CarouselNext className="rounded-full bg-white/70 hover:bg-white" />
        </div>
      </Carousel>
    </section>
  );
}
