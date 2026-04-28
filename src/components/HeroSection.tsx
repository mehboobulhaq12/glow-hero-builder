import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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

    // Slide-up slot-machine rotation, 2.5s each, infinite loop
    React.useEffect(() => {
      const interval = setInterval(() => {
        setTextIndex((prev) => (prev + 1) % animatedTexts.length);
      }, 2500);
      return () => clearInterval(interval);
    }, [animatedTexts.length]);

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
            <span className="block mt-3 text-primary h-[1.2em] overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={textIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="block"
                >
                  {animatedTexts[textIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

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
