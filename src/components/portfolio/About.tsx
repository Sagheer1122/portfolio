import { motion } from "framer-motion";

const stats = [
  { k: "3.5+", v: "Years studying CS" },
  { k: "5 mo", v: "DeltaLabs internship" },
  { k: "10+", v: "Tech in stack" },
  { k: "∞", v: "Curiosity" },
];

export const About = () => (
  <section id="about" className="container py-10 md:py-16">
    <div className="grid grid-cols-12 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="col-span-12 md:col-span-4"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          (01) — About
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-black leading-[0.95]">
          <span className="text-primary italic">About</span> me.
        </h2>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="col-span-12 md:col-span-8 md:col-start-5 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed"
      >
        <p>
          I'm a final-year Computer Science student at <span className="text-foreground">Minhaj University Lahore</span> and
          have recently completed my internship at <span className="text-foreground">DeltaLabs</span>, where I gained
          hands-on experience working across the full stack.
        </p>
        <p>
          My work spans designing scalable database schemas, developing well-structured APIs, and building clean,
          user-focused interfaces using React. I prioritize writing maintainable <span className="text-foreground">Ruby on Rails</span> backends and delivering intuitive user experiences.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-border pt-4"
            >
              <div className="font-display text-3xl md:text-4xl font-black text-foreground">{s.k}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest mt-1">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
