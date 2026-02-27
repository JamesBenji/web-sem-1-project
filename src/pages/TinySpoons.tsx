import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search,
  Heart,
  Star,
  BookOpen,
  Smartphone,
  ChevronDown,
  ArrowRight,
  Check,
  Play,
  Clock,
  Utensils,
} from "lucide-react";
import { NavBar } from "../components/layout/NavBar";
import BouncingFruitsGif from "../assets/gifs/bouncing-fruits.gif";
import CuttingVegetablesVideo from "../assets/videos/cutting-vegetables.mp4";
import SoupVideo1 from "../assets/videos/soup-video-1.mp4";
import FeedingBabyVideo from "../assets/videos/feeding-baby.webm";
import HappyMotherCookingPhoto from "../assets/images/happy-cooking.png";
import RevealSection from "../components/page-sections/home-page/RevealSection";
import RightIcon from "../assets/icons/right-arrow.svg";
import IngredientsSectionImage from "../assets/images/ingredients.jpg";
import CookbookImage from "../assets/images/cookbook.jpg";
import TimerImage from "../assets/images/timer.jpg";

gsap.registerPlugin(ScrollTrigger);

// ─── CONSTANTS ───────────────────────────────────────────────────────────────

// const NAV_LINKS = ["Recipes", "About", "Contact"];

const MARQUEE_ITEMS = [
  // NUTRITIONAL INTEGRITY
  "Whole Food Ingredients",
  "No Refined Sugars",
  "Iron-Rich Recipes",

  // DEVELOPMENTAL VALUE
  "Texture-Progressive Meals",
  "Flavor Window Exploration",

  // PARENTAL PEACE OF MIND
  "Ready in Under 5 Minutes",
  "Stress-Free Mealtimes",

  // FUNCTIONAL BENEFITS
  "Travel-Ready Recipes",
  "Allergen-Transparent",
];

const FEATURE_STEPS = [
  {
    number: "01",
    title: "Ingredients",
    body: "Easy to find healthy recommendations. Nothing out of your reach.",
    accent: "#fdf2f8",
    tag: "WHOLE FOODS",
  },
  {
    number: "02",
    title: "Cooking instructions",
    body: "Our simple guides walk you through exactly how to prep every meal so it's safe, soft, and delicious.",
    accent: "#fff7ed",
    tag: "EASY PREPARATION",
  },
  {
    number: "03",
    title: "Interactive Timers",
    body: "Cooking for a baby usually means doing three things at once. Our built in timer allows you to attend to all knowing that you will be reminded of important events.",
    accent: "#f0fdf4",
    tag: "STAY ON TRACK",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "My daughter went from refusing everything to eating avocado on toast. This book changed our mornings.",
    name: "Sophie R.",
    role: "Mum of Elara, 11 months",
    rating: 5,
  },
  {
    quote:
      "I was terrified of starting solids. Tiny Spoons made me feel like I actually knew what I was doing.",
    name: "Amara K.",
    role: "Mum of twins, 8 months",
    rating: 5,
  },
  {
    quote:
      "The allergen guides alone are worth every penny. I finally introduced peanuts without panicking.",
    name: "Claire M.",
    role: "Mum of Oliver, 9 months",
    rating: 5,
  },
];

const PLANS = [
  {
    name: "Free",
    price: "€0",
    period: "",
    highlight: false,
    perks: ["100 of 200 recipes", "Basic stage guidance", "Community access"],
    cta: "Start Free",
  },
  {
    name: "Digital",
    price: "€24",
    period: "one-time",
    highlight: true,
    perks: [
      "All 200 recipes",
      "Age-by-age meal plans",
      "Allergen safety guides",
      "Printable recipe cards",
      "Lifetime updates",
    ],
    cta: "Get Digital",
  },
  {
    name: "Book",
    price: "€42",
    period: "incl. shipping",
    highlight: false,
    perks: [
      "Everything in Digital",
      "Printed hardcover book",
      "Lay-flat spiral binding",
      "Waterproof pages",
      "Gift-ready packaging",
    ],
    cta: "Order Book",
  },
];

// ─── UTILITY COMPONENTS ──────────────────────────────────────────────────────

