import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Recipes", to: "/recipes" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

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
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <Link
        to="/"
        className="text-2xl font-black tracking-tighter text-brand-900 select-none"
      >
        <Logo />
      </Link>
      <div className="flex items-center gap-8">
        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-brand-700">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative group transition-colors duration-200 ${
                  isActive ? "text-brand-500" : "hover:text-brand-500"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-brand-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};
