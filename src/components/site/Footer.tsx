import { Link } from "@tanstack/react-router";
import { Plane, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-deep text-primary-foreground mt-24">
      <div className="container-wide py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <span className="size-10 rounded-xl bg-gold text-gold-foreground flex items-center justify-center">
              <Plane className="size-5 -rotate-45" />
            </span>
            <span className="font-display font-bold text-xl">
              TripZip<span className="text-gold">.</span> Holidays
            </span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Crafting unforgettable journeys across India and the world since 2014.
            Affordable luxury, expertly curated.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="size-10 rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground flex items-center justify-center transition"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5 text-gold">Explore</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            {[
              ["/packages", "Tour Packages"],
              ["/gallery", "Gallery"],
              ["/blog", "Travel Blog"],
              ["/about", "About Us"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold transition">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5 text-gold">Top Destinations</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            {["Maldives", "Bali", "Dubai", "Switzerland", "Kerala", "Ladakh"].map((d) => (
              <li key={d}><Link to="/packages" className="hover:text-gold transition">{d}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5 text-gold">Get in touch</h4>
          <ul className="space-y-4 text-sm text-primary-foreground/80">
            <li className="flex gap-3"><Phone className="size-4 mt-0.5 text-gold" /> +91 82870 08400</li>
            <li className="flex gap-3"><Mail className="size-4 mt-0.5 text-gold" /> info@rankzio.com</li>
            <li className="flex gap-3"><MapPin className="size-4 mt-0.5 text-gold" /> PAN India Services<br />tripzipholidays.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} TripZip Holidays. All rights reserved.</p>
          <p>Certified Travel Experts · Verified Booking Assistance</p>
        </div>
      </div>
    </footer>
  );
}
