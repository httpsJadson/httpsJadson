import React from 'react'

function CertificationsSection({ certifications, isMobile, showAllCertifications, setShowAllCertifications }) {
  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-brand-dark mb-6">Certificações</h2>
          <p className="text-gray-600 text-lg">Credenciais que validam meu conhecimento</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications?.slice(0, showAllCertifications ? certifications.length : (isMobile ? 3 : 6)).map((cert, index) => (
            <div key={cert.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-accent rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                🏆
              </div>
              <h3 className="font-bold text-brand-dark mb-2">{cert.title}</h3>
              <p className="text-brand-blue font-medium text-sm mb-2">{cert.issuer}</p>
              {cert.date && <p className="text-gray-500 text-sm mb-3">{cert.date}</p>}
              {cert.duration && <p className="text-gray-500 text-sm mb-3">Duração: {cert.duration}</p>}
              {cert.url && (
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-accent text-sm font-medium">
                  📄 Ver Certificado →
                </a>
              )}
            </div>
          ))}
        </div>

        {certifications?.length > (isMobile ? 3 : 6) && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllCertifications(!showAllCertifications)}
              className="bg-brand-blue hover:bg-brand-accent text-white px-8 py-3 rounded-md font-medium transition shadow-lg shadow-brand-blue/30"
            >
              {showAllCertifications ? 'Ver Menos' : `Ver Todas as Certificações (${certifications.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default CertificationsSection