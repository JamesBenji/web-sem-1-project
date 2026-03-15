import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FadeUp } from "../../ui/FadeUp";
import { Link } from "react-router";

const PLANS = [
  {
    label: "Free",
    price: "€0",
    sub: null,
    perks: ["50 of 200 recipes", "Basic stage guidance", "Community access"],
    dark: false,
    cta: (
      <Link
        to={"/recipes"}
        className="w-full py-4 text-sm font-black text-center uppercase tracking-widest rounded-2xl transition-all duration-300 border-2 border-brand-200 text-brand-800 hover:bg-brand-50 hover:border-brand-300"
      >
        Start Free
      </Link>
    ),
  },
  {
    label: "Digital",
    price: "€24",
    sub: "one-time",
    badge: "Most Popular",
    perks: [
      "All 200 recipes",
      "Age-by-age meal plans",
      "Allergen safety guides",
      "Printable recipe cards",
      "Lifetime updates",
    ],
    dark: true,
    cta: (
      <button
        disabled
        className="cursor-not-allowed w-full py-4 text-sm font-black uppercase tracking-widest rounded-2xl transition-all duration-300 bg-brand-500 text-white shadow-lg shadow-brand-800"
      >
        COMING SOON
      </button>
    ),
  },
  {
    label: "Book",
    price: "€42",
    sub: "incl. shipping",
    perks: [
      "Everything in Digital",
      "Printed hardcover book",
      "Lay-flat spiral binding",
      "Waterproof pages",
      "Gift-ready packaging",
    ],
    dark: false,
    cta: (
      <button
        disabled
        className="cursor-not-allowed w-full py-4 text-sm font-black uppercase tracking-widest rounded-2xl transition-all duration-300 border-2 border-brand-200 text-brand-800"
      >
        COMING SOON
      </button>
    ),
  },
];

export const PricingSection = () => {
  return (
    <section className="bg-white py-24 px-12">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-16">
          <span className="text-sm font-black uppercase tracking-wide text-brand-400">
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

        {/* desktop only */}
        <div className="hidden lg:grid grid-cols-3 gap-8 items-stretch">
          <FadeUp delay={0}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="rounded-3xl p-8 h-full flex flex-col border-2 transition-all duration-400 bg-white border-brand-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-50"
            >
              <div className="mb-6">
                <span className="text-xs font-black uppercase tracking-[0.35em] text-brand-400">
                  Free
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-5xl font-black text-brand-950">€0</span>
                </div>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  "50 of 200 recipes",
                  "Basic stage guidance",
                  "Community access",
                ].map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-brand-50">
                      <Check size={11} className="text-brand-500" />
                    </div>
                    <span className="text-sm font-medium text-brand-700">
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to={"/recipes"}
                className="w-full py-4 text-sm font-black text-center uppercase tracking-widest rounded-2xl transition-all duration-300 border-2 border-brand-200 text-brand-800 hover:bg-brand-50 hover:border-brand-300"
              >
                Start Free
              </Link>
            </motion.div>
          </FadeUp>

          <FadeUp delay={0}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="rounded-3xl p-8 h-full flex flex-col border-2 transition-all duration-400 bg-brand-950 border-brand-800 shadow-2xl shadow-brand-200"
            >
              <div className="bg-brand-500 text-white text-[9px] font-black uppercase tracking-[0.35em] px-3 py-1 rounded-full w-fit mb-6">
                Most Popular
              </div>
              <div className="mb-6">
                <span className="text-xs font-black uppercase tracking-[0.35em] text-brand-500">
                  Digital
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-5xl font-black text-white">€24</span>
                  <span className="text-sm text-brand-500">one-time</span>
                </div>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  "All 200 recipes",
                  "Age-by-age meal plans",
                  "Allergen safety guides",
                  "Printable recipe cards",
                  "Lifetime updates",
                ].map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-brand-700">
                      <Check size={11} className="text-brand-300" />
                    </div>
                    <span className="text-sm font-medium text-brand-200">
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                disabled
                className="cursor-not-allowed w-full py-4 text-sm font-black uppercase tracking-widest rounded-2xl transition-all duration-300 bg-brand-500 text-white hover:bg-brand-400 shadow-lg shadow-brand-800"
              >
                COMING SOON
              </button>
            </motion.div>
          </FadeUp>

          <FadeUp delay={0}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="rounded-3xl p-8 h-full flex flex-col border-2 transition-all duration-400 bg-white border-brand-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-50"
            >
              <div className="mb-6">
                <span className="text-xs font-black uppercase tracking-[0.35em] text-brand-400">
                  Book
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-5xl font-black text-brand-950">
                    €42
                  </span>
                  <span className="text-sm text-brand-400">incl. shipping</span>
                </div>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  "Everything in Digital",
                  "Printed hardcover book",
                  "Lay-flat spiral binding",
                  "Waterproof pages",
                  "Gift-ready packaging",
                ].map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-brand-50">
                      <Check size={11} className="text-brand-500" />
                    </div>
                    <span className="text-sm font-medium text-brand-700">
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                disabled
                className="cursor-not-allowed w-full py-4 text-sm font-black uppercase tracking-widest rounded-2xl transition-all duration-300 border-2 border-brand-200 text-brand-800 hover:bg-brand-50 hover:border-brand-300"
              >
                COMING SOON
              </button>
            </motion.div>
          </FadeUp>
        </div>

        {/* mobile only */}
        <div className="flex lg:hidden flex-col gap-6 w-full">
          {PLANS.map((plan) => (
            <div
              key={plan.label}
              className={`w-full rounded-3xl p-8 flex flex-col border-2 ${
                plan.dark
                  ? "bg-brand-950 border-brand-800"
                  : "bg-white border-brand-100"
              }`}
            >
              {plan.badge && (
                <div className="bg-brand-500 text-white text-[9px] font-black uppercase tracking-[0.35em] px-3 py-1 rounded-full w-fit mb-6">
                  {plan.badge}
                </div>
              )}
              <div className="mb-6">
                <span
                  className={`text-xs font-black uppercase tracking-[0.35em] ${plan.dark ? "text-brand-500" : "text-brand-400"}`}
                >
                  {plan.label}
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span
                    className={`text-5xl font-black ${plan.dark ? "text-white" : "text-brand-950"}`}
                  >
                    {plan.price}
                  </span>
                  {plan.sub && (
                    <span
                      className={`text-sm ${plan.dark ? "text-brand-500" : "text-brand-400"}`}
                    >
                      {plan.sub}
                    </span>
                  )}
                </div>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.dark ? "bg-brand-700" : "bg-brand-50"}`}
                    >
                      <Check
                        size={11}
                        className={
                          plan.dark ? "text-brand-300" : "text-brand-500"
                        }
                      />
                    </div>
                    <span
                      className={`text-sm font-medium ${plan.dark ? "text-brand-200" : "text-brand-700"}`}
                    >
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>
              {plan.cta}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
