import { type StageTag } from "../data/recipes-data";

export const formatTime = (seconds: number): string => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s}s`;
  if (s === 0) return `${m}m`;
  return `${m}m ${s}s`;
};

export type TagColor = { bg: string; text: string };

export const tagColors: Record<StageTag, TagColor> = {
  "Stage 1": { bg: "#fce7f3", text: "#c6005c" },
  "Stage 2": { bg: "#fdf2f8", text: "#861043" },
  "Stage 3": { bg: "#fff0f9", text: "#510424" },
};

export const FILTERS = ["All", "Stage 1", "Stage 2", "Stage 3"] as const;
export type Filter = (typeof FILTERS)[number];
