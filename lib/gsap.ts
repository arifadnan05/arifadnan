import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeIn = (
  element: HTMLElement | null,
  options?: {
    delay?: number;
    duration?: number;
    y?: number;
    trigger?: HTMLElement | string;
  }
) => {
  if (!element) return;

  const { delay = 0, duration = 1, y = 50, trigger } = options || {};

  return gsap.from(element, {
    y,
    opacity: 0,
    duration,
    delay,
    ease: "power3.out",
    scrollTrigger: trigger
      ? {
          trigger: typeof trigger === "string" ? trigger : trigger,
          start: "top 80%",
        }
      : undefined,
  });
};

export const staggerFadeIn = (
  elements: HTMLElement[],
  options?: {
    stagger?: number;
    duration?: number;
    y?: number;
  }
) => {
  const { stagger = 0.1, duration = 0.8, y = 30 } = options || {};

  return gsap.from(elements, {
    y,
    opacity: 0,
    duration,
    stagger,
    ease: "power2.out",
  });
};

export const parallaxEffect = (
  element: HTMLElement | null,
  options?: {
    speed?: number;
    trigger?: HTMLElement | string;
  }
) => {
  if (!element) return;

  const { speed = 50, trigger } = options || {};

  return gsap.to(element, {
    y: speed,
    ease: "none",
    scrollTrigger: {
      trigger: trigger || element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

export const textReveal = (element: HTMLElement | null) => {
  if (!element) return;

  const chars = element.textContent?.split("") || [];
  element.innerHTML = chars
    .map(
      (char) =>
        `<span class="inline-block">${char === " " ? "&nbsp;" : char}</span>`
    )
    .join("");

  const charElements = element.querySelectorAll("span");

  return gsap.from(charElements, {
    opacity: 0,
    y: 20,
    rotationX: -90,
    stagger: 0.02,
    duration: 0.6,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
    },
  });
};

export const magneticEffect = (button: HTMLElement) => {
  const handleMouseMove = (e: MouseEvent) => {
    const { left, top, width, height } = button.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    gsap.to(button, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  };

  button.addEventListener("mousemove", handleMouseMove);
  button.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    button.removeEventListener("mousemove", handleMouseMove);
    button.removeEventListener("mouseleave", handleMouseLeave);
  };
};

export const initMagneticButtons = () => {
  const magneticButtons = document.querySelectorAll("[data-magnetic]");
  const cleanups: (() => void)[] = [];

  magneticButtons.forEach((button) => {
    const cleanup = magneticEffect(button as HTMLElement);
    cleanups.push(cleanup);
  });

  return () => cleanups.forEach((cleanup) => cleanup());
};

export { gsap, ScrollTrigger };
