import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import dashboardImage from "@/assets/ppc-dashboard.png";

export interface HeroSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'children'> {
  title: React.ReactNode;
  animatedTexts: string[];
  subtitle: string;
  infoBadgeText: string;
  ctaButtonText: string;
  cta?: React.ReactNode;
  children?: React.ReactNode;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title,
      animatedTexts,
      subtitle,
      infoBadgeText,
      ctaButtonText,
      cta,
      children,
      ...props
    },
    ref
  ) => {
    const [textIndex, setTextIndex] = React.useState(0);
    const [displayText, setDisplayText] = React.useState("");
    const [isDeleting, setIsDeleting] = React.useState(false);

    // Continuous typewriter animation
    React.useEffect(() => {
      const fullText = animatedTexts[textIndex];

      const handleTyping = () => {
        if (isDeleting) {
          setDisplayText((prev) => prev.substring(0, prev.length - 1));
        } else {
          setDisplayText((prev) => fullText.substring(0, prev.length + 1));
        }
      };

      const typingSpeed = isDeleting ? 50 : 100;
      const typeInterval = setInterval(handleTyping, typingSpeed);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % animatedTexts.length);
      }

      return () => clearInterval(typeInterval);
    }, [displayText, isDeleting, textIndex, animatedTexts]);

    return (
      <section
        ref={ref}
        {...props}
        className={cn(
          "relative container mx-auto flex flex-col items-center justify-center text-center py-16 md:py-24 px-4 overflow-hidden",
          className
        )}
      >
        {/* Top Yellow Glow - Animated */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-60 bg-gradient-to-b from-primary/60 via-primary/20 to-transparent blur-3xl rounded-full pointer-events-none animate-pulse"></div>

        <div className="relative z-10 max-w-4xl">
          {/* Headline */}
          <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-[0.98] sm:leading-none">
            {title}
            <span className="block mt-0 text-primary">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Dashboard Image */}
          <div className="mt-4 mb-4 w-full max-w-[860px] mx-auto">
            <div className="aspect-[1.48/1] overflow-hidden rounded-[24px]">
              <img
                src={dashboardImage}
                alt="PPC Management Dashboard preview"
                className="block h-full w-full scale-[1.12] object-cover object-[center_62%]"
              />
            </div>
          </div>

          {/* Subtitle */}
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        </div>

        {/* Badge */}
        <div className="mt-10 inline-flex items-center rounded-lg bg-secondary text-foreground px-4 py-2 text-sm font-medium border border-primary shadow-sm">
          {infoBadgeText}
        </div>

        {/* CTA */}
        {cta ?? (
          <Button
            size="lg"
            className="mt-6 px-10 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl shadow-md transition-all hover:scale-105"
            asChild
          >
            <a href="https://calendar.notion.so/meet/murtazahamza/kwel3pyw" target="_blank" rel="noopener noreferrer">
              {ctaButtonText}
            </a>
          </Button>
        )}

        {/* Multi-step Onboarding Form */}
        {children}
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
