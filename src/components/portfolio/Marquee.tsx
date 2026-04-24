const items = [
  "React.js", "Ruby on Rails", "PostgreSQL", "JavaScript", "SQLite",
  "Tailwind CSS", "Bootstrap 5", "Git", "REST APIs", "Database Design",
];

export const Marquee = () => (
  <section className="relative py-10 border-y border-border/60 overflow-hidden bg-secondary/30">
    <div className="ticker-shadow absolute inset-0 z-10 pointer-events-none" />
    <div className="marquee-track whitespace-nowrap">
      {[...items, ...items].map((it, i) => (
        <span key={i} className="font-display text-4xl md:text-6xl font-black tracking-tight inline-flex items-center gap-16">
          {it}
          <span className="text-primary">✦</span>
        </span>
      ))}
    </div>
  </section>
);
