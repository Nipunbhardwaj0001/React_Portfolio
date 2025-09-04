import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/70 backdrop-blur-lg py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Brand */}
        <a
          href="#"
          className="text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          {"<Nipun/>"}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 lg:space-x-12 text-lg font-medium">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-cyan-400 focus:outline-none transition-transform duration-300 hover:scale-110"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-950/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-2xl font-semibold text-gray-200 transform transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
