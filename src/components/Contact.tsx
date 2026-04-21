import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Clock, Mail, Send, Navigation, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRevealAll } from "@/hooks/useReveal";

const schema = z.object({
  name: z.string().trim().min(1, "İsim gereklidir").max(100),
  email: z.string().trim().email("Geçersiz e-posta").max(255),
  message: z.string().trim().min(1, "Mesaj gereklidir").max(1000),
});

// Lavinya — Bağlarçeşme, Esenyurt
const CAFE_LAT = 41.0245;
const CAFE_LNG = 28.6803;
const MAPS_URL =
  "https://maps.google.com/?q=Bağlarçeşme,+1103.+Sk.+No:15/9,+34517+Esenyurt/İstanbul";

// Haversine — kuş uçuşu km
const distanceKm = (lat1: number, lng1: number, lat2: number, lng2: number) => {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
};

const Contact = () => {
  useRevealAll();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [distance, setDistance] = useState<number | null>(null);
  const [locating, setLocating] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    toast.success("Teşekkürler — en kısa sürede sizinle iletişime geçeceğiz.");
    setForm({ name: "", email: "", message: "" });
  };

  const findRoute = () => {
    if (!("geolocation" in navigator)) {
      toast.error("Tarayıcınız konum servisini desteklemiyor.");
      window.open(MAPS_URL, "_blank");
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const km = distanceKm(
          pos.coords.latitude,
          pos.coords.longitude,
          CAFE_LAT,
          CAFE_LNG
        );
        setDistance(km);
        setLocating(false);
        toast.success(`Lavinya size ${km.toFixed(1)} km uzaklıkta.`);
        const url = `https://www.google.com/maps/dir/?api=1&origin=${pos.coords.latitude},${pos.coords.longitude}&destination=${CAFE_LAT},${CAFE_LNG}&travelmode=driving`;
        window.open(url, "_blank");
      },
      () => {
        setLocating(false);
        toast.error("Konum izni reddedildi. Haritada açılıyor…");
        window.open(MAPS_URL, "_blank");
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  return (
    <section id="contact" className="py-20 sm:py-24 md:py-36 bg-cream">
      <div className="container-luxe">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="eyebrow">
            <span className="gold-divider" />
            Bizi Ziyaret Edin
            <span className="gold-divider" />
          </span>
          <h2 className="mt-5 sm:mt-6 font-serif text-[clamp(2.2rem,8vw,4rem)] text-emerald leading-[1.05]">
            Size bir yer <em className="not-italic text-gold-deep">ayırdık.</em>
          </h2>
        </div>

        <div className="mt-12 sm:mt-16 grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Info + map */}
          <div className="lg:col-span-3 reveal">
            <div className="aspect-[16/10] overflow-hidden shadow-elegant border border-emerald/10">
              <iframe
                title="Lavinya konumu"
                src="https://www.google.com/maps?q=Ba%C4%9Flar%C3%A7e%C5%9Fme,+1103.+Sk.+No:15/9,+34517+Esenyurt/%C4%B0stanbul&output=embed"
                className="h-full w-full grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <InfoItem icon={MapPin} title="Adres">
                Bağlarçeşme, 1103. Sk. No:15/9,<br />
                34517 Esenyurt / İstanbul
              </InfoItem>
              <InfoItem icon={Phone} title="Telefon">
                <a href="tel:+905316493828" className="hover:text-gold-deep transition-colors">
                  0531 649 38 28
                </a>
              </InfoItem>
              <InfoItem icon={Clock} title="Çalışma Saatleri">
                Her gün 01:00'a kadar açığız
              </InfoItem>
              <InfoItem icon={Mail} title="E-posta">
                <a href="mailto:info@lavinyacafe.com" className="hover:text-gold-deep transition-colors">
                  info@lavinyacafe.com
                </a>
              </InfoItem>
            </div>

            {/* Distance / route CTA */}
            <div className="mt-8 bg-emerald-deep text-cream p-6 sm:p-8 border border-gold/20 shadow-soft">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.3em] text-gold">
                    Yakınınızda
                  </div>
                  <div className="mt-2 font-serif text-xl md:text-2xl">
                    {distance !== null ? (
                      <>
                        Lavinya size{" "}
                        <span className="text-gold">{distance.toFixed(1)} km</span> uzaklıkta
                      </>
                    ) : (
                      <>Konumunuza göre rota oluşturalım</>
                    )}
                  </div>
                  <p className="mt-2 text-cream/60 text-sm font-light">
                    Konum izni verdiğinizde mesafenizi hesaplar ve haritada rota açarız.
                  </p>
                </div>
                <button
                  onClick={findRoute}
                  disabled={locating}
                  className="group relative inline-flex items-center justify-center gap-3 bg-gold text-gold-foreground px-6 py-4 text-sm uppercase tracking-[0.2em] font-medium overflow-hidden hover:shadow-gold transition-all duration-500 ease-elegant disabled:opacity-70 disabled:cursor-wait whitespace-nowrap"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cream/40 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-elegant" />
                  {locating ? (
                    <Loader2 className="h-4 w-4 animate-spin relative" />
                  ) : (
                    <Navigation className="h-4 w-4 relative transition-transform duration-500 group-hover:rotate-[20deg]" />
                  )}
                  <span className="relative">
                    {locating ? "Konum alınıyor…" : distance !== null ? "Tekrar yol al" : "Yakındaki rotayı bul"}
                  </span>
                </button>
              </div>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-3 text-sm text-emerald hover:text-gold-deep transition-colors uppercase tracking-[0.2em] font-medium"
            >
              <MapPin className="h-4 w-4" /> Haritada görüntüle
            </a>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-2 reveal bg-emerald text-cream p-7 sm:p-8 lg:p-10 shadow-elegant">
            <h3 className="font-serif text-2xl md:text-3xl text-cream">Mesaj gönderin</h3>
            <p className="mt-2 text-cream/70 text-sm font-light">
              Genellikle bir gün içinde, çoğu zaman daha hızlı yanıtlıyoruz.
            </p>

            <div className="mt-8 space-y-5">
              <Field
                label="İsim"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                maxLength={100}
              />
              <Field
                label="E-posta"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                maxLength={255}
              />
              <Field
                label="Mesaj"
                textarea
                value={form.message}
                onChange={(v) => setForm({ ...form, message: v })}
                maxLength={1000}
              />

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gold text-gold-foreground px-6 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-cream transition-all duration-500 ease-elegant"
              >
                <Send className="h-4 w-4" /> Mesajı Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center text-emerald">
      <Icon className="h-4 w-4" />
    </div>
    <div>
      <div className="text-[11px] uppercase tracking-[0.25em] text-gold-deep font-medium">{title}</div>
      <div className="mt-1 text-charcoal/80 font-light text-sm leading-relaxed">{children}</div>
    </div>
  </div>
);

const Field = ({
  label,
  value,
  onChange,
  type = "text",
  textarea,
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  maxLength?: number;
}) => (
  <label className="block">
    <span className="text-[11px] uppercase tracking-[0.25em] text-gold">{label}</span>
    {textarea ? (
      <textarea
        rows={4}
        value={value}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-transparent border-b border-cream/30 focus:border-gold outline-none py-2 text-cream font-light placeholder:text-cream/40 transition-colors resize-none"
      />
    ) : (
      <input
        type={type}
        value={value}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-transparent border-b border-cream/30 focus:border-gold outline-none py-2 text-cream font-light placeholder:text-cream/40 transition-colors"
      />
    )}
  </label>
);

export default Contact;
