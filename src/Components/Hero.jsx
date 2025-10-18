import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="mx animate-zoom-bg relative flex min-h-screen flex-col items-end justify-baseline bg-[url('/heroBg.png')] bg-cover bg-center">
      <div className="section container flex min-h-screen flex-col items-end-safe justify-between pb-26 lg:flex-row lg:items-end">
        <div className="flex flex-col gap-4">
          <span className="font-medium text-white">[Lawn Mowing]</span>
          <h1 className="heading-xl">
            Bringing Life to <br /> Lawns &{" "}
            <span className="font-display italic">Gardens</span>
          </h1>
          <p className="hero-description">
            Expert Lawn Mowing & Gardening Services, Customized to Suit Your
            Property’s Unique Needs — Because Every Outdoor Space Deserves
            Expert Care.
          </p>
          <div>
            <Button className="group cursor-pointer rounded-full px-6 py-6 text-lg text-black">
              Get Started
              <ArrowRight
                className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2"
                size={32}
              />
            </Button>
            <Button
              className="group relative cursor-pointer rounded-full px-6 py-6 text-lg text-white"
              variant="link"
              size="xl"
            >
              <div className="absolute bottom-6 h-[1px] w-[80%] bg-white"></div>
              Get Started
              <ArrowRight
                className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2"
                size={32}
              />
            </Button>
          </div>
        </div>
        <div className="inline-flex w-fit flex-col self-start rounded-lg border-2 border-white/20 bg-white/20 py-4 pr-12 pl-4 backdrop-blur-xs lg:w-fit lg:self-end">
          <h3 className="text-3xl text-white">5k+</h3>
          <p className="mb-6 text-white">Satisfied Clients</p>
          <div className="flex -space-x-2 *:data-[slot=avatar]:ring-1 *:data-[slot=avatar]:ring-white">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
