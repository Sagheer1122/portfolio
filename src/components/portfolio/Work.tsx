import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "CampusConnect",
    tag: "MongoDB · Express · React · Node.js",
    desc: "A collaborative student networking platform built on the MERN stack. Currently in active development, featuring real-time group study rooms, academic forums, and student resource sharing.",
    year: "2026",
    href: "#",
  },
  {
    n: "02",
    title: "FlowState Pro",
    tag: "React · Tailwind · Gemini AI · Vite",
    desc: "A premium task manager and focus dashboard built with React (Vite), featuring relative due-dates tracking, custom Pomodoro focus timers, dynamic glassmorphism stats, responsive bottom navigation for mobile, and a real-world Google Gemini 1.5 Flash AI Copilot integration.",
    year: "2026",
    href: "https://flows-state-pro.vercel.app/",
  },
  {
    n: "03",
    title: "The TaxMan's Capital",
    tag: "HTML5 · CSS3 · JavaScript · Responsive",
    desc: "A static web platform designed to help accounting and finance students in Pakistan find articleships, study resources, and expert career guidance.",
    year: "2026",
    href: "https://github.com/Sagheer1122/The-TexMan-s-Capital",
  },
  {
    n: "04",
    title: "Gamico Hub",
    tag: "React · Tailwind · SEO · Dark Mode",
    desc: "A modern website for a game development studio dedicated to crafting immersive, high-quality mobile gaming experiences. Features smooth navigation, search engine optimization (SEO), and a premium dark mode layout.",
    year: "2026",
    href: "https://www.gamicohub.com/",
  },
  {
    n: "05",
    title: "HavenHotels — Hotel Management System",
    tag: "React · Rails · PostgreSQL · Tailwind",
    desc: "Full-stack hotel management & room booking platform. React frontend for browsing/filtering, Rails REST APIs for rooms, bookings & auth, PostgreSQL with real-time availability tracking.",
    year: "2025",
    href: "https://hotel-management-webapp-lovat.vercel.app",
  },
  {
    n: "06",
    title: "Alpha Blog",
    tag: "Ruby on Rails · Bootstrap · SCSS",
    desc: "A modern and dynamic blogging platform built with Ruby on Rails, Bootstrap, and SCSS, combining robust functionality and clean aesthetics to create a seamless writing and reading experience.",
    year: "2025",
    href: "https://github.com/Sagheer1122/Alpha-Blog-",
  },
  {
    n: "07",
    title: "School Management System (SMS)",
    tag: "Ruby on Rails · Bootstrap · MVC",
    desc: "A full-stack school management application built with Ruby on Rails, featuring role-specific dashboards (Admin/Student) to efficiently manage student profiles and academic records.",
    year: "2025",
    href: "https://github.com/Sagheer1122/Student-Management-System",
  },
  {
    n: "08",
    title: "DeltaLabs — Enterprise Web Apps",
    tag: "Rails · React · MVC",
    desc: "Internship work on enterprise apps: CRUD features, validations, MVC best practices, performance & UI/UX optimization within an Agile workflow.",
    year: "2025",
    href: "#contact",
  },
  {
    n: "09",
    title: "Sidcup Family Golf",
    tag: "HTML5 · CSS3 · JavaScript · GSAP",
    desc: "A high-performance, modern, and fully responsive landing page clone of the Sidcup Family Golf facility, optimized for visual excellence, smooth scroll animations, and fluid behaviors.",
    year: "2024",
    href: "https://sidcup-family-golf-silk.vercel.app/",
  },
  {
    n: "10",
    title: "Password Generator",
    tag: "JavaScript · Bootstrap 5 · CSS3",
    desc: "Secure password generator with customizable length, uppercase, lowercase, numbers and symbols. Includes validation and copy-to-clipboard. Fully responsive UI.",
    year: "2024",
    href: "https://password-generator-73zf.vercel.app",
  },
  {
    n: "11",
    title: "Hit The Number — Browser Game",
    tag: "JavaScript · HTML5 · CSS3",
    desc: "Interactive number-guessing game with random generation, score tracking, real-time feedback and a responsive UI for smooth gameplay across screen sizes.",
    year: "2024",
    href: "https://hit-the-number.vercel.app",
  },
];


export const Work = () => (
  <section id="work" className="container py-10 md:py-16">
    <div className="flex items-end justify-between mb-8 md:mb-12">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          (02) — Selected Work
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95]">
          Recent <span className="italic text-primary">Work</span>.
        </h2>
      </div>
    </div>

    <div className="border-t border-border">
      {projects.map((p, i) => (
        <motion.a
          key={p.n}
          href={p.href}
          target={p.href.startsWith("http") ? "_blank" : undefined}
          rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className="group block border-b border-border py-4 md:py-5 transition-colors hover:bg-secondary/40"
        >
          <div className="container-fluid grid grid-cols-12 gap-4 items-center">
            <div className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground">{p.n}</div>
            <div className="col-span-10 md:col-span-5">
              <h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                {p.title}
              </h3>
            </div>
            <div className="col-span-8 md:col-span-4 text-muted-foreground text-sm md:text-base">
              {p.desc}
            </div>
            <div className="col-span-3 md:col-span-1 font-mono text-xs text-muted-foreground">{p.year}</div>
            <div className="col-span-1 flex justify-end">
              <ArrowUpRight className="w-6 h-6 transition-transform duration-500 group-hover:rotate-45 group-hover:text-primary" />
            </div>
          </div>
          <p className="container-fluid mt-3 font-mono text-[10px] uppercase tracking-widest text-primary md:hidden">
            {p.tag}
          </p>
          <p className="hidden md:block container-fluid pl-[8.33%] mt-2 font-mono text-[10px] uppercase tracking-widest text-primary/70">
            {p.tag}
          </p>
        </motion.a>
      ))}
    </div>
  </section>
);
