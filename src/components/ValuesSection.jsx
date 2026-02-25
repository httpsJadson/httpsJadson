import React from 'react'

function ValuesSection() {
  const values = [
    {
      icon: '🚀',
      title: 'Inovação',
      description: 'Sempre busco novas formas de resolver problemas e criar soluções criativas.'
    },
    {
      icon: '🤝',
      title: 'Colaboração',
      description: 'Acredito no poder do trabalho em equipe e no compartilhamento de conhecimento.'
    },
    {
      icon: '📈',
      title: 'Crescimento Contínuo',
      description: 'Nunca paro de aprender. A tecnologia evolui rápido e eu também.'
    },
    {
      icon: '❤️',
      title: 'Paixão',
      description: 'Amo o que faço e isso se reflete na qualidade do meu trabalho.'
    },
    {
      icon: '🎯',
      title: 'Foco em Resultados',
      description: 'Trabalho com objetivos claros e me esforço para entregas de qualidade.'
    },
    {
      icon: '🌍',
      title: 'Impacto Social',
      description: 'Busco criar soluções que façam a diferença na vida das pessoas.'
    }
  ]

  return (
    <section className="py-20 bg-brand-dark relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-accent/5 blur-[100px] rounded-full"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-6">Meus Valores</h2>
          <p className="text-gray-300 text-lg">Os princípios que guiam meu trabalho e minha vida</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition animate-fade-in text-center" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-accent rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                {value.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-brand-dark mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection