import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact TripZip Holidays — Plan Your Next Trip" },
      { name: "description", content: "Get in touch with TripZip Holidays. Free travel quote within 24 hours. Call, WhatsApp or email our travel experts." },
      { property: "og:title", content: "Contact TripZip Holidays" },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
  email: z.string().trim().email("Please enter a valid email").max(120),
  destination: z.string().trim().max(80).optional(),
  message: z.string().trim().min(5, "Tell us a bit more").max(800),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const data = Object.fromEntries(f.entries());
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    // mailto fallback to info@rankzio.com
    const subject = `New trip inquiry from ${r.data.name}`;
    const body = `Name: ${r.data.name}\nPhone: ${r.data.phone}\nEmail: ${r.data.email}\nDestination: ${r.data.destination ?? "-"}\n\n${r.data.message}`;
    window.location.href = `mailto:info@rankzio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <section className="pt-40 pb-12 bg-gradient-cream">
        <div className="container-wide">
          <SectionHeading eyebrow="Contact" title="Let's plan your perfect trip" subtitle="Reach out and get a free, personalised quote within 24 hours." />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide grid lg:grid-cols-[1.2fr_1fr] gap-8">
          <form onSubmit={onSubmit} className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-soft space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <Input name="name" label="Full Name" placeholder="Your name" error={errors.name} />
              <Input name="phone" label="Phone" placeholder="+91 ..." error={errors.phone} />
            </div>
            <Input name="email" label="Email" type="email" placeholder="you@email.com" error={errors.email} />
            <Input name="destination" label="Destination Interest" placeholder="e.g. Maldives, Bali, Ladakh" error={errors.destination} />
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your dream trip..."
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-gold-foreground py-4 rounded-xl font-semibold hover:scale-[1.01] transition"
            >
              <Send className="size-4" /> Send Inquiry
            </button>
            {status === "sent" && (
              <p className="text-sm text-secondary text-center">Thanks! Your inquiry is being sent. We'll reply within 24 hours.</p>
            )}
          </form>

          <div className="space-y-4">
            <div className="bg-gradient-hero text-white p-7 rounded-3xl shadow-elegant">
              <h3 className="font-display font-bold text-xl">Talk to a travel expert</h3>
              <p className="text-white/80 text-sm mt-1">Available 7 days a week.</p>
              <div className="mt-6 space-y-3">
                <ContactRow icon={Phone} label="Call us" value="+91 82870 08400" href="tel:+918287008400" />
                <ContactRow icon={MessageCircle} label="WhatsApp" value="+91 82870 08400" href="https://wa.me/918287008400" />
                <ContactRow icon={Mail} label="Email" value="info@rankzio.com" href="mailto:info@rankzio.com" />
                <ContactRow icon={Clock} label="Hours" value="Mon–Sun · 9 AM – 9 PM IST" />
                <ContactRow icon={MapPin} label="Service area" value="PAN India · tripzipholidays.com" />
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-soft border border-border h-72">
              <iframe
                title="TripZip Holidays Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.0%2C28.4%2C77.4%2C28.7&layer=mapnik"
                className="size-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Input({ name, label, type = "text", placeholder, error }: { name: string; label: string; type?: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const Tag = href ? "a" : "div";
  return (
    <Tag href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noopener" className="flex items-start gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 transition">
      <Icon className="size-4 text-gold mt-0.5" />
      <div>
        <div className="text-[10px] uppercase tracking-widest text-white/60">{label}</div>
        <div className="font-semibold text-sm">{value}</div>
      </div>
    </Tag>
  );
}
