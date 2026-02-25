import React from 'react'

function ExperienceSection({ experience, isMobile, showAllExperience, setShowAllExperience }) {
  return (
    <section id="experience" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-brand-dark mb-6">Experiência Profissional</h2>
          <p className="text-gray-600 text-lg">Minha trajetória no mercado de tecnologia</p>
        </div>

        <div className="space-y-8">
          {experience?.slice(0, showAllExperience ? experience.length : (isMobile ? 3 : 6)).map((exp, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-dark mb-1">{exp.position}</h3>
                  <p className="text-brand-blue font-medium">{exp.company}</p>
                </div>
                <div className="text-right text-sm text-gray-500 mt-2 md:mt-0">
                  <div>{exp.period}</div>
                  <div>{exp.duration}</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">{exp.description}</p>
              {exp.achievements && (
                <div className="mb-4">
                  <h4 className="font-semibold text-brand-dark mb-2">Principais Conquistas:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {experience?.length > (isMobile ? 3 : 6) && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllExperience(!showAllExperience)}
              className="bg-brand-blue hover:bg-brand-accent text-white px-8 py-3 rounded-md font-medium transition shadow-lg shadow-brand-blue/30"
            >
              {showAllExperience ? 'Ver Menos' : `Ver Toda Experiência (${experience.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ExperienceSection