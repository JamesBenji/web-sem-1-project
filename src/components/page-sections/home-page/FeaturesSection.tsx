import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import IngredientsSectionImage from "../../../assets/images/ingredients.jpg";
import CookbookImage from "../../../assets/images/cookbook.jpg";
import TimerImage from "../../../assets/images/timer.jpg";
import { FEATURE_STEPS } from "../../../data/constants";
import { FadeUp } from "../../ui/FadeUp";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};

const imageInner: Variants = {
  hidden: { x: 10, scale: 1.08 },
  visible: {
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const WaveDivider = ({ from, to }: { from: string; to: string }) => (
  <div style={{ background: from }}>
    <svg
      viewBox="0 0 1440 80"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ width: "100%", height: 80, display: "block" }}
    >
      <path d="M0,0 C360,80 1080,0 1440,80 L1440,80 L0,80 Z" fill={to} />
    </svg>
  </div>
);

export const FeaturesSection = () => {
  const ref0 = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const inView0 = useInView(ref0, { once: true, margin: "-80px" });
  const inView1 = useInView(ref1, { once: true, margin: "-80px" });
  const inView2 = useInView(ref2, { once: true, margin: "-80px" });

  return (
    <section>
      <WaveDivider from="#fdf2f8" to="#fce7f3" />

      <FadeUp className="pt-5 text-center bg-brand-100">
        <span className="text-lg font-black uppercase tracking-wide text-brand-400">
          Inside Tiny Spoons
        </span>
        <h2 className="text-5xl font-black text-brand-950 mt-3 leading-tight">
          Everything a weaning mum
          <br />
          <span className="text-brand-500">actually needs.</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          animate={inView0 ? { width: "4rem" } : { width: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="h-1 rounded-full mt-2 bg-brand-500 block mx-auto"
        />
      </FadeUp>

      <div
        ref={ref0}
        className="grid grid-cols-1 lg:grid-cols-2 w-full px-8 lg:px-16 py-20 gap-12 items-center bg-brand-100"
      >
        <motion.div
          className="flex flex-col justify-center gap-3 justify-self-center text-center"
          variants={fadeUp}
          initial="hidden"
          animate={inView0 ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
        >
          <span className="text-xs font-black uppercase tracking-[0.35em] text-brand-400">
            {FEATURE_STEPS[0].tag}
          </span>
          <div className="text-8xl lg:text-9xl font-black leading-none select-none text-brand-300">
            {FEATURE_STEPS[0].number}
          </div>
          <h3 className="text-3xl lg:text-4xl font-black leading-tight text-brand-950">
            {FEATURE_STEPS[0].title}
          </h3>
          <p className="text-base leading-relaxed max-w-sm text-brand-600">
            {FEATURE_STEPS[0].body}
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={inView0 ? { width: "4rem" } : { width: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="h-1 rounded-full mt-2 bg-brand-500 block mx-auto"
          />
        </motion.div>

        <motion.div
          className="relative aspect-4/5 lg:aspect-square w-full max-w-xl overflow-hidden rounded-4xl justify-self-center"
          variants={slideReveal}
          initial="hidden"
          animate={inView0 ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          <motion.img
            src={IngredientsSectionImage}
            alt={FEATURE_STEPS[0].title}
            className="w-full h-full object-cover"
            variants={imageInner}
            initial="hidden"
            animate={inView0 ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          />
        </motion.div>
      </div>

      <WaveDivider from="#fce7f3" to="#c6005c" />

      <div
        ref={ref1}
        className="grid grid-cols-1 lg:grid-cols-2 w-full px-8 lg:px-16 py-20 gap-12 items-center bg-brand-700"
      >
        <motion.div
          className="relative aspect-4/5 lg:aspect-square w-full max-w-xl overflow-hidden rounded-4xl justify-self-center"
          variants={slideReveal}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          <motion.img
            src={CookbookImage}
            alt={FEATURE_STEPS[1].title}
            className="w-full h-full object-cover"
            variants={imageInner}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center gap-3 justify-self-center text-center"
          variants={fadeUp}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
        >
          <span className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">
            {FEATURE_STEPS[1].tag}
          </span>
          <div className="text-8xl lg:text-9xl font-black leading-none select-none text-brand-500">
            {FEATURE_STEPS[1].number}
          </div>
          <h3 className="text-3xl lg:text-4xl font-black leading-tight text-brand-50">
            {FEATURE_STEPS[1].title}
          </h3>
          <p className="text-base leading-relaxed max-w-sm text-brand-200">
            {FEATURE_STEPS[1].body}
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={inView1 ? { width: "4rem" } : { width: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="h-1 rounded-full mt-2 bg-amber-300 block mx-auto"
          />
        </motion.div>
      </div>

      <WaveDivider from="#c6005c" to="#fce7f3" />

      <div
        ref={ref2}
        className="grid grid-cols-1 lg:grid-cols-2 w-full px-8 lg:px-16 py-20 gap-12 items-center bg-brand-100"
      >
        <motion.div
          className="flex flex-col justify-center gap-3 justify-self-center text-center"
          variants={fadeUp}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
        >
          <span className="text-xs font-black uppercase tracking-[0.35em] text-brand-400">
            {FEATURE_STEPS[2].tag}
          </span>
          <div className="text-8xl lg:text-9xl font-black leading-none select-none text-brand-300">
            {FEATURE_STEPS[2].number}
          </div>
          <h3 className="text-3xl lg:text-4xl font-black leading-tight text-brand-950">
            {FEATURE_STEPS[2].title}
          </h3>
          <p className="text-base leading-relaxed max-w-sm text-brand-600">
            {FEATURE_STEPS[2].body}
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={inView2 ? { width: "4rem" } : { width: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="h-1 rounded-full mt-2 bg-brand-500 block mx-auto"
          />
        </motion.div>

        <motion.div
          className="relative aspect-4/5 lg:aspect-square w-full max-w-xl overflow-hidden rounded-4xl justify-self-center"
          variants={slideReveal}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          <motion.img
            src={TimerImage}
            alt={FEATURE_STEPS[2].title}
            className="w-full h-full object-cover"
            style={{ transformOrigin: "top center" }}
            variants={imageInner}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          />
        </motion.div>
      </div>

      <WaveDivider from="#fce7f3" to="#ffffff" />
    </section>
  );
};
