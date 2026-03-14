import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RECIPES } from "../../../data/recipes-data";
import { FadeUp } from "../../ui/FadeUp";
import { BRAND_PALETTE } from "../../../data/constants";
import { Link } from "react-router";

export const RecipePreviewSection = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % RECIPES.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isPaused]);

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
                {RECIPES[index].tag} - {RECIPES[index].stage}
              </span>
              <h2 className="text-4xl font-black text-brand-950">
                {RECIPES[index].name}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          className="flex gap-4 items-center justify-center p-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {RECIPES.map((item, i) => {
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
    </section>
  );
};
