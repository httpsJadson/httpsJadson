import React from 'react'

function SkillsSection({ skills }) {
  return (
    <section id="skills" className="py-20 bg-brand-dark relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute bottom-0 right-20 w-80 h-80 bg-cyan-500/40 blur-[130px] rounded-full animate-blob"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/50 blur-[140px] rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-brand-accent/15 blur-[110px] rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <div className="text-center relative z-50 mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-6">Stack Tecnológica</h2>
          <p className="text-gray-300 text-lg">Tecnologias e ferramentas que domino</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 relative z-50 lg:grid-cols-3 gap-8">
          {skills?.map((skillCategory, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{skillCategory.icon}</span>
                <h3 className="font-display text-xl font-bold text-brand-dark">{skillCategory.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillCategory.technologies.map((tech, i) => (
                  <span key={i} className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection