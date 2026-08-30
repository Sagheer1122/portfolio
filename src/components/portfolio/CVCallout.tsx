import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

export const CVCallout = () => (
  <section id="resume" className="container py-10 md:py-16">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative rounded-3xl overflow-hidden border border-border bg-card p-8 md:p-12 lg:p-14"
    >
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-lime opacity-20 blur-3xl" />
      
      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-primary shrink-0" />
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            Download my <span className="italic text-primary">Resume</span>.
          </h3>
        </div>

        <a
          href="/Sagheer_Ahmad.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest hover:shadow-glow transition-all hover:scale-105"
        >
          <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          Preview CV
        </a>
      </div>
    </motion.div>
  </section>
);


