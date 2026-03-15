import { Logo } from "../layout/Logo";
import { Link } from "react-router";

const FOOTER_LINKS: [string, { label: string; to: string }[]][] = [
  [
    "Explore",
    [
      { label: "Recipes", to: "/recipes" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "FAQ", to: "/#faq" },
    ],
  ],
];

export const Footer = () => (
  <footer className="bg-brand-950 text-brand-400 px-12 py-16">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-start mb-12">
        <div>
          <div className="text-3xl font-black text-white tracking-tighter mb-3">
            <Logo />
          </div>
          <p className="text-sm max-w-xs leading-relaxed text-brand-500">
            Nourishing babies, empowering mothers.
            <br />
            One spoonful at a time.
          </p>
        </div>
        <div className="flex gap-16">
          {FOOTER_LINKS.map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-600 mb-4">
                {heading}
              </h4>
              <ul className="flex gap-4">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm hover:text-brand-300 transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-brand-800 pt-8 flex justify-between items-center text-xs text-brand-700">
        <span>
          &copy; {new Date().getFullYear()} Tiny Spoon. All rights reserved.
        </span>
      </div>
    </div>
  </footer>
);
