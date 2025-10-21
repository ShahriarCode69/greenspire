import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="section flex-center h-[750px] bg-[url('/callToAction.png')] bg-center">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="w-[340px] rounded-2xl bg-[#082228] p-8 text-white shadow-xl sm:w-[520px]">
            <h2 className="mb-2 text-center text-3xl font-semibold">
              Ready to Get Started
            </h2>
            <p className="mb-6 text-center text-base text-gray-400">
              Let our expert team handle the hard work while you enjoy a lush,
              beautiful yard.
            </p>

            <form className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-1/2 rounded-full border-1 border-[#617175] bg-[#394e53] px-4 py-3 font-medium text-[#aab6b9] placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-1/2 rounded-full border-1 border-[#617175] bg-[#394e53] px-4 py-3 font-medium text-[#aab6b9] placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-full border-1 border-[#617175] bg-[#394e53] px-4 py-3 font-medium text-[#aab6b9] placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
              <Button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-green-300 py-6 font-medium text-gray-900 transition hover:bg-green-400"
              >
                Submit
                <ArrowRight
                  className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2"
                  size={32}
                />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
