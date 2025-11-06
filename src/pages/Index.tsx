import { HeroSection } from "@/components/HeroSection";

const Index = () => {
  const avatarData = [
    {
      src: "https://i.pravatar.cc/150?img=1",
      alt: "Amazon Seller 1",
      fallback: "AS",
    },
    {
      src: "https://i.pravatar.cc/150?img=2",
      alt: "Amazon Seller 2",
      fallback: "BS",
    },
    {
      src: "https://i.pravatar.cc/150?img=3",
      alt: "Amazon Seller 3",
      fallback: "CS",
    },
  ];

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
        subtitle="Tell us the product and one problem you see (traffic, conversion, reviews, or something else). We'll run a focused diagnostic and return 3 prioritized findings and one immediate fix you can use this week — no agency pitch, just a clear path forward."
        infoBadgeText="42% average increase in conversion rate after fixing listing fundamentals."
        ctaButtonText="Upgrade My Conversions"
        socialProofText="More than 100,000+ sellers improved with Ecomera"
        avatars={avatarData}
      />
    </div>
  );
};

export default Index;
