import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Neural Art Gallery",
    description:
      "An immersive 3D art gallery powered by AI-generated artworks with real-time interactions",
    image: "/images/project-1.jpg",
    tags: ["Next.js", "Three.js", "WebGL", "AI"],
    link: "https://example.com",
    caseStudyLink: "/case-study/neural-art",
    year: 2024,
  },
  {
    id: "2",
    title: "Quantum Dashboard",
    description:
      "Real-time analytics platform with advanced data visualization and predictive insights",
    image: "/images/project-2.jpg",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    link: "https://example.com",
    caseStudyLink: "/case-study/quantum-dashboard",
    year: 2024,
  },
  {
    id: "3",
    title: "Cyber Commerce",
    description:
      "Next-gen e-commerce platform with AR product previews and immersive shopping experience",
    image: "/images/project-3.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "AR.js"],
    link: "https://example.com",
    caseStudyLink: "/case-study/cyber-commerce",
    year: 2023,
  },
  {
    id: "4",
    title: "Motion Studio",
    description:
      "Creative portfolio platform for animators with interactive timeline and real-time collaboration",
    image: "/images/project-4.jpg",
    tags: ["React", "GSAP", "WebSockets", "MongoDB"],
    link: "https://example.com",
    year: 2023,
  },
];
