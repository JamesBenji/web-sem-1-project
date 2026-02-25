import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * HomeTransition
 *
 * Placed between <HeroSection /> and <HomeSectionTwo />.
 * 
 * What it does:
 *  - Smoothly morphs the background from brand-50 (cream/pink) → brandBlue-50 (light blue)
 *    via a sticky scroll-driven gradient wipe.
 *  - Reveals an emotional value-prop beat with staggered scroll-triggered text.
 *  - Ends with a prominent search bar — the primary CTA of the homepage.
 * 
 * Dependencies: framer-motion (already in project)
 */

const STATS = [
  { value: "200+", label: "Chef-curated recipes" },
  { value: "40+", label: "Countries represented" },
  { value: "6–24", label: "Months age range" },
  { value: "15min", label: "Average prep time" },
];

const MILESTONES = [
  {
    emoji: "🥣",
    age: "4–6 months",
    label: "First purees",
    color: "bg-brand-100",
    textColor: "text-brand-800",
  },
  {
    emoji: "🥕",
    age: "6–8 months",
    label: "Soft finger foods",
    color: "bg-orange-100",
    textColor: "text-orange-800",
  },
  {
    emoji: "🍝",
    age: "8–10 months",
    label: "Mashed textures",
    color: "bg-yellow-100",
    textColor: "text-yellow-800",
  },
  {
    emoji: "🍱",
    age: "10–12 months",
    label: "Family meals",
    color: "bg-brandBlue-100",
    textColor: "text-brandBlue-800",
  },
];

export default function HomeTransition() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring for buttery scroll feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Background gradient opacity: brand-50 fades out, brandBlue-50 fades in
  const brandOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const blueOpacity = useTransform(smoothProgress, [0.2, 0.7], [0, 1]);

  // Vertical reveal for headline
  const headlineY = useTransform(smoothProgress, [0.05, 0.35], [60, 0]);
  const headlineOpacity = useTransform(smoothProgress, [0.05, 0.35], [0, 1]);

  // Stats strip
  const statsY = useTransform(smoothProgress, [0.2, 0.5], [40, 0]);
  const statsOpacity = useTransform(smoothProgress, [0.2, 0.5], [0, 1]);

  // Milestone cards
  const cardsY = useTransform(smoothProgress, [0.35, 0.65], [50, 0]);
  const cardsOpacity = useTransform(smoothProgress, [0.35, 0.65], [0, 1]);

  // Search CTA
  const searchY = useTransform(smoothProgress, [0.5, 0.75], [40, 0]);
  const searchOpacity = useTransform(smoothProgress, [0.5, 0.75], [0, 1]);

  return (
    <div ref={containerRef} className="relative min-h-[200vh] font-sans">
      {/* Sticky viewport — this is what the user sees while scrolling through */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center px-6 md:px-12">
        
        {/* Layered background color morph */}
        <motion.div
          className="absolute inset-0 bg-brand-50"
          style={{ opacity: brandOpacity }}
        />
        <motion.div
          className="absolute inset-0 bg-brandBlue-50"
          style={{ opacity: blueOpacity }}
        />

        {/* Wavy divider SVG — morphs between sections */}
        <div className="absolute top-0 left-0 w-full pointer-events-none">
          <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
            <path
              d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
              fill="currentColor"
              className="text-brand-50"
            />
          </svg>
        </div>

        {/* Content layer */}
        <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
          
          {/* Emotional headline */}
          <motion.div style={{ y: headlineY, opacity: headlineOpacity }}>
            <p className="text-brand-500 text-lg font-semibold uppercase tracking-widest my-3">
              Every spoonful matters
            </p>
            <h2
              className="text-4xl md:text-6xl font-bold text-brand-950 leading-tight mb-4"
            >
              The first 1,000 days shape{" "}
              <span className="text-brand-600 italic">a lifetime</span> of eating.
            </h2>
            <p className="text-brand-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We make the weaning journey joyful — with recipes from around the world,
              interactive cooking tools, and nutrition guidance built for your baby's stage.
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            style={{ y: statsY, opacity: statsOpacity }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-10"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-5 border border-brand-100 shadow-sm"
              >
                <div className="text-3xl font-black text-brand-600">{stat.value}</div>
                <div className="text-brand-700 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Milestone age-band cards */}
          <motion.div
            style={{ y: cardsY, opacity: cardsOpacity }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.age}
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.05 }}
                className={`${m.color} ${m.textColor} rounded-full px-5 py-2.5 flex items-center gap-2 text-sm font-semibold cursor-pointer shadow-sm`}
              >
                <span className="text-xl">{m.emoji}</span>
                <span>{m.age}</span>
                <span className="opacity-60">·</span>
                <span className="font-normal opacity-80">{m.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Search CTA — the primary goal */}
          <motion.div style={{ y: searchY, opacity: searchOpacity }}>
            <p className="text-brand-600 text-sm mb-3 font-medium">
              Find the perfect recipe for your baby's stage →
            </p>
            <div className="flex items-center bg-white rounded-full shadow-xl border border-brand-100 overflow-hidden max-w-xl mx-auto">
              <span className="pl-5 text-brand-400">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search recipes, e.g. sweet potato 6 months"
                className="flex-1 px-4 py-4 text-brand-900 placeholder:text-brand-400 outline-none bg-transparent text-sm"
              />
              <button className="m-1.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors shrink-0">
                Search
              </button>
            </div>
            <p className="text-brand-400 text-xs mt-3">
              Try: carrot purée · mango oat · lentil soup · finger foods
            </p>
          </motion.div>

        </div>

        {/* Bottom wavy transition into brandBlue */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none">
          <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
            <path
              d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,80 L0,80 Z"
              fill="currentColor"
              className="text-brandBlue-50"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}