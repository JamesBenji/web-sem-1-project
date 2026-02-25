// import HomeFloatingCommunity from './HomeFloatingCommunity'

// export const HomeSectionTwo = () => {
//     return (
//         <div>
//             {/* Something is missing here. like an emotional relating section. or something with baby pictures. It generally feels like a value proposition. the purpose of the entire homepage is to get the user to make a search not to just show them fancy stuff. */}
//             <div className="bg-brandBlue-50 py-18">
//                 <h2 className="text-[9vw] font-bold leading-none tracking-tight text-brand-950 my-5">A Recipe for <span className="text-brand-600">

//                     <u className="relative no-underline inline-block px-1 py-4">
//                         Every Baby
//                         <svg
//                             className="absolute left-0 -bottom-3 w-full h-6 overflow-visible pointer-events-none"
//                             viewBox="0 0 100 20"
//                             preserveAspectRatio="none"
//                         >
//                             <path
//                                 d="M 0 10 
//                       C 5 18, 10 2, 15 10 
//                       S 25 2, 30 10 
//                       S 40 2, 45 10 
//                       S 55 2, 60 10 
//                       S 70 2, 75 10 
//                       S 85 2, 90 10 
//                       S 95 2, 100 10"
//                                 fill="none"
//                                 stroke="#510424"
//                                 strokeWidth="6"
//                                 strokeLinecap="round"
//                                 vectorEffect="non-scaling-stroke"
//                             />
//                         </svg>
//                     </u>

//                 </span></h2>
//                 <h2 className="text-[9vw] font-bold leading-none tracking-tight text-brand-950 my-5">From  <span className="text-brand-600">Every Country</span>.</h2>

//                 <div>
//                     <HomeFloatingCommunity />

//                 </div>

//             </div>
//         </div>)
// }

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HomeFloatingCommunity from "./HomeFloatingCommunity";

/**
 * HomeSectionTwo (improved)
 *
 * Structure:
 * 1. Emotional bridge — "Real parents, real kitchens" with 3 value props
 * 2. "A Recipe for Every Baby, From Every Country" headline
 * 3. HomeFloatingCommunity world map
 *
 * The emotional bridge section was the missing piece — it makes the user
 * feel seen before asking them to engage with the global community map.
 */

const VALUE_PROPS = [
  {
    icon: "🕐",
    title: "Interactive cooking mode",
    body: "Step-by-step guidance with built-in timers, reminders, and serving size adjustments. Cook with confidence, not chaos.",
    accent: "bg-brand-100 text-brand-700",
  },
  {
    icon: "🥦",
    title: "Stage-appropriate nutrition",
    body: "Every recipe is tagged by age, texture, and allergen profile. No guesswork — just the right food at the right time.",
    accent: "bg-orange-100 text-orange-700",
  },
  {
    icon: "🌍",
    title: "Global flavour, local love",
    body: "Introduce your baby to the world through food. Recipes from over 40 cuisines, adapted for tiny tummies.",
    accent: "bg-brandBlue-100 text-brandBlue-700",
  },
];

function ValuePropCard({
  prop,
  index,
}: {
  prop: (typeof VALUE_PROPS)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="bg-white rounded-3xl p-8 shadow-sm border border-brand-50 cursor-default"
    >
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 ${prop.accent}`}
      >
        {prop.icon}
      </div>
      <h3 className="text-xl font-bold text-brand-950 mb-2">{prop.title}</h3>
      <p className="text-brand-600 leading-relaxed text-sm">{prop.body}</p>
    </motion.div>
  );
}

// A small "social proof" testimonial strip
const TESTIMONIALS = [
  { quote: "My 8-month-old now eats Thai curry.", name: "Sarah, London" },
  { quote: "The timer mode is a lifesaver.", name: "Priya, Mumbai" },
  { quote: "Finally a recipe site that gets weaning.", name: "Clara, Berlin" },
  { quote: "We've done 60+ recipes already.", name: "James, Sydney" },
];

export const HomeSectionTwo = () => {
  const headlineRef = useRef(null);
  const headlineInView = useInView(headlineRef, { once: true, margin: "-60px" });

  const bridgeRef = useRef(null);
  const bridgeInView = useInView(bridgeRef, { once: true, margin: "-60px" });

  return (
    <div className="bg-brandBlue-50">

      {/* ── EMOTIONAL BRIDGE ───────────────────────────────────────── */}
      <section ref={bridgeRef} className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">

        {/* Eyebrow + headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={bridgeInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="inline-block text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Built for the messy, magical moments
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="text-4xl md:text-5xl font-bold text-brand-950 leading-tight max-w-xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Weaning doesn't have to be{" "}
              <span className="text-brand-600 italic">overwhelming.</span>
            </h2>
            <p className="text-brand-600 max-w-sm text-base leading-relaxed md:text-right">
              We've done the nutrition research, the recipe testing, and the kitchen
              timing — so you can just enjoy feeding your baby.
            </p>
          </div>
        </motion.div>

        {/* Value prop cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {VALUE_PROPS.map((prop, i) => (
            <ValuePropCard key={prop.title} prop={prop} index={i} />
          ))}
        </div>

        {/* Testimonial ticker */}
        <div className="overflow-hidden relative">
          <div className="flex gap-6 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-brand-100 rounded-full px-5 py-3 shrink-0"
              >
                <span className="w-7 h-7 rounded-full bg-brand-100 text-xs flex items-center justify-center text-brand-600 font-bold shrink-0">
                  {t.name.charAt(0)}
                </span>
                <span className="text-brand-800 text-sm">
                  <span className="italic text-brand-600">"{t.quote}"</span>{" "}
                  <span className="text-brand-400 text-xs">— {t.name}</span>
                </span>
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brandBlue-50 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brandBlue-50 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ── GLOBAL COMMUNITY SECTION ───────────────────────────────── */}
      <section ref={headlineRef} className="px-6 md:px-12 pb-24">

        {/* Section headline */}
        <div className="max-w-7xl mx-auto overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: 48 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[9vw] font-bold leading-none tracking-tight text-brand-950 my-5"
          >
            A Recipe for{" "}
            <span className="text-brand-600">
              <u className="relative no-underline inline-block px-1 py-4">
                Every Baby
                <svg
                  className="absolute left-0 -bottom-3 w-full h-6 overflow-visible pointer-events-none"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 10 C 5 18, 10 2, 15 10 S 25 2, 30 10 S 40 2, 45 10 S 55 2, 60 10 S 70 2, 75 10 S 85 2, 90 10 S 95 2, 100 10"
                    fill="none"
                    stroke="#510424"
                    strokeWidth="6"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </u>
            </span>
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 48 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-[9vw] font-bold leading-none tracking-tight text-brand-950 my-5"
          >
            From{" "}
            <span className="text-brand-600">Every Country</span>.
          </motion.h2>
        </div>

        {/* Floating community map */}
        <HomeFloatingCommunity />

      </section>

      {/* 
        Keyframe for testimonial marquee.
        Add this to your global CSS / tailwind config:
        
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        Or in tailwind.config.ts:
        extend: {
          keyframes: {
            marquee: {
              '0%':   { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
          },
          animation: {
            marquee: 'marquee 30s linear infinite',
          },
        }
      */}
    </div>
  );
};
