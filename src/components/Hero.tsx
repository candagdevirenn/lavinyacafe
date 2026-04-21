import { useEffect, useState } from "react";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import heroImg from "@/assets/hero-lavinya.jpg";

const Hero = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatTime = () =>
      new Intl.DateTimeFormat("tr-TR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Istanbul",
      }).format(new Date());

    setTime(formatTime());
    const id = window.setInterval(() => setTime(formatTime()), 30000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] bg-emerald-deep text-cream overflow-x-clip"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Lavinya gece lounge atmosferi ve şehir manzarası"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-75 motion-safe:animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/85 via-emerald-deep/45 to-emerald-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep via-emerald-deep/60 to-emerald-deep/20" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-amber-glow opacity-45" />
      </div>

      <div className="container-luxe min-h-[100svh] flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-14">
        {/* Top bar */}
        <div
          className="flex items-center justify-between gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] sm:tracking-[0.38em] text-cream/65 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="inline-flex items-center gap-2 min-w-0">
            <MapPin className="h-3.5 w-3.5 text-gold flex-shrink-0" />
            <span className="truncate">Esenyurt · İstanbul</span>
          </span>
          <span className="font-serif text-sm sm:text-base normal-case tracking-normal text-gold tabular-nums flex-shrink-0">
            {time}
          </span>
        </div>

        {/* Center content — yumuşak boşluklarla */}
        <div className="my-auto max-w-6xl py-10">
          <div
            className="mb-6 sm:mb-5 flex items-center gap-3 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.35s" }}
          >
            <span className="h-px w-8 bg-gold" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-cream/70">
              Cafe · Lounge · Gece
            </span>
          </div>

          <h1 className="font-serif font-light leading-[0.92] tracking-tight">
            <span className="block whitespace-nowrap text-[clamp(3.4rem,18vw,8rem)] text-cream drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] animate-[mask-rise_1.2s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
              Lavinya
            </span>
          </h1>

          <p
            className="mt-7 sm:mt-6 max-w-[34rem] text-[15px] sm:text-lg md:text-xl text-cream/75 leading-relaxed font-light opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.75s" }}
          >
            Amber ışık, gerçek kahve kokusu ve gece sohbetleri için sıcak bir Esenyurt köşesi.
          </p>

          <div
            className="mt-8 sm:mt-9 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.95s" }}
          >
            <a
              href="#menu"
              className="group inline-flex w-fit items-center gap-3 border-b border-cream pb-2 text-xs sm:text-sm uppercase tracking-[0.24em] text-cream hover:border-gold hover:text-gold transition-colors duration-500"
            >
              <span>Menüyü Gör</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="tel:+905316493828"
              className="group inline-flex w-fit items-center gap-3 text-xs sm:text-sm uppercase tracking-[0.22em] text-cream/75 hover:text-gold transition-colors duration-500"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="tabular-nums">0531 649 38 28</span>
            </a>
          </div>
        </div>

        {/* Footer stats — mobilde nefes alacak şekilde */}
        <div
          className="grid grid-cols-3 gap-4 border-t border-cream/12 pt-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.15s" }}
        >
          {[
            ["5.0", "Puan"],
            ["01:00", "Geceye"],
            ["1103", "Sokak"],
          ].map(([value, label]) => (
            <div key={label} className="min-w-0">
              <div className="font-serif text-2xl sm:text-2xl text-gold leading-none tabular-nums">{value}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.25em] text-cream/55 leading-tight">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
