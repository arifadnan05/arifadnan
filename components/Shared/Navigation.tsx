"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const Navigation = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  const navItems = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 glass-effect-strong backdrop-blur-2xl"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-2xl font-bold group"
          data-magnetic
        >
          <span className="text-white group-hover:text-neon-blue transition-colors duration-300">
            Dev
          </span>
          <span className="text-gradient">Folio</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              data-magnetic
              className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-neon-blue to-neon-purple group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <button
          data-magnetic
          className="px-6 py-3 glass-effect-strong rounded-full text-sm font-medium hover:bg-neon-blue/20 transition-all duration-300 hover:scale-105"
        >
          Let's Talk
        </button>
      </div>
    </nav>
  );
};
