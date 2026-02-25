import React from 'react'

function SkillsSection({ skills }) {
  return (
    <section id="skills" className="py-20 bg-brand-dark relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-accent/5 blur-[100px] rounded-full"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-6">Stack Tecnológica</h2>
          <p className="text-gray-300 text-lg">Tecnologias e ferramentas que domino</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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