import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => (
  <motion.header
    initial={{ y: -40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/60"
  >
    <nav className="container flex items-center justify-between py-4">
      <a href="#top" className="font-display text-xl font-black tracking-tight">
        sagheer<span className="text-primary">.</span>
      </a>
      <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full bg-primary text-primary-foreground hover:shadow-glow transition-shadow"
      >
        Hire me
      </a>
    </nav>
  </motion.header>
);
