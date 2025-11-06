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
        subtitle="Tell us your product and one problem you're facing (traffic, conversion, reviews). We'll run a quick diagnostic and share 3 key findings + one fix you can apply this week."
        infoBadgeText=""
        ctaButtonText="Upgrade My Conversions"
        socialProofText="More than 100,000+ sellers improved with Ecomera"
        avatars={avatarData}
      />
    </div>
  );
};

export default Index;
