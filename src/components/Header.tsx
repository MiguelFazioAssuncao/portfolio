"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const translations = {
    pt: {
      links: [
        { label: "Inicio", href: "#inicio" },
        { label: "Sobre", href: "#sobre" },
        { label: "Habilidades", href: "#habilidades" },
        { label: "Projetos", href: "#projetos" },
        { label: "Contato", href: "#contato" },
      ],
    },
    en: {
      links: [
        { label: "Home", href: "#inicio" },
        { label: "About", href: "#sobre" },
        { label: "Skills", href: "#habilidades" },
        { label: "Projects", href: "#projetos" },
        { label: "Contact", href: "#contato" },
      ],
    },
  };

  const links = translations[language].links;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f111580] backdrop-blur-md text-white shadow-md transition-all duration-700">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-3xl font-extrabold text-[#3d9df3] tracking-wide">
          MF
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-base font-medium">
            {links.map(({ label, href }) => (
              <li
                key={label}
                className="cursor-pointer relative group transition duration-300"
              >
                <a href={href} className="group-hover:text-[#3d9df3] transition">
                  {label}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#3d9df3] group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-[#3d9df3] hover:bg-[#2d8de3] text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="Toggle language"
          >
            {language === "pt" ? "EN" : "PT"}
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Slide + Styled */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full px-6 transition-all duration-500 ease-in-out ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col bg-[#1a1d22] border border-[#3d9df3]/30 rounded-xl shadow-lg p-6 gap-4 text-base font-medium">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block w-full text-white hover:text-[#3d9df3] px-2 py-2 rounded-md transition-colors duration-300"
              >
                {label}
              </a>
              {label !== links[links.length - 1].label && (
                <div className="h-px bg-[#3d9df3]/10 my-1" />
              )}
            </li>
          ))}

          {/* Mobile Language Toggle Button */}
          <li className="pt-2">
            <button
              onClick={toggleLanguage}
              className="w-full px-4 py-2 bg-[#3d9df3] hover:bg-[#2d8de3] text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Toggle language"
            >
              {language === "pt" ? "Switch to English" : "Mudar para Português"}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
