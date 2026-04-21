import { useEffect, useState, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxItem = {
  src: string;
  alt: string;
  type?: "image" | "video";
  poster?: string;
};

type Props = {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

const Lightbox = ({ items, index, onClose, onIndexChange }: Props) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = useCallback(
    () => onIndexChange((index + 1) % items.length),
    [index, items.length, onIndexChange]
  );
  const prev = useCallback(
    () => onIndexChange((index - 1 + items.length) % items.length),
    [index, items.length, onIndexChange]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [next, prev, onClose]);

  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const delta = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(delta) > 50) {
      if (delta < 0) next();
      else prev();
    }
    setTouchStart(null);
  };

  const item = items[index];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[120] bg-emerald-deep/97 backdrop-blur-md flex items-center justify-center animate-fade-in"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onClick={(e) => {
        if (e.target === containerRef.current) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Galeri görüntüleyici"
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Kapat"
        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-all duration-500 ease-elegant"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Counter */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.4em] text-cream/60">
        {index + 1} / {items.length}
      </div>

      {/* Prev */}
      <button
        onClick={prev}
        aria-label="Önceki"
        className="hidden md:flex absolute left-6 lg:left-10 w-12 h-12 rounded-full border border-gold/30 text-cream items-center justify-center hover:bg-gold hover:text-gold-foreground hover:border-gold transition-all duration-500 ease-elegant"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Media */}
      <div className="relative max-w-[92vw] max-h-[80vh] w-auto flex items-center justify-center px-4">
        {item.type === "video" ? (
          <video
            key={item.src}
            src={item.src}
            poster={item.poster}
            controls
            autoPlay
            className="max-h-[80vh] max-w-full object-contain shadow-elegant animate-fade-in"
          />
        ) : (
          <img
            key={item.src}
            src={item.src}
            alt={item.alt}
            className="max-h-[80vh] max-w-full object-contain shadow-elegant animate-fade-in"
          />
        )}
      </div>

      {/* Next */}
      <button
        onClick={next}
        aria-label="Sonraki"
        className="hidden md:flex absolute right-6 lg:right-10 w-12 h-12 rounded-full border border-gold/30 text-cream items-center justify-center hover:bg-gold hover:text-gold-foreground hover:border-gold transition-all duration-500 ease-elegant"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Caption */}
      <div className="absolute bottom-8 inset-x-0 text-center px-6">
        <p className="font-serif italic text-cream/80 text-sm md:text-base">{item.alt}</p>
        <div className="mt-4 flex justify-center gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => onIndexChange(i)}
              aria-label={`Slayt ${i + 1}`}
              className={`h-px transition-all duration-500 ${
                i === index ? "w-10 bg-gold" : "w-4 bg-cream/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile swipe hint */}
      <div className="md:hidden absolute bottom-24 inset-x-0 text-center text-[10px] uppercase tracking-[0.4em] text-cream/40">
        ← Kaydır →
      </div>
    </div>
  );
};

export default Lightbox;
