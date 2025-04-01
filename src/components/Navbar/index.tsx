import logo from "../../assets/logo-removebg-preview.png";
import React, { useState } from "react"; // Importando o useState

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterando o estado do menu
  };

  return (
    <header className="bg-bordo">
      <div className="flex justify-between items-center px-8 py-4 md:px-48 md:py-6">
        <img src={logo} alt="Logo" className="h-8" />

        {/* Menu para telas grandes */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#sobre" className="text-white">
            Sobre mim
          </a>
          <a href="#contato" className="text-white">
            Contato
          </a>
        </nav>

        {/* Menu para telas pequenas */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            Menu
          </button>

          {/* Menu de navegação para mobile */}
          <ul
            className={`${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-0"
            } absolute bg-bordo text-white flex flex-col space-y-4 p-4 w-full left-0 top-16 transition-all duration-500 ease-in-out`}
          >
            <li>
              <a href="#" className="block">
                Home
              </a>
            </li>
            <li>
              <a href="#sobre" className="block">
                Sobre mim
              </a>
            </li>
            <li>
              <a href="#contato" className="block">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
