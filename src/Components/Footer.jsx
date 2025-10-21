import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Links = [
  {
    id: 1,
    linkName: "Home",
    linkHref: "#hero",
  },
  {
    id: 2,
    linkName: "About Us",
    linkHref: "#about",
  },
  {
    id: 3,
    linkName: "Services",
    linkHref: "#services",
  },
  {
    id: 4,
    linkName: "Blogs",
    linkHref: "#blogs",
  },
  {
    id: 5,
    linkName: "Contact Us",
    linkHref: "#contact",
  },
];

const socialIcons = [
  {
    id: 1,
    socialIcon: <FaInstagram size={22} />,
    socialLink: "https://www.instagram.com/",
  },
  {
    id: 2,
    socialIcon: <FaFacebook size={22} />,
    socialLink: "https://www.facebook.com/",
  },
  {
    id: 3,
    socialIcon: <FaTiktok size={22} />,
    socialLink: "https://www.tiktok.com/",
  },
  {
    id: 4,
    socialIcon: <FaXTwitter size={22} />,
    socialLink: "https://twitter.com/",
  },
];

const Footer = () => {
  return (
    <section className="mx w-full bg-[#033040] pt-20 pb-6 text-[#ccc]">
      <div className="container">
        <div className="justify-between xl:flex">
          <p className="mb-4 max-w-[45ch]">
            We’re dedicated to making your outdoors look its best. From regular
            lawn mowing to complete garden care, our experienced team delivers
            reliable service with a personal touch.
          </p>
          <div className="flex flex-col">
            <div className="flex flex-col gap-4 md:flex-row">
              {Links.map((link) => (
                <a className="text-lg hover:text-white" key={link.id} href={link.linkHref}>
                  {link.linkName}
                </a>
              ))}
            </div>

            {/* ✅ Added background & circle shape here */}
            <div className="mt-4 mb-4 flex gap-4 xl:self-end">
              {socialIcons.map((social) => (
                <a
                  key={social.id}
                  href={social.socialLink}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-1 border-[#a9ffca] bg-[#a9ffca] text-[#033040] transition-all duration-300 hover:bg-[#033040] hover:text-[#a9ffca]"
                >
                  {social.socialIcon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <a
          href="#hero"
          className="bg-gradient-to-t from-white to-transparent bg-clip-text text-center text-[12.3vw] font-medium text-transparent"
        >
          GreenSpire
        </a>
        <div className="flex flex-col justify-between gap-4 text-sm lg:flex-row">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#">
            Copyright {new Date().getFullYear()} Pentaclay. All rights reserved.
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