const FadeUp = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SplitTextReveal = ({ text, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const words = text.split(" ");
  return (
    <span ref={ref} className={className} style={{ display: "inline" }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
            marginRight: "0.28em",
          }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.65,
              delay: delay + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

// const NavBar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//       className={`h-20 flex justify-between items-center px-12 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         scrolled ? "bg-white/90 backdrop-blur-md shadow-sm shadow-brand-100" : "bg-transparent"
//       }`}
//     >
//       <div className="text-2xl font-black tracking-tighter text-brand-900 select-none">
//         tiny spoon<span className="text-brand-500">.</span>
//       </div>
//       <div className="flex items-center gap-8">
//         <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-brand-700">
//           {NAV_LINKS.map((l) => (
//             <a key={l} href="#" className="hover:text-brand-500 transition-colors duration-200 relative group">
//               {l}
//               <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-500 group-hover:w-full transition-all duration-300" />
//             </a>
//           ))}
//         </div>
//         <button className="flex items-center gap-2 bg-brand-900 text-brand-50 px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-brand-600 transition-all duration-300 rounded-full border-2 border-white shadow-md shadow-brand-200">
//           <Search size={14} />
//           <span>Recipes</span>
//         </button>
//       </div>
//     </motion.nav>
//   );
// };

// ─── HERO SECTION ────────────────────────────────────────────────────────────

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -80]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-wave-line", {
        strokeDashoffset: 1200,
        duration: 2,
        ease: "power2.out",
        stagger: 0.3,
        delay: 0.5,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[95dvh] bg-brand-50 font-sans text-brand-950 selection:bg-brand-200 overflow-hidden relative pt-20 "
    >
      {/* Decorative wavy lines */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 opacity-30 pointer-events-none h-fit "
      >
        {/* <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="blur-[1px]">
          <path className="hero-wave-line" strokeDasharray="1200" d="M0 160 C250 80 450 240 650 160 S1000 80 1200 160" fill="none" stroke="#fda5d5" strokeWidth="1.5" />
          <path className="hero-wave-line" strokeDasharray="1200" d="M0 280 C200 330 500 200 700 270 S1050 330 1200 270" fill="none" stroke="#fce7f3" strokeWidth="2" />
          <path className="hero-wave-line" strokeDasharray="1200" d="M0 400 C300 350 600 430 900 390 S1100 350 1200 400" fill="none" stroke="#fda5d5" strokeWidth="1.5" />
          <path className="hero-wave-line" strokeDasharray="1200" d="M0 500 C250 460 550 540 800 490 S1100 460 1200 500" fill="none" stroke="#fce7f3" strokeWidth="1" />
        </svg> */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="blur-[1px]"
        >
          <path
            d="M0 160 C 250 80 450 240 650 160 S 1000 80 1200 160"
            fill="none"
            stroke="#fda5d5"
            strokeWidth="2"
          />

          <path
            d="M0 370 C 300 330 600 410 900 370 S 1100 330 1200 370"
            fill="none"
            stroke="#fda5d5"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      {/* Rotating badge – top right */}
      <RotatingBadge className="absolute top-28 right-16 z-20" />

      {/* <main className=" min-h-[calc(100vh-80px)] px-12 py-5 relative z-10"> */}
      <main className="px-12 py-0 relative z-10 ">
        <div className="max-w-7xl w-full">
          {/* Line 1 */}
          <div className="flex items-center gap-6 mb-1 overflow-hidden">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-44 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm shadow-brand-100 shrink-0"
            >
              <div className="w-full h-full flex items-center justify-center">
                <video
                  src={CuttingVegetablesVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-[50%_75%]"
                />
              </div>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[8.5dvw] font-black leading-none tracking-tight text-brand-950"
              >
                From First
              </motion.h1>
            </div>
          </div>

          {/* Line 2 */}
          <div className="flex items-center gap-6 mb-2">
            <div className="overflow-hidden pb-2">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[9dvw] font-black leading-none tracking-tight text-brand-950"
              >
                <span className="relative inline-block">
                  Bite to
                  <svg
                    className="absolute left-0 -bottom-3 w-full h-6 overflow-visible pointer-events-none"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0 10 
                      C 5 18, 10 2, 15 10 
                      S 25 2, 30 10 
                      S 40 2, 45 10 
                      S 55 2, 60 10 
                      S 70 2, 75 10 
                      S 85 2, 90 10 
                      S 95 2, 100 10"
                      fill="none"
                      stroke="#f6339a"
                      strokeWidth="6"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </span>
              </motion.h1>
            </div>
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "left" }}
              className="grow h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl"
            >
              <video
                src={FeedingBabyVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover object-[50%_75%]"
              />
            </motion.div>
          </div>

          {/* Line 3 */}
          <div className="flex items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-[28%] h-44 rounded-full overflow-hidden border-4 border-white shadow-2xl shrink-0"
            >
              <video
                src={SoupVideo1}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover object-[50%_65%]"
              />
            </motion.div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[9dvw] font-black leading-none tracking-tight text-brand-600"
              >
                Favourite Food<span className="text-brand-600">.</span>
              </motion.h1>
            </div>
          </div>

          {/* Sub + CTA */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 w-full flex items-center justify-between bg-brand-900"
          >
            <div className="w-full min-h-screen">
              <p className="text-brand-800 text-lg font-semibold leading-snug mb-1">
                200 recipes. Every stage. Zero guesswork.
              </p>
              <p className="text-brand-500 text-sm leading-relaxed">
                The weaning companion trusted by thousands of mums across Europe — beautifully designed, nutritionist-checked, and written for real family life.
              </p>
              <div className="flex gap-4 mt-6">
                <button className="group flex items-center gap-2 bg-brand-600 text-white px-7 py-3.5 text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-700 transition-all duration-300 shadow-lg shadow-brand-200">
                  Explore Recipes
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="flex items-center gap-2 border-2 border-brand-200 text-brand-800 px-7 py-3.5 text-sm font-bold uppercase tracking-widest rounded-full hover:border-brand-400 hover:text-brand-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex gap-10 mr-8">
              {[["200+", "Recipes"], ["6+", "Age Stages"], ["50k+", "Happy Babies"]].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-black text-brand-600 leading-none">{num}</div>
                  <div className="text-xs uppercase tracking-widest text-brand-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </main>

      {/* Scroll cue */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-400"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div> */}

      {/* Rotating badge – bottom left */}
      {/* <RotatingBadge className="absolute bottom-20 left-16 z-20" size="sm" /> */}
      <div className="absolute bottom-8 right-16">
        <button
          className="
  flex items-center gap-2 
  bg-brand-900 text-white 
  px-10 h-20 
  rounded-full 
  transition-all duration-500 ease-out
  hover:bg-brand-800 hover:gap-6 hover:shadow-xl hover:-translate-y-1
  group border-4 border-white
"
        >
          <span className="font-bricolage text-2xl font-semibold tracking-tight">
            See our recipe book
          </span>

          <div className=" transition-colors duration-300">
            <img
              src={RightIcon}
              alt=""
              className="w-13 h-auto transition-all"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

// ─── ROTATING BADGE ──────────────────────────────────────────────────────────

const RotatingBadge = ({ className = "", size = "md" }) => {
  const dim = size === "sm" ? "w-28 h-28" : "w-40 h-40";
  const inner = size === "sm" ? "w-14 h-14" : "w-20 h-20";
  return (
    <div className={`${dim} flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 border-2 border-dashed border-brand-300 rounded-full animate-[spin_20s_linear_infinite] opacity-40" />
      <div className="absolute inset-4 border border-brand-200 rounded-full animate-[spin_10s_linear_reverse_infinite] opacity-60" />
      <div
        className={`relative ${inner} rounded-full overflow-hidden border-4 border-white shadow-xl z-20 bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center`}
      >
        {/* <span className="text-2xl">🍓</span> */}
        <img
          src={BouncingFruitsGif}
          alt="Bouncing Fruits"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <path
            id={`cp-${size}`}
            d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
            fill="none"
          />
          <text className="text-[6px] font-black uppercase tracking-[0.4em] fill-brand-600">
            <textPath href={`#cp-${size}`}>
              Healthy Everyday • Healthy Everyday •
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

// ─── MARQUEE STRIP ───────────────────────────────────────────────────────────

// const MarqueeStrip = ({
//   direction = "left",
//   bg = "bg-brand-600",
//   textColor = "text-white",
// }) => {
//   return (
//     <div
//       className={`${bg} py-3.5 overflow-hidden whitespace-nowrap border-y-2 border-brand-700`}
//     >
//       <motion.div
//         className="flex gap-10 w-max"
//         animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
//         transition={{ duration: 360, repeat: Infinity, ease: "linear" }}
//       >
//         {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
//           <span
//             key={i}
//             className={`${textColor} text-xs font-black uppercase tracking-widest flex items-center gap-4`}
//           >
//             {item}
//             <span className="w-1 h-1 rounded-full bg-current opacity-60 inline-block" />
//           </span>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

const MarqueeStrip = ({
  direction = "left",
  bg = "bg-brand-600",
  textColor = "text-white",
  speed = 60, // New prop: higher is slower
}) => {
  // We double the items for a seamless loop
  const displayItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className={`${bg} py-3.5 overflow-hidden whitespace-nowrap border-y-2 border-brand-700`}
    >
      <motion.div
        className="flex gap-10 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed, // Increase this number to slow down
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {displayItems.map((item, i) => (
          <span
            key={i}
            className={`${textColor} text-xs font-black uppercase tracking-widest flex items-center gap-4`}
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// ─── TRUSTED SECTION ─────────────────────────────────────────────────────────

const TrustedSection = () => (
  <section className="bg-white py-20 px-12">
    <div className="max-w-7xl mx-auto">
      <FadeUp className="text-center mb-14">
        <span className="text-xs font-black uppercase tracking-[0.35em] text-brand-400">
          Why Mothers Trust Us
        </span>
        <h2 className="text-5xl font-black text-brand-950 mt-3 leading-tight max-w-xl mx-auto">
          Made by mums,
          <br />
          <span className="text-brand-500">approved by science.</span>
        </h2>
      </FadeUp>
      <div className="grid grid-cols-3 gap-8">
        {[
          {
            icon: "🩺",
            title: "Nutritionist Reviewed",
            body: "Every recipe vetted by certified pediatric nutritionists for safe introduction and balanced macros.",
          },
          {
            icon: "🌿",
            title: "Whole-Food Ingredients",
            body: "No fillers, no additives, no shortcuts. Just real food your baby deserves from the very first bite.",
          },
          {
            icon: "📅",
            title: "Stage-by-Stage Guidance",
            body: "Organised clearly from 6 months to 12 months — so you always know exactly what to cook and when.",
          },
        ].map(({ icon, title, body }, i) => (
          <FadeUp key={title} delay={i * 0.12}>
            <div className="group p-8 rounded-3xl border-2 border-brand-50 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100 transition-all duration-500 cursor-default">
              <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <h3 className="text-xl font-black text-brand-900 mb-2">
                {title}
              </h3>
              <p className="text-brand-600 text-sm leading-relaxed">{body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

// ─── STICKY SCROLL FEATURES (from Sticky snippet reference) ─────────────────

const StickyFeaturesSection = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      FEATURE_STEPS.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `.feature-item-${i}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-amber-100 relative">
      <div className="max-w-7xl mx-auto px-12 py-20">
        <FadeUp className="mb-20 text-center">
          <span className="text-lg font-black uppercase tracking-wide text-brand-400">
            Inside Tiny Spoons
          </span>
          <h2 className="text-5xl font-black text-brand-950 mt-3 leading-tight">
            Everything a weaning mum
            <br />
            <span className="text-brand-500">actually needs.</span>
          </h2>
        </FadeUp>

        <div className="flex gap-16 items-start">
          {/* Sticky visual panel */}
          <div className="sticky top-28 w-1/2 h-[60vh] shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full rounded-3xl overflow-hidden border-0 border-white "
                // style={{ backgroundColor: FEATURE_STEPS[activeIndex].accent }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-0">
                  <img
                    src={
                      [IngredientsSectionImage, CookbookImage, TimerImage][
                        activeIndex
                      ]
                    }
                    alt="Section Image"
                    className="object-cover "
                  />
                  {/* <div className="text-8xl mb-2 h-[60%] w-auto"></div>
                  <div className="text-xs font-black uppercase tracking-[0.35em] text-brand-400">
                    {FEATURE_STEPS[activeIndex].tag}
                  </div>
                  <div className="text-center">
                    <div className="text-6xl font-black text-brand-200 leading-none select-none">
                      {FEATURE_STEPS[activeIndex].number}
                    </div>
                  </div> */}
                  {/* Decorative recipe card mockup */}
                  {/* <div className="mt-4 bg-white rounded-2xl p-5 shadow-md max-w-xs w-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center text-lg">
                        {["🥕", "⭐", "🌾"][activeIndex]}
                      </div>
                      <div>
                        <div className="h-2.5 bg-brand-200 rounded-full w-24 mb-1.5" />
                        <div className="h-2 bg-brand-100 rounded-full w-16" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {[...Array(3)].map((_, j) => (
                        <div
                          key={j}
                          className="h-2 bg-brand-50 rounded-full"
                          style={{ width: `${[80, 65, 55][j]}%` }}
                        />
                      ))}
                    </div>
                  </div> */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Scrolling text items */}
          <div className="w-1/2 space-y-48 py-10">
            {FEATURE_STEPS.map((step, i) => (
              <div key={i} className={`feature-item-${i}`}>
                <motion.div
                  animate={{ opacity: activeIndex === i ? 1 : 0.35 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-xs font-black uppercase tracking-[0.35em] text-brand-400 mb-2 block">
                    {step.tag}
                  </span>
                  <div className="text-[7vw] font-black text-brand-400 leading-none select-none mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-3xl font-black text-brand-950 leading-tight mb-4">
                    {step.title}
                  </h3>
                  <p className="text-brand-600 text-base leading-relaxed max-w-sm">
                    {step.body}
                  </p>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "4rem" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="h-1 bg-brand-500 rounded-full mt-6"
                    />
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── RECIPE PREVIEW ──────────────────────────────────────────────────────────

const recipes = [
  {
    emoji: "🥣",
    name: "Sweet Potato Purée",
    stage: "6 months+",
    time: "15 min",
    tag: "Stage 1",
  },
  {
    emoji: "🍐",
    name: "Pear & Oat Porridge",
    stage: "7 months+",
    time: "12 min",
    tag: "Stage 1",
  },
  {
    emoji: "🥦",
    name: "Broccoli Bites",
    stage: "8 months+",
    time: "20 min",
    tag: "Stage 2",
  },
  {
    emoji: "🍳",
    name: "Soft Veggie Omelette",
    stage: "9 months+",
    time: "18 min",
    tag: "Stage 2",
  },
  {
    emoji: "🍝",
    name: "Baby Pasta Bolognese",
    stage: "10 months+",
    time: "30 min",
    tag: "Stage 3",
  },
  {
    emoji: "🫐",
    name: "Blueberry Pancakes",
    stage: "11 months+",
    time: "25 min",
    tag: "Stage 3",
  },
];

// const RecipePreviewSection = () => (
//   <section className="bg-white py-24 px-12">
//     <div className="max-w-7xl mx-auto">
//       <div className="flex justify-between items-end mb-14">
//         <FadeUp>
//           <span className="text-xs font-black uppercase tracking-[0.35em] text-brand-400">
//             Our Recipes
//           </span>
//           <h2 className="text-5xl font-black text-brand-950 mt-3 leading-tight">
//             From baby formula
//             <br />
//             <span className="text-brand-500">to family table.</span>
//           </h2>
//         </FadeUp>
//         <FadeUp delay={0.2}>
//           <button className="group flex items-center gap-2 border-2 border-brand-200 text-brand-700 px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-50 hover:border-brand-400 transition-all duration-300">
//             View All 200
//             <ArrowRight
//               size={14}
//               className="group-hover:translate-x-1 transition-transform"
//             />
//           </button>
//         </FadeUp>
//       </div>

//       <div className="grid grid-cols-3 gap-6">
//         {[...recipes, ...recipes, ...recipes].map((r, i) => (
//           <FadeUp key={r.name} delay={i * 0.08}>
//             <motion.div
//               whileHover={{
//                 y: -6,
//                 boxShadow: "0 24px 48px -10px rgba(246,51,154,0.12)",
//               }}
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               className="bg-brand-50 rounded-3xl p-6 border-2 border-brand-50 hover:border-brand-100 cursor-pointer group"
//             >
//               <div className="w-full h-40 bg-gradient-to-br from-brand-100 to-white rounded-2xl flex items-center justify-center text-5xl mb-5 group-hover:scale-105 transition-transform duration-300">
//                 {r.emoji}
//               </div>
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-400 bg-brand-100 px-2.5 py-1 rounded-full">
//                   {r.tag}
//                 </span>
//                 <span className="text-[9px] font-bold text-brand-400 uppercase tracking-widest">
//                   {r.time}
//                 </span>
//               </div>
//               <h4 className="text-lg font-black text-brand-900 mt-2">
//                 {r.name}
//               </h4>
//               <p className="text-xs text-brand-400 mt-1 font-medium">
//                 {r.stage}
//               </p>
//             </motion.div>
//           </FadeUp>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// ─── EMOTIONAL STATEMENT (3D Zoom Scroll inspired) ────────────────────────────

const BRAND_PALETTE = ["#FFD60A", "#FF9F0A", "#FF375F", "#32D74B", "#64D2FF"];

export const RecipePreviewSection = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % recipes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isPaused, recipes.length]);

  return (
    <section className="py-20 px-10 bg-white">
      <div className="flex justify-center text-center align-middle items-end mb-14">
        <FadeUp>
          <span className="text-lg font-black uppercase tracking-wide text-brand-400">
            Our Recipes
          </span>
          <h2 className="text-5xl font-black text-brand-950 mt-3 leading-tight">
            From baby formula
            <br />
            <span className="text-brand-500">to family table.</span>
          </h2>
        </FadeUp>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Row 1: Details */}
        <div className="h-24 mb-8 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-2"
            >
              <span className="text-lg font-black uppercase text-brand-400 bg-gray-100 px-3 py-1 rounded-full">
                {recipes[index].tag} - {recipes[index].stage}
              </span>
              <h2 className="text-4xl font-black text-brand-950">
                {recipes[index].name}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Row 2: The Carousel */}
        <div
          className="flex gap-4 items-center justify-center p-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {recipes.map((item, i) => {
            const isActive = i === index;
            // This pulls a color from your palette based on the item's index
            const itemColor = BRAND_PALETTE[i % BRAND_PALETTE.length];

            return (
              <motion.div
                key={item.name}
                onClick={() => setIndex(i)}
                animate={{
                  scale: isActive ? 1.1 : 0.95,
                  opacity: isActive ? 1 : 0.6, // Higher opacity for "out of focus" items
                  backgroundColor: isActive ? itemColor : "#F3F4F6",
                }}
                className="cursor-pointer w-48 h-48 rounded-3xl flex items-center justify-center text-5xl shadow-sm"
              >
                <span
                  className={`transition-all duration-300 ${isActive ? "scale-110" : "grayscale-20 blur-[0.5px]"}`}
                >
                  {item.emoji}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const EmotionalSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  const words = [
    "Every",
    "meal",
    "is",
    "a",
    "love",
    "letter",
    "to",
    "your",
    "baby.",
  ];
  const wordColors = [
    "text-brand-800",
    "text-brand-800",
    "text-brand-400",
    "text-brand-400",
    "text-brand-500",
    "text-brand-800",
    "text-brand-400",
    "text-brand-400",
    "text-brand-800",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-32 px-12 bg-brand-950 overflow-hidden relative"
    >
      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(246,51,154,0.12),transparent)] pointer-events-none" />

      <motion.div
        style={{ scale, opacity }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <p className="text-xs font-black uppercase tracking-[0.4em] text-brand-600 mb-12">
          Our Promise
        </p>
        <h2 className="text-[5.5vw] font-black leading-tight flex flex-wrap justify-center gap-x-4 gap-y-2">
          {words.map((w, i) => (
            <SplitTextReveal
              key={i}
              text={w}
              className={`${wordColors[i]}`}
              delay={i * 0.06}
            />
          ))}
        </h2>
        <FadeUp delay={0.6}>
          <p className="text-brand-500 text-lg leading-relaxed mt-10 max-w-2xl mx-auto">
            Weaning is one of the most vulnerable, beautiful, and overwhelming
            moments of early parenthood. Tiny Spoons was built so you can do it
            with calm, confidence, and a little joy.
          </p>
        </FadeUp>
        <FadeUp delay={0.8}>
          <div className="flex justify-center gap-3 mt-10">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                fill="#f6339a"
                className="text-brand-500"
              />
            ))}
          </div>
          <p className="text-brand-600 text-sm mt-2">
            Rated 4.9 by 2,400+ mothers
          </p>
        </FadeUp>
      </motion.div>
    </section>
  );
};

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

const TestimonialsSection = () => (
  <section className="bg-brand-50 py-24 px-12">
    <div className="max-w-7xl mx-auto">
      <FadeUp className="text-center mb-16">
        <span className="text-xs font-black uppercase tracking-[0.35em] text-brand-400">
          Stories from Mums
        </span>
        <h2 className="text-5xl font-black text-brand-950 mt-3">
          Real babies.
          <br />
          <span className="text-brand-500">Real results.</span>
        </h2>
      </FadeUp>
      <div className="grid grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <FadeUp key={t.name} delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="bg-white rounded-3xl p-8 border-2 border-brand-50 hover:border-brand-100 hover:shadow-xl hover:shadow-brand-100 transition-all duration-400 flex flex-col gap-5"
            >
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    fill="#f6339a"
                    className="text-brand-500"
                  />
                ))}
              </div>
              <p className="text-brand-800 text-base leading-relaxed font-medium flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-brand-50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-200 to-brand-300 flex items-center justify-center text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-black text-brand-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-brand-400 font-medium">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

// ─── PRICING ──────────────────────────────────────────────────────────────────

const PricingSection = () => (
  <section className="bg-white py-24 px-12">
    <div className="max-w-7xl mx-auto">
      <FadeUp className="text-center mb-16">
        <span className="text-xs font-black uppercase tracking-[0.35em] text-brand-400">
          Simple Pricing
        </span>
        <h2 className="text-5xl font-black text-brand-950 mt-3 leading-tight">
          Start free.
          <br />
          <span className="text-brand-500">Grow when ready.</span>
        </h2>
        <p className="text-brand-500 mt-4 text-base max-w-md mx-auto">
          No subscriptions. No pressure. Just access to beautiful, trusted
          recipes at your own pace.
        </p>
      </FadeUp>

      <div className="grid grid-cols-3 gap-8 items-stretch">
        {PLANS.map((plan, i) => (
          <FadeUp key={plan.name} delay={i * 0.12}>
            <motion.div
              whileHover={{ y: plan.highlight ? -4 : -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className={`rounded-3xl p-8 h-full flex flex-col border-2 transition-all duration-400 ${
                plan.highlight
                  ? "bg-brand-950 border-brand-800 shadow-2xl shadow-brand-200"
                  : "bg-white border-brand-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-50"
              }`}
            >
              {plan.highlight && (
                <div className="bg-brand-500 text-white text-[9px] font-black uppercase tracking-[0.35em] px-3 py-1 rounded-full w-fit mb-6">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <span
                  className={`text-xs font-black uppercase tracking-[0.35em] ${plan.highlight ? "text-brand-500" : "text-brand-400"}`}
                >
                  {plan.name}
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span
                    className={`text-5xl font-black ${plan.highlight ? "text-white" : "text-brand-950"}`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-sm ${plan.highlight ? "text-brand-500" : "text-brand-400"}`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? "bg-brand-700" : "bg-brand-50"}`}
                    >
                      <Check
                        size={11}
                        className={
                          plan.highlight ? "text-brand-300" : "text-brand-500"
                        }
                      />
                    </div>
                    <span
                      className={`text-sm font-medium ${plan.highlight ? "text-brand-200" : "text-brand-700"}`}
                    >
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 text-sm font-black uppercase tracking-widest rounded-2xl transition-all duration-300 ${
                  plan.highlight
                    ? "bg-brand-500 text-white hover:bg-brand-400 shadow-lg shadow-brand-800"
                    : "border-2 border-brand-200 text-brand-800 hover:bg-brand-50 hover:border-brand-300"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

// ─── CTA SECTION ─────────────────────────────────────────────────────────────

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      className="bg-brand-600 py-28 px-12 relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-500 rounded-full opacity-30 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-700 rounded-full opacity-40 blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-brand-200 text-xs font-black uppercase tracking-[0.4em] mb-6">
            Start Your Journey
          </p>
          <h2 className="text-6xl font-black text-white leading-tight mb-6">
            Your baby's first
            <br />
            flavour adventure
            <br />
            <span className="text-brand-200">starts here.</span>
          </h2>

          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-brand-700 px-10 py-4 text-sm font-black uppercase tracking-widest rounded-full hover:bg-brand-50 transition-all duration-300 shadow-sm shadow-brand-800"
            >
              See Recipes
            </motion.button>
            {/* <button className="border-2 border-brand-300 text-white px-10 py-4 text-sm font-black uppercase tracking-widest rounded-full hover:border-white transition-all duration-300">
              Learn More
            </button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── FOOTER ──────────────────────────────────────────────────────────────────

const Footer = () => (
  <footer className="bg-brand-950 text-brand-400 px-12 py-16">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-start mb-12">
        <div>
          <div className="text-3xl font-black text-white tracking-tighter mb-3">
            tiny spoon<span className="text-brand-500">.</span>
          </div>
          <p className="text-sm max-w-xs leading-relaxed text-brand-500">
            Nourishing babies, empowering mothers.
            <br />
            One spoonful at a time.
          </p>
        </div>
        <div className="flex gap-16">
          {[
            ["Explore", ["Recipes", "About", "Contact"]],
            ["Product", ["Digital", "Hardcover Book", "Free Tier"]],
          ].map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-600 mb-4">
                {heading}
              </h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm hover:text-brand-300 transition-colors duration-200"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-brand-800 pt-8 flex justify-between items-center text-xs text-brand-700">
        <span>© 2025 Tiny Spoon. All rights reserved.</span>
        <span>
          Made with{" "}
          <Heart
            size={10}
            className="inline text-brand-600 mx-1"
            fill="#c6005c"
          />{" "}
          for weaning mothers.
        </span>
      </div>
    </div>
  </footer>
);

// ─── PAGE ASSEMBLY ────────────────────────────────────────────────────────────

export default function TinySpoons() {
  return (
    <div className="font-bricolage antialiased">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-\\[spin_20s_linear_infinite\\] { animation: spin 20s linear infinite; }
        .animate-\\[spin_10s_linear_reverse_infinite\\] { animation: spin 10s linear reverse infinite; }
        .animate-\\[spin_15s_linear_infinite\\] { animation: spin 15s linear infinite; }
      `}</style>

      <NavBar />
      <HeroSection />
      {/* <div className="bg-amber-100 relative">
        <div className=" bg-brand-700 max-h-[95vh] rounded-tr-full rounded-tl-full">
          <div className="w-full min-h-screen py-14 px-12">
            <h2 className="text-amber-200 text-[8dvw] font-bold leading-tight">
              No need <br /> to guess.
            </h2>

            <div className="my-4">
              <p className="text-amber-100 text-[3dvw] font-bold leading-tight">
                With 200+ recipes,
                <br /> we have you covered
              </p>

              <p className="text-amber-200 text-[6dvw] font-bold leading-none">
                every <span className="text-[7dvw]">Single</span>{" "}
                <span className="text-[9dvw]">Day!</span>
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <button className="group flex items-center gap-2 bg-amber-300 text-brand-950 px-7 py-3.5 text-sm font-bold uppercase tracking-widest rounded-full hover:bg-amber-400 transition-all duration-300">
                Explore Recipes
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
            </div>
          </div>
        </div>

       
      </div> */}
      <RevealSection />
      <MarqueeStrip direction="left" bg="bg-brand-600" textColor="text-white" />
      {/* <TrustedSection /> */}
      <RecipePreviewSection />
      <MarqueeStrip
        direction="right"
        bg="bg-brand-50"
        textColor="text-brand-400"
      />
      <StickyFeaturesSection />

      {/* <EmotionalSection /> */}
      {/* <TestimonialsSection /> */}
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
{
  /* <div className="absolute top-0 right-0 bg-amber-800">
          <img
            src={HappyMotherCookingPhoto}
            alt="Mother Cooking"
            className="w-[30vw] h-auto object-contain"
          />
        </div> */
}
