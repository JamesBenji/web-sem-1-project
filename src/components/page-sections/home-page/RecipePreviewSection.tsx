import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RECIPES } from "../../../data/recipes-data";
import { FadeUp } from "../../ui/FadeUp";
import { BRAND_PALETTE } from "../../../data/constants";
import { Link } from "react-router";

export const RecipePreviewSection = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [featured] = useState(() =>
    [...RECIPES].sort(() => Math.random() - 0.5).slice(0, 6),
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  const isTouching = useRef(false);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % featured.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (isTouching.current) return;
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const cardWidth = el.scrollWidth / featured.length;
    el.scrollLeft = cardWidth * index;
  }, [index]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      if (!isTouching.current) return;
      if (settleTimer.current) clearTimeout(settleTimer.current);
      settleTimer.current = setTimeout(() => {
        const cardWidth = el.scrollWidth / featured.length;
        const newIndex = Math.round(el.scrollLeft / cardWidth);
        setIndex(newIndex);
        isTouching.current = false;
        setIsPaused(false);
      }, 150);
    };
    el.addEventListener("scroll", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (settleTimer.current) clearTimeout(settleTimer.current);
    };
  }, [featured.length]);

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

      {/* desktop only */}
      <div className="hidden lg:flex max-w-4xl mx-auto flex-col items-center">
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
                {featured[index]?.tag || ""} - {featured[index].stage}
              </span>
              <h2 className="text-4xl font-black text-brand-950">
                {featured[index].name}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          className="flex gap-4 items-center justify-center p-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {featured.map((item, i) => {
            const isActive = i === index;
            const itemColor = BRAND_PALETTE[i % BRAND_PALETTE.length];
            return (
              <motion.div
                key={item.name}
                onClick={() => setIndex(i)}
                animate={{
                  scale: isActive ? 1.1 : 0.95,
                  opacity: isActive ? 1 : 0.6,
                  backgroundColor: isActive ? itemColor : "#F3F4F6",
                }}
                className="cursor-pointer w-48 h-48 rounded-3xl flex items-center justify-center shadow-sm overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    isActive ? "scale-110" : "grayscale-20 blur-[0.5px]"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/recipes"
            className="flex items-center gap-2 bg-brand-600 text-white px-10 h-16 rounded-full text-lg font-semibold tracking-tight transition-all duration-500 ease-out hover:bg-brand-800 hover:shadow-xl hover:-translate-y-1 border-4 border-white shadow-md"
          >
            See recipes
          </Link>
        </div>
      </div>

      {/* mobile only */}
      <div className="flex lg:hidden flex-col items-center gap-6">
        <div
          ref={scrollRef}
          style={{ touchAction: "pan-y" }}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth w-full px-[20%] pb-2 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {featured.map((item, i) => {
            const isActive = i === index;
            return (
              <div
                key={item.name}
                onClick={() => setIndex(i)}
                className={`snap-center shrink-0 w-64 flex flex-col rounded-3xl overflow-hidden border-2 bg-white transition-all duration-300 ${
                  isActive
                    ? "border-brand-200 shadow-md"
                    : "border-gray-200 shadow-sm opacity-70"
                }`}
              >
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      isActive ? "scale-105" : "grayscale opacity-70"
                    }`}
                  />
                </div>
                <div className="px-4 py-4 flex flex-col gap-1">
                  <span className="text-xs font-black uppercase tracking-widest text-brand-400">
                    {item.tag} — {item.stage}
                  </span>
                  <span className="text-base font-black text-brand-950 leading-tight">
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-2">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === index ? "w-6 h-2 bg-brand-500" : "w-2 h-2 bg-brand-200"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-2">
          <Link
            to="/recipes"
            className="flex items-center gap-2 bg-brand-600 text-white px-10 h-16 rounded-full text-lg font-semibold tracking-tight transition-all duration-500 ease-out hover:bg-brand-800 hover:shadow-xl hover:-translate-y-1 border-4 border-white shadow-md"
          >
            See recipes
          </Link>
        </div>
      </div>
    </section>
  );
};
