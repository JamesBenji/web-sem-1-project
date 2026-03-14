import { useState, useEffect, useRef } from "react";
import { formatTime } from "../../utils/helpers.js";
import { PlayIcon, PauseIcon, ResetIcon } from "../Icons.js";

interface GlobalTimerSectionProps {
  totalSeconds: number;
}

export function GlobalTimerSection({ totalSeconds }: GlobalTimerSectionProps) {
  const [elapsed, setElapsed] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    } else {
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [running]);

  const pct = Math.min((elapsed / totalSeconds) * 100, 100);

  return (
    <section
      className="rounded-[20px] p-5 border-2 border-brand-300"
      style={{
        background: "linear-gradient(135deg, #fce7f3 0%, #fff8fd 100%)",
      }}
      aria-label="Overall recipe timer"
    >
      <h2 className="text-lg font-extrabold text-brand-950 mb-3">
        Total Recipe Timer
      </h2>

      <div className="flex flex-col justify-between items-center mb-3">
        <div>
          <time
            className="text-[28px] font-extrabold text-brand-700 tracking-[-0.5px]"
            dateTime={`PT${Math.floor(elapsed / 60)}M${elapsed % 60}S`}
          >
            {Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2, "0")}
          </time>
          &nbsp;
          <span className="text-xs text-brand-500">
            of ~{formatTime(totalSeconds)}
          </span>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <button
            className={`flex items-center justify-center gap-1.5 rounded-xl px-4.5 py-2.5 cursor-pointer
    font-bold text-sm font-[inherit] border-2 border-brand-500 transition-all duration-200 ${running ? "bg-white text-brand-700" : "bg-brand-500 text-white"}`}
            onClick={() => setRunning((r) => !r)}
            aria-label={running ? "Pause cooking timer" : "Start cooking timer"}
          >
            {running ? <PauseIcon /> : <PlayIcon />}
            {running ? "Pause" : "Start Cooking"}
          </button>

          <button
            className="flex  items-center  justify-center bg-white text-brand-700 border-2 border-brand-300 rounded-xl
    px-3.5 py-2.5 cursor-pointer font-[inherit]"
            onClick={() => {
              setElapsed(0);
              setRunning(false);
            }}
            aria-label="Reset cooking timer"
          >
            <ResetIcon /> &nbsp; Reset
          </button>
        </div>
      </div>

      <div
        className="bg-brand-100 rounded-full h-2 overflow-hidden"
        role="progressbar"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full transition-[width] duration-1000 ease-linear"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, #fb64b6, #f6339a)",
          }}
        />
      </div>
    </section>
  );
}
