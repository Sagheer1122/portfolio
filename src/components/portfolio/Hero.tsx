import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState, useEffect } from "react";
import portrait from "@/assets/portrait.jpg";

const titles = [
  {
    lines: [
      { text: "Full-Stack", accent: false },
      { text: "Web", accent: false },
      { text: "Developer", accent: true, italic: true },
    ],
    tag: "MERN & Rails",
  },
  {
    lines: [
      { text: "MERN Stack", accent: true, italic: false },
      { text: "Software", accent: false },
      { text: "Engineer", accent: false, italic: true },
    ],
    tag: "React · Node · Mongo",
  },
  {
    lines: [
      { text: "Ruby on Rails", accent: true, italic: false },
      { text: "Backend", accent: false },
      { text: "Architect", accent: false, italic: true },
    ],
    tag: "PostgreSQL & APIs",
  },
  {
    lines: [
      { text: "Modern Web", accent: false },
      { text: "Product", accent: false },
      { text: "Creator", accent: true, italic: true },
    ],
    tag: "End-to-End Delivery",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

const lineVariants: Variants = {
  hidden: {
    y: "115%",
    rotateX: -75,
    opacity: 0,
    filter: "blur(6px)",
  },
  visible: {
    y: "0%",
    rotateX: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
  exit: {
    y: "-110%",
    rotateX: 65,
    opacity: 0,
    filter: "blur(6px)",
    transition: {
      duration: 0.45,
      ease: [0.32, 0, 0.67, 0] as [number, number, number, number],
    },
  },
};

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3400);
    return () => clearInterval(timer);
  }, []);

  const current = titles[index];

  return (
    <section id="top" className="relative pt-24 pb-10 md:pt-32 md:pb-16 overflow-hidden">
      <div className="container flex flex-col lg:flex-row items-start lg:items-center justify-start gap-6 lg:gap-10 xl:gap-12">
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-blink" />
            <span>Available · Lahore, PK</span>
            <span className="text-border">/</span>
            <span className="text-primary/90 font-medium">0{index + 1} — 0{titles.length}</span>
          </motion.div>

          <div
            className="min-h-[190px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[300px] flex flex-col justify-center"
            style={{ perspective: 1200 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="font-display font-black leading-[1.05] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              >
                {current.lines.map((line, li) => (
                  <div key={li} className="overflow-hidden py-1">
                    <motion.div
                      variants={lineVariants}
                      className={`inline-block origin-bottom ${
                        line.accent ? "text-primary" : "text-foreground"
                      } ${line.italic ? "italic font-normal" : ""}`}
                    >
                      {line.text}
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Micro kinetic tag line */}
            <div className="mt-4 flex items-center gap-3">
              <div className="h-[2px] w-8 bg-border overflow-hidden rounded-full">
                <motion.div
                  key={index}
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 3.4, ease: "linear" }}
                  className="h-full w-full bg-primary"
                />
              </div>
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
                >
                  {current.tag}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full sm:w-auto shrink-0 relative"
        >
          <div className="relative w-full sm:w-[320px] lg:w-[340px] xl:w-[380px] aspect-[3/4] rounded-2xl overflow-hidden shadow-card animate-float">
            <img src={portrait} alt="Sagheer Ahmad portrait" width={896} height={1152} className="h-full w-full object-cover grayscale-[20%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
              <span>DOB 26-08-2000</span>
              <span className="text-primary">● LIVE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
