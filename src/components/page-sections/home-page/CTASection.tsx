import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const CTASection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="bg-brand-600 py-28 px-12 relative overflow-hidden"
    >
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
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-brand-700 px-10 py-4 text-sm font-black uppercase tracking-widest rounded-full hover:bg-brand-50 transition-all duration-300 shadow-sm shadow-brand-800 flex items-center gap-2 h-16  ease-out  hover:shadow-md hover:-translate-y-0.5 border-4 border-white "
            >
              See Recipes
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
