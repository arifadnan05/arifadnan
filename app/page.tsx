"use client";
import { Hero } from "@/components/Hero/Hero";
import { Works } from "@/components/Works/Works";
import { TechOrbit } from "@/components/TechOrbit/TechOrbit";
import { Experience } from "@/components/Experience/Experience";
import { Contact } from "@/components/Contact/Contact";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { MagneticCursor } from "@/components/ui/MagneticCursor";
import { Navigation } from "@/components/Shared/Navigation";
import { Footer } from "@/components/Shared/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen">
        <MagneticCursor />
        <Navigation />

        <Hero />

        <div id="work">
          <Works />
        </div>

        <TechOrbit />

        <div id="about">
          <Experience />
        </div>

        <div id="contact">
          <Contact />
        </div>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
