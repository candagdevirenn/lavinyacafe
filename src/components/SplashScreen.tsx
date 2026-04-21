import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setFading(true), 1100);
    const hideTimer = window.setTimeout(() => setHidden(true), 1650);
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-emerald-deep text-cream transition-opacity duration-700 ease-elegant ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-emerald" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-amber-glow opacity-45" />

      <div className="relative flex h-full w-full items-center justify-center px-6 text-center">
        <div className="max-w-full">
          <div
            className="mb-5 text-[10px] uppercase tracking-[0.45em] text-gold opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Esenyurt · İstanbul
          </div>
          <h1 className="whitespace-nowrap font-serif text-[clamp(4rem,16vw,7rem)] font-light leading-none tracking-tight text-cream drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] animate-fade-in-up">
            Lavinya
          </h1>
          <div className="mx-auto mt-6 h-px w-40 bg-gold origin-center scale-x-0 animate-[splash-line_0.9s_cubic-bezier(0.22,1,0.36,1)_0.55s_forwards]" />
          <div
            className="mt-6 text-[11px] uppercase tracking-[0.36em] text-cream/62 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.75s" }}
          >
            Cafe · Lounge
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
