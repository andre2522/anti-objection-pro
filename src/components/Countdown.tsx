import { useEffect, useMemo, useState } from "react";

interface CountdownProps {
  /** Target date in ms since epoch */
  target: number;
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export const Countdown = ({ target }: CountdownProps) => {
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const { d, h, m, s } = useMemo(() => {
    const diff = Math.max(0, target - now);
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    return { d, h, m, s };
  }, [now, target]);

  return (
    <div aria-live="polite" className="flex items-center gap-3 font-display">
      {d > 0 && (
        <div className="rounded-md bg-background/60 px-3 py-2 text-foreground shadow-sm">
          <span className="text-2xl font-bold">{pad(d)}</span>
          <span className="ml-1 text-xs">d</span>
        </div>
      )}
      <div className="rounded-md bg-background/60 px-3 py-2 text-foreground shadow-sm">
        <span className="text-2xl font-bold">{pad(h)}</span>
        <span className="ml-1 text-xs">h</span>
      </div>
      <div className="rounded-md bg-background/60 px-3 py-2 text-foreground shadow-sm">
        <span className="text-2xl font-bold">{pad(m)}</span>
        <span className="ml-1 text-xs">m</span>
      </div>
      <div className="rounded-md bg-background/60 px-3 py-2 text-foreground shadow-sm">
        <span className="text-2xl font-bold">{pad(s)}</span>
        <span className="ml-1 text-xs">s</span>
      </div>
    </div>
  );
};
