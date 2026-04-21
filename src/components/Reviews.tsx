import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { useRevealAll } from "@/hooks/useReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Elif Y.",
    role: "Ailecek ziyaret",
    text: "Amber ışıklar ve sarı kadife yastıklar — gerçekten sıcak bir atmosfer. Çocuklarımızla geldik, kendimizi rahat hissettik. Türk kahvesi mükemmeldi.",
  },
  {
    name: "Mehmet K.",
    role: "Yerel rehber",
    text: "Esenyurt'un en geç açık, en şık cafesi. Red Velvet pastası ve manzarası eşsiz. Gece sohbet için ideal bir mekân.",
  },
  {
    name: "Sarah L.",
    role: "Gezgin",
    text: "Şehir manzarasına bakarken Türk kahvesi içtim — unutulmaz bir akşam. Servis çok ilgili, ortam İstanbul'un en güzel sürprizlerinden.",
  },
  {
    name: "Burak D.",
    role: "İş toplantısı",
    text: "Müşterilerimle buluşmak için ideal. Atmosfer profesyonel ama sıcak. Tavuklu wrap ve kremalı tavuk şahane.",
  },
  {
    name: "Ayşe N.",
    role: "Çift olarak",
    text: "Eşimle yıldönümümüzde geldik, gece manzarası ve mum ışığında bir akşam yaşadık. San Sebastian cheesecake muhteşemdi.",
  },
  {
    name: "Can Ö.",
    role: "Kahve tutkunu",
    text: "Türk kahvesi gerçek bakırda pişiyor — fark belli oluyor. Espresso da iyi kavrulmuş. Burayı sürekli ziyaret edeceğim.",
  },
];

const RATING = 5.0;
const COUNT = reviews.length;

const Reviews = () => {
  useRevealAll();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    const id = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 5000);
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => {
      clearInterval(id);
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="reviews" className="py-20 sm:py-24 md:py-36 bg-emerald-deep text-cream relative overflow-hidden">
      <div className="container-luxe">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="eyebrow">
            <span className="gold-divider" />
            Misafir Sözleri
            <span className="gold-divider" />
          </span>
          <h2 className="mt-5 sm:mt-6 font-serif text-[clamp(2.2rem,8vw,4rem)] text-cream leading-[1.05]">
            Geri dönenler <br />
            <em className="not-italic text-gold">tarafından sevildi.</em>
          </h2>
        </div>

        {/* Rating summary */}
        <div className="reveal mt-12 sm:mt-14 max-w-3xl mx-auto bg-emerald border border-gold/20 p-7 sm:p-8 md:p-10 grid sm:grid-cols-[auto_1fr] gap-7 sm:gap-8 items-center shadow-elegant">
          <div className="text-center sm:border-r sm:border-gold/20 sm:pr-8">
            <div className="font-serif text-5xl sm:text-6xl md:text-7xl text-gold leading-none">
              {RATING.toFixed(1)}
            </div>
            <div className="mt-3 flex justify-center gap-1 text-gold">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <div className="mt-3 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.25em] text-cream/70">
              {COUNT}+ misafir
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-cream/80 font-light leading-relaxed">
              Misafirlerimizin en sık bahsettiği konular:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Aile dostu",
                "Sıcak atmosfer",
                "Geç saate açık",
                "Türk Kahvesi",
                "Red Velvet",
                "Şehir manzarası",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1.5 text-[11px] uppercase tracking-[0.15em] text-gold border border-gold/30 hover:bg-gold hover:text-gold-foreground transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 reveal">
          <Carousel
            opts={{ loop: true, align: "start" }}
            setApi={setApi}
            className="relative"
          >
            <CarouselContent className="-ml-6">
              {reviews.map((r, i) => (
                <CarouselItem
                  key={i}
                  className="pl-6 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <article className="group h-full bg-emerald p-8 lg:p-10 border border-gold/15 hover:border-gold/60 transition-all duration-700 ease-elegant hover:-translate-y-2 hover:shadow-gold relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/20 transition-all duration-700 group-hover:text-gold/50 group-hover:scale-110 group-hover:rotate-12" />
                    <div className="flex gap-1 text-gold relative">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-6 font-serif text-lg leading-relaxed text-cream/90 italic relative">
                      "{r.text}"
                    </p>
                    <div className="mt-8 pt-6 border-t border-gold/15 relative">
                      <div className="font-serif text-cream">{r.name}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-gold/80">
                        {r.role}
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 bg-gold text-gold-foreground border-gold hover:bg-cream hover:text-emerald hover:border-cream h-10 w-10" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12 bg-gold text-gold-foreground border-gold hover:bg-cream hover:text-emerald hover:border-cream h-10 w-10" />
          </Carousel>

          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Yorum ${i + 1}`}
                className={`h-px transition-all duration-500 ${
                  current === i ? "w-12 bg-gold" : "w-6 bg-cream/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
