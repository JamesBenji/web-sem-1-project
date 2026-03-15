import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import CuttingVegetablesVideo from "../../../assets/videos/cutting-vegetables.mp4";
import FeedingBabyVideo from "../../../assets/videos/feeding-baby.webm";
import SoupVideo1 from "../../../assets/videos/soup-video-1.mp4";
import { RotatingBadge } from "../../ui/RotatingBadge";

const waveLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
  },
};

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <div
      ref={containerRef}
      className="min-h-dvh bg-brand-50 font-sans text-brand-950 selection:bg-brand-200 overflow-hidden relative pt-20"
    >
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 opacity-30 pointer-events-none h-fit"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="blur-[1px]"
        >
          <motion.path
            d="M0 160 C 250 80 450 240 650 160 S 1000 80 1200 160"
            fill="none"
            stroke="#fda5d5"
            strokeWidth="2"
            variants={waveLine}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          />
          <motion.path
            d="M0 370 C 300 330 600 410 900 370 S 1100 330 1200 370"
            fill="none"
            stroke="#fda5d5"
            strokeWidth="2"
            variants={waveLine}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
          />
        </svg>
      </motion.div>

      <div className="hidden lg:block absolute top-28 right-16 z-20">
        <RotatingBadge />
      </div>

      {/* mobile only */}
      <div className="flex lg:hidden flex-col items-center px-8 pt-12 pb-16 text-center gap-8">
        <motion.h1
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl font-black leading-tight tracking-tight text-brand-950"
        >
          From First Bite to{" "}
          <span className="text-brand-600">Favourite Food.</span>
        </motion.h1>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-2xl"
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

        <RotatingBadge />
      </div>

      <main className="hidden lg:block px-12 py-0 relative z-10">
        <div className="max-w-7xl w-full flex flex-col justify-around min-h-[85dvh]">
          <div className="flex items-center gap-6 overflow-hidden">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-auto h-52 rounded-full overflow-hidden border-4 border-white shadow-sm shadow-brand-100 shrink-0"
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
                className="text-9xl font-black leading-none tracking-tight text-brand-950"
              >
                From First Bite
              </motion.h1>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="overflow-hidden pb-2">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-9xl font-black leading-none tracking-tight text-brand-950"
              >
                <span className="relative inline-block">to</span>
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
              className="grow h-52 rounded-full overflow-hidden border-4 border-white shadow-2xl"
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

          <div className="flex items-center gap-6">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[8.7rem] font-black leading-none tracking-tight text-brand-600"
              >
                Favourite Food<span className="text-brand-600">.</span>
              </motion.h1>
            </div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-[28%] h-52 rounded-full overflow-hidden border-4 border-white shadow-2xl shrink-0"
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
          </div>
        </div>
      </main>
    </div>
  );
};
