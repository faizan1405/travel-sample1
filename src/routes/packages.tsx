import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useState } from "react";
import { Clock, MapPin, ArrowRight, CreditCard, Smartphone, ShieldCheck } from "lucide-react";
import maldives from "@/assets/dest-maldives.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import bali from "@/assets/dest-bali.jpg";
import goa from "@/assets/dest-goa.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import swiss from "@/assets/dest-swiss.jpg";
import kerala from "@/assets/dest-kerala.jpg";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Tour Packages — Domestic & International Holidays | TripZip Holidays" },
      { name: "description", content: "Browse handcrafted tour packages: honeymoon, group, adventure & weekend getaways. Best prices on India and international holidays." },
      { property: "og:title", content: "Tour Packages | TripZip Holidays" },
      { property: "og:description", content: "Affordable luxury holiday packages across India and the world." },
    ],
  }),
  component: PackagesPage,
});

type Pkg = {
  img: string; name: string; country: string; cat: Category;
  price: string; nights: string;
};
type Category = "All" | "Domestic" | "International" | "Honeymoon" | "Group" | "Adventure" | "Weekend";

const packages: Pkg[] = [
  { img: maldives, name: "Maldives Overwater Bliss", country: "Maldives", cat: "Honeymoon", price: "₹68,999", nights: "5N / 6D" },
  { img: bali, name: "Bali Cultural Escape", country: "Indonesia", cat: "International", price: "₹42,499", nights: "5N / 6D" },
  { img: dubai, name: "Dubai Luxe Skyline", country: "UAE", cat: "International", price: "₹49,999", nights: "4N / 5D" },
  { img: swiss, name: "Swiss Alps Honeymoon", country: "Switzerland", cat: "Honeymoon", price: "₹1,29,999", nights: "7N / 8D" },
  { img: ladakh, name: "Ladakh Bike Expedition", country: "India", cat: "Adventure", price: "₹24,999", nights: "6N / 7D" },
  { img: goa, name: "Goa Beach Weekend", country: "India", cat: "Weekend", price: "₹12,999", nights: "3N / 4D" },
  { img: kerala, name: "Kerala Backwater Cruise", country: "India", cat: "Domestic", price: "₹18,499", nights: "4N / 5D" },
  { img: ladakh, name: "Himachal Group Trek", country: "India", cat: "Group", price: "₹16,499", nights: "5N / 6D" },
  { img: bali, name: "Thailand Friends Trip", country: "Thailand", cat: "Group", price: "₹38,999", nights: "6N / 7D" },
];

const cats: Category[] = ["All", "Domestic", "International", "Honeymoon", "Group", "Adventure", "Weekend"];

function PackagesPage() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? packages : packages.filter((p) => p.cat === active);

  return (
    <Layout>
      <section className="pt-40 pb-12 bg-gradient-cream">
        <div className="container-wide">
          <SectionHeading eyebrow="Tour Packages" title="Handpicked journeys, just for you" subtitle="Filter by trip type and find the perfect getaway. Prices start per person on twin sharing." />
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition border ${
                  active === c
                    ? "bg-primary text-primary-foreground border-primary shadow-soft"
                    : "bg-background text-foreground border-border hover:border-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <article key={p.name} className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition border border-border">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="absolute inset-0 size-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold/95 text-gold-foreground text-[10px] font-bold uppercase tracking-widest">
                    {p.cat}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="size-3.5" /> {p.country}
                  </div>
                  <h3 className="mt-2 font-display font-bold text-xl text-foreground">{p.name}</h3>
                  <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="size-4" /> {p.nights}
                  </div>
                  <div className="mt-5 flex items-end justify-between pt-5 border-t border-border">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Starts at</div>
                      <div className="font-display font-bold text-2xl text-primary">{p.price}</div>
                    </div>
                    <a
                      href={`https://wa.me/918287008400?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(p.name)}`}
                      target="_blank" rel="noopener"
                      className="inline-flex items-center gap-1.5 bg-gradient-gold text-gold-foreground px-4 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
                    >
                      Book Now <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Booking & Payments */}
      <section className="py-20 bg-gradient-deep text-primary-foreground">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-3">Secure Checkout</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
              Book in minutes, pay your way.
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-md">
              Reserve your package with a small advance. Pay the balance via UPI, debit/credit card or net banking — everything 256-bit encrypted.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {[
                { icon: Smartphone, label: "UPI" },
                { icon: CreditCard, label: "Card" },
                { icon: ShieldCheck, label: "Secure" },
              ].map((p) => (
                <div key={p.label} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <p.icon className="size-5 text-gold" />
                  <span className="font-semibold">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8">
            <h3 className="font-display font-bold text-xl mb-6">Reserve your package</h3>
            <div className="space-y-4">
              {[
                ["Package", "Maldives Overwater Bliss"],
                ["Travellers", "2 Adults"],
                ["Departure", "Flexible"],
                ["Total", "₹1,37,998"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-sm pb-3 border-b border-white/10">
                  <span className="text-white/60">{k}</span>
                  <span className="font-semibold">{v}</span>
                </div>
              ))}
              <button className="w-full mt-4 bg-gradient-gold text-gold-foreground py-4 rounded-xl font-semibold hover:scale-[1.02] transition-transform">
                Proceed to Secure Payment
              </button>
              <p className="text-xs text-white/50 text-center">Pay just 20% to reserve. Free cancellation up to 30 days.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
