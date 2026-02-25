import React from 'react'

function EducationSection({ education, isMobile, showAllEducation, setShowAllEducation }) {
  return (
    <section id="education" className="py-20 bg-brand-dark relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/50 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-accent/5 blur-[100px] rounded-full"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-6">Formação Acadêmica</h2>
          <p className="text-gray-300 text-lg">Minha trajetória educacional e qualificações</p>
        </div>

        <div className="space-y-8 relative z-50">
          {education?.slice(0, showAllEducation ? education.length : (isMobile ? 3 : 6)).map((edu, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-dark mb-1">{edu.degree}</h3>
                  <p className="text-brand-blue font-medium">{edu.institution}</p>
                  <p className="text-gray-600 text-sm">{edu.location}</p>
                </div>
                <div className="text-right text-sm text-gray-500 mt-2 md:mt-0">
                  <div>{edu.period}</div>
                  <div className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                    edu.status === 'Concluído' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {edu.status}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-brand-blue/50 text-brand-blue px-3 py-1 rounded-full text-sm font-medium">
                  {edu.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {education?.length > (isMobile ? 3 : 6) && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllEducation(!showAllEducation)}
              className="bg-brand-blue hover:bg-brand-accent text-white px-8 py-3 rounded-md font-medium transition shadow-lg shadow-brand-blue/30"
            >
              {showAllEducation ? 'Ver Menos' : `Ver Toda Formação (${education.length})`}
            </button>
          </div>
        )}
      </div>

      {/* Smooth Transition to Events Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-brand-dark/50 to-brand-dark"></div>
    </section>
  )
}

export default EducationSection