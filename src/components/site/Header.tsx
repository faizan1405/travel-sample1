import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Plane } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Packages" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className={`size-9 rounded-xl flex items-center justify-center transition ${scrolled ? "bg-primary text-primary-foreground" : "bg-white/15 backdrop-blur text-white"}`}>
            <Plane className="size-5 -rotate-45" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-none">
            <span className={`font-display font-bold text-lg tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}>
              TripZip<span className="text-gold">.</span>
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              Holidays
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                scrolled
                  ? "text-foreground/80 hover:text-foreground hover:bg-accent"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
              activeProps={{ className: scrolled ? "bg-primary text-primary-foreground" : "bg-white/15 text-white" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/918287008400"
            target="_blank"
            rel="noopener"
            className="px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-gold text-gold-foreground shadow-gold hover:scale-105 transition-transform"
          >
            Plan My Trip
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className={`lg:hidden size-10 rounded-full flex items-center justify-center ${scrolled ? "bg-accent text-foreground" : "bg-white/15 text-white backdrop-blur"}`}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-3 mx-4 rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-elegant p-4 animate-fade-in">
          <div className="flex flex-col">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-foreground hover:bg-accent"
                activeProps={{ className: "bg-primary text-primary-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://wa.me/918287008400"
              target="_blank"
              rel="noopener"
              className="mt-3 px-4 py-3 rounded-xl text-center font-semibold bg-gradient-gold text-gold-foreground"
            >
              Plan My Trip
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
