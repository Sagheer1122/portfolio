import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export const CVCallout = () => (
  <section className="container py-10 md:py-16">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative rounded-3xl overflow-hidden border border-border bg-card p-8 md:p-14"
    >
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-lime opacity-20 blur-3xl" />
      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-xl">
          <FileText className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            Download my <span className="italic text-primary">Resume</span>.
          </h3>
          <p className="mt-3 text-sm md:text-base text-muted-foreground">
            Get all the details about my experience, education, and skills in one document.
          </p>
        </div>
        <a
          href="/sagheer-ahmad-cv.pdf"
          download
          className="group inline-flex items-center gap-3 px-6 py-4 rounded-full bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest hover:shadow-glow transition-all hover:scale-105"
        >
          <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          Download CV
        </a>
      </div>
    </motion.div>
  </section>
);
