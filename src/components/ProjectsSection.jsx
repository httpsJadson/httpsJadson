import React from 'react'

function ProjectsSection({ projects, isMobile, showAllProjects, setShowAllProjects }) {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-brand-dark mb-6">Projetos em Destaque</h2>
          <p className="text-gray-600 text-lg">Soluções que criei e que fazem a diferença</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-stretch">
          {projects?.filter(p => p.featured).slice(0, showAllProjects ? projects.filter(p => p.featured).length : (isMobile ? 3 : 6)).map((project, index) => (
            <div key={project.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition animate-fade-in overflow-hidden w-full max-w-sm h-full flex flex-col" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="h-48 bg-gradient-to-br from-brand-blue to-brand-accent flex items-center justify-center text-white text-6xl flex-shrink-0">
                💼
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-accent text-sm font-medium">
                      🌐 Ver Projeto
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-dark text-sm font-medium">
                      📁 GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects?.filter(p => p.featured).length > (isMobile ? 3 : 6) && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-brand-blue hover:bg-brand-accent text-white px-8 py-3 rounded-md font-medium transition shadow-lg shadow-brand-blue/30"
            >
              {showAllProjects ? 'Ver Menos' : `Ver Todos os Projetos (${projects.filter(p => p.featured).length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection