import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="bg-brand-600 py-20 lg:py-28 px-12 relative overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-500 rounded-full opacity-30 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-700 rounded-full opacity-40 blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-brand-200 text-sm font-black uppercase tracking-wide mb-6">
            Start Your Journey
          </p>
          <h2 className="text-3xl lg:text-6xl font-black text-white leading-tight mb-6">
            Your baby's first
            <br />
            flavour adventure
            <br />
            <span className="text-brand-200">starts here.</span>
          </h2>

          <div className="flex justify-center gap-4">
            <Link to="/recipes" className="inline-block">
              <motion.button
                whileHover="hovered"
                whileTap={{ scale: 0.98 }}
                variants={{
                  hovered: { scale: 1.02, y: -2 },
                }}
                className="
      relative flex items-center gap-2 h-12 px-6 py-3
      lg:h-16 lg:px-10 lg:py-4
      bg-white text-brand-700 border-4 border-white
      text-base lg:text-lg font-black tracking-normal rounded-full
      shadow-sm shadow-brand-800/20
      transition-colors duration-300 ease-out
      hover:bg-brand-50 hover:shadow-md
    "
              >
                <span>See Recipes</span>
                <motion.span
                  variants={{
                    hovered: { x: 5 },
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
