import { type FC } from "react";
import { FILTERS } from "../utils/helpers.js";
import { RecipeCard } from "../components/interactives/RecipeCard.js";
import { SearchIcon } from "../components/Icons.jsx";
import { useRecipeStore } from "../store/RecipeStore.js";
import { useNavigate } from "react-router";

const RecipePage: FC = () => {
  const recipes = useRecipeStore((s) => s.recipes);
  const searchQuery = useRecipeStore((s) => s.searchQuery);
  const activeFilter = useRecipeStore((s) => s.activeFilter);
  const setSearchQuery = useRecipeStore((s) => s.setSearchQuery);
  const setActiveFilter = useRecipeStore((s) => s.setActiveFilter);
  const navigate = useNavigate();

  const filtered = recipes.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.stage.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "All" || r.tag === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-white ">
      <header className="bg-brand-100 px-8 lg:px-16 lg:pt-32 pt-28 pb-6 lg:pb-12 border-b border-brand-200">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl  lg:text-7xl font-black text-brand-950 mb-4 leading-tight">
            What's cooking
            <span className="text-brand-500"> today?</span>
          </h1>

          <div className="relative mb-2 lg:mb-4 max-w-lg mx-auto">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-400">
              <SearchIcon />
            </span>
            <input
              type="search"
              placeholder="Search recipes, stages…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search recipes"
              className="w-full rounded-2xl border-2 border-brand-200 bg-white py-2 lg:py-3.5 pl-11 pr-4 text-sm text-brand-950 outline-none transition-colors duration-200 focus:border-brand-400 placeholder:text-brand-300"
            />
          </div>

          <nav
            aria-label="Filter by stage"
            className="flex flex-wrap gap-2 justify-center"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                aria-pressed={activeFilter === f}
                className={`rounded-full border-2 px-5 py-2 text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === f
                    ? "border-brand-500 bg-brand-500 text-white"
                    : "border-brand-200 bg-white text-brand-700 hover:border-brand-300"
                }`}
              >
                {f}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8 lg:px-16 py-8">
        <div className="flex justify-end mb-5 ">
          <p className="text-brand-800 italic text-xs">
            {filtered.length} of {recipes.length} recipes{" "}
          </p>
        </div>
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <h2 className="text-xl font-black text-brand-950 mb-2">
              No recipes found
            </h2>
            <p className="text-sm text-brand-500">
              Try a different search or filter
            </p>
          </div>
        ) : (
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            }}
          >
            {filtered.map((r) => (
              <RecipeCard
                key={r.id}
                recipe={r}
                onSelect={(recipe) =>
                  navigate(`/recipe-detail?id=${recipe.id}`)
                }
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default RecipePage;
