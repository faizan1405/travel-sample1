import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import maldives from "@/assets/dest-maldives.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import bali from "@/assets/dest-bali.jpg";
import goa from "@/assets/dest-goa.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import swiss from "@/assets/dest-swiss.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import hero from "@/assets/hero-tropical.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Travel Gallery — Memories from Around the World | TripZip Holidays" },
      { name: "description", content: "Beaches, mountains, cities and adventures — explore beautiful moments captured by our travellers across the globe." },
      { property: "og:title", content: "Gallery | TripZip Holidays" },
      { property: "og:image", content: hero },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { img: maldives, span: "row-span-2", cat: "Beaches" },
  { img: ladakh, span: "", cat: "Mountains" },
  { img: dubai, span: "", cat: "Cities" },
  { img: bali, span: "row-span-2", cat: "Adventure" },
  { img: goa, span: "", cat: "Beaches" },
  { img: swiss, span: "", cat: "Mountains" },
  { img: kerala, span: "col-span-2", cat: "Couples" },
  { img: hero, span: "", cat: "Sunsets" },
];

function GalleryPage() {
  return (
    <Layout>
      <section className="pt-40 pb-12">
        <div className="container-wide">
          <SectionHeading eyebrow="Gallery" title="Travel memories, beautifully captured" subtitle="A glimpse into the journeys we've crafted for travellers like you." />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-4">
            {items.map((it, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-2xl shadow-soft ${it.span}`}>
                <img src={it.img} alt={it.cat} loading="lazy" className="absolute inset-0 size-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition">
                  <span className="px-3 py-1 rounded-full bg-gold/90 text-gold-foreground text-[10px] font-bold uppercase tracking-widest">
                    {it.cat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
