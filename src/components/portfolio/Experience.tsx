import { motion } from "framer-motion";

const items = [
  {
    role: "Web Developer Intern",
    org: "DeltaLabs",
    place: "Lahore, Pakistan",
    range: "Nov 2025 — Mar 2026 · 5 Months",
    body: "Built and maintained CRUD features across enterprise web applications using Ruby on Rails and React.js following MVC architecture. Collaborated in Agile sprint planning, daily standups, code reviews, and implemented robust form validations & UI/UX optimizations.",
  },
  {
    role: "BS in Computer Science (BSCS)",
    org: "Minhaj University Lahore",
    place: "Lahore, Pakistan",
    range: "Dec 2022 — Dec 2026 · CGPA: 3.24 / 4.0",
    body: "Final-year (8th Semester) Computer Science student. Relevant coursework: Web Technologies, Object-Oriented Programming (OOP), Data Structures & Algorithms, C++, and Database Systems.",
  },
  {
    role: "Certifications & Training",
    org: "NAVTTC & WebZeto",
    place: "Pakistan",
    range: "2020 — 2023",
    body: "Database Administration (DBA) from NAVTTC (2023, SQL & Database Management), Web Development Internship Certificate from WebZeto (2022), and Certificate in Computer Sciences from Al-Falah College (2020).",
  },
];

export const Experience = () => (
  <section className="container py-10 md:py-16">
    <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
      (04) — Path
    </p>
    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] mb-10">
      Experience & <span className="italic text-primary">education</span>.
    </h2>

    <div className="relative">
      <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-border" />
      {items.map((it, i) => (
        <motion.div
          key={it.role}
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className={`relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-12 ${i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
            }`}
        >
          <span className="absolute left-0 md:left-1/2 top-2 w-4 h-4 -translate-x-[7px] md:-translate-x-1/2 rounded-full bg-primary shadow-glow" />
          <div className={`${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{it.range}</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold mt-2">{it.role}</h3>
            <p className="text-primary font-mono text-sm mt-1">{it.org} · {it.place}</p>
          </div>
          <div className={`${i % 2 === 0 ? "md:pl-12" : "md:text-right md:pr-12"} text-muted-foreground mt-3 md:mt-0`}>
            <p>{it.body}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
