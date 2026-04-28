import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Search, Star, Shield, Award, Users, MapPin, Plane, Sparkles, MessageCircle, CheckCircle2, Heart } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import heroImg from "@/assets/hero-tropical.jpg";
import maldives from "@/assets/dest-maldives.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import bali from "@/assets/dest-bali.jpg";
import goa from "@/assets/dest-goa.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import swiss from "@/assets/dest-swiss.jpg";
import kerala from "@/assets/dest-kerala.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TripZip Holidays — Best Tour Packages in India & International | Affordable Luxury Travel" },
      { name: "description", content: "Plan your dream trip with TripZip Holidays. Domestic & international tour packages, honeymoon, group & adventure trips across PAN India. Get a free quote today." },
      { property: "og:title", content: "TripZip Holidays — Affordable Luxury Travel Packages" },
      { property: "og:description", content: "Curated holiday packages for couples, friends & adventurers. 10+ years experience, 500+ happy clients." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const destinations = [
  { img: maldives, name: "Maldives", tag: "Honeymoon", price: "₹68,999", nights: "5N / 6D" },
  { img: ladakh, name: "Ladakh", tag: "Adventure", price: "₹24,999", nights: "6N / 7D" },
  { img: bali, name: "Bali", tag: "International", price: "₹42,499", nights: "5N / 6D" },
  { img: goa, name: "Goa", tag: "Beach", price: "₹12,999", nights: "3N / 4D" },
  { img: dubai, name: "Dubai", tag: "Luxury", price: "₹49,999", nights: "4N / 5D" },
  { img: swiss, name: "Switzerland", tag: "Honeymoon", price: "₹1,29,999", nights: "7N / 8D" },
  { img: kerala, name: "Kerala", tag: "Backwaters", price: "₹18,499", nights: "4N / 5D" },
];

const reasons = [
  { icon: Shield, title: "Verified Booking", text: "Every booking secured & guaranteed with verified partners." },
  { icon: Award, title: "Award-Winning Service", text: "Recognized for outstanding customer experience." },
  { icon: Users, title: "Expert Travel Curators", text: "Hand-picked itineraries from certified travel experts." },
  { icon: Heart, title: "Best Customer Satisfaction", text: "98% of travellers recommend us to friends & family." },
];

const stats = [
  { n: "10+", l: "Years Experience" },
  { n: "500+", l: "Happy Travellers" },
  { n: "75+", l: "Destinations" },
  { n: "PAN", l: "India Services" },
];

const testimonials = [
  { name: "Aarav & Diya Mehta", trip: "Maldives Honeymoon", text: "An absolute dream! Every detail was perfect — the resort, the candle-lit dinner, the seaplane. TripZip exceeded every expectation.", rating: 5 },
  { name: "Karan Verma", trip: "Ladakh Bike Tour", text: "Best adventure of my life. The team handled everything from permits to logistics. I just focused on the road and views.", rating: 5 },
  { name: "Priya Sharma", trip: "Bali Group Trip", text: "Travelled with 8 friends. Smooth coordination, gorgeous villas, and incredible value. Already booked our next trip!", rating: 5 },
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Tropical sunset infinity pool overlooking the ocean"
          className="absolute inset-0 size-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-transparent" />

        <div className="container-wide relative z-10 pt-32 pb-12 md:pb-40">
          <div className="max-w-3xl text-white animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold tracking-widest uppercase mb-6">
              <Sparkles className="size-3.5 text-gold" />
              Affordable Luxury · PAN India
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight">
              Explore the World with{" "}
              <span className="text-gradient-gold italic font-light">TripZip</span> Holidays
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Curated journeys for couples, friends, honeymooners and adventure seekers — premium experiences without the premium price tag.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/packages"
                className="group inline-flex items-center gap-2 bg-gradient-gold text-gold-foreground px-7 py-4 rounded-full font-semibold shadow-gold hover:scale-[1.03] transition-transform"
              >
                Explore Packages
                <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
              </Link>
              <a
                href="https://wa.me/918287008400"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white px-7 py-4 rounded-full font-semibold hover:bg-white/20 transition"
              >
                <MessageCircle className="size-4" /> Book on WhatsApp
              </a>
            </div>
          </div>

          {/* Search bar */}
          <div className="mt-14 max-w-4xl bg-background/95 backdrop-blur-xl rounded-2xl p-3 shadow-elegant border border-white/30 animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="grid md:grid-cols-[1fr_1fr_1fr_auto] gap-2">
              <Field icon={MapPin} label="Destination" placeholder="Where to?" />
              <Field icon={Plane} label="Trip type" placeholder="Honeymoon" />
              <Field icon={Users} label="Travellers" placeholder="2 Adults" />
              <Link
                to="/packages"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 rounded-xl font-semibold hover:bg-secondary transition py-4"
              >
                <Search className="size-4" /> Search
              </Link>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="absolute bottom-6 inset-x-0 hidden md:block pointer-events-none">
          <div className="container-wide">
            <div className="grid grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/15 backdrop-blur">
              {stats.map((s) => (
                <div key={s.l} className="bg-primary/40 backdrop-blur px-6 py-5 text-white text-center">
                  <div className="font-display font-bold text-2xl text-gold">{s.n}</div>
                  <div className="text-[11px] uppercase tracking-widest text-white/70 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-24 bg-gradient-cream">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Popular Destinations"
            title="Where will you go next?"
            subtitle="From sun-kissed beaches to snow-dusted peaks — handpicked escapes loved by our travellers."
          />

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.slice(0, 6).map((d, i) => (
              <Link
                to="/packages"
                key={d.name}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <img src={d.img} alt={d.name} loading="lazy" className="absolute inset-0 size-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-overlay" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-gold/90 text-gold-foreground text-[10px] font-bold uppercase tracking-widest">
                    {d.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-display font-bold text-2xl">{d.name}</h3>
                      <p className="text-sm text-white/80 mt-1">{d.nights}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-widest text-white/70">Starts at</div>
                      <div className="font-display font-bold text-xl text-gold">{d.price}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/packages" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              View all packages <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-background">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Why TripZip"
            title="Travel with people who care"
            subtitle="Trusted by 500+ travellers across India for over a decade."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="group p-7 rounded-2xl bg-card border border-border hover:border-gold hover:shadow-gold transition-all">
                <div className="size-12 rounded-xl bg-gradient-gold flex items-center justify-center text-gold-foreground mb-5 group-hover:scale-110 transition-transform">
                  <r.icon className="size-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gradient-deep text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-32 -right-32 size-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-secondary/30 blur-3xl" />
        <div className="container-wide relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-3">Travellers love us</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
              Real stories from real journeys
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-7 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-gold/50 transition">
                <div className="flex gap-1 text-gold mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
                </div>
                <p className="text-primary-foreground/85 leading-relaxed">"{t.text}"</p>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-gold mt-0.5">{t.trip}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BUILDERS */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Certified Travel Experts",
              "Award Winning Service",
              "Best Customer Satisfaction",
              "Verified Booking Assistance",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3 p-5 rounded-xl bg-cream">
                <CheckCircle2 className="size-5 text-secondary shrink-0" />
                <span className="font-semibold text-sm text-foreground">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / NEWSLETTER */}
      <section className="py-24">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 text-white shadow-elegant">
            <div className="absolute -top-20 -right-20 size-80 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight">
                  Plan your next escape today.
                </h2>
                <p className="mt-4 text-white/85 text-lg max-w-md">
                  Get a free, no-obligation quote from our travel experts within 24 hours.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-3 bg-white/10 backdrop-blur p-2 rounded-2xl border border-white/20">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent px-4 py-3 text-white placeholder:text-white/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gradient-gold text-gold-foreground px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
                >
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ icon: Icon, label, placeholder }: { icon: typeof Search; label: string; placeholder: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-accent transition">
      <Icon className="size-4 text-secondary shrink-0" />
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">{label}</div>
        <input className="w-full bg-transparent text-sm font-medium focus:outline-none placeholder:text-foreground/50" placeholder={placeholder} />
      </div>
    </div>
  );
}
