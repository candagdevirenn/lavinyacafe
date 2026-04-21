import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-emerald-deep text-cream/70 py-14 border-t border-gold/15 relative overflow-hidden">
    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    <div className="container-luxe grid md:grid-cols-3 gap-10 md:gap-10 items-start">
      <div className="text-center md:text-left">
        <div className="font-serif text-3xl text-cream">Lavinya</div>
        <div className="text-[10px] tracking-[0.4em] sm:tracking-[0.5em] uppercase text-gold mt-2">
          Şehrin Sıcak Köşesi
        </div>
      </div>

      <div className="space-y-3 text-sm font-light text-center md:text-left">
        <div className="flex items-start gap-3 justify-center md:justify-start">
          <MapPin className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
          <span>Bağlarçeşme, 1103. Sk. No:15/9, Esenyurt / İstanbul</span>
        </div>
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <Phone className="h-4 w-4 text-gold" />
          <a href="tel:+905316493828" className="hover:text-gold transition-colors">
            0531 649 38 28
          </a>
        </div>
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <Clock className="h-4 w-4 text-gold" />
          <span>Her gün 01:00'a kadar</span>
        </div>
      </div>

      <div className="text-xs tracking-wider text-cream/50 text-center md:text-right">
        © {new Date().getFullYear()} Lavinya<br />
        <span className="text-gold/60">İstanbul · Esenyurt</span>
      </div>
    </div>
  </footer>
);

export default Footer;
