import { Phone } from "lucide-react";

const CallButton = () => (
  <a
    href="tel:+905316493828"
    aria-label="Bizi arayın"
    className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full bg-gold text-gold-foreground flex items-center justify-center shadow-gold hover:bg-emerald hover:text-cream transition-all duration-500 ease-elegant hover:scale-110 animate-gold-pulse"
  >
    <Phone className="h-6 w-6" />
  </a>
);

export default CallButton;
