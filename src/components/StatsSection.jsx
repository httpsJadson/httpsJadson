import React from 'react'

function StatsSection({ stats }) {
  return (
    <div id="stats" className="border-b border-gray-200 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-brand-dark mb-2">{stats?.projectsCompleted || 15}+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">Projetos Completados</div>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="text-3xl font-bold text-brand-dark mb-2">{stats?.yearsExperience || 3}+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">Anos de Experiência</div>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="text-3xl font-bold text-brand-dark mb-2">{stats?.technologies || 20}+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">Tecnologias</div>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="text-3xl font-bold text-brand-dark mb-2">{stats?.certifications || 6}</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">Certificações</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsSection