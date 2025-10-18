import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-[2px]">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="">
          <img src="/logo.png" alt="GreenSpire Logo" className="w-44" />
        </div>

        {/* Nav Links */}
        <nav className="hidden items-center gap-6 text-lg md:flex">
          <a
            href="#"
            className="font-semibold text-gray-300 transition-all hover:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="font-semibold text-gray-300 transition-all hover:text-white"
          >
            About Us
          </a>
          <a
            href="#"
            className="font-semibold text-gray-300 transition-all hover:text-white"
          >
            Services
          </a>
          <a
            href="#"
            className="font-semibold text-gray-300 transition-all hover:text-white"
          >
            Blog
          </a>

          {/* Dropdown Menu */}
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="flex cursor-pointer items-center gap-1 font-semibold text-gray-300 transition-all hover:text-white focus:outline-none">
              Pages
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 w-fit rounded-xl bg-white pl-4 text-gray-500 shadow-lg">
              <DropdownMenuItem className="cursor-pointer text-lg font-semibold transition-all duration-500 ease-in hover:text-black">
                Pricing
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-lg font-semibold transition-all duration-500 ease-in hover:text-black">
                Service
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-lg font-semibold transition-all duration-500 ease-in hover:text-black">
                Service Details
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-lg font-semibold transition-all duration-500 ease-in hover:text-black">
                Projects
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-lg font-semibold transition-all duration-500 ease-in hover:text-black">
                Project Details
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-lg font-semibold transition-all duration-500 ease-in hover:text-black">
                Contact
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-lg font-semibold transition-all duration-500 ease-in hover:text-black">
                Changelog
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-lg font-semibold transition-all duration-500 ease-in hover:text-black">
                Privacy
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-lg font-semibold transition-all duration-500 ease-in hover:text-black">
                404
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* CTA Button */}
        <Button className="group cursor-pointer rounded-full px-6 py-6 text-lg text-black">
          Get Started
          <ArrowRight
            className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2"
            size={32}
          />
        </Button>
      </div>
    </header>
  );
}
