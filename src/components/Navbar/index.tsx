import { useState } from 'react'
import { Menu, X } from 'react-feather' // Mantive react-feather, pois você usava antes
import logo from '../../assets/logo-removebg-preview.png'
import Title from '../../shared/styles/Title'

const TEXT_SIZE = '1.25em'

const navLinks = [
  { label: 'Home', href: '#presentation' },
  { label: 'Sobre mim', href: '#aboutme' },
  { label: 'Contato', href: '#footer' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="bg-bordo fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo e nome */}
        <a href="#presentation" onClick={closeMenu} className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10" />
          <div className="flex flex-col leading-tight">
            <p className="text-white text-[0.9em] font-quicksand">Rafaela Marra</p>
            <p className="text-white text-[0.7em] font-quicksand">Psicóloga Clínica</p>
          </div>
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-12">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-white font-semibold hover:underline transition"
              style={{ fontSize: TEXT_SIZE }}
            >
              <Title className="text-white">{label}</Title>
            </a>
          ))}
        </nav>

        {/* Botão menu mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu mobile aberto */}
      {menuOpen && (
        <nav className="md:hidden bg-bordo px-6 pb-6 animate-fadeInMenu">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="block py-3 text-white font-medium border-b border-white/30 hover:bg-white/10 rounded"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
