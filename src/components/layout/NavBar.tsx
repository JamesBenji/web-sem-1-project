import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NAV_LINKS = ["Recipes", "About", "Contact"];

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`h-20 flex justify-between items-center px-12 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm " : "bg-transparent"
      }`}
    >
      <div className="text-2xl font-black tracking-tighter text-brand-900 select-none">
        tiny spoon<span className="text-brand-500">.</span>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-brand-700">
          <a
            href="/recipes"
            className="hover:text-brand-500 transition-colors duration-200 relative group"
          >
            Recipes
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-500 group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="/about"
            className="hover:text-brand-500 transition-colors duration-200 relative group"
          >
            About
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-500 group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="/contact"
            className="hover:text-brand-500 transition-colors duration-200 relative group"
          >
            Contact
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-500 group-hover:w-full transition-all duration-300" />
          </a>

          {/* {NAV_LINKS.map((l) => (
            
          ))} */}
        </div>
        <button className="flex items-center gap-2 bg-brand-900 text-brand-50 px-6 py-2.5 text-sm font-bold uppercase tracking-widest hover:bg-brand-600 transition-all duration-300 rounded-full border-2 border-white ">
          {/* <Search size={14} /> */}
          <span>Get Started</span>
        </button>
      </div>
    </motion.nav>
  );
};
