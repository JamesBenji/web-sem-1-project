import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import HappyBabyAndParent from "../../../assets/images/happy-baby-1.jpg";
import HappyBabyAlone from "../../../assets/images/happy-baby-2.jpg";

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

const WaveDivider = ({ fromDark }: { fromDark: boolean }) => (
  <div className={fromDark ? "bg-brand-700" : "bg-brand-100"}>
    <svg
      viewBox="0 0 1440 80"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full block"
      style={{ height: 80, display: "block" }}
    >
      <path
        d="M0,0 C360,80 1080,0 1440,80 L1440,80 L0,80 Z"
        fill={fromDark ? "#fce7f3" : "#c6005c"}
      />
    </svg>
  </div>
);

export const RevealSection = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const inView1 = useInView(ref1, { once: true, margin: "-80px" });
  const inView2 = useInView(ref2, { once: true, margin: "-80px" });

  return (
    <section className="bg-brand-50">
      <div className="rounded-t-[4rem] overflow-hidden">
        <div
          ref={ref1}
          className="grid grid-cols-1 lg:grid-cols-2 w-full px-8 lg:px-16 py-20 gap-12 items-center bg-brand-100"
        >
          <motion.div
            className="flex flex-col justify-center gap-4"
            variants={fadeUp}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-5xl lg:text-7xl leading-[1.1] font-bold text-brand-800 text-center">
              We help you cook for your world.
            </h3>

            <p className="text-base lg:text-lg leading-relaxed text-brand-600 text-center max-w-md mx-auto">
              That little face looking up at you deserves the best start. We put
              together recipes that are gentle enough for tiny tummies, simple
              enough for busy parents, and good enough that you'll want to make
              them again.
            </p>
          </motion.div>

          <motion.div
            className="relative aspect-4/5 lg:aspect-square w-full max-w-xl overflow-hidden rounded-4xl justify-self-center"
            variants={slideReveal}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <motion.img
              src={HappyBabyAlone}
              alt="Baby Alone"
              className="w-full h-full object-cover"
              variants={imageInner}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            />
          </motion.div>
        </div>

        <WaveDivider fromDark={false} />

        <div
          ref={ref2}
          className="grid grid-cols-1 lg:grid-cols-2 w-full px-8 lg:px-16 py-20 gap-12 items-center bg-brand-700"
        >
          <motion.div
            className="relative aspect-4/5 lg:aspect-square w-full max-w-xl overflow-hidden rounded-4xl justify-self-center"
            variants={slideReveal}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <motion.img
              src={HappyBabyAndParent}
              alt="Baby and Parent"
              className="w-full h-full object-cover"
              variants={imageInner}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center gap-4"
            variants={fadeUp}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-5xl lg:text-7xl leading-[1.1] font-bold text-amber-300 text-center">
              With you every step of the way.
            </h3>
            <p className="text-2xl lg:text-3xl leading-snug font-medium text-brand-100 text-center">
              Every day. Always.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RevealSection;
