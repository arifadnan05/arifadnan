"use client";

import { useRef } from "react";
import { HeroCanvas } from "./HeroCanvas";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(headingRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.5,
    })
      .from(
        subheadingRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.6"
      )
      .from(
        ctaRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-linear-to-b from-midnight-900 via-midnight-800 to-midnight-900"
    >
      <HeroCanvas />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1
            ref={headingRef}
            className="font-display text-5xl md:text-7xl lg:text-display-lg font-bold mb-6"
          >
            Crafting Digital
            <br />
            <span className="text-gradient glow-text">Experiences</span>
          </h1>

          <p
            ref={subheadingRef}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light"
          >
            Creative Developer specialized in building immersive web experiences
            with cutting-edge technologies
          </p>

          <div ref={ctaRef} className="flex gap-6 justify-center items-center">
            <button
              data-magnetic
              className="group relative px-8 py-4 glass-effect-strong rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 font-medium text-white">
                View Projects
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              data-magnetic
              className="px-8 py-4 border border-neon-blue/50 rounded-full font-medium text-white hover:bg-neon-blue/10 transition-all duration-300 hover:scale-105 hover:shadow-glow-md"
            >
              Get in Touch
            </button>
          </div>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-neon-blue/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-neon-blue rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-midnight-900 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};
