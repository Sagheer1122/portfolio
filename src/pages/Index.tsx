import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { CVCallout } from "@/components/portfolio/CVCallout";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

const Index = () => (
  <main className="grain min-h-screen bg-background text-foreground">
    <ScrollProgress />
    <CursorGlow />
    <Nav />
    <Hero />
    <Marquee />
    <About />
    <Work />
    <Skills />
    <Experience />
    <CVCallout />
    <Contact />
    <Footer />
  </main>
);

export default Index;
