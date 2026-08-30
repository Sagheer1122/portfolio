import { motion } from "framer-motion";

const stats = [
  { k: "1.5+", v: "Years Experience" },
  { k: "5 mo", v: "DeltaLabs Internship" },
  { k: "MERN & Rails", v: "Core Stacks" },
  { k: "Final Year", v: "Computer Science" },
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
          I'm <span className="text-foreground font-semibold">Sagheer Ahmad</span>, a full-stack developer specializing in the{" "}
          <span className="text-foreground font-medium">MERN stack</span> (MongoDB, Express, React, Node.js) and{" "}
          <span className="text-foreground font-medium">Ruby on Rails</span>, with{" "}
          <span className="text-foreground font-medium">PostgreSQL</span> for database work. Currently finishing my final year in Computer Science, I've spent the past 1.5+ years building real-world web applications — from full backend systems with authentication and API integration to complete end-to-end products.
        </p>
        <p>
          I completed a <span className="text-foreground font-medium">5-month internship at Deltalabs</span>, where I worked with Ruby on Rails and React.js on real client-facing features — backend logic, database work, and frontend integration.
        </p>
        <p>
          I've also worked on projects ranging from an automated accident detection and emergency response system, to a hotel management platform, to a campus connectivity application built as part of a team. Each project has pushed me to write cleaner code, design better systems, and think through real problems from the ground up.
        </p>
        <p>
          I care about building software that actually works — reliable, well-structured, and delivered on time. Whether it's a simple website or a full-scale web application, I bring the same level of focus and attention to detail.
        </p>
        <p className="text-foreground font-medium pt-2">
          Currently open to freelance and remote opportunities — let's build something great together.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-border pt-4"
            >
              <div className="font-display text-2xl md:text-3xl font-black text-foreground">{s.k}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest mt-1">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

