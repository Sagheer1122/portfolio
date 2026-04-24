import { useEffect, useState } from "react";

export const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[55] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl transition-transform duration-300 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        background: "radial-gradient(circle, hsl(72 95% 58% / 0.4), transparent 70%)",
      }}
    />
  );
};
