import { HeroSection } from "@/components/HeroSection";
import { OnboardingForm } from "@/components/OnboardingForm";
import { Banner } from "@/components/ui/banner";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Announcement Banner */}
      <Banner className="bg-primary text-white py-3 overflow-hidden">
        <div className="w-full">
          {/* Horizontal scrolling for all screen sizes */}
          <div className="relative">
            <div className="animate-marquee whitespace-nowrap inline-block">
              <span className="inline-flex items-center gap-2 text-sm font-medium px-4">
                <span>Step 1: Fill out the onboarding form</span>
                <ArrowRight size={16} className="shrink-0" />
                <span>Step 2: Book your discovery call</span>
                <ArrowRight size={16} className="shrink-0" />
                <span>Step 3: Get your free growth playbook</span>
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-medium px-4">
                <span>Step 1: Fill out the onboarding form</span>
                <ArrowRight size={16} className="shrink-0" />
                <span>Step 2: Book your discovery call</span>
                <ArrowRight size={16} className="shrink-0" />
                <span>Step 3: Get your free growth playbook</span>
              </span>
            </div>
          </div>
        </div>
      </Banner>
      
      <div className="bg-canvas-yellow">
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
      >
        <div className="mt-12">
          <OnboardingForm />
        </div>
      </HeroSection>
      </div>
    </div>
  );
};

export default Index;
