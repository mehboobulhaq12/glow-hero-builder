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
          "relative container mx-auto flex flex-col items-center justify-center text-center py-24 md:py-40 px-4 overflow-hidden bg-canvas-yellow",
          className
        )}
      >
        {/* Top Yellow Glow - Animated */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-60 bg-gradient-to-b from-primary/60 via-primary/20 to-transparent blur-3xl rounded-full pointer-events-none animate-pulse"></div>

        <div className="relative z-10 max-w-4xl">
          {/* Headline */}
          <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            {title}
            <span className="block mt-3 text-primary">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Dashboard Mockup */}
          <div className="mt-12 mb-12 w-full max-w-[780px] mx-auto">
            <div className="relative">
              {/* Laptop frame */}
              <div className="relative bg-[hsl(222,47%,18%)] rounded-2xl p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] ring-1 ring-black/10">
                <div className="relative overflow-hidden rounded-lg bg-white shadow-inner">
                  <img
                    src={dashboardImage}
                    alt="PPC Management Dashboard preview"
                    className="block w-full h-auto"
                  />

                  {/* Animated cursor */}
                  <div
                    className="pointer-events-none absolute top-0 left-0 z-20"
                    style={{ animation: "cursor-path 6s ease-in-out infinite" }}
                  >
                    <div className="relative" style={{ animation: "cursor-click 6s ease-in-out infinite" }}>
                      {/* Ripple */}
                      <span
                        className="absolute left-1 top-1 block h-4 w-4 rounded-full border-2 border-primary opacity-0"
                        style={{ animation: "cursor-ripple 6s ease-in-out infinite" }}
                      />
                      {/* Cursor SVG */}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                        <path
                          d="M5 3 L5 19 L9.5 14.5 L12 20.5 L14.5 19.5 L12 13.5 L18 13.5 Z"
                          fill="white"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Laptop bottom stand */}
              <div className="mx-auto h-2 w-[55%] rounded-b-xl bg-[hsl(222,47%,22%)] shadow-md" />
              <div className="mx-auto h-1 w-[30%] rounded-b-md bg-black/10 blur-[2px]" />
              {/* Soft outer glow / shadow */}
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-black/5 blur-2xl" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        </div>

        {/* Badge */}
        <div className="mt-10 inline-flex items-center rounded-lg bg-secondary text-foreground px-4 py-2 text-sm font-medium border border-primary shadow-sm">
          {infoBadgeText}
        </div>

        {/* CTA */}
        <Button
          size="lg"
          className="mt-6 px-10 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl shadow-md transition-all hover:scale-105"
          asChild
        >
          <a href="https://calendar.notion.so/meet/murtazahamza/kwel3pyw" target="_blank" rel="noopener noreferrer">
            {ctaButtonText}
          </a>
        </Button>

        {/* Multi-step Onboarding Form */}
        {children}
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
