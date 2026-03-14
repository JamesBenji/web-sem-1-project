import { useState, useEffect, useRef } from "react";
import { RECIPES, type Recipe } from "../data/recipes-data";

interface RecipeState {
  recipes: Recipe[];
  selectedRecipe: Recipe | null;
  searchQuery: string;
  activeFilter: string;
  setSelectedRecipe: (recipe: Recipe | null) => void;
  setSearchQuery: (q: string) => void;
  setActiveFilter: (f: string) => void;
}

type PartialOrFn =
  | Partial<RecipeState>
  | ((s: RecipeState) => Partial<RecipeState>);
type SetState = (partial: PartialOrFn) => void;
type GetState = () => RecipeState;
type Initializer = (set: SetState, get: GetState) => RecipeState;

function createStore(initializer: Initializer) {
  let state: RecipeState;
  const listeners = new Set<() => void>();

  const setState: SetState = (partial) => {
    state = {
      ...state,
      ...(typeof partial === "function" ? partial(state) : partial),
    };
    listeners.forEach((l) => l());
  };

  const getState: GetState = () => state;

  const subscribe = (listener: () => void): (() => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  state = initializer(setState, getState);

  function useStore<T>(selector: (s: RecipeState) => T): T {
    const [snap, setSnap] = useState<T>(() => selector(getState()));
    const selectorRef = useRef<(s: RecipeState) => T>(selector);
    selectorRef.current = selector;

    useEffect(() => {
      return subscribe(() => {
        const next = selectorRef.current(getState());
        setSnap((prev) => (Object.is(prev, next) ? prev : next));
      });
    }, []);

    return snap;
  }

  return useStore;
}

export const useRecipeStore = createStore((set) => ({
  recipes: RECIPES,
  selectedRecipe: null,
  searchQuery: "",
  activeFilter: "All",
  setSelectedRecipe: (recipe: Recipe | null) => set({ selectedRecipe: recipe }),
  setSearchQuery: (q: string) => set({ searchQuery: q }),
  setActiveFilter: (f: string) => set({ activeFilter: f }),
}));
