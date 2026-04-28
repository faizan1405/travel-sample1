import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Award, Compass, Heart, Sparkles, Globe2, Users } from "lucide-react";
import hero from "@/assets/dest-swiss.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TripZip Holidays — A Decade of Curated Journeys" },
      { name: "description", content: "Meet the travel experts behind TripZip Holidays. Our story, mission and the team crafting unforgettable journeys for travellers across India." },
      { property: "og:title", content: "About TripZip Holidays" },
      { property: "og:description", content: "10+ years curating premium, affordable holiday experiences across India and the world." },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Anjali Rao", role: "Founder & CEO", initials: "AR" },
  { name: "Rahul Khanna", role: "Head of Experiences", initials: "RK" },
  { name: "Sneha Patel", role: "International Trips Lead", initials: "SP" },
  { name: "Vikram Singh", role: "Adventure Curator", initials: "VS" },
];

function AboutPage() {
  return (
    <Layout>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <img src={hero} alt="Mountain landscape" className="absolute inset-0 size-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background" />
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight text-foreground">
              A decade of journeys,<br />
              <span className="text-gradient-gold italic font-light">thousands of memories.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Founded in 2014, TripZip Holidays began with a simple belief — that beautiful travel shouldn't be reserved for the few. Today, we curate journeys for travellers across India who want premium experiences without the premium markup.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide grid md:grid-cols-2 gap-12 items-start">
          <div className="p-8 rounded-3xl bg-cream">
            <Compass className="size-8 text-secondary" />
            <h2 className="mt-5 text-3xl font-display font-bold">Our Mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To make extraordinary travel accessible. We negotiate hard with the world's best hotels, airlines and experience providers so you don't have to — passing every saving onto you, with handcrafted itineraries that feel anything but generic.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-hero text-white">
            <Heart className="size-8 text-gold" />
            <h2 className="mt-5 text-3xl font-display font-bold">Why travellers trust us</h2>
            <ul className="mt-4 space-y-3 text-white/85">
              {[
                "10+ years of operating experience across PAN India",
                "500+ happy travellers and 98% recommendation rate",
                "24/7 on-trip support, anywhere in the world",
                "Fully transparent pricing — no hidden fees",
              ].map((p) => <li key={p} className="flex gap-3"><Sparkles className="size-4 mt-1 text-gold shrink-0" />{p}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container-wide">
          <SectionHeading eyebrow="The Team" title="The minds behind your journey" subtitle="A small, obsessive crew of travellers turning your dream trip into reality." />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="p-6 rounded-2xl bg-background shadow-soft text-center hover:shadow-elegant transition">
                <div className="size-20 mx-auto rounded-full bg-gradient-gold text-gold-foreground flex items-center justify-center text-xl font-display font-bold">
                  {m.initials}
                </div>
                <h3 className="mt-5 font-display font-bold text-lg">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <SectionHeading eyebrow="Highlights" title="A decade in numbers" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Globe2, n: "75+", l: "Destinations" },
              { icon: Users, n: "500+", l: "Happy travellers" },
              { icon: Award, n: "10+", l: "Years of trust" },
              { icon: Heart, n: "98%", l: "Recommend us" },
            ].map((s) => (
              <div key={s.l} className="p-6 rounded-2xl bg-card border border-border text-center">
                <s.icon className="size-6 mx-auto text-gold" />
                <div className="mt-3 font-display font-bold text-3xl text-foreground">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
