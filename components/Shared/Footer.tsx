"use client";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              <span className="text-gradient">DevFolio</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Crafting digital experiences that inspire and engage.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-neon-blue">Quick Links</h4>
            <ul className="space-y-2">
              {["Work", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-neon-blue">Connect</h4>
            <ul className="space-y-2">
              {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} DevFolio. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Designed & Built with{" "}
            <span className="text-neon-blue">Next.js</span> &{" "}
            <span className="text-neon-purple">Three.js</span>
          </p>
        </div>
      </div>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-32 h-32 bg-linear-to-r from-neon-blue to-neon-purple rounded-full blur-3xl opacity-20" />
      </div>
    </footer>
  );
};
