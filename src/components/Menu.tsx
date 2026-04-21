import { useEffect, useState } from "react";
import { Sparkles, ArrowUpRight, X } from "lucide-react";
import turkishCoffee from "@/assets/menu-turkish-coffee.jpg";
import redVelvet from "@/assets/menu-red-velvet.jpg";
import latte from "@/assets/menu-latte.jpg";
import sahlep from "@/assets/menu-sahlep.jpg";
import breakfastHoney from "@/assets/menu-breakfast-honey.jpg";
import wrap from "@/assets/menu-wrap.jpg";
import creamyChicken from "@/assets/menu-creamy-chicken.jpg";
import sanSebastian from "@/assets/menu-san-sebastian.jpg";
import { useRevealAll } from "@/hooks/useReveal";

type Product = {
  category: string;
  name: string;
  desc: string;
  img: string;
};

// Öne çıkan 4 ürün — kullanıcıyı boğmadan
const featured: Product[] = [
  {
    category: "İmza",
    name: "Türk Kahvesi",
    desc: "Bakırda yavaş pişen, bol köpüklü klasik; lokum eşliğinde.",
    img: turkishCoffee,
  },
  {
    category: "Kahvaltı",
    name: "Karakovan Honey",
    desc: "Bingöl Karakovan balı, kaymak ve sıcak ekmekle.",
    img: breakfastHoney,
  },
  {
    category: "Yemek",
    name: "Kremalı Tavuk",
    desc: "Mantarlı krema sosta, pilav eşliğinde.",
    img: creamyChicken,
  },
  {
    category: "Tatlı",
    name: "San Sebastian",
    desc: "Yanık cheesecake, yoğun çikolata sosu.",
    img: sanSebastian,
  },
];

// Tüm menü — yalnızca diyalogda gösterilir
const allProducts: Product[] = [
  ...featured,
  {
    category: "Kahve",
    name: "Latte",
    desc: "Kadife süt dokusu, dengeli espresso.",
    img: latte,
  },
  {
    category: "Sıcak",
    name: "Sahlep",
    desc: "Tarçın ve antep fıstığı eşliğinde.",
    img: sahlep,
  },
  {
    category: "Yemek",
    name: "Tavuklu Wrap",
    desc: "Izgara tavuk, taze yeşillik, ev yapımı sos.",
    img: wrap,
  },
  {
    category: "Tatlı",
    name: "Red Velvet",
    desc: "Yumuşak kek katları ve hafif krema.",
    img: redVelvet,
  },
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => (
  <article
    className="reveal group relative flex flex-col overflow-hidden border border-gold/15 bg-emerald shadow-soft transition-all duration-700 ease-elegant hover:-translate-y-2 hover:border-gold/60 hover:shadow-amber"
    style={{ transitionDelay: `${index * 70}ms` }}
  >
    <div className="relative aspect-[4/3] overflow-hidden bg-emerald-deep">
      <img
        src={product.img}
        alt={`${product.name} — Lavinya menü`}
        loading="lazy"
        width={1024}
        height={1024}
        className="h-full w-full object-cover transition-transform duration-[1.4s] ease-elegant group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald via-transparent to-transparent opacity-60" />
      <span className="absolute left-4 top-4 border border-gold/40 bg-emerald-deep/70 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-gold backdrop-blur">
        {product.category}
      </span>
    </div>
    <div className="flex flex-1 flex-col p-6">
      <span className="mb-4 block h-px w-8 bg-gold transition-all duration-700 group-hover:w-14" />
      <h3 className="font-serif text-xl leading-tight text-cream transition-colors duration-500 group-hover:text-gold">
        {product.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-cream/62 font-light">
        {product.desc}
      </p>
    </div>
  </article>
);

const Menu = () => {
  useRevealAll();
  const [open, setOpen] = useState(false);

  // Modal açıkken sayfa kaydırmasını kilitle (scroll pozisyonunu koru)
  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const { body } = document;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return (
    <section
      id="menu"
      className="relative bg-emerald-deep py-20 text-cream overflow-x-clip sm:py-24 md:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 bg-gradient-amber-glow opacity-30 blur-3xl pointer-events-none" />

      <div className="container-luxe relative">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">
            <span className="gold-divider" />
            Menü
          </span>
          <h2 className="mt-5 sm:mt-6 font-serif text-[clamp(2.2rem,8vw,4rem)] leading-[1.05] tracking-tight text-cream">
            Öne çıkan dört seçim
          </h2>
          <p className="mt-5 max-w-lg text-[15px] sm:text-base text-cream/65 font-light leading-relaxed">
            Misafirlerimizin en sevdiği lezzetleri sade bir vitrinde topladık. Daha fazlası için tüm menüye göz atın.
          </p>
        </div>

        <div className="reveal mt-10 flex items-center gap-3">
          <Sparkles className="h-3.5 w-3.5 text-gold motion-safe:animate-amber-flicker" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-gold">
            İmza Lezzetler
          </span>
          <span className="h-px flex-1 bg-gold/15" />
        </div>

        <div className="mt-7 grid gap-6 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>

        <div className="reveal mt-14 flex flex-col items-center gap-4">
          <button
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-3 border-b border-cream pb-2 text-xs sm:text-sm uppercase tracking-[0.24em] text-cream hover:border-gold hover:text-gold transition-colors duration-500"
          >
            <span>Tüm Menüyü Gör</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
          <p className="text-[10px] uppercase tracking-[0.28em] text-cream/40">
            Güncel fiyatlar mekândaki menü kartında
          </p>
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Tüm menü"
          className="fixed inset-0 z-[80] bg-emerald-deep/92 backdrop-blur-xl animate-fade-in overflow-y-auto overscroll-contain [scroll-behavior:smooth] [-webkit-overflow-scrolling:touch]"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative mx-auto w-full max-w-6xl min-h-full px-5 py-20 sm:px-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Menüyü kapat"
              className="absolute right-5 top-6 sm:right-10 sm:top-8 inline-flex h-10 w-10 items-center justify-center border border-cream/20 text-cream hover:border-gold hover:text-gold transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
                Tüm Menü
              </span>
              <h3 className="mt-4 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-tight text-cream">
                Lavinya seçkisi
              </h3>
            </div>

            <div className="mt-10 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {allProducts.map((product, i) => (
                <ProductCard key={product.name} product={product} index={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;
