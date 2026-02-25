import React from 'react'

function Header({ name, isMenuOpen, setIsMenuOpen, scrollToSection }) {
  return (
    <header className="fixed w-full z-[9999] bg-brand-dark/95 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center text-white font-bold">
              JS
            </div>
            <span className="font-display font-bold text-xl text-white tracking-wide">{name}</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">Início</button>
            <button onClick={() => scrollToSection('stats')} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">Sobre</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">Projetos</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">Experiência</button>
            <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">Educação</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">Contato</button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-brand-dark border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium">Início</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium">Sobre</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium">Projetos</button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium">Experiência</button>
              <button onClick={() => scrollToSection('education')} className="block w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium">Educação</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium">Contato</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header