export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  caseStudyLink?: string;
  year: number;
}

export interface Tech {
  id: string;
  name: string;
  icon: string;
  color: string;
  category: "frontend" | "backend" | "database" | "tools";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface CursorPosition {
  x: number;
  y: number;
}

export interface ScrollProgress {
  progress: number;
  direction: "up" | "down";
}
