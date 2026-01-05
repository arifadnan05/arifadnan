"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techStack } from "@/data/tech";

gsap.registerPlugin(ScrollTrigger);

export const TechOrbit = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    });

    const techItems = gsap.utils.toArray(".tech-item");

    techItems.forEach((item, index) => {
      gsap.from(item as HTMLElement, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: item as HTMLElement,
          start: "top 85%",
        },
        delay: index * 0.05,
      });
    });

    gsap.to(orbitRef.current, {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: "none",
    });
  }, []);

  const radius = 280;
  const centerX = radius;
  const centerY = radius;

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="font-display text-4xl md:text-6xl lg:text-display-md font-bold text-center mb-24"
        >
          Tech <span className="text-gradient">Arsenal</span>
        </h2>

        <div className="relative flex justify-center items-center">
          <div
            ref={orbitRef}
            className="relative"
            style={{ width: radius * 2, height: radius * 2 }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 glass-effect-strong rounded-full flex items-center justify-center">
              <span className="text-6xl">💻</span>
            </div>

            <div className="absolute inset-0 rounded-full border border-neon-blue/20" />
            <div className="absolute inset-8 rounded-full border border-neon-purple/20" />
            <div className="absolute inset-16 rounded-full border border-neon-pink/20" />

            {techStack.map((tech, index) => {
              const angle = (index / techStack.length) * 2 * Math.PI;
              const x = centerX + radius * Math.cos(angle) - 40;
              const y = centerY + radius * Math.sin(angle) - 40;

              return (
                <div
                  key={tech.id}
                  className="tech-item absolute"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                  }}
                >
                  <div
                    data-magnetic
                    className="w-20 h-20 glass-effect-strong rounded-2xl flex flex-col items-center justify-center gap-1 hover:scale-110 transition-all duration-300 cursor-pointer group"
                    style={{
                      boxShadow: `0 0 20px ${tech.color}20`,
                    }}
                  >
                    <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                      {tech.icon}
                    </span>
                    <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tech.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {["Frontend", "Backend", "Database", "Tools"].map((category) => (
            <div
              key={category}
              className="glass-effect p-6 rounded-2xl text-center hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="font-display text-lg font-semibold mb-2 text-neon-blue">
                {category}
              </h3>
              <p className="text-sm text-gray-400">
                {
                  techStack.filter((t) => t.category === category.toLowerCase())
                    .length
                }
                + Tools
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
