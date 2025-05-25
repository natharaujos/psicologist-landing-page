import logo from "../../assets/logo-removebg-preview.png";
import { useState } from "react"; // Importando o useState
import { Menu } from "react-feather";
import Title from "../../shared/styles/Title";
import Paragraph from "../../shared/styles/Paragraph";

const TEXT_SIZE = "1.25em";
const TEXT_SIZE_MOBILE = "0.9em";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-bordo fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-8 py-4 md:px-20 md:py-6">
        {/* <div className="hidden lg:flex items-center space-x-8">
          <img src={logo} alt="Logo" className="h-10" />
          <Title color="white" fontSize={TEXT_SIZE}>
            Rafaela Marra
          </Title>
        </div> */}

        <div className="flex items-center space-x-1">
          <img src={logo} alt="Logo" className="h-10" />
          <div className="flex flex-col">
            <p className="text-[0.9em] text-white leading-none font-quicksand">
              Rafaela Marra
            </p>
            <p className="text-[0.7em] text-white leading-none font-quicksand">
              Psicologa Clinica
            </p>
          </div>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#presentation" className="text-white">
            <Title color="white" fontSize={TEXT_SIZE}>
              Home
            </Title>
          </a>
          <a href="#aboutme" className="text-white">
            <Title color="white" fontSize={TEXT_SIZE}>
              {" "}
              Sobre mim
            </Title>
          </a>
          <a href="#footer" className="text-white">
            <Title color="white" fontSize={TEXT_SIZE}>
              {" "}
              Contato
            </Title>
          </a>
        </nav>

        <div className="md:hidden relative">
          <button className="text-white" onClick={toggleMenu}>
            <Menu />
          </button>

          {menuOpen && (
            <div className="absolute -left-[319px] top-[52px] w-screen z-50 animate-fadeInMenu">
              <ul className="bg-bordo text-white flex flex-col space-y-4 p-4">
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
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
