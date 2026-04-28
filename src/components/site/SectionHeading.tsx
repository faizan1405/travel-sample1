type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
