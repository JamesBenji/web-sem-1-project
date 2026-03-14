import { useState, useRef, useCallback, type FC } from "react";
import { tagColors } from "../utils/helpers";
import { CheckIcon, ClockIcon, InfoIcon } from "../components/Icons";
import { GlobalTimerSection } from "../components/timer/GlobalTimerSection";
import { StepTimer } from "../components/timer/StepTimer";
import {
  NotificationPortal,
  type Notification,
} from "../components/notifications/StickyNotification";
import { useSearchParams } from "react-router";
import { RECIPES } from "../data/recipes-data";

export const RecipeDetail: FC = () => {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const recipe = RECIPES.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center text-brand-500">
        Recipe not found.
      </div>
    );
  }

  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  const totalSeconds = recipe.steps.reduce((acc, s) => acc + s.duration, 0);
  const tc = tagColors[recipe.tag];
  const allDone = completedSteps.size === recipe.steps.length;

  const toggleStep = (id: string): void => {
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleTimerDone = useCallback(
    (stepId: string, stepTitle: string, stepIndex: number): void => {
      setNotifications((prev) => [
        ...prev,
        { id: `${stepId}-${Date.now()}`, stepTitle, stepIndex },
      ]);
    },
    [],
  );

  const dismissNotification = useCallback((notifId: string): void => {
    setNotifications((prev) => prev.filter((n) => n.id !== notifId));
  }, []);

  const scrollToStep = useCallback((stepIndex: number): void => {
    const el = stepRefs.current[stepIndex];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.focus({ preventScroll: true });
    }
  }, []);

  return (
    <>
      <NotificationPortal
        notifications={notifications}
        totalSteps={recipe.steps.length}
        onDismiss={dismissNotification}
        onGoNext={scrollToStep}
      />

      <div className="min-h-screen bg-white font-sans">
        <header className="relative h-72 overflow-hidden">
          <img
            src={recipe.image}
            alt={`${recipe.name} finished dish`}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(to bottom, rgba(253,242,248,0.3) 0%, rgba(253,242,248,0.95) 100%)",
            }}
          />

          <div className="absolute bottom-6 left-6 right-6">
            <span
              className="rounded-full px-3.5 py-1 text-xs font-bold tracking-[0.5px]"
              style={{ background: tc.bg, color: tc.text }}
            >
              {recipe.tag}
            </span>
            <h1 className="mt-2 mb-1 text-3xl lg:text-4xl font-black text-brand-950 leading-[1.15]">
              {recipe.name}
            </h1>
            <div className="flex gap-4 text-brand-800 text-[13px] font-semibold flex-wrap">
              <span className="flex items-center gap-1">
                <ClockIcon size={14} /> {recipe.time} min
              </span>
              <span>{recipe.stage}</span>
              <span>{recipe.servings} servings</span>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-5 pt-6 pb-20 grid gap-6 grid-cols-1 lg:grid-cols-[1fr_300px]">
          <p className="text-brand-900 text-base leading-[1.7] bg-brand-50 rounded-2xl px-5 py-4 border-l-0 border-brand-400 lg:col-start-1">
            {recipe.description}
          </p>

          <aside
            aria-label="Ingredients and nutrition"
            className="flex flex-col gap-5 self-start lg:sticky lg:top-20 lg:row-start-1 lg:row-end-5 lg:col-start-2"
          >
            <GlobalTimerSection totalSeconds={totalSeconds} />
            <div className="bg-white rounded-[18px] border-[1.5px] border-brand-200 overflow-hidden">
              <div className="px-4 pt-3.5 pb-2.5 text-lg font-extrabold text-brand-950 flex items-center gap-2 border-b border-brand-50">
                Ingredients
              </div>

              <ul className="list-none">
                {recipe.ingredients.map((ing) => (
                  <li
                    key={ing.id}
                    className="flex justify-between px-4 py-2.5 text-sm border-t border-brand-50 first:border-t-0"
                  >
                    <span className="text-brand-950 font-medium">
                      {ing.name}
                    </span>
                    <span className="text-brand-500 font-bold">
                      {ing.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-[18px] border-[1.5px] border-brand-200 overflow-hidden">
              <div className="px-4 pt-3.5 pb-2.5 text-lg font-extrabold text-brand-950 flex items-center gap-2 border-b border-brand-50">
                Nutrition
                <small className="ml-auto font-normal text-sm text-brand-500">
                  per serving
                </small>
              </div>
              <div className="grid grid-cols-2 gap-px bg-brand-50">
                {(
                  [
                    { label: "Calories", value: recipe.nutrition.calories },
                    { label: "Protein", value: recipe.nutrition.protein },
                    { label: "Carbs", value: recipe.nutrition.carbs },
                    { label: "Fat", value: recipe.nutrition.fat },
                  ] as const
                ).map((n) => (
                  <div
                    key={n.label}
                    className="bg-white px-3.5 py-2.5 text-center"
                  >
                    <div className="text-base font-extrabold text-brand-700">
                      {n.value}
                    </div>
                    <div className="text-[11px] text-brand-800 font-semibold uppercase tracking-[0.5px]">
                      {n.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <section aria-label="Recipe steps" className="lg:col-start-1">
            <h2 className="text-xl font-extrabold text-brand-950 mb-4 flex items-center gap-2">
              Step by Step
            </h2>
            <ol className="flex flex-col gap-4 list-none">
              {recipe.steps.map((step, idx) => {
                const done = completedSteps.has(step.id);
                return (
                  <li key={step.id}>
                    <article
                      className={`rounded-[20px] border-2 p-5 pb-4 transition-all duration-300 ease-in-out scroll-mt-20 ${
                        done
                          ? "bg-brand-50 border-brand-300 opacity-75"
                          : "bg-white border-brand-200"
                      }`}
                      aria-label={`Step ${idx + 1}: ${step.title}`}
                      ref={(el) => {
                        stepRefs.current[idx] = el;
                      }}
                      tabIndex={-1}
                    >
                      <header className="flex items-start gap-3.5 mb-3">
                        <div
                          className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-base transition-all duration-300 ${
                            done
                              ? "bg-brand-500 text-white"
                              : "bg-brand-100 text-brand-700"
                          }`}
                          aria-hidden="true"
                        >
                          {done ? <CheckIcon /> : idx + 1}
                        </div>
                        <div>
                          <h3 className="font-extrabold text-base text-brand-950 mb-1">
                            {step.title}
                          </h3>
                          <p className="text-brand-900 text-sm leading-[1.65]">
                            {step.instruction}
                          </p>
                        </div>
                      </header>

                      {step.tip && (
                        <aside
                          className="bg-brand-50 rounded-[10px] px-3.5 py-2 text-[13px] text-brand-800 mb-3 border-l-0 border-brand-400 italic flex items-center gap-2"
                          aria-label="Tip"
                        >
                          <InfoIcon /> {step.tip}
                        </aside>
                      )}

                      <div className="flex flex-col gap-2.5">
                        <StepTimer
                          duration={step.duration}
                          stepTitle={step.title}
                          stepIndex={idx}
                          totalSteps={recipe.steps.length}
                          onTimerDone={() =>
                            handleTimerDone(step.id, step.title, idx)
                          }
                        />
                        <button
                          className={`flex items-center justify-center gap-2 rounded-[10px] px-4 py-2 cursor-pointer font-bold text-sm transition-all duration-200 border-[1.5px] ${
                            done
                              ? "bg-brand-100 text-brand-700 border-brand-300"
                              : "bg-transparent text-brand-500 border-brand-200"
                          }`}
                          onClick={() => toggleStep(step.id)}
                          aria-pressed={done}
                        >
                          <CheckIcon /> {done ? "Completed" : "Mark as done"}
                        </button>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ol>
          </section>

          <section aria-live="polite" className="lg:col-start-1">
            {allDone && (
              <div
                className="border-2 border-green-300 bg-green-50 rounded-[20px] p-6 text-center"
                role="status"
              >
                <h2 className="font-black text-xl text-green-700 mb-1.5">
                  Recipe Complete!
                </h2>
                <p className="text-green-900 text-lg">
                  You've made {recipe.name} for your little one. Enjoy this
                  precious moment together.
                </p>
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
};
