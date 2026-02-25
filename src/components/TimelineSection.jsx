import React from 'react'

function TimelineSection() {
  const timelineItems = [
    {
      year: '2023',
      title: 'Início da Jornada',
      description: 'Descobri a programação e comecei meus estudos em desenvolvimento web.',
      icon: '🚀'
    },
    {
      year: '2024',
      title: 'Primeiro Projeto',
      description: 'Desenvolvi meu primeiro projeto profissional e entrei no mercado de trabalho.',
      icon: '💼'
    },
    {
      year: '2025',
      title: 'Especialização',
      description: 'Aprofundei meus conhecimentos em tecnologias modernas e metodologias ágeis.',
      icon: '📚'
    },
    {
      year: '2026',
      title: 'Crescimento Contínuo',
      description: 'Continuo evoluindo, aprendendo novas tecnologias e contribuindo para a comunidade.',
      icon: '🌟'
    }
  ]

  return (
    <section className="py-20 bg-brand-dark relative">
      {/* Abstract Background Elements */}
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-teal-500/25 blur-[130px] rounded-full animate-float-reverse" style={{animationDelay: '0.3s'}}></div>
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-violet-500/20 blur-[120px] rounded-full animate-blob"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-brand-blue/15 blur-[100px] rounded-full animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-6">Minha Jornada</h2>
          <p className="text-gray-300 text-lg">A evolução da minha carreira em tecnologia</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-brand-blue h-full hidden md:block"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div className="text-brand-blue font-bold text-lg">{item.year}</div>
                    </div>
                    <h3 className="font-display text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-blue rounded-full border-4 border-brand-dark z-10"></div>

                {/* Spacer for mobile */}
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimelineSection