import { HeroSection } from "@/components/HeroSection";
import { Banner } from "@/components/ui/banner";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-canvas-yellow">
      {/* Announcement Banner */}
      <Banner className="bg-primary text-white py-3 overflow-hidden">
        <div className="w-full">
          {/* Horizontal scrolling for all screen sizes */}
          <div className="relative">
            <div className="animate-marquee whitespace-nowrap inline-block">
              <span className="inline-flex items-center gap-2 text-sm font-medium px-4">
                <span>Step 1: Download the Dashboard</span>
                <ArrowRight size={16} className="shrink-0" />
                <span>Step 2: Signup Free</span>
                <ArrowRight size={16} className="shrink-0" />
                <span>Step 3: Fix Your PPC This Week</span>
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-medium px-4">
                <span>Step 1: Download the Dashboard</span>
                <ArrowRight size={16} className="shrink-0" />
                <span>Step 2: Signup Free</span>
                <ArrowRight size={16} className="shrink-0" />
                <span>Step 3: Fix Your PPC This Week</span>
              </span>
            </div>
          </div>
        </div>
      </Banner>
      
      <HeroSection
        title={
          <>
            What's eating your Amazon{" "}
            <span className="text-primary">PPC budget?</span>
          </>
        }
        animatedTexts={["wasted bids.", "high ACoS.", "dead keywords.", "manual guesswork."]}
        subtitle="You're spending money on ads every single day, but you don't know which campaigns are profitable, which keywords are draining you, or why your ACoS keeps climbing. This free PPC Automation Dashboard gives you the exact system to see it all clearly and fix it fast."
        infoBadgeText="Sellers using this dashboard have cut ACoS by 30%+ within the first 3 weeks."
        ctaButtonText="Get Free PPC Dashboard"
      />
    </div>
  );
};

export default Index;
