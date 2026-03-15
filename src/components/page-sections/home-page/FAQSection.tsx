import { useState } from "react";
import { FadeUp } from "../../ui/FadeUp";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "../../../data/constants";

export const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-12 px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <FadeUp className="text-center mb-4 lg:mb-16">
          <span className="text-sm font-black uppercase tracking-wide text-brand-400">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-brand-950 mt-3 leading-tight">
            Questions we
            <br />
            <span className="text-brand-500">get asked a lot.</span>
          </h2>
        </FadeUp>

        <dl className="flex flex-col divide-y divide-brand-100">
          {FAQS.map((faq, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div>
                <dt>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="w-full flex justify-between items-center py-5 text-left gap-6 cursor-pointer"
                  >
                    <span className="text-lg font-black text-brand-600">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full border-2 border-brand-200 flex items-center justify-center text-brand-500 font-black text-sm transition-transform duration-300 ${
                        open === i
                          ? "rotate-45 bg-brand-500 border-brand-500 text-white"
                          : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                </dt>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.dd
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-xl leading-relaxed text-brand-950">
                        {faq.answer}
                      </p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </dl>
      </div>
    </section>
  );
};
