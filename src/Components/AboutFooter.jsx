import { FiArrowUpRight, FiFacebook, FiInstagram } from "react-icons/fi";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";

const navigationLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Home v1", href: "/" },
      { label: "Home v2", href: "/home-v2" },
      { label: "Pricing", href: "/pricing" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Services", href: "/services" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Changelog", href: "/changelog" },
      { label: "404", href: "/404" },
    ],
  },
];

const AboutFooter = () => {
  return (
    <footer className="relative overflow-hidden bg-[#033040] text-[#eaf6f1]">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10 lg:gap-20 lg:py-24 xl:px-0">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
              <span className="block text-white">Subscribe to Our</span>
              <span className="font-display mt-2 block text-[#cfe9e0] italic">
                Newsletter
              </span>
            </h2>
          </div>

          <form className="flex w-full max-w-xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
            <input
              type="email"
              required
              aria-label="Email address"
              placeholder="Enter your email address"
              className="h-14 w-full rounded-full border border-[#30525b] bg-transparent px-6 text-base text-[#eaf6f1] placeholder-[#7aa1a8] outline-none sm:h-12 sm:px-8"
            />
            <button
              type="button"
              className="group inline-flex items-center gap-12 rounded-full border border-[#9ae9bc] bg-[#b9ffd6] px-1 py-1 text-lg font-semibold text-slate-900 shadow-sm transition hover:border-[#012c3d] hover:bg-[#082228] focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:outline-none"
            >
              <span className="ml-6 transition font-medium group-hover:text-[#b9ffd6]">
                Subscribe
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#012c3d] text-[#b9ffd6] transition group-hover:bg-[#b9ffd6] group-hover:text-[#012c3d]">
                <FiArrowUpRight className="h-6 w-6" strokeWidth={2.5} />
              </span>
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-md flex-col gap-6 lg:max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="GreenSpire logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-base leading-relaxed text-[#b7ccd0]">
              We're dedicated to making your outdoors look its best. From
              regular lawn mowing to complete garden care, our experienced team
              delivers reliable service.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:gap-x-12">
            {navigationLinks.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold tracking-[0.2em] text-[#a1c3c9]">
                  {column.title.toUpperCase()}
                </h3>
                <ul className="space-y-2 text-base text-[#d1e4e1]">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="transition hover:text-[#b9ffd6]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 border-b border-[#2d4a54] pb-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#7da4aa]">
            &copy; 2025 Copywrite Pentaclay. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/90">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3e5f68] text-white transition hover:border-[#b9ffd6] hover:text-[#b9ffd6]"
            >
              <FiInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3e5f68] text-white transition hover:border-[#b9ffd6] hover:text-[#b9ffd6]"
            >
              <FiFacebook className="h-5 w-5" />
            </a>
            <a
              href="https://tiktok.com"
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3e5f68] text-white transition hover:border-[#b9ffd6] hover:text-[#b9ffd6]"
            >
              <FaTiktok className="h-5 w-5" />
            </a>
            <a
              href="https://x.com"
              aria-label="X"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3e5f68] text-white transition hover:border-[#b9ffd6] hover:text-[#b9ffd6]"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
          </div>
          <div className="text-sm text-[#7da4aa]">
            <a
              href="/privacy-policy"
              className="transition hover:text-[#b9ffd6]"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AboutFooter;
