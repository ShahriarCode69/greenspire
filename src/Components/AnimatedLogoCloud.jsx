import Marquee from "react-fast-marquee";
import img1 from "/brands/1.png";
import img2 from "/brands/2.png";
import img3 from "/brands/3.png";
import img4 from "/brands/4.png";
import img5 from "/brands/5.png";

const brandLogos = [img1, img2, img3, img4, img5];

function AnimatedLogoCloud() {
  return (
      <Marquee
        speed={90}
        pauseOnHover
        gradient
        gradientColor={"#f6f6f6"}
        className="w-[90%] max-w-4xl"// using RGB array for consistency
      >
        {brandLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center px-8">
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="h-14 object-contain"
            />
          </div>
        ))}
      </Marquee>
  );
}

export default AnimatedLogoCloud;
