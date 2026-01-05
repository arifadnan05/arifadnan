"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export const Works = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!scrollContainerRef.current || !containerRef.current) return;

    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });

    const scrollWidth = scrollContainerRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    const horizontalTween = gsap.to(scrollContainerRef.current, {
      x: -(scrollWidth - viewportWidth),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    const cards = gsap.utils.toArray(".project-card");
    cards.forEach((card, i) => {
      gsap.from(card as HTMLElement, {
        opacity: 0,
        scale: 0.9,
        scrollTrigger: {
          trigger: card as HTMLElement,
          start: "left right",
          end: "left center",
          scrub: 1,
          containerAnimation: horizontalTween,
        },
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-24 overflow-hidden"
    >
      <div className="mb-16 px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="font-display text-4xl md:text-6xl lg:text-display-md font-bold"
        >
          Selected <span className="text-gradient">Works</span>
        </h2>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-8 px-6 lg:px-8"
        style={{ width: "fit-content" }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-card shrink-0 w-[85vw] md:w-[70vw] lg:w-[50vw] group"
          >
            <div className="relative h-[60vh] rounded-3xl overflow-hidden glass-effect-strong">
              <div className="absolute inset-0 bg-linear-to-t from-midnight-900 via-transparent to-transparent z-10" />

              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundColor: "#1a1a2e",
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium glass-effect rounded-full text-neon-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <button
                    data-magnetic
                    className="px-6 py-3 glass-effect-strong rounded-full font-medium hover:bg-neon-blue/20 transition-all duration-300 hover:scale-105 text-sm"
                  >
                    View Project →
                  </button>
                  {project.caseStudyLink && (
                    <button
                      data-magnetic
                      className="px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-sm"
                    >
                      Case Study
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
