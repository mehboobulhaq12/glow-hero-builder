import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "cursor-path": {
          "0%":   { transform: "translate(10%, 15%)" },
          "10%":  { transform: "translate(28%, 22%)" },
          "15%":  { transform: "translate(28%, 22%)" },
          "25%":  { transform: "translate(60%, 30%)" },
          "30%":  { transform: "translate(60%, 30%)" },
          "40%":  { transform: "translate(85%, 45%)" },
          "45%":  { transform: "translate(85%, 45%)" },
          "55%":  { transform: "translate(50%, 60%)" },
          "60%":  { transform: "translate(50%, 60%)" },
          "70%":  { transform: "translate(20%, 75%)" },
          "75%":  { transform: "translate(20%, 75%)" },
          "85%":  { transform: "translate(75%, 85%)" },
          "90%":  { transform: "translate(75%, 85%)" },
          "100%": { transform: "translate(10%, 15%)" },
        },
        "cursor-click": {
          "0%, 13%, 17%, 28%, 32%, 43%, 47%, 58%, 62%, 73%, 77%, 88%, 92%, 100%": { transform: "scale(1)" },
          "15%, 30%, 45%, 60%, 75%, 90%": { transform: "scale(0.8)" },
        },
        "cursor-ripple": {
          "0%, 13%, 18%, 28%, 33%, 43%, 48%, 58%, 63%, 73%, 78%, 88%, 93%, 100%": { transform: "scale(0.4)", opacity: "0" },
          "15%, 30%, 45%, 60%, 75%, 90%": { transform: "scale(0.6)", opacity: "0.8" },
          "18%, 33%, 48%, 63%, 78%, 93%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee 20s linear infinite",
        "cursor-path": "cursor-path 12s ease-in-out infinite",
        "cursor-click": "cursor-click 12s ease-in-out infinite",
        "cursor-ripple": "cursor-ripple 12s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
