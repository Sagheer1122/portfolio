import { motion } from "framer-motion";

const groups = [
  {
    label: "Frontend",
    items: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap 5", "HTML / CSS"],
  },
  {
    label: "Backend",
    items: ["Ruby on Rails", "REST APIs", "Authentication", "MVC"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "SQLite", "Schema Design", "Migrations", "Indexing"],
  },
  {
    label: "Tooling",
    items: ["Git / GitHub", "VS Code", "Vite"],
  },
];

export const Skills = () => (
  <section id="skills" className="container py-10 md:py-16">
    <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
      (03) — Skills
    </p>
    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] mb-10 max-w-3xl">
      My <span className="italic text-primary">Skills</span>.
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {groups.map((g, gi) => (
        <motion.div
          key={g.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: gi * 0.1 }}
          className="rounded-2xl bg-card border border-border p-6 hover:border-primary/50 transition-colors group"
        >
          <div className="flex items-center justify-start gap-3 mb-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              0{gi + 1}
            </span>
            <span className="font-display text-lg font-bold">{g.label}</span>
          </div>
          <ul className="space-y-2">
            {g.items.map((it) => (
              <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                <span className="h-1 w-1 rounded-full bg-primary" />
                {it}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);
