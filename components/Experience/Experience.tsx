"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: "1",
    role: "Senior Creative Developer",
    company: "Digital Innovations Lab",
    period: "2023 - Present",
    description:
      "Leading the development of immersive web experiences using cutting-edge technologies.",
    achievements: [
      "Built 15+ award-winning interactive websites",
      "Reduced page load times by 60% through optimization",
      "Mentored 5 junior developers in modern web practices",
    ],
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "Creative Studio X",
    period: "2021 - 2023",
    description:
      "Developed scalable web applications with focus on performance and user experience.",
    achievements: [
      "Architected microservices infrastructure serving 1M+ users",
      "Implemented real-time collaboration features",
      "Led migration from monolith to modern stack",
    ],
  },
  {
    id: "3",
    role: "Frontend Developer",
    company: "Tech Startup Inc",
    period: "2019 - 2021",
    description:
      "Crafted responsive and accessible user interfaces for SaaS products.",
    achievements: [
      "Improved accessibility score from 65% to 98%",
      "Reduced bundle size by 45% using code splitting",
      "Established component library used across 3 products",
    ],
  },
];

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

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

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0, transformOrigin: "top" },
      {
        scaleY: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      }
    );

    const items = gsap.utils.toArray(".experience-item");
    items.forEach((item, index) => {
      gsap.from(item as HTMLElement, {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: item as HTMLElement,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          ref={titleRef}
          className="font-display text-4xl md:text-6xl lg:text-display-md font-bold mb-24"
        >
          Experience <span className="text-gradient">Journey</span>
        </h2>

        <div className="relative">
          <div
            ref={lineRef}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-neon-blue via-neon-purple to-neon-pink"
          />

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`experience-item relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div className="glass-effect-strong p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-4 h-4 rounded-full bg-neon-blue shadow-glow-md" />
                      <span className="text-sm font-medium text-neon-blue">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 group-hover:text-neon-blue transition-colors duration-300">
                      {exp.role}
                    </h3>

                    <p className="text-lg text-gray-300 mb-4">{exp.company}</p>

                    <p className="text-gray-400 mb-6">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-gray-300"
                        >
                          <span className="text-neon-blue mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:flex w-2/12 items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-linear-to-r from-neon-blue to-neon-purple shadow-glow-lg" />
                </div>

                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Want to know more about my journey and projects?
          </p>
          <button
            data-magnetic
            className="px-8 py-4 glass-effect-strong rounded-full font-medium hover:bg-neon-blue/20 transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};
