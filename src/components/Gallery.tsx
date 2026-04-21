import { useEffect, useState } from "react";
import { Maximize2 } from "lucide-react";
import lounge from "@/assets/lavinya-lounge.jpg";
import table from "@/assets/lavinya-table.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import { useRevealAll } from "@/hooks/useReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Lightbox, { type LightboxItem } from "./Lightbox";

const items: LightboxItem[] = [
  { src: lounge, alt: "Lavinya'nın amber ışıklı gece lounge'u", type: "image" },
  { src: table, alt: "Türk kahvesi, çay ve Red Velvet", type: "image" },
  { src: g3, alt: "Bakırda pişen Türk kahvesi", type: "image" },
  { src: g1, alt: "İnce belli bardakta Lavinya çayı", type: "image" },
  {
    src: "https://cdn.coverr.co/videos/coverr-coffee-being-poured-in-cup-7437/1080p.mp4",
    poster: g2,
    alt: "Lavinya'dan bir an — kahve hazırlanışı",
    type: "video",
  },
  { src: g4, alt: "Gece atıştırması — taze tatlılar", type: "image" },
  { src: g2, alt: "Lounge köşesi · sarı kadife yastıklar", type: "image" },
];

const Gallery = () => {
  useRevealAll();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      if (lightboxIndex !== null) return;
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 4000);
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => {
      clearInterval(id);
      api.off("select", onSelect);
    };
  }, [api, lightboxIndex]);

  return (
    <section id="gallery" className="py-24 md:py-36 bg-cream overflow-hidden relative">
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-amber-glow opacity-20 blur-3xl pointer-events-none" />

      <div className="container-luxe relative">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="eyebrow">
            <span className="gold-divider" />
            Galeri
            <span className="gold-divider" />
          </span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-emerald leading-[1.1]">
            Lavinya'dan <em className="not-italic text-gold-deep">anlar.</em>
          </h2>
          <p className="mt-4 text-charcoal/60 text-sm font-light">
            Bir görsele dokun — tam ekran aç, kaydırarak gezin.
          </p>
        </div>

        <div className="mt-16 reveal">
          <Carousel
            opts={{ loop: true, align: "start" }}
            setApi={setApi}
            className="relative"
          >
            <CarouselContent className="-ml-4">
              {items.map((it, i) => (
                <CarouselItem
                  key={i}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`${it.alt} — tam ekran aç`}
                    className="group relative overflow-hidden bg-emerald-deep aspect-[4/5] cursor-pointer w-full block"
                  >
                    <img
                      src={it.type === "video" ? it.poster ?? it.src : it.src}
                      alt={it.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-all duration-[1.6s] ease-elegant group-hover:scale-125 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

                    {it.type === "video" && (
                      <span className="absolute top-4 left-4 bg-gold/90 text-gold-foreground text-[10px] uppercase tracking-[0.2em] px-2 py-1">
                        Video
                      </span>
                    )}

                    <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-emerald-deep/60 backdrop-blur text-cream flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                      <Maximize2 className="h-4 w-4" />
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-elegant text-left">
                      <span className="block w-8 h-px bg-gold mb-3 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 delay-100" />
                      <p className="text-cream text-sm font-serif italic">{it.alt}</p>
                    </div>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 bg-emerald text-cream border-emerald hover:bg-gold hover:text-gold-foreground hover:border-gold h-10 w-10" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12 bg-emerald text-cream border-emerald hover:bg-gold hover:text-gold-foreground hover:border-gold h-10 w-10" />
          </Carousel>

          <div className="mt-8 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Slayt ${i + 1}`}
                className={`h-px transition-all duration-500 ${
                  current === i ? "w-12 bg-gold" : "w-6 bg-emerald/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </section>
  );
};

export default Gallery;
