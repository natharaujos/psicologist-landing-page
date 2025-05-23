import logo from "../../assets/logo-removebg-preview.png";
import { useState } from "react"; // Importando o useState
import { Menu } from "react-feather";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-bordo">
      <div className="flex justify-between items-center px-8 py-4 md:px-20 md:py-6">
        <img src={logo} alt="Logo" className="h-8" />

        <nav className="hidden md:flex space-x-8">
          <a href="#presentation" className="text-white">
            Home
          </a>
          <a href="#aboutme" className="text-white">
            Sobre mim
          </a>
          <a href="#footer" className="text-white">
            Contato
          </a>
        </nav>

        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <Menu />
          </button>

          <ul
            className={`${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-0"
            } absolute bg-bordo text-white flex flex-col space-y-4 p-4 w-full left-0 top-16 transition-all duration-500 ease-in-out`}
          >
            <li>
              <a href="#presentation" className="block">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutme" className="block">
                Sobre mim
              </a>
            </li>
            <li>
              <a href="#footer" className="block">
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
