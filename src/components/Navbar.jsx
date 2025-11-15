import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // tutup menu mobile setelah klik
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 shadow-sm py-1 md:py-4 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-purple-500">
            Portfolio<span className="text-accent text-white">.</span>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("home")} className="hover:text-purple-500 text-white transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-purple-500 text-white transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("skills")} className="hover:text-purple-500 text-white transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection("about")} className="hover:text-purple-500 text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-purple-500 text-white transition-colors">
              Contact
            </button>
          </div>

          {/* Toggle button mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white focus:outline-none"
            >
              {isOpen ? (
                <i className="fas fa-times text-xl"></i>
              ) : (
                <i className="fas fa-bars text-xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("home")} className="py-2 hover:text-purple-500">
                Home
              </button>
              <button onClick={() => scrollToSection("projects")} className="py-2 hover:text-purple-500">
                Projects
              </button>
              <button onClick={() => scrollToSection("skills")} className="py-2 hover:text-purple-500">
                Skills
              </button>
              <button onClick={() => scrollToSection("about")} className="py-2 hover:text-purple-500">
                About
              </button>
              <button onClick={() => scrollToSection("contact")} className="py-2 hover:text-purple-500">
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
