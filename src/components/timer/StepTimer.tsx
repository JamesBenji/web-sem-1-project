import { useState, useEffect, useRef } from "react";
import { formatTime } from "../../utils/helpers.js";
import { PlayIcon, PauseIcon, ResetIcon } from "../Icons.js";
import { Check } from "lucide-react";

interface StepTimerProps {
  duration: number;
  stepTitle: string;
  stepIndex: number;
  totalSteps: number;
  onTimerDone: () => void;
}

export function StepTimer({ duration, onTimerDone }: StepTimerProps) {
  const [time, setTime] = useState<number>(duration);
  const [running, setRunning] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const notifiedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!running) return;
    if (time <= 0) {
      setRunning(false);
      setDone(true);
      return;
    }

    intervalRef.current = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          clearInterval(intervalRef.current!);
          setRunning(false);
          setDone(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, [running]);

  useEffect(() => {
    if (done && !notifiedRef.current) {
      notifiedRef.current = true;
      onTimerDone();
    }
  }, [done, onTimerDone]);

  const reset = () => {
    clearInterval(intervalRef.current!);
    setTime(duration);
    setRunning(false);
    setDone(false);
    notifiedRef.current = false;
  };

  const pct = ((duration - time) / duration) * 100;
  const circumference = 2 * Math.PI * 15;

  return (
    <div
      className={`step-timer${done ? " done" : ""}`}
      role="timer"
      aria-label={`Step timer: ${formatTime(time)} remaining`}
    >
      <div className="relative w-9 h-9 shrink-0" aria-hidden="true">
        <svg width="36" height="36" style={{ transform: "rotate(-90deg)" }}>
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="#fce7f3"
            strokeWidth="3"
          />
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke={done ? "#f6339a" : "#fb64b6"}
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - pct / 100)}
            style={{ transition: "stroke-dashoffset 0.5s" }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-brand-700">
          {done ? (
            <Check size={18} />
          ) : (
            `${Math.floor(time / 60)}:${String(time % 60).padStart(2, "0")}`
          )}
        </span>
      </div>

      <span className={`step-timer-label${done ? " done" : ""}`}>
        {done ? "Done!" : formatTime(time)}
      </span>

      <div className="step-timer-btns">
        <button
          onClick={() => setRunning((r) => !r)}
          className={`timer-btn-start${running ? " running" : ""}`}
          aria-label={running ? "Pause timer" : "Start timer"}
        >
          {running ? <PauseIcon /> : <PlayIcon />}
          {running ? "Pause" : "Start"}
        </button>
        <button
          onClick={reset}
          className="timer-btn-reset"
          aria-label="Reset timer"
        >
          <ResetIcon />
        </button>
      </div>
    </div>
  );
}
