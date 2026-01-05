"use client";

import { useState, useEffect } from "react";
import type { CursorPosition } from "@/types";

export const useMouse = () => {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export const useMouseNormalized = () => {
  const [normalizedPosition, setNormalizedPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setNormalizedPosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return normalizedPosition;
};
