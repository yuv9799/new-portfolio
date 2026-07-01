import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { PortfolioFooter } from "@/components/sections/PortfolioFooter";
import { Navbar } from "@/components/sections/Navbar";
import { SEOHead } from "@/components/seo/SEOHead";

const Home = () => {
  return (
    <>
      <SEOHead
        title="Yuvraj Anand - Software Engineer | Full-Stack Developer"
        description="Portfolio of Yuvraj Anand, featuring full-stack applications, machine learning integration, and scalable web engineering."
      />
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
        <PortfolioFooter />
      </main>
    </>
  );
};

export default Home;
