import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevFolio - Creative Developer Portfolio",
  description:
    "Immersive portfolio showcasing creative web development with Next.js, Three.js, and GSAP",
  keywords: [
    "portfolio",
    "web developer",
    "creative developer",
    "Next.js",
    "Three.js",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="cursor-none lg:cursor-auto">{children}</body>
    </html>
  );
}
