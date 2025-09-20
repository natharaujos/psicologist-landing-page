import { useState } from "react";
import { Menu, X } from "react-feather";
import logo from "../../assets/logo-removebg-preview.png";

const navLinks = [
  { label: "Home", href: "#presentation" },
  { label: "Sobre mim", href: "#aboutme" },
  { label: "Contato", href: "#footer" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-bordo/95 shadow-lg backdrop-blur-sm w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-10 py-4">
        {/* Logo e nome */}
        <a
          href="#presentation"
          onClick={closeMenu}
          className="flex items-center space-x-3 group"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-10 transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col leading-tight">
            <p className="text-white text-[0.95em] font-quicksand font-semibold">
              Rafaela Marra
            </p>
            <p className="text-white/90 text-[0.75em] font-quicksand">
              Psicóloga Clínica
            </p>
          </div>
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="relative text-white font-semibold uppercase tracking-wide text-sm transition group"
            >
              {label}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Botão menu mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu mobile aberto */}
      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-bordo/95 px-6 py-6 shadow-lg animate-fadeInMenu">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="block py-3 text-white font-medium text-lg rounded-lg hover:bg-white/10 transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
