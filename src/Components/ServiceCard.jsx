import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ bgImg, icon, title, description }) {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Run once initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showExpanded = hovered || isMobile;

  return (
    <div
      className="group relative h-[430px] w-[310px] lg:w-[366px] cursor-pointer overflow-hidden rounded-xl"
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
    >
      {/* Background Image */}
      <img
        src={bgImg} // replace with your image path
        alt="Grass Adjustment"
        className="h-[430px] object-cover"
      />

      {/* Overlay Container */}
      <motion.div
        className="absolute right-4 bottom-4 left-4 rounded-xl bg-[#052C2B] p-5 text-white"
        initial={{ height: "125px" }}
        animate={{
          height: showExpanded ? "280px" : "125px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#052C2B]">
          {icon}
        </div>
        {/* Title */}
        <h3 className="mt-3 text-2xl font-semibold text-green-300">{title}</h3>
        {/* Expanded Content */}
        <AnimatePresence>
          {showExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="mt-2"
            >
              <p className="mb-4 text-base leading-snug text-gray-300">
                {description}
              </p>

              <button className="flex items-center gap-2 rounded-full bg-[#a9ffca] px-4 py-3 text-sm font-medium text-[#052C2B] transition hover:bg-green-300">
                See Details <ArrowRight size={16} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
