import React, { useState, useEffect } from 'react'
import profile from '../profile.json'
import './index.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showAllExperience, setShowAllExperience] = useState(false)
  const [showAllEvents, setShowAllEvents] = useState(false)
  const [showAllCertifications, setShowAllCertifications] = useState(false)

  // Detect mobile screen
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const {
    name,
    title,
    summary,
    bio,
    location,
    photo,
    stats,
    projects,
    skills,
    experience,
    education,
    certifications,
    events,
    contact
  } = profile
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-brand-light text-brand-gray font-sans antialiased overflow-x-hidden">

      {/* Header */}
      <header className="fixed w-full z-50 bg-brand-dark/95 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center text-white font-bold">
                JS
              </div>
              <span className="font-display font-bold text-xl text-white tracking-wide">{name}</span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">Início</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">Sobre</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">Projetos</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">Experiência</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">Contato</button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-brand-dark border-t border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium">Início</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium">Sobre</button>
                <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium">Projetos</button>
                <button onClick={() => scrollToSection('experience')} className="block w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium">Experiência</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium">Contato</button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">

        {/* Hero Section */}
        <section id="home" className="relative bg-brand-dark min-h-[90vh] flex items-center overflow-hidden py-[5rem]">
          {/* Abstract Background Elements */}
          <div className="absolute z-1 top-0 right-0 w-1/2 h-full bg-brand-blue/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-accent/5 blur-[100px] rounded-full"></div>
          

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

                      <div className="w-[300px] md:w-[400px] bg-gradient-to-br from-brand-blue to-brand-accent rounded-2xl flex items-center justify-center text-white shadow-2xl  mx-auto">
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

        {/* Stats Section */}
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

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl font-bold text-brand-dark mb-6">Sobre Mim</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {bio}
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
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

        {/* Projects Section */}
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

        {/* Experience Section */}
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

        {/* Events Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-brand-dark mb-6">Eventos & Participações</h2>
              <p className="text-gray-600 text-lg">Minha presença na comunidade tech</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events?.slice(0, showAllEvents ? events.length : (isMobile ? 3 : 6)).map((event, index) => (
                <div key={index} className="bg-brand-light rounded-xl p-6 hover:shadow-md transition animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                      {event.type === 'Palestra' && '🎤'}
                      {event.type === 'Hackathon' && '💻'}
                      {event.type === 'Meetup' && '👥'}
                      {event.type === 'Workshop' && '🛠️'}
                      {event.type === 'Congresso' && '🎓'}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-brand-dark mb-1">{event.title}</h3>
                      <p className="text-brand-blue text-sm font-medium mb-2">{event.role} • {event.organization}</p>
                      <p className="text-gray-600 text-sm mb-2">{event.location} • {event.date}</p>
                      <p className="text-gray-600 text-sm">{event.description}</p>
                      {event.achievement && (
                        <div className="mt-2 inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                          🏆 {event.achievement}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {events?.length > (isMobile ? 3 : 6) && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAllEvents(!showAllEvents)}
                  className="bg-brand-blue hover:bg-brand-accent text-white px-8 py-3 rounded-md font-medium transition shadow-lg shadow-brand-blue/30"
                >
                  {showAllEvents ? 'Ver Menos' : `Ver Todos os Eventos (${events.length})`}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Certifications Section */}
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

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-brand-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold mb-6">Vamos Conversar?</h2>
              <p className="text-gray-400 text-lg">Estou sempre aberto a novas oportunidades e colaborações</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-6">Entre em Contato</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-brand-blue text-xl">📧</span>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-400">{contact?.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-brand-blue text-xl">📱</span>
                      <div>
                        <p className="font-medium">Telefone</p>
                        <p className="text-gray-400">{contact?.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-brand-blue text-xl">📍</span>
                      <div>
                        <p className="font-medium">Localização</p>
                        <p className="text-gray-400">{contact?.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-4">Redes Sociais</h4>
                  <div className="flex gap-4">
                    {contact?.social?.linkedin && (
                      <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-brand-blue rounded-lg flex items-center justify-center transition">
                        <span className="text-lg">💼</span>
                      </a>
                    )}
                    {contact?.social?.github && (
                      <a href={contact.social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-brand-blue rounded-lg flex items-center justify-center transition">
                        <span className="text-lg">📁</span>
                      </a>
                    )}
                    {contact?.social?.twitter && (
                      <a href={contact.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-brand-blue rounded-lg flex items-center justify-center transition">
                        <span className="text-lg">🐦</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold mb-6">Pronto para começar um projeto?</h3>
                <p className="text-gray-400 mb-6">
                  Seja para desenvolvimento de aplicações web, tecnologias assistivas ou consultoria técnica,
                  estou aqui para ajudar sua ideia se tornar realidade.
                </p>
                <button className="w-full bg-brand-blue hover:bg-brand-accent text-white font-bold py-3 rounded-lg transition shadow-lg">
                  Iniciar Conversa
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 {name}. Desenvolvido com ❤️ usando React & Tailwind CSS
          </p>
        </div>
      </footer>

    </div>
  )
}

export default App