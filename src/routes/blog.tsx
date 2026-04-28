import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight, Calendar } from "lucide-react";
import maldives from "@/assets/dest-maldives.jpg";
import bali from "@/assets/dest-bali.jpg";
import goa from "@/assets/dest-goa.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Travel Blog — Tips, Guides & Inspiration | TripZip Holidays" },
      { name: "description", content: "Read travel guides, packing tips, honeymoon ideas and budget destinations curated by India's leading travel experts." },
      { property: "og:title", content: "Travel Blog | TripZip Holidays" },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { img: maldives, title: "10 Best Honeymoon Destinations in 2026", date: "Apr 12, 2026", read: "6 min", cat: "Honeymoon" },
  { img: bali, title: "Budget International Trips Under ₹50,000", date: "Apr 5, 2026", read: "5 min", cat: "Budget" },
  { img: goa, title: "Top Summer Destinations in India", date: "Mar 28, 2026", read: "4 min", cat: "Summer" },
  { img: ladakh, title: "The Ultimate Travel Packing Checklist", date: "Mar 18, 2026", read: "7 min", cat: "Tips" },
];

function BlogPage() {
  return (
    <Layout>
      <section className="pt-40 pb-12 bg-gradient-cream">
        <div className="container-wide">
          <SectionHeading eyebrow="Travel Journal" title="Stories, tips & inspiration" subtitle="Insights and guides from our team of seasoned travellers." />
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide grid md:grid-cols-2 gap-8">
          {posts.map((p) => (
            <Link to="/blog" key={p.title} className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition border border-border">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 size-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold/95 text-gold-foreground text-[10px] font-bold uppercase tracking-widest">{p.cat}</span>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="size-3.5" /> {p.date}</span>
                  <span>·</span><span>{p.read} read</span>
                </div>
                <h3 className="mt-3 font-display font-bold text-2xl group-hover:text-secondary transition">{p.title}</h3>
                <span className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Read article <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
