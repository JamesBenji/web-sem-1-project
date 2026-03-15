import { useState, type FC } from "react";

export const RatingWidget: FC = () => {
  const [hovered, setHovered] = useState<number>(0);
  const [selected, setSelected] = useState<number>(0);

  if (selected > 0) {
    return (
      <div className="border-2 border-brand-200 bg-brand-50 rounded-[20px] p-6 text-center">
        <h2 className="font-black text-xl text-brand-950 mb-1">
          Thank you for your rating!
        </h2>
        <p className="text-brand-500 text-sm">
          You rated this recipe {selected} out of 5 stars.
        </p>
      </div>
    );
  }

  return (
    <div className="border-2 border-brand-200 bg-white rounded-[20px] p-6 text-center">
      <h2 className="font-black text-xl text-brand-950 mb-1">How did it go?</h2>
      <p className="text-brand-500 text-sm mb-4">Rate this recipe</p>
      <div className="flex justify-center gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setSelected(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            aria-label={`Rate ${star} out of 5`}
            className="text-4xl transition-transform duration-150 hover:scale-125 cursor-pointer"
          >
            <span
              className={
                star <= (hovered || selected)
                  ? "text-amber-400"
                  : "text-brand-100"
              }
            >
              ★
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
