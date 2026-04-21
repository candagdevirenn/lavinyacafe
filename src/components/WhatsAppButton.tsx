const WhatsAppButton = () => (
  <a
    href="https://wa.me/905316493828"
    target="_blank"
    rel="noreferrer"
    aria-label="Contact us on WhatsApp"
    className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald text-cream flex items-center justify-center shadow-elegant hover:bg-gold hover:text-gold-foreground transition-all duration-500 ease-elegant hover:scale-110 group animate-float-y"
  >
    <span className="absolute inset-0 rounded-full animate-gold-pulse" />
    <span className="absolute inset-0 rounded-full bg-emerald/40 animate-ping opacity-75" />
    <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-6 w-6 transition-transform duration-500 group-hover:rotate-12">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 0C5.494 0 .149 5.345.149 11.91c0 2.097.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.752 1.466h.005c6.563 0 11.908-5.345 11.908-11.91 0-3.181-1.24-6.169-3.495-8.418A11.831 11.831 0 0012.057 0z" />
    </svg>
  </a>
);

export default WhatsAppButton;
