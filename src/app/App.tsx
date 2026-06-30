import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Projects } from "./components/Projects";
import { WhyUs } from "./components/WhyUs";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={{ fontFamily: "'Barlow', sans-serif" }}
      className="bg-background text-foreground min-h-screen overflow-x-hidden"
    >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Services />
      <Stats />
      <Projects />
      <WhyUs />
      <ContactCTA />
      <Footer />
    </div>
  );
}
