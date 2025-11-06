import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export interface HeroSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  animatedTexts: string[];
  subtitle: string;
  infoBadgeText: string;
  ctaButtonText: string;
  socialProofText: string;
  avatars: {
    src: string;
    alt: string;
    fallback: string;
  }[];
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
      socialProofText,
      avatars,
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
        {/* Top Yellow Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-40 bg-gradient-to-b from-yellow-300/40 via-yellow-200/10 to-transparent blur-2xl rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl">
          {/* Headline */}
          <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            {title}
            <span className="block mt-3 text-primary">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        </div>

        {/* CTA */}
        <Button
          size="lg"
          className="mt-10 px-10 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl shadow-md transition-all hover:scale-105"
        >
          {ctaButtonText}
        </Button>

        {/* Social Proof */}
        <div className="mt-6 flex items-center justify-center flex-wrap gap-4">
          <div className="flex -space-x-4">
            {avatars.map((avatar, index) => (
              <Avatar
                key={index}
                className="border-2 border-background shadow-sm"
              >
                <AvatarImage src={avatar.src} alt={avatar.alt} />
                <AvatarFallback>{avatar.fallback}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            {socialProofText}
          </p>
        </div>

        {/* Glassy Onboarding Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 w-full max-w-md mx-auto bg-card/60 backdrop-blur-md border border-primary rounded-2xl shadow-lg p-6 flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Product Name"
            className="border border-input rounded-md px-4 py-2 focus:ring-2 focus:ring-ring outline-none bg-background"
          />
          <input
            type="text"
            placeholder="Primary Problem (traffic, conversion, etc.)"
            className="border border-input rounded-md px-4 py-2 focus:ring-2 focus:ring-ring outline-none bg-background"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-input rounded-md px-4 py-2 focus:ring-2 focus:ring-ring outline-none bg-background"
          />
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-xl">
            Next →
          </Button>
        </motion.form>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
