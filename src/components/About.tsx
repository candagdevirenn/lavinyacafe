import lounge from "@/assets/lavinya-lounge.jpg";
import table from "@/assets/lavinya-table.jpg";
import { useRevealAll } from "@/hooks/useReveal";

const About = () => {
  useRevealAll();
  return (
    <section id="about" className="relative py-20 sm:py-24 md:py-36 bg-cream overflow-hidden">
      {/* Subtle amber background */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-amber-glow opacity-30 blur-3xl pointer-events-none" />

      <div className="container-luxe grid lg:grid-cols-2 gap-14 sm:gap-16 lg:gap-20 items-center relative">
        <div className="reveal order-2 lg:order-1">
          <span className="eyebrow">
            <span className="gold-divider" />
            Hikâyemiz
          </span>
          <h2 className="mt-5 sm:mt-6 font-serif text-[clamp(2.2rem,8vw,4rem)] text-emerald leading-[1.05]">
            Şehrin sıcak<br />
            <em className="not-italic text-gold-deep">köşesi.</em>
          </h2>
          <div className="mt-7 sm:mt-8 space-y-5 text-[15px] sm:text-base text-charcoal/80 leading-relaxed font-light">
            <p>
              Lavinya, Esenyurt'un yüksek katlı sessizliğinde, amber ışıklar
              ve sarı kadife yastıklarla kurulmuş bir gece kaçamağı. Şehrin
              ışıklarına bakarken bir Türk kahvesi yudumlamak için.
            </p>
            <p>
              Burada her şey samimi: taze pişirilmiş tatlılar, özenle demlenen
              çay, gerçek malzemelerle hazırlanan menü. Aileniz, sevdiğiniz ya
              da yalnızca kendinizle — gece 01:00'a kadar yanınızdayız.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
            {[
              { n: "5.0", l: "Misafir Puanı" },
              { n: "01:00", l: "Geç Saate" },
              { n: "100%", l: "Ev Yapımı" },
            ].map((s, i) => (
              <div
                key={s.l}
                className="reveal min-w-0"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-emerald leading-none">{s.n}</div>
                <div className="mt-2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-charcoal/60 leading-tight">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal order-1 lg:order-2 relative">
          <div className="aspect-[4/5] overflow-hidden shadow-elegant relative group">
            <img
              src={lounge}
              alt="Lavinya'nın amber ışıklı gece lounge'u"
              loading="lazy"
              width={1080}
              height={1350}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/30 via-transparent to-transparent" />
          </div>

          {/* İkinci görsel — yan rozet */}
          <div className="absolute -bottom-8 -left-6 hidden md:block w-44 aspect-square overflow-hidden border-4 border-cream shadow-gold animate-float-y">
            <img
              src={table}
              alt="Lavinya'da Türk çayı ve tatlı"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -top-6 -right-6 hidden md:block bg-emerald text-cream px-5 py-4 max-w-[200px] shadow-amber border border-gold/30">
            <div className="font-serif text-base italic leading-snug">"Sıcak. Samimi. Saat farkında değil."</div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-gold">— Lavinya'dan</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
