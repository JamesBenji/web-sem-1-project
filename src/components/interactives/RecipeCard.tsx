import { useState, type FC } from "react";
import { tagColors } from "../../utils/helpers.js";
import { ClockIcon } from "../Icons.js";
import type { Recipe } from "../../data/recipes-data.js";

interface RecipeCardProps {
  recipe: Recipe;
  onSelect: (recipe: Recipe) => void;
}

export const RecipeCard: FC<RecipeCardProps> = ({ recipe, onSelect }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const tc = tagColors[recipe.tag];

  return (
    <article
      onClick={() => onSelect(recipe)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: "pointer",
        borderRadius: 20,
        overflow: "hidden",
        background: "#fff",
        border: `2px solid ${hovered ? "#fda5d5" : "#fce7f3"}`,
        boxShadow: hovered
          ? "0 12px 40px rgba(246,51,154,0.15)"
          : "0 2px 12px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.25s ease",
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect(recipe)}
      aria-label={`View recipe: ${recipe.name}`}
    >
      <div className="relative h-45 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
        <div className="absolute top-3 left-3">
          <span
            className="rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.5px]"
            style={{ background: tc.bg, color: tc.text }}
          >
            {recipe.tag}
          </span>
        </div>
      </div>

      <div className="px-4.5 pt-4 pb-4.5">
        <h3 className="mb-1.5 text-base font-extrabold text-brand-950 leading-[1.3]">
          {recipe.name}
        </h3>
        <p className="flex justify-between items-center text-[13px] text-brand-800 m-0">
          <span className="flex items-center gap-1 font-semibold">
            <ClockIcon size={13} /> {recipe.time} min
          </span>
          <span className="font-semibold">{recipe.stage}</span>
        </p>
      </div>
    </article>
  );
};
