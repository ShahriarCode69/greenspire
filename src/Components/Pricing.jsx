import CustomPlan from "./CustomPlan";
import StarterPlanCard from "./StarterPlanCard";
import PremiumPlan from "./PremiumPlan"
import Badge from "./Badge";


const Pricing = () => {
  return (
    <section className="section mx container">
      <div className="flex-center flex-col">
        <Badge badgeText="Pricing" />
        <h2 className="heading-md mb-4 text-center !text-black">
          Affordable Lawn
          <br /> <span className="font-display italic">Care Plans</span>
        </h2>
        <p className="mb-12 max-w-[60ch] text-center">
          Whether you need a one-time garden cleanup or regular lawn care, our
          pricing is clear, competitive, and designed to fit your needs.
        </p>
      </div>
      <div className="mb-4 flex flex-col justify-between gap-4 xl:flex xl:flex-row">
        <StarterPlanCard />
        <PremiumPlan />
      </div>
      <CustomPlan />
    </section>
  );
};

export default Pricing;
