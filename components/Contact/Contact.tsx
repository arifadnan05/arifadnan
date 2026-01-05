"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

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

    gsap.from(formRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
      },
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setStatus("idle"), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          ref={titleRef}
          className="font-display text-4xl md:text-6xl lg:text-display-md font-bold text-center mb-6"
        >
          Let's Create <span className="text-gradient">Together</span>
        </h2>

        <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can bring your vision to
          life.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="glass-effect-strong p-8 md:p-12 rounded-3xl"
        >
          <div className="space-y-6">
            <div className="group">
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-neon-blue transition-colors duration-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-midnight-800/50 border border-white/10 rounded-2xl focus:border-neon-blue focus:outline-none transition-all duration-300 focus:shadow-glow-sm"
                placeholder="Your name"
              />
            </div>

            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-neon-blue transition-colors duration-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-midnight-800/50 border border-white/10 rounded-2xl focus:border-neon-blue focus:outline-none transition-all duration-300 focus:shadow-glow-sm"
                placeholder="your@email.com"
              />
            </div>

            <div className="group">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-neon-blue transition-colors duration-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-4 bg-midnight-800/50 border border-white/10 rounded-2xl focus:border-neon-blue focus:outline-none transition-all duration-300 resize-none focus:shadow-glow-sm"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              data-magnetic
              className="w-full group relative px-8 py-5 glass-effect-strong rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 font-semibold text-lg">
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "sent" && "✓ Message Sent!"}
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-neon-blue via-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </form>

        <div className="mt-16 flex justify-center gap-6">
          {[
            { name: "GitHub", icon: "→", link: "#" },
            { name: "LinkedIn", icon: "→", link: "#" },
            { name: "Twitter", icon: "→", link: "#" },
            { name: "Dribbble", icon: "→", link: "#" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.link}
              data-magnetic
              className="group flex items-center gap-2 px-6 py-3 glass-effect rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm font-medium">{social.name}</span>
              <span className="text-neon-blue group-hover:translate-x-1 transition-transform duration-300">
                {social.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
