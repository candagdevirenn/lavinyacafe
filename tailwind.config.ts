import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        emerald: {
          DEFAULT: "hsl(var(--emerald))",
          foreground: "hsl(var(--emerald-foreground))",
          deep: "hsl(var(--emerald-deep))",
          soft: "hsl(var(--emerald-soft))",
        },
        cream: {
          DEFAULT: "hsl(var(--cream))",
          warm: "hsl(var(--cream-warm))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          foreground: "hsl(var(--gold-foreground))",
          soft: "hsl(var(--gold-soft))",
          deep: "hsl(var(--gold-deep))",
        },
        charcoal: "hsl(var(--charcoal))",
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
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-emerald': 'var(--gradient-emerald)',
        'gradient-gold': 'var(--gradient-gold)',
        'gradient-amber-glow': 'var(--gradient-amber-glow)',
        'gradient-fade-cream': 'var(--gradient-fade-cream)',
      },
      boxShadow: {
        elegant: 'var(--shadow-elegant)',
        gold: 'var(--shadow-gold)',
        soft: 'var(--shadow-soft)',
        amber: 'var(--shadow-amber)',
      },
      transitionTimingFunction: {
        elegant: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(60px)", filter: "blur(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1.18)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1.1) translate(0, 0)" },
          "50%": { transform: "scale(1.18) translate(-1.5%, -1.5%)" },
          "100%": { transform: "scale(1.1) translate(0, 0)" },
        },
        "shimmer": {
          "0%, 100%": { opacity: "0.6", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(6px)" },
        },
        "mask-rise": {
          "0%": { transform: "translateY(110%)" },
          "100%": { transform: "translateY(0)" },
        },
        "letter-glow": {
          "0%, 100%": { textShadow: "0 0 20px hsl(38 44% 60% / 0.3)" },
          "50%": { textShadow: "0 0 40px hsl(38 44% 60% / 0.6)" },
        },
        "splash-grow": {
          "0%": { transform: "scaleY(0)", opacity: "0" },
          "60%": { opacity: "1" },
          "100%": { transform: "scaleY(1)", opacity: "1" },
        },
        "splash-particle": {
          "0%": { transform: "translateY(0) scale(0)", opacity: "0" },
          "20%": { opacity: "1" },
          "100%": { transform: "translateY(-120px) scale(1)", opacity: "0" },
        },
        "splash-rings": {
          "0%": { transform: "scale(0.4)", opacity: "0.8" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gold-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 hsl(38 44% 60% / 0.6)" },
          "50%": { boxShadow: "0 0 0 16px hsl(38 44% 60% / 0)" },
        },
        "marquee-line": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "tilt-in": {
          "0%": { opacity: "0", transform: "perspective(900px) rotateX(20deg) translateY(60px)" },
          "100%": { opacity: "1", transform: "perspective(900px) rotateX(0) translateY(0)" },
        },
        "amber-flicker": {
          "0%, 100%": { opacity: "0.85", filter: "brightness(1)" },
          "20%": { opacity: "1", filter: "brightness(1.15)" },
          "55%": { opacity: "0.9", filter: "brightness(0.95)" },
          "75%": { opacity: "1", filter: "brightness(1.1)" },
        },
        "drift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(8px, -10px)" },
          "66%": { transform: "translate(-6px, 6px)" },
        },
        "stagger-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 1.6s ease-out forwards",
        "slow-zoom": "slow-zoom 24s ease-out infinite alternate",
        "ken-burns": "ken-burns 28s ease-in-out infinite",
        "shimmer": "shimmer 2.4s ease-in-out infinite",
        "letter-glow": "letter-glow 3s ease-in-out infinite",
        "float-y": "float-y 4s ease-in-out infinite",
        "gold-pulse": "gold-pulse 2.4s ease-out infinite",
        "marquee-line": "marquee-line 2.4s ease-in-out infinite",
        "tilt-in": "tilt-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "amber-flicker": "amber-flicker 6s ease-in-out infinite",
        "drift": "drift 14s ease-in-out infinite",
        "stagger-up": "stagger-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
