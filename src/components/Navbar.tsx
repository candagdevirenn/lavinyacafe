import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Anasayfa", href: "#home" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Menü", href: "#menu" },
  { label: "Galeri", href: "#gallery" },
  { label: "Yorumlar", href: "#reviews" },
  { label: "İletişim", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-elegant animate-fade-in",
        // Mobilde her zaman opak — okunabilirlik için
        "bg-emerald-deep/95 backdrop-blur-xl border-b border-gold/15 shadow-soft",
        // Desktop'ta scroll'a göre değişsin
        scrolled
          ? "lg:bg-emerald-deep/95 lg:py-3"
          : "lg:bg-gradient-to-b lg:from-emerald-deep/40 lg:to-transparent lg:border-transparent lg:shadow-none lg:py-5",
        "py-3"
      )}
    >
      <div className="container-luxe flex items-center justify-between gap-4">
        <a href="#home" className="flex flex-col leading-none group min-w-0">
          <span className="font-serif text-xl sm:text-2xl md:text-3xl text-cream tracking-normal group-hover:text-gold transition-colors duration-500">
            Lavinya
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.32em] sm:tracking-[0.38em] uppercase text-gold mt-1">
            Esenyurt
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wider uppercase text-cream/90 hover:text-gold transition-colors duration-300 link-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+905316493828"
            className="group inline-flex items-center gap-2 text-sm text-cream hover:text-gold transition-colors"
          >
            <Phone className="h-4 w-4 transition-transform duration-500 group-hover:rotate-12" />
            0531 649 38 28
          </a>
        </div>

        {/* Mobil: telefon ikonu + menü butonu */}
        <div className="flex items-center gap-1 lg:hidden">
          <a
            href="tel:+905316493828"
            aria-label="Telefon"
            className="inline-flex h-10 w-10 items-center justify-center text-gold hover:text-cream transition-colors"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center text-cream hover:text-gold transition-colors"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 ease-elegant bg-emerald-deep",
          open ? "max-h-[600px] border-t border-gold/20" : "max-h-0"
        )}
      >
        <nav className="container-luxe py-8 flex flex-col gap-5">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream/90 text-lg font-serif tracking-wide hover:text-gold transition-colors opacity-0 animate-stagger-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+905316493828"
            className="inline-flex items-center gap-2 text-gold mt-3 pt-4 border-t border-gold/15"
          >
            <Phone className="h-4 w-4" /> 0531 649 38 28
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
