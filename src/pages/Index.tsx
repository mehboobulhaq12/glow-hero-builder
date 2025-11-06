import { HeroSection } from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="w-full bg-canvas-yellow min-h-screen">
      <HeroSection
        title={
          <>
            What's the single thing stopping your <br /> Amazon{" "}
            <span className="text-primary">growth?</span>
          </>
        }
        animatedTexts={["traffic", "conversion", "reviews", "growth"]}
        subtitle="Tell us your product and one problem you're facing (traffic, conversion, reviews). We'll run a quick diagnostic and share 3 key findings + one fix you can apply this week."
        infoBadgeText="42% average increase in conversion rate after fixing listing fundamentals."
        ctaButtonText="Upgrade My Conversions"
      />
    </div>
  );
};

export default Index;
