import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

const word = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 + i * 0.08 },
  }),
};

const lines = [["Full-Stack"], ["Web"], ["Developer"]];

export const Hero = () => (
  <section id="top" className="relative py-10 md:py-16 overflow-hidden">
    <div className="container grid grid-cols-12 gap-6 items-end">
      <div className="col-span-12 lg:col-span-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-blink" />
          Available · Lahore, PK
        </motion.div>

        <h1 className="font-display font-black leading-[1.1] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          {lines.map((ln, li) => (
            <span key={li} className="block overflow-hidden py-1">
              <motion.span
                className="flex flex-wrap gap-x-[0.25em] gap-y-[0.1em]"
                initial="hidden"
                animate="show"
              >
                {ln.map((w, wi) => (
                  <motion.span
                    key={wi}
                    custom={li * 2 + wi}
                    variants={word}
                    className={`inline-block ${w === "&" ? "text-primary italic font-display" : ""}`}
                  >
                    {w}
                  </motion.span>
                ))}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground text-balance"
        >
          I'm <span className="text-foreground font-medium">Sagheer Ahmad</span> — I build
          modern web applications using <em className="text-primary not-italic">React</em>,
          <em className="text-primary not-italic"> Ruby on Rails</em>, and PostgreSQL.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: -2 }}
        transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="col-span-12 lg:col-span-4 relative"
      >
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-card animate-float">
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
