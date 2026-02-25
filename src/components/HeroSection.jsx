import React from 'react'

function HeroSection({ name, title, summary, photo, scrollToSection }) {
  return (
    <section id="home" className="relative bg-brand-dark min-h-[90vh] flex items-center overflow-hidden py-[5rem]">
      {/* Abstract Background Elements */}
      <div className="absolute z-1 top-10 right-20 w-96 h-96 bg-brand-blue/50 blur-[150px] rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-brand-accent/60 blur-[120px] rounded-full animate-float-reverse"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/25 blur-[140px] rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up order-1 lg:order-2">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/40 text-blue-300 text-sm font-semibold mb-4">
              👋 Olá, eu sou {name}
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-white font-bold mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              {summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('projects')} className="bg-brand-blue hover:bg-brand-accent text-white px-8 py-3 rounded-md font-medium transition shadow-lg shadow-brand-blue/30">
                Ver Meus Projetos
              </button>
              <button onClick={() => scrollToSection('about')} className="border border-gray-600 hover:border-brand-blue text-gray-300 hover:text-white px-8 py-3 rounded-md font-medium transition">
                Sobre Mim
              </button>
            </div>
          </div>

          <div className="animate-slide-up z-99 order-2 lg:order-1" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative">
                  <div className="w-[300px] md:w-[400px] bg-gradient-to-br from-brand-blue to-brand-accent rounded-2xl flex items-center justify-center text-white shadow-2xl mx-auto">
                    <img src={photo} alt="Jadson Silva" className='rounded-2xl' />
                    <p className="absolute bottom-4 left-10 text-white text-xl font-semibold shadow-2xl">Jadson Silva</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection