import BouncingFruitsGif from "../../assets/gifs/bouncing-fruits.gif";

interface RotatingBadgeProps {
  className?: string;
  size?: "sm" | "md";
}

export const RotatingBadge = ({
  className = "",
  size = "md",
}: RotatingBadgeProps) => {
  const dim = size === "sm" ? "w-28 h-28" : "w-40 h-40";
  const inner = size === "sm" ? "w-14 h-14" : "w-20 h-20";

  return (
    <div
      className={`${dim} relative flex items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 border-2 border-dashed border-brand-300 rounded-full animate-[spin_20s_linear_infinite] opacity-40" />
      <div className="absolute inset-4 border border-brand-200 rounded-full animate-[spin_10s_linear_reverse_infinite] opacity-60" />
      <div
        className={`relative ${inner} rounded-full overflow-hidden border-4 border-white shadow-xl z-20 bg-linear-to-br from-brand-100 to-brand-200 flex items-center justify-center`}
      >
        <img
          src={BouncingFruitsGif}
          alt="Bouncing Fruits"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <path
            id={`cp-${size}`}
            d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
            fill="none"
          />
          <text className="text-[6px] font-black uppercase tracking-[0.4em] fill-brand-600">
            <textPath href={`#cp-${size}`}>
              Healthy Everyday • Healthy Everyday •
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};
