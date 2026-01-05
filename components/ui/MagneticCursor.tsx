"use client";

import { useEffect, useRef } from "react";
import { useMouse } from "@/hooks/useMouse";
import gsap from "gsap";

export const MagneticCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMouse();

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    gsap.to(cursor, {
      x: mousePosition.x,
      y: mousePosition.y,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(cursorDot, {
      x: mousePosition.x,
      y: mousePosition.y,
      duration: 0.1,
      ease: "power2.out",
    });

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1.5,
        backgroundColor: "rgba(0, 240, 255, 0.2)",
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "rgba(0, 240, 255, 0.1)",
        duration: 0.3,
      });
    };

    const interactiveElements = document.querySelectorAll(
      "a, button, [data-magnetic]"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [mousePosition]);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-50 w-10 h-10 rounded-full border border-neon-blue/50 mix-blend-screen hidden lg:block"
        style={{
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 240, 255, 0.1)",
        }}
      />
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed top-0 left-0 z-50 w-1 h-1 rounded-full bg-neon-blue hidden lg:block"
        style={{
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 10px rgba(0, 240, 255, 0.8)",
        }}
      />
    </>
  );
};
