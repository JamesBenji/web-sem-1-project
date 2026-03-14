import { motion } from "framer-motion";
import { MARQUEE_ITEMS } from "../../data/constants";

interface MarqueeStripProps {
  direction?: "left" | "right";
  bg?: string;
  textColor?: string;
  speed?: number;
}

export const MarqueeStrip = ({
  direction = "left",
  bg = "bg-brand-600",
  textColor = "text-white",
  speed = 60,
}: MarqueeStripProps) => {
  const displayItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className={`${bg} py-3.5 overflow-hidden whitespace-nowrap border-y-2 border-brand-700`}
    >
      <motion.div
        className="flex gap-10 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {displayItems.map((item, i) => (
          <span
            key={i}
            className={`${textColor} text-xs font-black uppercase tracking-widest flex items-center gap-4`}
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};
